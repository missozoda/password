let elForm = document.querySelector(".site-form");
let elLabel = document.querySelector(".site-label");
let elInput = document.querySelector(".site-input");

let passwords = [1997, 1998, 1999, 2000, 2001, 2002, 2003];

elForm.addEventListener("submit", function(e){
  e.preventDefault();

  let password = elInput.value.trim();

  if (isNaN(Number(password)) || !password.length == 4){
    elLabel.setAttribute("class", "d-block my-3 fs-4 fw-bold text-center text-danger");
    return
  }else{
    elLabel.setAttribute("class", "d-block my-3 fs-4 fw-bold text-center text-primary")
  }
  
  for (let i = 0; i < passwords.length; i++){
    if (password == passwords[i]){
      window.open("www.telegram.com")
      elLabel.setAttribute("class", "d-block my-3 fs-4 fw-bold text-center text-primary");
      elInput.value = null;
    }else{
      elLabel.setAttribute("class", "d-block my-3 fs-4 fw-bold text-center text-danger");
    }
  }
})