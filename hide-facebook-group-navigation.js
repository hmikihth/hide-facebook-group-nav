// ==UserScript==
// @name        Hide Group Navigation - facebook.com
// @namespace   Violentmonkey Scripts
// @match       https://www.facebook.com/groups/*
// @grant       none
// @version     1.0
// @author      Miklos Horvath - blackPanther OS
// @description 2023. 08. 24. 20:56:35
// ==/UserScript==

document.querySelector('[aria-label="Group navigation"]').style.display = 'none';
