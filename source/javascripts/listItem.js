import { handleDetails } from "./detail"

const list = document.getElementById('work-list')

const onClick = (event) => {
  for (const item of event.target.parentElement.children) {
    item.classList.remove('active')
  }
  event.target.classList.add('active')
  handleDetails()
}

for (const item of list.children) {
  item.addEventListener('click', onClick)
}
