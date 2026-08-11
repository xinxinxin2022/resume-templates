<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <router-link to="/templates" class="text-blue-600 hover:underline mb-4 inline-block">{{ t('category.back') }}</router-link>
      <h1 class="text-3xl font-bold mb-3">{{ currentInfo?.title || slug }}</h1>
      <p class="text-gray-600 mb-8 max-w-3xl">{{ currentInfo?.description }}</p>

      <div v-if="filtered.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <TemplateCard v-for="t in filtered" :key="t.id" :template="t" />
      </div>
      <div v-else class="text-center py-12 text-gray-500">
        <p class="text-lg">{{ t('category.noResults') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { templates, categoryInfo } from '../data/templates'
import TemplateCard from '../components/TemplateCard.vue'

const { t } = useI18n()
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const currentInfo = computed(() => {
  const key = Object.keys(categoryInfo).find(k => k.toLowerCase() === slug.value)
  return key ? categoryInfo[key] : null
})
const filtered = computed(() => templates.filter(t => t.category.toLowerCase() === slug.value))
</script>
