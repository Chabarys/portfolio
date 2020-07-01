// Make Cards
const sectionCards = document.querySelector("div.projects");

const card = document.querySelector("div.item");

const projects = [
  {
    id: 1,
    image: '../image/works-images/project-1.jpg',
  },
  {
    id: 2,
    image: '../image/works-images/project-2.jpg',
  },
  {
    id: 3,
    image: '../image/works-images/project-1.jpg',
  },  
  {
    id: 4,
    image: '../image/works-images/project-2.jpg',
  },  
];
// Make Card
projects.map(project => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", project.id);
  cardClone.querySelector("img").src = project.image;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector('').src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  document.querySelector("body").style.overflow = "initial";
});