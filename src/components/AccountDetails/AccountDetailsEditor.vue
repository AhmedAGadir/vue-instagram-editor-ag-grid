<template>
  <form>
    <div class="form-group">
      <input type="text" class="form-control" v-model="params.value.username" ref="username" />
    </div>
    <div class="form-group">
      <input type="text" class="form-control" v-model="params.value.name" />
    </div>
    <div class="form-inline">
      <label for="following">
        <input type="checkbox" id="following" class="form-control" v-model="params.value.following" />
        Following
      </label>
    </div>
  </form>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    getValue() {
      return {
        ...this.params.value
      };
    },
    afterGuiAttached() {
      this.$refs.username.focus();
      this.$refs.username.select();
    }
  }
};
</script>

<style scoped>
form {
  width: 100%;
  padding: 15px 0;
}
.form-group {
  margin-bottom: 0.7rem;
}

label,
input {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  color: grey;
}

input[type="checkbox"] {
  margin-right: 10px;
}
</style>