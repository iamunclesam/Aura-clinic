<template>
    <main>
        <div class="flex items-center gap-8 h-28 rounded bg-gray-50 dark:bg-gray-800 px-6">
            <Icon :icon=mainIcon width="4em" height="4em" />
            <div class="content">
                <p class="text-pink-600 text-sm">{{ title }}</p>
                <h1 class="text-3xl text-pink-500 py-1 text-gray-900 dark:text-gray-500">
                    {{ amount }}
                </h1>
                <p class="text-xs flex items-center gap-2">
                    <Icon :icon=performanceIcon class="text-gray-500 " width="2em" height="2em" />
                    {{ performance }}
                </p>
            </div>

        </div>
    </main>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    props: {
        title: {
            type: String
        },
        performance: {
            type: String
        },
        amount: {
            type: String
        },
        mainIcon: {
            type: String
        },
        performanceIcon: {
            type: String
        }

    },
    components: { Icon },
    data() {
        return {
           
        }
    }
}
</script>

<style></style>