function dosubmit()
{
    let place=document.getElementById('place').value;
    let a=[];
    a[0]=document.getElementById('bed');
    a[1]=document.getElementById('icu');
    a[2]=document.getElementById('oxygen');
    a[3]=document.getElementById('ventilator');
    a[4]=document.getElementById('rtpcr');
    a[5]=document.getElementById('fabiflu');
    a[6]=document.getElementById('remdesivir');
    a[7]=document.getElementById('favipiravir');
    a[8]=document.getElementById('tocilizumab');
    a[9]=document.getElementById('plasma');
    a[10]=document.getElementById('ambulance');
    a[11]=document.getElementById('hospital');
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
    
    if((other.value !== null) && (other.value !== 'undefined') && (other.value !== ""))
       {
            All=`${All}+OR+${other.value}+OR+${other.value}s`;
       } 
    
    window.location.href=`${(All.replace("+OR+",""))}%29&f=live`;
}