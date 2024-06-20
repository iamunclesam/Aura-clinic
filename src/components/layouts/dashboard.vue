<template>
    <main>
        <sidebarVue />
        <div class="sm:ml-64">
            <header-vue />
            <breadcrumb-vue :title="title" />
        </div>
    </main>
</template>

<script>
import breadcrumbVue from './breadcrumb.vue'
import headerVue from './header.vue'
import sidebarVue from './sidebar.vue'

export default {
    props: {
        title:{
            type: String
        } 
    },
    components: {
        breadcrumbVue,
        headerVue,
        sidebarVue
    }
}
</script>

<style></style>