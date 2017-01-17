const elixir = require('laravel-elixir');


/**
 * ================
 *   BASIC ASSETS
 * ================
 */
elixir((mix) => {
    mix.copy('resources/assets/img', 'public/img');

    mix.copy('resources/assets/fonts', 'public/fonts');
    mix.copy('resources/assets/font-awesome/fonts', 'public/fonts');
    mix.copy('resources/assets/font-museo/fonts', 'public/fonts');
});


/**
 * ================
 *      AUTH
 * ================
 */
elixir((mix) => {
    mix.styles([
        "resources/assets/css/bootstrap.min.css",
        "resources/assets/font-awesome/css/font-awesome.css",
        "resources/assets/css/animate.css",
        "resources/assets/css/style.css"
    ], 'public/css/auth.css', './');


    mix.scripts([
        "resources/assets/js/jquery-3.1.1.min.js",
        "resources/assets/js/bootstrap.min.js"
    ], 'public/js/auth.js', './');
});


/**
 * ================
 *      COURSE
 * ================
 */
elixir((mix) => {
    mix.styles([
        // Mainly
        "resources/assets/css/bootstrap.min.css",
        "resources/assets/font-awesome/css/font-awesome.css",
        "resources/assets/css/animate.css",
        "resources/assets/css/style.css",

        // Others
        "resources/assets/css/plugins/iCheck/custom.css",

        "resources/assets/css/plugins/switchery/switchery.css",

        "resources/assets/css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css",

        "resources/assets/css/plugins/sweetalert/sweetalert.css",

        "resources/assets/css/plugins/nouislider/nouislider.min.css",

    ], 'public/css/course.css', './');

    mix.scripts([
        // Mainly
        "resources/assets/js/jquery-3.1.1.min.js",
        "resources/assets/js/bootstrap.min.js",
        "resources/assets/js/plugins/metisMenu/jquery.metisMenu.js",
        "resources/assets/js/plugins/slimscroll/jquery.slimscroll.min.js",

        // Custom and plugin
        "resources/assets/js/inspinia.js",
        "resources/assets/js/plugins/pace/pace.min.js",

        // Others
        "resources/assets/js/plugins/iCheck/icheck.min.js",

        "resources/assets/js/plugins/sweetalert/sweetalert.min.js",

        "resources/assets/js/plugins/nouislider/nouislider.min.js",

        "resources/assets/js/plugins/vimeo/jquery.vimeo.api.min.js",
    ], 'public/js/course.js', './');
});