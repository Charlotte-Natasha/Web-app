var button = document.getElementById('btn');
button.addEventListener('click', (e)=>{
    e.preventDefault();
    let dateOfBirth=document.getElementById('date').value; 
   let gender = document.forms['details'].gender.value
   console.log(gender);
   //checking date validity
   console.log(dateOfBirth);
   if (parseInt(dateOfBirth.slice(5, 7))<= 12 && parseInt(dateOfBirth.slice(8, 10))<= 31){
    let dOb= new Date(dateOfBirth)
    let dd= dOb.getDay()
    console.log(dd);
    //Assigning the Akan names.
    let akanName = '';
    if(dd === 0){
        (gender == 'Female') ? akanName = 'Akosua' : akanName = 'Kwasi'
    }   
    else if (dd === 1){
        (gender == 'Female') ? akanName = 'Adwao' : akanName = 'Kwadwo'
    }
    else if (dd === 2){
        (gender == 'Female') ? akanName = 'Abenaa' : akanName = 'Kwabena'
    }
    else if (dd === 3){
        (gender == 'Female') ? akanName = 'Akua' : akanName = 'Kwaku'
    }
    else if (dd === 4){
        (gender == 'Female') ? akanName = 'Yaa' : akanName = 'Yaw'
    }
    else if (dd === 5){
        (gender == 'Female') ? akanName = 'Afua' : akanName = 'Kofi'
    }
    else if (dd === 6){
        (gender == 'Female') ? akanName = 'Ama' : akanName = 'Kwame'
    }
else {

}
console.log (akanName);
let detailLog=document.getElementById('select')
detailLog.innerHTML=`
<p> Your Akan name is : ${akanName}</p>
`
   } 
   else {
       alert('You have entered invalid date/month.')
   }



} );



