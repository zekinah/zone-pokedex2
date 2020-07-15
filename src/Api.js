import axios from "axios";

const http = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://zonepokedex2.netlify.app/"
      : "http://localhost:8080"
});

export default {
  async getAllGeneration() {
    const { data } = await http.get(
      "https://pokeapi.co/api/v2/generation"
    );
    return data;
  },
  async getAllPokemon() {
    const { data } = await http.get(
      "https://pokeapi.co/api/v2/pokemon"
    );
    return data;
  },
  async getAllPokemonByLimit(limit) {
    const { data } = await http.get(
      "https://pokeapi.co/api/v2/pokemon?limit="+limit
    );
    return data;
  },
  async getByPokemon(id) {
    const { data } = await http.get(
      "https://pokeapi.co/api/v2/pokemon/" + id
    );
    return data;
  },
  async getAllSpecies() {
    const { data } = await http.get(
      "https://pokeapi.co/api/v2/pokemon-species/" 
    );
    return data;
  },
  async getBySpecies(id) {
    const { data } = await http.get(
      "https://pokeapi.co/api/v2/pokemon-species/" + id
    );
    return data;
  },
};
