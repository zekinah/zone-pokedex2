<template>
  <div class="homepage">
    <Topwrapper :head="title" :sub="subtitle"/>
    <v-col cols="12" sm="6">
        <v-text-field
            outlined
            label="Search"
            prepend-inner-icon="mdi-magnify"
            class="txt-search"
            v-model="search" 
          ></v-text-field>
        </v-col>
    <v-row
      class="fill-height"
      align-content="center"
      justify="center"
      v-if="initialLoading"
    >
      <v-col class="subtitle-1 text-center" cols="12">
        Initializing...
      </v-col>
      <v-col cols="6">
        <v-progress-linear
          color="blue-grey lighten-1"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="poke in filteredPokemons"
        :key="poke.id"
        cols="12"
        md="4"
        lg="4"
      >
        <PokeCard :data="poke" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import api from "@/Api";
import Topwrapper from "@/components/Topwrapper.vue";
import PokeCard from "@/components/PokeCard.vue";

export default {
  name: "Home",
  data: () => ({
    title: "Pokédex",
    subtitle: "Search for Pokémon by name or using National Pokédex number",
    search: "",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other-sprites/official-artwork/",
    pokemons: [],
    initialLoading: true,
    loadMoreloading: false,
    nextBatch: null
  }),
  created() {
    this.getPokemonList();
  },
  methods: {
    /** Get all Generation */
    async getPokemonList() {
      let limit = 200;
      this.initialLoading = true;
      const res = await api.getAllPokemonByLimit(limit);
      this.pokemons = res.results.map(subdata => {
        const id = subdata.url.split("/")[subdata.url.split("/").length - 2];
        return {
          id,
          ...subdata,
          imageUrl: `${this.imageUrl}${id}.png`
        };
      });
      if (res.next) {
        this.nextBatch = res.next;
      }
      this.initialLoading = false;
    },
    /** View Specific Pokemon */
    // async viewPokemon(id) {
      // const data  = await api.getByPokemon(id);
      // this.$refs.pokemonInfo.viewPokemon(data);
    // },
  },
  computed: {
    filteredPokemons() {
      return this.pokemons.filter(data => {
        return data.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  components: {
    Topwrapper,
    PokeCard
  }
};
</script>
