<template>
    <main>
        <div class="inline-flex rounded-md justify-center p-2" role="group">
            <!-- CSV Button -->
            <button type="button"
                class="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-s hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-pink-600 focus:text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-indigo-600" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5m0 0l5-5m-5 5V3" />
                </svg>
                CSV
            </button>
            <!-- Print Button -->
            <button type="button"
                class="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-pink-500 focus:text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-indigo-600" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path
                        d="M6 9V2h12v7M6 18h12v4H6zM18 14H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z" />
                </svg>
                Print
            </button>
            <!-- PDF Button -->
            <button type="button"
                class="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 border-t border-b border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-pink-500 focus:text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-indigo-600" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                    <path d="M14 3v5h5" />
                </svg>
                PDF
            </button>
            <!-- Excel Button -->
            <button type="button"
                class="flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-e hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-pink-500 focus:text-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-indigo-600" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16v16H4zM16 4v4h-4M16 20v-4h-4" />
                    <path d="M4 4l8 8M4 20l8-8" />
                </svg>
                Excel
            </button>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style></style>