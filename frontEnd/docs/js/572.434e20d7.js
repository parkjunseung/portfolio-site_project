"use strict";(self["webpackChunkportfolio_template_master"]=self["webpackChunkportfolio_template_master"]||[]).push([[572],{1572:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var l=a(3396),o=a(7139);const n={class:"container"},i={class:"d-flex flex-wrap align-items-center justify-content-between justify-content-lg-between"},s={class:"nav col-8 col-lg-8 me-lg-auto mb-2 justify-content-end mb-md-0"},d=(0,l.uE)('<ul class="nav col-1 col-lg-1 mb-4 justify-content-end mb-md-0"><li class="me-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg></li><li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16"><path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path></svg></li></ul>',1);function c(t,e,a,c,u,r){const y=(0,l.up)("TextEditModal"),x=(0,l.up)("LayoutEditModal");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("header",{class:"header1 p-3",style:(0,o.j5)([c.contentData.layoutAttribute])},[(0,l._)("div",n,[(0,l._)("div",i,[(0,l._)("div",{onClick:e[0]||(e[0]=t=>c.showTextEditModal(c.contentData.textList[0])),class:"col clickable effect-shine",style:(0,o.j5)([c.contentData.textList[0]])},(0,o.zw)(c.contentData.textList[0].textValue),5),(0,l._)("ul",s,[(0,l._)("li",{onClick:e[1]||(e[1]=t=>c.showTextEditModal(c.contentData.textList[1]))},[(0,l._)("a",{href:"#",class:"nav-link px-2 clickable effect-shine",style:(0,o.j5)([c.contentData.textList[1]])},(0,o.zw)(c.contentData.textList[1].textValue),5)]),(0,l._)("li",{onClick:e[2]||(e[2]=t=>c.showTextEditModal(c.contentData.textList[2]))},[(0,l._)("a",{href:"#",class:"nav-link px-2 clickable effect-shine",style:(0,o.j5)([c.contentData.textList[2]])},(0,o.zw)(c.contentData.textList[2].textValue),5)]),(0,l._)("li",{onClick:e[3]||(e[3]=t=>c.showTextEditModal(c.contentData.textList[3]))},[(0,l._)("a",{href:"#",class:"nav-link px-2 clickable effect-shine",style:(0,o.j5)([c.contentData.textList[3]])},(0,o.zw)(c.contentData.textList[3].textValue),5)]),(0,l._)("li",{onClick:e[4]||(e[4]=t=>c.showTextEditModal(c.contentData.textList[4]))},[(0,l._)("a",{href:"#",class:"nav-link px-2 clickable effect-shine",style:(0,o.j5)([c.contentData.textList[4]])},(0,o.zw)(c.contentData.textList[4].textValue),5)]),(0,l._)("li",{onClick:e[5]||(e[5]=t=>c.showTextEditModal(c.contentData.textList[4]))},[(0,l._)("a",{href:"#",class:"nav-link px-2 clickable effect-shine",style:(0,o.j5)([c.contentData.textList[5]])},(0,o.zw)(c.contentData.textList[5].textValue),5)])]),d])])],4),(0,l.Wm)(y,{isShowMoadal:c.isShowTextEditMoadal,selectedText:c.selectedText,onHideModal:c.hideTextEditModal,onEditTextData:c.editTextData},null,8,["isShowMoadal","selectedText","onHideModal","onEditTextData"]),(0,l.Wm)(x,{isShowMoadal:c.isShowLayoutEditMoadal,selectedLayoutAttribute:c.selectedLayoutAttribute,onHideModal:c.hideLayoutEditModal,onEditLayoutData:c.editLayoutData},null,8,["isShowMoadal","selectedLayoutAttribute","onHideModal","onEditLayoutData"])])}var u=a(4870),r=a(3187),y=a(8334),x=a(9217),m=a(7356),h=a(3313),v={name:"HeaderLayout1",components:{TextEditModal:x.Z,LayoutEditModal:m.Z},emits:["isOpendAnyModal","isClosedModal"],setup(){const t=(0,r.h)(),e=(0,y.k)(),a=e.getHeaderLayout1,l=(0,u.iH)(!1),o=(0,u.iH)({}),n=(0,u.iH)((0,h.N9)(a.layoutAttribute.backgroundColor)),i=()=>{o.value=a.layoutAttribute,c(!0)},s=()=>{c(!1)},d=t=>{n.value=t,x(),c(!1)},c=e=>{l.value=e,t.changeState()},x=()=>{a.textList.map((t=>{t.color=a.layoutAttribute.color,t.fontFamily=a.layoutAttribute.fontFamily}))},m=(0,u.iH)(!1),v=(0,u.iH)({}),b=t=>{v.value=t,w(!0)},f=()=>{w(!1)},p=t=>{e.editTextList(a,t),w(!1)},w=e=>{m.value=e,t.changeState()};return{isShowLayoutEditMoadal:l,selectedLayoutAttribute:o,showLayoutEditModal:i,hideLayoutEditModal:s,editLayoutData:d,isBlackBG:n,isShowTextEditMoadal:m,selectedText:v,showTextEditModal:b,hideTextEditModal:f,editTextData:p,contentData:a}}},b=a(89);const f=(0,b.Z)(v,[["render",c]]);var p=f},7356:function(t,e,a){a.d(e,{Z:function(){return D}});var l=a(3396),o=a(9242);const n={class:"modal fade",ref:"modal",id:"TextEditModal",style:{"z-index":"1050 !important"},"data-bs-backdrop":"static","aria-labelledby":"TextEditModalLabel","aria-hidden":"true"},i={class:"modal-dialog modal-lg modal-dialog-centered"},s={class:"modal-content"},d={class:"modal-body"},c={class:"d-flex flex-column flex-wrap justify-content-start align-items-center"},u={class:"row align-items-center w-100 mb-3"},r=(0,l._)("div",{class:"col-3"},"글씨체: ",-1),y={class:"row w-100 mb-3"},x=(0,l._)("div",{class:"col-3"},"폰트 컬러 :",-1),m={class:"row w-100"},h=(0,l._)("div",{class:"col-3"},"백그라운드 컬러 :",-1),v={class:"modal-footer"};function b(t,e,a,b,f,p){const w=(0,l.up)("SelectVue");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",i,[(0,l._)("div",s,[(0,l._)("div",d,[(0,l._)("div",c,[(0,l._)("div",u,[r,(0,l.Wm)(w,{class:"col-6",selectedFont:b.layoutAttribute.fontFamily,onChangeFont:b.changeFont},null,8,["selectedFont","onChangeFont"])]),(0,l._)("div",y,[x,(0,l.wy)((0,l._)("input",{type:"color",class:"col-1","onUpdate:modelValue":e[0]||(e[0]=t=>b.layoutAttribute.color=t)},null,512),[[o.nr,b.layoutAttribute.color]])]),(0,l._)("div",m,[h,(0,l.wy)((0,l._)("input",{type:"color",class:"col-1","onUpdate:modelValue":e[1]||(e[1]=t=>b.layoutAttribute.backgroundColor=t)},null,512),[[o.nr,b.layoutAttribute.backgroundColor]])])])]),(0,l._)("div",v,[(0,l._)("button",{type:"button",class:"btn btn-secondary me-auto p-2",onClick:e[2]||(e[2]=(...t)=>b.hideModal&&b.hideModal(...t))},"닫기"),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=(...t)=>b.editLayoutData&&b.editLayoutData(...t))},"데이터 변경")])])])],512)}var f=a(4870),p=a(806),w=a(2673),g=a(3313),M={name:"LayoutEditModal",components:{SelectVue:w.Z},props:{selectedLayoutAttribute:{type:Object},isShowMoadal:{type:Boolean}},emits:["hideModal","editTextData"],setup(t,e){const a="AIzaSyB98XK6TWV9Etb2TLOUvgJS0RSlT60nVVw",o=(0,f.iH)(null);let n=null;const i=(0,f.iH)({fontFamily:"",color:"",backgroundColor:""});let s=null;const d=()=>{i.value=s,e.emit("hideModal")},c=()=>{var t=(0,g.N9)(i.value.backgroundColor);e.emit("editLayoutData",t)},u=t=>{i.value.fontFamily=t};return(0,l.YP)((()=>t.isShowMoadal),(t=>{n&&(t?n.show():n.hide())})),(0,l.YP)((()=>t.selectedLayoutAttribute),(t=>{console.log(t),s||(s=JSON.parse(JSON.stringify(t))),i.value=t})),(0,l.bv)((()=>{n=new p.u_(o.value)})),{googleKey:a,hideModal:d,editLayoutData:c,changeFont:u,modal:o,layoutAttribute:i}}},L=a(89);const _=(0,L.Z)(M,[["render",b]]);var D=_},9217:function(t,e,a){a.d(e,{Z:function(){return f}});var l=a(3396),o=a(9242);const n={class:"modal fade",ref:"modal",id:"TextEditModal",style:{"z-index":"1050 !important"},"data-bs-backdrop":"static","aria-labelledby":"TextEditModalLabel","aria-hidden":"true"},i={class:"modal-dialog modal-lg"},s={class:"modal-content"},d={class:"modal-body"},c={class:"modal-footer"},u=(0,l._)("div",null,"글씨체 변경",-1);function r(t,e,a,r,y,x){const m=(0,l.up)("SelectVue");return(0,l.wg)(),(0,l.iD)("div",n,[(0,l._)("div",i,[(0,l._)("div",s,[(0,l._)("div",d,[(0,l._)("div",null,[(0,l.wy)((0,l._)("textarea",{class:"form-control form-control-lg",id:"exampleFormControlTextarea1",rows:"10","onUpdate:modelValue":e[0]||(e[0]=t=>r.text.textValue=t)},null,512),[[o.nr,r.text.textValue]])])]),(0,l._)("div",c,[(0,l._)("button",{type:"button",class:"btn btn-secondary me-auto p-2",onClick:e[1]||(e[1]=(...t)=>r.hideModal&&r.hideModal(...t))},"닫기"),u,(0,l.Wm)(m,{selectedFont:r.text.fontFamily,onChangeFont:r.changeFont},null,8,["selectedFont","onChangeFont"]),(0,l.wy)((0,l._)("input",{type:"color",class:"col-1","onUpdate:modelValue":e[2]||(e[2]=t=>r.text.color=t)},null,512),[[o.nr,r.text.color]]),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=(...t)=>r.editTextData&&r.editTextData(...t))},"데이터 변경")])])])],512)}var y=a(4870),x=a(806),m=a(2673),h={name:"TextEditModal",components:{SelectVue:m.Z},props:{selectedText:{type:Object},isShowMoadal:{type:Boolean}},emits:["hideModal","editTextData"],setup(t,e){const a="AIzaSyB98XK6TWV9Etb2TLOUvgJS0RSlT60nVVw",o=(0,y.iH)(null);let n=null;const i=(0,y.iH)({key:"",textValue:"",fontFamily:"",color:""});let s={key:"",textValue:"",fontFamily:"",color:""};const d=()=>{i.value.textValue=s.textValue,i.value.fontFamily=s.fontFamily,i.value.color=s.color,e.emit("hideModal")},c=()=>{""===i.value.textValue&&(i.value.textValue=s.textValue,i.value.fontFamily=s.fontFamily,i.value.color=s.color),e.emit("editTextData",i.value)},u=t=>{i.value.fontFamily=t};return(0,l.YP)((()=>t.isShowMoadal),(e=>{n&&(e?(s=JSON.parse(JSON.stringify(t.selectedText)),i.value=t.selectedText,n.show()):n.hide())})),(0,l.bv)((()=>{n=new x.u_(o.value)})),{googleKey:a,hideModal:d,editTextData:c,changeFont:u,modal:o,text:i}}},v=a(89);const b=(0,v.Z)(h,[["render",r]]);var f=b},2673:function(t,e,a){a.d(e,{Z:function(){return m}});var l=a(3396),o=a(7139),n=a(9242);const i={class:"selectBox"},s=["value"];function d(t,e,a,d,c,u){return(0,l.wg)(),(0,l.iD)("div",i,[(0,l.wy)((0,l._)("select",{class:"select","onUpdate:modelValue":e[0]||(e[0]=t=>d.selected=t),onChange:e[1]||(e[1]=t=>d.changeFont(t))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.googleFontsList,((t,e)=>((0,l.wg)(),(0,l.iD)("option",{style:(0,o.j5)("font-family:"+t.family),key:e,value:t.family},(0,o.zw)(t.family),13,s)))),128))],544),[[n.bM,d.selected]])])}var c=a(4870),u=a(3187),r={name:"Select",components:{},props:{selectedFont:{type:String}},emits:["hideModal","editTextData"],setup(t,{emit:e}){const a=(0,u.h)(),o=(0,c.iH)(t.selectedFont),n=a.getGoogleFontsList,i=t=>{e("changeFont",t.target.value)};return(0,l.YP)((()=>t.selectedFont),(t=>{o.value=t})),(0,l.bv)((()=>{})),{selected:o,googleFontsList:n,changeFont:i}}},y=a(89);const x=(0,y.Z)(r,[["render",d]]);var m=x}}]);
//# sourceMappingURL=572.434e20d7.js.map