<template>
  <div class="actions-container">
    <div>
      <span v-show="hover">✎</span>
    </div>
    <div>
      <span>✕</span>
    </div>
  </div>
</template>

  <script>
export default {
  data: function() {
    return {
      hover: false
    };
  },
  methods: {
    onMouseOver(params) {
      if (params.node === this.params.node) {
        this.hover = true;
      }
    },
    onMouseOut(params) {
      if (params.node === this.params.node) {
        this.hover = false;
      }
    }
  },
  created() {
    this.params.api.addEventListener("cellMouseOver", this.onMouseOver);
    this.params.api.addEventListener("cellMouseOut", this.onMouseOut);
  },
  destroyed() {
    this.params.api.removeEventListener("cellMouseOver", this.onMouseOver);
    this.params.api.removeEventListener("cellMouseOut", this.onMouseOut);
  }
};
</script>

<style scoped>
.actions-container {
  color: rgb(196, 194, 194);
  cursor: pointer;
  display: flex;
  font-size: 22px;
}
.actions-container > div {
  width: 35px;
  text-align: center;
}
.actions-container > div:hover {
  color: grey;
}
</style>