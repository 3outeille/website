(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-137cfb57"],{acca:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title"},[t._v("Nos projets")]),e("p",{staticClass:"subtitle"},[t._v("Voice quelques projets réalisés par la communauté")]),e("b-tooltip",{attrs:{type:"is-light",label:"Vous pouvez forker le repo pour y ajouter vos projets!",position:"is-bottom"}},[e("b-button",{attrs:{tag:"a",href:"https://github.com/french-ai/website/edit/master/src/projects.js",target:"_blank",type:"is-info"}},[e("i",{staticClass:"fas fa-plus"}),t._v(" Ajoutez votre projet ")])],1)],1)]),e("div",{staticClass:"columns is-multiline"},t._l(t.infos,(function(t){return e("Repository",{key:t.id,attrs:{avatar:t.owner.avatar_url,repository:t.name,profile:t.owner.login,description:t.description,lang:t.language,stars:t.stargazers_count,forks:t.forks_count,url:t.html_url}})})),1)])},i=[],r=e("d722"),n={getProjects:function(){return["aquadzn/coding-challenges","SkalskiP/make-sense","aquadzn/gpt2-french","creme-ml/creme","dhaitz/mplcyberpunk","french-ai/ressources"]}},o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"column is-one-third"},[e("div",{directives:[{name:"tilt",rawName:"v-tilt"}],staticClass:"box"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-left"},[e("figure",{staticClass:"image is-64x64"},[e("img",{attrs:{src:t.avatar,alt:"User avatar"}})])]),e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-4"},[t._v(t._s(t.repository))]),e("p",{staticClass:"subtitle is-6"},[t._v("@"+t._s(t.profile))])])]),e("div",{staticClass:"content has-text-centered"},[e("p",{attrs:{id:"desc"}},[t._v(t._s(t.description))]),e("nav",{staticClass:"level is-mobile"},[e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[t._v("Langage")]),e("p",{staticClass:"title is-4"},[t._v(t._s(t.lang))])])]),e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[t._v("Stars")]),e("p",{staticClass:"title is-4",staticStyle:{color:"#f1c40f"}},[t._v(t._s(t.stars))])])]),e("div",{staticClass:"level-item has-text-centered"},[e("div",[e("p",{staticClass:"heading"},[t._v("Forks")]),e("p",{staticClass:"title is-4"},[t._v(t._s(t.forks))])])])])])]),e("footer",{staticClass:"card-footer"},[e("a",{staticClass:"card-footer-item",attrs:{href:t.url,target:"_blank"}},[e("u",[t._v(t._s(t.profile)+"/"+t._s(t.repository))])])])])])},c=[],l={name:"Repository",props:{avatar:String,repository:String,profile:String,description:String,lang:String,stars:String,forks:String,url:String}},u=l,d=(e("dc4d"),e("2877")),p=Object(d["a"])(u,o,c,!1,null,"14979185",null),v=p.exports,f=n.getProjects(),g={name:"Project",components:{Repository:v},data:function(){return{infos:[]}},mounted:function(){for(var t=this,s=0;s<f.length;s++)r["a"].getRepos(f[s]).then((function(s){return t.infos.push(s.data)})).catch((function(t){return console.log(t)}))}},m=g,h=(e("ed0c"),Object(d["a"])(m,a,i,!1,null,null,null));s["default"]=h.exports},c31f:function(t,s,e){},dc4d:function(t,s,e){"use strict";var a=e("c31f"),i=e.n(a);i.a},e79b:function(t,s,e){},ed0c:function(t,s,e){"use strict";var a=e("e79b"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-137cfb57.f0e93a48.js.map