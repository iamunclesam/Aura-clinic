import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPatient from '../views/Patient/add_patient.vue'
import AllPatient from '../views/Patient/all_patients.vue'
import PatientDetails from '../views/Patient/patient_details.vue'
import UpdatePatient from '../views/Patient/update_patient.vue'
import AddDoctor from '../views/Doctor/add_doctor.vue'
import AllDoctor from '../views/Doctor/all_doctors.vue'
import UpdateDoctor from '../views/Doctor/edit_doctor.vue'
import AssignedPatient from '../views/Doctor/assigned_patient.vue'
import DoctorDetails from '../views/Doctor/doctor_details.vue'
import AddAppointment from '../views/Appointment/add_appointment.vue'
import AllAppointment from '../views/Appointment/all_appointment.vue'
import AppointmentDetails from '../views/Appointment/appointment_details.vue'
import UpdateAppointment from '../views/Appointment/edit_appointment.vue'
import login from '../views/Auth/login.vue'
import AssignDoctor from '../views/Admin/assign_doctor.vue'
import AllNurse from '../views/Nurse/all_nurses.vue'
import AddNurse from '../views/Nurse/add_nurse.vue'
import UpdateNurse from '../views/Nurse/update_nurse.vue'
import NurseDetails from '../views/Nurse/nurse_detail.vue'
import AllWard from '../views/Ward/all_wards.vue'
import { hasRole } from '@/helpers/roleHelper';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true,  role: ['doctor']}
    },

    {
      path: '/login',
      name: 'login',
      component: login
    },

    {
      path: '/admin',
      meta: { breadcrumb: 'Admin,' },
      children: [
        {
          path: 'assign-doctor/:id',
          name: 'AssignDoctor',
          component: AssignDoctor,
          meta: { breadcrumb: 'Assign Doctor', requiresAuth: true, role: ['admin'] }
        }
      ]
    },

    {
      path: '/patient',
      meta: { breadcrumb: 'Patient' },
      children: [
        {
          path: 'add',
          name: 'AddPatient',
          component: AddPatient,
          meta: { breadcrumb: 'Add Patient', requiresAuth: true, role: ['admin'] }
        },
        {
          path: 'all',
          name: 'AllPatients',
          component: AllPatient,
          meta: { breadcrumb: 'All Patients', requiresAuth: true, role: ['doctor']}
        },
        {
          path: ':patientId/details',
          name: 'PatientDetails',
          component: PatientDetails,
          meta: { breadcrumb: 'Patient Details', requiresAuth: true, role: ['admin', 'doctor'] }
        },
        {
          path: 'edit',
          name: 'UpdatePatient',
          component: UpdatePatient,
          meta: { breadcrumb: 'Edit Patient' }
        }
      ]
    },

    {
      path: '/doctor',
      meta: { breadcrumb: 'Doctor' },
      children: [
        {
          path: 'add',
          name: 'AddDoctor',
          component: AddDoctor,
          meta: { breadcrumb: 'Add Doctor',requiresAuth: true, role: ['doctor'] }
        },

        {
          path: 'all',
          name: 'AllDoctor',
          component: AllDoctor,
          meta: { breadcrumb: 'All Doctors', requiresAuth: true, role: ['doctor'] }
        },

        {
          path: 'assigned-patient',
          name: 'AssignedPatient',
          component: AssignedPatient,
          meta: { breadcrumb: 'Assigned Patient', requiresAuth: true, role: ['doctor'] }
        },

        {
          path: 'edit',
          name: 'UpdateDoctor',
          component: UpdateDoctor,
          meta: { breadcrumb: 'Update Doctor', requiresAuth: true, role: ['admin'] }
        },

        {
          path: ':doctorId/details',
          name: 'DoctorDetails',
          component: DoctorDetails,
          meta: { breadcrumb: 'Doctor Details', requiresAuth: true, role: ['doctor'] }
        }
      ]
    },

    {
      path: '/nurse',
      meta: { breadcrumb: 'Nurse' },
      children: [
        {
          path: 'add',
          name: 'AddNurse',
          component: AddNurse,
          meta: { breadcrumb: 'Add Nurses',requiresAuth: true, role: ['admin'] }
        },

        {
          path: 'all',
          name: 'AllNurse',
          component: AllNurse,
          meta: { breadcrumb: 'All Nurses', requiresAuth: true, role: ['admin'] }
        },

        {
          path: 'edit',
          name: 'UpdateNurse',
          component: UpdateNurse,
          meta: { breadcrumb: 'Update Nurse', requiresAuth: true, role: ['admin'] }
        },

        {
          path: ':nurseId/details',
          name: 'NurseDetails',
          component: NurseDetails,
          meta: { breadcrumb: 'Nurse Details', requiresAuth: true, role: ['admin', 'doctor'] }
        }
      ]
    },

    {
      path: '/appointment',
      meta: { breadcrumb: 'Appointment' },
      children: [
        {
          path: 'add',
          name: 'AddAppointment',
          component: AddAppointment,
          meta: { breadcrumb: 'Add Appointment' }
        },

        {
          path: 'all',
          name: 'All Appointment',
          component: AllAppointment,
          meta: { breadcrumb: 'All Appointment' }
        },

        {
          path: 'edit',
          name: 'UpdateAppointment',
          component: UpdateAppointment,
          meta: { breadcrumb: 'Update Appointment' }
        },

        {
          path: 'details',
          name: 'AppointmentDetails',
          component: AppointmentDetails,
          meta: { breadcrumb: 'Appointment Details' }
        }
      ]
    },

    {
      path: '/ward',
      meta: { breadcrumb: 'Ward' },
      children: [
        // {
        //   path: 'add',
        //   name: 'AddWard',
        //   component: AddWard,
        //   meta: { breadcrumb: 'Add Ward' }
        // },

        {
          path: 'all',
          name: 'All Ward',
          component: AllWard,
          meta: { breadcrumb: 'All Ward' }
        },

        // {
        //   path: 'edit',
        //   name: 'UpdateWard',
        //   component: UpdateWard,
        //   meta: { breadcrumb: 'Update Ward' }
        // },

        // {
        //   path: 'details',
        //   name: 'WardDetails',
        //   component: WardDetails,
        //   meta: { breadcrumb: 'Ward Details' }
        // }
      ]
    }

  ]
})

// Navigation guard for protected routes
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const isAuthenticated = !!localStorage.getItem('accessToken')

  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (to.meta.role) {
    if (hasRole(...to.meta.role)) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
