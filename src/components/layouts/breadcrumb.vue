<template>
  <nav class="px-5 py-3 text-gray-700 border border-gray-200 bg-gray-700 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Breadcrumb">
    <div class="md:flex justify-between items-center">
      <h1 class="text-white text-lg_ md:text-2xl tracking-wider">{{ title }}</h1>
      <ol
        class="inline-flex items-center md:bg-indigo-600 py-2 md:px-3 rounded-full space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
          <router-link to="/"
            class="inline-flex items-center text-sm font-medium text-white hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-3 h-3 me-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 20 20">
              <path
                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </router-link>
        </li>
        <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="inline-flex items-center">
          <div v-if="index > 0" class="flex items-center">
            <svg class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
          </div>
          <router-link v-if="index < breadcrumbs.length - 1" :to="breadcrumb.path"
            class="ms-1 text-sm font-medium text-white hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
            {{ breadcrumb.meta.breadcrumb }}
          </router-link>
          <span v-else class="ms-1 text-sm font-medium text-white md:ms-2 dark:text-gray-400">
            {{ breadcrumb.meta.breadcrumb }}
          </span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    breadcrumbs() {
      return this.$route.matched;
    }
  }
};
</script>

<style scoped>
/* Add any styles you want for your breadcrumb */
</style>