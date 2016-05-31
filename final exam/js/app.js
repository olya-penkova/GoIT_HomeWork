requirejs.config({
   paths: {
   	'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery',
    'roboto': 'https://fonts.googleapis.com/css?family=Roboto:400,300,500,700&subset=latin,cyrillic-ext,cyrillic,latin-ext',
    'montserrat': 'https://fonts.googleapis.com/css?family=Montserrat:400,700'
   },
   shim: {
   	'jquery': {
   		exports: 'jQuery'
   	},
    'roboto': {
      exports: 'Roboto'
    },
    'montserrat': {
      exports: 'Montserrat'
    }
   }
});

require (
    [],

function ($){

}

	);