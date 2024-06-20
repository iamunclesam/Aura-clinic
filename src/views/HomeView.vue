<template>
  <main>
    <div v-if="userRole == 'admin'" class="">
      <adminDashboardVue />
    </div>

    <div class="" v-if="userRole == 'doctor'">
      <DoctorDashboard />
    </div>

  </main>
</template>

<script>

import adminDashboardVue from './Admin/adminDashboard.vue'
import DoctorDashboard from './Doctor/doctorDashboard.vue';




export default {
  components: { adminDashboardVue, DoctorDashboard },
  data() {
    return {
      userRole: 'admin' // 
    };
  }
}
</script>

<style></style>