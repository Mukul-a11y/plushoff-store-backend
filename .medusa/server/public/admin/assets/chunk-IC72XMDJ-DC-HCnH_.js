import{j as r,L as c,aZ as u,T as x,cL as f}from"./index-B_XJjnU1.js";var m=({id:s,first_name:e,last_name:n,email:a,type:o="user"})=>{const t=[e,n].filter(Boolean).join(" "),i=t?t.slice(0,1):a.slice(0,1),l=o==="user"?`/settings/users/${s}`:`/customers/${s}`;return r.jsxs(c,{to:l,className:"flex items-center gap-x-2 w-fit transition-fg hover:text-ui-fg-subtle outline-none focus-visible:shadow-borders-focus rounded-md",children:[r.jsx(u,{size:"2xsmall",fallback:i.toUpperCase()}),r.jsx(x,{size:"small",leading:"compact",weight:"regular",children:t||a})]})},g=({id:s})=>{const{user:e}=f(s);return e?r.jsx(m,{...e}):null};export{g as B,m as U};
