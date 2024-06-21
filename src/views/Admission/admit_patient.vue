<template>
    <main>
        <dashboardVue title="Admit Patient" />
        <div class="sm:ml-64 p-4">
            <section class="bg-white dark:bg-gray-900">
                <div class=" mx-auto p-4">
                    <h2 class="mb-4 text-2xl font-normal text-indigo-600 dark:text-white">Admit Patient</h2>
                    <form @submit.prevent="submitForm">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">

                            <!-- Patient ID -->
                            <div class="w-full">
                                <label for="patientId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient ID</label>
                                <input type="text" v-model="form.patientId" id="patientId" name="patientId"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Patient ID" required>
                            </div>

                            <!-- Department Selection -->
                            <div class="w-full">
                                <label for="departmentId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                <select v-model="form.departmentId" id="departmentId" name="departmentId"
                                    @change="fetchWards(form.departmentId)"
                                    class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" disabled>Select Department</option>
                                    <option v-for="department in departments" :key="department._id" :value="department._id">{{ department.name }}</option>
                                </select>
                            </div>

                            <!-- Doctor ID -->
                            <div class="w-full">
                                <label for="assignedDoctor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Doctor ID</label>
                                <input type="text" v-model="form.assignedDoctor" id="assignedDoctor" name="assignedDoctor"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Doctor ID" required>
                            </div>

                            <!-- Admission Date -->
                            <div class="w-full">
                                <label for="admissionDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admission Date</label>
                                <input type="date" v-model="form.admissionDate" id="admissionDate" name="admissionDate"
                                    class="bg-white border border-gray-200 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    required>
                            </div>

                            <!-- Discharge Date -->
                            <div class="w-full">
                                <label for="dischargeDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discharge Date</label>
                                <input type="date" v-model="form.dischargeDate" id="dischargeDate" name="dischargeDate"
                                    class="bg-white border border-gray-200 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            </div>

                            <!-- Reason for Admission -->
                            <div class="w-full">
                                <label for="reasonForAdmission" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason for Admission</label>
                                <input type="text" v-model="form.reasonForAdmission" id="reasonForAdmission" name="reasonForAdmission"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Reason for Admission" required>
                            </div>

                            <!-- Current Status -->
                            <div class="w-full">
                                <label for="currentStatus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Status</label>
                                <select v-model="form.currentStatus" id="currentStatus" name="currentStatus"
                                    class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="admitted">Admitted</option>
                                    <option value="discharged">Discharged</option>
                                    <option value="transferred">Transferred</option>
                                </select>
                            </div>

                            <!-- Room Number -->
                            <div class="w-full">
                                <label for="roomNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room Number</label>
                                <input type="text" v-model="form.roomNumber" id="roomNumber" name="roomNumber"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Room Number" required>
                            </div>

                            <!-- Ward Selection -->
                            <div class="w-full">
                                <label for="wardId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ward</label>
                                <select v-model="form.wardId" id="wardId" name="wardId"
                                    class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="" disabled>Select Ward</option>
                                    <option v-for="ward in wards" :key="ward._id" :value="ward._id">{{ ward.name }}</option>
                                </select>
                            </div>

                            <!-- Bed Number -->
                            <div class="w-full">
                                <label for="bedNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bed Number</label>
                                <input type="number" v-model="form.bedNumber" id="bedNumber" name="bedNumber"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Bed Number" required>
                            </div>

                            <!-- Notes -->
                            <div class="sm:col-span-2">
                                <label for="notes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notes</label>
                                <textarea v-model="form.notes" id="notes" name="notes" rows="5"
                                    class="block p-2.5 w-full text-sm text-gray-900 rounded border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Notes"></textarea>
                            </div>
                        </div>
                        <button type="submit"
                            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-indigo-700 rounded focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import dashboardVue from '@/components/layouts/dashboard.vue';
import ApiService from '@/utils/api_service';
import { toast } from 'vue3-toastify';

export default {
    name: "AddPatient",
    components: {
        dashboardVue
    },
    data() {
        return {
            form: {
                patientId: '',
                departmentId: '',
                assignedDoctor: '',
                admissionDate: '',
                dischargeDate: '',
                reasonForAdmission: '',
                currentStatus: 'admitted',
                roomNumber: '',
                wardId: '',
                bedNumber: '',
                notes: ''
            },
            departments: [],
            wards: [],
            beds: []
        };
    },
    mounted() {
        this.fetchAllDepartments();
    },
    methods: {
        async submitForm() {
            try {
                const response = await ApiService.admitPatient(this.form, this.form.assignedDoctor);
                console.log('Successfully submitted:', response.data);
                toast.success("Patient admitted successfully!");
            } catch (error) {
                console.error('Error submitting:', error);
                toast.error(error.message);
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
        async fetchWards(departmentId) {
            try {
                const response = await ApiService.getWardByDepartment(departmentId);
                this.wards = response.data;
                console.log(response.data);
            } catch (error) {
                console.log(error.message);
            }
        }
    }
};
</script>

<style scoped>
/* Add any scoped styles here */
</style>
