let inputs = document.getElementsByTagName("INPUT");

let box = document.getElementById("box");

let textarea = document.getElementById("textarea");

let btn = document.getElementById("btn");

let topleft = "";
let topright = "";
let bottomright = "";
let bottomleft = "";

function handleChange() {
  box.style.borderTopLeftRadius = inputs[0].value + "px";
  box.style.borderTopRightRadius = inputs[1].value + "px";
  box.style.borderBottomRightRadius = inputs[2].value + "px";
  box.style.borderBottomLeftRadius = inputs[3].value + "px";

  textarea.innerHTML = "";

  if (inputs[0].value > 0) {
    topleft = document.createTextNode(
      `border-top-left-radius: ${inputs[0].value}px;\n`
    );
    textarea.appendChild(topleft);
  }
  if (inputs[1].value > 0) {
    topright = document.createTextNode(
      `border-top-right-radius: ${inputs[1].value}px;\n`
    );
    textarea.appendChild(topright);
  }
  if (inputs[2].value > 0) {
    bottomright = document.createTextNode(
      `border-bottom-right-radius: ${inputs[2].value}px;\n`
    );
    textarea.appendChild(bottomright);
  }
  if (inputs[3].value > 0) {
    bottomleft = document.createTextNode(
      `border-bottom-left-radius: ${inputs[3].value}px;\n`
    );
    textarea.appendChild(bottomleft);
  }
}

inputs[0].onchange = handleChange;
inputs[1].onchange = handleChange;
inputs[2].onchange = handleChange;
inputs[3].onchange = handleChange;

btn.onclick = function copy() {
  if (textarea.innerHTML != "") {
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied to clipboard");
  }
};
