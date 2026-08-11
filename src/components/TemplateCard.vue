<template>
  <div class="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
    <router-link :to="`/templates/${template.id}`" class="block">
      <div class="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-3">
        <img :src="template.preview" :alt="template.name" class="w-full h-full object-cover" loading="lazy" />
      </div>
      <h3 class="font-semibold text-gray-900 mb-1">{{ template.name }}</h3>
      <div class="flex items-center gap-2 mb-2">
        <span class="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{{ template.category }}</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">{{ template.style }}</span>
      </div>
      <p class="text-sm text-gray-500">{{ template.pages }} page{{ template.pages > 1 ? 's' : '' }} · {{ template.color }}</p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import type { Template } from '../data/templates'
defineProps<{ template: Template }>()
</script>
