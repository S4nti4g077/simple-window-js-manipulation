const show = document.querySelector(".show");
const page = document.querySelector(".page");

const modal = (body) => {
  return `<div class="window">
            <button class="close">X</button>
            <div class="text">
                <H1>${body.title}</H1>
                <p>${body.text}</p>
            </div>
            <button class="submit">Akceptuj</button>
            <button class="cancel">Anuluj</button>
        </div> `;
};

const buttons = () => {
  const cancel = document.querySelector(".cancel");
  const submit = document.querySelector(".submit");
  const close = document.querySelector(".close");
  cancel.addEventListener("click", function () {
    console.log("canceeel");
  });

  submit.addEventListener("click", function () {
    console.log("SUBMIiit");
  });

  close.addEventListener("click", function () {
    console.log("close biachhh");
    closeWindow();
  });
};

const windowError = () => {
  const newModal = document.createElement("div");
  newModal.className = "page";
  newModal.innerHTML = modal({
    title: prompt("Title"),
    text: prompt("error text :)"),
  });
  document.body.appendChild(newModal);
  buttons();
};

show.addEventListener("click", windowError);

const closeWindow = () => {
  const newModal = document.querySelector(".page");
  document.body.removeChild(newModal);
};
