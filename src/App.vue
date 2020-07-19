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
  },
  metaInfo() {
    return { 
        title: "Zone Pokédex 2 - a web and pwa compatible",
        meta: [
            { name: 'description', content:  'A Simple Web App and PWA compatible Pokédex built with VueJS and data was based on https://pokeapi.co/ Build for the pokemon lover and enthusiast. Made with ❤️ by Zekinah Lecaros'},
            { property: 'og:title', content: "Zone Pokédex 2 - a web and pwa compatible"},
            { property: 'og:site_name', content: 'Zone Pokédex 2'},
            { property: 'og:type', content: 'website'},    
            { name: 'robots', content: 'index,follow'} 
        ]
    }
  }
};
</script>
