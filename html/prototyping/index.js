define(function(require, exports, module) {
    var Http = require('U/http');
    // var header = _g.getTemplate('public/header');
    // var session_key = _g.getLS('session_key');
    // $('#header').html(template.compile(header)({
    //     type: 'normal',
    //     active: 0,
    //     session_key: _g.getLS('session_key'),
    // }));
    var header = require('U/header').init(1);
    var footer = _g.getTemplate('public/footer');
    var active = 1;
    $('#footer').html(template.compile(footer)({
        // type: 'normal',
    }));
    $('.ui-logout').on('click',function () {
        logout();
    });
    $('.top-item').on('click', function() {
        var index = $(this).index();
        $('.top-item').removeClass('select').eq(index).addClass('select');
        $('.ui-block').removeClass('show').eq(index).addClass('show');
    });
});