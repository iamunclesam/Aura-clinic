<template>
    <main>
        <dashboardVue title="Appointment Details" />


        <div class="sm:ml-64 p-4">
            <section class="bg-white p-6">
                <h2 class="mb-4 text-2xl border-b border-gray-200 pb-3 font-normal text-pink-500 dark:text-white">
                    Appointment Details</h2>
                <table class="min-w-full bg-white border border-gray-200">
                    <tbody>
                        <tr>
                            <th
                                class="px-6 py-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                                Patient ID</th>
                            <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">PT56</td>
                        </tr>
                        <tr>
                            <th
                                class="px-6 py-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                                Department</th>
                            <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">Dental</td>
                        </tr>
                        <tr>
                            <th
                                class="px-6 py-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                                Doctor Name</th>
                            <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">Dr Kiran Sharma</td>
                        </tr>
                        <tr>
                            <th
                                class="px-6 py-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                                Appointment Date</th>
                            <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">16-Nov-2018</td>
                        </tr>
                        <tr>
                            <th
                                class="px-6 py-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                                Time Slot</th>
                            <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">10AM-11AM</td>
                        </tr>
                        <tr>
                            <th
                                class="px-6 py-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                                Token Number</th>
                            <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">27</td>
                        </tr>
                        <tr>
                            <th
                                class="px-6 py-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-medium text-gray-700">
                                Problem</th>
                            <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">[Description of the
                                Problem]</td>
                        </tr>
                    </tbody>
                </table>
                <documentButtonsVue />

                <div class="p-3">
                    <button type="button"
                        class="text-white gap-1 bg-gradient-to-r from-red-700 to-red-600  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Icon icon="icon-park-outline:delete" width="1.2em" height="1.2em" />
                        Delete
                    </button>
                    <button type="button"
                        class="text-white bg-pink-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Icon icon="flowbite:edit-outline" width="1.5em" height="1.5em" />
                        Edit

                    </button>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import dashboardVue from '@/components/layouts/dashboard.vue'
import documentButtonsVue from '@/components/documentButtons.vue'
import { Icon } from '@iconify/vue';


export default {
    components: { dashboardVue, documentButtonsVue, Icon }
}
</script>

<style></style>