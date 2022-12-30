const master = document.getElementById("master");
const visa = document.getElementById("visa");
const username = document.getElementById("username");
const mybtn = document.getElementById("mybtn");
const error = document.getElementById("message");
const form = document.getElementById("form");
const reg = /^[0-9\s\-]+$/;

function validate() {
  if (
    (master.checked || visa.checked) &&
    reg.test(username.value) &&
    username.value.length - 1 === 9
  ) {
    mybtn.removeAttribute("disabled");
  } else {
    mybtn.setAttribute("disabled", true);
  }
}
function addBar() {
  const value = username.value.split("");
  username.value = value
    .map(function (data, index) {
      if (index === 8 && reg.test(data) && data !== " ") {
        return "-" + data;
      } else {
        if (reg.test(data) && data !== " " && data !== "-") return data;
      }
    })
    .join("");

  const len = username.value.length;

  username.value = username.value
    .split("")
    .filter((data, index) => {
      if ((index !== 8 || len === 9) && data === "-") return false;
      return true;
    })
    .join("");
}
