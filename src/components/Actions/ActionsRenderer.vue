<template>
  <div class="actions-container">
    <div class="contracted" v-if="!expanded" @click="expanded = true">
      <span class="action">⋮</span>
    </div>
    <div class="expanded" v-if="expanded">
      <span class="action" @click="enterEditMode">
        <i class="fas fa-pencil-alt"></i>
      </span>
      <span class="action" @click="deleteUser">
        <i class="far fa-trash-alt"></i>
      </span>
    </div>
  </div>
</template>

  <script>
export default {
  data: function() {
    return {
      expanded: false
    };
  },
  methods: {
    onMouseOver(params) {
      if (params.node !== this.params.node) {
        this.expanded = false;
      }
    },
    deleteUser() {
      let user = this.params.data;
      this.$store.commit("deleteUser", { user });
    },
    enterEditMode() {
      this.params.api.startEditingCell({
        rowIndex: this.params.node.rowIndex,
        colKey: "avatarUrl"
      });
    }
  },
  created() {
    this.params.api.addEventListener("cellMouseOver", this.onMouseOver);
  },
  destroyed() {
    this.params.api.removeEventListener("cellMouseOver", this.onMouseOver);
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
}

.contracted .action {
  font-size: 30px;
}

.expanded .action {
  font-size: 22px;
  margin: 0 5px;
}

.expanded {
  display: flex;
}

.action:hover {
  background: $light-grey;
}

.action:active {
  color: $active;
}
</style>