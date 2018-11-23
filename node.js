'use strict';

var fs = require('fs');
var path = require('path');

var folders = fs.readdirSync(path.join(__dirname, 'html'));

folders.forEach(( folder ) => {
    if (/\./.test(folder)) {
        return;
    }
    fs.readdirSync(path.join(__dirname, 'html', folder)).forEach(( file ) => {
        if (!(/\.html$/.test(file))) {
            return;
        }
        let filepath = path.join(__dirname, 'html', folder, file);
        let html = fs.readFileSync(filepath, 'utf8');
        html = html.replace(/<% NAME %>/g, [folder, path.basename(file, '.html')].join('/'));
        fs.writeFileSync(filepath, html, 'utf8');
    });
});