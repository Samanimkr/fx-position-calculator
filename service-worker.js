
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
            // Registration was successful
            console.log('Registered!');
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        })
        .catch(err => console.log(err));
    });
}
else {
    console.log('service worker is not supported');
}


// service-worker.js
self.addEventListener('install', event => {
    console.log('Install!');
});
self.addEventListener("activate", event => {
    console.log('Activate!');
});
self.addEventListener('fetch', event => {
    console.log('Fetch!', event.request);
});