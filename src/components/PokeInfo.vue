<template>
  <v-dialog
    max-width="400"
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-card-title>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
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
                <div class="pokemon__id text-capitalize">#{{ info.id }}</div>
                <div class="pokemon__name headline text-capitalize font-weight-black">{{ info.name }}</div>
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

        
        
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import api from "@/Api";

export default {
  name: "PokeInfo",
  data: () => ({
    dialog: false,
    info: [],
    pokeImage: "",
    pokeDescription: "",
    pokeTypes: []
  }),
  methods: {
    viewPokemon(data) {
        var imageUrldefault = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
        var imageUrlofficial = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/";
        var img = (data.id > 721 ? imageUrldefault : imageUrlofficial);
        this.pokeImage = img + data.id + '.png';
        this.info = {
            ...data
        };
        this.dialog = true;
        this.getSpecies(data.id);
        this.setTypesColor(this.info.types);
        },
        async getSpecies(id) {
        this.pokeDescription = await api.getBySpecies(id);
    },
    setTypesColor(types) {
      const type = types.map(item => {
        const typename = item.type.name;
        const typeclass = "bg-" + item.type.name;
        return {
          typename,
          typeclass
        };
      });
      this.pokeTypes = type;
    },
  }
};
</script>