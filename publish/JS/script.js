!function(){var e,t={exports:{}};e=function(){"use strict";var e=function(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};return function(){var o=void 0,n=void 0,i=void 0,r=void 0,d=void 0,a=void 0,u=void 0,c=void 0,s=void 0,l=void 0,f=void 0,m=void 0;function y(e){return e.getBoundingClientRect().top+n}function v(e){s||(s=e),f=d(l=e-s,n,u,c),window.scrollTo(0,f),l<c?window.requestAnimationFrame(v):(window.scrollTo(0,n+u),o&&a&&(o.setAttribute("tabindex","-1"),o.focus()),"function"==typeof m&&m(),s=!1)}return function(s){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(c=l.duration||1e3,r=l.offset||0,m=l.callback,d=l.easing||e,a=l.a11y||!1,n=window.scrollY||window.pageYOffset,void 0===s?"undefined":t(s)){case"number":o=void 0,a=!1,i=n+s;break;case"object":i=y(o=s);break;case"string":o=document.querySelector(s),i=y(o)}switch(u=i-n+r,t(l.duration)){case"number":c=l.duration;break;case"function":c=l.duration(u)}window.requestAnimationFrame(v)}}()},"object"==typeof t.exports?t.exports=e():"function"==typeof define&&define.amd?define(e):this.Jump=e();var o,n=(o=t=t.exports)&&o.__esModule?o:{default:o},r=document.getElementsByClassName("BGContainer"),d=0;for(i=1;i<600;i++){var a=document.createElement("div");a.classList.add("BGBox"),a.style.animationDelay=d+"ms",r[0].appendChild(a),d+=3}document.getElementsByClassName("Pfeil")[0].addEventListener("click",(function(){ziel=document.getElementById("Gallery"),(0,n.default)(ziel,{duration:400})}))}();
//# sourceMappingURL=script.js.map
