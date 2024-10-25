let table=document.getElementById("table")  










if(navigator.geolocation)
{
  
navigator.geolocation.getCurrentPosition(

  function gh(p){

 let locx=p.coords.latitude;
 let locy=p.coords.longitude;







let apiUrl=`https://api.aladhan.com/v1/timings?latitude=${locx}&longitude=${locy}`;
console.log(locx)
if(locx!=null){
async function g(){

  const res=await fetch(apiUrl)
const data=await res.json()
let datehij=data.data.date.hijri.date;
let datemaldy=data.data.date.readable

console.log(data)
const tim=data.data.timings;
console.log(tim)
console.log(datehij)
console.log(datemaldy)

let dd=document.getElementById("date")

dd.innerHTML=`

<div class="pre">
  <p>التاريخ الهجري</p>
  <p>${datehij}</p>
</div>
<div>

  <h3 class="to"  id="bas">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h3>
</h2>

</div>
<div class="pre">
  <p>التاريخ الملادي</p>
  <p>${datemaldy}</p>
</div>

`


table.innerHTML=`

   <tr class="u">
      <td class="uu">
        <p class="pe">الفجر</p>
        <p>${tim.Fajr}</p>
      </td>
      <td>
        <p class="pe">الشروق</p>
        <p>${tim.Sunrise}</p>
      </td>
      <td>
        <p class="pe">الظهر</p>
        <p>${tim.Dhuhr}</p>
      </td>
      <td>
        <p class="pe">العصر</p>
        <p>${tim.Asr}</p>
      </td>
      <td>
        <p class="pe">المغرب</p>
        <p>${tim.Maghrib}</p>
      </td>
      <td>
        <p class="pe">العشاء</p>
        <p>${tim.Isha}</p>

      </td>
</tr>

`

}
g()
  }
},async function k(error){
 let locx= 29.91667;
 let  locy= 31.2
 let apiUrl=`https://api.aladhan.com/v1/timings?latitude=${locx}&longitude=${locy}`;
 console.log(locx)
 
   const res=await fetch(apiUrl)
 const data=await res.json()
 let datehij=data.data.date.hijri.date;
 let datemaldy=data.data.date.readable
 
 console.log(data)
 const tim=data.data.timings;
 console.log(tim)
 console.log(datehij)
 console.log(datemaldy)
 
 let dd=document.getElementById("date")
 
 dd.innerHTML=`
 
 <div class="pre">
   <p>التاريخ الهجري</p>
   <p>${datehij}</p>
 </div>
 <div>
 
   <h3 class="to"  id="bas">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h3>
 </h2>
 
 </div>
 <div class="pre">
   <p>التاريخ الملادي</p>
   <p>${datemaldy}</p>
 </div>
 
 `
 
 
 table.innerHTML=`
 
    <tr class="u">
       <td class="uu">
         <p class="pe">الفجر</p>
         <p>${tim.Fajr}</p>
       </td>
       <td>
         <p class="pe">الشروق</p>
         <p>${tim.Sunrise}</p>
       </td>
       <td>
         <p class="pe">الظهر</p>
         <p>${tim.Dhuhr}</p>
       </td>
       <td>
         <p class="pe">العصر</p>
         <p>${tim.Asr}</p>
       </td>
       <td>
         <p class="pe">المغرب</p>
         <p>${tim.Maghrib}</p>
       </td>
       <td>
         <p class="pe">العشاء</p>
         <p>${tim.Isha}</p>
 
       </td>
 </tr>
 
 `
 
 }




)}
//k()





















let ts=document.getElementById("ts")
let con=document.getElementById("con")
let b1=document.getElementById("b1")
let b2=document.getElementById("b2")
b1.onclick=()=>{


  ts.style.display="block"

  con.style.display="none"
}

 let h=document.getElementById("t1")


// let b2=document.getElementById("b2")


 let de=document.getElementById("display")
let bn=document.getElementById("bn")
let bn3=document.getElementById("bn3")
let bn2=document.getElementById("bn2")
bn3.onclick=()=>{
  localStorage.setItem("pp",de.innerHTML)
  de.innerHTML=localStorage.pp
}
onload=()=>{  if(de.innerHTML==0)
if(de.innerHTML==undefined)
{
  de.innerHTML=0
}
else{  de.innerHTML=localStorage.pp}

}

bn2.onclick=()=>{
  de.innerHTML=0
  localStorage.setItem("pp",de.innerHTML)

}

let kk=document.getElementById("kk")

bn.onclick=function ()
{

 de.innerHTML-=-1

}
let bas=document.getElementById("bas")
let root=document.documentElement
bas.onclick=function () {
root.style.setProperty("--color",' #420074')
  root.style.setProperty("--background-color",'rgb(0, 0, 0)')
  root.style.setProperty("--color2",'white')
  lo.style.cssText=`filter: invert(0);
  `
}
let lo=document.getElementById("lo")
lo.onclick=()=>{location.reload()}
//https://json.link/5a6Wf0XswT.json
//let ts=document.getElementById("ts")
//ts.innerHTML+=``
b2.onclick=()=>{
  kk.style.display="flex"
document.body.style.backgroundColor="black"
  con.style.display="none"

}
