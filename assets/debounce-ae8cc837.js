function i(r,u,c){var e,l,n,f,o;u==null&&(u=100);function s(){var t=Date.now()-f;t<u&&t>=0?e=setTimeout(s,u-t):(e=null,c||(o=r.apply(n,l),n=l=null))}var a=function(){n=this,l=arguments,f=Date.now();var t=c&&!e;return e||(e=setTimeout(s,u)),t&&(o=r.apply(n,l),n=l=null),o};return a.clear=function(){e&&(clearTimeout(e),e=null)},a.flush=function(){e&&(o=r.apply(n,l),n=l=null,clearTimeout(e),e=null)},a}i.debounce=i;var p=i;export{p as d};