const projectTab = document.getElementById('projects')
const workTab = document.getElementById('work')
const lists = document.getElementById('lists')
const tabs = document.querySelector('.tabs').children

const listIds = {
  projects: lists.querySelector('#projects'),
  work: lists.querySelector('#work')
}

export let projectTabListner;
export let workTabListener;

const onTabClick = (event) => {
  for (const tab of tabs) {
    tab.classList.remove('active')
  }
  for (const list of lists.children) {
    list.classList.remove('active')
  }
  event.target.classList.add('active')
  listIds[event.target.id].classList.add('active')
}

if (tabs) {
  projectTab && (projectTabListner = projectTab.addEventListener('click', onTabClick));
  workTab && (workTabListener = workTab.addEventListener('click', onTabClick));
}

