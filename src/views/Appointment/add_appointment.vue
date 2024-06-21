<template>
    <main>
        <dashboardVue title="Add Appointment" />
        <div class="sm:ml-64 p-4">
            <section class="bg-white dark:bg-gray-900">
                <div class=" mx-auto p-4">
                    <h2 class="mb-4 text-2xl font-normal text-indigo-600 dark:text-white">Add Appointment</h2>
                    <form action="#">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">

                            <div class="w-full">
                                <label for="brand"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient
                                    Name</label>
                                <input type="text" name="brand" id="brand"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Patient Name" required="">
                            </div>
                            <div class="w-full">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>

                                <form class="max-w-sm mx-auto">
                                    <select id="countries"
                                        class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>Nuero</option>
                                        <option value="FR">Ortho</option>
                                        <option value="DE">General</option>
                                    </select>
                                </form>

                            </div>
                            <div class="w-full">
                                <label for="brand"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Doctor
                                    ID</label>
                                <input type="text" name="brand" id="brand"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Doctor ID" required="">
                            </div>

                            <div class="w-full">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Appointment
                                    Date</label>
                                <input type="date" name="price" id="price"
                                    class="bg-white border border-gray-200 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="DOB" required="">
                            </div>
                            <div class="w-full">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time
                                    slot</label>

                                <form class="m mx-auto">
                                    <select id="countries"
                                        class="border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option selected>10AM-11AM</option>
                                        <option value="FR">12PM-1PM</option>
                                        <option value="DE">2PM-3PM</option>
                                    </select>
                                </form>

                            </div>
                            <div class="w-full">
                                <label for="brand"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Token Number  <span class="text-xs">(Auto generated)</span></label>
                                <input type="text" name="brand" id="brand"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Email" required="">
                            </div>

                            <div class="sm:col-span-2">
                                <label for="description"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Problem</label>
                                <textarea id="description" rows="5"
                                    class="block p-2.5 w-full text-sm text-gray-900 rounded border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Problem"></textarea>
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
import dashboardVue from '@/components/layouts/dashboard.vue'

export default {
    name: "AddPatient",
    components: {
        dashboardVue
    }
}
</script>

<style></style>