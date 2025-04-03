// Add event listener to the 'add_link' button to trigger clickAddLink function when clicked
document.getElementById('add_link').addEventListener('click', clickAddLink);

// Function to create and display the link addition form
function clickAddLink() {

  try{
    let div = createDiv(); // Create a new div element for the form
    div.className = "div_dialog"; // Add class to the div
    let form = document.querySelector(".link_form"); // Check if the form already exists
  
    // If the form already exists, do not create a new one
    if (form) {
      return;
    }
  
    // Create the HTML structure of the form
    div.innerHTML = `
      <form id="linkForm" class="link_form">
        <p class="text1">Add Link</p>
        <p class="text1">Title</p>
        <input type="text" name="title">
        <p class="text1">URL</p>
        <input type="text" name="URL">
        <div class="button">
          <button id="add" type="submit">Add</button>
          <button id="cancel" type="button">Cancel</button>
        </div>
      </form>
    `;
  
    // Append the form to the document body
    document.body.appendChild(div);
    // Add event listeners to handle form submission and cancel button click
    document.getElementById('linkForm').addEventListener('submit', add);
    document.getElementById('cancel').addEventListener('click', function () {
      div.remove(); // Remove the form if cancel button is clicked
    });

  }catch(error){
    console.log(e);
  }
 
}

// Load the saved link data from local storage, or initialize it as an empty array
let linkArray = JSON.parse(localStorage.getItem('linkArray')) || [];

// Function to handle adding a new link
function add(e) {

  try{ e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(e.target); // Collect form data
    const name = formData.get('title'); // Get the title of the link
    const url = formData.get('URL'); // Get the URL of the link
  
    // Check if both title and URL are provided
    if (!name || !url) {
      alert('Please enter both Title and URL'); // Show an alert if either is missing
      return;
    }
  
   
    // Generate the favicon URL from the domain of the URL
    const favicon = `https://icons.duckduckgo.com/ip3/${new URL(url).hostname}.ico`;
  
    // Save the new link object
    saveObject(name, url, favicon);
  
    // Create and display the new link on the page
    createLink(name, url, favicon);
  
    // Save the updated link array to local storage
    const conversionData = JSON.stringify(linkArray); 
    localStorage.setItem('linkArray', conversionData); // Save data to local storage
  
    // Remove the form from the page after adding the link
    document.querySelector(".div_dialog").remove();
   }catch(error){
    console.log(e);
   }
 
}

// Function to create a new div element
function createDiv() {
  return document.createElement("div");
}

// Function to save a new link object to the link array
function saveObject(name, url, icon) {
   try{
    let linkData = {
      title: name,
      url: url,
      favicon: icon
    };
    linkArray.push(linkData); // Add the new link data to the link array
  }catch(e){
    console.log(e);
  }
}

// Function to create and display a link element on the page
function createLink(name, url, favicon) {
  try {
      let div = createDiv(); // Create a new div for the link
      let span = document.createElement('span'); // Create a new span element to contain the link
      span.innerHTML = `
      <div class="link_wrapper"> 
        <table class="link_table">
          <tr>
            <td class="link_cell"><img height="30" width="30" src="${favicon}" /></td>
            <td class="link_cell"><a href="${url.startsWith('http') ? url : 'https://' + url}" target="_blank">${name}</a></td>
            <td class="link_cell"><i class="fa-regular fa-circle-xmark delete_icon"></i></td>
          </tr>
        </table>
      </div> `; // Set the link and favicon image
      div.appendChild(span); // Append the span to the div

      // Append the new link div to the link contents section on the page
      document.querySelector(".link_contents").appendChild(div);
      span.querySelector(".delete_icon").addEventListener('click', () => deletelink(url));
  } catch (e) {
      console.log(e);
  }
}

// Function to load and display all saved links from the link array
function loadLinks(linkArray) {
   try{
      linkArray.forEach(linkData => {
      
        createLink(linkData.title, linkData.url, linkData.favicon); // Create a link element for each saved link
      });
    }catch(error){
      console.log(error);
    }
}

// When the page is loaded, load the links from local storage and display them
document.addEventListener("DOMContentLoaded", function () {
  try{ loadLinks(linkArray);

  }catch(e){
    console.log(e);

  }
 
});

function deletelink(url){
  try{
    linkArray = linkArray.filter(link => link.url !== url);
    localStorage.setItem('linkArray', JSON.stringify(linkArray));
    document.querySelector(".link_contents").innerHTML = ""; 
    loadLinks(linkArray);
  }catch(error){
    console.log(error);
  }
  
}

