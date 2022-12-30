const listitem = document.getElementsByClassName("listitems");
const item = document.createElement("list");
const items = [
  { imgUrl: "phone.png", text: "iPhone leukas" },
  { imageUrl: "phone.png", text: "iphone leukas2" },
  { imageUrl: "Group.png", text: "Aktivierung mit Kartennummer" },
  { imageUrl: "messages.png", text: "Vresand Brief" },
];
const parent = document.getElementById("list-items");
const arrow = document.createElement("img");
arrow.src = "Vector.png";
arrow.classList.add("vector-image");
items.map((item) => {
  const list = document.createElement("div");
  const img = document.createElement("img");
  const text = document.createElement("p");
  list.classList.add("list");
  text.classList.add("list-text");
  img.src = item.imgUrl;
  text.innerHTML = item.text;
  list.appendChild(img);
  list.appendChild(text);
  list.appendChild(arrow);
  parent.appendChild(list);
});
