<template>
  <v-btn
      class="scroll-top"
      v-scroll="onScroll"
      v-show="isScroll"
      fab
      dark
      fixed
      bottom
      right
      @click="toTop"
    >
    <v-icon>mdi-chevron-up</v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'Scrolltotop',
    data: () => ({
      isScroll: false
    }),
    methods: {
      onScroll(e) {
        if (typeof window === "undefined") return;
        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.fab = top > 20;
      },
      toTop() {
        this.$vuetify.goTo(0);
      }
    }
  }
</script>
