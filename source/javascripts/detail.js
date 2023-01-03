import workData from '../../data/work_list.yml'
import projectData from '../../data/project_list.yml'

const container = document.getElementById('detail')

const addPath = (data) => {
  const button = (
    `<button class="see-more-button">
      <a href="projects/${data.path}">See More</a>
    </button>`
  )
  if (data.path) {
    container.insertAdjacentHTML('beforeend', button)
  }
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

const addDetailHtml = (data) => {
  addHeader(data)
  data.path && addPath(data)
  data.location && container.insertAdjacentHTML('beforeend', `<h3>${data.location}: ${data.start_date} - ${data.end_date}</h3>`)
  data.description && container.insertAdjacentHTML('beforeend', `<p>${data.description}</p>`)
  data.responsibilities && container.insertAdjacentHTML('beforeend', `<ul>${data.responsibilities.map((d) => `<li>${d}</li>`)}</ul>`)
}

export const handleDetails = () => {
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
  addDetailHtml(activeDataItem)
}