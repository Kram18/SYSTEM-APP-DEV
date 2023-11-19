<template>
    <div>
      <!-- header section start -->
      <div class="container-fluid">
        <div class="header_section">
          <!-- ... (rest of the header section) ... -->
        </div>
      </div>
      <!-- header section end -->
  
      <!-- layout main section start -->
      <div class="container-fluid">
        <div class="layout_main">
          <!-- banner section start -->
          <div class="banner_section">
            <!-- ... (rest of the banner section) ... -->
          </div>
          <!-- banner section end -->
  
          <!-- blog section start -->
          <div class="blog_section">
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <h1 class="blog_taital">Collections Food In city</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="blog_section_2 layout_padding">
            <div class="container">
              <div class="row">
                <!-- ... (rest of the blog section) ... -->
              </div>
            </div>
          </div>
          <!-- blog section end -->
  
          <!-- footer section start -->
          <div class="footer_section">
            <!-- ... (rest of the footer section) ... -->
          </div>
          <!-- footer section end -->
        </div>
      </div>
      <!-- layout main section end -->
  
      <!-- copyright section start -->
      <div class="copyright_section">
        <div class="container">
          <p class="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html  Templates</a></p>
        </div>
      </div>
      <!-- copyright section end -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Blog',
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
  