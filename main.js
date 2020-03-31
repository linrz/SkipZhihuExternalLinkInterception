// ==UserScript==
// @name         SkipZhihuExternalLinkInterception
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fuck shit-like zhihu
// @author       @linrz
// @match        https://www.zhihu.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function replaceLink() {
        [].slice.call(document.getElementsByTagName('a'))
        .filter(i => i.href.indexOf('link.zhihu.com/?target=') > -1)
        .forEach(i => {
          i.setAttribute('href', decodeURIComponent(i.href.replace(/^https:\/\/link.zhihu.com\/\?target=/, '')));
        });
    }

    var observer = new MutationObserver(() => {
        replaceLink();
    });
    var el = document.querySelector('#root');
    observer.observe(el, { childList: true, subtree: true });
})();
