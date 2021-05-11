function dosubmit()
{
    let place=document.getElementById('place').value;
    let a=[];
    a[0]=document.getElementById('ambulance');
    a[1]=document.getElementById('hospital');
    a[2]=document.getElementById('bed');
    a[3]=document.getElementById('icu');
    a[4]=document.getElementById('oxygen');
    a[5]=document.getElementById('ventilator');
    a[6]=document.getElementById('rtpcr');
    a[7]=document.getElementById('remdesivir');
    a[8]=document.getElementById('fabiflu');
    a[9]=document.getElementById('favipiravir');
    a[10]=document.getElementById('tocilizumab');
    a[11]=document.getElementById('plasma');
    a[12]=document.getElementById('vaccine');
    let other=document.getElementById('other');
 
    let All=`https://twitter.com/search?q=${place}+%28`;
    
    for( let i=0; i< a.length; i++)
    {
        if(a[i].checked !== false)
        {
            All=`${All}+OR+${a[i].value}+OR+${a[i].value}s`;
        }
    }

    if(a[6].checked !== false)
       {
            All=`${All}+OR+RT-PCR`;
       } 
    
    if((other.value !== null) && (other.value !== 'undefined') && (other.value !== ""))
       {
            All=`${All}+OR+${other.value}+OR+${other.value}s`;
       } 
    
    window.location.href=`${(All.replace("+OR+",""))}%29&f=live`;
}