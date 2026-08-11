<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="flex items-center gap-2">
            <FileText class="w-7 h-7 text-blue-600" />
            <span class="text-xl font-bold text-gray-900">{{ t('footer.brand') }}</span>
          </router-link>
          <nav class="hidden md:flex items-center gap-8">
            <router-link to="/templates" class="text-gray-700 hover:text-blue-600 font-medium">{{ t('nav.templates') }}</router-link>
            <router-link to="/category/professional" class="text-gray-700 hover:text-blue-600 font-medium">{{ t('nav.professional') }}</router-link>
            <router-link to="/category/creative" class="text-gray-700 hover:text-blue-600 font-medium">{{ t('nav.creative') }}</router-link>
            <router-link to="/category/modern" class="text-gray-700 hover:text-blue-600 font-medium">{{ t('nav.modern') }}</router-link>
            <router-link to="/blog" class="text-gray-700 hover:text-blue-600 font-medium">{{ t('nav.blog') }}</router-link>
            <router-link to="/faq" class="text-gray-700 hover:text-blue-600 font-medium">{{ t('nav.faq') }}</router-link>
          </nav>
          <div class="flex items-center gap-3 md:hidden">
            <button @click="mobileMenu = !mobileMenu" class="md:hidden">
              <Menu class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="mobileMenu" class="md:hidden border-t bg-white">
        <div class="px-4 py-3 space-y-2">
          <router-link to="/templates" class="block py-2 text-gray-700" @click="mobileMenu = false">{{ t('nav.allTemplates') }}</router-link>
          <router-link to="/category/professional" class="block py-2 text-gray-700" @click="mobileMenu = false">{{ t('nav.professional') }}</router-link>
          <router-link to="/category/creative" class="block py-2 text-gray-700" @click="mobileMenu = false">{{ t('nav.creative') }}</router-link>
          <router-link to="/category/modern" class="block py-2 text-gray-700" @click="mobileMenu = false">{{ t('nav.modern') }}</router-link>
          <router-link to="/category/elegant" class="block py-2 text-gray-700" @click="mobileMenu = false">{{ t('nav.elegant') }}</router-link>
          <router-link to="/blog" class="block py-2 text-gray-700" @click="mobileMenu = false">{{ t('nav.blog') }}</router-link>
          <router-link to="/faq" class="block py-2 text-gray-700" @click="mobileMenu = false">{{ t('nav.faq') }}</router-link>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 py-12 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-white font-bold mb-4">{{ t('footer.brand') }}</h3>
            <p class="text-sm">{{ t('footer.tagline') }}</p>
            <p class="text-sm mt-3"><a href="mailto:ben357753@163.com" class="text-gray-400 hover:text-white">ben357753@163.com</a></p>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-3">{{ t('footer.templates') }}</h4>
            <ul class="space-y-2 text-sm">
              <li><router-link to="/category/professional" class="hover:text-white">{{ t('nav.professional') }}</router-link></li>
              <li><router-link to="/category/creative" class="hover:text-white">{{ t('nav.creative') }}</router-link></li>
              <li><router-link to="/category/modern" class="hover:text-white">{{ t('nav.modern') }}</router-link></li>
              <li><router-link to="/category/elegant" class="hover:text-white">{{ t('nav.elegant') }}</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-3">{{ t('footer.resources') }}</h4>
            <ul class="space-y-2 text-sm">
              <li><router-link to="/blog" class="hover:text-white">{{ t('nav.blog') }}</router-link></li>
              <li><router-link to="/faq" class="hover:text-white">{{ t('nav.faq') }}</router-link></li>
              <li><router-link to="/about" class="hover:text-white">{{ t('nav.about') }}</router-link></li>
              <li><router-link to="/contact" class="hover:text-white">{{ t('nav.contact') }}</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-3">{{ t('footer.legal') }}</h4>
            <ul class="space-y-2 text-sm">
              <li><router-link to="/privacy-policy" class="hover:text-white">{{ t('nav.privacy') }}</router-link></li>
              <li><router-link to="/terms-of-service" class="hover:text-white">{{ t('nav.terms') }}</router-link></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>{{ t('footer.copyright') }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { FileText, Menu } from 'lucide-vue-next'

const { t } = useI18n()
const mobileMenu = ref(false)
</script>
