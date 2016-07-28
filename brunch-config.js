exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: {
        'css/style.css': /^(build\/sass\/)/,
      }},
    templates: {
      joinTo: 'js/app.js'
    }
  },

  // sailings paths configuration
   paths: {
     // Which directories to watch
     watched: ["build"],
    // Where to compile files to
     public: "public/"
   },
  // Configuring plugins
  plugins: {
    ES6to5: {
      // Do not use ES6 compiler in vendor code
      ignore: [/^(vendor)/]
    },
    // add browserSync
    browserSync: {
        logLevel: "info",
        // add server base directory
        server: {
            baseDir: "public/",
            // configure server as directory
            directory: true
        },
        //watching files
        files: [
         "public/**/*.*",
        ]
    },
    sass: {
     options: {
       includePaths: ["node_modules/bootstrap-sass/assets/stylesheets"], // tell sass-brunch where to look for files to @import
       precision: 8 // minimum precision required by bootstrap-sass
       }
     }
  }
};
