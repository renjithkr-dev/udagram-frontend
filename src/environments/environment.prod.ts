// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
 // apiHost: 'http://localhost:8080/api/v0'
  apiHost: 'http://a83ca92bdb7a54ffa9c3a5296fa75d41-684400783.us-east-1.elb.amazonaws.com/api/v0',
  originHeader:'http://a85c74c82539d4b198a6d11839865f63-362740791.us-east-1.elb.amazonaws.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
