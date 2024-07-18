<template>
    <main>
        <dashboardVue title="Add Doctor" />


        <div class="sm:ml-64 p-4">
            <section class="bg-white dark:bg-gray-900">
                <div class=" mx-auto p-4">
                    <h2 class="mb-4 text-2xl font-normal text-indigo-600 dark:text-white">Add Doctor</h2>
                    <form action="#">
                        <h2 class="my-6 text-md font-bold text-black dark:text-white">Personal Details</h2>
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">

                            <div class="w-full">
                                <label for="brand"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Doctor
                                    Name</label>
                                <input type="text" name="brand" id="brand"
                                    class="bg-white border border-gray-200 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Doctor Name" required="">
                            </div>
                            <!-- Department Selection -->
                            <div class="w-full">
                                <label for="departmentId"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                <select v-model="doctor.departmentId" id="departmentId" name="departmentId"
                                    class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" disabled>Select Department</option>
                                    <option v-for="department in departments" :key="department._id"
                                        :value="department._id">{{ department.name }}</option>
                                </select>
                            </div>
                            <div class="w-full">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of
                                    Birth</label>
                                <input type="date" name="price" id="price"
                                    class="bg-white border border-gray-200 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="DOB" required="">
                            </div>
                            <div class="w-full">
                                <label for="brand"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Specialization</label>
                                <input type="text" name="brand" id="brand"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Specialization" required="">
                            </div>
                            <div class="w-full">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                                <input type="text" name="price" id="price"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Experience" required="">
                            </div>

                            <div class="w-full">
                                <label for="brand"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                <input type="text" name="brand" id="brand"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Age" required="">
                            </div>
                            <div class="w-full">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                <input type="number" name="price" id="price"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Phone" required="">
                            </div>

                            <div class="w-full">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>


                                <select id="countries"
                                    class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Male</option>
                                    <option value="FR">Female</option>
                                    <option value="DE">Other</option>
                                </select>


                            </div>

                            <div class="w-full">
                                <label for="description"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Doctor
                                    Details</label>
                                <textarea id="description" rows="5"
                                    class="block p-2.5 w-full text-sm text-gray-900 rounded border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Doctor Details"></textarea>
                            </div>

                            <div class="w-full">
                                <label for="description"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                <textarea id="description" rows="5"
                                    class="block p-2.5 w-full text-sm text-gray-900 rounded border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Doctor Address"></textarea>
                            </div>
                        </div>

                        <h2 class="my-6 text-md font-bold text-black dark:text-white">Account Details</h2>
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">

                            <div class="w-full">
                                <label for="brand"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account
                                    Email</label>
                                <input type="text" v-model="doctor.email" name="brand" id="brand"
                                    class="bg-white border border-gray-200 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Email" required="">
                            </div>
                            <div class="w-full">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" v-model="doctor.password" name="price" id="price"
                                    class="bg-white border border-gray-200 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Password" required="">
                            </div>

                        </div>
                        <button type="submit" @click.prevent="createDoctor"
                            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-indigo-700 rounded focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            <span v-if="!isLoading">Save</span>
                            <span v-else>
                                <svg aria-hidden="true" class="inline w-4 h-4 text-gray-200 animate-spin"
                                    viewBox="0 0 100 101" fill="none">
                                    <path fill="currentColor"
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                                    <path fill="currentFill"
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" />
                                    <path fill="currentColor"
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </span>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import dashboardVue from '@/components/layouts/dashboard.vue'
import ApiService from '@/utils/api_service';
import { initFlowbite } from 'flowbite';
import { toast } from 'vue3-toastify';


export default {
    components: { dashboardVue },
    data() {
        return {
            doctor: {
                name: '',
                experience: '',
                specialization: '',
                dataOfBirth: '',
                departmentId: '',
                age: '',
                email: '',
                gender: '',
                address: '',
                doctorDetails: '',
                password: ''
            },

            departments: [],
            isLoading: false
        }
    },

    mounted() {
        // this.createDoctor();
        this.fetchAllDepartments();
        this.initializeFlowbite()
        initFlowbite()
    },

    methods: {
        async createDoctor() {
            try {
                const data = await ApiService.createDoctor(this.doctor);
                console.log(data);
                toast.success("Doctor created")
            } catch (error) {
                console.error(error.message)
                toast.error("Something went wrong")
            }
        },

        async fetchAllDepartments() {
            try {
                const response = await ApiService.getAllDepartments();
                this.departments = response.data;
            } catch (error) {
                console.log(error.message);
            }
        },

        initializeFlowbite() {
            // Reinitialize Flowbite components
            if (typeof window !== 'undefined' && window.Flowbite) {
                window.Flowbite.init();
            }
        }

    },

    watch: {
        '$route'() {
            // Reinitialize Flowbite on route change
            this.$nextTick(() => {
                this.initializeFlowbite();
            });
        }
    }
}
</script>

<style></style>