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
    //onbackpress
    methods: {
      onDeviceReady: function() {
        document.addEventListener("backbutton", app.methods.onBackKeyDown, false);
      },
      onBackKeyDown: function() {
        var leftp = app.panel.left && app.panel.left.opened;
        var rightp = app.panel.right && app.panel.right.opened;

        if ( leftp || rightp ) {
          app.panel.close();
          return false;
        }else if ($$('.modal-in').length > 0) {
          app.dialog.close();
          app.popup.close();
          return false;
        } else if (app.views.main.router.url == '/home/') {
          navigator.app.exitApp();
        } else {
          mainView.router.back();
        }
      }
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
      }
    ],
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

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