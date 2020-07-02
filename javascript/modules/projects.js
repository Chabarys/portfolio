export default function makeCards() {
  const sectionCards = document.querySelector("div.projects");
  const card = document.querySelector("div.item");
  const container = document.querySelector('[data-modal="container"]')

  const projects = [
    {
      id: 1,
      name: 'Projeto 1',
      description: 'Descrição do primeiro projeto',
      image: '../image/works-images/project-1.jpg',
    },
    {
      id: 2,
      name: 'Projeto 2',
      description: 'Descrição do segundo projeto',
      image: '../image/works-images/project-2.jpg',
    },
    {
      id: 3,
      name: 'Projeto 3',
      description: 'Descrição do terceiro projeto',
      image: '../image/works-images/project-1.jpg',
    },  
    {
      id: 4,
      name: 'Projeto 4',
      description: 'Descrição do quarto projeto',
      image: '../image/works-images/project-2.jpg',
    },
  ];
  // Make Card
  projects.map(project => {
    const cardClone = card.cloneNode(true);
    cardClone.setAttribute("id", project.id);
    cardClone.setAttribute("name", project.name);
    cardClone.setAttribute("description", project.description);
    cardClone.setAttribute("image", project.image);
    cardClone.querySelector("img").src = project.image;
    sectionCards.appendChild(cardClone);
  });

  card.remove();

  // Modal actions
  const modalOverlay = document.querySelector(".modal-container");
  const modal = document.querySelector(".modal");
  const cards = [...document.querySelectorAll(".cards .projects .item")];

  cards.forEach(card => {
    card.addEventListener("click", () => {
      modalOverlay.classList.add("active");
      modal.classList.add("active");
      modal.querySelector('.project-title').innerHTML = card.getAttribute("name")
      modal.querySelector('.project-description').innerHTML = card.getAttribute("description")
      modal.querySelector('img').src = card.getAttribute("image")
      console.log(card.getAttribute("id"))
     // modal.querySelector('.project-description').innerHTML = 'iodajojdaiojdsojsdfódaijf'
    });
  });

  document.querySelector(".close").addEventListener("click", () => {
    modalOverlay.classList.remove("active");
  });

  function clickOutModal(event) {
    event.target === this ? closeModal(event) : null
  }
  function closeModal(event) {
    event.preventDefault()
    container.classList.remove('active')
  }

  container.addEventListener('click', clickOutModal)
}
