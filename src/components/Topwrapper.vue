<template>
    <div class="intro d-flex">
      <div class="top-wrapper">
        <h1>{{head}}</h1>
        <h2 class="subtitle-1">{{sub}}</h2>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon @click="$emit('GET_GENERATION', data)" class="mdl__close">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
      <v-btn icon @click="dialog = false" class="mdl__close">
        <v-icon>mdi-information-outline</v-icon>
      </v-btn>
    </div>
</template>

<script>
  export default {
    name: "Topwrapper",
    props: ["head","sub","data"],
    data: () => ({
      title: "Pokédex",
    })
  }
</script>
