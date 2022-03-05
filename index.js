var button = document.getElementById('btn');
button.addEventListener('click', (e)=>{
    e.preventDefault();
    let dateOfBirth=document.getElementById('date').value; 
   let gender = document.forms['details'].gender.value
   //checking date validity
   console.log(dateOfBirth);
   if (parseInt(dateOfBirth.slice(5, 7))<= 12 && parseInt(dateOfBirth.slice(8, 10))<= 31){
    let dOb= new Date(dateOfBirth)
    let dd= dOb.getDay()
    console.log(dd);   

   } 
   else {
       alert('You have entered invalid date/month.')
   }



} );



