(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,n(i.key),i)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,"string");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}new(function(){return t=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.contentElement=n,this.triggerElement=e,this.isCollapsed=!1},(n=[{key:"addListener",value:function(){this.triggerElement.addEventListener("click",this.toggleAnimation.bind(this))}},{key:"toggleAnimation",value:function(){this.contentElement.classList.contains("show")&&this.contentElement.classList.remove("show"),this.contentElement.classList.contains("hide")&&this.contentElement.classList.remove("hide"),this.isCollapsed?(this.contentElement.classList.toggle("hide"),this.isCollapsed=!1):(this.contentElement.style.display="block",this.contentElement.classList.toggle("show"),this.isCollapsed=!0)}}])&&e(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n}())(document.querySelector(".collapse-button"),document.querySelector(".collapsible-content")).addListener()})();