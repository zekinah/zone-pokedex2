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
                    <p class="mb-0 text-subtitle-2">Find this project useful?</p>
                    <p>Support it by joining <a :href="stargazers" target="_blank">stargazers</a> for this repository and <a :href="github" target="_blank">follow me</a> for my next creations!</p>
                </div>
                <div class="about__footer">
                    <p class="text-caption text-center"><strong> Made with ❤️ by <a :href="website" target="_blank">Zekinah Lecaros</a>.</strong></p>
                </div>
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
      vuejs: "https://vuejs.org/",
      vuetify: "https://vuetifyjs.com",
      pokeapi: "https://pokeapi.co/",
      pokemon: "https://www.pokemon.com/us/",
      github: "https://github.com/zekinah/",
      stargazers: "https://github.com/zekinah/zone-pokedex2/stargazers",
      website: "https://zekinahlecaros.com/",
  }),
  methods: {
    about() {
        this.dialog = true;
    }
  }
};
</script>