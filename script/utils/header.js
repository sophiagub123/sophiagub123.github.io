define(function(require, exports, module) {
    // 公共头部
    var Http = require('U/http');

    function Header() {

    }

    Header.prototype = {
        init: function (active) {
            var header = _g.getTemplate('public/header');
            $('#header').html(template.compile(header)({
                isMy: active == 5,
                // session_key: _g.getLS('session_key'),
                session_key: '',
                active: active,
                // avatar: _g.getLS('UserInfo').avatar,
                avatar: '',
            }));
            $('.ui-logout').click(this.logout);
            return this;
        },
        logout: function () {
            Http.ajax({
                data: {
                    // session_key: session_key,
                },
                isSync: false,
                url: '/app/account/logout.do',
                success: function (ret) {
                    if(ret.message == 'success'){
                        _g.toast("退出成功");
                        _g.rmLS('session_key');
                        _g.rmLS('UserInfo');
                        window.location = '../index/index.html';
                    }else {
                        _g.toast("退出失败");
                    }
                },
                error: function (err) {

                }
            })
        }
    };

    Header.prototype.constructor = Header;

    module.exports = new Header();

});
