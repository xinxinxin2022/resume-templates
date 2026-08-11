<template>
  <div class="py-12" v-if="template">
    <div class="max-w-5xl mx-auto px-4">
      <router-link to="/templates" class="text-blue-600 hover:underline mb-4 inline-block">{{ t('detail.back') }}</router-link>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Preview -->
        <div>
          <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img :src="template.preview" :alt="template.name" class="w-full" />
          </div>
        </div>

        <!-- Info -->
        <div>
          <h1 class="text-3xl font-bold mb-2">{{ template.name }}</h1>
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">{{ template.category }}</span>
            <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">{{ template.style }}</span>
            <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">{{ template.color }}</span>
            <span class="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">{{ template.pages }} {{ t('detail.pages') }}</span>
          </div>

          <p class="text-gray-700 mb-6">{{ template.description }}</p>

          <h3 class="font-semibold mb-3">{{ t('detail.features') }}</h3>
          <ul class="space-y-2 mb-8">
            <li v-for="f in template.features" :key="f" class="flex items-center text-gray-700">
              <Check class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
              {{ f }}
            </li>
          </ul>

          <button class="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 mb-3">
            {{ t('detail.download') }}
          </button>
          <p class="text-sm text-gray-500 text-center">{{ t('detail.compatible') }}</p>
        </div>
      </div>

      <!-- Related -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold mb-6">{{ t('detail.moreTemplates', { category: template.category }) }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TemplateCard v-for="t in related" :key="t.id" :template="t" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { templates } from '../data/templates'
import TemplateCard from '../components/TemplateCard.vue'
import { Check } from 'lucide-vue-next'

const { t } = useI18n()
const route = useRoute()
const template = computed(() => templates.find(t => t.id === Number(route.params.id)))
const related = computed(() => templates.filter(t => t.category === template.value?.category && t.id !== template.value?.id).slice(0, 4))
</script>
