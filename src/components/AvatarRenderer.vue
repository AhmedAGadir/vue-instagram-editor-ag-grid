<template>
  <img v-if="params.value" :src="params.value" />
  <div v-else class="placeholder"></div>
</template>

  <script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style scoped>
img,
.placeholder {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  position: relative;
  background: rgb(235, 233, 235);
  left: 20px;
}
</style>