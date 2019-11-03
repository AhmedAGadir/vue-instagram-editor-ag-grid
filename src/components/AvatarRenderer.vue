<template>
  <img :src="params.value" />
</template>

  <script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style scoped>
img {
  height: 120px;
  width: auto;
  border-radius: 50%;
}
</style>