<template>
  <v-app>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
      <Scrolltotop />
    </v-main>
  </v-app>
</template>

<script>
import Scrolltotop from "@/components/Scrolltotop.vue";

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    Scrolltotop
  }
};
</script>
