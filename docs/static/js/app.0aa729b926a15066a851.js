webpackJsonp([1],{"96OA":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},i,!1,function(e){a("RMMT")},null,null).exports,r=a("/ocq"),s=a("Sazm"),l=a.n(s).a.initializeApp({apiKey:"AIzaSyDt7EQc_GVKqPHWGtw_nT6osO63hOB4cIs",databaseURL:"https://unoleaderboard.firebaseio.com/",storageBucket:"unoleaderboard"}).database(),c=l.ref("/"),d={name:"Home",data:function(){return{firstPlace:"",secondPlace:"",thirdPlace:"",fourthPlace:"",winners:[],logWin:!1,leader:"",leaderCount:0,totalGames:0,editActive:!1,updateText:""}},methods:{sendToFirebase:function(){var e=new Date,t=e.toDateString().split(" ").join(""),a={};""!==this.firstPlace&&(a[0]=this.firstPlace),""!==this.secondPlace&&(a[1]=this.secondPlace),""!==this.thirdPlace&&(a[2]=this.thirdPlace),""!==this.fourthPlace&&(a[3]=this.fourthPlace),this.logWin=!1,l.ref("/"+t+"/date").push({games:{}}),l.ref("/"+t+"/date").set({date:e.toDateString()}),l.ref("/"+t+"/games").push(a)},logWinner:function(){this.logWin=!0},removeWinner:function(e,t,a){var n=e.split(" ").join("");l.ref("/"+n+"/games/"+t+"/"+a).remove()},updateWinner:function(e,t,a){var n={};n["/"+e.split(" ").join("")+"/games/"+t+"/"+a]=this.updateText,l.ref().update(n)},getTopLeader:function(){var e={};this.totalGames=0;for(var t=[],a=0;a<this.winners.length;a++)void 0===e[this.winners[a].name]?e[this.winners[a].name]=1:e[this.winners[a].name]++,this.totalGames++;for(var n in e)0===this.leaderCount?this.leaderCount=e[n]:e[n]>this.leaderCount&&(this.leaderCount=e[n]),e[n]===this.leaderCount&&t.push(n),this.leader=t.length>1?"Its a Tie Between "+t.join(","):t[0]},activateDelete:function(){var e=this,t="ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter",a=[];window.addEventListener("keyup",function(n){a.push(n.key),a.splice(-t.length-1,a.length-t.length),a.join("")===t&&(e.editActive=!0)})}},mounted:function(){var e=this;c.on("value",function(t){var a=[];t.forEach(function(e){var t=e.val(),n=t.date.date;for(var i in t.games)t.games[i].key=i,t.games[i].date=n,a.push(t.games[i])}),e.winners=a.reverse(),e.activateDelete()})}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard"},[e.logWin?e._e():a("button",{staticClass:"log-win btn-3d green",on:{click:function(t){e.logWinner()}}},[e._v("Log Win")]),e._v(" "),e.logWin?a("div",{staticClass:"log-winner"},[a("div",[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.firstPlace,expression:"firstPlace"}],attrs:{placeholder:"First Place",type:"text"},domProps:{value:e.firstPlace},on:{input:function(t){t.target.composing||(e.firstPlace=t.target.value)}}})]),e._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.secondPlace,expression:"secondPlace"}],attrs:{placeholder:"Second Place",type:"text"},domProps:{value:e.secondPlace},on:{input:function(t){t.target.composing||(e.secondPlace=t.target.value)}}})]),e._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.thirdPlace,expression:"thirdPlace"}],attrs:{placeholder:"Third Place",type:"text"},domProps:{value:e.thirdPlace},on:{input:function(t){t.target.composing||(e.thirdPlace=t.target.value)}}})]),e._v(" "),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.fourthPlace,expression:"fourthPlace"}],attrs:{placeholder:"Fourth Place",type:"text"},domProps:{value:e.fourthPlace},on:{input:function(t){t.target.composing||(e.fourthPlace=t.target.value)}}})])]),e._v(" "),a("div",[a("button",{on:{click:function(t){e.sendToFirebase()}}},[e._v("Log Winner")]),e._v(" "),a("button",{on:{click:function(t){e.logWin=!1}}},[e._v("Close")])])]):e._e(),e._v(" "),a("h2",{staticClass:"total-games"},[e._v("Current Game: Uno")]),e._v(" "),a("div",{staticClass:"leaderboard"},[a("h2",[e._v("Leaderboard")]),e._v(" "),e._l(e.winners,function(t){return a("div",{staticClass:"winner"},[a("div",{staticClass:"divider"}),e._v(" "),a("div",{staticClass:"winner-data"},[t[0]?a("div",{staticClass:"winner-name"},[a("span",{staticClass:"label"},[e._v("Winner:")]),e._v(" "+e._s(t[0])+"\n          "),e.editActive?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.updateText,expression:"updateText"}],attrs:{type:"text"},domProps:{value:e.updateText},on:{input:function(t){t.target.composing||(e.updateText=t.target.value)}}}),e._v(" "),a("button",{on:{click:function(a){e.updateWinner(t.date,t.key,0)}}},[e._v("Update")]),e._v(" "),a("button",{on:{click:function(a){e.removeWinner(t.date,t.key,0)}}},[e._v("Delete")])]):e._e()]):e._e(),e._v(" "),t[1]?a("div",{staticClass:"winner-name"},[a("span",{staticClass:"label"},[e._v("Second Place:")]),e._v(" "+e._s(t[1])+"\n          "),e.editActive?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.updateText,expression:"updateText"}],attrs:{type:"text"},domProps:{value:e.updateText},on:{input:function(t){t.target.composing||(e.updateText=t.target.value)}}}),e._v(" "),a("button",{on:{click:function(a){e.updateWinner(t.date,t.key,1)}}},[e._v("Update")]),e._v(" "),a("button",{on:{click:function(a){e.removeWinner(t.date,t.key,1)}}},[e._v("Delete")])]):e._e()]):e._e(),e._v(" "),t[2]?a("div",{staticClass:"winner-name"},[a("span",{staticClass:"label"},[e._v("Third Place:")]),e._v(" "+e._s(t[2])+"\n          "),e.editActive?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.updateText,expression:"updateText"}],attrs:{type:"text"},domProps:{value:e.updateText},on:{input:function(t){t.target.composing||(e.updateText=t.target.value)}}}),e._v(" "),a("button",{on:{click:function(a){e.updateWinner(t.date,t.key,2)}}},[e._v("Update")]),e._v(" "),a("button",{on:{click:function(a){e.removeWinner(t.date,t.key,2)}}},[e._v("Delete")])]):e._e()]):e._e(),e._v(" "),t[3]?a("div",{staticClass:"winner-name"},[a("span",{staticClass:"label"},[e._v("Fourth Place:")]),e._v(" "+e._s(t[3])+"\n          "),e.editActive?a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.updateText,expression:"updateText"}],attrs:{type:"text"},domProps:{value:e.updateText},on:{input:function(t){t.target.composing||(e.updateText=t.target.value)}}}),e._v(" "),a("button",{on:{click:function(a){e.updateWinner(t.date,t.key,3)}}},[e._v(" Update")]),e._v(" "),a("button",{on:{click:function(a){e.removeWinner(t.date,t.key,3)}}},[e._v("Delete")])]):e._e()]):e._e(),e._v(" "),a("div",{staticClass:"winner-date"},[a("span",{staticClass:"label"},[e._v("On:")]),e._v(" "+e._s(t.date)+"\n        ")])])])})],2)])},staticRenderFns:[]};var v=a("VU/8")(d,u,!1,function(e){a("96OA")},"data-v-94b04932",null).exports;n.a.use(r.a);var p=new r.a({routes:[{path:"/",name:"Home",component:v}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:p,components:{App:o},template:"<App/>"})},RMMT:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.0aa729b926a15066a851.js.map