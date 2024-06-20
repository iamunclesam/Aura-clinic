import axios from 'axios'
import API_ROUTES from './apiRoutes'

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: 'https://hospitalserver-5.onrender.com/api',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

// Add a request interceptor to include the access token in the headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Add a response interceptor to handle token expiry and refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const refreshToken = localStorage.getItem('refreshToken')
        const { data } = await axios.post(`${api.defaults.baseURL}/refresh-token`, {
          token: refreshToken
        })
        localStorage.setItem('accessToken', data.accessToken)
        api.defaults.headers['Authorization'] = `Bearer ${data.accessToken}`
        return api(originalRequest)
      } catch (refreshError) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

const ApiService = {
  //Auth endpoints
  userLogin: (data) => api.post(API_ROUTES.Auth.login, data),

  // Doctor endpoints
  createDoctor: (doctorData) => api.post(API_ROUTES.Doctor.createDoctor, doctorData),
  getDoctorById: (id) => api.get(API_ROUTES.Doctor.getDoctorById(id)),
  updateDoctorById: (id, doctorData) => api.put(API_ROUTES.Doctor.updateDoctorById(id), doctorData),
  getAllDoctors: () => api.get(API_ROUTES.Doctor.getAllDoctors),
  getDoctorPatients: () => api.get(API_ROUTES.Doctor.assignedPatients),
  assignPatientToDoctor: (doctorId, data) => api.post(API_ROUTES.Doctor.assignPatient(doctorId), data),

  // Patient endpoints
  createPatient: (patientData) => api.post(API_ROUTES.Patient.createPatient, patientData),
  getPatientById: (id) => api.get(API_ROUTES.Patient.getPatientById(id)),
  updatePatientById: (id, patientData) =>
    api.put(API_ROUTES.Patient.updatePatientById(id), patientData),
  getAllPatients: () => api.get(API_ROUTES.Patient.getAllPatients),
  getMedicalRecord: (id) => api.get(API_ROUTES.Patient.medicalRecord(id)),

  // Appointment endpoints
  createAppointment: (appointmentData) =>
    api.post(API_ROUTES.Appointment.createAppointment, appointmentData),
  getAppointmentById: (id) => api.get(API_ROUTES.Appointment.getAppointmentById(id)),
  updateAppointmentById: (id, appointmentData) =>
    api.put(API_ROUTES.Appointment.updateAppointmentById(id), appointmentData),
  getAllAppointments: () => api.get(API_ROUTES.Appointment.getAllAppointments),

  // Nurse endpoints
  createNurse: (nurseData) => api.post(API_ROUTES.Nurse.createNurse, nurseData),
  getNurseById: (id) => api.get(API_ROUTES.Nurse.getNurseById(id)),
  updateNurseById: (id, nurseData) => api.put(API_ROUTES.Nurse.updateNurseById(id), nurseData),
  getAllNurses: () => api.get(API_ROUTES.Nurse.getAllNurse),

  // Department endpoints
  createDepartment: (departmentData) =>
    api.post(API_ROUTES.Department.createDepartment, departmentData),
  getDepartmentById: (id) => api.get(API_ROUTES.Department.getDepartmentById(id)),
  updateDepartmentById: (id, departmentData) =>
    api.put(API_ROUTES.Department.updateDepartmentById(id), departmentData),
  getAllDepartments: () => api.get(API_ROUTES.Department.getAllDepartment),
  addDoctorToDepartment: (departmentId, doctorId) =>
    api.post(API_ROUTES.Department.addDoctorToDepartment(departmentId, doctorId)),

  // Ward endpoints
  createWard: (wardData) => api.post(API_ROUTES.Ward.createWard, wardData),
  getWardById: (id) => api.get(API_ROUTES.Ward.getWardById(id)),
  updateWardById: (id, wardData) => api.put(API_ROUTES.Ward.updateWardById(id), wardData),
  getAllWards: () => api.get(API_ROUTES.Ward.getAllWard)
}

export default ApiService
