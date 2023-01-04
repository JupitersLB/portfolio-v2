import workData from '../../data/work_list.yml'
import projectData from '../../data/project_list.yml'

const workContainer = document.getElementById('work-details')
const projectContainer = document.getElementById('project-details')
let container

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

const addWorkHtml = (data) => {
  addHeader(data)
  container.insertAdjacentHTML('beforeend', `<h3>${data.location}: ${data.start_date} - ${data.end_date}</h3>`)
  container.insertAdjacentHTML('beforeend', `<p>${data.description}</p>`)
  addResponsibilities(data)
}

const handleWorkContainer = (dataList) => {
  if (workContainer.querySelector('.work-details-container')) {
    workContainer.removeChild(workContainer.querySelector('.work-details-container'))
  }
  const workDetails = document.createElement('div')
  workDetails.className = "work-details-container"
  container.insertAdjacentElement('afterbegin', workDetails)
  container = workDetails
  let activeListItem
  for (const item of document.getElementById('work-list').children) {
    if (item.classList.contains('active')) {
      activeListItem = item
    }
  }
  const data = dataList.find((d) => d.id.toString() === activeListItem.dataset.id)
  addWorkHtml(data)
}

const addProjectHtml = (card, data) => {
  const header = document.createElement('div')
  header.className = "detail-header"
  card.insertAdjacentElement('afterbegin', header)
  header.insertAdjacentHTML('afterbegin', `<h1>${data.name}</h1>`)
  const link = document.createElement('a')
  link.href = `projects/${data.path}`
  link.className = "project-card-link"
  card.insertAdjacentElement('afterbegin', link)
  card.insertAdjacentHTML('beforeend', `<p>${data.description}</p>`)
}

const createCard = (data) => {
  const card = document.createElement('div')
  card.className = 'project-card'
  addProjectHtml(card, data)
  return card
}

const handleProjectContainer = (dataList) => {
  container.innerHTML = ""
  const cardContainer = document.createElement('div')
  cardContainer.className = "cards"
  container.insertAdjacentElement('beforeend', cardContainer)
  const cards = dataList.map(createCard)
  cards.forEach((c) => cardContainer.insertAdjacentElement('beforeend', c))
}

export const handleDetails = () => {
  const projectTab = document.getElementById('projects')
  if (!projectTab) return
  
  const activeTab = projectTab.classList.contains('active') ? 'project' : 'work'
  let activeData
  if (activeTab === 'project') {
    container = projectContainer
    activeData = projectData.projects
    handleProjectContainer(activeData)
  } else {
    container = workContainer
    activeData = workData.work
    handleWorkContainer(activeData)
  }
}
