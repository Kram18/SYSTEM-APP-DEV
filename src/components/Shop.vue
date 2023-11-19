<!-- Shop.vue -->
<template>
    <div>
      <!-- Your HTML content goes here -->
      <!-- ... -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Shop',
    methods: {
      openNav() {
        document.getElementById("mySidenav").style.width = "100%";
      },
      closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    }
  };
  </script>
  
  <style scoped>
  /* Your styles go here */
  </style>
  