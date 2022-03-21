////////////////////////////////////////////////////////////////////
/// Twitch Plays Vampire Survivors
/// - Developed by NOMO
/// - nomotg@gmail.com
/// - https://nomo.asia

////////////////////////////////////////////////////////////////////
var TPVS_Version = "v0.1.1";

////////////////////////////////////////////////////////////////////
/// User Settings
var settings_init = {
    twitch_user_id : "pingpink",

    poll_time : 15,
    poll_restart_time : 5,
    auto_result_select_delay_time: 3,
    poll_result_hide: false,

    prevent_streamer_select : true,
    use_roulette : false,
    auto_result_select : false,

    skip_poll_for_goldcoins_and_chicken : true,

    subonly : false,

    panel_left : false,
    
    play_sound_effect : true,
    language:"ko"
};
var roulette_time = 3.0;
var settings = JSON.parse(JSON.stringify(settings_init));
var settings_temp;

if(window === undefined && global !== undefined){
    var window = global;
}
else if(global === undefined && window !== undefined){
    var global = window;
}

////////////////////////////////////////////////////////////////////
/// External Libraries
////////////////////////////////////////////////////////////////////
if (typeof module === 'object') {window.module = module; module = undefined;}
/*! jQuery v3.6.0 | https://github.com/jquery/jquery | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
window.$ = window.jQuery;

/*! tmi.js v1.8.5 | https://github.com/tmijs/tmi.js | MIT License */
!function s(o,i,r){function a(t,e){if(!i[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=i[t]={exports:{}},o[t][0].call(n.exports,function(e){return a(o[t][1][e]||e)},n,n.exports,s,o,i,r)}return i[t].exports}for(var c="function"==typeof require&&require,e=0;e<r.length;e++)a(r[e]);return a}({1:[function(e,t,n){"use strict";e=e("./lib/client");t.exports={client:e,Client:e}},{"./lib/client":3}],2:[function(e,t,n){"use strict";function i(t,e){var n,s=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,n)),s}function u(s){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(Object(o),!0).forEach(function(e){var t,n;t=s,e=o[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(o,e))})}return s}var l=e("node-fetch"),m=e("./utils");t.exports=function(e,t){var n=void 0!==e.url?e.url:e.uri;if(m.isURL(n)||(n="https://api.twitch.tv/kraken".concat("/"===n[0]?n:"/".concat(n))),m.isNode()){var s=Object.assign({method:"GET",json:!0},e);s.qs&&(o=new URLSearchParams(s.qs),n+="?".concat(o));var o={};"fetchAgent"in this.opts.connection&&(o.agent=this.opts.connection.fetchAgent);var o=l(n,u(u({},o),{},{method:s.method,headers:s.headers,body:s.body})),i={};o.then(function(e){return i={statusCode:e.status,headers:e.headers},s.json?e.json():e.text()}).then(function(e){return t(null,i,e)},function(e){return t(e,i,null)})}else{var r,a=Object.assign({method:"GET",headers:{}},e,{url:n}),c=new XMLHttpRequest;for(r in c.open(a.method,a.url,!0),a.headers)c.setRequestHeader(r,a.headers[r]);c.responseType="json",c.addEventListener("load",function(e){4===c.readyState&&(200!==c.status?t(c.status,null,null):t(null,null,c.response))}),c.send()}}},{"./utils":9,"node-fetch":10}],3:[function(p,d,e){!function(f){!function(){"use strict";function t(t,e){var n,s=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,n)),s}function i(s){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?t(Object(o),!0).forEach(function(e){var t,n;t=s,e=o[n=e],n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(o,e))})}return s}function H(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}function n(e){if(this instanceof n==!1)return new n(e);this.opts=V.get(e,{}),this.opts.channels=this.opts.channels||[],this.opts.connection=this.opts.connection||{},this.opts.identity=this.opts.identity||{},this.opts.options=this.opts.options||{},this.clientId=V.get(this.opts.options.clientId,null),this._globalDefaultChannel=V.channel(V.get(this.opts.options.globalDefaultChannel,"#tmijs")),this._skipMembership=V.get(this.opts.options.skipMembership,!1),this._skipUpdatingEmotesets=V.get(this.opts.options.skipUpdatingEmotesets,!1),this._updateEmotesetsTimer=null,this._updateEmotesetsTimerDelay=V.get(this.opts.options.updateEmotesetsTimer,6e4),this.maxReconnectAttempts=V.get(this.opts.connection.maxReconnectAttempts,1/0),this.maxReconnectInterval=V.get(this.opts.connection.maxReconnectInterval,3e4),this.reconnect=V.get(this.opts.connection.reconnect,!0),this.reconnectDecay=V.get(this.opts.connection.reconnectDecay,1.5),this.reconnectInterval=V.get(this.opts.connection.reconnectInterval,1e3),this.reconnecting=!1,this.reconnections=0,this.reconnectTimer=this.reconnectInterval,this.secure=V.get(this.opts.connection.secure,!this.opts.connection.server&&!this.opts.connection.port),this.emotes="",this.emotesets={},this.channels=[],this.currentLatency=0,this.globaluserstate={},this.lastJoined="",this.latency=new Date,this.moderators={},this.pingLoop=null,this.pingTimeout=null,this.reason="",this.username="",this.userstate={},this.wasCloseCalled=!1,this.ws=null,e="error",this.opts.options.debug&&(e="info"),this.log=this.opts.logger||m;try{m.setLevel(e)}catch(e){}this.opts.channels.forEach(function(e,t,n){return n[t]=V.channel(e)}),l.call(this),this.setMaxListeners(0)}var e,o=void 0!==f?f:"undefined"!=typeof window?window:{},r=o.WebSocket||p("ws"),a=o.fetch||p("node-fetch"),c=p("./api"),u=p("./commands"),l=p("./events").EventEmitter,m=p("./logger"),q=p("./parser"),W=p("./timer"),V=p("./utils"),h=!1;for(e in V.inherits(n,l),u)n.prototype[e]=u[e];n.prototype.emits=function(e,t){for(var n=0;n<e.length;n++){var s=n<t.length?t[n]:t[t.length-1];this.emit.apply(this,[e[n]].concat(s))}},n.prototype.api=function(){h||(this.log.warn("Client.prototype.api is deprecated and will be removed for version 2.0.0"),h=!0),c.apply(void 0,arguments)},n.prototype.handleMessage=function(t){var n=this;if(t){this.listenerCount("raw_message")&&this.emit("raw_message",JSON.parse(JSON.stringify(t)),t);var e,s,o,i,r,a,c,u,l,m=V.channel(V.get(t.params[0],null)),h=V.get(t.params[1],null),f=V.get(t.tags["msg-id"],null),p=t.tags=q.badges(q.badgeInfo(q.emotes(t.tags)));for(e in p)"emote-sets"!==e&&"ban-duration"!==e&&"bits"!==e&&("boolean"==typeof(s=p[e])?s=null:"1"===s?s=!0:"0"===s?s=!1:"string"==typeof s&&(s=V.unescapeIRC(s)),p[e]=s);if(null===t.prefix)switch(t.command){case"PING":this.emit("ping"),this._isConnected()&&this.ws.send("PONG");break;case"PONG":var d=new Date;this.currentLatency=(d.getTime()-this.latency.getTime())/1e3,this.emits(["pong","_promisePing"],[[this.currentLatency]]),clearTimeout(this.pingTimeout);break;default:this.log.warn("Could not parse message with no prefix:\n".concat(JSON.stringify(t,null,4)))}else if("tmi.twitch.tv"===t.prefix)switch(t.command){case"002":case"003":case"004":case"372":case"375":case"CAP":break;case"001":this.username=t.params[0];break;case"376":this.log.info("Connected to server."),this.userstate[this._globalDefaultChannel]={},this.emits(["connected","_promiseConnect"],[[this.server,this.port],[null]]),this.reconnections=0,this.reconnectTimer=this.reconnectInterval,this.pingLoop=setInterval(function(){n._isConnected()&&n.ws.send("PING"),n.latency=new Date,n.pingTimeout=setTimeout(function(){null!==n.ws&&(n.wasCloseCalled=!1,n.log.error("Ping timeout."),n.ws.close(),clearInterval(n.pingLoop),clearTimeout(n.pingTimeout),clearTimeout(n._updateEmotesetsTimer))},V.get(n.opts.connection.timeout,9999))},6e4);var g=V.get(this.opts.options.joinInterval,2e3),_=new W(g=g<300?300:g),b=H(new Set([].concat(H(this.opts.channels),H(this.channels))));this.channels=[];for(var v=0;v<b.length;v++)!function(e){var t=b[e];_.add(function(){n._isConnected()&&n.join(t).catch(function(e){return n.log.error(e)})})}(v);_.next();break;case"NOTICE":var y=[null],w=[m,f,h],k=[m,!0],C=[m,!1],T=[w,y],O=[w,[f]],E="[".concat(m,"] ").concat(h);switch(f){case"subs_on":this.log.info("[".concat(m,"] This room is now in subscribers-only mode.")),this.emits(["subscriber","subscribers","_promiseSubscribers"],[k,k,y]);break;case"subs_off":this.log.info("[".concat(m,"] This room is no longer in subscribers-only mode.")),this.emits(["subscriber","subscribers","_promiseSubscribersoff"],[C,C,y]);break;case"emote_only_on":this.log.info("[".concat(m,"] This room is now in emote-only mode.")),this.emits(["emoteonly","_promiseEmoteonly"],[k,y]);break;case"emote_only_off":this.log.info("[".concat(m,"] This room is no longer in emote-only mode.")),this.emits(["emoteonly","_promiseEmoteonlyoff"],[C,y]);break;case"slow_on":case"slow_off":break;case"followers_on_zero":case"followers_on":case"followers_off":break;case"r9k_on":this.log.info("[".concat(m,"] This room is now in r9k mode.")),this.emits(["r9kmode","r9kbeta","_promiseR9kbeta"],[k,k,y]);break;case"r9k_off":this.log.info("[".concat(m,"] This room is no longer in r9k mode.")),this.emits(["r9kmode","r9kbeta","_promiseR9kbetaoff"],[C,C,y]);break;case"room_mods":var x=h.split(": "),x=(1<x.length?x[1]:"").toLowerCase().split(", ").filter(function(e){return e});this.emits(["_promiseMods","mods"],[[null,x],[m,x]]);break;case"no_mods":this.emits(["_promiseMods","mods"],[[null,[]],[m,[]]]);break;case"vips_success":var S=(h=h.endsWith(".")?h.slice(0,-1):h).split(": "),S=(1<S.length?S[1]:"").toLowerCase().split(", ").filter(function(e){return e});this.emits(["_promiseVips","vips"],[[null,S],[m,S]]);break;case"no_vips":this.emits(["_promiseVips","vips"],[[null,[]],[m,[]]]);break;case"already_banned":case"bad_ban_admin":case"bad_ban_anon":case"bad_ban_broadcaster":case"bad_ban_global_mod":case"bad_ban_mod":case"bad_ban_self":case"bad_ban_staff":case"usage_ban":this.log.info(E),this.emits(["notice","_promiseBan"],O);break;case"ban_success":this.log.info(E),this.emits(["notice","_promiseBan"],T);break;case"usage_clear":this.log.info(E),this.emits(["notice","_promiseClear"],O);break;case"usage_mods":this.log.info(E),this.emits(["notice","_promiseMods"],[w,[f,[]]]);break;case"mod_success":this.log.info(E),this.emits(["notice","_promiseMod"],T);break;case"usage_vips":this.log.info(E),this.emits(["notice","_promiseVips"],[w,[f,[]]]);break;case"usage_vip":case"bad_vip_grantee_banned":case"bad_vip_grantee_already_vip":case"bad_vip_max_vips_reached":case"bad_vip_achievement_incomplete":this.log.info(E),this.emits(["notice","_promiseVip"],[w,[f,[]]]);break;case"vip_success":this.log.info(E),this.emits(["notice","_promiseVip"],T);break;case"usage_mod":case"bad_mod_banned":case"bad_mod_mod":this.log.info(E),this.emits(["notice","_promiseMod"],O);break;case"unmod_success":this.log.info(E),this.emits(["notice","_promiseUnmod"],T);break;case"unvip_success":this.log.info(E),this.emits(["notice","_promiseUnvip"],T);break;case"usage_unmod":case"bad_unmod_mod":this.log.info(E),this.emits(["notice","_promiseUnmod"],O);break;case"usage_unvip":case"bad_unvip_grantee_not_vip":this.log.info(E),this.emits(["notice","_promiseUnvip"],O);break;case"color_changed":this.log.info(E),this.emits(["notice","_promiseColor"],T);break;case"usage_color":case"turbo_only_color":this.log.info(E),this.emits(["notice","_promiseColor"],O);break;case"commercial_success":this.log.info(E),this.emits(["notice","_promiseCommercial"],T);break;case"usage_commercial":case"bad_commercial_error":this.log.info(E),this.emits(["notice","_promiseCommercial"],O);break;case"hosts_remaining":this.log.info(E);S=isNaN(h[0])?0:parseInt(h[0]);this.emits(["notice","_promiseHost"],[w,[null,~~S]]);break;case"bad_host_hosting":case"bad_host_rate_exceeded":case"bad_host_error":case"usage_host":this.log.info(E),this.emits(["notice","_promiseHost"],[w,[f,null]]);break;case"already_r9k_on":case"usage_r9k_on":this.log.info(E),this.emits(["notice","_promiseR9kbeta"],O);break;case"already_r9k_off":case"usage_r9k_off":this.log.info(E),this.emits(["notice","_promiseR9kbetaoff"],O);break;case"timeout_success":this.log.info(E),this.emits(["notice","_promiseTimeout"],T);break;case"delete_message_success":this.log.info("[".concat(m," ").concat(h,"]")),this.emits(["notice","_promiseDeletemessage"],T);break;case"already_subs_off":case"usage_subs_off":this.log.info(E),this.emits(["notice","_promiseSubscribersoff"],O);break;case"already_subs_on":case"usage_subs_on":this.log.info(E),this.emits(["notice","_promiseSubscribers"],O);break;case"already_emote_only_off":case"usage_emote_only_off":this.log.info(E),this.emits(["notice","_promiseEmoteonlyoff"],O);break;case"already_emote_only_on":case"usage_emote_only_on":this.log.info(E),this.emits(["notice","_promiseEmoteonly"],O);break;case"usage_slow_on":this.log.info(E),this.emits(["notice","_promiseSlow"],O);break;case"usage_slow_off":this.log.info(E),this.emits(["notice","_promiseSlowoff"],O);break;case"usage_timeout":case"bad_timeout_admin":case"bad_timeout_anon":case"bad_timeout_broadcaster":case"bad_timeout_duration":case"bad_timeout_global_mod":case"bad_timeout_mod":case"bad_timeout_self":case"bad_timeout_staff":this.log.info(E),this.emits(["notice","_promiseTimeout"],O);break;case"untimeout_success":case"unban_success":this.log.info(E),this.emits(["notice","_promiseUnban"],T);break;case"usage_unban":case"bad_unban_no_ban":this.log.info(E),this.emits(["notice","_promiseUnban"],O);break;case"usage_delete":case"bad_delete_message_error":case"bad_delete_message_broadcaster":case"bad_delete_message_mod":this.log.info(E),this.emits(["notice","_promiseDeletemessage"],O);break;case"usage_unhost":case"not_hosting":this.log.info(E),this.emits(["notice","_promiseUnhost"],O);break;case"whisper_invalid_login":case"whisper_invalid_self":case"whisper_limit_per_min":case"whisper_limit_per_sec":case"whisper_restricted":case"whisper_restricted_recipient":this.log.info(E),this.emits(["notice","_promiseWhisper"],O);break;case"no_permission":case"msg_banned":case"msg_room_not_found":case"msg_channel_suspended":case"tos_ban":case"invalid_user":this.log.info(E),this.emits(["notice","_promiseBan","_promiseClear","_promiseUnban","_promiseTimeout","_promiseDeletemessage","_promiseMods","_promiseMod","_promiseUnmod","_promiseVips","_promiseVip","_promiseUnvip","_promiseCommercial","_promiseHost","_promiseUnhost","_promiseJoin","_promisePart","_promiseR9kbeta","_promiseR9kbetaoff","_promiseSlow","_promiseSlowoff","_promiseFollowers","_promiseFollowersoff","_promiseSubscribers","_promiseSubscribersoff","_promiseEmoteonly","_promiseEmoteonlyoff","_promiseWhisper"],[w,[f,m]]);break;case"msg_rejected":case"msg_rejected_mandatory":this.log.info(E),this.emit("automod",m,f,h);break;case"unrecognized_cmd":this.log.info(E),this.emit("notice",m,f,h);break;case"cmds_available":case"host_target_went_offline":case"msg_censored_broadcaster":case"msg_duplicate":case"msg_emoteonly":case"msg_verified_email":case"msg_ratelimit":case"msg_subsonly":case"msg_timedout":case"msg_bad_characters":case"msg_channel_blocked":case"msg_facebook":case"msg_followersonly":case"msg_followersonly_followed":case"msg_followersonly_zero":case"msg_slowmode":case"msg_suspended":case"no_help":case"usage_disconnect":case"usage_help":case"usage_me":case"unavailable_command":this.log.info(E),this.emit("notice",m,f,h);break;case"host_on":case"host_off":break;default:h.includes("Login unsuccessful")||h.includes("Login authentication failed")||h.includes("Error logging in")||h.includes("Improperly formatted auth")?(this.wasCloseCalled=!1,this.reconnect=!1,this.reason=h,this.log.error(this.reason),this.ws.close()):h.includes("Invalid NICK")?(this.wasCloseCalled=!1,this.reconnect=!1,this.reason="Invalid NICK.",this.log.error(this.reason),this.ws.close()):(this.log.warn("Could not parse NOTICE from tmi.twitch.tv:\n".concat(JSON.stringify(t,null,4))),this.emit("notice",m,f,h))}break;case"USERNOTICE":var L=p["display-name"]||p.login,g=p["msg-param-sub-plan"]||"",j=V.unescapeIRC(V.get(p["msg-param-sub-plan-name"],""))||null,P={prime:g.includes("Prime"),plan:g,planName:j},I=~~(p["msg-param-streak-months"]||0),N=p["msg-param-recipient-display-name"]||p["msg-param-recipient-user-name"],R=~~p["msg-param-mass-gift-count"];switch(p["message-type"]=f){case"resub":this.emits(["resub","subanniversary"],[[m,L,I,h,p,P]]);break;case"sub":this.emits(["subscription","sub"],[[m,L,P,h,p]]);break;case"subgift":this.emit("subgift",m,L,I,N,P,p);break;case"anonsubgift":this.emit("anonsubgift",m,I,N,P,p);break;case"submysterygift":this.emit("submysterygift",m,L,R,P,p);break;case"anonsubmysterygift":this.emit("anonsubmysterygift",m,R,P,p);break;case"primepaidupgrade":this.emit("primepaidupgrade",m,L,P,p);break;case"giftpaidupgrade":var A=p["msg-param-sender-name"]||p["msg-param-sender-login"];this.emit("giftpaidupgrade",m,L,A,p);break;case"anongiftpaidupgrade":this.emit("anongiftpaidupgrade",m,L,p);break;case"raid":var A=p["msg-param-displayName"]||p["msg-param-login"],M=+p["msg-param-viewerCount"];this.emit("raided",m,A,M,p);break;case"ritual":M=p["msg-param-ritual-name"];"new_chatter"===M?this.emit("newchatter",m,L,p,h):this.emit("ritual",M,m,L,p,h);break;default:this.emit("usernotice",f,m,p,h)}break;case"HOSTTARGET":var j=h.split(" "),D=~~j[1]||0;"-"===j[0]?(this.log.info("[".concat(m,"] Exited host mode.")),this.emits(["unhost","_promiseUnhost"],[[m,D],[null]])):(this.log.info("[".concat(m,"] Now hosting ").concat(j[0]," for ").concat(D," viewer(s).")),this.emit("hosting",m,j[0],D));break;case"CLEARCHAT":1<t.params.length?null===(o=V.get(t.tags["ban-duration"],null))?(this.log.info("[".concat(m,"] ").concat(h," has been banned.")),this.emit("ban",m,h,null,t.tags)):(this.log.info("[".concat(m,"] ").concat(h," has been timed out for ").concat(o," seconds.")),this.emit("timeout",m,h,null,~~o,t.tags)):(this.log.info("[".concat(m,"] Chat was cleared by a moderator.")),this.emits(["clearchat","_promiseClear"],[[m],[null]]));break;case"CLEARMSG":1<t.params.length&&(D=h,o=p.login,p["message-type"]="messagedeleted",this.log.info("[".concat(m,"] ").concat(o,"'s message has been deleted.")),this.emit("messagedeleted",m,o,D,p));break;case"RECONNECT":this.log.info("Received RECONNECT request from Twitch.."),this.log.info("Disconnecting and reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.disconnect().catch(function(e){return n.log.error(e)}),setTimeout(function(){return n.connect().catch(function(e){return n.log.error(e)})},this.reconnectTimer);break;case"USERSTATE":t.tags.username=this.username,"mod"===t.tags["user-type"]&&(this.moderators[m]||(this.moderators[m]=[]),this.moderators[m].includes(this.username)||this.moderators[m].push(this.username)),V.isJustinfan(this.getUsername())||this.userstate[m]||(this.userstate[m]=p,this.lastJoined=m,this.channels.push(m),this.log.info("Joined ".concat(m)),this.emit("join",m,V.username(this.getUsername()),!0)),t.tags["emote-sets"]!==this.emotes&&this._updateEmoteset(t.tags["emote-sets"]),this.userstate[m]=p;break;case"GLOBALUSERSTATE":this.globaluserstate=p,this.emit("globaluserstate",p),void 0!==t.tags["emote-sets"]&&this._updateEmoteset(t.tags["emote-sets"]);break;case"ROOMSTATE":V.channel(this.lastJoined)===m&&this.emit("_promiseJoin",null,m),t.tags.channel=m,this.emit("roomstate",m,t.tags),V.hasOwn(t.tags,"subs-only")||(V.hasOwn(t.tags,"slow")&&("boolean"!=typeof t.tags.slow||t.tags.slow?(i=[m,!0,~~t.tags.slow],this.log.info("[".concat(m,"] This room is now in slow mode.")),this.emits(["slow","slowmode","_promiseSlow"],[i,i,[null]])):(i=[m,!1,0],this.log.info("[".concat(m,"] This room is no longer in slow mode.")),this.emits(["slow","slowmode","_promiseSlowoff"],[i,i,[null]]))),V.hasOwn(t.tags,"followers-only")&&("-1"===t.tags["followers-only"]?(r=[m,!1,0],this.log.info("[".concat(m,"] This room is no longer in followers-only mode.")),this.emits(["followersonly","followersmode","_promiseFollowersoff"],[r,r,[null]])):(r=[m,!0,~~t.tags["followers-only"]],this.log.info("[".concat(m,"] This room is now in follower-only mode.")),this.emits(["followersonly","followersmode","_promiseFollowers"],[r,r,[null]]))));break;case"SERVERCHANGE":break;default:this.log.warn("Could not parse message from tmi.twitch.tv:\n".concat(JSON.stringify(t,null,4)))}else if("jtv"===t.prefix)"MODE"===t.command?"+o"===h?(this.moderators[m]||(this.moderators[m]=[]),this.moderators[m].includes(t.params[2])||this.moderators[m].push(t.params[2]),this.emit("mod",m,t.params[2])):"-o"===h&&(this.moderators[m]||(this.moderators[m]=[]),this.moderators[m].filter(function(e){return e!==t.params[2]}),this.emit("unmod",m,t.params[2])):this.log.warn("Could not parse message from jtv:\n".concat(JSON.stringify(t,null,4)));else switch(t.command){case"353":this.emit("names",t.params[2],t.params[3].split(" "));break;case"366":break;case"JOIN":var U=t.prefix.split("!")[0];V.isJustinfan(this.getUsername())&&this.username===U&&(this.lastJoined=m,this.channels.push(m),this.log.info("Joined ".concat(m)),this.emit("join",m,U,!0)),this.username!==U&&this.emit("join",m,U,!1);break;case"PART":var J=!1,G=t.prefix.split("!")[0];this.username===G&&(J=!0,this.userstate[m]&&delete this.userstate[m],-1!==(U=this.channels.indexOf(m))&&this.channels.splice(U,1),-1!==(U=this.opts.channels.indexOf(m))&&this.opts.channels.splice(U,1),this.log.info("Left ".concat(m)),this.emit("_promisePart",null)),this.emit("part",m,G,J);break;case"WHISPER":J=t.prefix.split("!")[0];this.log.info("[WHISPER] <".concat(J,">: ").concat(h)),V.hasOwn(t.tags,"username")||(t.tags.username=J),t.tags["message-type"]="whisper";J=V.channel(t.tags.username);this.emits(["whisper","message"],[[J,t.tags,h,!1]]);break;case"PRIVMSG":t.tags.username=t.prefix.split("!")[0],"jtv"===t.tags.username?(c=V.username(h.split(" ")[0]),u=h.includes("auto"),h.includes("hosting you for")?(a=V.extractNumber(h),this.emit("hosted",m,c,a,u)):h.includes("hosting you")&&this.emit("hosted",m,c,0,u)):(a=V.get(this.opts.options.messagesLogLevel,"info"),c=V.actionMessage(h),t.tags["message-type"]=c?"action":"chat",h=c?c[1]:h,V.hasOwn(t.tags,"bits")?this.emit("cheer",m,t.tags,h):(V.hasOwn(t.tags,"msg-id")?"highlighted-message"===t.tags["msg-id"]?(u=t.tags["msg-id"],this.emit("redeem",m,t.tags.username,u,t.tags,h)):"skip-subs-mode-message"===t.tags["msg-id"]&&(l=t.tags["msg-id"],this.emit("redeem",m,t.tags.username,l,t.tags,h)):V.hasOwn(t.tags,"custom-reward-id")&&(l=t.tags["custom-reward-id"],this.emit("redeem",m,t.tags.username,l,t.tags,h)),c?(this.log[a]("[".concat(m,"] *<").concat(t.tags.username,">: ").concat(h)),this.emits(["action","message"],[[m,t.tags,h,!1]])):(this.log[a]("[".concat(m,"] <").concat(t.tags.username,">: ").concat(h)),this.emits(["chat","message"],[[m,t.tags,h,!1]]))));break;default:this.log.warn("Could not parse message:\n".concat(JSON.stringify(t,null,4)))}}},n.prototype.connect=function(){var s=this;return new Promise(function(t,n){s.server=V.get(s.opts.connection.server,"irc-ws.chat.twitch.tv"),s.port=V.get(s.opts.connection.port,80),s.secure&&(s.port=443),443===s.port&&(s.secure=!0),s.reconnectTimer=s.reconnectTimer*s.reconnectDecay,s.reconnectTimer>=s.maxReconnectInterval&&(s.reconnectTimer=s.maxReconnectInterval),s._openConnection(),s.once("_promiseConnect",function(e){e?n(e):t([s.server,~~s.port])})})},n.prototype._openConnection=function(){var e="".concat(this.secure?"wss":"ws","://").concat(this.server,":").concat(this.port,"/"),t={};"agent"in this.opts.connection&&(t.agent=this.opts.connection.agent),this.ws=new r(e,"irc",t),this.ws.onmessage=this._onMessage.bind(this),this.ws.onerror=this._onError.bind(this),this.ws.onclose=this._onClose.bind(this),this.ws.onopen=this._onOpen.bind(this)},n.prototype._onOpen=function(){var n=this;this._isConnected()&&(this.log.info("Connecting to ".concat(this.server," on port ").concat(this.port,"..")),this.emit("connecting",this.server,~~this.port),this.username=V.get(this.opts.identity.username,V.justinfan()),this._getToken().then(function(e){var t=V.password(e);n.log.info("Sending authentication to server.."),n.emit("logon");e="twitch.tv/tags twitch.tv/commands";n._skipMembership||(e+=" twitch.tv/membership"),n.ws.send("CAP REQ :"+e),t?n.ws.send("PASS ".concat(t)):V.isJustinfan(n.username)&&n.ws.send("PASS SCHMOOPIIE"),n.ws.send("NICK ".concat(n.username))}).catch(function(e){n.emits(["_promiseConnect","disconnected"],[[e],["Could not get a token."]])}))},n.prototype._getToken=function(){var e,t=this.opts.identity.password;return"function"==typeof t?(e=t())instanceof Promise?e:Promise.resolve(e):Promise.resolve(t)},n.prototype._onMessage=function(e){var t=this;e.data.trim().split("\r\n").forEach(function(e){e=q.msg(e);e&&t.handleMessage(e)})},n.prototype._onError=function(){var t=this;this.moderators={},this.userstate={},this.globaluserstate={},clearInterval(this.pingLoop),clearTimeout(this.pingTimeout),clearTimeout(this._updateEmotesetsTimer),this.reason=null===this.ws?"Connection closed.":"Unable to connect.",this.emits(["_promiseConnect","disconnected"],[[this.reason]]),this.reconnect&&this.reconnections===this.maxReconnectAttempts&&(this.emit("maxreconnect"),this.log.error("Maximum reconnection attempts reached.")),this.reconnect&&!this.reconnecting&&this.reconnections<=this.maxReconnectAttempts-1&&(this.reconnecting=!0,this.reconnections=this.reconnections+1,this.log.error("Reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.emit("reconnect"),setTimeout(function(){t.reconnecting=!1,t.connect().catch(function(e){return t.log.error(e)})},this.reconnectTimer)),this.ws=null},n.prototype._onClose=function(){var t=this;this.moderators={},this.userstate={},this.globaluserstate={},clearInterval(this.pingLoop),clearTimeout(this.pingTimeout),clearTimeout(this._updateEmotesetsTimer),this.wasCloseCalled?(this.wasCloseCalled=!1,this.reason="Connection closed.",this.log.info(this.reason),this.emits(["_promiseConnect","_promiseDisconnect","disconnected"],[[this.reason],[null],[this.reason]])):(this.emits(["_promiseConnect","disconnected"],[[this.reason]]),this.reconnect&&this.reconnections===this.maxReconnectAttempts&&(this.emit("maxreconnect"),this.log.error("Maximum reconnection attempts reached.")),this.reconnect&&!this.reconnecting&&this.reconnections<=this.maxReconnectAttempts-1&&(this.reconnecting=!0,this.reconnections=this.reconnections+1,this.log.error("Could not connect to server. Reconnecting in ".concat(Math.round(this.reconnectTimer/1e3)," seconds..")),this.emit("reconnect"),setTimeout(function(){t.reconnecting=!1,t.connect().catch(function(e){return t.log.error(e)})},this.reconnectTimer))),this.ws=null},n.prototype._getPromiseDelay=function(){return this.currentLatency<=600?600:this.currentLatency+100},n.prototype._sendCommand=function(s,o,i,r){var a=this;return new Promise(function(e,t){if(!a._isConnected())return t("Not connected to server.");var n;null!==s&&"number"!=typeof s||(null===s&&(s=a._getPromiseDelay()),V.promiseDelay(s).then(function(){return t("No response from Twitch.")})),null!==o?(n=V.channel(o),a.log.info("[".concat(n,"] Executing command: ").concat(i)),a.ws.send("PRIVMSG ".concat(n," :").concat(i))):(a.log.info("Executing command: ".concat(i)),a.ws.send(i)),"function"==typeof r?r(e,t):e()})},n.prototype._sendMessage=function(c,u,l,m){var h=this;return new Promise(function(e,t){if(!h._isConnected())return t("Not connected to server.");if(V.isJustinfan(h.getUsername()))return t("Cannot send anonymous messages.");var n,s=V.channel(u);h.userstate[s]||(h.userstate[s]={}),500<=l.length&&(n=V.splitLine(l,500),l=n[0],setTimeout(function(){h._sendMessage(c,u,n[1],function(){})},350)),h.ws.send("PRIVMSG ".concat(s," :").concat(l));var o={};Object.keys(h.emotesets).forEach(function(e){return h.emotesets[e].forEach(function(e){return(V.isRegex(e.code)?q.emoteRegex:q.emoteString)(l,e.code,e.id,o)})});var i=Object.assign(h.userstate[s],q.emotes({emotes:q.transformEmotes(o)||null})),r=V.get(h.opts.options.messagesLogLevel,"info"),a=V.actionMessage(l);a?(i["message-type"]="action",h.log[r]("[".concat(s,"] *<").concat(h.getUsername(),">: ").concat(a[1])),h.emits(["action","message"],[[s,i,a[1],!0]])):(i["message-type"]="chat",h.log[r]("[".concat(s,"] <").concat(h.getUsername(),">: ").concat(l)),h.emits(["chat","message"],[[s,i,l,!0]])),"function"==typeof m?m(e,t):e()})},n.prototype._updateEmoteset=function(s){var t,o=this,e=void 0!==s;e&&(s===this.emotes?e=!1:this.emotes=s),this._skipUpdatingEmotesets?e&&this.emit("emotesets",s,{}):(t=function(){0<o._updateEmotesetsTimerDelay&&(clearTimeout(o._updateEmotesetsTimer),o._updateEmotesetsTimer=setTimeout(function(){return o._updateEmoteset(s)},o._updateEmotesetsTimerDelay))},this._getToken().then(function(e){var t="https://api.twitch.tv/kraken/chat/emoticon_images?emotesets=".concat(s),n={};return"fetchAgent"in o.opts.connection&&(n.agent=o.opts.connection.fetchAgent),a(t,i(i({},n),{},{headers:{Accept:"application/vnd.twitchtv.v5+json",Authorization:"OAuth ".concat(V.token(e)),"Client-ID":o.clientId}}))}).then(function(e){return e.json()}).then(function(e){o.emotesets=e.emoticon_sets||{},o.emit("emotesets",s,o.emotesets),t()}).catch(t))},n.prototype.getUsername=function(){return this.username},n.prototype.getOptions=function(){return this.opts},n.prototype.getChannels=function(){return this.channels},n.prototype.isMod=function(e,t){e=V.channel(e);return this.moderators[e]||(this.moderators[e]=[]),this.moderators[e].includes(V.username(t))},n.prototype.readyState=function(){return null===this.ws?"CLOSED":["CONNECTING","OPEN","CLOSING","CLOSED"][this.ws.readyState]},n.prototype._isConnected=function(){return null!==this.ws&&1===this.ws.readyState},n.prototype.disconnect=function(){var n=this;return new Promise(function(e,t){null!==n.ws&&3!==n.ws.readyState?(n.wasCloseCalled=!0,n.log.info("Disconnecting from server.."),n.ws.close(),n.once("_promiseDisconnect",function(){return e([n.server,~~n.port])})):(n.log.error("Cannot disconnect from server. Socket is not opened or connection is already closing."),t("Cannot disconnect from server. Socket is not opened or connection is already closing."))})},n.prototype.off=n.prototype.removeListener,void 0!==d&&d.exports&&(d.exports=n),"undefined"!=typeof window&&(window.tmi={client:n,Client:n})}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./api":2,"./commands":4,"./events":5,"./logger":6,"./parser":7,"./timer":8,"./utils":9,"node-fetch":10,ws:10}],4:[function(e,t,n){"use strict";var u=e("./utils");function s(s,o){var e=this;return s=u.channel(s),o=u.get(o,30),this._sendCommand(null,s,"/followers ".concat(o),function(t,n){e.once("_promiseFollowers",function(e){e?n(e):t([s,~~o])})})}function o(s){var e=this;return s=u.channel(s),this._sendCommand(null,s,"/followersoff",function(t,n){e.once("_promiseFollowersoff",function(e){e?n(e):t([s])})})}function i(s){var e=this;return s=u.channel(s),this._sendCommand(null,null,"PART ".concat(s),function(t,n){e.once("_promisePart",function(e){e?n(e):t([s])})})}function r(s){var e=this;return s=u.channel(s),this._sendCommand(null,s,"/r9kbeta",function(t,n){e.once("_promiseR9kbeta",function(e){e?n(e):t([s])})})}function a(s){var e=this;return s=u.channel(s),this._sendCommand(null,s,"/r9kbetaoff",function(t,n){e.once("_promiseR9kbetaoff",function(e){e?n(e):t([s])})})}function c(s,o){var e=this;return s=u.channel(s),o=u.get(o,300),this._sendCommand(null,s,"/slow ".concat(o),function(t,n){e.once("_promiseSlow",function(e){e?n(e):t([s,~~o])})})}function l(s){var e=this;return s=u.channel(s),this._sendCommand(null,s,"/slowoff",function(t,n){e.once("_promiseSlowoff",function(e){e?n(e):t([s])})})}t.exports={action:function(n,s){return n=u.channel(n),s="ACTION ".concat(s,""),this._sendMessage(this._getPromiseDelay(),n,s,function(e,t){e([n,s])})},ban:function(s,o,i){var e=this;return s=u.channel(s),o=u.username(o),i=u.get(i,""),this._sendCommand(null,s,"/ban ".concat(o," ").concat(i),function(t,n){e.once("_promiseBan",function(e){e?n(e):t([s,o,i])})})},clear:function(s){var e=this;return s=u.channel(s),this._sendCommand(null,s,"/clear",function(t,n){e.once("_promiseClear",function(e){e?n(e):t([s])})})},color:function(e,s){var o=this;return s=u.get(s,e),this._sendCommand(null,"#tmijs","/color ".concat(s),function(t,n){o.once("_promiseColor",function(e){e?n(e):t([s])})})},commercial:function(s,o){var e=this;return s=u.channel(s),o=u.get(o,30),this._sendCommand(null,s,"/commercial ".concat(o),function(t,n){e.once("_promiseCommercial",function(e){e?n(e):t([s,~~o])})})},deletemessage:function(s,e){var o=this;return s=u.channel(s),this._sendCommand(null,s,"/delete ".concat(e),function(t,n){o.once("_promiseDeletemessage",function(e){e?n(e):t([s])})})},emoteonly:function(s){var e=this;return s=u.channel(s),this._sendCommand(null,s,"/emoteonly",function(t,n){e.once("_promiseEmoteonly",function(e){e?n(e):t([s])})})},emoteonlyoff:function(s){var e=this;return s=u.channel(s),this._sendCommand(null,s,"/emoteonlyoff",function(t,n){e.once("_promiseEmoteonlyoff",function(e){e?n(e):t([s])})})},followersonly:s,followersmode:s,followersonlyoff:o,followersmodeoff:o,host:function(o,i){var e=this;return o=u.channel(o),i=u.username(i),this._sendCommand(2e3,o,"/host ".concat(i),function(n,s){e.once("_promiseHost",function(e,t){e?s(e):n([o,i,~~t])})})},join:function(a){var c=this;return a=u.channel(a),this._sendCommand(void 0,null,"JOIN ".concat(a),function(s,o){var i="_promiseJoin",r=!1,e=function e(t,n){a===u.channel(n)&&(c.removeListener(i,e),r=!0,t?o(t):s([a]))};c.on(i,e);e=c._getPromiseDelay();u.promiseDelay(e).then(function(){r||c.emit(i,"No response from Twitch.",a)})})},mod:function(s,o){var e=this;return s=u.channel(s),o=u.username(o),this._sendCommand(null,s,"/mod ".concat(o),function(t,n){e.once("_promiseMod",function(e){e?n(e):t([s,o])})})},mods:function(o){var i=this;return o=u.channel(o),this._sendCommand(null,o,"/mods",function(n,s){i.once("_promiseMods",function(e,t){e?s(e):(t.forEach(function(e){i.moderators[o]||(i.moderators[o]=[]),i.moderators[o].includes(e)||i.moderators[o].push(e)}),n(t))})})},part:i,leave:i,ping:function(){var n=this;return this._sendCommand(null,null,"PING",function(t,e){n.latency=new Date,n.pingTimeout=setTimeout(function(){null!==n.ws&&(n.wasCloseCalled=!1,n.log.error("Ping timeout."),n.ws.close(),clearInterval(n.pingLoop),clearTimeout(n.pingTimeout))},u.get(n.opts.connection.timeout,9999)),n.once("_promisePing",function(e){return t([parseFloat(e)])})})},r9kbeta:r,r9kmode:r,r9kbetaoff:a,r9kmodeoff:a,raw:function(n){return this._sendCommand(null,null,n,function(e,t){e([n])})},say:function(n,s){return n=u.channel(n),s.startsWith(".")&&!s.startsWith("..")||s.startsWith("/")||s.startsWith("\\")?"me "===s.substr(1,3)?this.action(n,s.substr(4)):this._sendCommand(null,n,s,function(e,t){e([n,s])}):this._sendMessage(this._getPromiseDelay(),n,s,function(e,t){e([n,s])})},slow:c,slowmode:c,slowoff:l,slowmodeoff:l,subscribers:function(s){var e=this;return s=u.channel(s),this._sendCommand(null,s,"/subscribers",function(t,n){e.once("_promiseSubscribers",function(e){e?n(e):t([s])})})},subscribersoff:function(s){var e=this;return s=u.channel(s),this._sendCommand(null,s,"/subscribersoff",function(t,n){e.once("_promiseSubscribersoff",function(e){e?n(e):t([s])})})},timeout:function(s,o,i,r){var e=this;return s=u.channel(s),o=u.username(o),null===i||u.isInteger(i)||(r=i,i=300),i=u.get(i,300),r=u.get(r,""),this._sendCommand(null,s,"/timeout ".concat(o," ").concat(i," ").concat(r),function(t,n){e.once("_promiseTimeout",function(e){e?n(e):t([s,o,~~i,r])})})},unban:function(s,o){var e=this;return s=u.channel(s),o=u.username(o),this._sendCommand(null,s,"/unban ".concat(o),function(t,n){e.once("_promiseUnban",function(e){e?n(e):t([s,o])})})},unhost:function(s){var e=this;return s=u.channel(s),this._sendCommand(2e3,s,"/unhost",function(t,n){e.once("_promiseUnhost",function(e){e?n(e):t([s])})})},unmod:function(s,o){var e=this;return s=u.channel(s),o=u.username(o),this._sendCommand(null,s,"/unmod ".concat(o),function(t,n){e.once("_promiseUnmod",function(e){e?n(e):t([s,o])})})},unvip:function(s,o){var e=this;return s=u.channel(s),o=u.username(o),this._sendCommand(null,s,"/unvip ".concat(o),function(t,n){e.once("_promiseUnvip",function(e){e?n(e):t([s,o])})})},vip:function(s,o){var e=this;return s=u.channel(s),o=u.username(o),this._sendCommand(null,s,"/vip ".concat(o),function(t,n){e.once("_promiseVip",function(e){e?n(e):t([s,o])})})},vips:function(e){var t=this;return e=u.channel(e),this._sendCommand(null,e,"/vips",function(n,s){t.once("_promiseVips",function(e,t){e?s(e):n(t)})})},whisper:function(n,s){var o=this;return(n=u.username(n))===this.getUsername()?Promise.reject("Cannot send a whisper to the same account."):this._sendCommand(null,"#tmijs","/w ".concat(n," ").concat(s),function(e,t){o.once("_promiseWhisper",function(e){e&&t(e)})}).catch(function(e){if(e&&"string"==typeof e&&0!==e.indexOf("No response from Twitch."))throw e;var t=u.channel(n),e=Object.assign({"message-type":"whisper","message-id":null,"thread-id":null,username:o.getUsername()},o.globaluserstate);return o.emits(["whisper","message"],[[t,e,s,!0],[t,e,s,!0]]),[n,s]})}}},{"./utils":9}],5:[function(e,t,n){"use strict";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function c(e){return"function"==typeof e}function u(e){return"object"===s(e)&&null!==e}function a(e){return void 0===e}((t.exports=o).EventEmitter=o).prototype._events=void 0,o.prototype._maxListeners=void 0,o.defaultMaxListeners=10,o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},o.prototype.emit=function(e){var t,n,s,o,i,r;if(this._events||(this._events={}),"error"===e&&(!this._events.error||u(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(a(n=this._events[e]))return!1;if(c(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),n.apply(this,o)}else if(u(n))for(o=Array.prototype.slice.call(arguments,1),s=(r=n.slice()).length,i=0;i<s;i++)r[i].apply(this,o);return!0},o.prototype.on=o.prototype.addListener=function(e,t){var n;if(!c(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,c(t.listener)?t.listener:t),this._events[e]?u(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,u(this._events[e])&&!this._events[e].warned&&(n=a(this._maxListeners)?o.defaultMaxListeners:this._maxListeners)&&0<n&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},o.prototype.once=function(e,t){if(!c(t))throw TypeError("listener must be a function");var n=!1;if(this._events.hasOwnProperty(e)&&"_"===e.charAt(0)){var s,o=1,i=e;for(s in this._events)this._events.hasOwnProperty(s)&&s.startsWith(i)&&o++;e+=o}function r(){"_"!==e.charAt(0)||isNaN(e.substr(e.length-1))||(e=e.substring(0,e.length-1)),this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},o.prototype.removeListener=function(e,t){var n,s,o,i;if(!c(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=(n=this._events[e]).length,s=-1,n===t||c(n.listener)&&n.listener===t){if(delete this._events[e],this._events.hasOwnProperty(e+"2")&&"_"===e.charAt(0)){var r,a=e;for(r in this._events)this._events.hasOwnProperty(r)&&r.startsWith(a)&&(isNaN(parseInt(r.substr(r.length-1)))||(this._events[e+parseInt(r.substr(r.length-1)-1)]=this._events[r],delete this._events[r]));this._events[e]=this._events[e+"1"],delete this._events[e+"1"]}this._events.removeListener&&this.emit("removeListener",e,t)}else if(u(n)){for(i=o;0<i--;)if(n[i]===t||n[i].listener&&n[i].listener===t){s=i;break}if(s<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(s,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},o.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(c(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},o.prototype.listeners=function(e){e=this._events&&this._events[e]?c(this._events[e])?[this._events[e]]:this._events[e].slice():[];return e},o.prototype.listenerCount=function(e){if(this._events){e=this._events[e];if(c(e))return 1;if(e)return e.length}return 0},o.listenerCount=function(e,t){return e.listenerCount(t)}},{}],6:[function(e,t,n){"use strict";var s=e("./utils"),o="info",i={trace:0,debug:1,info:2,warn:3,error:4,fatal:5};function r(t){return function(e){i[o]<=i[t]&&console.log("[".concat(s.formatDate(new Date),"] ").concat(t,": ").concat(e))}}t.exports={setLevel:function(e){o=e},trace:r("trace"),debug:r("debug"),info:r("info"),warn:r("warn"),error:r("error"),fatal:r("fatal")}},{"./utils":9}],7:[function(e,t,n){"use strict";var r=e("./utils"),a=/\S+/g;function s(e,t,n,s,o){var n=2<arguments.length&&void 0!==n?n:",",i=3<arguments.length&&void 0!==s?s:"/",r=4<arguments.length?o:void 0,s=e[t];if(void 0===s)return e;o="string"==typeof s;if(e[t+"-raw"]=o?s:null,!0===s)return e[t]=null,e;if(e[t]={},o)for(var a=s.split(n),c=0;c<a.length;c++){var u=a[c].split(i),l=u[1];void 0!==r&&l&&(l=l.split(r)),e[t][u[0]]=l||null}return e}t.exports={badges:function(e){return s(e,"badges")},badgeInfo:function(e){return s(e,"badge-info")},emotes:function(e){return s(e,"emotes","/",":",",")},emoteRegex:function(e,t,n,s){a.lastIndex=0;for(var o,i=new RegExp("(\\b|^|\\s)"+r.unescapeHtml(t)+"(\\b|$|\\s)");null!==(o=a.exec(e));)i.test(o[0])&&(s[n]=s[n]||[],s[n].push([o.index,a.lastIndex-1]))},emoteString:function(e,t,n,s){var o;for(a.lastIndex=0;null!==(o=a.exec(e));)o[0]===r.unescapeHtml(t)&&(s[n]=s[n]||[],s[n].push([o.index,a.lastIndex-1]))},transformEmotes:function(t){var n="";return Object.keys(t).forEach(function(e){n="".concat(n+e,":"),t[e].forEach(function(e){return n="".concat(n+e.join("-"),",")}),n="".concat(n.slice(0,-1),"/")}),n.slice(0,-1)},formTags:function(e){var t,n=[];for(t in e){var s=r.escapeIRC(e[t]);n.push("".concat(t,"=").concat(s))}return"@".concat(n.join(";"))},msg:function(e){var t={raw:e,tags:{},prefix:null,command:null,params:[]},n=0,s=0;if(64===e.charCodeAt(0)){if(-1===(s=e.indexOf(" ")))return null;for(var o=e.slice(1,s).split(";"),i=0;i<o.length;i++){var r=o[i],a=r.split("=");t.tags[a[0]]=r.substring(r.indexOf("=")+1)||!0}n=s+1}for(;32===e.charCodeAt(n);)n++;if(58===e.charCodeAt(n)){if(-1===(s=e.indexOf(" ",n)))return null;for(t.prefix=e.slice(n+1,s),n=s+1;32===e.charCodeAt(n);)n++}if(-1===(s=e.indexOf(" ",n)))return e.length>n?(t.command=e.slice(n),t):null;for(t.command=e.slice(n,s),n=s+1;32===e.charCodeAt(n);)n++;for(;n<e.length;){if(s=e.indexOf(" ",n),58===e.charCodeAt(n)){t.params.push(e.slice(n+1));break}if(-1===s){if(-1===s){t.params.push(e.slice(n));break}}else for(t.params.push(e.slice(n,s)),n=s+1;32===e.charCodeAt(n);)n++}return t}}},{"./utils":9}],8:[function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}t.exports=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.queue=[],this.index=0,this.defaultDelay=void 0===e?3e3:e}var e,n,s;return e=t,(n=[{key:"add",value:function(e,t){this.queue.push({fn:e,delay:t})}},{key:"next",value:function(){var e,t=this,n=this.index++,n=this.queue[n];n&&(e=this.queue[this.index],n.fn(),e&&(n=void 0===e.delay?this.defaultDelay:e.delay,setTimeout(function(){return t.next()},n)))}}])&&o(e.prototype,n),s&&o(e,s),t}()},{}],9:[function(e,f,t){!function(h){!function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n,s=/^\u0001ACTION ([^\u0001]+)\u0001$/,o=/^(justinfan)(\d+$)/,i=/\\([sn:r\\])/g,r=/([ \n;\r\\])/g,a={s:" ",n:"",":":";",r:""},c={" ":"s","\n":"n",";":":","\r":"r"},u=new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$","i"),l=/[|\\^$*+?:#]/,m=f.exports={get:function(e,t){return void 0===e?t:e},hasOwn:function(e,t){return{}.hasOwnProperty.call(e,t)},promiseDelay:function(t){return new Promise(function(e){return setTimeout(e,t)})},isFinite:(n=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},e.toString=function(){return n.toString()},e),toNumber:function(e,t){if(null===e)return 0;t=Math.pow(10,m.isFinite(t)?t:0);return Math.round(e*t)/t},isInteger:function(e){return!isNaN(m.toNumber(e,0))},isRegex:function(e){return l.test(e)},isURL:function(e){return u.test(e)},justinfan:function(){return"justinfan".concat(Math.floor(8e4*Math.random()+1e3))},isJustinfan:function(e){return o.test(e)},channel:function(e){var t;return"#"===(t=(e||"").toLowerCase())[0]?t:"#"+t},username:function(e){var t;return"#"===(t=(e||"").toLowerCase())[0]?t.slice(1):t},token:function(e){return e?e.toLowerCase().replace("oauth:",""):""},password:function(e){e=m.token(e);return e?"oauth:".concat(e):""},actionMessage:function(e){return e.match(s)},replaceAll:function(e,t){if(null==e)return null;for(var n in t)e=e.replace(new RegExp(n,"g"),t[n]);return e},unescapeHtml:function(e){return e.replace(/\\&amp\\;/g,"&").replace(/\\&lt\\;/g,"<").replace(/\\&gt\\;/g,">").replace(/\\&quot\\;/g,'"').replace(/\\&#039\\;/g,"'")},unescapeIRC:function(e){return e&&"string"==typeof e&&e.includes("\\")?e.replace(i,function(e,t){return t in a?a[t]:t}):e},escapeIRC:function(e){return e&&"string"==typeof e?e.replace(r,function(e,t){return t in c?"\\".concat(c[t]):t}):e},addWord:function(e,t){return e.length?e+" "+t:e+t},splitLine:function(e,t){var n=e.substring(0,t).lastIndexOf(" ");return[e.substring(0,n=-1===n?t-1:n),e.substring(n+1)]},extractNumber:function(e){for(var t=e.split(" "),n=0;n<t.length;n++)if(m.isInteger(t[n]))return~~t[n];return 0},formatDate:function(e){var t=e.getHours(),e=((e=e.getMinutes())<10?"0":"")+e;return"".concat(t=(t<10?"0":"")+t,":").concat(e)},inherits:function(e,t){e.super_=t;function n(){}n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e},isNode:function(){try{return"object"===(void 0===h?"undefined":t(h))&&"[object process]"===Object.prototype.toString.call(h)}catch(e){}return!1}};function e(e){return n.apply(this,arguments)}}.call(this)}.call(this,e("_process"))},{_process:11}],10:[function(e,t,n){},{}],11:[function(e,t,n){var s,o,t=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(t){if(s===setTimeout)return setTimeout(t,0);if((s===i||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch(e){try{return s.call(null,t,0)}catch(e){return s.call(this,t,0)}}}!function(){try{s="function"==typeof setTimeout?setTimeout:i}catch(e){s=i}try{o="function"==typeof clearTimeout?clearTimeout:r}catch(e){o=r}}();var c,u=[],l=!1,m=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):m=-1,u.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++m<t;)c&&c[m].run();m=-1,t=u.length}c=null,l=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===r||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}t.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},t.title="browser",t.browser=!0,t.env={},t.argv=[],t.version="",t.versions={},t.on=d,t.addListener=d,t.once=d,t.off=d,t.removeListener=d,t.removeAllListeners=d,t.emit=d,t.prependListener=d,t.prependOnceListener=d,t.listeners=function(e){return[]},t.binding=function(e){throw new Error("process.binding is not supported")},t.cwd=function(){return"/"},t.chdir=function(e){throw new Error("process.chdir is not supported")},t.umask=function(){return 0}},{}]},{},[1]);
if (window.module) module = window.module;


////////////////////////////////////////////////////////////////////
/// DEBUG
////////////////////////////////////////////////////////////////////
var DEBUG = false;
var DEBUG_CREATE_RANDOM_CHAT = false;
var DEBUG_PANEL_ON = false;
var DEBUG_PANEL_SETTIMEOUT;
if(DEBUG_PANEL_ON){
    $("body").append(`<div id="debugPanel" style="overflow:hidden;background-color:rgba(255,255,255,0.5);color:#000;font-size:12px;width:30vw;height:100vh;position:absolute;top:0;left:0;"></div>`);
}
window.NOMO_DEBUG = function (/**/){
    if(DEBUG){
        var args = arguments,
            args_length = args.length,
            args_copy = args;
        for (var i=args_length;i>0;i--){
            args[i] = args_copy[i-1];
        }
        args[0] = "[NOMO]  ";
        args.length = args_length + 1;

        if(DEBUG_PANEL_ON){
            clearTimeout(DEBUG_PANEL_SETTIMEOUT);
            var args_text = JSON.stringify(args);
            $("#debugPanel").prepend(`<div>${args_text}<br /><br /></div>`);
            DEBUG_PANEL_SETTIMEOUT = setTimeout(function(){
                $("#debugPanel").empty();
            },100000);
        }

        console.log.apply(console, args);
    }
};

////////////////////////////////////////////////////////////////////
/// Check Event
////////////////////////////////////////////////////////////////////
var isKRElectionEvent = false;
function checkKREvent(){
    if(settings.language !== "ko"){
        return;
    }
    var today = new Date();
    var krElectionEventStart = new Date("2022-03-08 00:00:01");
    var krElectionEventEnd = new Date("2022-03-10 00:00:01");
    if(today> krElectionEventStart &&  today < krElectionEventEnd){
        isKRElectionEvent = true;
    }
    
    if(isKRElectionEvent){
        $("#polltitle").html("<div>당신의 한표를 행사하세요!</div>");
    }
}

////////////////////////////////////////////////////////////////////
/// Keyboard and Mouse Event Catch
////////////////////////////////////////////////////////////////////
const keyEvent = ["keydown", "keypress", "keyup"];
const mouseClickEvent = ["mousedown", "mouseup", "touchstart",  "touchend", "click"];
var allowUserInput = true;
var forceAllowUserInput = false;
function eventcatch(a, b, c){
    if (keyEvent.includes(a)) {
        //NOMO_DEBUG("key event catch", a/*, b, c*/);
        //return;
    }
    else if(mouseClickEvent.includes(a)){
        //NOMO_DEBUG("mouse event catch", a/*, b, c*/);
        //return;
    }
    else{
        //NOMO_DEBUG("other event catch", a/*, b, c*/);
    }

    if (c == undefined){
        c = false;
    }

    var newfunction = function(){
        if(keyEvent.includes(a) || mouseClickEvent.includes(a)){
            if(forceAllowUserInput || allowUserInput){
                b.apply(this, arguments);
            }
        }
        else{
            b.apply(this, arguments);
        }
    }
    //window["_addEventListener_" + date_n](a, b, c);
    this["_addEventListener_" + date_n](a, newfunction, c);
}
function toggleUserInput(tg){
    allowUserInput = tg;
}

const date_n = String(Number(new Date()));
window["_addEventListener_" + date_n] = window.addEventListener;
window.addEventListener = eventcatch;
document["_addEventListener_" + date_n] = document.addEventListener;
document.addEventListener = eventcatch;
Element.prototype["_addEventListener_" + date_n] = Element.prototype.addEventListener;
Element.prototype.addEventListener = eventcatch;


// // Press Enter 5 times --> allow user input
// // before override keydown event, add event
// var forceAllowUserInputTimeout;
// var forceAllowUserInputCounter = 0;
// var test = function(e) {
//     NOMO_DEBUG("keypress", e);
//     if(ispollstart && e.which == 13) {
//         NOMO_DEBUG("ENTER KEY TYPED. COUNTER = ", forceAllowUserInputCounter);
//         clearTimeout(forceAllowUserInputTimeout);
//         forceAllowUserInputCounter += 1;
//         setTimeout(function(){
//             if(forceAllowUserInputCounter >= 5){
//                 forceAllowUserInput = true;
//                 NOMO_DEBUG("forceAllowUserInput CHANGED", forceAllowUserInput);
//                 if(!settings.skip_poll_for_goldcoins_and_chicken){
//                     setTpvsDesc(getTpvsLang("pollDisableForChickenAndGold"));
//                 }
//                 settings.skip_poll_for_goldcoins_and_chicken = true;
//                 forceAllowUserInputCounter = 0;
//             }
//         },300);
//     }
// }
// document["_addEventListener_" + date_n]('keydown', test);


////////////////////////////////////////////////////////////////////
// Audio
////////////////////////////////////////////////////////////////////
var audioPollFinishSound = undefined;
var audioDrumRollSound = undefined;
function loadSoundFiles(){
    try{
        if(!settings.play_sound_effect){
            return;
        }
        audioPollFinishSound = new Audio("PollFinishSound.mp3");
        audioDrumRollSound = new Audio("DrumRollSound.mp3");
        document.body.appendChild(audioPollFinishSound);
        document.body.appendChild(audioDrumRollSound);
    }
    catch(e){
        NOMO_DEBUG("error from loadSoundFiles", e);
    }
}
function playPollEndSound(){
    try{
        NOMO_DEBUG("playPollEndSound()");
        if(!settings.play_sound_effect || audioPollFinishSound === undefined) return;
        audioPollFinishSound.pause();
        audioPollFinishSound.currentTime = 0;
        audioPollFinishSound.play();
    }
    catch(e){
        NOMO_DEBUG("error from playPollEndSound", e);
    }
};
function playDrumRollSound(play){
    try{
        NOMO_DEBUG("playDrumRollSound()");
        if(!settings.play_sound_effect || audioDrumRollSound === undefined) return;

        
        if(play){
            audioDrumRollSound.pause();
            audioDrumRollSound.currentTime = 0;
            audioDrumRollSound.play();
        }
        else{
            audioDrumRollSound.pause();
            audioDrumRollSound.currentTime = 0;
        }
    }
    catch(e){
        NOMO_DEBUG("error from playDrumRollSound", e);
    }
};

////////////////////////////////////////////////////////////////////
// Language
////////////////////////////////////////////////////////////////////
var weaponLang = {}, itemLang = {}, Lang = {};
var weaponList = [], itemList = [];
function readJson(filename, varname){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", filename, true);
    rawFile.onload = function() {
        window[varname] = JSON.parse(rawFile.responseText);
        NOMO_DEBUG(filename+" FILE LOADED", weaponLang);

        // special work after read json file
        switch (varname){
            case "settings_temp":
                for(var settingsKey in settings_temp){
                    NOMO_DEBUG(settingsKey)
                    if(settings[settingsKey] !== undefined){
                        settings[settingsKey] = settings_temp[settingsKey];
                    }
                }
                createLayout();
                TwitchChatConnect();
                loadSoundFiles();
                checkKREvent();
                setModStatus(getTpvsLang("scriptInitializeSucceed"));
                getLang();
                break;
            case "weaponLang":
                for(key in weaponLang["en"]["translations"]){
                    weaponList.push(key);
                }
                break;
            case "itemLang":
                for(key in itemLang["en"]["translations"]){
                    itemList.push(key);
                }
                break;
        }
    };
    rawFile.send(null);
}

function getLang(){
    readJson("assets/lang/weaponLang.json", "weaponLang");
    readJson("assets/lang/itemLang.json", "itemLang");
    readJson("assets/lang/lang.json", "Lang");
}

function getWeaponName(wptype, lang){
    var mylang = settings.language;
    if(lang !== undefined){
        mylang = lang;
    }
    try{
        var wptypetuc = wptype.toUpperCase();
        if(wptypetuc === "REROLL"){
            return Lang[mylang]["translations"]["levelup_reroll"];
        }
        else if(wptypetuc === "SKIP"){
            return Lang[mylang]["translations"]["levelup_skip"];
        }
        else if(wptypetuc == "NEWITEM_GET"){
            return Lang[mylang]["translations"]["newItem_get"];
        }
        else if(wptypetuc == "NEWITEM_DISCARD"){
            return Lang[mylang]["translations"]["newItem_discard"];
        }
        else if(itemList.includes(wptypetuc)){
            return itemLang[mylang]["translations"][wptype].name;
        }
        else{
            return weaponLang[mylang]["translations"][wptype].name;
        }
    }
    catch(e){
        NOMO_DEBUG("GET WEAPON NAME FAILED", wptype, e);
        return wptype;
    }
}
var tpvsLang = {
    "ko":{
        "twitchConnecting":"Twitch 채팅과 연결 중입니다.",
        "twitchConnected":"Twitch 채팅과 연결되었습니다.",
        "twitchDisconnected":"Twitch 채팅과 연결이 끊겼습니다.",
        "pickaitem":"아이템을 선택하세요!",
        "letsPoll":"원하는 아이템 번호를 채팅창에 입력하세요.<br />예: !투표 1 or !2 or 3 or 111",
        "tiePoll":`동점으로 인해 투표가 연장됩니다!`,
        "letsSelectItem":"투표 종료! 아이템을 선택하세요!",
        "waitingPoll":"투표 대기 중",
        "currentmode_strict":"현재 모드는 <strong>트수런 모드</strong> 입니다.<br />투표 결과가 강제로 선택되며, 플레이어는 아이템을 직접 선택할 수 없습니다.",
        "currentmode_soft":"현재 모드는 <strong>훈수 모드</strong> 입니다. 투표는 진행되지만, 결과에 따른 아이템 선택은 스트리머가 직접 진행해야 합니다.",
        "isStrict":"스트리머 아이템 선택 불가(트수런)",
        "isAutoselect":"투표 후 결과 자동 선택",
        "isuse_roulette":"투표율 기반 아이템 랜덤 선택",
        "connect":"연결",
        "pollTime":"투표 시간(s)",
        "pollRestartTme":"재투표 시간(s)",
        "pollResultShowTme":"투표 결과 표시 시간(s)",
        "isSkipGoldcoinAndChicken":"골드와 치킨에 대해 투표하지 않음",
        "hidePollDuringPoll":"투표 진행 상황 숨김",
        "waitingAutoResultSelectDelay":`잠시 후 아이템이 자동으로 선택됩니다.`,
        "gameOver":"게임이 종료되었습니다.<br />다음 게임을 기다립니다",
        "totalcount":"총 투표 수",
        "lastSelectedItem":"선택",
        "roulette":"룰렛",
        "subonlypoll":"구독자 전용 투표",
        "playSoundEffect":"효과음 재생",
        "panel_left":"TPVS 패널을 왼쪽으로 이동",
        "detailSettings":"상세 설정",
        "back":"뒤로",
        "scriptInitializeSucceed":"TPVS 모드가 성공적으로 초기화 되었습니다. "+TPVS_Version,
        "scriptInitializeFailed":"TPVS 모드 초기화에 실패하여 모드가 비활성화 됩니다. "+TPVS_Version+". 뱀서가 업데이트 된 경우 개발자에게 연락하여 패치를 요청해주세요!",
        "spinRoulette":"투표율에 따라 룰렛을 돌립니다!",
        "firstVoteChat":"{0} 님이 가장 먼저 투표했어요!",
        "onlyOneItemLeft":"남은 아이템이 하나이므로 투표 없이 자동으로 선택됩니다.",
        "pollDisableForChickenAndGold":"다음 레벨업 부터 치킨, 골드에 대한 투표가 비활성화 됩니다.",
        "enterFiveTimesToDisable":"치킨, 골드에 대한 투표를 비활성화하려면 엔터를 빠르게 다섯번 누르세요!",
        "nowYouCanUseKeyboard":"치킨, 골드에 대한 투표 시 빠른 진행을 위해 아이템을 직접 선택할 수 있습니다."
    },
    "en":{
        "twitchConnecting":"Connecting with the Twitch chat.",
        "twitchConnected":"Connected to Twitch chat.",
        "twitchDisconnected":"Failed to connect to Twitch chat.",
        "pickaitem":"Pick a Item!",
        "letsPoll":"Enter item number into the chat to vote.<br />!2 or 3 or 111",
        "tiePoll":"Polls are running again due to a tie!",
        "letsSelectItem":"Poll completed. Select an item!",
        "waitingPoll":"Waiting to poll",
        "currentmode_strict":"Current mode: STRICT<br />Item will be automatically selected by poll result, and streamer cannot directly select item.",
        "currentmode_soft":"Current mode: SOFT<br />The streamer proceeds to select an item according to the poll result.",
        "isStrict":"Use Strict Mode",
        "isAutoselect":"Auto-select item after poll",
        "isuse_roulette":"Use roulette after poll",
        "connect":"Connect",
        "pollTime":"Poll time(s)",
        "pollRestartTme":"Poll time in case of tie(s)",
        "pollResultShowTme":"Poll result display time(s)",
        "isSkipGoldcoinAndChicken":"Skip poll for coins and roast",
        "hidePollDuringPoll":"Hide the number of votes",
        "waitingAutoResultSelectDelay":`After a while, the item will be selected automatically`,
        "gameOver":"The game is over.<br />Wait for the next game",
        "totalcount":"Total votes",
        "lastSelectedItem":"ITEM",
        "roulette":"ITEM",
        "subonlypoll":"Subscriber only poll",
        "playSoundEffect":"Play sound effect",
        "panel_left":"move TPVS panel to the left",
        "detailSettings":"More options",
        "back":"Back",
        "scriptInitializeSucceed":"TPVS mod has been successfully initialized. "+TPVS_Version,
        "scriptInitializeFailed":"TPVS Mod initialization failed. "+TPVS_Version+". TPVS mod is disabled. Contact the developer for more details!",
        "spinRoulette":"Roulette is spinning!",
        "firstVoteChat":"{0} was the first to vote!",
        "pollDisableForChickenAndGold":"Poll for gold and roast will be disabled from next level up!",
        "enterFiveTimesToDisable":"To disable poll for gold and roast, press Enter key five times!",
        "nowYouCanUseKeyboard":"Now you can select gold and roast by yourself."
    }
}

if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
    String.prototype.aryFormat = function(_array){
        var args = _array;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    }
}
function getTpvsLang(/**/){
    try{    
        var key = arguments[0];
        if(arguments.length == 1){ 
            if(settings.language == "ko"){
                return tpvsLang.ko[key];
            }
            else {
                return tpvsLang.en[key];
            }
        }
        else{
            var formatargs = Array.from(arguments).slice(1, arguments.length);
            if(settings.language == "ko"){
                return tpvsLang.ko[key].aryFormat(formatargs);
            }
            else {
                return tpvsLang.en[key].aryFormat(formatargs);
            }
        }
    }
    catch(e){
        NOMO_DEBUG("error from getTpvsLang", e);
    }
}


////////////////////////////////////////////////////////////////////
/// Load Game Script & injection
////////////////////////////////////////////////////////////////////
var script = document.createElement('script');
script.onload = function () {
    NOMO_DEBUG("vendors.bundle.js loaded");
};
script.src = "vendors.bundle.js";
document.head.appendChild(script);

const injectionFromTo = [
    [
        [/(\]\('menu_start'\))/,"$1,tpvs_startPage()"]
    ],
    [ 
        [/(\]\('postGame_header'\))/,"$1,tpvs_postGame()"]
    ],
    [ 
        [/(\]\('character_header'\))/,"$1,tpvs_startGame()"]
    ],
    [ 
        [/(\['BackFromCharSelectionScene'\]\(\)\{)/,"$1tpvs_startPage();"],    // for v0.2.13c
        [/(this\['UI_overlayScene'\]\[[a-zA-Z0-9-_'"]+\([a-zA-Z0-9-_'"]+\)\]\(\),this\[[a-zA-Z0-9-_'"]+\([a-zA-Z0-9-_'"]+\)\]\[[a-zA-Z0-9-_'"]+\([a-zA-Z0-9-_'"]+\)\]\(!0x1,this\['CharSelectionScene'\])/, "tpvs_startPage();$1"],    // for v0.3.0c
        [/\(\){(var [a-zA-Z0-9-_='";,\(\)\[\]!]+!0x1,this\['CharSelectionScene']\))/,"(){tpvs_startPage();$1"],  // for v0.3.0c 220306
        [/(\]\('options_header'\))/,"$1,tpvs_startPage()"]  // for backup
    ],
    [ 
        [/(\]\('levelup_header'\))/,"$1,window.tpvs=this,tpvs_startPoll()"]
    ],
    [
        [/(\]\('newItem_header'\))/, "$1,window.tpvs_newItem=this,tpvs_startPoll(1)"]   // for v0.3.0c
    ]
]

function tpvs_startTest(){
    setTimeout(function(){
        NOMO_DEBUG("tpvs_startTest");
        NOMO_DEBUG(window.tpvs_newItem);
    },100)
}

var isWellInjected = true;
var canbeinjectedandindexmap = [];
function injectScript(script_ori){
    try{
        var script = script_ori;

        // check if script snippets can be injected to original script
        for(var i=0;i<injectionFromTo.length;i++){
            var scriptSnippetsGroup = injectionFromTo[i];
            var canbeinjected = false;
            var injectionIndex = -1;
            for(var j=0;j<scriptSnippetsGroup.length;j++){
                var scriptSnippet = scriptSnippetsGroup[j];
                var from = scriptSnippet[0];
                var to = scriptSnippet[1];
                NOMO_DEBUG("fromto", from, to);
                if(script_ori.match(from) !== null){
                    canbeinjected = true;
                    injectionIndex = j;
                    break;
                }
            }
            if(!canbeinjected){
                isWellInjected = false;
            }
            canbeinjectedandindexmap.push([canbeinjected, injectionIndex]);
        }

        // can not be injected
        if(!isWellInjected){
            NOMO_DEBUG("CAN NOT BE INJECTED", canbeinjectedandindexmap);
        }
        // can be injected
        else{
            NOMO_DEBUG("CAN BE INJECTED", canbeinjectedandindexmap);
            for(var i=0;i<injectionFromTo.length;i++){
                var arrayTemp = injectionFromTo[i][canbeinjectedandindexmap[i][1]];
                var from = arrayTemp[0];
                var to = arrayTemp[1];
                NOMO_DEBUG("actual injection from to", from, to, script.match(from));
                script = script.replace(from,to);
            }
        }

        twitchPlayInit();

        return script;
    }
    catch(e){
        NOMO_DEBUG("error from injectScript", e);
    }
}

var rawFileMain = new XMLHttpRequest();
rawFileMain.open("GET", "main.bundle.js", true);
rawFileMain.onload  = function() {
    var rawFileMainText = rawFileMain.responseText;
    // rawFileMainText = rawFileMainText
    //     .replace("]('menu_start')","]('menu_start'),tpvs_startPage()")
    //     .replace("]('postGame_header')","]('postGame_header'),tpvs_postGame()")
    //     .replace("]('character_header')","]('character_header'),tpvs_startGame()")
    //     .replace("]('options_header')","]('options_header'),tpvs_startPage()")
    //     .replace("['BackFromCharSelectionScene'](){","['BackFromCharSelectionScene'](){tpvs_startPage();")
    //     .replace("]('levelup_header')","]('levelup_header'),window.tpvs=this,tpvs_startPoll()");
    // rawFileMainText = rawFileMainText.replace("'price':0x384,'growth':0.03,","'price':0x384,'growth':1.03,");
    // rawFileMainText = rawFileMainText.replace("'price':0xc8,'power':0.05,","'price':0xc8,'power':100.05,");
    // rawFileMainText = rawFileMainText.replace("'price':0xc8,'greed':0.1,","'price':0xc8,'greed':100.1,");
    // rawFileMainText = rawFileMainText.replace("'price':0x12c,'moveSpeed':0.05,","'price':0x12c,'moveSpeed':10.1,");
    // rawFileMainText = rawFileMainText.replace(/(const [a-zA-Z0-9-_'"]+=)(!0x1)(,_[a-zA-Z0-9-_'"]+=)(!0x1)(,_[a-zA-Z0-9-_'"]+=!0x1,_[a-zA-Z0-9-_'"]+='v\d\.\d\.\d[a-zA-Z]? - EA')/, "$1!0x0$3!0x0$5");
    // rawFileMainText = rawFileMainText.replace(/(const [a-zA-Z0-9-_'"]+=)(!0x1)(,[a-zA-Z0-9-_'"]+=[a-zA-Z0-9-_'"]+,[a-zA-Z0-9-_'"]+=!0x1,[a-zA-Z0-9-_'"]+='v\d\.\d\.\d[a-zA-Z]? - EA')/,"$1!0x0$3");
    rawFileMainText = injectScript(rawFileMainText);

    rawFileMainText = rawFileMainText.replace(/(\['BackFromStageSelectionScene'\]\(\)\{)/,"$1tpvs_startPage();");
    //NOMO_DEBUG(rawFileMainText);
    eval(rawFileMainText);
};
rawFileMain.send(null);




////////////////////////////////////////////////////////////////////
/// CSS
////////////////////////////////////////////////////////////////////
/*
@font-face {
    font-family: 'Nanum Gothic';
    src: url('./NanumGothic-Regular.woff') format('woff');
}
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);   // Nanum Gothic
*/
const tpvs_style = /*css*/`
@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
#pollContainer, #welcomesign, #modstatus {
    user-select: none;
    font-family:'Noto Sans KR', sans-serif;
}

#welcomesign {
    position: absolute;
    opacity: 0.3;
    color: #fff;
    font-size: 0.8vw;
    bottom: 0.7vw;
    left: 1vw;
}
#modstatus {
    position: absolute;
    color: #eee;
    font-size: 0.9vw;
    bottom: 0.5vw;
    left: 1vw;
    box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
    background: rgba(0,0,0,0.8);
    padding: 0.1vw;
    min-width: 30vw;
    border-radius: 0.5vw;
    letter-spacing: -0.01vw;
}

#polltitle {
    font-size:1.4vw;
    font-weight:bold;
    padding-bottom: 0.5vw;
    text-align:center;
}

#polltimer {
    letter-spacing:0.1vw;
    font-size:1.4vw;
    text-align: center;
    padding:0.5vw 0 0 0;
}

#pollContainer table .highlight td.wp, #pollContainer table .highlight_dub td.wp{
    z-index:100;
}
.highlight td::before {
    position: absolute;
    content: '';
    top: -0.3vw;
    left: -0.3vw;
    height: calc(100% - 0.15vw);
    width: calc(100% - 0.15vw);
    border: 0.4vw solid yellow;
    z-index: 400;
}
.highlight_dub td::before {
    position: absolute;
    content: '';
    top: -0.3vw;
    left: -0.3vw;
    height: calc(100% - 0.15vw);
    width: calc(100% - 0.15vw);
    border: 0.4vw solid hotpink;
    z-index: 400;
}
.highlight_notselected {
    color:#ccc;
}
.highlight_notselected td{
    border-color:rgba(0,0,0,0) !important;
}
.highlight_notselected .wpbg{
    opacity:0.5;
}
/*
#pollContainer {
    border-radius: 1vw;
    max-width: 20vw;
    position: absolute;
    color: #fff;
    font-size: 1.2vw;
    bottom: 10.5vh;
    right: 8.5vw;
    background: rgba(0,0,0,0.8);
    padding: 1vw;
    box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
}
*/
#pollContainer {
    padding: 0;
    border: 0.1vw solid #3c1b34;
    border-radius: 1vw;
    max-width: 24vw;
    position: absolute;
    color: #fff;
    font-size: 1.2vw;
    bottom: 10.5vh;
    right: max(calc(1.5vh / 5 * 8 + (100vw - 100vh / 5 * 8) / 2),5vw);/*8.5vw*/
    background: rgb(75 79 116 / 90%);
    box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
}

#pollContainer.panel_left {
    left: max(calc(1.5vh / 5 * 8 + (100vw - 100vh / 5 * 8) / 2),5vw);/*8.5vw*/
    right: unset;
}
#pollContainer_b1 {
    box-sizing: border-box;
    border: 0.3vw solid #cc9a4c;
    width: auto;
    height: auto;
    /* pointer-events: none; */
    margin: 0;
    padding: 0;
    border-radius: 1vw;
}
#pollContainer_b2 {
    box-sizing: border-box;
    border: 0.1vw solid #2c3055;
    width: auto;
    height: auto;
    /* pointer-events: none; */
    padding: 1vw;
    border-radius: 0.7vw;
}

#pollContainer.main {
    width: 20vw;
    bottom: 6.5vh;
    right: 6.5vw;
}
#pollContainer.panel_left.main {
    left: 6.5vw;
    right: unset;
}
#pollContainer.smallTBPadding #pollContainer_b2{
    padding: 0.3vw 0.6vw;
    max-width: 20vw;
}

#polllist {
    margin-bottom: 0.5vw;
}

#pollContainer label{
    display:block;
    cursor:pointer;
    clear:both;
}

#pollContainer table{
    width:20vw;
    border:0;
    margin:0 auto;
    /*border-collapse:collapse;*/
}

#pollContainer .totalcount{
    text-align: right;
}

#pollContainer table td{
    padding:0.1vw 0.5vw;
}

#pollContainer table td.wp{
    position:relative;
    background:#8b8b8b;
    width: 100%;
    z-index: 10;
    border: 0.2vw solid #cc9a4c; /*rgba(0,0,0,0)*/
}
#pollContainer .wpbg{
    position:absolute;
    top: -0.07vw;
    left: -0.07vw;
    height: calc(100% + 0.14vw);
    background-color: #9146FF;
    z-index: -1;
}
#pollContainer input{
    cursor:pointer;
    width: 1vw;
    height: 1vw;
    vertical-align: middle;
}
#pollContainer table .cnt{
    position:absolute;
    top: 0.05vw;
    right: 0.3vw;
    padding-left:0.1vw;
}

#twitchChatStatus{
    font-size: 1.0vw;
    /*color: #9146FF;*/
    color:gold;
    font-weight: bold;
    padding: 0;
    box-sizing: border-box;
    word-break: keep-all;
}

#tpvs_desc {
    font-size: 1vw;
    padding: 0;
    box-sizing: border-box;
    word-break: keep-all;
}

.wp {
    padding-right:15px;
}
.cnt {
    width: 9vw;
    text-align: right;
    white-space: nowrap;
}

#tpvsSettingContainer #textbox_twitch_user_id_container{
    cursor:auto;
}
#tpvsSettingContainer #textbox_twitch_user_id_container input{
    cursor:text;
    float:unset;
    font-size: 1vw;
    width:7vw;
    height: 1.4vw;
    box-sizing: border-box;
}
#tpvsSettingContainer #TwitchConnectBtn{
    cursor: pointer;
    font-size: 0.7vw;
    color: #fff;
    background-color: #9146FF;
    border: 0.01vw solid #000;
    height: 1.4vw;
    display: inline-block;
    vertical-align: middle;
    border-radius: 0.2vw;
    padding: 0.1vw 0.2vw;
    box-sizing: border-box;
}

#tpvsSettingContainer #TwitchConnectBtn:hover{
    background-color:#832eff;
}

#tpvsSettingContainer input{
    float:right;
}
#tpvsSettingContainer input[type=number]{
    font-size: 0.9vw;
    width: 3vw;
    height: 0.9vw;
    margin-top: 0.2vw;
    margin-right: 0.15vw;
}
#tpvsSettingContainer input[type=number]::-webkit-inner-spin-button {
    opacity: 1;
}

#pageBtnContainer{
    margin-top: 0.2vw;
    clear: both;
    text-align: right;
}
#pageBtnContainer .pageBtn{
    color:#ccc;
    text-align:right;
    cursor:pointer;
}
#pageBtnContainer .pageBtn:hover{
    color:#fff;
}

.electstamp{
    height: 2vw;
    position: absolute;
    top: 0;
    left: 2vw;
    z-index: 1000;
    filter: contrast(1.5) drop-shadow(0.1vw 0.1vw 0.1vw red);
}

`;
$("head").append(`<style>${tpvs_style}</style>`);

////////////////////////////////////////////////////////////////////
// Twitch Chat
var userid_dn_map = {};
var twitchChatConnected = false;
// Define configuration options
var client;
function TwitchChatConnect(){
    try{
        client = null; // GC
        const opts = {
            connection: {
                secure: true,
                reconnect: true
            },
            identity: {
                username: "justinfan821125",
                password: ""
            },
            channels: [settings.twitch_user_id.toLowerCase()]
        };
        client = new tmi.client(opts);
        client.on('message', onMessageHandler);
        client.on('connected', onConnectedHandler);
        client.on('disconnected', onDisconnectedHandler);
        client.connect();
    }
    catch(e){
        NOMO_DEBUG("error from TwitchChatConnect", e);
    }
}

function TwitchChatReconnect(){
    try{
        var delay = 100;
        if(twitchChatConnected){
            client.disconnect();
            delay = 500;
        }
        if($("#textbox_twitch_user_id").length !== 0){
            settings.twitch_user_id = $("#textbox_twitch_user_id").val();
            writeSettingJson();
        }
        setTimeout(function(){
            $("#twitchChatStatus").html(`${getTpvsLang("twitchConnecting")} (${settings.twitch_user_id})`);
            TwitchChatConnect();
        },delay);
    }
    catch(e){
        NOMO_DEBUG("ERROR FROM TwitchChatReconnect", e);
    }
}


// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    try{
        NOMO_DEBUG("[chat]",context.username,context["display-name"],msg)
        if (self) { return; } // Ignore messages from the bot
        if (settings.subonly && !context.subscriber){ return; } // subonly poll option
        if (ispollstart){
            var id = context["user-id"];
            var dn = context["display-name"];
            var msg = msg.trim().toLowerCase();
            
            msg = msg
                .replace("!","")
                .replace("투표","")
                .replace("/\s/g","")
                .trim();
            if(msg.length > 0){
                msg = msg[0];
            }
            if($.isNumeric(msg) && ispollstart){
                countpoll(id,dn,Number(msg));
            }
        }
    }
    catch(e){
        NOMO_DEBUG("error from onMessageHandler", e);
    }
}

if(DEBUG_CREATE_RANDOM_CHAT){
    var id = 0;
    var dn = "";
    var randno = [1,2,2,1,1,1,1,1,2,3,4,4,4,3,1,2,2,2,3,4,5];
    setInterval(function(){
        if(ispollstart){
            id = id + 1;
            if(id>100000) id = 0;
            dn = "disp_"+id;
            var msg = randno[Math.floor(Math.random() * randno.length)];
            countpoll(id,dn,Number(msg));
        }
    },50);
}

function onConnectedHandler (addr, port) {
    twitchChatConnected = true;
    updateTwitchChatStatus();
    NOMO_DEBUG(`Connected to ${addr}:${port}`);
}

function onDisconnectedHandler (reason) {
    twitchChatConnected = false;
    updateTwitchChatStatus();
    NOMO_DEBUG(`Disconnected. ${reason}`);
}

////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
// Poll System
var polldata = {};

var pollorder_userid = {}; // poll-order : user-id
var pollorder_cnt = 0;

var ispollstart = false;    // poll 시작 여부
var poll_time = 0.0;
var poll_time_startdate = new Date();

var polln_total = 0;    // 스킵, 리롤 포함한 총 개수

var pollcount_total = 0;
var pollcount = {};

var pollindex_seq = {};

var polltext = [];
var polltext_lang = [];


function countpoll(id, dn, result){
    try{
        userid_dn_map[id] = dn;

        //NOMO_DEBUG("countpoll", id, result);
        if(result > polln_total || result < 1){
            return;
        }

        // 이미 투표한 경우
        if(polldata[id] !== undefined){
            pollcount[polldata[id].v] = pollcount[polldata[id].v] - 1;
            if(polldata[id].v !== result){

                // to reduce memory cost
                if(pollorder_cnt < 100){
                    delete pollorder_userid[polldata[id].o];
                    pollorder_userid[pollorder_cnt] = id;
                }

                polldata[id] = {"v":result,"c":true,"o":pollorder_cnt};
            }
        }
        else{
            pollcount_total = pollcount_total + 1;
            polldata[id] = {"v":result,"c":false,"o":pollorder_cnt};
            
            // to reduce memory cost
            if(pollorder_cnt < 100){
                pollorder_userid[pollorder_cnt] = id;
            }
        }
        
        pollcount[result] = pollcount[result] + 1;
        pollorder_cnt = pollorder_cnt + 1;
    }
    catch(e){
        NOMO_DEBUG("error from countpoll", e);
    }
}

function resetpollcount(){
    poll_time_startdate = new Date();

    polln_total = 0;

    pollcount_total = 0;

    pollcount = null;    // GC
    pollcount = {};

    polldata = null;    // GC
    polldata = {};  // user-id : poll target
    
    pollorder_userid = null;    // GC
    pollorder_userid = {}; // poll-order : user-id
    pollorder_cnt = 0;

    pollindex_seq = null;    // GC
    pollindex_seq = {};

    polltext = null;    // GC
    polltext = [];

    polltext_lang = null;    // GC
    polltext_lang = [];
}


////////////////////////////////////////////////////////////////////
// create default tpvs layout
function createLayout(){
    NOMO_DEBUG("createLayout");
    $("body").append(/*html*/`
        <div id="welcomesign">Twitch Plays Vampire Survivors ${TPVS_Version} - Mod by NOMO & <span style="color:hotpink">@핑크요정</span></div>
        <div id="modstatus"></div>
        <div id="pollContainer" style="display:none;" class="${settings.panel_left ? "panel_left" : ""}">
            <div id="pollContainer_b1"><div id="pollContainer_b2">
                <div id="polltitle" style="display:none;">${getTpvsLang("pickaitem")}</div>
                <div id="polllist" style="display:none;"><table id="polllist_ul"></table></div>
                <div id="twitchChatStatus">${getTpvsLang("twitchConnecting") + " (" + settings.twitch_user_id + ")"}</div>
                <div id="tpvs_desc"></div>
                <div id="polltimer" style="display:none;"></div>
                <div id="pollDisableForChicken" style="display:none;">POLL DISABLE</div>
            </div></div>
        </div>
    `);
}

function setModStatus(html){
    $("#modstatus").html(html).stop(true,true).fadeIn(500);
}

function setTpvsDesc(html){
    $("#tpvs_desc").html(html).stop(true,true).fadeIn(500);
}

function togglePollDisableForChicken(cond){
    if(cond && !settings.skip_poll_for_goldcoins_and_chicken) {
        $("#pollDisableForChicken").show();
    }
    else{
        $("#pollDisableForChicken").hide();
    }
}

////////////////////////////////////////////////////////////////////
// polltype: 0=level up, 1=find weapon
var lastSelectedItem = "";
function tpvs_startPoll(polltype){
    try{
        NOMO_DEBUG("tpvs_startPoll");
        $("#welcomesign").stop(true,true).hide();
        $("#pollContainer").removeClass("main").removeClass("smallTBPadding");

        if(polltype === undefined){
            polltype = 0;   // level up
        }

        poll_time = settings.poll_time;
        resetpollcount();
        resetLayout();
        $("#twitchChatStatus").hide();
        setTpvsDesc(getTpvsLang("letsPoll"));
        toggleUserInput(!settings.prevent_streamer_select);
    
        setTimeout(function(){
            ispollstart = true;
            // get weapon name
            var panels;
            
            if(polltype == 0){
                panels = tpvs['panels'];
                if(tpvs["OnItemButtonClickedOri"] === undefined && tpvs["OnItemButtonClicked"] !== undefined){
                    NOMO_DEBUG("OVERRIDE FUNCTION: OnItemButtonClicked");
                    tpvs["OnItemButtonClickedOri"] = tpvs["OnItemButtonClicked"];
                    tpvs["OnItemButtonClicked"] = function(weapon){
                        NOMO_DEBUG("OVERRIDED FUNCTION CALL: OnItemButtonClicked");
                        forcefinishpoll();
                        showLastSelectedWeapon(weapon);
                        this["OnItemButtonClickedOri"](weapon);
                    };
                }
        
                if(tpvs["OnButtonClickedOri"] === undefined && tpvs["OnButtonClicked"] !== undefined){
                    NOMO_DEBUG("OVERRIDE FUNCTION: OnButtonClicked");
                    tpvs["OnButtonClickedOri"] = tpvs["OnButtonClicked"];
                    tpvs["OnButtonClicked"] = function(item){
                        NOMO_DEBUG("OVERRIDED FUNCTION CALL: OnButtonClicked");
                        forcefinishpoll();
                        showLastSelectedWeapon(item);
                        this["OnButtonClickedOri"](item);
                    };
                }
        
                if(tpvs["OnRerollOri"] === undefined && tpvs["OnReroll"] !== undefined){
                    NOMO_DEBUG("OVERRIDE FUNCTION: OnReroll");
                    tpvs["OnRerollOri"] = tpvs["OnReroll"];
                    tpvs["OnReroll"] = function(){
                        NOMO_DEBUG("OVERRIDED FUNCTION CALL: OnReroll");
                        forcefinishpoll();
                        //showLastSelectedWeapon("REROLL");
                        this["OnRerollOri"]();

                        // REROLL 의 경우 강제 투표 재시작
                        tpvs_startPoll();
                    };
                }
        
                if(tpvs["OnSkipOri"] === undefined && tpvs["OnSkip"] !== undefined){
                    NOMO_DEBUG("OVERRIDE FUNCTION: OnSkip");
                    tpvs["OnSkipOri"] = tpvs["OnSkip"];
                    tpvs["OnSkip"] = function(){
                        NOMO_DEBUG("OVERRIDED FUNCTION CALL: OnSkip");
                        forcefinishpoll();
                        showLastSelectedWeapon("SKIP");
                        this["OnSkipOri"]();
                    };
                }
            }
            else if(polltype == 1){
                panels = [tpvs_newItem['panel']];
        
                if(tpvs_newItem["OnButtonClickedOri"] === undefined && tpvs_newItem["OnButtonClicked"] !== undefined){
                    NOMO_DEBUG("OVERRIDE FUNCTION: OnButtonClicked");
                    tpvs_newItem["OnButtonClickedOri"] = tpvs_newItem["OnButtonClicked"];
                    tpvs_newItem["OnButtonClicked"] = function(){
                        NOMO_DEBUG("OVERRIDED FUNCTION CALL: tpvs_newItem OnButtonClicked");
                        forcefinishpoll();
                        showLastSelectedWeapon("NEWITEM_GET");
                        this["OnButtonClickedOri"]();
                    };
                }
                
                if(tpvs_newItem["OnCancelClickedOri"] === undefined && tpvs_newItem["OnCancelClicked"] !== undefined){
                    NOMO_DEBUG("OVERRIDE FUNCTION: OnCancelClicked");
                    tpvs_newItem["OnCancelClickedOri"] = tpvs_newItem["OnCancelClicked"];
                    tpvs_newItem["OnCancelClicked"] = function(){
                        NOMO_DEBUG("OVERRIDED FUNCTION CALL: tpvs_newItem OnCancelClicked");
                        forcefinishpoll();
                        showLastSelectedWeapon("NEWITEM_DISCARD");
                        this["OnCancelClickedOri"]();
                    };
                }
            }
    
            // var functionList = ["OnItemButtonClicked", "OnButtonClicked", "OnReroll", "OnSkip"];
            // for(var i=0;i<functionList.length; i++){
            //     var funcName = functionList[i];
            //     var newFuncName = funcName+'Ori';
            //     if(tpvs[newFuncName] === undefined && tpvs[funcName] !== undefined){
            //         NOMO_DEBUG(`OVERRIDE FUNCTION FROM ${funcName} to ${newFuncName}`);
            //         tpvs[newFuncName] = tpvs[funcName];
            //         tpvs[funcName] = function(){
            //             NOMO_DEBUG("OVERRIDED FUNCTION: "+funcName);
            //             forcefinishpoll();
            //             this[newFuncName](arguments);
            //         }
            //     }
            // }
    
            $("#polllist_ul").append(`<tr><td class="totalcount">${getTpvsLang("totalcount")} : <span class="totalcount_cnt"></span></td></tr>`);
            for(var i=0; i<panels.length; i++){
                var wptype = panels[i].weaponType;
                if(wptype !== undefined){
                    polln_total = polln_total + 1;
    
                    var displayed_wpname = "";
                    if(polltype == 0){
                        pollindex_seq[polln_total] = wptype;
                        polltext[i] = wptype;
                        polltext_lang[i] = getWeaponName(wptype);
                        NOMO_DEBUG(`${i}th WEAPON: ${polltext_lang[i]}`);
                        
                        displayed_wptype = wptype;
                        displayed_wpname = polltext_lang[i];
                    }
                    else if(polltype == 1){
                        lastSelectedItem = wptype;
                        pollindex_seq[polln_total] = "NEWITEM_GET";
                        polltext[i] = wptype;
                        polltext_lang[i] = getWeaponName(wptype);
                        NOMO_DEBUG(`${i}th WEAPON: ${polltext_lang[i]}`);
                        var text_newItem_get = getWeaponName("NEWITEM_GET");

                        displayed_wptype = "NEWITEM_GET";
                        displayed_wpname = text_newItem_get;
                    }
                    
                    // create layout
                    $("#polllist_ul").append(`<tr class="${displayed_wptype}"><td class="wp">${polln_total}. ${displayed_wpname}<div class="wpbg wpbg_${polln_total}" style="width:0%"></div><div class="cnt cnt_${polln_total}">???</div></td></tr>`);
                }
            }

            // polltype == 0 일 때 투표 항목이 하나만 존재할 경우 스킵
            if(polltype == 0 && (settings.prevent_streamer_select || settings.auto_result_select) && polln_total == 1){
                NOMO_DEBUG("투표 항목이 하나만 존재, 총 아이템 개수: " , polln_total);
                toggleUserInput(true);
                ispollstart = false;
    
                togglePollLayout(true);
                showLayout();

                highlightitem(1);
                stopTimer();
                
                playPollEndSound();
                poll_time_startdate = new Date();
                poll_time = settings.auto_result_select_delay_time;
                updatePureTimer();

                setTimeout(function(){
                    selectWeapon(polltext[0]);
                },settings.auto_result_select_delay_time * 1000);

                setTpvsDesc(getTpvsLang("onlyOneItemLeft"));
                return;
            }

            if(polltype == 1){
                var wptype = "NEWITEM_DISCARD";
                polln_total = polln_total + 1;
                var displayed_wpname = "";
                pollindex_seq[polln_total] = wptype;
                polltext[i] = wptype;
                polltext_lang[i] = getWeaponName(wptype);
                NOMO_DEBUG(`${i}th WEAPON: ${polltext_lang[i]}`);

                displayed_wptype = wptype;
                displayed_wpname = polltext_lang[i];
                
                // create layout
                $("#polllist_ul").append(`<tr class="${wptype}"><td class="wp">${polln_total}. ${displayed_wpname}<div class="wpbg wpbg_${polln_total}" style="width:0%"></div><div class="cnt cnt_${polln_total}">???</div></td></tr>`);
            }
            
            var IS_ITEMS = true;
            for(var i=0; i<polln_total; ++i){
                if(!itemList.includes(polltext[i])){
                    NOMO_DEBUG(polltext[i], polltext_lang[i]);
                    IS_ITEMS = false;
                }
            }
    
            // 모든 것이 아이템일 경우 스킵함
            if(polltype == 0 && IS_ITEMS){
                if(settings.skip_poll_for_goldcoins_and_chicken){
                    NOMO_DEBUG("투표하지 않음, 총 아이템 개수: " , polln_total);
                    forcefinishpoll();
                    return;
                }
                else{
                    // 안내 메시지 생성!!
                    // togglePollDisableForChicken(true);
                    toggleUserInput(true);
                    setTpvsDesc(getTpvsLang("nowYouCanUseKeyboard"));
                }
            }
            NOMO_DEBUG("polltext",polltext,"IS_ITEMS",IS_ITEMS,"skip_poll_for_goldcoins_and_chicken",settings.skip_poll_for_goldcoins_and_chicken)
    
            if(polln_total == 0){
                // if(settings.skip_poll_for_goldcoins_and_chicken){
                //     NOMO_DEBUG("투표하지 않음, 총 아이템 개수: " , polln_total);
                //     return;
                // }
                // else {
                //     for(var i=0; i<panels.length; i++){
                //         var wptype = panels[i].itemType;
                //         if(wptype !== undefined){
                //             polln_total = polln_total + 1;
            
                //             pollindex_seq[polln_total] = wptype;
            
                //             polltext[i] = wptype;
                //             polltext_lang[i] = getWeaponName(wptype);
                //             NOMO_DEBUG(`${i}th ITEM: ${polltext_lang[i]}`);
                            
                //             // create layout
                //             $("#polllist_ul").append(`<tr class="${wptype}"><td class="wp">${polln_total}. ${polltext_lang[i]}</td><td class="cnt cnt_${polln_total}">0</td></tr>`);
                //         }
                //     }
                // }
            }
    
            updateTimer(checkPollEnd);
    
            if(polltype == 0 && tpvs.HasRerolls){
                polln_total = polln_total + 1;
                pollindex_seq[polln_total] = "REROLL";
                $("#polllist_ul").append(`<tr class="REROLL"><td class="wp">${polln_total}. ${getWeaponName("REROLL")}<div class="wpbg wpbg_${polln_total}" style="width:0%"></div><div class="cnt cnt_${polln_total}">0</div></td></tr>`);
            }
            if(polltype == 0 && tpvs.HasSkips){
                polln_total = polln_total + 1;
                pollindex_seq[polln_total] = "SKIP";
                $("#polllist_ul").append(`<tr class="SKIP"><td class="wp">${polln_total}. ${getWeaponName("SKIP")}<div class="wpbg wpbg_${polln_total}" style="width:0%"></div><div class="cnt cnt_${polln_total}">0</div></td></tr>`);
            }
    
            // count set
            for(var i=1; i<=polln_total; ++i){
                pollcount[i] = 0;
            }
    
            togglePollLayout(true);
            showLayout();
        },100);
    }
    catch(e){
        NOMO_DEBUG("error from tpvs_startPoll", e);
    }
}

function checkPollEnd(){
    NOMO_DEBUG("checkPollEnd()");
    try{
        $("#polllist").find(".highlight").removeClass("highlight").removeClass("highlight_notselected");
        $("#polllist").find(".highlight_dub").removeClass("highlight_dub").removeClass("highlight_notselected");
        
        stopTimer();

        if(pollcount.length == 0){
            NOMO_DEBUG("pollcount.length = 0 이므로 투표 종료 함");
            forcefinishpoll();
            return;
        }

        // find max key
        var sortable = [];
        for (var key in pollcount) {
            sortable.push([key, pollcount[key]]);
        }
        sortable.sort(function(a, b) {
            return b[1] - a[1];
        });
        NOMO_DEBUG("sortable", JSON.stringify(sortable));

        if(settings.prevent_streamer_select && settings.use_roulette && sortable.length >= 2){
            ispollstart = false;
            updateCount(true);
            var wpid = sortable[0][0];
            var wptype = pollindex_seq[wpid];
            
            // choose random item
            var totalcnttemp = 0;
            var totalcnttempprev = 0;
            var randomno = Math.floor(Math.random() * pollcount_total) + 1;
            var selectedwpid = 1;
            if(pollcount_total !== 0){
                for(var i=0;i<sortable.length;i++){
                    totalcnttemp += sortable[i][1]; 
                    if(randomno <= totalcnttemp && randomno > totalcnttempprev){
                        selectedwpid = sortable[i][0];
                        break;
                    }
                    totalcnttempprev = totalcnttemp;
                }
            }
            else{
                selectedwpid = Math.floor(Math.random() * sortable.length) + 1;
            }
            NOMO_DEBUG("rouletteHighlight TARGET: ", randomno, selectedwpid);

            rouletteHighlight(selectedwpid);
        }
        // check if first two items have same value
        else if(sortable.length >= 2 && sortable[0][1] === sortable[1][1]){
            // 스트리머 입력을 막는 경우거나, 결과를 자동 선택 하는 경우 무한 재시작한다.
            if(settings.prevent_streamer_select || settings.auto_result_select){
                restartpoll();
            }
            else{
                ispollstart = false;
                updateCount(true);
                setTpvsDesc(`<div style="text-align:center;">${getTpvsLang("letsSelectItem")}</div>`);
                playPollEndSound();
            }

            // highlight same values
            $("#polllist").find(".highlight_dub").removeClass("highlight_dub");
            highlightitem_dub(sortable[0][0]);
            for(var i=1; i<sortable.length; ++i){
                if(sortable[0][1] == sortable[i][1]){
                    highlightitem_dub(sortable[i][0]);
                }
                else{
                    break;
                }
            }
        }
        // found max value
        else{
            if(sortable[0] === undefined || sortable[0][0] === undefined){
                NOMO_DEBUG("무언가 잘못되어 그냥 진행함");
                forcefinishpoll();
                return;
            }
            var wpid = sortable[0][0];
            var wptype = pollindex_seq[wpid];
            highlightitem(wpid);
            ispollstart = false;
            
            if(settings.prevent_streamer_select || settings.auto_result_select){
                setTpvsDesc(getTpvsLang("waitingAutoResultSelectDelay"));
                playPollEndSound();
                updateCount(true);
                poll_time_startdate = new Date();
                poll_time = settings.auto_result_select_delay_time;
                updatePureTimer();

                setTimeout(function(){
                    selectWeapon(wptype);
                },settings.auto_result_select_delay_time * 1000);
            }
            else{
                updateCount(true);
                setTpvsDesc(getTpvsLang("letsSelectItem"));
                playPollEndSound();
            }
        }
    }
    catch(e){
        NOMO_DEBUG("Error from checkPollEnd()", e);
        forcefinishpoll();
    }
}

function selectWeapon(wptype){
    NOMO_DEBUG("selectWeapon(wptype)");
    forcefinishpoll();
    if(wptype === "REROLL") {
        tpvs['OnReroll']();
    }
    else if(wptype === "SKIP"){
        tpvs['OnSkip']();
    }
    else if(wptype === "NEWITEM_GET"){
        tpvs_newItem['OnButtonClicked']();
    }
    else if(wptype === "NEWITEM_DISCARD"){
        tpvs_newItem['OnCancelClicked']();
    }
    else if(itemList.includes(wptype)){
        tpvs['OnItemButtonClicked'](wptype);
    }
    else{
        tpvs['OnButtonClicked'](wptype);
    }
}

function showLastSelectedWeapon(wptp){
    var wpname = getWeaponName(wptp);
    var selectedType = getTpvsLang("lastSelectedItem");

    if(wptp == "NEWITEM_GET" || wptp == "NEWITEM_DISCARD"){
        wpname = `${wpname} (${getWeaponName(lastSelectedItem)})`;
    }

    try{
        if(settings.prevent_streamer_select){
            NOMO_DEBUG("HERE", pollindex_seq);
            for(var key in pollindex_seq){
                NOMO_DEBUG("key", key, pollcount);
                if(pollcount_total !== 0 && pollindex_seq[key] === wptp){
                    var per = pollcount[key] / pollcount_total * 100.0;
                    if(!isNaN(per)){
                        perText = ` (${per.toFixed(1)}%)`;
                        wpname = wpname + perText;
                    }
                    break;
                }
            }
        }

        if(settings.use_roulette){
            selectedType = getTpvsLang("roulette");
        }
    }
    catch(e){
        NOMO_DEBUG("error from showlastselectedweapon", e);
    }

    // find first vote
    var firstvotetext = "";
    try{
        if(pollcount_total !== 0){
            var wpid = -1;
            for(var key in pollindex_seq){
                if(pollindex_seq[key] === wptp){
                    wpid = Number(key);
                    break;
                }
            }
            NOMO_DEBUG("wpid: ", wpid);
            if(wpid !== -1){
                var firstvoteid, firstvotedn, firstvotefound = false;
                var pollorder_userid_length = Object.keys(pollorder_userid).length;
                for (var i=0; i<pollorder_userid_length; i++){
                    NOMO_DEBUG("pollorder_userid[i]", pollorder_userid[i]);
                    if(pollorder_userid[i] !== undefined && pollorder_userid[i] !== null){
                        firstvoteid = pollorder_userid[i];
                        if(!polldata[firstvoteid].c && polldata[firstvoteid].v == wpid){
                            firstvotefound = true;
                            firstvotedn = userid_dn_map[firstvoteid];
                            break;
                        }
                    }
                }
    
                NOMO_DEBUG("firstvotefound: ", firstvotefound);
                if(firstvotefound && firstvotedn !== undefined && firstvotedn !== ""){
                    firstvotetext += `<div style="font-size:0.8vw;word-break:break-all;font-weight:100;letter-spacing:-0.01vw;">${getTpvsLang("firstVoteChat", firstvotedn)}</span>`;
                }
            }
        }
    }
    catch(e){
        NOMO_DEBUG("ERROR FROM FIRSTVOTEFOUND", e);
    }

    showLayout();
    $("#tpvs_desc").stop(true,true);
    setTpvsDesc(`<div style="text-shadow: 0px 0px 1vw gold;">${selectedType} : ${wpname}${firstvotetext}</div>`);
    $("#pollContainer").addClass("smallTBPadding");
}

function tpvs_resumeFromLevelUp(){
    NOMO_DEBUG("tpvs_resumeFromLevelUp()");
    ispollstart = false;
    stopTimer();
    hideLayout();
};


function finishPollWithPostTime(){

}

////////////////////////
// 강제로 투표 끝내기
function forcefinishpoll(){
    try{
        hideLayout();
        //resetpollcount();
        resetLayout();
        setTpvsDesc("");
        toggleUserInput(true);
        togglePollLayout(false);
        stopTimer();
        ispollstart = false;
        $("#twitchChatStatus").hide();
        $("#welcomesign").stop(true,true).hide();
        $("#scriptstatus").hide();
        $("#pollContainer").removeClass("main").removeClass("smallTBPadding");
        stopRoulette = true;
        //togglePollDisableForChicken(false);
    }
    catch(e){
        NOMO_DEBUG("error from forcefinishpoll", e);
    }
}

/////////////////////////
// 중복일 시 투표 재시작
function restartpoll(){
    try{
        updateCount(true);
        setTpvsDesc(getTpvsLang("tiePoll"));
        poll_time_startdate = new Date();
        poll_time = settings.poll_restart_time;
        updateTimer(checkPollEnd);
    }
    catch(e){
        NOMO_DEBUG("error from restartpoll", e);
    }
}

/////////////////////////
// 시작 페이지 도달
function tpvs_startPage(){
    try{
        $("#pollContainer").addClass("main").removeClass("smallTBPadding");;
        showLayout();
        resetLayout();
        updateTwitchChatStatus();
        $("#welcomesign").fadeIn(500);
        //hideWelcomeSign(3000);
        $("#twitchChatStatus").show();
        showCurrentMode();
        forceAllowUserInput = false;
    }
    catch(e){
        NOMO_DEBUG("error from tpvs_startPage", e);
    }
}

// 게임 시작 시
function tpvs_startGame(){
    try{
        NOMO_DEBUG("START GAME");
        $("#welcomesign").stop(true,true).hide();
        $("#pollContainer").removeClass("main").removeClass("smallTBPadding");
        forcefinishpoll();
    }
    catch(e){
        NOMO_DEBUG("error from tpvs_startGame", e);
    }
}

// Post game page
var ddikkubemote = ["(*≧▽≦)", "✧٩(ˊωˋ*)و✧", "҉ ٩(๑>ω<๑)۶҉", "(✌’ω’)✌", "(´･∀･`)", "（⌒▽⌒ゞ", "🤭", "🙃", " ⎛⎝⎛♥‿♥⎞⎠⎞ ", "(=^･ω･^=)", " ʅ（´◔౪◔）ʃ ","(*/ω＼*)","༼ つ ◕_◕ ༽つ","(╯°□°）╯︵ ┻┻","( ´･･)ﾉ(._.`)","¯\_(ツ)_/¯","🥴","🤣","😏"];
function tpvs_postGame(){
    try{
        NOMO_DEBUG("POST GAME");
        resetpollcount();
        resetLayout();
        var randomEmoji = ddikkubemote[Math.floor(Math.random() * ddikkubemote.length)];
        if(isKRElectionEvent && settings.prevent_streamer_select){
            var randno = Math.floor(Math.random() * 50);
            switch (randno) {
                default:
                    setTpvsDesc(getTpvsLang("gameOver") + " " + randomEmoji);
                    break;
                case 0:
                    setTpvsDesc("포인트가 많으나 적으나 모두가 똑같은 한표 입니다!<br />다음 게임을 기다립니다." + " " + randomEmoji);
                    break;
                case 1:
                    setTpvsDesc("투표가 답이다!<br />다음 게임을 기다립니다." + " " + randomEmoji);
                    break;
                case 2:
                    setTpvsDesc("나는 오망성에 투표한다.<br />다음 게임을 기다립니다." + " " + randomEmoji);
                    break;
                case 3:
                    setTpvsDesc("세 개의 심장으로 피차게 달린다!<br />다음 게임을 기다립니다." + " " + randomEmoji);
                    break;
                case 4:
                    setTpvsDesc("일등트수는 일찍일찍 투표해요!<br />다음 게임을 기다립니다." + " " + randomEmoji);
                    break;
                case 5:
                    setTpvsDesc("투표하면 내 포인트가 바뀝니다!<br />다음 게임을 기다립니다." + " " + randomEmoji);
                    break;
                case 6:
                    setTpvsDesc("투표는 민주주의의 꽃!<br />역배로 일확천금 달성하자!" + " " + randomEmoji);
                    break;
                case 7:
                    setTpvsDesc("아이템 주권은 트수, 소중한 한 표!<br />다음 게임을 기다립니다." + " " + randomEmoji);
                    break;
                case 8:
                    setTpvsDesc("???:너가 투표를 잘 했으면 된거 아닌가?<br />" + " " + randomEmoji);
                    break;
                case 9:
                    setTpvsDesc("붉은심장 vs. 까만심장 vs. 내심장<br />" + " " + randomEmoji);
                    break;
            }
        }
        else{
            setTpvsDesc(getTpvsLang("gameOver") + " " + randomEmoji);
        }
        $("#twitchChatStatus").hide();
        showLayout();
        forceAllowUserInput = false;
    }
    catch(e){
        NOMO_DEBUG("error from tpvs_postGame", e);
        forcefinishpoll();
    }
}

function updateTwitchChatStatus(){
    if(twitchChatConnected){
        $("#twitchChatStatus").html(getTpvsLang("twitchConnected"));
    }
    else{
        $("#twitchChatStatus").html(getTpvsLang("twitchDisconnected"));
    }
}

function showCurrentMode(pageNo){
    try{
        if(pageNo === undefined){
            pageNo = 0;
        }

        var $startGUI;
        if($("tpvsSettingContainer").length == 0){
            var text = `
            <div id="tpvsSettingContainer" style="padding-top:1vw;">
                <div id="modeDisc">
                    ${settings.prevent_streamer_select ? getTpvsLang("currentmode_strict") : getTpvsLang("currentmode_soft")}
                </div>
                <div style="">
                    <label style="padding-bottom:1vw;" id="textbox_twitch_user_id_container">Twitch ID 
                        <div style="float:right;"><input type="text" id="textbox_twitch_user_id" setting="twitch_user_id" spellcheck="false" /> <span id="TwitchConnectBtn">${getTpvsLang("connect")}</span></div>
                    </label>
                    <label style="padding-top:1vw;" id="checkbox_prevent_streamer_select">${getTpvsLang("isStrict")} <input type="checkbox" setting="prevent_streamer_select" /></label>
                    <label id="checkbox_auto_result_select_container">${getTpvsLang("isAutoselect")} <input type="checkbox" setting="auto_result_select" /></label>
                    <label id="checkbox_use_roulette_container">${getTpvsLang("isuse_roulette")} <input type="checkbox" setting="use_roulette" /></label>
                    <label class="emptyLine" style="display:none;">　</label>
                    
                    <label id="pollTime_Container">${getTpvsLang("pollTime")} <input type="number" setting="poll_time" value=20 min=0 max=9999 /></label>
                    <label id="pollRestartTme_Container">${getTpvsLang("pollRestartTme")} <input type="number" setting="poll_restart_time" value=20 min=0 max=9999 /></label>
                    <label style="margin-bottom:1vw;" id="pollResultShowTme_Container">${getTpvsLang("pollResultShowTme")} <input type="number" setting="auto_result_select_delay_time" value=20 min=0 max=9999 /></label>

                    <label id="checkbox_poll_result_hide_container">${getTpvsLang("hidePollDuringPoll")} <input type="checkbox" setting="poll_result_hide" /></label>
                    <label id="checkbox_skip_poll_for_goldcoins_and_chicken_container">${getTpvsLang("isSkipGoldcoinAndChicken")} <input type="checkbox" setting="skip_poll_for_goldcoins_and_chicken" /></label>
                    <label id="checkbox_subonly_container">${getTpvsLang("subonlypoll")} <input type="checkbox" setting="subonly" /></label>
                    <label id="checkbox_play_sound_effect_container">${getTpvsLang("playSoundEffect")} <input type="checkbox" setting="play_sound_effect" /></label>
                    
                    <label id="checkbox_panel_left_container">${getTpvsLang("panel_left")} <input type="checkbox" setting="panel_left" /></label>
                    <div id="pageBtnContainer">
                        <span id="goto2ndpage" class="pageBtn">${getTpvsLang("detailSettings")} ></span>
                        <span id="backto1stpage" class="pageBtn">< ${getTpvsLang("back")}</span>
                    </div>
                </div>
            </div>
            `;
            $startGUI = $(text);
            $startGUI.find("input").on("change", function(e){
                NOMO_DEBUG("CHANGE EVENT", e);
                var $v = $(e.target);
                var settingVal;
                if($v.attr("type") === "text"){
                    return;
                }
                else if($v.attr("type") === "checkbox"){
                    settingVal = $v.prop("checked");
                }
                else{
                    settingVal = $v.val();
                }
                
                if($v.attr("type") === "number"){
                    settingVal = Number(settingVal);
                }
                var settingName = $v.attr("setting");
                settings[settingName] = settingVal;
                NOMO_DEBUG(settingName, settingVal);

                if(settingName === "prevent_streamer_select"){
                    if(settingVal){
                        $startGUI.find("#modeDisc").html(getTpvsLang("currentmode_strict"));
                        $startGUI.find("#checkbox_auto_result_select_container").hide();
                        $startGUI.find("#checkbox_use_roulette_container").show();
                    }
                    else{
                        $startGUI.find("#modeDisc").html(getTpvsLang("currentmode_soft"));
                        $startGUI.find("#checkbox_auto_result_select_container").show();
                        $startGUI.find("#checkbox_use_roulette_container").hide();
                    }
                }
                else if(settingName == "panel_left"){
                    if(settingVal){
                        $("#pollContainer").addClass("panel_left");
                    }
                    else{
                        $("#pollContainer").removeClass("panel_left");
                    }
                }
                writeSettingJson();
            });
            $startGUI.find("#goto2ndpage").on("click", function(){
                showCurrentMode(1)
            });
            $startGUI.find("#backto1stpage").on("click", function(){
                showCurrentMode(0);
            });
            $startGUI.find("#TwitchConnectBtn").on("click", function(){
                TwitchChatReconnect();
            });
            setTpvsDesc($startGUI);
        }
        else{
            $startGUI = $("tpvsSettingContainer");
        }

        var $input = $startGUI.find("input");
        $input.each(function(i,v){
            var $v = $(v);
            var settingName = $v.attr("setting");
            var settingVal = settings[settingName];
            if($(v).attr("type") === "checkbox"){
                $v.prop("checked",settingVal);
            }
            else{
                $v.val(settingVal);
            }
        });
        
        var page = [
            [
                "#modeDisc",
                "#checkbox_prevent_streamer_select",
                "#checkbox_auto_result_select_container",
                "#goto2ndpage",
                "#checkbox_use_roulette_container"
            ],
            [
                "#textbox_twitch_user_id_container",
                "#checkbox_poll_result_hide_container",
                "#checkbox_skip_poll_for_goldcoins_and_chicken_container",
                "#checkbox_subonly_container",
                "#pollTime_Container",
                "#pollRestartTme_Container",
                "#pollResultShowTme_Container",
                "#checkbox_play_sound_effect_container",
                "#backto1stpage",
                "#checkbox_panel_left_container"
            ]
        ];

        for(var i=0;i<page.length;i++){
            for(var j=0;j<page[i].length;j++){
                $startGUI.find(page[i][j]).hide();
            }
        }
        for(var i=0;i<page[pageNo].length;i++){
            $startGUI.find(page[pageNo][i]).show();
        }

        if(pageNo !== 0){
            $startGUI.find("#checkbox_auto_result_select_container").hide();
            $startGUI.find("#checkbox_use_roulette_container").hide();
        }
        else{
            if(settings.prevent_streamer_select){
                $startGUI.find("#checkbox_auto_result_select_container").hide();
                $startGUI.find("#checkbox_use_roulette_container").show();
            }
            else{
                $startGUI.find("#checkbox_auto_result_select_container").show();
                $startGUI.find("#checkbox_use_roulette_container").hide();
            }
        }

    }
    catch(e){
        NOMO_DEBUG("error from showCurrentMode", e);
    }
}

/////////////////////////
// 아이템 하이라이트
var stopRoulette = false;
function rouletteHighlight(wpind){
    try{
        stopRoulette = false;
        setTpvsDesc(getTpvsLang("spinRoulette"));

        var maxLastIter = 5;
        var default_round_n = 15;
        var randomLastIter  = Math.floor(Math.random() * maxLastIter);

        var wptype = pollindex_seq[wpind];
        NOMO_DEBUG("start rouletteHighlight()");
        $("#polllist").find(".highlight_dub").removeClass("highlight_notselected").removeClass("highlight_dub");

        var total_ms = roulette_time * 1000.0;
        var max_speed = 1000.0 / 60.0;

        // 1. select random start item
        var item_n = polln_total;
        var item_start = Math.floor(Math.random() * (item_n));   // 0 ~ item_n - 1;
        var round_n = wpind - item_start + item_n * default_round_n;

        // 2. play sfx
        playDrumRollSound(true);

        // 3 start roulette
        var rcount = 0;
        var count_remain = round_n;

        // calculate weight
        var measure_total_time_without_weight = 0.0;
        for(var i=0;i<round_n;i++){
            measure_total_time_without_weight += max_speed * i * i;// + max_speed * 1;
        }
        var weight = (total_ms - max_speed * round_n) / (measure_total_time_without_weight);
        NOMO_DEBUG("Calculated weight:", weight);
        if(weight < 0.0) weight = 0.0;
        
        // loop
        var se = function(){
            if(stopRoulette){
                stopRoulette = false;
                playDrumRollSound(false);
                return;
            }

            // finish
            if(rcount >= round_n){
                // random delay at the end
                var randLastDelay = Math.random();
                var directFinish = 1.0;
                if(randLastDelay < 0.01){
                    directFinish = 0.0;
                }
                else if(randLastDelay < 0.05){
                    randLastDelay = randLastDelay * 2000.0;
                }
                else{
                    randLastDelay = 0.0;
                }

                setTimeout(function(){
                    // turn off drum sfx
                    setTimeout(function(){
                        playDrumRollSound(false);
                    },250);

                    // highlight
                    for(var key in pollindex_seq){
                        $("."+pollindex_seq[key]).addClass("highlight_notselected");
                    }
                    $("."+pollindex_seq[wpind]).removeClass("highlight_notselected").addClass("highlight");
                    if(isKRElectionEvent){
                        $("."+pollindex_seq[wpind]).find("td").first().append(`<img src="${electionStampImg}" class="electstamp" />`);
                    }

                    setTpvsDesc(getTpvsLang("waitingAutoResultSelectDelay"));
                    playPollEndSound();
                    poll_time_startdate = new Date();
                    poll_time = settings.auto_result_select_delay_time;
                    updatePureTimer();
    
                    // select weapon
                    setTimeout(function(){
                        selectWeapon(wptype);
                    },settings.auto_result_select_delay_time * 1000);
                }, directFinish * (randLastDelay + 70.0 * randomLastIter + Math.random() * Math.max(0.0, 1000.0 - 100.0 * randomLastIter)));
            }
            // loop
            else{
                // random delay last few count
                var rot_time_ms = max_speed * (rcount * rcount * weight + 1);
                if(count_remain <= randomLastIter){
                    rot_time_ms += 100.0 * Math.max(0.0, randomLastIter - count_remain);
                }
                if(count_remain == 1 && Math.random() < 0.01){
                    rot_time_ms += 500.0;
                }

                // init delay
                if(rcount !== 0 && rcount < 15){
                    rot_time_ms += Math.max(0.0, (15 - rcount) * 50 / (rcount + 1));
                }

                //NOMO_DEBUG("ROLLLLLLING", rcount, count_remain, rot_time_ms);
                setTimeout(function(){
                    $("#polllist").find(".highlight").removeClass("highlight");
                    $("."+pollindex_seq[1 + (item_start + rcount) % item_n]).addClass("highlight");    
                    
                    rcount = rcount + 1;
                    count_remain = count_remain - 1;
                    
                    se();
                }, rot_time_ms );
            }
        }
        se();

    }
    catch(e){
        NOMO_DEBUG("error from rouletteHighlight", e);
        forcefinishpoll();
    }
}
function highlightitem(wpind){
    try{
        $("#polllist").find(".highlight_dub").removeClass("highlight_notselected").removeClass("highlight_dub");

        for(var key in pollindex_seq){
            $("."+pollindex_seq[key]).addClass("highlight_notselected");
        }

        $("."+pollindex_seq[wpind]).removeClass("highlight_notselected").addClass("highlight");
        if(isKRElectionEvent){
            $("."+pollindex_seq[wpind]).find("td").first().append(`<img src="${electionStampImg}" class="electstamp" />`);
        }
    }
    catch(e){
        NOMO_DEBUG("error from highlightitem", e);
    }
}
function highlightitem_dub(wpind){
    try{
        $("#polllist").find(".highlight").removeClass("highlight_notselected").removeClass("highlight");
        $("."+pollindex_seq[wpind]).addClass("highlight_dub");
    }
    catch(e){
        NOMO_DEBUG("error from highlightitem_dub", e);
    }
}

function resetLayout(){
    $("#polllist table").empty();
}

function togglePollLayout(tg){
    if(tg){
        $("#polltitle").fadeIn(500);
        $("#polllist").fadeIn(500);
        $("#polltimer").fadeIn(500);
    }
    else{
        $("#polltitle").hide();
        $("#polllist").hide();
        $("#polltimer").hide();
    }
}

function showLayout(){
    $("#pollContainer").stop(true,true).fadeIn(500);
}

function hideLayout(){
    $("#pollContainer").stop(true,true).fadeOut(500);
}

function updateCount(force){
    try{
        if(!force && !ispollstart){
            return;
        }
        //NOMO_DEBUG("updateCount", pollcount);
        if(!settings.poll_result_hide || force){
            for(var i=1;i<=polln_total;++i){
                var perText = "";
                var rate = 0;
                var per = 0;
                if(pollcount_total != 0){
                    rate = pollcount[i] / pollcount_total;
                    per = rate * 100.0;
                    perText = ` (${per.toFixed(1)}%)`;
                }
                $(".cnt_"+i).html(pollcount[i]+perText);
                $(".wpbg_"+i).css("width",`calc(${per}% + ${0.2*rate}vw)`);
            }
        }
        else{
            $(".cnt_"+i).html("???");
            $(".wpbg_"+i).css("width",`0%`);
        }
        $(".totalcount_cnt").html(pollcount_total);    
    }
    catch(e){
        NOMO_DEBUG("error from updateCount", e);
    }
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
var timerInterval = undefined;
const timer_margin = 900;
function updateTimer(callback){
    try{
        timerInterval = setInterval(function(){
            updateCount();
            var temp_date = new Date();
            var time_in_ms = timer_margin + poll_time*1000 - (Number(temp_date) - Number(poll_time_startdate));
            if(time_in_ms >= 0){
                $("#polltimer").html(`${millisToMinutesAndSeconds(time_in_ms)}`);
            }
            else{
                stopTimer();
                if(callback !== undefined) callback();
            }
        }, 100);
    }
    catch(e){
        NOMO_DEBUG("error from updateTimer", e);
    }
}
function updatePureTimer(){
    try{
        timerInterval = setInterval(function(){
            var temp_date = new Date();
            var time_in_ms = timer_margin + poll_time*1000 - (Number(temp_date) - Number(poll_time_startdate));
            if(time_in_ms >= 0){
                $("#polltimer").html(`${millisToMinutesAndSeconds(time_in_ms)}`);
            }
            else{
                stopTimer();
            }
        }, 100);
    }
    catch(e){
        NOMO_DEBUG("error from updatePureTimer", e);
    }
}

function stopTimer(){
    try{
        $("#polltimer").html(`${millisToMinutesAndSeconds(0)}`);
        clearInterval(timerInterval);
    }
    catch(e){
        NOMO_DEBUG("error from stopTimer", e);
    }
}

var hidewelcomesignTimeout;
function twitchPlayInit(){
    try{
        if(isWellInjected){
            readJson("TPVS_Settings.json", "settings_temp");
            //hideWelcomeSign(10000);
        }
        else{
            $("#welcomesign").hide();
            setModStatus(getTpvsLang("scriptInitializeFailed"));
        }
    
        setTimeout(function(){
            $("#modstatus").fadeOut(500);
        },5000);
    }
    catch(e){
        NOMO_DEBUG("error from twitchPlayInit", e);
    }
}

function hideWelcomeSign(delay){
    try{
        clearTimeout(hidewelcomesignTimeout);
        hidewelcomesignTimeout = setTimeout(function(){
            $("#welcomesign").fadeOut(500);
        },delay);
    }
    catch(e){
        NOMO_DEBUG("error from hideWelcomeSign", e);
    }
}

//////////////////////////////////////////////////////////
// load fs library to write setting file
try{
    if(require !== undefined && window["fs"] === undefined){
        window["fs"]=require('fs');
    }
}
catch(e){
    NOMO_DEBUG("error from load fs library", e);
}

function writeSettingJson(){
    try{
        if(window["fs"] === undefined){
            return;
        }
        if(typeof window["fs"] !== undefined){
            window["fs"].writeFile ("./resources/app/.webpack/renderer/TPVS_Settings.json", JSON.stringify(settings, null, 4), function(err) {
                    if (err) throw err;
                }
            );
        }
    }
    catch(e){
        NOMO_DEBUG("error from writeSettingJson", e);
    }
}

const electionStampImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAA542lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMjItMDMtMDdUMTE6MTM6NDQrMDk6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMi0wMy0wN1QxODowOCswOTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjItMDMtMDdUMTg6MDgrMDk6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ODZiMmE2OTYtNGMwNC04YjQ2LTliNDYtNDRhYjU4Mjg0OTk3PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MTA4ZmEwMGMtOWRmNi0xMWVjLWI5NmItZTY1ZmQzODVmODVmPC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NWZjNGZhNmEtMDcwNS05MTQwLTg3MzYtZGJiYTQ2ODNhMWNkPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjVmYzRmYTZhLTA3MDUtOTE0MC04NzM2LWRiYmE0NjgzYTFjZDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAyMi0wMy0wN1QxMToxMzo0NCswOTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo4NmIyYTY5Ni00YzA0LThiNDYtOWI0Ni00NGFiNTgyODQ5OTc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjItMDMtMDdUMTg6MDgrMDk6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NDA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PsYJpVcAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAACNJJREFUeNqkmHusZWdZxn/v+31r73Of6YWZIqHAFNRCTIgEtdoSiWSQREMClMRLOjQtFEtMSZsAbSKEP2xUbKtGKWKpSIgpDZpQEqAp3qpSE0NCgxnTu6lIO2OdYWbOnLP3Wut7H/9Ya+/Z5zY9p/2SN/uyvrXW8z3v/TWxdZ15zUFWX/MK0nqNIUgVKCgR4GAGhF9lyd4m6c3AIeAgsNQ/YtXgGNLTCj2Kp4cdPWzREtkJSxiBt1CK0MKQ5f85xtLTx7dgyexlGZcZdj3Y+3EOSdpp5z7BqzD7abK/DyCCZ8zT/cA9wJO7faW/OCYQXCzjT839Scw+0TO2eY22+y4JJDBeJ7OPS/YE0mcRB14ewJ4cmf2mTI8LPrLp+qOIPzDxHpMuA+6YOdXvuuz1Lr03oc8gfb/737oP8Vtgj8vsyIsBzDuxBiD3P5NzIzOqNOk+V9wt2cMhg+Sou+H0zCN+FKanknjKQn8r9DHMf5ESN8r8ahwQ++R80ZJdIfjwnhi0NohB+jrGjYgJgH/zNn7epV8z4mGsO4mYgp+fecSCHORTRSD0j94273dxFeLfMesuJrshBumbVsr2AEs1YCJt7j5HFy19w5r4Fcy6Z7T6fUdXAI90L+tV5TN0bz6kIMwIs3NbzAD7l1SXn/GmvVPuCMOb9pdH+1YerC+uGF1SMb4kTyWPXv+6GbNy1pfsc/U878rjhpITXjcfTK3uKSkh66FJyAy5w86e3JuJYTFj1D142rjFh3qyuH3Wxy3tysLh4xdcdk8z0vUmn+7PzaIzYUUW72uHdkNqRAwyF/zwf6+zonvPHLhoxjB71SZ7UXATTJESREz/kBuRMsvPPne3InTq0KV3W1tIbb5usa6/XdnafRPT8aaqaKoBTZUX62x/7W0QSgyb1d8bLNf35v0NVVmjyKceFJ531u0OwUpmPXWgEOlMTcs8ofnP5dPjuzAwCvUCX9ZcWvZBhQ8q3KKBqCHGdyJVwhhQPzos9a1n5xZYm1ugsoah1rGwjmnfBXsbmFRnf5bAQTmIFKy9YpGzl6yAmpshjppBREqjeu5PxvWAcTPASx4TqblEZh8yOo+tWr86YgWaZWiWKVohtxUOFDcI9rxM0OYBXkT2RFqZp5pLVHNOWpxj0HI1ApcoVXxg7M2rxtbgjAxa++gkiLpx/3rlT5wdOGuDNJXVQaYdpMm2l7YMpELUItZbYr0Q6wWNCtGUo0T5mswwjGTcUkVLdlWE2bUT6x+eXf0k2j4mNcN5Sh5iL4XCzhIpKfUuaTO+1DuE7HcC3g0Cz0es2M1ZXq7A04F+5/daW3psJ/vvwky8ZALVaYikQNvb6vcp6SjJ3hhuF5LtqmwpHdb0br7aLu6cnq3E3pxjC4OGCBQ7H9Kcvwnsjd13e0fu6jkHA2+bR2yHm2VG5IqXtSbefJ4o4NH+s1R14Uz2lozbIRCIoNVRdJ6sbRsSwstwls5UtMWWBOaP9YyAxaEsONi/9BiD6nnBVhSyrmDYPbgXznexrQbnUtJWmo+b+BFoP9hFDiz2V05FcjpJm8S74Lz7daX1/GyWrkIJvA28LdtIjICTk6poQz1oTXsetdjuQYprwZ4HbttIex9c3Aj8PNZ0zkAzcLZvdpa9S4hbVdmXbrGHDCy4td9727Y2WKKvcrbcNyD7/v7nWjY4pq4jO1iqdPH57Mci9hr3bu04022bL7hbX89vYeRABBf230840tN9/spe2stT27CT7GGdmgUJdvtW8IYkwmJGREhvmOnWnnYT31OfbMzsZz0l3H2jpIR52ktEvlHGzecDKQNvYHhWGyQ1XCkzJMPRdz2KHpp4WDF/b5udtkobJTul8t3HQZEx7pLxpY0guX36AOvs3dfH+KjuZH2M4D3q2wQRf5fJ9h2JFwy7GOnnUt1cCjy7jZ9QSBt7jJ3Xq61rto706K7ZbJMWouTEaClj6ssFsx+PKr3ZIwA7aZH/yRM1SeUvZV06K8U/yRiofYOoti4X7ybUGFODDecIW5js1G0yUgYfFnJuMbdPgYEZ1rZ/pbbBaR2K7gJ1J8npOg39lcqBklAKlAMN1NliaC8ZjSmT26hb1oXzXI9I0b62VMNfN6lzHsodxQseg3lUzT1n8i8ICHNEc9+Cn2COU8xxioV0AmdEYKS2dP3F7mvUjsltQMp1uzfG3PFE2y7e3/XRIil/qRos/2AwXCGnSfg1fbQxPmBRkph/29lBuiUtn7pDcuLECmYDzIJUly79+bQHevEi0CYgdcQwbGKToVtleqa+cBj10txbrWkhoSrFb096zZyaelJOrWb4jXqQ77MCMR784fyiHo+Gr6+tDckLMX1RkrFtUbELOsM44gEmrnGJtqo+Xw8qrLSoysy3J6/JtnZafU7IS+P52Xz7lVWPd5wdxPW5DlZfeOUDiHenNH5g0oxopvTcLbwU3ZSrmHU+ZhyReMrg010NCAwTzVr54snT1ZedfeeGR/mJJ2eabGM/5YPlJ3/s0vG+pcOpbhD2NeBmwV1bVGrnBje70nHp2CeJQM9jJsDKMDM8tfb3F/znD64txbAZG3dG6zBah/E6jNdgPGb+/06/Uzl9a9LoaOB3yu0BxBtsD2qVbaojOxW/ScaDmP35BLmq9NDciVO/NKhr5suYuXY0lW0bkJIcb8q7THx+SkLwq8Xssbaq/kjo8nNV/PS04xnOxo7hG+Yl/JQ5d5P0H4LDk3xswReqOg4rp93PByejMRc3KOmRkP0xYgWwktJNJt1k4iHMHsT0HbCjoHMNS1CZxX7M34TsSpneKeztm4xh1WhvsvB7ZTu727aR4sxrD7D66oNUowYGAbKDJfzTQjfY9vn4TGdhTOq4k0A1M1TfOHyCvzDjU6b6OdoKLQyY/+9jLD9zfO8z6t5rj2H2YSJ+gqLPAP+1advyDDiAC6bg+hRqwbMWusNMlyP7EPDcbsrfPU35TTyO9DElPu7ytxvxC4G9pR+qX9T3N9ZX6S+AnrHCd83iX63wD0ih4d5mJ/8/AJBBhqf8g++aAAAAAElFTkSuQmCC";