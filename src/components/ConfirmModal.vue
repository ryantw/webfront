<template>
  <transition name="modal-fade">
    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <slot name="title">Default Title</slot>
          <slot name="subtitle"></slot>
          <div class="buttons">
            <span
              class="button is-success" 
              @click="modalResponse(true)"
              >Confirm</span>
            <span
              class="button is-danger" 
              @click="modalResponse(false)"
              >Cancel</span>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="modalResponse(false)"></button>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    modalResponse(response) {
      this.$emit("modalResponse", response);
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
