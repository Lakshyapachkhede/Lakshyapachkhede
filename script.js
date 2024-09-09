var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName){
    for(tablink of tabLinks){
        tablink.classList.remove('active-link');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}


var sidemenu = document.getElementById('sidemenu');
function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


{/* <form name="submit-to-google-sheet">
  <input name="email" type="email" placeholder="Email" required>
  <button type="submit">Send</button>
</form> */}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwXNP8Araa1n2F32E4LNGKcVTDJR6fHANElLynrd3mb9_WeDbxWY5a7qLOb9Ds2bLFG/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');
  

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
           msg.innerHTML = "" ;
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


