<template>
  <v-lazy
    v-model="isActive"
    :options="{
      threshold: .5
    }"
    min-height="50"
    transition="fade-transition"
  >
    <v-hover v-slot:default="{ hover }">
      <v-card hover class="poke__card rounded-lg" @click="$emit('VIEW_POKEMON', data.id)" :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }">
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
    </v-hover>
  </v-lazy>
</template>
<script>
export default {
  name: "PokeCard",
  props: ["data"],
  data: () => ({
    isActive: false,
  }),
};
</script>