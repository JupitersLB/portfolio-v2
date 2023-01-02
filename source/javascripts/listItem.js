import { handleDetails } from "./detail"

const lists = document.getElementById('lists')

const onClick = (event) => {
  for (const item of event.target.parentElement.children) {
    item.classList.remove('active')
  }
  event.target.classList.add('active')
  handleDetails()
}

for (const list of lists.children) {
  for (const item of list.children) {
    item.addEventListener('click', onClick)
  }
}
