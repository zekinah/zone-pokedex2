<template>
  <v-dialog
    max-width="400"
    v-model="dialog"
    content-class="poke__dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card class="pokemon__card" :class="info.types[0].colorclass">
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false" class="mdl__close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="pokemon__container">
        <div class="bg-pokemon__name">{{ info.name }}</div>
        <div class="bg-pokemon__namefadeout"></div>
        <div class="pokemon__tile d-flex justify-center align-center">
            <div class="pokemon__image">
                <v-img
                    :alt="info.name"
                    contain
                    :src="this.pokeImage"
                    transition="scale-transition"
                    width="200"
                />
            </div>
            <div class="pokemon__title">
                <div class="pokemon__id text-capitalize font-weight-black">#{{ info.id }}</div>
                <div class="pokemon__name headline text-h5 text-capitalize font-weight-black">{{ info.name }}</div>
                <div class="pokemon__type">
                    <v-chip
                    class="ma-2"
                    label
                    dark
                    v-for="t in pokeTypes"
                    :key="t.typename"
                    :class="t.typeclass"
                    >{{ t.typename }}</v-chip
                    >
                </div>
            </div>
        </div>
        <div class="pokemon__information align-center">
            <v-container class="mt-5">
                <p class="text-h6">Pokédex Data</p>
                <div class="pokemon__bases font-weight-medium mt-3">
                    <div class="d-flex justify-space-between body-1 border-bottom">
                        <span>Base Experience</span>
                        <span>{{ info.base_experience }} XP</span>
                    </div>
                    <v-divider></v-divider>
                    <div
                        class="d-flex justify-space-between body-1 border-bottom mt-3"
                    >
                        <span>Height</span>
                        <span>{{ info.height }} dm</span>
                    </div>
                    <v-divider></v-divider>
                    <div
                        class="d-flex justify-space-between body-1 border-bottom mt-3"
                    >
                        <span>Weight</span>
                        <span>{{ info.weight }} kg</span>
                    </div>
                    <v-divider></v-divider>
                    <div class="body-1 mt-3">Abilities</div>
                    <v-chip
                        class="ma-2 chip-ability"
                        :class="info.types[0].colorclass"
                        dark
                        v-for="a in info.abilities"
                        :key="a.ability.name">
                    {{ a.ability.name }}
                    </v-chip>
                </div>
            </v-container>
            <PokeInfoTab  :description="pokeDescription" :data="info"/>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import api from "@/Api";
import PokeInfoTab from "@/components/PokeInfoTab.vue";

export default {
  name: "PokeInfo",
  data: () => ({
    dialog: false,
    info: {types: {0: {colorclass: "temp"}}},
    pokeImage: "",
    pokeDescription: "",
    pokeTypes: [],
  }),
  methods: {
        viewPokemon(data) {
            var imageUrldefault = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
            // var imageUrlofficial = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"; [old url]
            var imageUrlofficial = "https://raw.githubusercontent.com/zekinah/zone-pokedex2/master/src/assets/images/pokemon/";
            var img = (data.id > 721 ? imageUrldefault : imageUrlofficial);
            this.pokeImage = img + data.id + '.png';
            this.info = {
                ...data
            };
            this.dialog = true;
            this.getSpecies(data.id);
            this.pokeTypes = this.info.types;
            },
            async getSpecies(id) {
            this.pokeDescription = await api.getBySpecies(id);
        }
    },
    components: {
        PokeInfoTab
    }
};
</script>