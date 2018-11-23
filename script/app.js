define(function(require, exports, module) {

    if (window.APPMODE == 'dev' && !window.location.host) {
        api.clearCache();
        api.removeLaunchView();

        var path = _g.getLS('DEV_PATH');

        if (path) {
            api.confirm({
                title: '提示',
                msg: '使用历史记录地址',
                buttons: ['确定', '取消']
            }, function(ret, err) {
                if (ret.buttonIndex == 1) {
                    openDev(path);
                } else {
                    inputPath();
                }
            });
        } else {
            inputPath();
        }

        // var config = require('config');
        // var url = 'http://' + config.host + ':' + config.port;

        function openDev(path) {
            api.openWin({
                name: 'dev-win',
                url: path + '/index.html?isApp=1',
                bounces: false,
                slidBackEnabled: false,
                pageParam: { key: 'value' },
                animation: { type: 'none' }
            });
        }

        function inputPath() {
            api.prompt({
                buttons: ['确定', '取消']
            }, function(ret, err) {
                if (ret.buttonIndex == 1) {
                    path = 'http://' + ret.text;
                    _g.setLS('DEV_PATH', path);
                    openDev(path);
                } else {
                    api.closeWidget({
                        silent: true
                    });
                }
            });
        }

        return
    }

    api.removeLaunchView();

    function openMainPage() {
        api && api.openWin({
            name: 'index-index-win',
            url: './html/index/index.html',
            bounces: false,
            slidBackEnabled: false,
            animation: { type: 'none' }
        });
    }

    openMainPage();

    api.addEventListener({
        name: 'shake'
    }, function(ret, err) {
        if (window.APPMODE == 'pub') return;
        api.alert({
            title: '当前代码版本为:',
            msg: window.VERSION,
        }, function(ret, err) {

        });
    });

    module.exports = {};

});
