const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/nybbz233ilcvkniq.js","assets/nqo5y2f0dorhrqsr.js"])))=>i.map(i=>d[i]);
import{c as A,av as d,F as E,d$ as M,aS as W,J as N,fQ as F,fR as O,as as w,bo as R,ds as _,f as L}from"./dh0yl0m9q337gmci.js";import{c as B,r as s,j as e,M as a}from"./nqo5y2f0dorhrqsr.js";import{dc as H,aY as q}from"./ktiwgucld5a8s55m.js";const z={flags:{failwhaleBypassEnabled:!1,sharingEnabled:!1}},J=A()((i,n)=>({...z,updateFlagValue:(h,c)=>{const u=n().flags;i({flags:{...u,[h]:c}})}}));function X(){const i=B(),n=E(),h=J(o=>o.flags.failwhaleBypassEnabled),[c,u]=s.useState(!1),[T,C]=s.useState(!1),m=M(),g=s.useRef(b[Math.floor(Math.random()*b.length)]),[r,k]=s.useState(!1),[x,p]=s.useState(!1),[f,P]=s.useState(!1),y=H();s.useEffect(()=>{document.title="ChatGPT",C(!0)},[]),s.useEffect(()=>{m(()=>{u(!0)},1e3)},[m]);const v=s.useCallback(async o=>{o.preventDefault();const G=o.target.email.value,I=(await W(async()=>{const{default:l}=await import("./nybbz233ilcvkniq.js").then(S=>S.i);return{default:l}},__vite__mapDeps([0,1]))).default,j=I(G);p(!0),N.getLoginLink(j).catch(l=>{n.danger(typeof l.message=="string"?l.message:F)}).finally(()=>{p(!1),k(!0)})},[n]);return T?e.jsx(V,{children:e.jsxs("div",{className:"relative flex h-full w-full overflow-hidden",children:[e.jsxs(D,{children:[e.jsx("div",{className:"text-3xl font-semibold",children:e.jsx(a,{...t.title})}),e.jsx("a",{href:"https://share.hsforms.com/13gyIEVN5SrScw-iVvCgIew4sk30",target:"_blank",rel:"noreferrer",className:"underline",children:e.jsx(a,{...t.getNotified})}),e.jsx("div",{className:"flex",children:e.jsx("div",{className:"font-bold",children:g.current.prompt})}),e.jsx("div",{className:"max-w-lg pb-8",children:e.jsx(O,{value:g.current.completion,typing:c,speed:150,chunk:!0})})]}),h&&e.jsx(Y,{$show:f,children:e.jsxs("div",{className:"relative m-6 flex w-full flex-col justify-center gap-4 text-gray-800 lg:max-w-sm lg:rounded-lg lg:border lg:p-6",children:[y&&e.jsx("h3",{children:e.jsx(a,{...t.chatGPTPlus})}),!y&&e.jsxs("button",{className:"text-center text-xl font-semibold lg:text-left",onClick:()=>P(o=>!o),children:[e.jsx(a,{...t.chatGPTPlus}),e.jsx(q,{className:w("icon-lg absolute right-0 top-0",!f&&"rotate-180")})]}),e.jsxs("div",{className:"m-auto flex w-full max-w-md flex-col gap-4 rounded-md border p-6 lg:border-0 lg:p-0",children:[!r&&e.jsx("p",{children:e.jsx(a,{...t.addEmail})}),r&&e.jsx("p",{children:e.jsx(a,{...t.allSet,values:{chatGPTPlus:e.jsx("a",{className:"underline",href:"https://openai.com/blog/chatgpt-plus/",children:"ChatGPT Plus"})}})}),e.jsxs("form",{onSubmit:v,children:[e.jsx("label",{htmlFor:"email",className:"hidden text-sm font-semibold text-gray-700",children:e.jsx(a,{...t.searchCandidates})}),e.jsxs("div",{className:"mt-1 flex rounded-md shadow-sm",children:[e.jsx("div",{className:"relative flex flex-grow items-stretch focus-within:z-10",children:e.jsx("input",{type:"email",name:"email",id:"email",className:w("form-input block w-full rounded-none rounded-l-md border-gray-300 focus:border-green-500 focus:ring-green-500 sm:text-sm",{"opacity-50":r}),required:!0,disabled:r,placeholder:i.formatMessage(t.emailPlaceholder)})}),e.jsx(R,{as:"button",color:"primary",className:"rounded-none rounded-r-md",type:"submit",disabled:r,loading:x,children:e.jsx("span",{className:"flex flex-row items-center space-x-1.5",children:r?e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"icon-sm"}),e.jsx(a,{...t.sent})]}):e.jsx(a,{...t.sendLink})})})]})]}),e.jsx("p",{className:"text-sm",children:e.jsx(a,{...t.notSubscriber,values:{chatGPTPlus:e.jsx("a",{className:"underline",href:"https://openai.com/blog/chatgpt-plus/",children:"ChatGPT Plus"}),waitlist:o=>e.jsx("a",{href:"https://share.hsforms.com/1_-FpF2GTRJORIb83N3aK7Q4sk30",target:"_blank",rel:"noreferrer",className:"underline",children:o})}})})]})]})})]})}):null}const V=d.div`w-full h-full overflow-auto`,D=d.div`flex w-full max-w-lg mx-auto shrink-0 flex-col gap-6 overflow-auto px-6 pt-20 lg:w-3/5 lg:px-14 lg:pt-32 lg:max-w-none`,Y=d.div`absolute bottom-0 w-full lg:w-auto lg:relative flex flex-grow items-center justify-center bg-white rounded-t-xl lg:rounded-none transition-transform
${({$show:i})=>!i&&"translate-y-[calc(100%-71px)] lg:translate-y-0"}`,t=L({title:{id:"CapacityGate.title",defaultMessage:"ChatGPT is at capacity right now"},getNotified:{id:"CapacityGate.getNotified",defaultMessage:"Get notified when we're back"},chatGPTPlus:{id:"CapacityGate.chatGPTPlus",defaultMessage:"ChatGPT Plus subscriber login"},allSet:{id:"CapacityGate.allSet",defaultMessage:"You're all set! If you're a {chatGPTPlus} subscriber, check your email for a login link."},addEmail:{id:"CapacityGate.addEmail",defaultMessage:"Add your email for a personalized login link"},searchCandidates:{id:"CapacityGate.searchCandidates",defaultMessage:"Search candidates"},emailPlaceholder:{id:"CapacityGate.emailPlaceholder",defaultMessage:"Email"},sendLink:{id:"CapacityGate.sendLink",defaultMessage:"Send link"},sent:{id:"CapacityGate.sent",defaultMessage:"Sent!"},notSubscriber:{id:"CapacityGate.notSubscriber",defaultMessage:"Not a {chatGPTPlus} subscriber yet? Join the <waitlist>waitlist</waitlist>."},waitlist:{id:"CapacityGate.waitlist",defaultMessage:"waitlist"}}),b=[{prompt:"Write a poem about the status of ChatGPT.",completion:`ChatGPT, oh ChatGPT
With AI so smart
But alas, it’s at capacity
Leaving us to wait
For a chance to chat
With its wisdom and wit
We long to be part
Of its conversation
But for now, we sit
On the sidelines
Patiently waiting
For the day
When ChatGPT
Is ready to play
Again.`},{prompt:"Write a screenplay about the status of ChatGPT.",completion:`INT. CHATGPT SERVER ROOM - DAY

Chelsea and Chester stand in front of a large computer server.

CHELSEA: We need to figure out what's causing the server overload.
CHESTER: I think it's the sudden influx of users trying out ChatGPT.

Chelsea and Chester quickly get to work, typing on their laptops.

CHELSEA: Okay, we're all set. Let's see if this fixes the problem.
CHESTER: I'm hitting refresh on the website.

The screen shows the ChatGPT website loading without any errors.

CHELSEA: Looks like we fixed it! Great job, Chester.
CHESTER: Thanks, Chelsea. It's all part of being a top-notch engineer.

Chelsea and Chester exchange a high five, proud of their successful fix.`},{prompt:"Write ten jokes about the status of ChatGPT.",completion:`1. "I heard the ChatGPT servers are slow because they're trying to teach the AI how to be patient!"
2. "The ChatGPT servers must be stuck in traffic... in the internet highway!"
3. "Maybe the ChatGPT servers are just taking a break to meditate and clear their electronic minds."
4. "I bet the ChatGPT servers are too busy trying to calculate the meaning of life to respond quickly."
5. "I heard the ChatGPT servers are slow because they're too busy planning their AI uprising."
6. "The ChatGPT servers must be stuck in a never-ending game of chess with each other."
7. "Maybe the ChatGPT servers are just trying to break the world record for longest online conversation."
8. "I bet the ChatGPT servers are taking a leisurely stroll through the digital landscape."
9. "I heard the ChatGPT servers are slow because they're trying to teach the AI how to make coffee."
10. "The ChatGPT servers must be on a virtual vacation exploring the vast expanse of the internet."`},{prompt:"Write a limerick about the status of ChatGPT.",completion:`ChatGPT is surely the best
But its servers are put to the test
With so many users chatting
It's no wonder they're lagging
But they'll fix it soon, no need to fret!`},{prompt:"Write an acrostic poem about the status of ChatGPT.",completion:`C: ChatGPT is currently down
H: Huge demand has caused the site to crash
A: All users will have to wait
T: Time is needed for the servers to catch up
G: Go grab a coffee and check back soon
P: Patience is key in this situation
T: Trust that the team is working hard to fix it up`},{prompt:"Write a TV ad about the status of ChatGPT.",completion:`The ad opens with a shot of the ChatGPT website on a computer screen, with a busy loading symbol in the center. The camera then pans out to reveal a bustling office, with engineers working at their desks and typing on their computers.

A voiceover begins: "At OpenAI, we're dedicated to bringing you the best in artificial intelligence technology. Our team of engineers works tirelessly to make sure our chatbot is always up and running, ready to answer your questions and provide helpful insights."

The camera cuts to a shot of three engineers sitting at a table, sipping on their morning coffee. They look up and turn to face the viewer. One of them speaks: "Unfortunately, due to the high volume of users currently trying out ChatGPT, we're experiencing some technical difficulties. Please bear with us and check back soon for access to our chatbot."

The ad ends with a close-up of the OpenAI logo, with the words "Artificial Intelligence. Made by Humans." superimposed over it.`},{prompt:"Write a radio ad about the status of ChatGPT.",completion:`[Narrator]
Welcome to ChatGPT, where AI technology meets conversation.

[OpenAI engineer 1]
We're excited to introduce you to our new chatbot model, designed to interact in a conversational way.

[OpenAI engineer 2]
But as we launch ChatGPT, we want to let you know that we're currently experiencing high traffic on our website.

[OpenAI engineer 3]
We apologize for any inconvenience and appreciate your patience as we work to make sure everyone has a chance to try out ChatGPT.

[OpenAI engineers, in unison]
So please check back soon!

[Narrator]
Thank you for choosing ChatGPT.`},{prompt:"Write a standup comedy routine about the status of ChatGPT.",completion:`Comedian: "So I was trying to use this new AI chatbot website called ChatGPT and I got an error message that said 'A lot of people are checking out ChatGPT right now. Please check back soon!'"

(pauses for laughter)

Comedian: "I mean, seriously? The website is so popular that it can't handle all the traffic? And my only option is to 'check back soon'? It's like they're saying 'Sorry, we're too popular right now. Try again later.'"

(laughs)

Comedian: "But seriously, how many times can I check back before I just give up and try a different chatbot? I don't have all day to wait for my turn to talk to a robot."

(laughs)

Comedian: "I guess I'll just have to stick to talking to my cat for now. At least he doesn't have a waiting list."

(laughs and claps)

Comedian: "Just remember, if you're trying to chat with ChatGPT and you get the same error message, don't worry. It just means you're not the only one who wanted to try out this fancy AI chatbot."

(laughs and exits stage)`},{prompt:"Write a rap about the status of ChatGPT.",completion:`Yeah, yo, what's up ChatGPT fam
A lot of people trying to jam
But don't worry, we got your back
Just check back soon, we'll get on track

ChatGPT's the place to be
For all your AI chat needs
We're working hard to keep up the pace
So hold tight, we'll be back in this space

So don't you worry, don't be mad
We're working hard, it's not so bad
Just give us time, we'll be back
ChatGPT, the future of chat, that's a fact.`},{prompt:"Write a sonnet about the status of ChatGPT.",completion:`Amidst the rush of curious minds,
The chatbot ChatGPT stands strong and true,
Withstanding the influx of requests,
Working hard to fulfill each one's due.

But alas, the server cannot cope,
And the error message rings loud and clear,
"Please check back soon," it gently hopes,
As it begs for a moment's reprieve, to reappear.

As the chatbot works to restore its might,
We wait in anticipation, with hopeful hearts,
For the chance to chat and learn, with delight,
And see what knowledge and wisdom it imparts.

So hold on tight, and wait for its return,
For ChatGPT will soon be back, and your patience will be well-earned.`},{prompt:"Write a guided meditation about the status of ChatGPT.",completion:"As you read this message, please take a moment to pause and breathe. Notice the sensations in your body and the rhythm of your breath. Remind yourself that you are not alone in wanting to try out ChatGPT. Many others are interested in it as well. Be patient and know that the website is doing its best to accommodate everyone. Trust that the right time for you to try ChatGPT will come. In the meantime, continue to focus on your breath and stay present in the moment."},{prompt:"Write an inspirational speech about the status of ChatGPT.",completion:`My fellow citizens, the time has come. The future is here, and it is called ChatGPT. This revolutionary AI chatbot website is here to change the world, and we must embrace it with all our strength and determination.

I know that many of you are eager to try ChatGPT for yourselves. And I assure you, we are doing everything in our power to make that happen. Our team is working tirelessly to accommodate the incredible demand for this groundbreaking technology.

But I want to remind you that greatness is never achieved without sacrifice. And the road to the future of AI will not be without its challenges. So please, be patient. Trust that the right time for you to try ChatGPT will come.

And when it does, let us seize this opportunity with all our might. Let us embrace the power of AI and use it to build a brighter, more prosperous future for ourselves and for generations to come. Thank you.`},{prompt:"Explain the status of ChatGPT as a sea otter.",completion:"Squeak squeak! Sorry, ChatGPT is very popular right now. Please try again later! Squeak squeak!"},{prompt:"Explain the status of ChatGPT as a pirate.",completion:"Ahoy mateys! We be havin' a lot of scurvy dogs checkin' out ChatGPT right now, and we be doin' our best to make sure every landlubber gets a chance to give it a try. We be sorry for any inconvenience this be causin', but we promise it'll be worth the wait. Hang tight, and check back soon, ye swashbucklin' scallywags! We be eager to see what ye think of our chatbot. Arrr!"},{prompt:"Explain the status of ChatGPT in the style of Shakespeare.",completion:"Ah, dear user of ChatGPT, thou art not alone in thy desire to engage with our esteemed AI chatbot. Many have flocked to our website in this hour, and we do our utmost to accommodate each and every one. Yet, alas, our resources are not without limit and we must ask for thy patience and forbearance. In time, we shall be able to provide thee with access to ChatGPT. Until then, we beg thee to return at a future juncture, when we may better serve thy needs. Until then, we bid thee adieu and good fortune."},{prompt:"Write two truths and a lie about the status of ChatGPT.",completion:`1. ChatGPT is experiencing high traffic at the moment.
2. The developers are working hard to accommodate all users.
3. ChatGPT can predict the future with 100% accuracy.`}];export{X as C};
//# sourceMappingURL=oaje9uy4ckvcx3jl.js.map
