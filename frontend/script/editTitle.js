document.addEventListener("DOMContentLoaded", function () {
  var titleElement = document.querySelector('.title');


      titleElement.setAttribute('contenteditable', 'true');
    

      if (localStorage.getItem('editableTitle')) {
          titleElement.textContent = localStorage.getItem('editableTitle');
      }

      titleElement.addEventListener('input', function () {
          localStorage.setItem('editableTitle', titleElement.textContent);
      });
  
});
