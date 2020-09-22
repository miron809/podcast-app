export function isValid(value) {
  return value.length >= 10
}


export function createModal(title, content) {
  const modal = document.createElement('div')

  const html = `
    <h1>${title}</h1>
    <div class="modal-content">${content}</div>
  `

  modal.innerHTML = html
  modal.classList.add('modal')

  mui.overlay('on', modal)
}
