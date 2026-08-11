import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/templates', name: 'templates', component: () => import('../views/TemplatesView.vue') },
    { path: '/templates/:id', name: 'template-detail', component: () => import('../views/TemplateDetailView.vue') },
    { path: '/category/:slug', name: 'category', component: () => import('../views/CategoryView.vue') },
    { path: '/blog', name: 'blog', component: () => import('../views/BlogView.vue') },
    { path: '/blog/:slug', name: 'blog-post', component: () => import('../views/BlogPostView.vue') },
    { path: '/faq', name: 'faq', component: () => import('../views/FAQView.vue') },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
    { path: '/privacy-policy', name: 'privacy', component: () => import('../views/PrivacyView.vue') },
    { path: '/terms-of-service', name: 'terms', component: () => import('../views/TermsView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
