const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
});
menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};
/* TESTIMONIAL SECTION */
const allCard = Array.from(document.querySelectorAll(".card"));
const container = document.querySelector(".card-wrapper");
const indicator = document.querySelector(".indicator");

const arrHeight = allCard.map((item) => {
  return item.offsetHeight;
});
const maxHeight = Math.max(...arrHeight);

allCard.forEach((item, idx) => {
  item.style.height = maxHeight + "px";
  item.id = "card-" + idx;

  const a = document.createElement("a");
  a.href = "#" + item.id;
  indicator.appendChild(a);
});

container.style.maxHeight = maxHeight + "px";

const allIndicator = document.querySelectorAll(".indicator a");

allIndicator[0].classList.add("active");

allIndicator.forEach((item) => {
  item.addEventListener("click", function () {
    allIndicator.forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
  });
});

container.addEventListener("scroll", function () {
  let linkActive;
  allCard.forEach((item) => {
    if (
      this.scrollTop >= item.offsetTop - item.offsetHeight / 2 - 28 &&
      this.scrollTop <= item.offsetTop + item.offsetHeight / 2 - 28
    ) {
      linkActive = item.id;
    }
  });
  allIndicator.forEach((item) => {
    if (item.getAttribute("href") === "#" + linkActive) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
function formSubmission() {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "prasannak0496@gmail.com",
    Password : "Pranu@-96",
    To : 'prasannak0496@gmail.com',
    From : document.getElementById('usermail').value,
    Subject : "SEOMY Contact Form Submission",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

/* POPUP WINDOWS */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});