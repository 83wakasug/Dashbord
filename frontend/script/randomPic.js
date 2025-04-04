var urls = [
  'url(./img/0.jpg)',
  'url(./img/1.jpg)',
  'url(./img/2.jpg)',
  'url(./img/3.jpg)',
  'url(./img/4.jpg)',
  'url(./img/5.jpg)',
  'url(./img/6.jpg)',
  'url(./img/7.jpg)',
  'url(./img/8.jpg)',
  'url(./img/9.jpg)'
];





function changeImage(){
  try{ 
    
    var active = Math.floor(Math.random() * (urls.length));
    document.body.style.backgroundImage = urls[active];
    
  }catch(error){
        console.log(error);
  }
 
}

document.getElementById('screen').addEventListener('click',changeImage);
