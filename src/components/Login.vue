<template>
    <v-app>
      <v-container>
        <v-form @submit.prevent="login">
          <v-row>
            <v-col>
              <v-text-field v-model="username" label="Username" required></v-text-field>
            </v-col>
          </v-row>
  
          <v-row>
            <v-col>
              <v-text-field v-model="password" label="Password" type="password" required></v-text-field>
            </v-col>
          </v-row>
  
          <v-row>
            <v-col>
              <v-btn type="submit">Login</v-btn>
            </v-col>
          </v-row>
        </v-form>
  
        <v-row v-if="isLoggedIn">
          <v-col>
            <p>Welcome, {{ username }}!</p>
            <v-btn @click="logout">Logout</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        isLoggedIn: false,
      };
    },
    methods: {
      login() {
        // In a real-world scenario, you would perform a server-side authentication here.
        // For simplicity, let's just check if the username and password are not empty.
        if (this.username !== '' && this.password !== '') {
          this.isLoggedIn = true;
        } else {
          alert('Please enter a valid username and password.');
        }
      },
      logout() {
        this.isLoggedIn = false;
        this.username = '';
        this.password = '';
      },
    },
  };
  </script>
  
  <style>
  /* Add your styles here if needed */
  </style>
  