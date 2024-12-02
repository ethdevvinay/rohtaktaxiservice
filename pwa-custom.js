
if (typeof(jQuery) == 'undefined') {
    //jquery not present on website
   (function() {
       // Load jquery script if doesn't exist
       var script = document.createElement("SCRIPT");
       script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
       script.type = 'text/javascript';
       script.onload = function() {
           pwaBuilderOverlayInit();
       };
       document.getElementsByTagName("head")[0].appendChild(script);
   })();
}else{
    //jquery present on website
   pwaBuilderOverlayInit();
}

function pwaBuilderOverlayInit(){
$(document).one("ready",function(){
    $.ajax({
        url: 'pwa-overlay.html',
        success: function(response){
            $("body").append(response);
        }
    });

   });
}
        // Initialize Firebase
        // TODO: Replace with your project's customized code snippet
  var config = {
    apiKey: "AIzaSyArxBp8tbIZP3tOpagp8VJeZ8qrEtY-WrM",
    authDomain: "sonik-35433.firebaseapp.com",
    databaseURL: "https://sonik-35433-default-rtdb.firebaseio.com",
    projectId: "sonik-35433",
    storageBucket: "sonik-35433.appspot.com",
    messagingSenderId: "652573673907",
    appId: "1:652573673907:web:bd0380c6be552f1db023c6",
    measurementId: "G-5METXVZ7YN"
  };
  firebase.initializeApp(config);

        const messaging = firebase.messaging();
        messaging
            .requestPermission()
            .then(function () {
                console.log("Notification permission granted.");

                // get the token in the form of promise
                return messaging.getToken()
            })
            .then(function(token) {
                  var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                      
                    }
                };
                xhttp.open("GET", "notification_token.php?token="+token+"&url="+window.location.href+"&manifestId=1292&userId=5612", true);
                xhttp.send();
            })
            .catch(function (err) {
                console.log("Unable to get permission to notify.", err);
            });
    
  



