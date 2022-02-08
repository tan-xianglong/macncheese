//Add product form validation

// 1. Checkbox restriction
//    a. create DOM variables for all checkboxes
//    b. create event handler
//    c. add event listener to call the event handler
const chkbox_beef = document.querySelector("#chkbox_beef");
const chkbox_seafood = document.querySelector("#chkbox_seafood");
const chkbox_chicken = document.querySelector("#chkbox_chicken");
const chkbox_all = document.querySelector("#chkbox_all");

//event handler
const disableChkbox = () => {
  if (chkbox_all.checked == true) {
    chkbox_beef.disabled = true;
    chkbox_chicken.disabled = true;
    chkbox_seafood.disabled = true;
  } else {
    chkbox_beef.disabled = false;
    chkbox_chicken.disabled = false;
    chkbox_seafood.disabled = false;
  }
}

//event listener
chkbox_all.addEventListener("change", disableChkbox);


const name = document.querySelector("#productName").value;