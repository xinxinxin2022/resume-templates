<template>
  <div class="py-12"><div class="max-w-3xl mx-auto px-4 prose prose-lg text-gray-700">
    <h1 class="text-3xl font-bold mb-6">{{ t('terms.title') }}</h1>
    <p><em>{{ t('terms.lastUpdated') }}</em></p>
    <h2>Acceptance of Terms</h2><p>By accessing and using ResumeTemplates, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our site.</p>
    <h2>License to Use Templates</h2><p>All resume templates on this site are provided free of charge for personal and commercial use. You may download, modify, and use the templates to create your own resume. You may not resell or redistribute the templates themselves as your own product.</p>
    <h2>No Warranty</h2><p>Templates are provided "as is" without warranty of any kind. We do not guarantee that using our templates will result in job interviews or employment. Resume effectiveness depends on content, qualifications, and market conditions.</p>
    <h2>Limitation of Liability</h2><p>ResumeTemplates shall not be liable for any damages arising from use of our templates or site. This includes but is not limited to lost employment opportunities or technical issues with template files.</p>
    <h2>Third-Party Links</h2><p>Our site may contain links to third-party websites. We are not responsible for the content or practices of external sites.</p>
    <h2>Changes to Terms</h2><p>We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of updated terms.</p>
    <h2>Contact</h2><p>Questions about these terms? <router-link to="/contact">Contact us</router-link>.</p>
  </div></div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
