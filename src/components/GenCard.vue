<template> 
  <v-card hover @click="$emit('VIEW_GENERATION', data)" dark>
  <!-- <v-card hover> -->
    <v-card-text class="d-flex flex-column align-center">
      <v-img
        :alt="data.name"
        contain
        :src="data.imageUrl"
        transition="scale-transition"
        width="120"
      />
      <span class="text-subtitle-2 text-uppercase">{{ data.name }}</span>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "GenCard",
  props: ["data"]
};
</script>