import{r as a,u as f,j as d}from"./nqo5y2f0dorhrqsr.js";import{bN as i,bO as r}from"./dh0yl0m9q337gmci.js";import{u as y}from"./l1f1541xz8tkjnyb.js";import{aX as g}from"./ktiwgucld5a8s55m.js";const s="last_checked_loc",S=24*60*60*1e3,c="last_denied_loc",A=60*60*1e3;function x(){const[e]=y(),{data:n}=f({queryKey:["userLocation",e.useLocation],queryFn:({queryKey:[o,t]})=>C({enabled:t}),initialData:_(e.useLocation),networkMode:"always",refetchOnMount:"always",refetchOnWindowFocus:"always",staleTime:0});return n}function _(e){if(e){const n=i.getCookie(r.LastLocation);if(n)try{return JSON.parse(n)}catch{return u(),null}}return null}async function C({enabled:e}){if(!e)return u();if((await L())?.state!=="granted"){const o=localStorage.getItem(s);if(o){const t=Number(o);if(Date.now()-S<t)try{return JSON.parse(i.getCookie(r.LastLocation))}catch{}}}const n=localStorage.getItem(c);if(n){const o=Number(n);if(Date.now()-A<o)return null}return await new Promise(o=>{navigator.geolocation.getCurrentPosition(t=>{const l={latitude:t.coords.latitude,longitude:t.coords.longitude,locationAccuracy:t.coords.accuracy};i.setCookie(r.LastLocation,JSON.stringify(l),{maxAge:g}),localStorage.setItem(s,Date.now().toString()),o(l)},()=>{localStorage.setItem(c,Date.now().toString()),o(u())},{enableHighAccuracy:!0,maximumAge:0})})}async function L(){return navigator?.permissions?await navigator.permissions.query({name:"geolocation"}):null}const E={latitude:null,longitude:null,locationAccuracy:null};function u(){return i.setCookie(r.LastLocation,JSON.stringify(E),{maxAge:g}),localStorage.removeItem(s),localStorage.removeItem(c),null}const m=a.createContext(null),N=({children:e})=>{const[n,o]=a.useState(null);return a.useEffect(()=>{L().then(t=>{t!=null&&(o(t.state),t.onchange=()=>{o(t.state)})})},[]),d.jsx(m.Provider,{value:n,children:e})};function P(){return a.useContext(m)}export{N as L,x as a,P as u};
//# sourceMappingURL=c7wc5rbxxk0wrnli.js.map
