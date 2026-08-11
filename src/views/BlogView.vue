<template>
  <div class="py-12">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold mb-8">{{ t('blog.title') }}</h1>
      <div class="space-y-6">
        <article v-for="post in posts" :key="post.slug" class="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md">
          <div class="text-sm text-gray-500 mb-2">{{ post.date }} · {{ post.category }}</div>
          <h2 class="text-2xl font-bold mb-3"><router-link :to="`/blog/${post.slug}`" class="hover:text-blue-600">{{ post.title }}</router-link></h2>
          <p class="text-gray-600 mb-3">{{ post.excerpt }}</p>
          <router-link :to="`/blog/${post.slug}`" class="text-blue-600 hover:underline font-medium">{{ t('blog.readMore') }}</router-link>
        </article>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const posts = [
  { slug: 'how-to-write-resume-2026', title: 'How to Write a Resume in 2026: Complete Guide', date: 'Aug 10, 2026', category: 'Guide', excerpt: 'The complete guide to writing a modern resume that gets interviews. Learn formatting, content, and common mistakes.' },
  { slug: 'resume-vs-cv', title: 'Resume vs CV: What\'s the Difference?', date: 'Aug 8, 2026', category: 'Tips', excerpt: 'Understanding the key differences between a resume and a CV, and when to use each in your job search.' },
  { slug: 'ats-friendly-resume', title: 'How to Make Your Resume ATS-Friendly', date: 'Aug 5, 2026', category: 'Tips', excerpt: 'Learn how Applicant Tracking Systems work and optimize your resume to pass automated screening.' },
  { slug: 'best-resume-fonts', title: 'The 10 Best Fonts for Your Resume', date: 'Aug 3, 2026', category: 'Design', excerpt: 'Typography matters. Discover the best professional fonts that make your resume stand out.' },
  { slug: 'resume-action-verbs', title: '200+ Powerful Action Verbs for Your Resume', date: 'Jul 30, 2026', category: 'Tips', excerpt: 'Replace weak verbs with powerful action words that demonstrate impact and achievement.' },
  { slug: 'one-page-resume', title: 'Should Your Resume Be One Page?', date: 'Jul 28, 2026', category: 'Tips', excerpt: 'When to use a one-page resume and when two pages are acceptable. Expert advice.' },
  { slug: 'resume-for-career-change', title: 'How to Write a Resume for a Career Change', date: 'Jul 25, 2026', category: 'Guide', excerpt: 'Strategies for highlighting transferable skills when switching industries or roles.' },
  { slug: 'cover-letter-guide', title: 'Cover Letter Writing Guide 2026', date: 'Jul 22, 2026', category: 'Guide', excerpt: 'Step-by-step guide to writing a compelling cover letter that complements your resume.' },
  { slug: 'resume-mistakes', title: '10 Common Resume Mistakes to Avoid', date: 'Jul 20, 2026', category: 'Tips', excerpt: 'Don\'t let these common errors cost you interviews. Learn what recruiters hate to see.' },
  { slug: 'linkedin-vs-resume', title: 'LinkedIn Profile vs Resume: Key Differences', date: 'Jul 18, 2026', category: 'Tips', excerpt: 'How to optimize both your LinkedIn profile and resume for maximum job search impact.' },
]
</script>
