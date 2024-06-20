<template>
    <div>
      <h1>Add Doctor to Department</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="departmentId">Department ID:</label>
          <input v-model="departmentId" id="departmentId" required>
        </div>
        <div>
          <label for="doctorId">Doctor ID:</label>
          <input v-model="doctorId" id="doctorId" required>
        </div>
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  </template>
  
  <script>
  import ApiService from '../apiService';
  
  export default {
    data() {
      return {
        departmentId: '',
        doctorId: ''
      };
    },
    methods: {
      async handleSubmit() {
        try {
          await ApiService.addDoctorToDepartment(this.departmentId, this.doctorId);
          alert('Doctor added to department successfully');
        } catch (error) {
          console.error('Error adding doctor to department:', error);
          alert('Failed to add doctor to department');
        }
      }
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  