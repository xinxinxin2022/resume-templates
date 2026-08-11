<template>
  <div class="py-12">
    <div class="max-w-3xl mx-auto px-4">
      <h1 class="text-3xl font-bold mb-8">{{ t('faq.title') }}</h1>
      <div class="space-y-4">
        <div v-for="(item, i) in faqs" :key="i" class="bg-white rounded-lg border p-6">
          <h3 class="font-semibold text-lg mb-2">{{ item.q }}</h3>
          <p class="text-gray-600">{{ item.a }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { templates } from '../data/templates'
const { t } = useI18n()

const faqs = [
  { q: 'Are these resume templates really free?', a: `Yes, all ${templates.length} templates are completely free to download and use. There are no hidden fees or premium tiers.` },
  { q: 'What format are the templates?', a: 'All templates are in Microsoft Word (.docx) format, compatible with Microsoft Word, Google Docs, LibreOffice, and other word processors.' },
  { q: 'Can I use these templates for any job?', a: 'Absolutely. Our templates cover Professional, Creative, Modern, and Elegant styles suitable for any industry and experience level.' },
  { q: 'Are the templates ATS-friendly?', a: 'Yes. All our templates use standard formatting that Applicant Tracking Systems can parse. No complex tables or graphics that confuse ATS software.' },
  { q: 'How do I customize a template?', a: 'Download the Word file, open it in Microsoft Word or Google Docs, replace the placeholder text with your information, and save as PDF before submitting.' },
  { q: 'Can I change the colors?', a: 'Yes. Since these are Word documents, you can easily change colors, fonts, and layout elements to match your personal style.' },
  { q: 'Should my resume be one or two pages?', a: 'For most professionals with under 10 years of experience, one page is ideal. Senior professionals and executives may use two pages. Never exceed two pages.' },
  { q: 'Do I need to include a photo?', a: 'In the US and UK, photos are generally not recommended due to anti-discrimination laws. In some European and Asian countries, photos are expected. Check local norms.' },
  { q: 'How do I save my resume for submission?', a: 'Always save and submit your resume as a PDF file unless the employer specifically requests a Word document. PDF preserves formatting across all devices.' },
  { q: 'Can I use these templates for LinkedIn?', a: 'While these are designed for resume documents, the layouts and sections can inspire your LinkedIn profile structure. We recommend separate optimization for LinkedIn.' },
  { q: 'What sections should every resume have?', a: 'Every resume should include: Contact Information, Professional Summary, Work Experience, Education, and Skills. Optional sections include Certifications, Projects, and Volunteer Work.' },
  { q: 'How far back should my work experience go?', a: 'Generally, include the last 10-15 years of relevant experience. Older positions can be summarized or omitted unless directly relevant to the target role.' },
  { q: 'Should I include references?', a: 'No. Modern resumes do not include references. Simply write "References available upon request" if needed, or omit entirely. Employers will ask when needed.' },
  { q: 'How do I handle employment gaps?', a: 'Be honest but strategic. Use years only (not months) for dates. Highlight any freelance work, volunteering, or skill development during gaps.' },
  { q: 'What font size should I use?', a: 'Use 10-12pt for body text and 14-16pt for headings. Never go below 10pt — readability is crucial. Stick to professional fonts like Calibri, Arial, or Garamond.' },
  { q: 'Can I use these for cover letters too?', a: 'These templates are designed for resumes. For cover letters, use a simple, clean format that complements your resume style.' },
  { q: 'How often should I update my resume?', a: 'Update your resume every 3-6 months, or whenever you achieve something significant. Don\'t wait until you need it — keeping it current saves time later.' },
  { q: 'Should I include my GPA?', a: 'Include your GPA only if it\'s above 3.5 and you\'re a recent graduate. Experienced professionals should omit GPA and focus on achievements instead.' },
  { q: 'How do I quantify my achievements?', a: 'Use numbers: revenue increased, costs reduced, team size, projects delivered, percentages improved. "Increased sales by 35%" is stronger than "Improved sales performance."' },
  { q: 'What if I have no work experience?', a: 'Focus on education, projects, internships, volunteer work, and relevant coursework. Highlight transferable skills like communication, leadership, and problem-solving.' },
]
</script>
