!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,o,u,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,f=setTimeout(O,t),s?y(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function O(){var e=p();if(h(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function T(e){return f=void 0,v&&i?y(e):(i=o=void 0,a)}function w(){var e=p(),n=h(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(O,t),y(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?a:T(p())},w}function b(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var r=a.test(e);return r||f.test(e)?l(e.slice(2),r?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})};var S=document.querySelector(".feedback-form"),h=document.querySelector('input[name="email"]'),O=document.querySelector('textarea[name="message"]'),T="feedback-form-state",w=JSON.parse(localStorage.getItem(T));w&&(h.value=w.email,O.value=w.message),S.addEventListener("input",n((function(){var e={email:h.value,message:O.value},t=JSON.stringify(e);localStorage.setItem(T,t)}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),""!==h.value&&""!==O.value?(console.log({email:h.value,message:O.value}),e.currentTarget.reset(),localStorage.removeItem(T)):alert("You have to fill in all fields!")}))}();
//# sourceMappingURL=03-feedback.9afe0b2a.js.map
