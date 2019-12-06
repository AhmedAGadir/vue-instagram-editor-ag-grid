<template>
  <button @click="$emit('clicked')">
    <i class="fas fa-user-plus"></i>
  </button>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
button {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  border: none;
  background: $medium-grey;
}

button:hover {
  background: $light-grey;
}

button:active {
  outline: none;
  border: none;
  box-shadow: none;
}

button i {
  font-size: 22px;
  color: $dark-grey;
}

button:active i {
  color: $active;
}
</style>