import { handleDetails } from "./detail"

const projectTab = document.getElementById('projects')
const workTab = document.getElementById('work')
const workContainer = document.getElementById('work-details')
const projectContainer = document.getElementById('project-details')
const tabs = document.querySelector('.tabs')

export let projectTabListner;
export let workTabListener;

const onTabClick = (event) => {
  for (const tab of tabs.children) {
    tab.classList.remove('active')
  }
  event.target.classList.add('active')
  if (event.target.id === 'work') {
    projectContainer.classList.add('hidden')
    workContainer.classList.remove('hidden')
  } else {
    projectContainer.classList.remove('hidden')
    workContainer.classList.add('hidden')

  }
  handleDetails()
}

if (tabs) {
  projectTab && (projectTabListner = projectTab.addEventListener('click', onTabClick));
  workTab && (workTabListener = workTab.addEventListener('click', onTabClick));
}

