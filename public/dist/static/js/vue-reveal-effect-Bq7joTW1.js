import"./vue-CtDVafEO.js";import{p as X,q as Y,d as ee,r as te,s as re}from"./@vueuse.core-CohTIrf7.js";import{aL as oe,w as ne,e as ae,t as c}from"./@vue.runtime-core-KVqrk7Le.js";import{C as se}from"./@vue.shared-Dggo55H6.js";import{J as le,G as N}from"./@vueuse.shared-BT9VTltu.js";import{a as R,u as G,r as p,M as ie}from"./@vue.reactivity-Bi9M0yVH.js";import{T as de}from"./@ctrl.tinycolor-DIJrhXRL.js";const E="reveal-effect",O=`x-${E}`,ce={borderColor:"rgba(200, 200, 200, .4)",bgColor:"rgba(200, 200, 200, .2)"},H={borderColor:"rgba(100, 100, 100, .4)",bgColor:"rgba(100, 100, 100, .2)"},_={...H,borderWidth:1,borderGradientSize:100,bgGradientSize:130,light:X(),clickEffect:!0,disabled:!1};function ue(o,e){e===void 0&&(e={});var a=e.insertAt;if(!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",a==="top"&&n.firstChild?n.insertBefore(t,n.firstChild):n.appendChild(t),t.styleSheet?t.styleSheet.cssText=o:t.appendChild(document.createTextNode(o))}}var fe=`.x-reveal-effect {\r
  --xBorderWidth: 1px;\r
  --xBorderImage: unset;\r
  --xRadialGradient: none;\r
  --xSplash: none;\r
  position: relative;\r
}\r
\r
.x-reveal-effect::after {\r
  content: '';\r
  position: absolute;\r
  top: 0;\r
  right: 0;\r
  bottom: 0;\r
  left: 0;\r
  border: var(--xBorderWidth) solid transparent;\r
  border-image: var(--xBorderImage);\r
\r
  background-image: var(--xRadialGradient), var(--xSplash);\r
  background-origin: border-box;\r
  transition: opacity 1.5s;\r
  border-radius: inherit;\r
  transform: translateZ(0);\r
\r
  pointer-events: none;\r
  /* z-index: 1; */\r
}`;ue(fe);function j(o,e,a,n=0){const t=o-a.x,u=e-a.y;return t>=-n&&t<=a.width+n&&u>=-n&&u<=a.height+n}const{x:pe,y:ve}=Y({initialValue:{x:null,y:null},type:"client"}),C=R([]);oe(()=>{C.forEach(o=>{o.update()})});let v=R({});function ge(o){v=R(o)}function me(o,e){const a={el:o,update:V,mount:M,unmount:Z},n=1e3,t=ee(o),u=r=>typeof r=="function"?r(t):G(r),$=(r,s)=>{var d;let l;for(let x=0;x<r.length;x++)if((l=u((d=r[x])==null?void 0:d[s]))!=null)return l},J=r=>{const s={};for(const l in r)s[l]=u(r[l]);return s},{pressed:z}=te({target:t});ne(z,async r=>{r?(f.value&&await k(),g.value=1):f.value?(m.value=300,ie(g)):await k()});const g=p(0),m=p(n),f=p(!1),W=p(!1),T=re(g,{duration:m,disabled:W,transition:[0,0,.5,0],onStarted:async()=>{f.value=!0},onFinished:async()=>{f.value=!1,z.value||await k()}}),A=[0,25,75],U=[0,75,125],P=ae(()=>U.map((r,s)=>A[s]+(r-A[s])*T.value));function k(){m.value=1,g.value=0,W.value=!1;const r=p(!1);return requestAnimationFrame(()=>{requestAnimationFrame(async()=>{m.value=n,f.value=!1,r.value=!0})}),le(r).toBeTruthy()}let B={x:null,y:null},S=!1,w=!1;function V(r){const s=pe.value,l=ve.value;if(s==null||l==null)return;const d=t.getBoundingClientRect();t.classList.add(O),r&&(e=r);const q=$([e,v,_],"light")?ce:H;let i=J({..._,...v,...e,borderColor:N(e,"borderColor")?u(e.borderColor):$([v,q],"borderColor"),bgColor:N(e,"bgColor")?u(e.bgColor):$([v,q],"bgColor")});if(i.borderWidth&&j(s,l,d,i.borderGradientSize)){const h=s-d.x,y=l-d.y;c(()=>t.style.setProperty("--xBorderImage",`radial-gradient(${i.borderGradientSize}px at ${h}px ${y}px, ${i.borderColor}, transparent) 1`)),c(()=>t.style.setProperty("--xBorderWidth",`${i.borderWidth}px`)),S=!0}else S&&(c(()=>I()),S=!1);const D=j(s,l,d);if((D||f.value)&&i.bgColor){const h=B.x-d.x,y=B.y-d.y;if(D?(B={x:s,y:l},c(()=>t.style.setProperty("--xRadialGradient",`radial-gradient(${i.bgGradientSize}px at ${h}px ${y}px, ${i.bgColor}, transparent 100%)`))):c(()=>t.style.removeProperty("--xRadialGradient")),f.value&&i.clickEffect){const L=new de(i.bgColor),K=L.setAlpha(L.getAlpha()*(.1+(1-.1)*(1-T.value))).toHex8String(),Q=`radial-gradient(${i.bgGradientSize}px at ${h}px ${y}px, transparent ${P.value[0]}%, ${K} ${P.value[1]}%, transparent ${P.value[2]}%)`;c(()=>t.style.setProperty("--xSplash",Q))}else c(()=>t.style.removeProperty("--xSplash"));w=!0}else w&&(c(()=>F()),w=!1)}function F(){["xRadialGradient","xSplash"].forEach(r=>{t.style.removeProperty(`--${r}`)})}function I(){["xBorderImage","xBorderWidth"].forEach(r=>{t.style.removeProperty(`--${r}`)})}function M(){C.includes(a)||C.push(a)}function Z(){F(),I(),se(C,a),t.classList.remove(O)}return M(),a}const b=new WeakMap,xe={mounted(o,e){var n;const a=me(o,{...e.value,light:G((n=e.value)==null?void 0:n.light)??e.modifiers.light});b.set(o,a)},updated(o,e){var a,n;(n=b.get(o))==null||n.update({...e.value,light:G((a=e.value)==null?void 0:a.light)??e.modifiers.light})},unmounted(o){var e;(e=b.get(o))==null||e.unmount(),b.delete(o)}},we={name:E,setDefaultProps:ge,install(o){o.directive(E,xe)}};export{we as R};
