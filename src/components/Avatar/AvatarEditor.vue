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
  height: 125px;
  width: 125px;
  border-radius: 50%;
  background: rgb(235, 233, 235);
  position: relative;
  left: 20px;
}
</style>