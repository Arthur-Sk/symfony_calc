require('../scss/app.scss');

var $ = require('jquery');
global.$ = global.jQuery = $;

require('bootstrap-sass');

// loads the Bootstrap jQuery plugins
import 'bootstrap-sass/assets/javascripts/bootstrap/collapse.js';
import 'bootstrap-sass/assets/javascripts/bootstrap/dropdown.js';
import 'bootstrap-sass/assets/javascripts/bootstrap/modal.js';
import 'bootstrap-sass/assets/javascripts/bootstrap/transition.js';

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();

});
