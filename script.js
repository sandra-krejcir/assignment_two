class Student {
  constructor(email, name, message) {
    this.email = email;
    this.name = name;
    this.message = message;
  }
}

const theDate = new Date();
const today = theDate.getDay();
if (today === 5 || today === 6 || today === 0) {
  document.querySelector("#basicForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("You cannot submit on this day!");
    console.log("Wrong day");
  });
} else {
  document.querySelector("#studentEmail").addEventListener("blur", (e) => {
    const newValue = e.target.value.trim();
    e.target.value = newValue;
    const emailSufix = e.target.value.toLowerCase().split("@");
    if (!emailSufix[1].match("cphbusiness.dk")) {
      alert("Please use a cph business email!");
    }
  });
  document.querySelector("#userName").addEventListener("blur", (e) => {
    const newValue = e.target.value.trim();
    e.target.value = newValue;
  });

  document.querySelector("#basicForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Right day");
    const emailInput = document.querySelector("#studentEmail").value;
    const userNameInput = document.querySelector("#userName").value;
    const messageInput = document.querySelector("#message").value;
    const student = new Student(emailInput, userNameInput, messageInput);
    console.log(student);
    resetInput();
  });
}

function resetInput() {
  document.querySelector("#studentEmail").value = "";
  document.querySelector("#userName").value = "";
  document.querySelector("#message").value = "";
  alert("Your form has been successfully submitted!");
}
