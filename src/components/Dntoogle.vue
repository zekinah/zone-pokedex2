<template>
  <div class="switch-wrapper">
    <div class="toggle-wrapper">
      <input id="switch" type="checkbox" checked @click="toggle">
      <label for="switch" id="toggle">Toggle</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dntoogle',
  data: () => ({
    dark: true
  }),
  methods: {
    toggle() {
      if (this.dark) {
        this.dark = false;
        console.log('OFF');
        this.setlightMode();
      } else {
        this.dark = true;
        console.log('ON');
        this.setdarkMode();
         
      }
    },
    setlightMode() {
      document.querySelector('body').classList.add('light-mode');
      this.darkMode = false;
    },
    setdarkMode() {
      document.querySelector('body').classList.remove('light-mode');
      this.darkMode = true;
    }
  }
}
</script>
