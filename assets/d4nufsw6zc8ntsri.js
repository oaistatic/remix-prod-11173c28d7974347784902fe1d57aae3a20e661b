import{F as S,J as E,dl as u,dm as h}from"./dh0yl0m9q337gmci.js";import{Z as O,e as C,r as a}from"./nqo5y2f0dorhrqsr.js";function b(){const{pluginId:e}=O(),t=C(),l=a.useRef(!1),[p,d]=a.useState(""),{code:r,error:n,error_description:i,state:c}=Object.fromEntries(new URLSearchParams(p.substring(1)).entries());a.useEffect(()=>{d(window.location.hash)},[]),a.useEffect(()=>{if(l.current)return;if(e&&r&&c)l.current=!0;else{t("/");return}async function m(){const R=window.location.origin+`/ccc/${e}/oauth/callback`;if(!(!e||!r||!c))try{const s=await E.connectorOauthCallback(e,r,R,c);if(s.success){const o=new URL(u(h.OAUTH_SUCCESS,s.redirect_path),location.origin);o.searchParams.set("oauth_success","true"),t(o.pathname+o.search+o.hash)}else t(u(h.CUSTOM_ERROR,s.redirect_path,s.error??s.message))}catch{t(u(h.CUSTOM_ERROR))}}m()},[e,r,c,t]);const f=S();return a.useEffect(()=>{n&&f.danger(`${n}${i?`: ${i}`:""}`)},[n,i,f]),null}export{b as default};
//# sourceMappingURL=d4nufsw6zc8ntsri.js.map
