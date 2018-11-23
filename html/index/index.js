define(function(require, exports, module) {
    var Http = require('U/http');
    // var header = _g.getTemplate('public/header');
    // var session_key = _g.getLS('session_key');
    // $('#header').html(template.compile(header)({
    //     type: 'normal',
    //     active: 0,
    //     // session_key: _g.getLS('session_key'),
    // }));
    var header = require('U/header').init(0);
    var footer = _g.getTemplate('public/footer');
    $('#footer').html(template.compile(footer)({
        // type: 'normal',
    }));
    var banner = new Swiper('#advert', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        loop: true,
        galleryTop: true,
        galleryThumbs: true
    });
    $(".ui-aside").click(function(){
        $("html,body").animate({scrollTop:0},500);
    });
    // 获取广告图
    function getAdvert(type) {
        // Http.ajax({
        //     data: {
        //         type: type
        //     },
        //     lock: false,
        //     isSync: false,
        //     url: '/app/platform/banner.do',
        //     success: function (ret) {
        //         if(ret.code == 200){
        //             var data = ret.data;
        //             if(type == 1) {
        //                 var str = '';
        //                 for(var i = 0; i < data.length; i ++) {
        //                     str+= '<img class="swiper-slide" src=' + CONFIG.HOST + data[i].photo+ '>';
        //                 }
        //                 $('#advertPic').html(str);
        //                 setTimeout(function() {
        //                     banner.update(true);
        //                 }, 500);
        //             } else if(type == 2) {
        //                 var advert = '<a><img src=' + CONFIG.HOST + ret.data[0].photo+ '></a>'
        //                 $('.ui-investCenter').append(advert);
        //             } else if(type == 3) {
        //                 var advert = '<img src=' + CONFIG.HOST + ret.data[0].photo+ '>'
        //                 $('.ui-companyTop').append(advert);
        //             }
        //         }
        //     },
        //     error: function (err) {
                
        //     }
        // });
    }
    // 退出登录
    function logout() {
        // Http.ajax({
        //     data: {
        //         // session_key: session_key,
        //     },
        //     isSync: false,
        //     url: '/app/account/logout.do',
        //     success: function (ret) {
        //         if(ret.code == 200){
        //             _g.toast("退出成功");
        //             _g.rmLS('session_key');
        //             _g.rmLS('UserInfo');
        //             window.location = '../index/index.html';
        //         }else {
        //             _g.toast("退出失败");
        //         }
        //     },
        //     error: function (err) {
                
        //     }
        // })
    }
    //孵化企业
    function getCompanyList(){
        // Http.ajax({
        //     data: {

        //     },
        //     lock: false,
        //     isSync: true,
        //     url: '/app/company/list.do',
        //     lock: false,
        //     success: function (ret) {
        //         if(ret.code == 200){
        //             if(ret.data.list.length > 0){
        //                 // alert(_g.j2s(ret.data.list));
        //                 var data = {
        //                     companyList: ret.data.list
        //                 };
        //                 _g.template('#company',data,'index/company');
        //                 $('#company' + ' a').on('click',function () {
        //                     var index = $(this).parent().index();
        //                     var id = ret.data.list[index]._id;
        //                     _g.openWin({
        //                         header: {

        //                         },
        //                         name: 'company-companyDetail',
        //                         url: '../company/companyDetail.html',
        //                         pageParam: {
        //                             id: id
        //                         }
        //                     });
        //                     return false;
        //                 });
        //             }else{
        //                 _g.toast("无更多的数据");
        //             }
        //         }else {
        //             _g.toast(ret.message);
        //         }
        //     },
        //     error: function (err) {
                
        //     }
        // })
    }
    // 投资方列表
    function getInvestorList() {
        // Http.ajax({
        //     data: {
        //         page: 1,
        //         pageSize: 3,
        //     },
        //     lock: false,
        //     isSync: true,
        //     url: '/app/investor/list.do',
        //     lock: false,
        //     success: function (ret) {
        //         if(ret.code == 200){
        //             // alert(_g.j2s(ret));
        //             if(ret.data.list.length > 0){
        //                 var data = {
        //                     investorList: ret.data.list
        //                 };
        //                 _g.template('#investor',data,'index/investor');
        //                 $('#investor' + ' a').on('click',function () {
        //                     var index = $(this).parent().index();
        //                     var id = ret.data.list[index]._id;
        //                     _g.openWin({
        //                         header: {

        //                         },
        //                         name: 'invest-investorDetail',
        //                         url: '../invest/investorDetail.html',
        //                         pageParam: {
        //                             id: id
        //                         }
        //                     });
        //                     return false;
        //                 })
        //             }else{
        //                 _g.toast("无更多的数据");
        //             }
        //         }else {
        //             _g.toast(ret.message);
        //         }
        //     },
        //     error: function (err) {
                
        //     }
        // })
    }
    // 孵化器活动列表
    function getActiveList() {
        // Http.ajax({
        //     data: {
        //         page: 1,
        //         pageSize: 3,
        //         type: 1,
        //     },
        //     lock: false,
        //     isSync: true,
        //     url: '/app/active/list.do',
        //     lock: false,
        //     success: function (ret) {
        //         if(ret.code == 200){
        //             // alert(_g.j2s(ret));
        //             if(ret.data.list.length > 0){
        //                 var data = {
        //                     activeList: getActiveDetail(ret.data.list)
        //                 };
        //                 _g.template('#active',data,'index/active');
        //                 setTimeout(function() {
        //                     bannerActive.update(true);
        //                 }, 500);
        //                 $('#active' + ' .swiper-slide').on('click',function () {
        //                     var index = $(this).index();
        //                     var id = ret.data.list[index]._id;
        //                     _g.openWin({
        //                         header: {

        //                         },
        //                         name: 'incubator-activityDetail',
        //                         url: '../incubator/activityDetail.html',
        //                         pageParam: {
        //                             id: id
        //                         }
        //                     });
        //                     return false;
        //                 })
        //             }else{
        //                 _g.toast("无更多的数据");
        //             }
        //         }else {
        //             _g.toast(ret.message);
        //         }
        //     },
        //     error: function (err) {
                
        //     }
        // })
    }
    function getActiveDetail(data) {
        var list = data || '';
        return _.map(list,function(item) {
            return {
                _id: item._id || '',
                title: item.title || '',
                time: item.time.substring(0,10) || '',
                photo: item.photo || '',
            }
        });
    }
    // 孵化器列表
    function getIncubatorList() {
        // Http.ajax({
        //     data: {
        //         page: 1,
        //         pageSize: 4,
        //     },
        //     lock: false,
        //     isSync: true,
        //     url: '/app/incubator/list.do',
        //     lock: false,
        //     success: function (ret) {
        //         if(ret.code == 200){
        //             // alert(_g.j2s(ret));
        //             if(ret.data.list.length > 0){
        //                 var data = {
        //                     incubatorList: ret.data.list
        //                 };
        //                 _g.template('#incubator',data,'index/incubator');
        //                 $('#incubator' + ' a').on('click',function () {
        //                     var index = $(this).parent().index();
        //                     var id = ret.data.list[index]._id;
        //                     _g.openWin({
        //                         header: {

        //                         },
        //                         name: 'incubator-incubatorDetail',
        //                         url: '../incubator/incubatorDetail.html',
        //                         pageParam: {
        //                             id: id
        //                         }
        //                     });
        //                     return false;
        //                 })
        //             }else{
        //                 _g.toast("无更多的数据");
        //             }
        //         }else {
        //             _g.toast(ret.message);
        //         }
        //     },
        //     error: function (err) {
                
        //     }
        // })
    }
    // 最新补助政策列表
    function getNewList() {
        // Http.ajax({
        //     data: {
        //         page: 1,
        //         pageSize: 5,
        //     },
        //     lock: false,
        //     isSync: true,
        //     url: '/app/news/list.do',
        //     lock: false,
        //     success: function (ret) {
        //         if(ret.code == 200){
        //             // alert(_g.j2s(ret));
        //             if(ret.data.list.length > 0){
        //                 var data = {
        //                     newList: ret.data.list
        //                 };
        //                 _g.template('#new',data,'index/new');
        //                 $('#new' + ' a').on('click',function () {
        //                     var index = $(this).index();
        //                     var id = ret.data.list[index]._id;
        //                     _g.openWin({
        //                         header: {

        //                         },
        //                         name: 'invest-investorPolicy',
        //                         url: '../invest/investorPolicy.html',
        //                         pageParam: {
        //                             id: id
        //                         }
        //                     });
        //                     return false;
        //                 })
        //             }else{
        //                 _g.toast("无更多的数据");
        //             }
        //         }else {
        //             _g.toast(ret.message);
        //         }
        //     },
        //     error: function (err) {
                
        //     }
        // })
    }
    // 轮播图
    getAdvert(1);
    // 融投资广告
    getAdvert(2);
    // 孵化企业广告
    getAdvert(3);
    getInvestorList();
    getCompanyList();
    getIncubatorList();
    getNewList();
    getActiveList();
});