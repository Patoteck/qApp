/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "precache-manifest.74fe3bbd345512e7d74f8f7bf0c53a3f.js"
);

workbox.core.setCacheNameDetails({prefix: "pwa-news"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();

// Escuchar PUSH
self.addEventListener('push', e => {

    // console.log(e);

    const data = JSON.parse( e.data.text() );

    // console.log(data);


    const title = data.titulo;
    const options = {
        body: data.cuerpo,
        // icon: 'img/icons/icon-72x72.png',
        icon: `img/avatars/${ data.usuario }.jpg`,
        badge: 'img/favicon.ico',
        image: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/5b/Torre_de_los_Avengers.png/revision/latest?cb=20150626220613&path-prefix=es',
        vibrate: [125,75,125,275,200,275,125,75,125,275,200,600,200,600],
        openUrl: '/',
        data: {
            // url: 'https://google.com',
            url: '/',
            id: data.usuario
        },
        actions: [
            {
                action: 'thor-action',
                title: 'Thor',
                icon: 'img/avatar/thor.jpg'
            },
            {
                action: 'ironman-action',
                title: 'Ironman',
                icon: 'img/avatar/ironman.jpg'
            }
        ]
    };


    e.waitUntil( self.registration.showNotification( title, options) );


});


// Cierra la notificacion
self.addEventListener('notificationclose', e => {
    console.log('Notificación cerrada', e);
});


self.addEventListener('notificationclick', e => {


    const notificacion = e.notification;
    const accion = e.action;


    console.log({ notificacion, accion });
    // console.log(notificacion);
    // console.log(accion);


    const respuesta = clients.matchAll()
    .then( clientes => {

        let cliente = clientes.find( c => {
            return c.visibilityState === 'visible';
        });

        if ( cliente !== undefined ) {
            cliente.navigate( notificacion.data.url );
            cliente.focus();
        } else {
            clients.openWindow( notificacion.data.url );
        }

        return notificacion.close();

    });

    e.waitUntil( respuesta );


});


workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
