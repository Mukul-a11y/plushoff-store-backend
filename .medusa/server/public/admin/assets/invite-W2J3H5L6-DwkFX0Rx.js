import{A as U}from"./chunk-Q6MSICBU-Dgjieu86.js";import{a2 as C,a4 as n,aF as D,an as M,a0 as k,r as A,j as e,at as W,au as f,b as x,H as h,T as v,a8 as Z,a9 as $,ff as q,t as G,e9 as J,w as t,x as m,E as K,B as T,L as p,af as S}from"./index-B_XJjnU1.js";import{d as O}from"./chunk-NAC6TXKN-jzlpJJaF.js";import{l as Q}from"./index.modern-DSRWd1rU.js";import{A as X}from"./alert-BhxF964s.js";import"./chunk-EQTBJSBZ-CRsJ9Tuo.js";import"./x-mark-mini-56jHbCTO.js";var Y=C({email:n().email(),first_name:n().min(1),last_name:n().min(1),password:n().min(1),repeat_password:n().min(1)}).superRefine(({password:s,repeat_password:l},o)=>{s!==l&&o.addIssue({code:D.custom,message:M.t("invite.passwordMismatch"),path:["repeat_password"]})}),xe=()=>{const[s]=k(),[l,o]=A.useState(!1),a=s.get("token"),c=a?Q(a):null,u=c&&ie(c);return e.jsx("div",{className:"bg-ui-bg-subtle relative flex min-h-dvh w-dvw items-center justify-center p-4",children:e.jsxs("div",{className:"flex w-full max-w-[360px] flex-col items-center",children:[e.jsx(U,{checked:l}),e.jsx("div",{className:"max-h-[557px] w-full will-change-contents",children:u?e.jsx(W,{children:l?e.jsx(f.div,{initial:{opacity:0,scale:.4},animate:{opacity:1,scale:1},transition:{duration:1,delay:.6,ease:[0,.71,.2,1.01]},className:"w-full",children:e.jsx(te,{})},"success-view"):e.jsx(f.div,{initial:!1,animate:{height:"557px",y:0},exit:{height:0,y:40},transition:{duration:.8,delay:.6,ease:[0,.71,.2,1.01]},className:"w-full will-change-transform",children:e.jsx(f.div,{initial:!1,animate:{opacity:1,scale:1},exit:{opacity:0,scale:.7},transition:{duration:.6,delay:0,ease:[0,.71,.2,1.01]},children:e.jsx(se,{onSuccess:()=>o(!0),token:a,invite:c})},"inner-create-account")},"create-account")}):e.jsx(ee,{})})]})})},E=()=>{const{t:s}=x();return e.jsxs("div",{className:"flex w-full flex-col items-center",children:[e.jsx("div",{className:"my-6 h-px w-full border-b border-dotted"}),e.jsx(p,{to:"/login",className:"txt-small text-ui-fg-base transition-fg hover:text-ui-fg-base-hover focus-visible:text-ui-fg-base-hover font-medium outline-none",children:s("invite.backToLogin")},"login-link")]})},ee=()=>{const{t:s}=x();return e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsxs("div",{className:"flex flex-col items-center gap-y-1",children:[e.jsx(h,{children:s("invite.invalidTokenTitle")}),e.jsx(v,{size:"small",className:"text-ui-fg-subtle text-center",children:s("invite.invalidTokenHint")})]}),e.jsx(E,{})]})},se=({onSuccess:s,token:l,invite:o})=>{var b,w,N,y,_,I;const{t:a}=x(),[c,u]=A.useState(!1),[F]=k(),P=F.get("first_run")==="true",i=Z({resolver:$(Y),defaultValues:{email:P?"":o.email||"",first_name:"",last_name:"",password:"",repeat_password:""}}),{mutateAsync:L,isPending:H}=q(),{mutateAsync:V,isPending:z}=O(l),B=i.handleSubmit(async r=>{try{const d=await L({email:r.email,password:r.password}),R={email:r.email,first_name:r.first_name,last_name:r.last_name};await V({...R,auth_token:d}),G.success(a("invite.toast.accepted")),s()}catch(d){if(J(d)&&d.status===400){i.setError("root",{type:"manual",message:a("invite.invalidInvite")}),u(!0);return}i.setError("root",{type:"manual",message:a("errors.serverError")})}}),g=(b=i.formState.errors.root)==null?void 0:b.message,j=((w=i.formState.errors.email)==null?void 0:w.message)||((N=i.formState.errors.password)==null?void 0:N.message)||((y=i.formState.errors.repeat_password)==null?void 0:y.message)||((_=i.formState.errors.first_name)==null?void 0:_.message)||((I=i.formState.errors.last_name)==null?void 0:I.message);return e.jsxs("div",{className:"flex w-full flex-col items-center",children:[e.jsxs("div",{className:"mb-4 flex flex-col items-center",children:[e.jsx(h,{children:a("invite.title")}),e.jsx(v,{size:"small",className:"text-ui-fg-subtle text-center",children:a("invite.hint")})]}),e.jsx(t,{...i,children:e.jsxs("form",{onSubmit:B,className:"flex w-full flex-col gap-y-6",children:[e.jsxs("div",{className:"flex flex-col gap-y-2",children:[e.jsx(t.Field,{control:i.control,name:"email",render:({field:r})=>e.jsx(t.Item,{children:e.jsx(t.Control,{children:e.jsx(m,{autoComplete:"off",...r,className:"bg-ui-bg-field-component",placeholder:a("fields.email")})})})}),e.jsx(t.Field,{control:i.control,name:"first_name",render:({field:r})=>e.jsx(t.Item,{children:e.jsx(t.Control,{children:e.jsx(m,{autoComplete:"given-name",...r,className:"bg-ui-bg-field-component",placeholder:a("fields.firstName")})})})}),e.jsx(t.Field,{control:i.control,name:"last_name",render:({field:r})=>e.jsx(t.Item,{children:e.jsx(t.Control,{children:e.jsx(m,{autoComplete:"family-name",...r,className:"bg-ui-bg-field-component",placeholder:a("fields.lastName")})})})}),e.jsx(t.Field,{control:i.control,name:"password",render:({field:r})=>e.jsx(t.Item,{children:e.jsx(t.Control,{children:e.jsx(m,{autoComplete:"new-password",type:"password",...r,className:"bg-ui-bg-field-component",placeholder:a("fields.password")})})})}),e.jsx(t.Field,{control:i.control,name:"repeat_password",render:({field:r})=>e.jsx(t.Item,{children:e.jsx(t.Control,{children:e.jsx(m,{autoComplete:"off",type:"password",...r,className:"bg-ui-bg-field-component",placeholder:a("fields.repeatPassword")})})})}),j&&e.jsx("div",{className:"mt-6 text-center",children:e.jsx(K,{className:"inline-flex",variant:"error",children:j})}),g&&e.jsx(X,{className:"bg-ui-bg-base items-center p-2",dismissible:!0,variant:"error",children:g})]}),e.jsx(T,{className:"w-full",type:"submit",isLoading:H||z,disabled:c,children:a("invite.createAccount")})]})}),e.jsx(E,{})]})},te=()=>{const{t:s}=x();return e.jsxs("div",{className:"flex w-full flex-col items-center gap-y-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-y-1",children:[e.jsx(h,{className:"text-center",children:s("invite.successTitle")}),e.jsx(v,{size:"small",className:"text-ui-fg-subtle text-center",children:s("invite.successHint")})]}),e.jsx(T,{variant:"secondary",asChild:!0,className:"w-full",children:e.jsx(p,{to:"/login",replace:!0,children:s("invite.successAction")})}),e.jsx(p,{to:"/login",className:"txt-small text-ui-fg-base transition-fg hover:text-ui-fg-base-hover focus-visible:text-ui-fg-base-hover font-medium outline-none",children:s("invite.backToLogin")},"login-link")]})},ae=C({id:n(),jti:n(),exp:S(),iat:S()}),ie=s=>ae.safeParse(s).success;export{xe as Component};
