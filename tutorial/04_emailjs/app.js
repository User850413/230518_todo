const form = document.querySelector("#contact-form");
const dimm = document.querySelector(".dimm");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const user_name = document.querySelector("#user_name");
const user_email = document.querySelector("#user_email");
const message = document.querySelector("#message");
const inputs = document.querySelectorAll("input");

function sendEmail() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (
      user_name.value == "" ||
      user_email.value == "" ||
      message.value == ""
    ) {
      alert("이름, 이메일, 내용을 확인하세요!");
      return;
    }

    this.contact_number.value = (Math.random() * 100000) | 0;

    dimm.classList.add("active");
    emailjs.sendForm("service_ayprnm9", "template_rwvknis", this).then(
      function () {
        console.log("SUCCESS!");
        modal.classList.add("active");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
  close.addEventListener("click", function () {
    modal.classList.remove("active");
    dimm.classList.remove("active");
    inputs.forEach((input) => (input.value = ""));
    message.value = "";
  });
}

sendEmail();
