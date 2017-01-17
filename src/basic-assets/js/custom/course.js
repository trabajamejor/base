/*------
iCheck
------*/

$(document).ready(function () {
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
    });
});


/*---------
switchery
---------*/

var switchery__elems = $('.switchery');

for (var i = 0; i < switchery__elems.length; i++) {
    var switchery = new Switchery(switchery__elems[i], { size: 'small', color: '#00B95E' });
}


/*---------
 Handlebars
 ---------*/

Handlebars.registerHelper("inc", function (value, options) {
    return parseInt(value) + 1;
});