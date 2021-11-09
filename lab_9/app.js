function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Ажлын туршлага");

  let weObj = document.getElementById("we");
  let weAddButtonObj = document.getElementById("weAddButton");
  weObj.appendChild(newNode, weAddButtonObj);
  console.log("Clicking....");
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Боловсрол");

  let aqObj = document.getElementById("aq");
  let aqAddButtonObj = document.getElementById("aqAddButton");
  aqObj.insertBefore(newNode, aqAddButtonObj);
  console.log("Clicking....");
}

function generateCV() {
  document.getElementById("nameT1").innerHTML =
    "Нэр: " + document.getElementById("nameField").value;
  document.getElementById("nameT2").innerHTML =
    "Утасны дугаар: " + document.getElementById("nameField").value;
  document.getElementById("contactT").innerHTML =
    "Утасны дугаар: " + document.getElementById("contactField").value;
  document.getElementById("addressT").innerHTML =
    "Гэрийн хаяг: " + document.getElementById("addressField").value;
  document.getElementById("fbT").innerHTML =
    "И-майл хаяг: " + document.getElementById("fbField").value;
  document.getElementById("igT").innerHTML =
    "Хүйс: " + document.getElementById("igField").value;
  document.getElementById("inT").innerHTML =
    "LinkedIn: " + document.getElementById("inField").value;
  document.getElementById("objT").innerHTML =
    document.getElementById("objField").value;

  document.getElementById("birthdayT").innerHTML =
    "Төрсөн өдөр: " + document.getElementById("birthday").value;

  let wes = document.getElementsByClassName("weField");
  let str1 = "";

  for (let exp of wes) {
    str1 = str1 + `<li> ${exp.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str1;

  let aqs = document.getElementsByClassName("eqField");
  let str2 = "";

  for (let qlfy of aqs) {
    str2 = str2 + `<li> ${qlfy.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str2;

  let file = document.getElementById("imgField").files[0];
  console.log(file);
  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function printCV() {
  window.print();
}
