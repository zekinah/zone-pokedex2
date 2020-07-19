<template>
  <v-dialog
    max-width="400"
    content-class="gen__dialog"
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card class="pokemon__card">
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false" class="mdl__close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="generation__container">
        <v-container>
            <div class="justify-center align-center">
                <div class="headline text-h5 text-capitalize font-weight-black">Generations</div>
                <div class="subtitle-1">Use search for generations to explore your Pokémon!</div>
                <v-row>
                    <v-col
                        v-for="gen in pokeGen"
                        :key="gen.name"
                        cols="6"
                        md="6"
                        lg="6"
                    >
                      <v-hover v-slot:default="{ hover }">
                        <v-card class="generation__card" hover @click="$emit('VIEW_GENERATION', gen)" :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
                          <v-card-text class="d-flex flex-column align-center">
                            <v-img
                              :alt="gen.name"
                              contain
                              :src="gen.imageUrl"
                              transition="scale-transition"
                              width="120"
                            />
                            <span class="generation__title text-subtitle-2 text-uppercase">{{ gen.name }}</span>
                          </v-card-text>
                        </v-card>
                      </v-hover>
                    </v-col>
                </v-row>
            </div>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// import GenCard from "@/components/GenCard.vue";

export default {
  name: "PokeInfo",
  data: () => ({
      dialog: false,
      pokeGen: {},
  }),
  methods: {
      listGenerations(data) {
          this.dialog = true;
          this.pokeGen = data;
      }
  },
  components: {
      // GenCard
  }
};
</script>