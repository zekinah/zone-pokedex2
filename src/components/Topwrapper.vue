<template>
    <div class="intro">
        <h1>{{head}}</h1>
        <h2 class="subtitle-1">{{sub}}</h2>
    </div>
</template>

<script>
  export default {
    name: "Topwrapper",
    props: ["head","sub"],
    data: () => ({
      title: "Pokédex",
    })
  }
</script>
