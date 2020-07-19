<template>
  <v-dialog
    max-width="400"
    content-class="about__dialog"
    v-model="dialog"
    transition="fade-transition"
  >
    <v-card class="pokemon__card">
      <v-card-title>
        About
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false" class="mdl__close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="about__container">
        <v-container>
            <div class="justify-center align-center">
                <p class="headline text-h5 text-capitalize font-weight-black">Zone-Pokédex 2</p>
                <div class="about__content">
                    <p>
                    An open source Modern Design Pokédex. A fanbase experiment and no
                    other intention to overide or add additional information that can
                    cause false information to the original site.
                    </p>
                    <p>
                    Built with <a :href="vuejs" target="_blank">Vue JS</a>,
                    <a :href="vuetify" target="_blank">Vuetify</a>, and
                    <a :href="pokeapi" target="_blank">PokéAPI</a>.
                    </p>
                    <p>
                    Special Thanks to <a :href="pokemon" target="_blank">Pokémon</a>, the
                    original website.
                    </p>
                </div>
                <v-col class="text-center" cols="12">
                    <p class="text-caption"><strong> Made with ❤️ by <a :href="gitHub" target="_blank">Zekinah Lecaros</a>.</strong></p>
                </v-col>
            </div>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PokédexAbout",
  data: () => ({
      dialog: false,
      vuejs: "//vuejs.org/",
      vuetify: "//vuetifyjs.com",
      pokeapi: "//pokeapi.co/",
      pokemon: "//www.pokemon.com/us/",
      gitHub: "//github.com/zekinah/"
  }),
  methods: {
    about() {
        this.dialog = true;
    }
  }
};
</script>