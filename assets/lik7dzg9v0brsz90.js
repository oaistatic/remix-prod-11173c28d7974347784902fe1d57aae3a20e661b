import{j as e,r as p,X as S,ae as k,e as T,M as o,L as w,a as G}from"./nqo5y2f0dorhrqsr.js";import{aF as P,fo as z,ci as M,cj as D,cd as I,cf as L,g1 as E,g2 as F,bR as _,f5 as v,aS as A,cU as B,g3 as U,cW as O,eQ as H,fs as W,cu as q,cZ as Q,dn as Y,aP as m,g4 as $,eV as K,g5 as V,eT as X,g6 as Z,g7 as J}from"./ktiwgucld5a8s55m.js";import{f3 as h,d5 as R,cA as ee,av as se,bd as y,e1 as ae,as as f,cz as te,bR as C,f as ie}from"./dh0yl0m9q337gmci.js";import{C as ne}from"./ezyyguzloavludkz.js";import{C as re}from"./fy8orb1z72ox92eg.js";import{a as oe}from"./odhzv2q19wc7ynyt.js";import{G as le}from"./e8h6h5qdzi4logqs.js";function ce(){return e.jsx(P,{leading:!0,type:"primary",className:h.header,children:e.jsx("div",{className:h.headerLeading,children:e.jsx(z,{})})})}function ke({children:s,header:t,footer:a}){const[i,n]=p.useState(()=>R());return e.jsx(oe,{clientThreadId:i,setClientThreadId:n,children:e.jsx(M,{children:e.jsx(D,{className:ee.application,sidebar:e.jsx(re,{}),thread:e.jsx(de,{header:t,footer:a,children:s}),name:"gpts-sc"})})})}function de({children:s,header:t,footer:a}){return e.jsxs("div",{className:"h-full flex-1",style:{container:"thread-container / inline-size"},children:[e.jsxs(I,{anchor:"vertical",className:h.screen,name:"thread",leading:t??e.jsx(ce,{}),trackLeading:!0,trailing:a,children:[s,e.jsx(ne,{})]}),e.jsx(L,{})]})}let x=null;function me(){return x||(x=document.createElement("div"),x.setAttribute("portal-container",""),document.body.append(x)),x||null}function xe(s){const{children:t}=s,a=me();return a&&S.createPortal(t,a)}function b({delay:s,animateTap:t=!0,children:a}){return e.jsx(k.div,{whileTap:{scale:t?.98:void 0},initial:{opacity:0,translateY:5},animate:{opacity:1,translateY:0,transition:{duration:.3,ease:"easeIn",delay:s??0}},children:a})}var ge=(s=>(s.Enabled="enabled",s.ComingSoon="coming-soon",s))(ge||{});function pe({gizmoResource:s}){const t=s.gizmo.vanity_metrics?.num_conversations_str,a=s.gizmo.share_recipient??m.Private,i=$(a);return e.jsxs("div",{children:[s.gizmo.share_recipient!==m.Private&&t!=null?e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(K,{className:"icon-sm"}),e.jsx("span",{children:e.jsx(o,{...ue.conversationCountStrLabel,values:{numConvos:t}})})]}):void 0,e.jsxs("div",{className:"flex items-center gap-1",children:[a===m.Link||a===m.Marketplace?e.jsx(V,{className:"icon-sm shrink-0"}):a===m.Workspace?e.jsx(X,{className:"icon-sm shrink-0"}):e.jsx(Z,{className:"icon-sm shrink-0"}),e.jsx("span",{className:"line-clamp-1",children:i})]})]})}function Te({gizmoResource:s,canRemoveRecent:t}){const a=T(),i=E(s),n=F(s),r=!!s.gizmo.tags?.includes(_.FirstParty);return e.jsx(N,{href:n?v(s.gizmo.id):A(s),icon:e.jsx(B,{isFirstParty:r,src:s?.gizmo.display.profile_picture_url??void 0,className:"h-[42px] w-[42px] flex-shrink-0"}),title:s.gizmo.display.name||U,isDraft:n,description:s.gizmo.display.description??"",byline:i?e.jsx(pe,{gizmoResource:s}):e.jsx(O,{gizmo:s}),buttons:e.jsxs(e.Fragment,{children:[i&&e.jsx(y,{label:e.jsx(o,{id:"gizmo.gpt.grid.EditGPT",defaultMessage:"Edit GPT"}),className:"flex justify-center",side:"top",children:e.jsx("button",{className:"rounded-lg px-3 py-2 text-token-text-primary transition-transform duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",onClick:()=>{a(v(s.gizmo.id))},children:e.jsx(H,{className:"icon-sm"})})}),e.jsx(fe,{gizmoResource:s,isOwner:i,canRemoveRecent:t})]})})}const he=se.div`flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full border border-dashed
${({$disabled:s})=>s?"":"border-token-border-light bg-token-main-surface-secondary"}`;function we({type:s}){const t=J(),a=s==="coming-soon";return e.jsxs(ae,{disabled:!a,label:e.jsx(o,{id:"gizmo.gpt.grid.CreateGPTComingSoon",defaultMessage:"GPT creation will be available in the coming weeks"}),children:[e.jsx(N,{href:t,disabled:a,icon:e.jsx(he,{$disabled:a,children:e.jsx(W,{className:f("icon-sm",a&&"opacity-30")})}),title:e.jsx("div",{className:"flex items-center gap-1",children:e.jsx(o,{id:"gizmo.gpt.grid.CreateGPT",defaultMessage:"Create a GPT"})}),description:"Customize a version of ChatGPT for a specific purpose",byline:a?e.jsx("div",{className:"flex items-center justify-end",children:e.jsx("div",{className:"flex items-center",children:e.jsx(o,{id:"gizmo.gpt.grid.ComingSoon",defaultMessage:"Coming soon"})})}):void 0}),e.jsx("div",{className:"h-px bg-gray-100 dark:bg-gray-700"})]})}function N({href:s,icon:t,title:a,isDraft:i=!1,description:n,byline:r,buttons:l,disabled:c,className:d}){const u=f("flex items-center px-2 py-4 rounded-xl",c?"":"hover:bg-token-main-surface-secondary",d),j=e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex grow items-center overflow-hidden md:w-3/5 md:grow-0",children:[t,e.jsxs("div",{className:f("grow overflow-hidden pl-4 pr-9 leading-tight",c?"opacity-50":"hover:cursor-pointer"),children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"font-semibold",children:a}),i&&e.jsx(y,{label:e.jsx(o,{id:"gizmo.gpt.grid.Draft",defaultMessage:"Draft"}),className:"flex justify-center",side:"top",children:e.jsx("div",{className:"m-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-gray-600"})})]}),e.jsx("div",{className:"line-clamp-2 overflow-hidden text-ellipsis break-words text-sm",children:n}),r!=null&&e.jsx("div",{className:"text-ellipsis text-sm text-token-text-tertiary md:hidden",children:r})]})]}),r!=null&&e.jsx("div",{className:"hidden flex-1 text-ellipsis text-sm text-token-text-tertiary md:block",children:r}),l!=null&&e.jsx("div",{onClick:g=>{g.preventDefault()},onPointerDownCapture:g=>{g.stopPropagation()},className:"flex h-9 shrink-0 justify-end gap-2 font-semibold md:w-[100px]",children:l})]});return c?e.jsx(b,{children:e.jsx("span",{className:u,children:j})}):e.jsx(b,{children:e.jsx(w,{className:u,to:s,children:j})})}function fe({gizmoResource:s,isOwner:t,canRemoveRecent:a}){const[i,n]=p.useState(!1),[r,l]=p.useState(!1),c=G();return!t&&!a?null:e.jsxs(e.Fragment,{children:[e.jsxs(te,{side:"top",contentAlign:"end",sideOffset:8,open:r,onOpenChange:d=>l(d),triggerButton:e.jsx("button",{color:"secondary",className:"rounded-lg bg-transparent px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-white active:scale-[0.9] dark:bg-transparent dark:hover:bg-gray-700",onClick:()=>{l(d=>!d)},children:e.jsx(q,{className:"icon-md"})}),children:[t&&e.jsx(C.Item,{color:"danger",onClick:()=>{n(!0)},icon:Q,children:e.jsx(o,{id:"gizmo.gpt.grid.DeleteGPT",defaultMessage:"Delete GPT"})}),a&&e.jsx(C.Item,{onClick:()=>{Y.removeFromRecent(c,s.gizmo.id)},children:e.jsx(o,{id:"gizmo.gpt.grid.RemoveFromRecent",defaultMessage:"Remove from Recent"})})]}),i&&e.jsx(xe,{children:e.jsx(le,{gizmoId:s.gizmo.id,onSuccess:()=>{n(!1)},onClose:()=>{n(!1)}})})]})}const ue=ie({conversationCountStrLabel:{id:"gizmo.gpt.grid.conversationCountStrLabel",defaultMessage:"{numConvos} Chats"}});export{we as C,b as G,ke as a,ge as b,Te as c};
//# sourceMappingURL=lik7dzg9v0brsz90.js.map
