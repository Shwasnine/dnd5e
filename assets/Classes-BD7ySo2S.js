import{r as l,o as H,f as c,c as r,a as s,i as M,t as _,n as g,F as y,d as C,j as R,w as q,u as L,k as E,h as N}from"./index-Cn6z2FIF.js";const k=[{name:"Artificer",icon:"fas fa-tools",fonte:"TCE",path:"/classes/artificer",content:"/db/classes/artifice/index.html",resumo:"/db/classes/artifice/resumo.html",subclasses:[{name:"Alquimista",content:"/db/classes/artifice/alquimista.html",path:"/classes/artificer/alquimista"},{name:"Armeiro",content:"/db/classes/artifice/armeiro.html",path:"/classes/artificer/armeiro"},{name:"Ferreiro de Batalha",content:"/db/classes/artifice/ferreiro-de-batalha.html",path:"/classes/artificer/ferreiro-de-batalha"}]}],V={class:"page__grid"},$={class:"nav__classes"},B={class:"ms-auto d-block"},D={class:"collapse show",id:"todasAsClasses"},F={class:"nav flex-column"},j={class:"nav-item"},P={class:"resumo__classe"},z={class:"collapse show resumo__classe__collapse",id:"resummoClasse"},I=["innerHTML"],O={class:"page__title"},W={class:"btn-group"},G={class:"btn btn-success"},J={class:"scroll__spy"},U={__name:"Classes",setup(K){const n=l(null),f=l(null),v=l(null),i=l(!1),u=l(null),m=l(null),p=l(null),h=l(null),x=t=>k[0],w=async()=>{n.value=x();const t=await fetch(n.value.resumo);f.value=await t.text();const e=await fetch(n.value.content);v.value=await e.text(),S()},S=()=>{u.value.innerHTML=v.value,T()},T=()=>{const e=[...u.value.querySelectorAll(".classe__nvl_hab")].filter(d=>d.innerText.startsWith("Nível"));m.value.innerHTML=e.map((d,b)=>(d.id=`section-${b}`,`<li class="nav-item">
            <a class="nav-link" href="#section-${b}">${d.innerText}</a>    
        </li>`)).join(`
`);const a=window.getComputedStyle(p.value).getPropertyValue("height");h.value.style.setProperty("scroll-padding-top",`calc(${a} + 1rem)`)},A=()=>{m.value.addEventListener("click",t=>{if(t.target.matches(".nav-link")){t.preventDefault();const o=[...u.value.querySelectorAll(".classe__nvl_hab")].find(a=>a.innerText==t.target.innerText);o==null||o.scrollIntoView({block:"start",behavior:"smooth"})}})};return H(()=>{w(),A()}),(t,e)=>{const o=N("router-link");return c(),r("div",V,[s("nav",$,[s("h3",null,[s("button",{type:"button",class:"btn btn-toggle-classes","data-bs-toggle":"collapse","data-bs-target":"#todasAsClasses","aria-expanded":"true",onClick:e[0]||(e[0]=M(a=>i.value=!i.value,["prevent"]))},[s("span",null,_(i.value?"Exibir":"Ocultar")+" as Classes",1),s("span",B,[s("i",{class:g(["fas",{"fa-plus":i.value,"fa-minus":!i.value}])},null,2)])])]),s("div",D,[s("ul",F,[(c(!0),r(y,null,C(L(k),a=>(c(),r("li",j,[R(o,{class:"nav-link",to:a.path},{default:q(()=>[s("i",{class:g(a.icon)},null,2),s("span",null,_(a.name),1)]),_:2},1032,["to"])]))),256))])])]),s("aside",P,[e[1]||(e[1]=s("button",{class:"btn btn-toggle-classes","data-bs-toggle":"collapse","data-bs-target":"#resummoClasse"},[s("span",null," Contrução Rápida "),s("span",{class:"d-block ms-auto"},[s("i",{class:"fas fa-minus"})])],-1)),s("div",z,[s("div",{innerHTML:f.value,class:"resumo__classe__content"},null,8,I)])]),n.value?(c(),r("main",{key:0,class:"main__content main__content__classes",ref_key:"main__contentRef",ref:h},[s("div",{class:"classe__header",ref_key:"classeHeaderRef",ref:p},[s("h1",O,[s("span",null,_(n.value.name),1)]),s("div",W,[(c(!0),r(y,null,C(n.value.subclasses,a=>(c(),r("button",G,_(a.name),1))),256))])],512),e[2]||(e[2]=s("div",{class:"classe__table"},null,-1)),s("div",{class:"classe__description",ref_key:"conteudoRef",ref:u},null,512)],512)):E("",!0),s("nav",J,[s("ul",{class:"nav flex-column",ref_key:"scrollSpyMenu",ref:m},null,512)])])}}};export{U as default};
