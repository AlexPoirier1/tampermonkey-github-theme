// ==UserScript==
// @name         Github UI theme
// @namespace    http://github.com
// @include      http://github.com/**
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/**
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var black = '#000';
    var white = '#FFF';
    var light_gray = '#565754';
    var dark_gray = '#444541';
    var tinted_gray = '#CCD1D3';

    //background and borders
    $('.file-header').css('background-color', black);
    $('.container').css('background-color', dark_gray);
    $('.container.clearfix').css('background-color', light_gray);
    $('.container.clearfix').attr('style', "");
    $('.header').css('background-color', light_gray).css('border-bottom', '1px solid '+black);
    $('.pagehead').css('background-color', '#444541').css('border-bottom', '1px solid '+black);
    $('#js-pjax-container').css('background-color', dark_gray);
    $('.pagehead .account-switcher').css('background-color', dark_gray);
    $('.repohead.experiment-repo-nav').css('background-color', light_gray);
    $('.news .alert').css('border-top', '1px solid '+black);
    $('.news .alert:first-child').css('border-top', '0');
    $('body').css('background-color', dark_gray);
    $('.boxed-group>h3, .boxed-group .heading').css('background-color', light_gray).css('border', '1px solid' + light_gray);

    //texts
    $('.message').css('color', tinted_gray);
    $('.news li blockquote').css('color', tinted_gray);
    $('.news blockquote').css('color', tinted_gray);
    $('body').css('color', white);
})();