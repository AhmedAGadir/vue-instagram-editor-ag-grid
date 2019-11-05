<template>
  <div class="container">
    <div class="contracted" v-if="!expanded" @click="expanded = true">
      <span class="action">⋮</span>
    </div>
    <div class="expanded" v-if="expanded">
      <span class="action">
        <i class="fas fa-pencil-alt"></i>
      </span>
      <span class="action">
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

<style scoped>
.container {
  transition: all 0.3s ease-out;
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

.expanded {
  font-size: 22px;
  display: flex;
}
</style>