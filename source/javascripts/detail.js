import workData from '../../data/work_list.yml'
import projectData from '../../data/project_list.yml'



const addPath = (data) => {
  const button = (
    `<button class="see-more-button">
      <a href="about/${data.path}">See More</a>
    </button>`
  )
  const innerHtml = data.path ? button : ""
  document.getElementById('detail-path').innerHTML = innerHtml
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
  document.getElementById('detail-header').innerText = activeDataItem.name
  document.getElementById('detail-description').innerText = activeDataItem.description
  addPath(activeDataItem)
}