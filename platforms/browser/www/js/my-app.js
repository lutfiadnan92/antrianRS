// Initialize app
var myApp = new Framework7();
  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Antrian App',
    // App id
    id: 'com.myapp.antrianApp',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routesabout
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/home/',
        url: 'home.html',
      },
      {
        path: '/pendaftaran/',
        url: 'pendaftaran.html',
      },
      {
        path: '/login/',
        url: 'database/login.php',
      }
    ],
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

$$('#login').on('click', function () {
  let username = $$('#username').val();
  let password = $$('#password').val();
  
  if (!username || !password){
   app.dialog.alert("Please submit username dan password!!!","Warning");
   return;
  }else{
    app.request({
        method: 'GET',
        url: 'database/login.php',
        data:{
          user:username,
          pass:password
        },
        success: function(data) {
          console.log(data.nama);
          if(username && password){
            mainView.router.navigate('/home/');
          }else{
            app.dialog.alert("Wrong Username and Password","Information");
          }
        },
        error: function(xhr) {
          app.dialog.alert("Page not found","Information");
          return;
        }
    });
  }
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
    const page = e.detail;
})