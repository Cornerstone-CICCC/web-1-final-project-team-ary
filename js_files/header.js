document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header')
  const spheaderBtn = document.querySelector('.header-sp-btn')

  spheaderBtn.addEventListener('click', () => {
    header.classList.toggle('open')
  })
})
