(this.webpackJsonpminimart=this.webpackJsonpminimart||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(15),s=a.n(r),i=(a(125),a(126),a(45)),o=a(13),l=a(26),d=a.n(l),j=a(39),u=a(11),h=a(231),b=a(228),x=a(108),m=a(227),O=a(222),p=a(110),f=a.p+"static/media/customLogo.3b2eb80b.png",g=a(225),v=a(229),y=a(219),N=a(220),w=a(221),C=a(109),S=a.n(C),F=a(217),k=a(72),A=a.n(k),D=a(71),I=a.n(D),T=a(2),_=Object(F.a)((function(e){return{customHoverFocus:{"&:hover, &.Mui-focusVisible":{backgroundColor:"#65b32E",color:"white"},backgroundColor:"whitesmoke",borderColor:"#89B765",border:"1px solid",color:"black"}}}));function E(e){var t=_(),a=Object.values(e.cart).reduce((function(e,t){return e+t}),0),c=0;return Object(T.jsx)(g.a,{trigger:"click",placement:"bottom",rootClose:!0,overlay:Object(T.jsxs)(v.a,{style:{maxWidth:"100%",width:"400px",height:"70vh"},className:"d-flex align-items-start flex-column",children:[Object(T.jsxs)(v.a.Title,{as:"h3",children:[a," ITEMS IN CART"]}),Object(T.jsx)(v.a.Content,{style:{height:"90%",width:"100%",overflowY:"auto"},children:Object(T.jsxs)(y.a,{style:{width:"95%"},children:[Object.entries(e.cart).map((function(a){var n=Object(u.a)(a,2),r=n[0],s=n[1],i=e.data.find((function(e){return e._id===r}));return c+=i.price*s,Object(T.jsxs)(N.a,{className:"py-2 border",children:[Object(T.jsx)(x.a,{xs:2,children:Object(T.jsx)("img",{alt:"item",style:{maxHeight:"40px",maxWidth:"40px"},src:i.image,className:"mx-auto"})}),Object(T.jsx)(x.a,{children:i.name}),Object(T.jsx)(x.a,{children:Object(T.jsxs)("div",{className:"mx-auto mb-2 d-flex justify-content-between",style:{width:"70%"},children:[Object(T.jsx)(w.a,{className:t.customHoverFocus,onClick:function(){return e.removeFromCart(i._id)},children:Object(T.jsx)(I.a,{style:{fontSize:"9px"}})}),Object(T.jsx)("span",{className:"my-auto",style:{textAlign:"center",width:"100%"},children:Object(T.jsx)("strong",{className:"px-1",children:e.cart[i._id]})}),Object(T.jsx)(w.a,{className:t.customHoverFocus,onClick:function(){return e.addToCart(i._id)},children:Object(T.jsx)(A.a,{style:{fontSize:"9px"}})})]})}),Object(T.jsxs)(x.a,{children:["S$",(s*i.price).toFixed(2)]})]})})),Object(T.jsxs)("span",{style:{float:"right"},children:["Total:",c.toFixed(2)]})]})}),Object(T.jsx)(h.a,{className:"mt-auto ml-auto m-2",variant:"success",disabled:!0,children:"Checkout"})]}),children:Object(T.jsxs)(w.a,{style:{color:"#285E37"},children:[Object(T.jsx)(S.a,{fontSize:"large"}),Object(T.jsx)("span",{style:{position:"absolute",right:3,top:3,color:"#C70039",fontSize:"1.2rem"},children:Object.keys(e.cart).length>0?a:""})]})})}function H(e){return Object(T.jsxs)(b.a,{className:"mx-auto p-0 pb-1",style:{width:"95%"},children:[Object(T.jsx)(x.a,{xs:4,className:"mt-auto p-0",children:Object(T.jsx)(m.a,{className:"d-flex",children:Object(T.jsxs)(O.a,{className:"mb-1",children:[Object(T.jsx)(O.a.Prepend,{children:Object(T.jsx)(O.a.Text,{id:"basic-addon1",children:"Category"})}),Object(T.jsxs)(p.a,{as:"select",style:{width:"100px"},className:"form-select",value:e.category,onChange:function(t){return e.setCategory(t.target.value)},children:[Object(T.jsx)("option",{value:"All",children:"All Items"}),Object(T.jsx)("option",{value:"Drinks",children:"Drinks"}),Object(T.jsx)("option",{value:"Food",children:"Food"}),Object(T.jsx)("option",{value:"Fruits",children:"Fruits"}),Object(T.jsx)("option",{value:"Snacks",children:"Snacks"}),Object(T.jsx)("option",{value:"Others",children:"Others"})]}),Object(T.jsx)(p.a,{type:"search",placeholder:"Search","aria-label":"Search",style:{width:"100px"},value:e.search,onChange:function(t){return e.setSearch(t.target.value)}})]})})}),Object(T.jsx)(x.a,{xs:4,align:"center",children:Object(T.jsxs)(b.a.Brand,{children:[Object(T.jsx)("img",{className:"d-none d-lg-block",alt:"",src:f,width:"200",height:"100"})," "]})}),Object(T.jsx)(x.a,{xs:4,className:"mt-auto",align:"right",style:{paddingRight:"20px"},children:Object(T.jsx)(E,{data:e.data,cart:e.cart,addToCart:e.addToCart,removeFromCart:e.removeFromCart})})]})}var J=a(230),L=a(224),P=a(111),z=a.n(P),B=a(223),R=Object(F.a)((function(e){return{customHoverFocus:{"&:hover, &.Mui-focusVisible":{backgroundColor:"#65b32E",color:"white"},backgroundColor:"whitesmoke",borderColor:"#89B765",border:"1px solid",color:"black"}}}));function q(e){var t=R();return Object(T.jsx)(y.a,{style:{maxWidth:"95%",height:"100%",overflowY:"auto"},children:e.loaded?Object(T.jsx)(N.a,{children:e.data.filter((function(t){return t.category===e.category||"All"===e.category})).filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})).map((function(a){return Object(T.jsx)(x.a,{xs:6,md:4,lg:2,className:"border p-1",style:{height:"260px"},children:Object(T.jsxs)(J.a,{className:"w-100 h-100",children:[Object(T.jsx)(J.a.Img,{style:{height:"100px",width:"auto"},className:"mx-auto mt-2",variant:"top",src:a.image}),Object(T.jsxs)(J.a.Body,{className:"d-flex align-items-start flex-column pb-1",children:[Object(T.jsx)("h6",{className:"mb-auto text-limit-2",children:a.name}),Object(T.jsxs)("div",{children:["S$",a.price.toFixed(2)]})]}),Object(T.jsx)("div",{className:"mx-auto mb-2 d-flex justify-content-between",style:{width:"70%"},children:e.cart.hasOwnProperty(a._id)?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(w.a,{className:t.customHoverFocus,onClick:function(){return e.removeFromCart(a._id)},children:Object(T.jsx)(I.a,{style:{fontSize:"10px"}})}),Object(T.jsx)("span",{className:"my-auto",style:{textAlign:"center",width:"100%"},children:Object(T.jsx)("strong",{children:e.cart[a._id]})}),Object(T.jsx)(w.a,{className:t.customHoverFocus,onClick:function(){return e.addToCart(a._id)},children:Object(T.jsx)(A.a,{style:{fontSize:"10px"}})})]}):Object(T.jsx)(B.a,{style:{width:"100%",textTransform:"none"},className:"button-responsive ".concat(t.customHoverFocus),endIcon:Object(T.jsx)(z.a,{}),onClick:function(){return e.addToCart(a._id)},children:Object(T.jsx)("span",{className:"d-none d-xl-block",children:"Add To Cart"})})})]})})}))}):Object(T.jsx)("div",{className:"h-100 w-100 d-flex",children:Object(T.jsx)(L.a,{className:"mx-auto my-auto",animation:"border",variant:"success"})})})}var M=a(40),U=a.n(M);function V(){var e=Object(c.useState)("All"),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),o=s[0],l=s[1],b=Object(c.useState)({}),x=Object(u.a)(b,2),m=x[0],O=x[1],p=Object(c.useState)([]),f=Object(u.a)(p,2),g=f[0],v=f[1],y=Object(c.useState)(!1),N=Object(u.a)(y,2),w=N[0],C=N[1];function S(e){var t=JSON.parse(JSON.stringify(m));void 0===t[e]?t[e]=1:t[e]+=1,O(t)}function F(e){var t=JSON.parse(JSON.stringify(m));t.hasOwnProperty(e)&&(t[e]-=1,t[e]<=0&&delete t[e]),O(t)}return Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U()("/api/getall");case 2:t=e.sent,v(t.data),C(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(T.jsxs)("div",{style:{height:"100vh",width:"100vw"},className:"d-flex align-items-start flex-column",children:[Object(T.jsx)(H,{setCategory:n,category:a,setSearch:l,search:o,data:g,cart:m,addToCart:S,removeFromCart:F}),Object(T.jsx)(q,{loaded:w,data:g,category:a,search:o,cart:m,addToCart:S,removeFromCart:F}),Object(T.jsx)(i.b,{to:"/admin",children:Object(T.jsx)(h.a,{style:{position:"absolute",top:"10px",right:"10px"},variant:"outline-success",children:" Go To Admin View"})})]})}var $=a(77),W=a(112),Y=a.n(W),G=a(80),X=a.n(G),K=a(226),Q=a(75);function Z(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(c.useState)(),j=Object(u.a)(d,2),b=j[0],x=j[1],f=Object(c.useState)(),g=Object(u.a)(f,2),v=g[0],y=g[1],N=Object(c.useState)(),w=Object(u.a)(N,2),C=w[0],S=w[1],F=function(){r(!1)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(h.a,{onClick:function(){r(!0),l(e.data.image),x(e.data.name),y(e.data.price),S(e.data.category)},className:"px-1 pt-0 pb-1 mx-1",style:{borderColor:"grey"},variant:"outline-dark",children:Object(T.jsx)($.a,{})}),Object(T.jsx)(K.a,{size:"md",show:n,onHide:F,animation:!1,children:Object(T.jsxs)(m.a,{onSubmit:function(t){return function(t){t.preventDefault(),r(!1);var a={_id:e.data._id,name:b,category:C,image:o,price:parseFloat(v)};e.editData(a)}(t)},children:[Object(T.jsx)(K.a.Header,{children:Object(T.jsx)(K.a.Title,{children:"Edit Item"})}),Object(T.jsxs)(K.a.Body,{children:[Object(T.jsx)(J.a.Img,{style:{height:"100px",width:"auto"},className:"mx-auto",variant:"top",src:o}),Object(T.jsx)(O.a,{className:"mt-2",children:Object(T.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=Object(u.a)(e.target.files,1)[0];if(t){var a=new FileReader;a.onload=function(e){var t=document.createElement("img");t.onload=function(){var e=document.createElement("canvas"),a=e.getContext("2d"),c=t.width,n=t.height,r=Math.min(c/n*100,125);e.width=r,e.height=100,a.drawImage(t,0,0,r,100);var s=e.toDataURL("image/png");l(s)},t.src=e.target.result},a.readAsDataURL(t)}},required:!0})}),Object(T.jsxs)(O.a,{className:"mt-2",children:[Object(T.jsx)(O.a.Prepend,{children:Object(T.jsx)(O.a.Text,{id:"basic-addon1",children:"Item Name"})}),Object(T.jsx)(p.a,{value:b,onChange:function(e){return x(e.target.value)},required:!0})]}),Object(T.jsxs)(O.a,{className:"mt-2",children:[Object(T.jsx)(O.a.Prepend,{children:Object(T.jsx)(O.a.Text,{id:"basic-addon1",children:"Item Category"})}),Object(T.jsxs)(p.a,{as:"select",className:"form-select",onChange:function(e){return S(e.target.value)},value:C,children:[Object(T.jsx)("option",{value:"Drinks",children:"Drinks"}),Object(T.jsx)("option",{value:"Food",children:"Food"}),Object(T.jsx)("option",{value:"Fruits",children:"Fruits"}),Object(T.jsx)("option",{value:"Snacks",children:"Snacks"}),Object(T.jsx)("option",{value:"Others",children:"Others"})]})]}),Object(T.jsx)(O.a,{className:"mt-2",children:Object(T.jsx)(Q.a,{className:"w-100",placeholder:"S$",decimalsLimit:2,prefix:"S$",value:v,onValueChange:function(e){y(e)},required:!0})})]}),Object(T.jsxs)(K.a.Footer,{children:[Object(T.jsx)(h.a,{variant:"secondary",onClick:F,children:"Close"}),Object(T.jsx)(h.a,{variant:"success",type:"submit",children:"Update Item"})]})]})})]})}function ee(e){var t=[{dataField:"image",text:"Icon",formatter:function(e,t){return Object(T.jsx)("div",{className:"w-100 mx-auto",children:Object(T.jsx)("img",{alt:"item",style:{height:"30px",width:"auto"},src:e,className:"mx-auto"})})},style:{textAlign:"center"},headerStyle:{width:"70px",textAlign:"center",verticalAlign:"middle"}},{dataField:"_id",text:"ID",style:{textAlign:"center"},classes:"d-none d-lg-block border-bottom-0",headerClasses:"d-none d-lg-block border-bottom-0",headerStyle:{width:"100%",textAlign:"center",verticalAlign:"middle"}},{dataField:"name",text:"Name",headerStyle:{verticalAlign:"middle"},sort:!0,filter:Object(G.textFilter)()},{dataField:"price",text:"Price",style:{textAlign:"center"},headerStyle:{width:"120px",textAlign:"center",verticalAlign:"middle"},formatter:function(e,t){return Object(T.jsx)("span",{children:e.toFixed(2)})},headerFormatter:function(e,t,a){var c=a.sortElement,n=a.filterElement;return Object(T.jsxs)("div",{className:"h-100",children:[Object(T.jsxs)("span",{className:"mb-auto",children:[e.text," ",c]}),n]})},sort:!0},{dataField:"category",text:"Category",style:{textAlign:"center"},headerStyle:{textAlign:"center",verticalAlign:"middle"},filter:Object(G.selectFilter)({options:{Drinks:"Drinks",Food:"Food",Fruits:"Fruits",Snacks:"Snacks",Others:"Others"}})},{dataField:"dummy",isDummyField:!0,text:"Action",style:{textAlign:"center"},headerStyle:{width:"100px",textAlign:"center",verticalAlign:"middle"},formatter:function(t,a){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Z,{data:a,editData:e.editData}),Object(T.jsx)(h.a,{className:"px-1 pt-0 pb-1 mx-1",variant:"outline-dark",style:{borderColor:"grey"},onClick:function(){return e.deleteData(a._id)},children:Object(T.jsx)($.b,{})})]})}}];return Object(T.jsx)(Y.a,{bootstrap4:!0,keyField:"_id",data:e.data,columns:t,filter:X()()})}var te=a.p+"static/media/placeholder.39a842d0.jpg";function ae(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(te),i=Object(u.a)(s,2),o=i[0],l=i[1],d=Object(c.useState)("Item Name"),j=Object(u.a)(d,2),b=j[0],x=j[1],f=Object(c.useState)(""),g=Object(u.a)(f,2),v=g[0],y=g[1],N=Object(c.useState)("Others"),w=Object(u.a)(N,2),C=w[0],S=w[1];function F(){r(!1),l(te),x("Item Name"),y(""),S("Others")}var k=function(){F()};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(h.a,{className:"my-1",variant:"success",onClick:function(){return r(!0)},children:"Add New Item"}),Object(T.jsx)(K.a,{size:"md",show:n,onHide:k,animation:!1,children:Object(T.jsxs)(m.a,{onSubmit:function(t){return function(t){t.preventDefault(),r(!1);var a={name:b,category:C,image:o,price:parseFloat(v)};F(),e.insertData(a)}(t)},children:[Object(T.jsx)(K.a.Header,{children:Object(T.jsx)(K.a.Title,{children:"Add New Item"})}),Object(T.jsxs)(K.a.Body,{children:[Object(T.jsx)(J.a.Img,{style:{height:"100px",width:"auto"},className:"mx-auto",variant:"top",src:o}),Object(T.jsx)(O.a,{className:"mt-2",children:Object(T.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=Object(u.a)(e.target.files,1)[0];if(t){var a=new FileReader;a.onload=function(e){var t=document.createElement("img");t.onload=function(){var e=document.createElement("canvas"),a=e.getContext("2d"),c=t.width,n=t.height,r=Math.min(c/n*100,125);e.width=r,e.height=100,a.drawImage(t,0,0,r,100);var s=e.toDataURL("image/png");l(s)},t.src=e.target.result},a.readAsDataURL(t)}},required:!0})}),Object(T.jsxs)(O.a,{className:"mt-2",children:[Object(T.jsx)(O.a.Prepend,{children:Object(T.jsx)(O.a.Text,{id:"basic-addon1",children:"Item Name"})}),Object(T.jsx)(p.a,{onChange:function(e){return x(e.target.value)},required:!0})]}),Object(T.jsxs)(O.a,{className:"mt-2",children:[Object(T.jsx)(O.a.Prepend,{children:Object(T.jsx)(O.a.Text,{id:"basic-addon1",children:"Item Category"})}),Object(T.jsxs)(p.a,{as:"select",className:"form-select",onChange:function(e){return S(e.target.value)},value:C,children:[Object(T.jsx)("option",{value:"Drinks",children:"Drinks"}),Object(T.jsx)("option",{value:"Food",children:"Food"}),Object(T.jsx)("option",{value:"Fruits",children:"Fruits"}),Object(T.jsx)("option",{value:"Snacks",children:"Snacks"}),Object(T.jsx)("option",{value:"Others",children:"Others"})]})]}),Object(T.jsx)(O.a,{className:"mt-2",children:Object(T.jsx)(Q.a,{className:"w-100",placeholder:"S$",decimalsLimit:2,prefix:"S$",onValueChange:function(e){y(e)},required:!0})})]}),Object(T.jsxs)(K.a.Footer,{children:[Object(T.jsx)(h.a,{variant:"secondary",onClick:k,children:"Close"}),Object(T.jsx)(h.a,{variant:"success",type:"submit",children:"Add Item"})]})]})})]})}function ce(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),s=Object(u.a)(r,2),o=s[0],l=s[1];function b(){return m.apply(this,arguments)}function m(){return(m=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U()("/api/getall").catch((function(e){console.log(e)}));case 2:t=e.sent,l(t.data),n(!0);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:U.a.post("/api/insert",t).then((function(e){t._id=e.data;var a=JSON.parse(JSON.stringify(o));a.push(t),l(a),b()})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(j.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=JSON.parse(JSON.stringify(o)),c=a.findIndex((function(e){return e._id===t._id})),a[c]=t,l(a),U.a.put("/api/update",t).then((function(e){b()})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=(a=JSON.parse(JSON.stringify(o))).filter((function(e){return e._id!==t})),l(a),U.a.delete("/api/delete",{data:{_id:t}}).then((function(e){return b()})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){b()}),[]),Object(T.jsxs)("div",{style:{height:"100vh",width:"100vw"},children:[a?Object(T.jsxs)("div",{style:{width:"95%"},className:"h-100 d-flex align-items-start flex-column mx-auto",children:[Object(T.jsxs)(N.a,{className:"py-1 w-100",children:[Object(T.jsx)(x.a,{xs:4,className:"mt-auto",children:Object(T.jsx)(ae,{insertData:function(e){return O.apply(this,arguments)}})}),Object(T.jsx)(x.a,{xs:4,align:"center",children:Object(T.jsx)("img",{className:"d-none d-lg-block",alt:"",src:f,width:"200",height:"100"})})]}),Object(T.jsx)("div",{style:{height:"100%",width:"100%",overflowX:"auto",overflowY:"auto"},children:Object(T.jsx)(ee,{deleteData:function(e){return g.apply(this,arguments)},editData:function(e){return p.apply(this,arguments)},data:o})})]}):Object(T.jsx)("div",{className:"h-100 w-100 d-flex",children:Object(T.jsx)(L.a,{className:"mx-auto my-auto",animation:"border",variant:"success"})}),Object(T.jsx)(i.b,{to:"/",children:Object(T.jsx)(h.a,{style:{position:"absolute",top:"10px",right:"10px"},variant:"outline-success",children:" Go To User View"})})]})}function ne(){return Object(T.jsx)(i.a,{children:Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{exact:!0,path:"/admin",children:Object(T.jsx)(ce,{})}),Object(T.jsx)(o.a,{exact:!0,path:"/",children:Object(T.jsx)(V,{})})]})})}var re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,233)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};a(198),a(199);s.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(ne,{})}),document.getElementById("root")),re()}},[[200,1,2]]]);
//# sourceMappingURL=main.5323d80d.chunk.js.map