(()=>{var e={14:e=>{e.exports=class{constructor(e){this.amountDue=e,this.cashTendered=0}insertCoin(e){"quarter"===e?this.cashTendered+=25:"dime"===e?this.cashTendered+=10:"nickel"===e?this.cashTendered+=5:"penny"===e&&(this.cashTendered+=1)}isPaymentSufficient(){return this.cashTendered>=this.amountDue||!(this.cashTendered<this.amountDue)&&void 0}giveChange(){let e=this.cashTendered-this.amountDue,t=0,n=0,o=0,s=0;const r=[25,10,5,1];return Math.floor(e/r[0])>=1?(t+=Math.floor(e/r[0]),e-=r[0]*t,o+=Math.floor(e/r[1]),e-=r[1]*o,n+=Math.floor(e/r[2]),e-=r[2]*n,s+=Math.floor(e/r[3]),e-=r[3]*s):Math.floor(e/r[1])>=1?(o+=Math.floor(e/r[1]),console.log("HEY"+o),e-=r[1]*o,console.log(e),n+=Math.floor(e/r[2]),console.log(n),e-=r[2]*n,console.log(e),s+=Math.floor(e/r[3]),console.log(s),e-=r[3]*s,console.log(e)):Math.floor(e/r[1])>=1?(console.log(e),n+=Math.floor(e/r[2]),console.log("hello"+n),e-=r[2]*n,console.log(e),s+=Math.floor(e/r[3]),console.log(s),e-=r[3]*s,console.log(e)):Math.floor(e/r[3])>=1&&(s+=Math.floor(e/r[3]),console.log(s),e-=r[3]*s,console.log(e)),{quarters:t,dimes:o,nickels:n,pennies:s}}}},11:e=>{e.exports=function e(t){return t<0?"-"+e(-t):"$"+(t/100).toFixed(2)}}},t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(()=>{const e=n(14),t=n(11);let o=new e(0);!function(){const n=document.getElementById("vendingForm"),s=document.getElementById("amountDue"),r=document.getElementById("coins"),l=document.getElementById("cashTendered"),i=document.getElementById("paymentSufficient"),c=document.getElementById("getChangeButton"),d=document.getElementById("change"),a=d.querySelectorAll(".change-count"),h=document.getElementById("resetButton");function u(){l.innerText=t(o.cashTendered);const e=0!==o.amountDue&&o.isPaymentSufficient();i.hidden=!e,c.disabled=!e,d.hidden=!0}s.addEventListener("change",(()=>{const t=Math.round(100*s.value);o=new e(t),u()})),r.addEventListener("click",(e=>{let t=e.target.getAttribute("data-type");t&&(o.insertCoin(t),u())})),n.addEventListener("submit",(e=>{if(e.preventDefault(),o.isPaymentSufficient){const e=o.giveChange();a[0].innerText=e.quarters,a[1].innerText=e.dimes,a[2].innerText=e.nickels,a[3].innerText=e.pennies,d.hidden=!1}})),h.addEventListener("click",(()=>{s.value="",o=new e(0),u()})),u()}()})()})();