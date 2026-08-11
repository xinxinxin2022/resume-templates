<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h1 class="text-3xl font-bold mb-4">{{ t('templates.title') }}</h1>
      <p class="text-gray-600 mb-8">{{ t('templates.subtitle', { count: templates.length }) }}</p>

      <!-- Filters -->
      <div class="flex flex-wrap gap-3 mb-8">
        <button @click="selectedCategory = ''" :class="selectedCategory === '' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'" class="px-4 py-2 rounded-full text-sm font-medium">{{ t('templates.all') }}</button>
        <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat" :class="selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'" class="px-4 py-2 rounded-full text-sm font-medium">{{ cat }}</button>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <TemplateCard v-for="t in filtered" :key="t.id" :template="t" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { templates } from '../data/templates'
import TemplateCard from '../components/TemplateCard.vue'

const { t } = useI18n()
const categories = ['Professional', 'Creative', 'Modern', 'Elegant']
const selectedCategory = ref('')
const filtered = computed(() => selectedCategory.value ? templates.filter(t => t.category === selectedCategory.value) : templates)
</script>
