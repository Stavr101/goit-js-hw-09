var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i={form:document.querySelector(".form"),delay:document.querySelector('.input[name="delay"]'),step:document.querySelector('.input[name="step"]'),amount:document.querySelector('.input[name="amount"]')};function u(e,t){const n=Math.random()>.3;new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)})).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`),console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`),console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}document.querySelector('input[name="delay"]').setAttribute("min",0),document.querySelector('input[name="step"]').setAttribute("min",0),document.querySelector('input[name="amount"]').setAttribute("min",0),i.form.addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:n,amount:o}=e.currentTarget;let r=Number(t.value);const i=Number(n.value),l=Number(o.value);for(let e=1;e<=l;e+=1)r+=i,u(e,r)}));
//# sourceMappingURL=03-promises.bd3c952c.js.map