function clock24Hours()
{
var date=new Date()
var hh=date.getHours()
var mm=date.getMinutes()
var ss=date.getSeconds()
var dd=date.getDate()
var mo=date.getMonth()
var yy=date.getFullYear()
var day=date.getDay()
if (mo==0)
{
    mo="Jan"
}
else if (mo==1)
{
    mo="Feb"
}
else if(mo==2)
{
    mo="Mar"
}
else if(mo==3)
{
    mo="Apr"
}
else if(mo==4)
{
    mo="May"
}
else if(mo==5)
{
    mo="Jun"
}
else if(mo==6)
{
    mo="Jul"
}
else if(mo==7)
{
    mo="Aug"
}
else if(mo==8)
{
    mo="Sep"
}
else if(mo==9)
{
    mo="Oct"
}
else if(mo==10)
{
    mo="Nov"
}
else
{
    mo="Dec"
}
switch(day)
{
    case 0:day="Sunday"
    break;
    case 1:day="Monday"
    break;
    case 2:day="Tuesday"
    break;
    case 3:day="Wednesday"
    break;
    case 4:day="Thursday"
    break;
    case 5:day="Friday"
    break;
    case 6:day="Saturday"
    break;
}
   document.getElementById("time1").innerHTML=`${hh}:${mm}`
   document.getElementById("date1").innerHTML=`${dd}/${mo}/${yy}`
   document.getElementById("day1").innerHTML=`${day}`
   document.getElementById("sec1").innerHTML=`${ss}`
   var setTime=setTimeout(clock24Hours,1000)
}
//clock24Hours()

function clock12Hours()
{
    var date=new Date()
var hh=date.getHours()
var mm=date.getMinutes()
var ss=date.getSeconds()
var dd=date.getDate()
var mo=date.getMonth()
var yy=date.getFullYear()
var day=date.getDay()
if (mo==0)
{
    mo="Jan"
}
else if (mo==1)
{
    mo="Feb"
}
else if(mo==2)
{
    mo="Mar"
}
else if(mo==3)
{
    mo="Apr"
}
else if(mo==4)
{
    mo="May"
}
else if(mo==5)
{
    mo="Jun"
}
else if(mo==6)
{
    mo="Jul"
}
else if(mo==7)
{
    mo="Aug"
}
else if(mo==8)
{
    mo="Sep"
}
else if(mo==9)
{
    mo="Oct"
}
else if(mo==10)
{
    mo="Nov"
}
else
{
    mo="Dec"
}
switch(day)
{
    case 0:day="Sunday"
    break;
    case 1:day="Monday"
    break;
    case 2:day="Tuesday"
    break;
    case 3:day="Wednesday"
    break;
    case 4:day="Thursday"
    break;
    case 5:day="Friday"
    break;
    case 6:day="Saturday"
    break;
}
   var am_pm="AM"
   if (hh>=12)
   {
       am_pm="PM"
       if (hh>=13)
       {
           hh-=12;
       }
   }
   if (hh==0)
   {
       hh=12;
   }

   document.getElementById("time2").innerHTML=`${hh}:${mm} ${am_pm}`
   document.getElementById("date2").innerHTML=`${dd}/${mo}/${yy}`
   document.getElementById("day2").innerHTML=`${day}`
   document.getElementById("sec2").innerHTML=`${ss}`
   var setTime=setTimeout(clock12Hours,1000)
}
//clock12Hours()

function changeFormat(status)
{
    if (status=='12hrs Format')
    {
        document.getElementById("but").value="24hrs Format"
        document.getElementById("Container12").style.display="flex"
        document.getElementById("Container24").style.display="none"
        clock12Hours()
    }
    else
    {
        document.getElementById("but").value="12hrs Format"
        document.getElementById("Container12").style.display="none"
        document.getElementById("Container24").style.display="flex"
        clock24Hours()
    }
}