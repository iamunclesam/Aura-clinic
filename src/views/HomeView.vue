<template>
  <main>
    <div v-if="isAdmin" class="">
      <adminDashboardVue />
    </div>

    <div class="" v-if="isDoctor">
      <DoctorDashboard />
    </div>

  </main>
</template>

<script>

import { getUserRole } from '@/helpers/roleHelper';
import adminDashboardVue from './Admin/adminDashboard.vue'
import DoctorDashboard from './Doctor/doctorDashboard.vue';

export default {
  components: { adminDashboardVue, DoctorDashboard },
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
    let user = getUserRole();
    // setTimeout(function () {
    // 
    // }, 2000);
    if (user) {
      this.userRole = getUserRole();
    }
   
    console.log(user);

  }
}
</script>

<style></style>