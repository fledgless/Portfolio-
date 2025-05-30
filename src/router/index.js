import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/competences',
    name: 'skills',
    component: SkillsView
  },
  {
    path: '/projets',
    name: 'projects',
    component: ProjectsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
