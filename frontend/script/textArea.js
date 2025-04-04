let element = document.getElementById('test_area');

element.addEventListener("keyup",Backup);


function Backup(e){

  localStorage.setItem("backup",JSON.stringify(e.target.value));
}



document.addEventListener("DOMContentLoaded", function () {
  try{
    document.getElementById("test_area").value=JSON.parse(localStorage.getItem("backup"))

  }catch(e){
    console.log(e);

  }
 
});