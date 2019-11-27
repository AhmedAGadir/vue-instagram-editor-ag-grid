<template>
  <div class="actions-container">
    <span class="action">
      <i class="fas fa-check"></i>
    </span>
    <span class="action">
      <i class="fas fa-times"></i>
    </span>
  </div>
</template>

  <script>
export default {
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.actions-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.action {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: darkgrey;
  margin: 0 5px;
  background: rgb(233, 233, 233);
  font-size: 22px;
  display: flex;
}

.action:hover,
.action:hover {
  background: rgb(248, 248, 248);
}

.action:active {
  color: #c78bd2;
}
</style>