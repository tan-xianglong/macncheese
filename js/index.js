//initialize DOM elements for form items

const chkbox_beef = document.querySelector("#chkbox_beef");
const chkbox_seafood = document.querySelector("#chkbox_seafood");
const chkbox_chicken = document.querySelector("#chkbox_chicken");
const chkbox_all = document.querySelector("#chkbox_all");
const pdtNameField = document.querySelector("#productName");
const pdtDesc = document.querySelector("#productDesc");
const pdtPrice = document.querySelector("#price");
const pdtQuantity = document.querySelector("#quantity");
const pdtImg = document.querySelector("image");
const clearBtn = document.querySelector("#clearBtn");

// Initialize global variables
let checkboxChecked;
let isCheckBoxChecked = false;
// Initialize macNcheese product
const macNcheese = new Product();

// 1. Checkbox restriction
//    a. create DOM variables for all checkboxes
//    b. create event handler
//    c. add event listener to call the event handler

//event handler
const disableChkbox = () => {
  if (chkbox_all.checked == true) {
    chkbox_beef.checked = false;
    chkbox_chicken.checked = false;
    chkbox_seafood.checked = false;
    chkbox_beef.disabled = true;
    chkbox_chicken.disabled = true;
    chkbox_seafood.disabled = true;
  } else {
    chkbox_beef.disabled = false;
    chkbox_chicken.disabled = false;
    chkbox_seafood.disabled = false;
  }
};

//event listener
chkbox_all.addEventListener("change", disableChkbox);

//2. Clear form function
const clearForm = () => {
  chkbox_beef.reset();
  chkbox_seafood.reset();
  chkbox_chicken.reset();
  chkbox_all.reset();
  pdtNameField.reset();
  pdtDesc.reset();
  pdtPrice.reset();
  pdtQuantity.reset();
  pdtImg.reset();
};

//3. submit form function to validate and store values
const submitForm = () => {
  //form validation
  if (!isCheckBoxChecked){
    chkbox_beef.setCustomValidity("Please select at least one category.");
    chkbox_beef.reportValidity();
  } else {
    //initialize storing form values variables
    let productName = pdtNameField.value;
    let productDesc = pdtDesc.value;
    let price = pdtPrice.value;
    let quantity = pdtQuantity.value;
    let catBeef = chkbox_beef.value;
    let catSeafood = chkbox_seafood.value;
    let catChicken = chkbox_chicken.value;
    let createAt = new Date();
    macNcheese.addProduct(
      productName,
      productDesc,
      price,
      quantity,
      category,
      image,
      createAt
    ); //category and image to work on it
    alert("Product has been added successfully.");
  }
};

//dummy data for productItem array
macNcheese.addProduct(
  "Original Mac N Cheese",
  "Our best seller, nothing beats the original",
  "20.00",
  "10",
  "['beef']",
  "./images/lobster.jpg",
  "today"
);

macNcheese.addProduct(
  "Chicken Mac N Cheese",
  "Season with paprika and mixed herbs, this chicken will steal your heart",
  "17.00",
  "10",
  `["chicken"]`,
  "./images/lobster.jpg",
  "today"
);

macNcheese.addProduct(
  "Supreme Mac N Cheese",
  "It is supremem enough said. <br>Ingredients: Chicken and Seafood.",
  "25.00",
  "10",
  "['chicken', 'seafood']",
  "./images/lobster.jpg",
  "today"
);
