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
    pushState : true,
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
      }
    ],
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

function onBackKeyDown(){
  mainView.router.back();
}

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    document.addEventListener("","");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
    const page = e.detail;
})