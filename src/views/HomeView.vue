<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ t('home.heroTitle') }}</h1>
        <p class="text-xl md:text-2xl text-blue-100 mb-8">{{ t('home.heroSubtitle', { count: templates.length }) }}</p>
        <router-link to="/templates" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50">
          {{ t('home.browseAll') }}
        </router-link>
      </div>
    </section>

    <!-- Featured Templates -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">{{ t('home.popularTitle') }}</h2>
        <p class="text-gray-600 text-center mb-12">{{ t('home.popularSubtitle') }}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <TemplateCard v-for="tpl in featured" :key="tpl.id" :template="tpl" />
        </div>
        <div class="text-center mt-10">
          <router-link to="/templates" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
            {{ t('home.viewAll', { count: templates.length }) }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">{{ t('home.howItWorks') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
            <h3 class="text-xl font-semibold mb-2">{{ t('home.step1Title') }}</h3>
            <p class="text-gray-600">{{ t('home.step1Desc', { count: templates.length }) }}</p>
          </div>
          <div class="text-center p-6">
            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
            <h3 class="text-xl font-semibold mb-2">{{ t('home.step2Title') }}</h3>
            <p class="text-gray-600">{{ t('home.step2Desc') }}</p>
          </div>
          <div class="text-center p-6">
            <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
            <h3 class="text-xl font-semibold mb-2">{{ t('home.step3Title') }}</h3>
            <p class="text-gray-600">{{ t('home.step3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO Content Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-6">{{ t('home.whyTitle') }}</h2>
        <div class="prose prose-lg text-gray-700 space-y-4">
          <p>{{ t('home.whyP1', { count: templates.length }) }}</p>
          <p>{{ t('home.whyP2') }}</p>
          <p>{{ t('home.whyP3') }}</p>
          <h3 class="text-2xl font-bold mt-8">{{ t('home.whatMakesTitle') }}</h3>
          <p>{{ t('home.whatMakesP1') }}</p>
          <p>{{ t('home.whatMakesP2') }}</p>
        </div>
      </div>
    </section>

    <!-- Blog Preview -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">{{ t('home.blogTipsTitle') }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="post in blogPosts" :key="post.slug" class="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div class="p-6">
              <span class="text-sm text-blue-600 font-medium">{{ post.category }}</span>
              <h3 class="text-xl font-semibold mt-2 mb-3">{{ post.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ post.excerpt }}</p>
              <router-link :to="`/blog/${post.slug}`" class="text-blue-600 hover:underline font-medium text-sm">{{ t('home.readMore') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ t('home.ctaTitle') }}</h2>
        <p class="text-xl text-blue-100 mb-8">{{ t('home.ctaSubtitle', { count: templates.length }) }}</p>
        <router-link to="/templates" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50">
          {{ t('home.ctaButton') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { templates, categoryInfo } from '../data/templates'
import TemplateCard from '../components/TemplateCard.vue'

const { t } = useI18n()
const featured = templates.slice(0, 8)

const blogPosts = [
  { slug: 'how-to-write-resume-2026', title: 'How to Write a Resume in 2026: Complete Guide', category: 'Guide', excerpt: 'Step-by-step guide to writing a modern resume that gets interviews. Includes templates, tips, and common mistakes to avoid.' },
  { slug: 'resume-vs-cv', title: 'Resume vs CV: What\'s the Difference?', category: 'Tips', excerpt: 'Understanding the key differences between a resume and a CV, and when to use each document in your job search.' },
  { slug: 'ats-friendly-resume', title: 'How to Make Your Resume ATS-Friendly', category: 'Tips', excerpt: 'Learn how Applicant Tracking Systems work and optimize your resume to pass automated screening.' },
]
</script>
