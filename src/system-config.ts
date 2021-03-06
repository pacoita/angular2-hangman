/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  'moment': 'vendor/moment/moment.js',
  'underscore': 'vendor/underscore/underscore.js'
};

/** User packages configuration. */
const packages: any = {
  'vendor/ng2-bootstrap': { defaultExtension: 'js' },
  'moment': { defaultExtension: 'js' },
  'underscore': { format: 'cjs' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  'ng2-bootstrap',
  'moment',
  'underscore',

  // App specific barrels.
  'app',
  'app/shared',
  'app/entryPage',
  'app/game-panel',
  'app/user-service',
  'app/words-panel',
  'app/data-provider'
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
