<template>
  <v-card hover class="poke__card rounded-lg">
    <v-card-text class="d-flex flex-column">
      <span class="poke__card-id text-capitalize">#{{ data.id }}</span>
      <v-img
        class="poke__card-img"
        :alt="data.name"
        contain
        :src="data.imageUrl"
        transition="scale-transition"
        width="120"
      />
      <span class="poke__card-text title text-capitalize">{{ data.name }}</span>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "PokeCard",
  props: ["data"]
};
</script>