document.getElementById("myButton").onclick = function () {
  location.href = "secondscreen.html";
};
if (typeof Storage !== "undefined") {
}
function handleclick(method) {
  localStorage.setItem("paymentmethod", method);
}
