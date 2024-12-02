importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/7.16.1/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

var firebaseConfig = {
    apiKey: "AIzaSyArxBp8tbIZP3tOpagp8VJeZ8qrEtY-WrM",
    authDomain: "sonik-35433.firebaseapp.com",
    databaseURL: "https://sonik-35433-default-rtdb.firebaseio.com",
    projectId: "sonik-35433",
    storageBucket: "sonik-35433.appspot.com",
    messagingSenderId: "652573673907",
    appId: "1:652573673907:web:bd0380c6be552f1db023c6",
    measurementId: "G-5METXVZ7YN"
};

firebase.initializeApp(firebaseConfig);
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(payload.data);
    // Customize notification here
    json_data = payload.data.notification;
    json_data = JSON.parse(json_data);
    console.log(json_data);
    const notificationTitle = json_data.title;
    const notificationOptions = {
        body: json_data.body,
        icon: json_data.icon,
        click_action: "https://google.com",
    };
    
    self.addEventListener('notificationclick', function(event) {
      event.notification.close();
    
      //window.open(json_data.payload.click_action,'_blank');
    });

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});