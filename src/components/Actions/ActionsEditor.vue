<template>
  <div class="actions-container">
    <span class="action" @click="stopEditing(false)">
      <i class="fas fa-check"></i>
    </span>
    <span class="action" @click="stopEditing(true)">
      <i class="fas fa-times"></i>
    </span>
  </div>
</template>

  <script>
export default {
  data: function() {
    return {
      getValue(params) {
        return null;
      }
    };
  },
  methods: {
    stopEditing(bool) {
      this.params.api.stopEditing(bool);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/_variables.scss";

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
  color: $dark-grey;
  margin: 0 5px;
  font-size: 22px;
  display: flex;
}

.action:hover,
.action:hover {
  background: $light-grey;
}

.action:active {
  color: $active;
}
</style>