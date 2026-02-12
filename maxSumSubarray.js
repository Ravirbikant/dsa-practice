const titles = document.querySelectorAll(".title");
const contents = document.querySelectorAll(".content");
const icons = document.querySelectorAll(".accordion-icon");

const handleTitleClick = (index) => {
  let display = contents[index].style.display;
  display = display === "none" ? "block" : "none";
  contents[index].style.display = display;
  icons[index].innerHTML = display === "none" ? "+" : "-";
};

for (let i = 0; i < contents.length; i++) {
  contents[i].style.display = "none";
  titles[i].addEventListener("click", () => {
    handleTitleClick(i);
  });
}
