<template>
  <div class="notification" :class="notice.type">
    <button class="delete" @click="closeNotice()"></button>
    <div class="container">
      {{ notice.message }}
    </div>
  </div>
</template>

<script>
export default {
  props:['notice'],
  methods: {
    closeNotice() {
      this.$emit("closeNotice", this.notice.id);
    }
  }
}
</script>

<style>

</style>
