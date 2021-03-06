// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCRODvV9k7kVPtuh2Ru8UD9Oz5ufKJePik',
    authDomain: 'legalhackvalladolid.firebaseapp.com',
    databaseURL: 'https://legalhackvalladolid.firebaseio.com',
    projectId: 'legalhackvalladolid',
    storageBucket: 'legalhackvalladolid.appspot.com',
    messagingSenderId: '94983189717',
    appId: '1:94983189717:web:42ccb46157c792de'
  },
  laravel: {
    url: 'http://lorientedev.com:8888/api'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
