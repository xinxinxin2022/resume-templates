<template>
  <div class="py-12"><div class="max-w-3xl mx-auto px-4">
    <h1 class="text-3xl font-bold mb-6">{{ t('contact.title') }}</h1>
    <p class="text-gray-600 mb-4">{{ t('contact.subtitle') }}</p>
    <p class="mb-8">
      <a href="mailto:ben357753@163.com" class="text-blue-600 hover:underline font-medium">ben357753@163.com</a>
    </p>
    <form @submit.prevent="submitted = true" class="space-y-4 max-w-lg">
      <div><label class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.name') }}</label><input v-model="form.name" required class="w-full border rounded-lg px-4 py-2" /></div>
      <div><label class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.email') }}</label><input v-model="form.email" type="email" required class="w-full border rounded-lg px-4 py-2" /></div>
      <div><label class="block text-sm font-medium text-gray-700 mb-1">{{ t('contact.message') }}</label><textarea v-model="form.message" required rows="5" class="w-full border rounded-lg px-4 py-2"></textarea></div>
      <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">{{ t('contact.send') }}</button>
    </form>
    <div v-if="submitted" class="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">{{ t('contact.success') }}</div>
  </div></div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const form = ref({ name: '', email: '', message: '' })
const submitted = ref(false)
</script>
