<template>
    <main>
        <dashboardVue title="Patient Details" />
        <div class="sm:ml-64 p-4">
            <section>
                <div class="grid md:grid-cols-2 md:grid-cols-2 gap-4">
                    <div class="col bg-white">
                        <div class=" ">
                            <h1 class="text-indigo-600 p-3 text-2xl border-gray-300 border-b">Patient Details</h1>
                            <div class=" mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                                <div class="patient-image py-3 pb-6">
                                    <img class="w-18 h-18 rounded-full mx-auto"
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                        alt="Bonnie Green avatar">
                                </div>
                                <table class="min-w-full divide-y divide-gray-200 border border-gray-200">
                                    <tbody class="bg-white divide-y divide-gray-200"
                                        v-if="patient">
                                        <tr class="border-b border-gray-200">
                                            <td
                                                class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                                Name</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ patient.name }}</td>
                                        </tr>
                                        <tr class="border-b border-gray-200">
                                            <td
                                                class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                                Date Of Birth</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                                                {{ patient.dateOfBirth }}</td>
                                        </tr>
                                        <tr class="border-b border-gray-200">
                                            <td
                                                class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                                Gender</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ patient.gender }}
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-200">
                                            <td
                                                class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                                Address</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ patient.address }}
                                            </td>
                                        </tr>
                                        <tr class="border-b border-gray-200">
                                            <td
                                                class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                                Phone</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ patient.contactNumber }}</td>
                                        </tr>
                                        <tr class="border-b border-gray-200">
                                            <td
                                                class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                                Email</td>
                                            <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ patient.email }}</td>
                                        </tr>
                                    </tbody>

                                    <div v-else class="flex justify-center items-center h-auto py-6">
                                        <div role="status">
                                            <svg aria-hidden="true"
                                                class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="currentColor" />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentFill" />
                                            </svg>
                                            <span class="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div class="col bg-white h-auto">
                        <section class="dark:bg-gray-900">
                            <div class="mx-auto max-w-screen-xl">
                                <!-- Start coding here -->
                                <div class="bg-white dark:bg-gray-800 relative shadow-md overflow-hidden">
                                    <div
                                        class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                        <h1 class="text-indigo-600 text-2xl">Medical Record</h1>
                                    </div>
                                    <div class="overflow-x-auto">
                                        <table
                                            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700">
                                            <thead
                                                class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col"
                                                        class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        Assigned Doctor</th>
                                                    <th scope="col"
                                                        class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        Date</th>
                                                    <th scope="col"
                                                        class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        Cost</th>
                                                    <th scope="col"
                                                        class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(record, index) in medicalRecord.records" :key="index"
                                                    class="border border-gray-300 dark:border-gray-700">
                                                    <th class="px-4 py-3 border border-gray-300 dark:border-gray-700">{{
                                                        record.assignedDoctor.name }}</th>
                                                    <td class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        {{ record.dateOfAdmission.toLocaleString() }}</td>
                                                    <td class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        $40</td>
                                                    <td class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        {{ record.diagnosis }}
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>

                                        <documentButtonsVue />

                                        <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                                            aria-label="Table navigation">
                                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                Showing
                                                <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                                                of
                                                <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                                            </span>
                                            <ul class="inline-flex items-stretch -space-x-px">
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span class="sr-only">Previous</span>
                                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                            viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                                </li>
                                                <li>
                                                    <a href="#" aria-current="page"
                                                        class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span class="sr-only">Next</span>
                                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                            viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>


                                <div class="bg-white dark:bg-gray-800 relative shadow-md overflow-hidden my-6">
                                    <div
                                        class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                        <h1 class="text-indigo-600 text-2xl">Patient Transactions</h1>
                                    </div>
                                    <div class="overflow-x-auto">
                                        <table
                                            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700">
                                            <thead
                                                class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col"
                                                        class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        Payment Type</th>
                                                    <th scope="col"
                                                        class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        Cost</th>
                                                    <th scope="col"
                                                        class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        Date</th>
                                                    <th scope="col"
                                                        class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="border border-gray-300 dark:border-gray-700">
                                                    <th class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        Credit Card</th>
                                                    <td class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        $50</td>
                                                    <td class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        May, 3rd 2024</td>
                                                    <td class="px-4 py-3 border border-gray-300 dark:border-gray-700">
                                                        <span
                                                            class="bg-yellow-300 text-xs text-white font-medium me-2 px-2.5 py-0.5">Pending</span>
                                                    </td>
                                                </tr>

                                                <!-- Add more rows as needed -->
                                            </tbody>
                                        </table>
                                        <documentButtonsVue />
                                        <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                                            aria-label="Table navigation">
                                            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                Showing
                                                <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                                                of
                                                <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                                            </span>
                                            <ul class="inline-flex items-stretch -space-x-px">
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span class="sr-only">Previous</span>
                                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                            viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                                </li>
                                                <li>
                                                    <a href="#" aria-current="page"
                                                        class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                        class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span class="sr-only">Next</span>
                                                        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                            viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd"
                                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                clip-rule="evenodd" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import dashboardVue from '@/components/layouts/dashboard.vue'
import documentButtonsVue from '@/components/documentButtons.vue'
import ApiService from '@/utils/api_service';
ApiService

export default {
    components: { dashboardVue, documentButtonsVue },
    data() {
        return {
            patient: [],
            medicalRecord: []
        }
    },

    mounted() {
        this.fetchPatient()
    },

    methods: {
    async fetchPatient() {
        try {
            const id = this.$route.params.patientId;
            const response = await ApiService.getPatientById(id);
            const data = response.data;
            this.patient = data;

            // Log patient details before checking for medical record
            console.log("patient details:", data);

            if (data._id) {
                return this.fetchMedicalRecord(data._id);
            }
        } catch (error) {
            console.error(error.message);
        }
    },

    async fetchMedicalRecord(id) {
        try {
            const response = await ApiService.getMedicalRecord(id);
            const data = response.data;
            this.medicalRecord = data.data;
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
}

}
</script>

<style></style>