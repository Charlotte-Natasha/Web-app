var button = document.getElementById('btn');
button.addEventListener('click', (e)=>{
    e.preventDefault();
    let dateOfBirth=document.getElementById('date').value; 
   let gender = document.forms['details'].gender.value
   console.log(gender);
} );