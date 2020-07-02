export default function initModal() {
  const open = document.querySelector('[data-modal="open"]')
  const close = document.querySelector('[data-modal="close"]')
  const container = document.querySelector('[data-modal="container"]')
 
  if(open && close && container){
    function openModal(event) {
      event.preventDefault()
      container.classList.add('active')
    }
  
    function closeModal(event) {
      event.preventDefault()
      container.classList.remove('active')
    }
  
    function clickOutModal(event) {
      event.target === this ? closeModal(event) : null
    }
    
    open.addEventListener('click', openModal)
    close.addEventListener('click', closeModal)
    container.addEventListener('click', clickOutModal)
  }
}

