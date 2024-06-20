<template>
    <main>
        <dashboardVue title="Doctor Details" />


        <div class="sm:ml-64 p-4">
            <section>
                <div class="grid grid-cols-1 md:grid-cols-3 bg-white">
                    <div class="col bg-white">
                        <div class="p-3">
                            <h1 class="text-indigo-600 text-2xl">Doctor Details</h1>
                            <div class=" mx-auto bg-white overflow-hidden">
                                <div class="patient-image py-3 pb-6">
                                    <img class="w-full h-18 mx-auto"
                                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                                        alt="Bonnie Green avatar">
                                </div>

                                <div class="content">
                                    <h1 class="text-3xl">Dr. {{ doctor.name }}</h1>
                                    <p class="text-lg py-3 text-gray-500">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Et vero deleniti numquam enim.</p>

                                    <button class="py-2 5 px-3 bg-green-600 text-white">
                                        Edit Doctor
                                    </button>

                                    <button class="py-2 5 mx-3 px-3 bg-red-600 text-white">
                                        Delete Doctor
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-span-2 bg-white h-auto" v-if="doctor">
                        <table class="min-w-full divide-y divide-gray-200 border border-gray-200">
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr class="border-b border-gray-200">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                        Specialization</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-gray-500">Cardiology</td>
                                </tr>
                                <tr class="border-b border-gray-200">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                        Experience</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ doctor.yearsOfExperience }}
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-200">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                        Gender</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ doctor.gender }}</td>
                                </tr>
                                <tr class="border-b border-gray-200">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                        Address</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ doctor.address }}</td>
                                </tr>
                                <tr class="border-b border-gray-200">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                        Phone</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ doctor.phone }}</td>
                                </tr>
                                <tr class="border-b border-gray-200">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                        Date of Birth</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-gray-500">26-10-1989</td>
                                </tr>
                                <tr class="border-b border-gray-200">
                                    <td
                                        class="px-6 py-4 whitespace-nowrap font-medium text-gray-900 border-r border-gray-200">
                                        Email</td>
                                    <td class="px-6 py-4 whitespace-nowrap text-gray-500">{{ doctor.email }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <documentButtonsVue />
                    </div>
                </div>

                <section class="">
                    <div class="mx-auto max-w-screen-xl">
                        <!-- Start coding here -->
                        <div class="bg-white dark:bg-gray-800 relative shadow-md overflow-hidden">
                            <div
                                class="flex flex-col items-center md:flex-row items-center border-b justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                                <h1 class="text-indigo-600 text-2xl">Assigned Patients</h1>
                                <button class="bg-indigo-600 text-white rounded text-sm py-2 px-3"
                                    @click="selectPatient(doctor._id)">Assign new patient</button>
                            </div>
                            <div class="overflow-x-auto">
                                <div class="overflow-x-auto">
                                    <table v-if="assignedPatients && assignedPatients.length > 0"
                                        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                                        <thead
                                            class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col"
                                                    class="px-4 py-3 border-r border-gray-200 dark:border-gray-700">
                                                    Patient name
                                                </th>
                                                <th scope="col"
                                                    class="px-4 py-3 border-r border-gray-200 dark:border-gray-700">
                                                    Injury/Condition
                                                </th>
                                                <th scope="col" class="px-4 py-3">Visit Date</th>
                                                <th scope="col" class="px-4 py-3">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(patient, index) in assignedPatients"
                                                @click="goToLink(patient._id)" :key="index"
                                                class="border-b border-gray-200 dark:border-gray-700">
                                                <th scope="row"
                                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white border-r border-gray-200 dark:border-gray-700">
                                                    {{ patient.name }}</th>
                                                <td class="px-4 py-3 border-r border-gray-200 dark:border-gray-700">
                                                    Viral fever</td>
                                                <td class="px-4 py-3 border-r border-gray-200 dark:border-gray-700">3rd
                                                    Thu 2024</td>
                                                <td class="px-4 py-3"><span
                                                        class="bg-yellow-300 text-xs text-white font-medium me-2 px-2.5 py-0.5">Pending</span>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>

                                    <div v-else-if="assignedPatients.length <= 0"
                                        class="flex justify-center text-center w-full mx-auto items-center h-auto py-6">
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

                                    <div class="text-center p-4" v-else>
                                        <h1 class="text-xl text-center text-gray-500 flex justify-center items-center">
                                            <Icon icon="material-symbols:fmd-bad-outline-rounded" width="1.5em"
                                                height="1.5em" />No assigned patient
                                        </h1>
                                    </div>


                                </div>
                            </div>
                            <documentButtonsVue />
                            <nav class="m-3" aria-label="Page navigation example">
                                <ul class="flex items-center -space-x-px h-8 text-sm">
                                    <li>
                                        <a href="#"
                                            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                            <span class="sr-only">Previous</span>
                                            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                    </li>
                                    <li>
                                        <a href="#" aria-current="page"
                                            class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                            <span class="sr-only">Next</span>
                                            <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </main>
</template>

<script>
import dashboardVue from '@/components/layouts/dashboard.vue'
import documentButtonsVue from '@/components/documentButtons.vue'
import ApiService from '@/utils/api_service'
import { Icon } from '@iconify/vue'


export default {
    components: { dashboardVue, documentButtonsVue, Icon },
    data() {
        return {
            doctor: [],
            patientId: '',
            assignedPatients: []
        }
    },

    mounted() {
        this.fetchDoctor()
    },

    methods: {
        async fetchDoctor() {
            try {
                const id = this.$route.params.doctorId;
                const response = await ApiService.getDoctorById(id);
                const data = response.data;
                this.doctor = data;
                if (data.assignedPatient && Array.isArray(data.assignedPatient)) {
                    this.assignedPatients = await Promise.all(
                        data.assignedPatient.map(async (patient) => {
                            return this.fetchPatient(patient.patient);
                        })
                    );
                } else {
                    console.warn('No assigned patients found for this doctor');
                }

                console.log(data.assignedPatient);
            } catch (error) {
                console.error(error.message)
            }
        },

        async fetchPatient(id) {
            try {
                const response = await ApiService.getPatientById(id);
                const data = response.data;

                if (!data) {
                    console.error('No patient data found');
                    return;
                }


                // Ensure assignedPatients is an array and push the fetched patient data
                if (!Array.isArray(this.assignedPatients)) {
                    this.assignedPatients = [];
                }

                this.assignedPatients.push(data);
                console.log('Patient data:', data);
            } catch (error) {
                console.error('Error fetching patient:', error.message);
            }
        },

        goToLink(id) {
            this.$router.push(`/patient/${id}/details`)
        },

        selectPatient(id) {
            this.$router.push({ name: 'AssignDoctor', params: { id: id } })
        }
    }
}
</script>

<style></style>