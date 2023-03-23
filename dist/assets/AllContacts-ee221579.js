import{C as d}from"./contactService-f5c0030f.js";import{S as x}from"./Spinner-0d49dfd8.js";import{r as m,_ as y,e as b,b as n,c as r,d as e,f as u,w as g,g as f,t as p,F as v,h as k,i as w,j as C}from"./index-d523d528.js";const A={components:{Spinner:x},setup(){let s=m(!1),l=m([]),i=m();async function t(){try{s.value=!0;let a=await d.getAllContacts();l.value=a.data,s.value=!1}catch(a){i.value=a,s.value=!1}}t();async function h(){return await d.getAllContacts()}async function _(a){try{if(s.value=!0,await d.deleteContact(a)){let o=await d.getAllContacts();l.value=o.data,s.value=!1}}catch(c){i.value=c,s.value=!1}}return{loading:s,contacts:l,errorMessage:i,getAllData:t,getAllContactsData:h,deleteContact:_}}},S={class:"h-full"},N={class:"p-5"},V={class:"flex"},B=e("p",{class:"self-center text-xl font-medium italic text-slate-50"}," All Contacts ",-1),M=e("span",{class:"relative italic pr-5 pl-2 py-2 transition-all ease-in duration-75 bg-darkContents rounded-md group-hover:bg-opacity-0"},[e("i",{class:"fa-solid fa-circle-plus fa-beat-fade px-3"}),C("Add ")],-1),z=w('<div><p class="text-left text-gray-500 dark:text-gray-400 italic"> Contact management tools let you store the contact information of your friends, colleagues, vendors, and acquaintances in an organized manner. Using these apps, you can filter and categorize contacts and manage communications.Are you looking for a free contact management tool that’ll help you become more productive and speed up the communication process? If yes, then Pobuca Connect is the app for you. It lets you store all your contacts under a single umbrella. </p></div><div class="flex my-5"><div class="relative"><input type="text" id="small_outlined" class="block px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent text-slate-300 rounded-lg border-2 italic border-fuchsia-600 appearance-none focus:outline-none focus:ring-0 focus:border-fuchsia-800 peer" placeholder=" "><label for="small_outlined" class="absolute italic text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-darkContents px-2 peer-focus:px-2 peer-focus:text-fuchsia-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1">Search...</label></div></div>',2),D={key:0},L={key:1,class:"absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"},j={class:"self-center text-3xl font-semibold italic text-red-600"},q={key:2,class:"absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"},E=e("p",{class:"self-center text-3xl font-semibold italic text-red-600"}," Contacts are not available yet... ",-1),F=[E],I={key:3,class:"grid gap-4 grid-cols-2"},R={class:""},P=["src"],T={class:"my-2 ml-10 bg-darkContents border border-transparent min-w-72 rounded-lg"},U={class:"flex border-b border-fuchsia-600 py-2 px-10"},G=e("span",{class:"tracking-normal text-slate-400 font-normal"}," Email : ",-1),H={class:"pl-3 tracking-normal text-slate-200 font-medium"},J={class:"flex border-b border-fuchsia-600 py-2 px-10"},K=e("span",{class:"tracking-normal text-slate-400 font-normal"}," Name : ",-1),O={class:"pl-3 tracking-normal text-slate-200 font-medium"},Q={class:"flex py-2 px-10 border-b border-fuchsia-600"},W=e("span",{class:"tracking-normal text-slate-400 font-normal"}," Mobile : ",-1),X={class:"pl-3 tracking-normal text-slate-200 font-medium"},Y={class:"mx-5"},Z=e("button",{type:"button",class:"text-white w-12 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2"},[e("i",{class:"fa-solid fa-pen-to-square fa-beat-fade"})],-1),$=e("button",{type:"button",class:"text-gray-900 w-12 bg-gradient-to-r my-1.5 from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2"},[e("i",{class:"fa-solid fa-eye fa-beat-fade"})],-1),ee=["onClick"],te=e("i",{class:"fa-solid fa-trash fa-beat-fade"},null,-1),oe=[te];function ae(s,l,i,t,h,_){const a=b("RouterLink"),c=b("Spinner");return n(),r("div",S,[e("main",N,[e("div",V,[B,u(a,{to:"/contact/add",class:"self-center relative mx-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-purple-800"},{default:g(()=>[M]),_:1})]),z,t.loading?(n(),r("div",D,[u(c)])):f("",!0),!t.loading&&t.errorMessage?(n(),r("div",L,[e("p",j,p(t.errorMessage),1)])):f("",!0),t.contacts.length===0?(n(),r("div",q,F)):f("",!0),t.contacts.length>0?(n(),r("div",I,[(n(!0),r(v,null,k(t.contacts,o=>(n(),r("div",{key:o,class:"flex bg-darkBars p-5 border-2 border-transparent rounded-lg items-center shadow-md shadow-fuchsia-900"},[e("div",R,[e("img",{src:o.photo,class:"max-h-24 border-1 border-transparent rounded-full",alt:""},null,8,P)]),e("div",null,[e("ul",T,[e("li",U,[G,e("span",H,p(o.email),1)]),e("li",J,[K,e("span",O,p(o.name),1)]),e("li",Q,[W,e("span",X,p(o.mobile),1)])])]),e("div",Y,[e("ul",null,[e("li",null,[u(a,{to:`/contact/edit/${o.id}`},{default:g(()=>[Z]),_:2},1032,["to"])]),e("li",null,[u(a,{to:`/contact/read/${o.id}`},{default:g(()=>[$]),_:2},1032,["to"])]),e("li",null,[e("button",{onClick:se=>t.deleteContact(o.id),type:"button",class:"text-white w-12 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mr-2"},oe,8,ee)])])])]))),128))])):f("",!0)])])}const ie=y(A,[["render",ae]]);export{ie as default};
