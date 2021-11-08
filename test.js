function showDropDownMenu(showmenuName, menuName) {
  let menuButton = document.querySelector(showmenuName);
  let menuItems = document.querySelector(menuName);
  menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("hide");
  });
}