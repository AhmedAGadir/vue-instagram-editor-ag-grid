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
      expanded: false,
      editing: false
    };
  },
  methods: {
    deleteUser() {
      let user = this.params.data;
      this.$store.commit("deleteUser", user);
    },
    enterEditMode() {
      if (this.editing) {
        this.params.api.stopEditing();
        this.editing = false;
      } else {
        this.params.api.startEditingCell({
          rowIndex: this.params.node.rowIndex,
          colKey: "accountDetails"
        });
        this.editing = true;
      }
    }
  }
};
</script>

<style scoped>
.actions-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.contracted .action,
.expanded .action {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: darkgrey;
}

.contracted .action:hover,
.expanded .action:hover {
  background: rgb(248, 248, 248);
}

.contracted .action {
  font-size: 30px;
}

.expanded .action {
  margin: 0 5px;
  background: rgb(233, 233, 233);
}

.action:active {
  color: #c78bd2;
}

.expanded {
  font-size: 22px;
  display: flex;
}
</style>