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
        path: '/',
        url: 'index.html',
      },
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
  document.addEventListener("backbutton", onBackKeyDown, false);
});

function onBackKeyDown(){
  var leftp = app.panel.left && app.panel.left.opened;
  var rightp = app.panel.right && app.panel.right.opened;
  if ( leftp || rightp ) {
    app.panel.close();
    return false;
  }else if ($$('.modal-in').length > 0) {
    app.dialog.close();
    return false;
  }else if (app.views.main.router.url == '/home/') {
    app.dialog.confirm('Are you sure you want to exit?', 'Exit Antrian', function() {
      navigator.app.exitApp();
    },
    function(){});
  }else {
    mainView.router.back();
  }
}

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
  // Do something here when page loaded and initialized
  console.log(e);
  const page = e.detail;

  //page home
  if(page.name === "home"){
    $$('#form-login').on('submit', function (e) {
      e.preventDefault();

      const username = $$('#username').val();
      const password = $$('#password').val();
      const form_url = $$(this).attr('action');
      $$('#login').attr("Value","Please Wait...")

      if (!username || !password){
        app.dialog.alert("Please submit username dan password!!!","Warning");
        $$('#login').attr("Value","Login")
        return;
      }else{
        app.request({
          method: "POST",
          dataType: "json",
          url: form_url,
          data:{
            user:username,
            pass:password
          },
          success: function(pesan) {
            console.log(pesan);
            if(pesan.nama === username){
              mainView.router.navigate('/home/');
            }else{
              app.dialog.alert("Wrong Username and Password","Information");
              $$('#login').attr("Value","Login")
            }
          },
          error: function(xhr) {
            console.log(xhr);
            app.dialog.alert("Page not found","Information");
            $$('#login').attr("Value","Login")
            return;
          }
        });
      }
    });
  }

  //page menu utama
  if(page.name === "home-view"){
    //logout function
    $$('#logout').on('click', function () {
      app.request({
        method: "POST",
        dataType: "html",
        url: "http://armed.atwebpages.com/logout.php",
        success: function(logout) {
          if(logout == "true"){
            mainView.router.navigate('/',{reloadAll : true});
          }
        },
        error: function(xhr) {
          app.dialog.alert("Page not found","Information");
          return;
        }
      });
    });
  }

  //page pendaftaran
  if(page.name === "pendaftaran"){
    //ketika tombol pesan di click
    $$('#pesan').on('click', function () {
      const antrian = $$('#nomor-antrian');
      let terpanggil = [];

      if(terpanggil === 1000){
        terpanggil = 1000;
      }else if(terpanggil <= 1000){
        terpanggil++;
      }

      antrian.html(terpanggil);
    });
  }
})