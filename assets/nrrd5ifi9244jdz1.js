import{r as g,c as M,j as e,M as n,u as se}from"./nqo5y2f0dorhrqsr.js";import{u as W,a as E,b as ae,c as te}from"./fmqfavm16qrwpb4s.js";import{F as I,bL as O,g0 as U,dg as N,o as _,f as D,av as B,cg as $,bo as Y,u as q,as as T,bd as X,J as G,cz as ne,bR as P,bb as ie}from"./dh0yl0m9q337gmci.js";import{iD as x,ii as K,iE as k,iF as Q,iG as Z,iH as le,bq as oe,c0 as re,aQ as ce,iI as de,c1 as ue,iJ as ge,iK as R,c4 as me,P as xe,aY as fe,fl as pe,hq as he,bb as je}from"./ktiwgucld5a8s55m.js";import{c as Me}from"./iej0cupg2dqkmejt.js";import{a as ve,b as be,e as Ce,d as ye}from"./k2espd6213xxd06o.js";import{S as Se}from"./f1me5wt51wq1x6w8.js";import{a as Ne,d as z,e as A,g as V,f as we,c as Be,A as Ie}from"./cfptfbc8t40hzr4k.js";import"./nb34aa8izknzna97.js";import"./l697z2ouob9b6hw7.js";import"./odhzv2q19wc7ynyt.js";import"./jf3ekh73ifxuzv6r.js";var w=(s=>(s.FLEXIBLE="month",s.ANNUAL="year",s))(w||{});const Pe=Me(w);function Le({isOpen:s,onClose:i,initialTeamBillingType:a,renewalDate:t,accountId:l}){const[c,o]=g.useState(a),[r,u]=g.useState(!1),j=function(){u(!r)},[p,m]=g.useState(!1),v=_e[c],h=M(),b=I(),y=W(l),S=async()=>{m(!0);try{await y.mutateAsync({accountId:l,updatedPriceInterval:c==="month"?"month":"year",updatedSeats:void 0}),m(!1),b.success(h.formatMessage({id:"teamBilling.successfullyUpdatedSubscription",defaultMessage:"Your subscription was updated successfully"}),{hasCloseButton:!0}),u(!1),i()}catch{b.warning(h.formatMessage({id:"teamBilling.errorUpdatingSubscription",defaultMessage:"There was a problem updating your subscription"}),{hasCloseButton:!0})}finally{m(!1)}};return e.jsx(O,{type:"success",isOpen:s,onClose:()=>{u(!1),o(a),i()},size:"custom",className:"max-w-xl",noPadding:!0,title:r?h.formatMessage({id:"teamBilling.changeBillingScheduleConfirmTitle",defaultMessage:"Confirm changes"}):h.formatMessage({id:"teamBilling.changeBillingScheduleTitle",defaultMessage:"Change billing schedule"}),showCloseButton:!0,children:r?e.jsx(Ee,{selectedPlan:c,initialTeamBillingType:a,renewalDate:t,selectedPlanData:v,handleUpdate:S,isUpdating:p}):e.jsx(Te,{setSelectedPlan:o,selectedPlan:c,initialTeamBillingType:a,toggleConfirmPage:j,renewalDate:t})})}function Te({selectedPlan:s,setSelectedPlan:i,initialTeamBillingType:a,toggleConfirmPage:t,renewalDate:l}){const c=M();return e.jsxs("div",{children:[e.jsx("div",{className:"grid grid-flow-row grid-cols-2",children:e.jsxs(K,{className:"col-span-2 grid md:col-span-2 md:grid-cols-2",defaultValue:s,onValueChange:o=>{Pe(o)&&i(o)},children:[e.jsx(k,{billingType:"month",...Q}),e.jsx(k,{billingType:"year",...Z})]})}),e.jsx("hr",{}),e.jsxs("div",{className:"m-4 flex items-center justify-between",children:[e.jsx("span",{className:"text-sm text-token-text-secondary",children:e.jsx(n,{...x.changeEffectDate,values:{date:e.jsx(U,{value:l,year:"numeric",month:"long",day:"numeric"})}})}),e.jsx(N,{title:c.formatMessage(x.continueToPricePreview),disabled:s===a,color:"primary",onClick:()=>{t()}})]})]})}function Ee({initialTeamBillingType:s,selectedPlan:i,renewalDate:a,selectedPlanData:t,handleUpdate:l,isUpdating:c}){const o=M();return e.jsxs("div",{className:"p-4",children:[e.jsx("span",{className:"text-sm",children:e.jsx(n,{...x.confirmPageChangeEffectDate,values:{current_plan:s==="month"?"Flexible (monthly)":"Annual",new_plan:i==="month"?"Flexible (monthly)":"Annual",date:e.jsx(U,{value:a,year:"numeric",month:"long",day:"numeric"})}})}),e.jsxs("div",{className:"mt-4 flex flex-col bg-token-main-surface-secondary p-4",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(n,{...t.name})}),e.jsx("span",{className:"text-sm",children:e.jsx(n,{...t.cost,values:{s:(...r)=>e.jsx(le,{children:r})}})}),e.jsx("span",{className:"text-sm text-token-text-secondary",children:e.jsx(n,{...t.structure})})]}),e.jsx("div",{className:"mt-4 flex justify-end",children:e.jsx(N,{title:o.formatMessage(x.confirmChange),color:"primary",onClick:l,loading:c})})]})}const _e={month:{name:x.flexiblePlanName,cost:x.flexiblePlanCost,structure:x.teamsCostStructure},year:{name:x.annualPlanName,cost:x.annualPlanCost,structure:x.teamsCostStructure}},De=s=>g.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},g.createElement("path",{d:"M8 2C8.55229 2 9 2.44772 9 3H15C15 2.44772 15.4477 2 16 2C16.5523 2 17 2.44772 17 3V3.0085C17.3129 3.01563 17.5975 3.02883 17.8556 3.05335C18.3774 3.10292 18.8601 3.20369 19.316 3.43597C20.0686 3.81947 20.6805 4.43139 21.064 5.18404C21.3113 5.66937 21.4099 6.18608 21.4558 6.74817C21.5 7.28936 21.5 7.95372 21.5 8.75868V14.0118C21.5 14.0462 21.5 14.0801 21.5 14.1136C21.5003 14.7486 21.5006 15.2284 21.3895 15.6911C21.2915 16.0993 21.1299 16.4895 20.9106 16.8474C20.6619 17.2531 20.3225 17.5922 19.8733 18.041C19.8496 18.0647 19.8255 18.0887 19.8012 18.113L18.613 19.3012C18.5887 19.3255 18.5647 19.3495 18.541 19.3733C18.0922 19.8225 17.7531 20.1619 17.3474 20.4106C16.9895 20.6299 16.5993 20.7915 16.1911 20.8895C15.7284 21.0006 15.2486 21.0003 14.6136 21C14.5801 21 14.5462 21 14.5118 21H8.25868C7.45372 21 6.78936 21 6.24818 20.9558C5.68608 20.9099 5.16937 20.8113 4.68404 20.564C3.93139 20.1805 3.31947 19.5686 2.93597 18.816C2.68868 18.3306 2.59012 17.8139 2.54419 17.2518C2.49998 16.7106 2.49999 16.0463 2.5 15.2413V8.7587C2.49999 7.95373 2.49998 7.28937 2.54419 6.74817C2.59012 6.18608 2.68868 5.66937 2.93597 5.18404C3.31947 4.43139 3.93139 3.81947 4.68404 3.43597C5.13993 3.20369 5.62264 3.10292 6.14437 3.05335C6.40251 3.02883 6.68711 3.01563 7 3.0085V3C7 2.44772 7.44772 2 8 2ZM7 5.00905C6.74249 5.01544 6.52466 5.02623 6.33353 5.04439C5.9455 5.08125 5.73848 5.14336 5.59202 5.21799C5.2157 5.40973 4.90973 5.7157 4.71799 6.09202C4.6383 6.24842 4.57337 6.47262 4.53755 6.91104C4.50078 7.36113 4.5 7.94342 4.5 8.8V15.2C4.5 16.0566 4.50078 16.6389 4.53755 17.089C4.57337 17.5274 4.6383 17.7516 4.71799 17.908C4.90973 18.2843 5.2157 18.5903 5.59202 18.782C5.74842 18.8617 5.97262 18.9266 6.41104 18.9624C6.86113 18.9992 7.44342 19 8.3 19H14V18C14 15.7909 15.7909 14 18 14H19C19.1821 14 19.3529 14.0487 19.4999 14.1337C19.5 14.0947 19.5 14.054 19.5 14.0118V8.8C19.5 7.94342 19.4992 7.36113 19.4624 6.91104C19.4266 6.47262 19.3617 6.24842 19.282 6.09202C19.0903 5.71569 18.7843 5.40973 18.408 5.21799C18.2615 5.14336 18.0545 5.08125 17.6665 5.04439C17.4753 5.02623 17.2575 5.01544 17 5.00905V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55229 7 8 7C7.44772 7 7 6.55228 7 6V5.00905ZM19.0616 15.9981C19.0412 15.9994 19.0207 16 19 16H18C16.8954 16 16 16.8954 16 18V18.857C16.1047 18.8151 16.2059 18.7644 16.3024 18.7053C16.4807 18.596 16.6463 18.4395 17.1988 17.887L18.387 16.6988C18.7495 16.3363 18.9415 16.1404 19.0616 15.9981Z",fill:"currentColor"}));function ke({isOpen:s,onClose:i}){const a=M(),t=I(),{data:l,isLoading:c}=E(),o=_(),r=ae(o?.id),u=oe(),[j,p]=g.useState(""),[m,v]=g.useState(!1),h=u?.email&&j.toLowerCase()==u.email.toLowerCase(),[b,y]=g.useState(l&&!l.will_renew);if(c||!o||!l)return null;const S=async()=>{v(!0);try{await r.mutateAsync(o.id),y(!0)}catch{t.warning(a.formatMessage(f.errorCancellingSubscription),{hasCloseButton:!0})}finally{v(!1)}};return e.jsx(O,{type:"success",onClose:i,showCloseButton:!0,isOpen:s,className:"",title:e.jsx("span",{className:"text-lg",children:e.jsx(n,{...f.cancelPlan})}),children:b?e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:e.jsx(n,{...f.successfullyCanceled})}),l.active_until!=null&&e.jsx("p",{className:"text-sm text-token-text-primary",children:e.jsx(n,{...f.retainUntil,values:{expiryDate:new Date(l.active_until)}})}),e.jsx("div",{className:"mt-6 flex w-full flex-row justify-end",children:e.jsx(N,{title:a.formatMessage(f.doneButton),color:"primary",onClick:i,disabled:m})})]}):e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex w-full items-center gap-4",children:[e.jsx(re,{src:o.data.profilePictureUrl,size:"large"}),e.jsxs("div",{className:"flex-col",children:[e.jsx("p",{className:"font-semibold",children:o.data.name}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(n,{...f.membersCount,values:{count:l.seats_entitled}})})]})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:e.jsx(n,{...f.areYouSure})}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-token-text-secondary",children:[e.jsx("li",{className:"my-2",children:e.jsx(n,{...f.dataUnavailable})}),l.active_until!=null&&e.jsx("li",{className:"my-2",children:e.jsx(n,{...f.retainUntil,values:{expiryDate:new Date(l.active_until)}})}),e.jsx("li",{className:"my-2",children:e.jsx(n,{...f.retainEmailAccess})})]})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("h3",{className:"mb-2 text-base font-semibold text-token-text-primary",children:e.jsx(n,{...f.enterEmailToConfirm})}),e.jsx(ce,{ariaLabel:a.formatMessage(f.enterEmailToConfirm),type:"text",name:"user-email",placeholder:"abcd@acme.com",onChange:C=>{p(C.target.value)}})]})]}),e.jsxs("div",{className:"mt-6 flex w-full flex-row justify-end",children:[e.jsx(N,{title:a.formatMessage(f.keepSubscriptionButton),onClick:i,disabled:m}),e.jsx(N,{title:a.formatMessage(f.cancelSubscriptionButton),onClick:S,disabled:!h,loading:m,color:"danger",className:"ml-2"})]})]})})}const f=D({dataUnavailable:{id:"cancelTeamPlanModal.dataUnavailable",defaultMessage:"All workspace data including chat history and settings will not be available."},cancelPlan:{id:"cancelTeamPlanModal.cancelPlan",defaultMessage:"Cancel subscription"},retainUntil:{id:"cancelTeamPlanModal.retainUntil",defaultMessage:"You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}."},retainEmailAccess:{id:"cancelTeamPlanModal.retainEmailAccess",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},errorCancellingSubscription:{id:"cancelTeamPlanModal.errorCancellingSubscription",defaultMessage:"There was a problem cancelling your subscription."},areYouSure:{id:"cancelTeamPlanModal.areYouSure",defaultMessage:"Are you sure?"},enterEmailToConfirm:{id:"cancelTeamPlanModal.enterEmailToConfirm",defaultMessage:"Enter your Email address to confirm"},emailPlaceholder:{id:"cancelTeamPlanModal.emailPlaceholder",defaultMessage:"abcd@acme.com"},doneButton:{id:"cancelTeamPlanModal.doneButton",defaultMessage:"Done"},keepSubscriptionButton:{id:"cancelTeamPlanModal.keepSubscriptionButton",defaultMessage:"Keep subscription"},cancelSubscriptionButton:{id:"cancelTeamPlanModal.cancelSubscriptionButton",defaultMessage:"Cancel subscription"},successfullyCanceled:{id:"cancelTeamPlanModal.successfullyCanceled",defaultMessage:"You have successfully canceled your subscription."},membersCount:{id:"yourComponent.membersCount",defaultMessage:"{count, plural, one {# member} other {# members}}"}}),ze=25*12,Ae=30,Oe=B.p`text-base font-semibold mb-3 mt-3`;function Ue({isOpen:s,onClose:i,initialTeamBillingType:a,initialSeats:t,accountId:l,renewalDate:c}){const o=M(),r=I(),[u,j]=g.useState(t),[p,m]=g.useState(!1),v=function(){m(!p)},[h,b]=g.useState(!1),y=Re[a],S=a==="month"?Q:Z,C=W(l),ee=async()=>{b(!0);try{await C.mutateAsync({accountId:l,updatedPriceInterval:void 0,updatedSeats:u}),b(!1),r.success(o.formatMessage({id:"teamBilling.successfullyUpdatedSubscription",defaultMessage:"Your subscription was updated successfully"}),{hasCloseButton:!0}),m(!1),i()}catch{r.warning(o.formatMessage({id:"teamBilling.errorUpdatingSubscription",defaultMessage:"There was a problem updating your subscription"}),{hasCloseButton:!0})}finally{b(!1)}};return e.jsx(O,{type:"success",isOpen:s,onClose:()=>{m(!1),j(t),i()},size:"custom",noPadding:!0,className:"max-w-xl",showCloseButton:!0,title:p?o.formatMessage({id:"teamsManageSeatsModal.title",defaultMessage:"Manage seats"}):o.formatMessage({id:"teamsManageSeatsModalConfirmPage.title",defaultMessage:"Review"}),children:p?e.jsx(He,{numSeats:u,initialSeats:t,handleUpdate:ee,isUpdating:h,renewalDate:c,accountId:l}):e.jsx(Fe,{initialTeamBillingType:a,selectedPlanBillingInfo:S,numSeats:u,initialSeats:t,setNumSeats:j,selectedPlanData:y,toggleConfirmPage:v})})}function Fe({initialTeamBillingType:s,selectedPlanBillingInfo:i,numSeats:a,initialSeats:t,setNumSeats:l,selectedPlanData:c,toggleConfirmPage:o}){const r=M();return e.jsxs("div",{className:"grid grid-flow-row grid-cols-2",children:[e.jsx(K,{className:"col-span-2 grid md:col-span-1 md:grid-cols-1",defaultValue:s,children:e.jsx(k,{billingType:s,...i})}),e.jsxs("div",{className:"col-span-3 overflow-hidden border-l border-token-main-surface-tertiary bg-token-main-surface-secondary p-6 md:col-span-1",children:[e.jsx("label",{className:"mb-3 block text-base font-semibold",htmlFor:"seats",children:e.jsx(n,{...x.seatsTitle})}),e.jsx(de,{numSeats:a,minSeats:t,setNumSeats:l}),e.jsx(ue,{}),e.jsx(Oe,{children:e.jsx(n,{...x.summaryTitle})}),e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{className:"mb-2",children:e.jsx(n,{...c.name})}),e.jsxs(ge,{children:[e.jsx(R,{children:e.jsx(n,{...c.billed})}),e.jsx(R,{children:e.jsx("b",{children:e.jsx(n,{...c.total,values:{totalCost:(a||0)*(s==="year"?ze:Ae)}})})})]})]})]}),e.jsx("hr",{}),e.jsx("div",{className:"m-4 flex justify-end",children:e.jsx(N,{title:r.formatMessage({id:"teamsManageSeatsModal.continue",defaultMessage:"Continue"}),disabled:a===t,onClick:()=>{o()},color:"primary"})})]})}function He({numSeats:s,initialSeats:i,renewalDate:a,handleUpdate:t,isUpdating:l,accountId:c}){const o=M(),{data:r,isError:u,isLoading:j}=te(c,s);if(j)return e.jsx("div",{className:"flex items-center justify-center p-6",children:e.jsx($,{})});if(!(u||!r))return e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.additionalSeats",defaultMessage:"{additionalSeats} additional seats",values:{additionalSeats:s-i}})}),e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.additionalSeatsTotal",defaultMessage:"${totalCost}",values:{totalCost:(r.total_amount/100).toFixed(2)}})})]}),e.jsx("span",{className:"text-sm text-token-text-secondary",children:e.jsx(n,{id:"teamsManageSeatsModal.proratedAmountMessage",defaultMessage:"Prorated amount until next billing cycle"})}),e.jsx("span",{className:"mt-4 flex flex-col bg-token-main-surface-secondary p-4 text-sm text-token-text-secondary",children:e.jsx(n,{id:"teamsManageSeatsModal.chargeMessage",defaultMessage:"You will be charged for {numSeats} total seats at your next renewal on {date}",values:{numSeats:s,date:e.jsx(U,{value:a,year:"numeric",month:"long",day:"numeric"})}})}),e.jsx("hr",{className:"mt-4"}),e.jsxs("div",{className:"mt-4 flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.subTotal",defaultMessage:"Subtotal"})}),e.jsx("span",{children:e.jsx(n,{id:"teamsManageSeatsModal.subtotalPrice",defaultMessage:"${totalCost}",values:{totalCost:(r.amount_excluding_tax/100).toFixed(2)}})})]}),e.jsxs("div",{className:"mt-2 flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.tax",defaultMessage:"Tax"})}),e.jsx("span",{children:e.jsx(n,{id:"teamsManageSeatsModal.taxAmount",defaultMessage:"${tax}",values:{tax:(r.tax_amount/100).toFixed(2)}})})]}),e.jsxs("div",{className:"mt-2 flex justify-between",children:[e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.totalDueToday",defaultMessage:"Total due today"})}),e.jsx("span",{className:"font-semibold",children:e.jsx(n,{id:"teamsManageSeatsModal.totalDueTodayAmount",defaultMessage:"${totalCost}",values:{totalCost:(r.total_amount/100).toFixed(2)}})})]}),e.jsx("hr",{className:"mt-4"}),e.jsx("div",{className:"mt-6 flex justify-end",children:e.jsx(N,{title:o.formatMessage({id:"teamsManageSeatsModal.payNow",defaultMessage:"Pay now"}),color:"primary",onClick:t,loading:l})})]})}const Re={month:{name:x.flexiblePlanSelected,billed:{id:"teamManageSeatsModal.flexiblePlanBilled",defaultMessage:"Price billed monthly",description:"Summary billing of selected plan"},total:x.flexiblePlanTotal},year:{name:x.annualPlanSelected,billed:{id:"teamManageSeatsModal.flexiblePlanBilled",defaultMessage:"Price billed annually",description:"Summary billing of selected plan"},total:x.annualPlanTotal}};function Ve({numInUse:s,numAllocated:i,isTeam:a,subscriptionWillRenew:t,subscriptionBillingPeriod:l,accountId:c,subscriptionRenewalDate:o}){const u=Math.max(i,s)>10?We:Xe,j=q("3954884439")?.value,[p,m]=g.useState(!1),v=function(){m(!p)},h=l==="monthly"?w.FLEXIBLE:w.ANNUAL;return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"mt-1 text-left text-sm",children:e.jsx(n,{...H.description,values:{num:`${s}/${i}`}})}),a&&t&&j&&e.jsx(Y,{color:"secondary",className:"text-right",onClick:v,children:e.jsx(n,{id:"components.business.NumSeats.manageSeats",defaultMessage:"Manage seats"})}),e.jsx(Ue,{isOpen:p,onClose:v,initialTeamBillingType:h,initialSeats:i,accountId:c,renewalDate:o})]}),e.jsx(u,{numInUse:s,numAllocated:i})]})}function We({numAllocated:s,numInUse:i}){const a=M(),t=i>s,l=t?100:i/s*100,c=t?s/i*100:100;return e.jsx("div",{className:T("relative w-full rounded-full",t?"bg-orange-500":"bg-token-main-surface-primary"),children:e.jsxs("div",{className:"relative h-4",style:{width:`${c}%`},children:[e.jsx("div",{className:T("h-4 overflow-hidden rounded-l-full bg-green-600",i===s&&"rounded-r-full"),style:{width:`${l}%`}}),i!==s&&t&&e.jsx("div",{className:"absolute right-0 top-[-3px] bg-token-main-surface-primary",children:e.jsx(X,{label:a.formatMessage(H.dividerTooltip,{count:s}),children:e.jsx(J,{className:"px-1 py-0.5"})})})]})})}const J=({className:s})=>e.jsxs("div",{className:T("flex flex-col gap-0.5",s),children:[e.jsx(L,{}),e.jsx(L,{}),e.jsx(L,{}),e.jsx(L,{})]}),F=B.div`h-4 w-4 rounded-full`,$e=B(F)`bg-green-600`,Ye=B(F)`bg-token-main-surface-tertiary`,qe=B(F)`bg-orange-500`,L=B.span`w-[3px] h-[3px] bg-gray-400 dark:bg-gray-500 rounded-full`;function Xe({numAllocated:s,numInUse:i}){const a=M(),t=i>s,l=g.useMemo(()=>Array.from(Array(t?i:s).keys()),[t,s,i]);return e.jsx("div",{className:"flex items-center gap-2",children:l.map(c=>{let o=qe,r=null;return c<i&&!t?o=$e:c<s&&!t&&(o=Ye),c===s-1&&(r=e.jsx(X,{label:a.formatMessage(H.dividerTooltip,{count:s}),children:e.jsx(J,{})})),e.jsxs(e.Fragment,{children:[e.jsx(o,{},c),r]})})})}const H=D({dividerTooltip:{defaultMessage:"Your team has {count, plural, =0 {no seats} one {# seat} other {# seats}} purchased",id:"components.business.NumSeats.dividerTooltip"},description:{defaultMessage:"{num} seats in use",id:"components.business.NumSeats.description"}});function Ge(s,i){const a=M(),t=I();return se({queryKey:["organization-invoices",{...s,options:i}],queryFn:async()=>await G.getInvoices(s,i).catch(l=>{throw t.danger(a.formatMessage(Qe.invoicesLoadError,{error:l.message})),l}),enabled:"account_id"in s||"organization_id"in s})}function Ke(s){const i=_(),a=i?.id,t=i?.data.organizationId??void 0,l=i?.isEnterprisey();return Ge(l?{organization_id:t}:{account_id:a},s)}const Qe=D({invoicesLoadError:{id:"organizationBillingInfo.invoicesLoadError.0",defaultMessage:"Failed to load invoices. Contact support@openai.com if error persists."}});function Ze(){const{data:s,isLoading:i,isError:a}=E(),t=_(),[l,c]=g.useState(!1),o=function(){c(!l)};if(i)return e.jsx("div",{className:"flex min-h-screen items-center justify-center",children:e.jsx($,{})});if(a||!s||!t)return null;const r=s.active_until!=null,u=s?.seats_in_use>s?.seats_entitled;return e.jsx(e.Fragment,{children:e.jsxs(z,{children:[e.jsx(A,{children:e.jsx(n,{...d.planTitle})}),e.jsx("hr",{}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx(V,{children:t?.isEdu()?r?e.jsx(n,{...d.activeEduLicense}):t?.isResellerHosted()?e.jsx(n,{...d.resellerHostedEduLicense}):e.jsx(n,{...d.pendingEduLicense}):t?.isEnterprisey()?r?e.jsx(n,{...d.activeEnterpriseLicense}):t?.isResellerHosted()?e.jsx(n,{...d.resellerHostedEnterpriseLicense}):e.jsx(n,{...d.pendingEnterpriseLicense}):r?s.non_profit_org_discount_applied?e.jsx(n,{...d.activeTeamLicenseNonProfitOrg}):e.jsx(n,{...d.activeTeamLicense}):e.jsx(n,{...d.pendingTeamLicense})}),s.active_until!=null&&e.jsx(we,{className:"mt-1",children:t?.isEnterprisey()?e.jsx(n,{...d.licenseExpiry,values:{expiryDate:new Date(s.active_until)}}):s.will_renew?e.jsx(n,{...d.renewalDate,values:{expiryDate:new Date(s.active_until)}}):e.jsx(n,{...d.deactivateDate,values:{expiryDate:new Date(s.active_until)}})})]}),e.jsx(Je,{isOpen:l,onDropdownOpen:o})]}),e.jsx("hr",{}),r&&e.jsxs("div",{children:[e.jsx(V,{children:e.jsx(n,{...d.seatsTitle})}),e.jsx(as,{isTeam:t?.isTeam()??!1,accountId:t.id}),t?.isTeam()&&u&&e.jsxs("span",{className:"text-sm text-token-text-secondary",children:[e.jsx(n,{...d.teamsAutochargeMessage}),e.jsx(xe,{className:"pl-1",openNewTab:!0,href:"https://help.openai.com/en/articles/8792536-manage-billing-on-the-chatgpt-team-subscription-plan",children:e.jsx(n,{...d.billingLearnMore})})]})]}),e.jsx("hr",{})]})})}function Je({isOpen:s,onDropdownOpen:i}){const[a,t]=g.useState(!1),l=M(),c=I(),o=_(),{data:r}=E(),[u,j]=g.useState(!1),p=function(){j(!u)},[m,v]=g.useState(!1),h=function(){v(!m)},b=q("1318146997")?.value;if(!o||!o.isTeam()||!r)return;const y=async()=>{t(!0);try{const C=await G.fetchCustomerPortalUrl(o?.getWorkspaceId());location.href=C.url}catch{c.warning(l.formatMessage(d.stripeErrorWarning),{hasCloseButton:!0})}finally{t(!1)}},S=r?.billing_period==="monthly"?w.FLEXIBLE:w.ANNUAL;return e.jsxs(ne,{open:s,size:"default",triggerButton:e.jsx(Y,{color:"secondary",onClick:i,icon:fe,children:e.jsx(n,{...d.manageLicenseBtn})}),children:[e.jsx(P.Item,{icon:Ce,onClick:y,children:e.jsx(n,{...d.managePaymentMethod})}),r.will_renew&&b&&e.jsx(P.Item,{icon:De,onClick:()=>{h()},children:e.jsx(n,{...d.manageBillingSchedule})}),r.active_until!=null&&e.jsx(Le,{isOpen:m,onClose:h,initialTeamBillingType:S,renewalDate:new Date(r.active_until),accountId:o.id}),r?.will_renew&&e.jsx(P.Separator,{}),r?.will_renew&&e.jsx(P.Item,{icon:Se,color:"danger",onClick:()=>{p()},children:e.jsx(n,{...d.cancelSubscriptionBtn})}),e.jsx(ke,{isOpen:u,onClose:p})]})}function es({invoice:s}){const i=s?.status_transitions.paid_at!=null&&new Date(s.status_transitions.paid_at*1e3),a=s&&new Date(s.due_date*1e3),t=s&&new Date(s.created*1e3);return e.jsxs(Ie,{className:"items-center",children:[e.jsxs("div",{className:"flex grow flex-col gap-1",children:[e.jsx("span",{children:t?e.jsx(n,{...d.invoiceName,values:{createdDate:t}}):e.jsx(n,{...d.defaultInvoiceName})}),s?.paid&&i!=null?e.jsx("div",{className:"text-xs text-token-text-secondary",children:e.jsx(n,{...d.paidInvoice,values:{invoiceDate:i}})}):s&&e.jsx("div",{className:"text-xs text-green-600",children:e.jsx(n,{...d.upcomingInvoice,values:{invoiceDate:a}})})]}),e.jsx("a",{href:s?.hosted_invoice_url,className:T("mx-auto",s?.hosted_invoice_url==null&&"cursor-not-allowed opacity-20"),target:"_blank",rel:"noreferrer",children:e.jsx(je,{className:"icon-sm text-green-600"})})]})}function ss(){const[s,i]=g.useState({limit:5}),{data:a,isError:t}=Ke(s),l=s.startingAfter!=null||s.endingBefore!=null&&a?.has_more,c=s.endingBefore!=null||a?.has_more&&s.endingBefore==null;return t||a==null?e.jsxs(z,{children:[e.jsx(A,{children:e.jsx(n,{...d.invoicesTitle})}),e.jsx(pe,{children:e.jsx(n,{...d.noInvoices})})]}):e.jsxs(z,{children:[e.jsx(A,{children:e.jsx(n,{...d.invoicesTitle})}),e.jsx(Be,{children:a.data.map(o=>e.jsx(es,{invoice:o},o.id))}),e.jsxs("div",{className:"flex",children:[l&&e.jsx("button",{onClick:()=>{a&&i(o=>({...o,endingBefore:a.data[0].id,startingAfter:void 0}))},children:e.jsx(he,{className:"icon-sm"})}),e.jsx("div",{className:"flex-grow"}),c&&e.jsx("button",{onClick:()=>{a&&i(o=>({...o,startingAfter:a.data[a.data.length-1].id,endingBefore:void 0}))},children:e.jsx(ie,{className:"icon-sm"})})]})]})}function as({isTeam:s,accountId:i}){const{data:a,isLoading:t,isError:l}=E();return l||!a||t||!a.billing_period||!a.active_until?null:e.jsx(Ve,{numInUse:a.seats_in_use,numAllocated:a.seats_entitled,isTeam:s,subscriptionWillRenew:a.will_renew,subscriptionBillingPeriod:a.billing_period,subscriptionRenewalDate:new Date(a.active_until),accountId:i})}function ts(){const i=me(t=>t.currentWorkspace)?.organizationId,a=M();return i===void 0?null:e.jsxs(e.Fragment,{children:[e.jsx(ve,{title:a.formatMessage(d.title),subtitle:a.formatMessage(d.subtitle)}),e.jsx(be,{children:e.jsxs(Ne,{children:[e.jsx(Ze,{}),e.jsx(ss,{})]})})]})}const d=D({title:{id:"organizationBillingInfo.title.1",defaultMessage:"Billing"},subtitle:{id:"organizationBillingInfo.subtitle",defaultMessage:"Only workspace owners can view and change these settings"},planTitle:{id:"organizationBillingInfo.planTitle",defaultMessage:"Plan"},activeEnterpriseLicense:{id:"organizationBillingInfo.activeEnterpriseLicense",defaultMessage:"Enterprise License"},pendingEnterpriseLicense:{id:"organizationBillingInfo.pendingEnterpriseLicense",defaultMessage:"Enterprise License (pending activation)"},resellerHostedEnterpriseLicense:{id:"organizationBillingInfo.resellerHostedEnterpriseLicense",defaultMessage:"Enterprise License"},activeEduLicense:{id:"organizationBillingInfo.activeEduLicense",defaultMessage:"Edu License"},pendingEduLicense:{id:"organizationBillingInfo.pendingEduLicense",defaultMessage:"Edu License (pending activation)"},resellerHostedEduLicense:{id:"organizationBillingInfo.resellerHostedEduLicense",defaultMessage:"Edu License"},activeTeamLicense:{id:"organizationBillingInfo.activeTeamLicense",defaultMessage:"Team License"},activeTeamLicenseNonProfitOrg:{id:"organizationBillingInfo.activeTeamLicenseNonProfitOrg",defaultMessage:"Team License (Non Profit Discount)"},pendingTeamLicense:{id:"organizationBillingInfo.pendingTeamLicense",defaultMessage:"Team License (pending activation)"},licenseExpiry:{id:"organizationBillingInfo.licenseExpiry",defaultMessage:"Active until {expiryDate, date, long}"},renewalDate:{id:"organizationBillingInfo.renewalDate",defaultMessage:"Renews on {expiryDate, date, long}"},deactivateDate:{id:"organizationBillingInfo.deactivateDate",defaultMessage:"Deactivates on {expiryDate, date, long}"},seatsTitle:{id:"organizationBillingInfo.seatsTitle",defaultMessage:"Seats"},seatsInUse:{id:"organizationBillingInfo.seatsInUse",defaultMessage:"{numSeats} in use ({numSeatsPct})"},invoicesTitle:{id:"organizationBillingInfo.invoicesTitle",defaultMessage:"Invoices"},invoiceName:{id:"organizationBillingInfo.invoiceName",defaultMessage:"Invoice: {createdDate, date, long}"},defaultInvoiceName:{id:"organizationBillingInfo.defaultInvoiceName",defaultMessage:"Invoice"},paidInvoice:{id:"organizationBillingInfo.paidInvoice",defaultMessage:"Paid: {invoiceDate, date, long}"},upcomingInvoice:{id:"organizationBillingInfo.upcomingInvoice",defaultMessage:"Due: {invoiceDate, date, long}"},noInvoices:{id:"organizationBillingInfo.noInvoices",defaultMessage:"No invoices found"},manageSubscription:{id:"organizationBillingInfo.manageSubscription",defaultMessage:"Manage subscription"},cancelSubscriptionBtn:{id:"organizationBillingInfo.cancelSubscriptionBtn",defaultMessage:"Cancel subscription"},manageLicenseBtn:{id:"organizationBillingInfo.manageLicenseBtn",defaultMessage:"Manage license"},managePaymentMethod:{id:"organizationBillingInfo.managePaymentMethod",defaultMessage:"Payment method"},manageBillingSchedule:{id:"organizationBillingInfo.manageSchedule",defaultMessage:"Billing schedule"},stripeErrorWarning:{id:"organizationBillingInfo.stripeErrorWarning",defaultMessage:"Error loading account information"},teamsAutochargeMessage:{id:"organizationBillingInfo.teamsAutochargeMessage",defaultMessage:"Your additional seats will be included on your next invoice."},billingLearnMore:{id:"organizationBillingInfo.billingLearnMore",defaultMessage:"Learn more"}});function hs(){return ye(),e.jsx(ts,{})}export{hs as default};
//# sourceMappingURL=nrrd5ifi9244jdz1.js.map
