// apiRoutes.js

const BASE_URL = 'https://hospitalserver-5.onrender.com/api' // Replace this with your API base URL

const API_ROUTES = {

  Auth: {
    login: `${BASE_URL}/user/login`,
  },

  Admin: {
    admitPatient: `${BASE_URL}/admin/admit-patient`
  },

  Doctor: {
    createDoctor: `${BASE_URL}/admin/create-doctor`,
    getDoctorById: (id) => `${BASE_URL}/doctor/${id}/details`,
    updateDoctorById: (id) => `${BASE_URL}/doctor/${id}/update`,
    getAllDoctors: `${BASE_URL}/doctors`,
    assignedPatients: `${BASE_URL}/doctor/patients/`,
    assignPatient:(doctorId) => `${BASE_URL}/admin/assign-patient/${doctorId}`
    
  },

  Patient: {
    createPatient: `${BASE_URL}/patient/create`,
    getPatientById: (id) => `${BASE_URL}/admin/${id}/patient-details`,
    updatePatientById: (id) => `${BASE_URL}/patient/${id}/update`,
    getAllPatients: `${BASE_URL}/admin/all-patients`,
    medicalRecord: (id) => `${BASE_URL}/doctor/${id}/history`
  },

  Appointment: {
    createAppoinment: `${BASE_URL}/appointment/create`,
    getAppointmentById: (id) => `${BASE_URL}/appointment/${id}`,
    updateAppointmentById: (id) => `${BASE_URL}/appointment/${id}/update`,
    getAllAppointments: `${BASE_URL}/appointments`
  },

  Nurse: {
    createNurse: `${BASE_URL}/nurse/create`,
    getNurseById: (id) => `${BASE_URL}/nurse/${id}`,
    updateNurseById: (id) => `${BASE_URL}/nurse/${id}/update`,
    getAllNurse: `${BASE_URL}/nurse`
  },

  Department: {
    createDepartment: `${BASE_URL}/department/create`,
    getDepartmentById: (id) => `${BASE_URL}/department/${id}`,
    updateDepartmentById: (id) => `${BASE_URL}/department/${id}/update`,
    getAllDepartment: `${BASE_URL}/departments`,
    addDoctorToDepartment: (departmentId, doctorId) => `${BASE_URL}/department/${departmentId}/doctor/${doctorId}`,
  },

   Ward: {
   getWardByDepartment: (id) => `${BASE_URL}/departments/${id}/wards`
  },

 
}

export default API_ROUTES





