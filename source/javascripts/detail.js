import workData from '../../data/work_list.yml'
import projectData from '../../data/project_list.yml'

const detailContainer = document.getElementById('detail')
let container

const addLink = (data) => {
  const link = document.createElement('a')
  link.href = `projects/${data.path}`
  link.className = "project-card-link"
  container.insertAdjacentElement('afterbegin', link)
}

const addHeader = (data) => {
  const header = document.createElement('div')
  header.className = "detail-header"
  container.insertAdjacentElement('afterbegin', header)
  header.insertAdjacentHTML('afterbegin', `<h1>${data.name}</h1>`)
  if (data.title) {
    header.insertAdjacentHTML('beforeend', `<h1>(${data.title})</h1>`)
  }
}

const addResponsibilities = (data) => {
  const ul = document.createElement('ul')
  container.insertAdjacentElement('beforeend', ul)
  data.responsibilities.forEach((r) => ul.insertAdjacentHTML('beforeend', `<li>${r}</li>`))
}

// const addImage = (data) => {
//   const image = document.createElement('img')
//   image.src = data.cloudinary_url
//   image.className = "project-card-image"
//   container.insertAdjacentElement('beforeend', image)
// }

const addDetailHtml = (data) => {
  addHeader(data)
  data.location && container.insertAdjacentHTML('beforeend', `<h3>${data.location}: ${data.start_date} - ${data.end_date}</h3>`)
  data.path && addLink(data)
  data.description && container.insertAdjacentHTML('beforeend', `<p>${data.description}</p>`)
  // data.cloudinary_url && addImage(data)
  data.responsibilities && addResponsibilities(data)
}

const handleContainer = (activeTab) => {
  if (activeTab === 'project') {
    const card = document.createElement('div')
    card.className = 'project-card'
    container.insertAdjacentElement('afterbegin', card)
    container = card
  }
}

export const handleDetails = () => {
  container = detailContainer
  const projectTab = document.getElementById('projects')
  const activeTab = projectTab.classList.contains('active') ? 'project' : 'work'
  const activeData = activeTab === 'project' ? projectData.projects : workData.work
  let activeListItem
  const activeList = {
    project: document.getElementById('lists').querySelector('#projects'),
    work: document.getElementById('lists').querySelector('#work')
  }[activeTab]
  
  for (const item of activeList.children) {
    if (item.classList.contains('active')) {
      activeListItem = item
    }
  }
  
  const activeDataItem = activeData.find((d) => d.id.toString() === activeListItem.dataset.id)
  container.innerHTML = ""
  handleContainer(activeTab)
  addDetailHtml(activeDataItem)
}