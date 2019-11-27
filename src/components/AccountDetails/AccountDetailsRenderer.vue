<template>
  <div>
    <h2>
      {{params.value.username}}
      <img
        v-if="params.value.verified"
        src="/assets/badge-with-check-mark.png"
      />
    </h2>
    <p>{{params.value.name}} {{ params.value.following ? `・ Following` : null }}</p>
  </div>
</template>

  <script>
export default {
  data: function() {
    return {};
  }
};
</script>

<style scoped>
h2 {
  font-size: 24px;
  margin: 5px 0;
  font-weight: 500;
}
h2 img {
  height: 20px;
}
p {
  font-size: 17px;
  color: darkgrey;
}
</style>