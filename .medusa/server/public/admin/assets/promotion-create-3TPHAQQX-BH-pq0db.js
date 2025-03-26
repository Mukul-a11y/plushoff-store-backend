import{D as me}from"./chunk-YRY2CZ6I-r6KmqnKa.js";import{A as pe}from"./chunk-TJY3W2YI-Cz_6mSJ_.js";import{R as T}from"./chunk-BBQEC2BG-RbHXNdpm.js";import{C as ue,D as Z}from"./chunk-JRTCS7RP-BQhnvizd.js";import{g as he}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{a6 as i,j as e,r as _,b as xe,a8 as fe,a9 as ge,d2 as ye,t as q,v as g,d3 as je,w as o,H as _e,Y as be,m,x as ee,T as B,D as E,B as A}from"./index-B_XJjnU1.js";import"./chunk-3LLQ6F7F-D7KC-80M.js";import{K as ve}from"./chunk-6HTZNHPT-uMOImRQt.js";import{R as y,u as Ce}from"./chunk-JGQGO74V-DkKGx5VI.js";import{T as M}from"./Trans-C4J5Sdfr.js";import{P as x}from"./progress-tabs-DyWK44iE.js";import{R as d}from"./radio-group-UeHpnjBU.js";import{A as Ne}from"./alert-BhxF964s.js";import{C as we}from"./currency-input-D5SkJ5sr.js";import"./index.esm-BwxXBw4d.js";import"./chunk-UGE5SYTC-BUuVO53m.js";import"./textarea-CdpC2vxo.js";import"./date-picker-CVPtNgxS.js";import"./popover-C6eQRaTF.js";import"./index-Dh9W5nfg.js";import"./x-mark-mini-56jHbCTO.js";import"./triangle-left-mini-yhHgWNe2.js";import"./select-DQrF6oeb.js";import"./triangles-mini-D3pVyvtU.js";import"./check-CKkniN9G.js";import"./chunk-F6ZOHZVB-BFV_9IYO.js";import"./plus-mini-s9Rv_4_q.js";import"./prompt-BURHT4LZ.js";import"./index-BqpW1ZYQ.js";var z=i.array(i.object({id:i.string().optional(),attribute:i.string().min(1,{message:"Required field"}),operator:i.string().min(1,{message:"Required field"}),values:i.union([i.number().min(1,{message:"Required field"}),i.string().min(1,{message:"Required field"}),i.array(i.string()).min(1,{message:"Required field"})]),required:i.boolean().optional(),disguised:i.boolean().optional(),field_type:i.string().optional()})),Fe=i.object({template_id:i.string().optional(),campaign_id:i.string().optional(),campaign_choice:i.enum(["none","existing","new"]).optional(),is_automatic:i.string().toLowerCase(),code:i.string().min(1),type:i.enum(["buyget","standard"]),status:i.enum(["draft","active","inactive"]),rules:z,application_method:i.object({allocation:i.enum(["each","across"]),value:i.number().min(0),currency_code:i.string().optional(),max_quantity:i.number().optional().nullable(),target_rules:z,buy_rules:z,type:i.enum(["fixed","percentage"]),target_type:i.enum(["order","shipping_methods","items"])}),campaign:ue.optional()}).refine(f=>f.application_method.allocation==="across"?!0:f.application_method.allocation==="each"&&typeof f.application_method.max_quantity=="number",{path:["application_method.max_quantity"],message:"required field"}),b=["type","application_method.type","application_method.allocation"],L=[{id:"amount_off_products",type:"standard",title:"Amount off products",description:"Discount specific products or collection of products",hiddenFields:[...b],defaults:{is_automatic:"false",type:"standard",application_method:{allocation:"each",target_type:"items",type:"fixed"}}},{id:"amount_off_order",type:"standard",title:"Amount off order",description:"Discounts the total order amount",hiddenFields:[...b],defaults:{is_automatic:"false",type:"standard",application_method:{allocation:"across",target_type:"order",type:"fixed"}}},{id:"percentage_off_product",type:"standard",title:"Percentage off product",description:"Discounts a percentage off selected products",hiddenFields:[...b],defaults:{is_automatic:"false",type:"standard",application_method:{allocation:"each",target_type:"items",type:"percentage"}}},{id:"percentage_off_order",type:"standard",title:"Percentage off order",description:"Discounts a percentage of the total order amount",hiddenFields:[...b],defaults:{is_automatic:"false",type:"standard",application_method:{allocation:"across",target_type:"order",type:"percentage"}}},{id:"buy_get",type:"buy_get",title:"Buy X Get Y",description:"Buy X product(s), get Y product(s)",hiddenFields:[...b,"application_method.value"],defaults:{is_automatic:"false",type:"buyget",application_method:{type:"percentage",value:100,apply_to_quantity:1,max_quantity:1}}}],te={campaign_id:void 0,template_id:L[0].id,campaign_choice:"none",is_automatic:"false",code:"",type:"standard",status:"draft",rules:[],application_method:{allocation:"each",type:"fixed",target_type:"items",max_quantity:1,target_rules:[],buy_rules:[]},campaign:void 0},Re=()=>{var U,$,G,Y;const[f,v]=_.useState("type"),[F,C]=_.useState({type:"in-progress",promotion:"not-started",campaign:"not-started"}),{t:a}=xe(),{handleSuccess:oe}=Ce(),s=fe({defaultValues:te,resolver:ge(Fe)}),{setValue:p,reset:P,getValues:k}=s,{mutateAsync:ae}=ye(),se=s.handleSubmit(async t=>{const{campaign_choice:r,is_automatic:n,template_id:u,application_method:h,rules:X,...le}=t,{target_rules:Q=[],buy_rules:W=[],...ce}=h,de=[...Q.filter(c=>!!c.disguised),...W.filter(c=>!!c.disguised),...X.filter(c=>!!c.disguised)],J={};for(const c of de)J[c.attribute]=c.field_type==="number"?parseInt(c.values):c.values;const S=c=>c.filter(j=>!j.disguised).map(j=>({operator:j.operator,attribute:j.attribute,values:j.values}));ae({...le,rules:S(X),application_method:{...ce,...J,target_rules:S(Q),buy_rules:S(W)},is_automatic:n==="true"},{onSuccess:({promotion:c})=>{q.success(a("promotions.toasts.promotionCreateSuccess",{code:c.code})),oe(`/promotions/${c.id}`)},onError:c=>{q.error(c.message)}})},async t=>{const{campaign:r,...n}=t||{};!!Object.keys(n||{}).length&&q.error(a("promotions.errors.promotionTabError"))}),R=async t=>{switch(t){case"type":C(r=>({...r,type:"in-progress"})),v(t);break;case"promotion":C(r=>({...r,type:"completed",promotion:"in-progress"})),v(t);break;case"campaign":{if(!await s.trigger()){C({type:"completed",promotion:"in-progress",campaign:"not-started"}),v("promotion");break}C(n=>({...n,promotion:"completed",campaign:"in-progress"})),v(t);break}}},ie=async()=>{switch(f){case"type":R("promotion");break;case"promotion":{await s.trigger()&&R("campaign");break}}},D=g({control:s.control,name:"template_id"}),l=_.useMemo(()=>{const t=L.find(r=>r.id===D);if(t){P({...te,template_id:D});for(const[r,n]of Object.entries(t.defaults))if(typeof n=="object")for(const[u,h]of Object.entries(n))p(`application_method.${u}`,h);else p(r,n);return t}},[D,p,P]),N=g({control:s.control,name:"application_method.type"})==="fixed",V=g({control:s.control,name:"application_method.allocation"});_.useEffect(()=>{V==="across"&&p("application_method.max_quantity",null)},[V,p]);const I=g({control:s.control,name:"type"})==="standard",re=g({control:s.control,name:"application_method.target_type"})==="order",K=s.getValues();let H={};N&&K.application_method.currency_code&&(H={budget:{currency_code:K.application_method.currency_code}});const{campaigns:ne}=je(H),w=g({control:s.control,name:"campaign_choice"});_.useEffect(()=>{var r,n;const t=k();w!=="existing"&&p("campaign_id",void 0),w!=="new"&&p("campaign",void 0),w==="new"&&(!t.campaign||!((n=(r=t.campaign)==null?void 0:r.budget)!=null&&n.type))&&p("campaign",{...Z,budget:{...Z.budget,currency_code:t.application_method.currency_code}})},[w,k,p]);const O=g({control:s.control,name:"rules"}).find(t=>t.attribute==="currency_code");if(O){const r=s.getValues().application_method.currency_code,n=O.values;!Array.isArray(n)&&r!==n&&s.setValue("application_method.currency_code",n)}return e.jsx(y.Form,{form:s,children:e.jsxs(ve,{className:"flex h-full flex-col",onSubmit:se,children:[e.jsxs(x,{value:f,onValueChange:t=>R(t),className:"flex h-full flex-col overflow-hidden",children:[e.jsx(y.Header,{children:e.jsx("div",{className:"flex w-full items-center justify-between gap-x-4",children:e.jsx("div",{className:"-my-2 w-full max-w-[600px] border-l",children:e.jsxs(x.List,{className:"grid w-full grid-cols-3",children:[e.jsx(x.Trigger,{className:"w-full",value:"type",status:F.type,children:a("promotions.tabs.template")}),e.jsx(x.Trigger,{className:"w-full",value:"promotion",status:F.promotion,children:a("promotions.tabs.details")}),e.jsx(x.Trigger,{className:"w-full",value:"campaign",status:F.campaign,children:a("promotions.tabs.campaign")})]})})})}),e.jsxs(y.Body,{className:"size-full overflow-hidden",children:[e.jsx(x.Content,{value:"type",className:"size-full overflow-y-auto",children:e.jsx("div",{className:"flex size-full flex-col items-center",children:e.jsx("div",{className:"w-full max-w-[720px] py-16",children:e.jsx(o.Field,{control:s.control,name:"template_id",render:({field:t})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:a("promotions.fields.type")}),e.jsx(o.Control,{children:e.jsx(d,{className:"flex-col gap-y-3",...t,onValueChange:t.onChange,children:L.map(r=>e.jsx(d.ChoiceBox,{value:r.id,label:r.title,description:r.description},r.id))},"template_id")}),e.jsx(o.ErrorMessage,{})]})})})})}),e.jsx(x.Content,{value:"promotion",className:"size-full overflow-y-auto",children:e.jsx("div",{className:"flex size-full flex-col items-center",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 py-16",children:[e.jsxs(_e,{level:"h1",className:"text-fg-base",children:[a("promotions.sections.details"),(l==null?void 0:l.title)&&e.jsx(be,{className:"ml-2 align-middle",color:"grey",size:"2xsmall",rounded:"full",children:l==null?void 0:l.title})]}),s.formState.errors.root&&e.jsx(Ne,{variant:"error",dismissible:!1,className:"text-balance",children:s.formState.errors.root.message}),e.jsx(o.Field,{control:s.control,name:"is_automatic",render:({field:t})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:a("promotions.form.method.label")}),e.jsx(o.Control,{children:e.jsxs(d,{className:"flex gap-y-3",...t,value:t.value,onValueChange:t.onChange,children:[e.jsx(d.ChoiceBox,{value:"false",label:a("promotions.form.method.code.title"),description:a("promotions.form.method.code.description"),className:m("basis-1/2")}),e.jsx(d.ChoiceBox,{value:"true",label:a("promotions.form.method.automatic.title"),description:a("promotions.form.method.automatic.description"),className:m("basis-1/2")})]})}),e.jsx(o.ErrorMessage,{})]})}),e.jsx(o.Field,{control:s.control,name:"status",render:({field:t})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:a("promotions.form.status.label")}),e.jsx(o.Control,{children:e.jsxs(d,{className:"flex gap-y-3",...t,value:t.value,onValueChange:t.onChange,children:[e.jsx(d.ChoiceBox,{value:"draft",label:a("promotions.form.status.draft.title"),description:a("promotions.form.status.draft.description"),className:m("basis-1/2")}),e.jsx(d.ChoiceBox,{value:"active",label:a("promotions.form.status.active.title"),description:a("promotions.form.status.active.description"),className:m("basis-1/2")})]})}),e.jsx(o.ErrorMessage,{})]})}),e.jsx("div",{className:"flex gap-y-4",children:e.jsx(o.Field,{control:s.control,name:"code",render:({field:t})=>e.jsxs(o.Item,{className:"basis-1/2",children:[e.jsx(o.Label,{children:a("promotions.form.code.title")}),e.jsx(o.Control,{children:e.jsx(ee,{...t,placeholder:"SUMMER15"})}),e.jsx(B,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:e.jsx(M,{t:a,i18nKey:"promotions.form.code.description",components:[e.jsx("br",{},"break")]})})]})})}),!((U=l==null?void 0:l.hiddenFields)!=null&&U.includes("type"))&&e.jsx(o.Field,{control:s.control,name:"type",render:({field:t})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:a("promotions.fields.type")}),e.jsx(o.Control,{children:e.jsxs(d,{className:"flex gap-y-3",...t,onValueChange:t.onChange,children:[e.jsx(d.ChoiceBox,{value:"standard",label:a("promotions.form.type.standard.title"),description:a("promotions.form.type.standard.description"),className:m("basis-1/2")}),e.jsx(d.ChoiceBox,{value:"buyget",label:a("promotions.form.type.buyget.title"),description:a("promotions.form.type.buyget.description"),className:m("basis-1/2")})]})}),e.jsx(o.ErrorMessage,{})]})}),e.jsx(E,{}),e.jsx(T,{form:s,ruleType:"rules"}),e.jsx(E,{}),!(($=l==null?void 0:l.hiddenFields)!=null&&$.includes("application_method.type"))&&e.jsx(o.Field,{control:s.control,name:"application_method.type",render:({field:t})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:a("promotions.fields.value_type")}),e.jsx(o.Control,{children:e.jsxs(d,{className:"flex gap-y-3",...t,onValueChange:t.onChange,children:[e.jsx(d.ChoiceBox,{value:"fixed",label:a("promotions.form.value_type.fixed.title"),description:a("promotions.form.value_type.fixed.description"),className:m("basis-1/2")}),e.jsx(d.ChoiceBox,{value:"percentage",label:a("promotions.form.value_type.percentage.title"),description:a("promotions.form.value_type.percentage.description"),className:m("basis-1/2")})]})}),e.jsx(o.ErrorMessage,{})]})}),e.jsxs("div",{className:"flex gap-x-2 gap-y-4",children:[!((G=l==null?void 0:l.hiddenFields)!=null&&G.includes("application_method.value"))&&e.jsx(o.Field,{control:s.control,name:"application_method.value",render:({field:{onChange:t,value:r,...n}})=>{const u=s.getValues().application_method.currency_code;return e.jsxs(o.Item,{className:"basis-1/2",children:[e.jsx(o.Label,{tooltip:u||!N?void 0:a("promotions.fields.amount.tooltip"),children:a("promotions.form.value.title")}),e.jsx(o.Control,{children:N?e.jsx(we,{...n,min:0,onValueChange:h=>{t(h?parseInt(h):"")},code:u||"USD",symbol:u?he(u):"$",value:r,disabled:!u}):e.jsx(me,{className:"text-right",min:0,max:100,...n,value:r,onChange:h=>{t(h.target.value===""?null:parseInt(h.target.value))}},"amount")}),e.jsx(B,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:e.jsx(M,{t:a,i18nKey:N?"promotions.form.value_type.fixed.description":"promotions.form.value_type.percentage.description",components:[e.jsx("br",{},"break")]})}),e.jsx(o.ErrorMessage,{})]})}}),I&&V==="each"&&e.jsx(o.Field,{control:s.control,name:"application_method.max_quantity",render:({field:t})=>e.jsxs(o.Item,{className:"basis-1/2",children:[e.jsx(o.Label,{children:a("promotions.form.max_quantity.title")}),e.jsx(o.Control,{children:e.jsx(ee,{...s.register("application_method.max_quantity",{valueAsNumber:!0}),type:"number",min:1,placeholder:"3"})}),e.jsx(B,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:e.jsx(M,{t:a,i18nKey:"promotions.form.max_quantity.description",components:[e.jsx("br",{},"break")]})})]})})]}),I&&!((Y=l==null?void 0:l.hiddenFields)!=null&&Y.includes("application_method.allocation"))&&e.jsx(o.Field,{control:s.control,name:"application_method.allocation",render:({field:t})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:a("promotions.fields.allocation")}),e.jsx(o.Control,{children:e.jsxs(d,{className:"flex gap-y-3",...t,onValueChange:t.onChange,children:[e.jsx(d.ChoiceBox,{value:"each",label:a("promotions.form.allocation.each.title"),description:a("promotions.form.allocation.each.description"),className:m("basis-1/2")}),e.jsx(d.ChoiceBox,{value:"across",label:a("promotions.form.allocation.across.title"),description:a("promotions.form.allocation.across.description"),className:m("basis-1/2")})]})}),e.jsx(o.ErrorMessage,{})]})}),!I&&e.jsx(e.Fragment,{children:e.jsx(T,{form:s,ruleType:"buy-rules",scope:"application_method.buy_rules"})}),!re&&e.jsxs(e.Fragment,{children:[e.jsx(E,{}),e.jsx(T,{form:s,ruleType:"target-rules",scope:"application_method.target_rules"})]})]})})}),e.jsx(x.Content,{value:"campaign",className:"size-full overflow-auto",children:e.jsx("div",{className:"flex flex-col items-center",children:e.jsx("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 py-16",children:e.jsx(pe,{form:s,campaigns:ne||[]})})})})]})]}),e.jsx(y.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(y.Close,{asChild:!0,children:e.jsx(A,{variant:"secondary",size:"small",children:a("actions.cancel")})}),f==="campaign"?e.jsx(A,{type:"submit",size:"small",isLoading:!1,children:a("actions.save")},"save-btn"):e.jsx(A,{type:"button",onClick:ie,size:"small",children:a("actions.continue")},"continue-btn")]})})]})})},nt=()=>e.jsx(y,{children:e.jsx(Re,{})});export{nt as Component};
