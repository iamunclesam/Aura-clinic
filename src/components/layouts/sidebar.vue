<template>
    <main>
        <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar"
            aria-controls="separator-sidebar" type="button"
            class="inline-flex items-center p-2  ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                </path>
            </svg>
        </button>

        <aside id="separator-sidebar"
            class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div class="h-full py-4 overflow-y-auto bg-indigo-600 dark:bg-gray-800">
                <h1 class="text-left px-6 text-3xl text-white">BLISS CLINIC</h1>
                <ul class=" font-light mt-10">

                    <li class="bg-gray-700 px-3">
                        <RouterLink to="/"
                            class="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group">
                            <svg class="flex-shrink-0 w-4 h-4 text-white transition duration-75 "
                                xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15">
                                <path fill="currentColor" fill-rule="evenodd"
                                    d="M7.08.222a.6.6 0 0 1 .84 0l6.75 6.64a.6.6 0 0 1-.84.856L13 6.902V12.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5V6.902l-.83.816a.6.6 0 1 1-.84-.856zm.42 1.27L12 5.918V12h-2V8.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V12H3V5.918zM7 12h2V9H7z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-wider">Dashboard</span>
                        </RouterLink>
                    </li>

                    <!-- Patients (visible to Admin and Doctor) -->
                    <li v-if="userRole === 'admin'">
                        <RouterLink to="/patient/all"
                            class="flex items-center w-full p-2 px-5 text-base text-white transition duration-75 rounded-lg group">
                            <Icon class="flex-shrink-0 w-4 h-4 text-white transition duration-75" icon="maki:wheelchair"
                                width="4em" height="4em" />
                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-widest">Patients</span>
                        </RouterLink>
                    </li>

                    <!-- Patients (visible to Admin and Doctor) -->
                    <li v-if="userRole === 'doctor'">
                        <RouterLink to="/doctor/assigned-patient"
                            class="flex items-center w-full p-2 px-5 text-base text-white transition duration-75 rounded-lg group">
                            <Icon class="flex-shrink-0 w-4 h-4 text-white transition duration-75" icon="maki:wheelchair"
                                width="4em" height="4em" />
                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-widest">Patients</span>
                        </RouterLink>
                    </li>

                    <!-- Doctor (visible to Admin only) -->
                    <li v-if="userRole === 'admin'">
                        <RouterLink to="/doctor/all"
                            class="flex items-center w-full p-2 px-5 text-base text-white transition duration-75 rounded-lg group">
                            <Icon class="flex-shrink-0 w-4 h-4 text-white transition duration-75 "
                                icon="wpf:medical-doctor" width="4em" height="4em" />
                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-widest">Doctor</span>
                        </RouterLink>
                    </li>

                    <!-- Nurse (visible to Admin only) -->
                    <li v-if="userRole === 'admin'">
                        <RouterLink to="/nurse/all"
                            class="flex items-center w-full p-2 px-5 text-base text-white transition duration-75 rounded-lg group">
                            <Icon class="flex-shrink-0 w-4 h-4 text-white transition duration-75 "
                                icon="streamline:nurse-hat" width="4em" height="4em" />
                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-widest">Nurse</span>
                        </RouterLink>
                    </li>

                    <!-- Nurse (visible to Admin only) -->
                    <li v-if="userRole === 'admin'">
                        <RouterLink to="/nurse/all"
                            class="flex items-center w-full p-2 px-5 text-base text-white transition duration-75 rounded-lg group">
                            <Icon class="flex-shrink-0 w-4 h-4 text-white transition duration-75 "
                                icon="streamline:nurse-hat" width="4em" height="4em" />
                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-widest">Department</span>
                        </RouterLink>
                    </li>

                    <!-- Nurse (visible to Admin only) -->
                    <li v-if="userRole === 'admin'">
                        <RouterLink to="/ward/all"
                            class="flex items-center w-full p-2 px-5 text-base text-white transition duration-75 rounded-lg group">
                            <Icon class="flex-shrink-0 w-4 h-4 text-white transition duration-75 "
                                icon="streamline:nurse-hat" width="4em" height="4em" />
                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-widest">Ward</span>
                        </RouterLink>
                    </li>

                    <!-- Admission (visible to Admin and Nurse) -->
                    <li v-if="userRole === 'admin' || userRole === 'nurse'">
                        <button type="button" to="/admission/all" aria-controls="dropdown-exampleTAd"
                            data-collapse-toggle="dropdown-exampleAd"
                            class="flex items-center w-full p-2 px-5 text-base text-white transition duration-75 rounded-lg group">
                            <Icon class="flex-shrink-0 w-4 h-4 text-white transition duration-75 "
                                icon="material-symbols:ward-outline" width="4em" height="4em" />
                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-widest">Admission</span>

                            <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <ul id="dropdown-exampleAd" class="hidden bg-[#666666] py-2 space-y-2">
                            <li>
                                <RouterLink to="/admission/admit"
                                    class="flex items-center w-full p-2 text-white text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Admit patient</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/appointment/all"
                                    class="flex items-center w-full p-2 text-white text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Admitted patients</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/appointment/details"
                                    class="flex items-center w-full p-2 text-white text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Discharged patients</RouterLink>
                            </li>
                            <!-- <li>
                                <RouterLink to="/appointment/edit"
                                    class="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Edit Appointment</RouterLink>
                            </li> -->
                        </ul>
                    </li>

                    <!-- Appointments (visible to Admin, Doctor, and Nurse) -->
                    <li v-if="userRole === 'admin' || userRole === 'doctor' || userRole === 'nurse'">
                        <button type="button"
                            class="flex items-center w-full p-2 px-5 text-base text-white transition duration-75 rounded-lg group"
                            aria-controls="dropdown-exampleThree" data-collapse-toggle="dropdown-exampleThree">
                            <Icon class="flex-shrink-0 w-4 h-4 text-white transition duration-75 "
                                icon="teenyicons:appointments-outline" width="4em" height="4em" />
                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-widest">Appointments</span>
                            <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <ul id="dropdown-exampleThree" class="hidden bg-[#666666] py-2 space-y-2">
                            <li>
                                <RouterLink to="/appointment/add"
                                    class="flex items-center w-full p-2 text-sm text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Add Appointment</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/appointment/all"
                                    class="flex items-center w-full p-2 text-sm text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    All Appointment</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/appointment/details"
                                    class="flex items-center w-full p-2 text-sm text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Appointment detail</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/appointment/edit"
                                    class="flex items-center w-full p-2 text-sm text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Edit Appointment</RouterLink>
                            </li>
                        </ul>
                    </li>

                    <!-- Payment (visible to Admin only) -->
                    <li v-if="userRole === 'admin'">
                        <button type="button"
                            class="flex items-center w-full p-2 px-5 text-base text-white transition duration-75 rounded-lg group"
                            aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                            <Icon class="flex-shrink-0 w-4 h-4 text-white transition duration-75 " icon="mdi:payment"
                                width="4em" height="4em" />
                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-widest">Payment</span>
                            <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <ul id="dropdown-example" class="hidden bg-[#666666] py-2 space-y-2">
                            <li>
                                <RouterLink to="/payment/add"
                                    class="flex items-center w-full p-2 text-sm text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Add
                                    Payment</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/payment/all"
                                    class="flex items-center w-full p-2 text-sm text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    All
                                    Payment</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/payment/details"
                                    class="flex items-center w-full p-2 text-sm text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Payment
                                    details</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/payment/edit"
                                    class="flex items-center w-full p-2 text-sm text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Edit
                                    Payment</RouterLink>
                            </li>
                        </ul>
                    </li>

                    <!-- Service (visible to Admin and Nurse) -->
                    <li v-if="userRole === 'admin' || userRole === 'nurse'">
                        <button type="button"
                            class="flex items-center w-full p-2 px-5 text-base text-white transition duration-75 rounded-lg group"
                            aria-controls="dropdown-exampleTen" data-collapse-toggle="dropdown-exampleTen">
                            <Icon class="flex-shrink-0 w-4 h-4 text-white transition duration-75 "
                                icon="material-symbols:medical-services-outline-rounded" width="4em" height="4em" />
                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-widest">User</span>
                            <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <ul id="dropdown-exampleTen" class="hidden bg-[#666666] py-2 space-y-2">
                            <li>
                                <RouterLink to="/admin/assign-doctor"
                                    class="flex items-center w-full p-2 text-white text-sm transition duration-75  pl-11 group hover:bg-gray-500 dark:text-white dark:hover:bg-gray-700">
                                    Create User</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/service/all"
                                    class="flex items-center w-full p-2 text-white  text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    All Users</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/service/details"
                                    class="flex items-center w-full p-2 text-white  text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Service
                                    details</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="/service/edit"
                                    class="flex items-center w-full p-2 text-white text-sm transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                                    Edit
                                    Service</RouterLink>
                            </li>
                        </ul>
                    </li>


                </ul>

                <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                    <li>
                        <a href="#"
                            class="flex items-center p-2 px-5 text-white transition duration-75 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <Icon icon="codicon:account" width="1.2em" height="1.2em" />
                            <span class="ms-3">Account</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-2 px-5 text-white text-sm transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <Icon icon="tabler:settings" width="1.2em" height="1.2em" />
                            <span class="ms-3">Documentation</span>
                        </a>
                    </li>
                    <!-- Logout (visible to all roles) -->
                    <li>
                        <button type="button"
                            class="flex items-center w-full p-2 px-5 text-base text-white transition duration-75 rounded-lg group">
                            <Icon class="flex-shrink-0 w-4 h-4 text-white transition duration-75"
                                icon="icon-park-outline:logout" width="4em" height="4em" />

                            <span
                                class="flex-1 ms-3 text-left text-sm rtl:text-right whitespace-nowrap tracking-widest">Logout</span>
                        </button>
                    </li>
                    <li>
                        <a href="#"
                            class="flex items-center p-2 text-white text-sm transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                            <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 21 21">
                                <path
                                    d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
                            </svg>
                            <span class="ms-3">Help</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

    </main>
</template>

<script>
import { getUserRole } from '@/helpers/roleHelper';
import { Icon } from '@iconify/vue';
import { initFlowbite } from 'flowbite';



export default {
    components: {
        Icon
    },
    mounted() {
        initFlowbite()
    },
    data() {
        return {
            userRole: ''
        };
    },
    computed: {
        isAdmin() {
            return this.userRole === 'admin';
        },
        isDoctor() {
            return this.userRole === 'doctor';
        },
        isNurse() {
            return this.userRole === 'nurse';
        }
    },
    created() {
        this.userRole = getUserRole();
    }
}
</script>

<style>
/* Your styles here */

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: #030e3c;
    transition: all 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
    background: #252525;
}

::-webkit-scrollbar-track {
    background: #ffffff84;
}
</style>
