<template>
  <div>
    <!--
    <app-notice v-for="notice in notifications" :notice="notice" :key="notice.id" @closeNotice="handleCloseNotice"></app-notice>
    -->
    <app-notice v-if="getNotices.length" :notice="getNotice" @closeNotice="handleCloseNotice" />
  </div>
</template>

<script>
import Notice from "@/components/Notice.vue";

export default {
  computed: {
    getNotices() {
      return this.$store.getters['notifications/getNotices'];
    },
    getNoticeAtIndex() {
      return this.$store.getters['notifications/getNoticeAtIndex'];
    },
    getNotice() {
      return this.getNotices[this.getNoticeAtIndex];
    }
  },
  methods: {
    handleCloseNotice(){
      this.$store.dispatch('notifications/removeNotice', this.getNoticeAtIndex);
    }
  },
  components: {
    appNotice: Notice
  }
}
</script>

<style>

</style>
