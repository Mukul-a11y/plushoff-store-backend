import{u as M,a as B,b as H}from"./chunk-NOAFLTPV-BBt3tMB5.js";import{G as F}from"./chunk-PYIO3TDQ-D8Zv8hXV.js";import{u as V,_ as q}from"./chunk-X3LH6P65-Bb7tdxMW.js";import{C as T}from"./chunk-X5VECN6S-jdFyTz2N.js";import{a6 as p,b as N,y as K,j as e,w as d,B as v,r as x,cI as Q}from"./index-B_XJjnU1.js";import{S as i,a as X}from"./chunk-JGQGO74V-DkKGx5VI.js";import{C as E}from"./checkbox-C2uMx0DL.js";import{c as J}from"./index-BxsFvris.js";p.object({countries:p.array(p.object({iso_2:p.string().min(2),display_name:p.string()}))});var U=({form:o})=>{const t=o,{t:s}=N(),{fields:n,remove:f,replace:g}=K({control:t.control,name:"countries",keyName:"iso_2"}),y=()=>{g([])};return P(o),e.jsx(d.Field,{control:o.control,name:"countries",render:()=>e.jsxs(d.Item,{children:[e.jsxs("div",{className:"flex items-center justify-between gap-x-4",children:[e.jsxs("div",{children:[e.jsx(d.Label,{children:s("stockLocations.serviceZones.manageAreas.label")}),e.jsx(d.Hint,{children:s("stockLocations.serviceZones.manageAreas.hint")})]}),e.jsx(i.Trigger,{asChild:!0,children:e.jsx(v,{size:"small",variant:"secondary",type:"button",children:s("stockLocations.serviceZones.manageAreas.action")})})]}),e.jsx(d.ErrorMessage,{}),e.jsx(d.Control,{className:"mt-0",children:n.length>0&&e.jsx(T,{onClearAll:y,onRemove:f,className:"py-4",children:n.map((u,m)=>e.jsx(T.Chip,{index:m,children:u.display_name},u.iso_2))})})]})})},_="ac",C=50,W=({form:o})=>{const t=o,{t:s}=N(),{getValues:n,setValue:f}=t,{setIsOpen:g,getIsOpen:y}=X(),u=y(F),[m,S]=x.useState({}),[Z,b]=x.useState([]),{searchParams:z,raw:D}=M({pageSize:C,prefix:_}),{countries:h,count:k}=B({countries:Q.map(a=>({display_name:a.display_name,name:a.name,iso_2:a.iso_2,iso_3:a.iso_3,num_code:a.num_code})),...z});x.useEffect(()=>{if(!u)return;const a=n("countries");a&&(b(a.map(r=>({iso_2:r.iso_2,display_name:r.display_name}))),S(a.reduce((r,j)=>({...r,[j.iso_2]:!0}),{})))},[u,n]);const G=a=>{const r=typeof a=="function"?a(m):a,j=Object.keys(r),w=new Set(j.filter(l=>r[l]&&!m[l])),I=[];if(w.size>0){const l=(h==null?void 0:h.filter(c=>w.has(c.iso_2)))??[];for(const c of l)I.push({iso_2:c.iso_2,display_name:c.display_name})}b(l=>{const c=l.filter(L=>r[L.iso_2]);return Array.from(new Set([...c,...I]))}),S(r)},O=()=>{f("countries",Z,{shouldDirty:!0,shouldTouch:!0}),g(F,!1)},A=$(),{table:R}=V({data:h||[],columns:A,count:k,enablePagination:!0,enableRowSelection:!0,getRowId:a=>a.iso_2,pageSize:C,rowSelection:{state:m,updater:G},prefix:_});return P(o),e.jsxs(i.Content,{className:"flex flex-col overflow-hidden",children:[e.jsxs(i.Header,{children:[e.jsx(i.Title,{asChild:!0,children:e.jsx("span",{className:"sr-only",children:s("stockLocations.serviceZones.manageAreas.label")})}),e.jsx(i.Description,{asChild:!0,children:e.jsx("span",{className:"sr-only",children:s("stockLocations.serviceZones.manageAreas.hint")})})]}),e.jsx(i.Body,{className:"flex-1 overflow-hidden",children:e.jsx(q,{table:R,columns:A,pageSize:C,count:k,search:!0,pagination:!0,layout:"fill",orderBy:[{key:"display_name",label:s("fields.name")},{key:"iso_2",label:s("fields.code")}],queryObject:D,prefix:_})}),e.jsx(i.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(i.Close,{type:"button",asChild:!0,children:e.jsx(v,{variant:"secondary",size:"small",children:s("actions.cancel")})}),e.jsx(v,{size:"small",type:"button",onClick:O,children:s("actions.save")})]})})]})},Y=J(),$=()=>{const o=H();return x.useMemo(()=>[Y.display({id:"select",header:({table:t})=>e.jsx(E,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:s=>t.toggleAllPageRowsSelected(!!s)}),cell:({row:t})=>{const s=!t.getCanSelect();return e.jsx(E,{checked:t.getIsSelected()||s,disabled:s,onCheckedChange:n=>t.toggleSelected(!!n),onClick:n=>{n.stopPropagation()}})}}),...o],[o])};function P(o){if(o.getValues("countries")===void 0)throw new Error("The form does not have a field named 'countries'. This field is required to use the GeoZoneForm component.")}var le=Object.assign(U,{AreaDrawer:W});export{le as G};
