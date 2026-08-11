<template>
  <div class="py-12"><div class="max-w-3xl mx-auto px-4 prose prose-lg text-gray-700">
    <h1 class="text-3xl font-bold mb-6">{{ t('privacy.title') }}</h1>
    <p><em>{{ t('privacy.lastUpdated') }}</em></p>
    <h2>Information We Collect</h2><p>ResumeTemplates is a static website that does not require user accounts or collect personal information for template downloads. When you visit our site, we may collect standard web analytics data (page views, browser type, referring site) through Google Analytics to improve our service.</p>
    <h2>Cookies and Advertising</h2><p>We use Google AdSense to display advertisements on our site. AdSense may use cookies to serve relevant ads based on your browsing history. You can opt out of personalized advertising by visiting Google's Ads Settings. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to our website or other websites.</p>
    <h2>How We Use Your Information</h2><p>Analytics data is used solely to understand site usage patterns and improve content. We do not sell, trade, or rent personal information to third parties. Contact form submissions are used only to respond to your inquiries.</p>
    <h2>Data Security</h2><p>We implement reasonable security measures to protect information. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
    <h2>Children's Privacy</h2><p>Our site is not directed to children under 13. We do not knowingly collect information from children under 13.</p>
    <h2>Changes to This Policy</h2><p>We may update this policy periodically. Changes will be posted on this page with an updated revision date.</p>
    <h2>Contact</h2><p>If you have questions about this Privacy Policy, please <router-link to="/contact">contact us</router-link>.</p>
  </div></div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
