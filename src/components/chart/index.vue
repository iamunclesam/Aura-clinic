<template>
  <div class="status-bar-container bg-gray-100 p-4 rounded-lg shadow-lg flex justify-around items-center">
    <div class="status-item">
      <div class="flex items-center">
        <span class="text-green-500 mr-2">
          <i class="fas fa-check-circle fa-lg"></i>
        </span>
        <div>
          <div class="progress-bar">
            <div class="progress-bar-fill bg-green-500" :style="{ width: completedPercentage + '%' }"></div>
          </div>
          <div class="status-label text-gray-600">Completed</div>
        </div>
      </div>
    </div>
    <div class="status-item">
      <div class="flex items-center">
        <span class="text-red-500 mr-2">
          <i class="fas fa-times-circle fa-lg"></i>
        </span>
        <div>
          <div class="progress-bar">
            <div class="progress-bar-fill bg-red-500" :style="{ width: cancelledPercentage + '%' }"></div>
          </div>
          <div class="status-label text-gray-600">Cancelled</div>
        </div>
      </div>
    </div>
    <div class="status-item">
      <div class="flex items-center">
        <span class="text-blue-500 mr-2">
          <i class="fas fa-exclamation-circle fa-lg"></i>
        </span>
        <div>
          <div class="progress-bar">
            <div class="progress-bar-fill bg-blue-500" :style="{ width: rescheduledPercentage + '%' }"></div>
          </div>
          <div class="status-label text-gray-600">Rescheduled</div>
        </div>
      </div>
    </div>
    <div class="status-item">
      <div class="flex items-center">
        <span class="text-yellow-500 mr-2">
          <i class="fas fa-clock fa-lg"></i>
        </span>
        <div>
          <div class="progress-bar">
            <div class="progress-bar-fill bg-yellow-500" :style="{ width: pendingPercentage + '%' }"></div>
          </div>
          <div class="status-label text-gray-600">Pending</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "https://kit.fontawesome.com/your-fontawesome-kit-id.js";
export default {
  name: 'StatusBar',
  computed: {
    completedPercentage() {
      // Calculate percentage or fetch from API
      return 50; // Replace with actual logic to determine percentage
    },
    cancelledPercentage() {
      // Calculate percentage or fetch from API
      return 20; // Replace with actual logic to determine percentage
    },
    rescheduledPercentage() {
      // Calculate percentage or fetch from API
      return 10; // Replace with actual logic to determine percentage
    },
    pendingPercentage() {
      // Calculate percentage or fetch from API
      return 30; // Replace with actual logic to determine percentage
    }
  }
};
</script>

<style scoped>
.status-bar-container {
  max-width: 600px;
  margin: 0 auto;
}

.status-item {
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #e5e7eb;
  border-radius: 6px;
  margin-bottom: 4px;
}

.progress-bar-fill {
  height: 100%;
  border-radius: 4px;
}
</style>

<!-- FontAwesome icons CDN -->

