<template>
  <div class="myEditor">
    <form>
      <div class="form-group">
        <input type="text" class="form-control" v-model="params.value.username" ref="username" />
      </div>
      <div class="form-group">
        <input type="text" class="form-control" v-model="params.value.name" />
      </div>
      <div class="form-inline">
        <label for="following">
          <input
            type="checkbox"
            id="following"
            class="form-control"
            v-model="params.value.following"
          />
          Following
        </label>
      </div>
    </form>
  </div>
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
.myEditor {
  padding: 15px 10px;
}

.form-group {
  margin-bottom: 0.7rem;
}

label,
input {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: grey;
}

input[type="checkbox"] {
  margin-right: 10px;
}
</style>