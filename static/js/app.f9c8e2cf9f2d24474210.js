webpackJsonp([1],{0:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("8+8L"),r=s("/ocq"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},i,!1,function(t){s("cZYH")},null,null).exports,c=s("Xxa5"),l=s.n(c),u=s("fZjL"),d=s.n(u),h=s("exGp"),p=s.n(h),m=s("NYxO"),f=s("gRE1"),v=s.n(f),_=s("Gu7T"),g=s.n(_),y=s("PJh5"),b=s.n(y);function D(t){var e=b()().format("YYYY-MM-DD"),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={};if(null===t)return e;var s=0,a=[].concat(g()(Array(1440))).reduce(function(e,s,a){return e[a]=t[a]||null,e},{});return d()(a).forEach(function(t,n){s+=+a[t],++n%5==0&&(e[n-5]=s||null,s=0)}),e}(t);return d()(s).map(function(t){return[b.a.utc(e,"YYYY-MM-DD").startOf("day").add(t,"minute").valueOf(),s[t]]})}function j(t){return d()(t).sort(function(t,e){return b.a.utc(t,"YYYY-MM-DD").valueOf()-b.a.utc(e,"YYYY-MM-DD").valueOf()}).map(function(e){return[e,t[e]]})}function M(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return d()(t).sort(function(t,e){return b.a.utc(t,"YYYY-MM-DD").valueOf()-b.a.utc(e,"YYYY-MM-DD").valueOf()}).map(function(s){return e?-t[s]:t[s]})}function T(t){var e={};for(var s in t)if(t.hasOwnProperty(s)){var a=new Date(s).getMonth()+1;e[a]=e[a]?e[a]+t[s]:t[s]}return v()(e)}var w=b()().format("YYYY-MM-DD HH:mm:ss"),x=b()().startOf("isoweek").subtract(1,"week").format("YYYY-MM-DD HH:mm:ss"),Y=b()().endOf("isoweek").subtract(1,"week").format("YYYY-MM-DD HH:mm:ss"),E=b()().startOf("isoweek").format("YYYY-MM-DD HH:mm:ss"),k=b()().startOf("month").subtract(1,"month").format("YYYY-MM-DD HH:mm:ss"),C=b()().endOf("month").subtract(1,"month").format("YYYY-MM-DD HH:mm:ss"),S=b()().startOf("month").format("YYYY-MM-DD HH:mm:ss"),A=b()().startOf("month").subtract(5,"month").format("YYYY-MM-DD HH:mm:ss"),O=b()().endOf("month").subtract(3,"month").format("YYYY-MM-DD HH:mm:ss"),L=b()().startOf("month").subtract(2,"month").format("YYYY-MM-DD HH:mm:ss");a.a.use(m.a);var R={isLogged:!!localStorage.getItem("token"),metrics:[],slices:[],startDayMetricData:[],endDayMetricData:[],startWeekMetricData:[],endWeekMetricData:[],startMonthMetricData:[],endMonthMetricData:[],startQuarterlyMetricData:[],endQuarterlyMetricData:[]},I={clearMetric:function(t){var e=t.commit;e("START_DAY_METRIC",[]),e("END_DAY_METRIC",[]),e("SET_WEEK_START_DATA",[]),e("SET_WEEK_END_DATA",[]),e("SET_QUARTERLY_START_DATA",[]),e("SET_QUARTERLY_END_DATA",[])},getMetricData:function(t,e){var s=this,n=t.commit;return p()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.http.get("values/minutes?metric_id="+e.id).then(function(t){n("START_DAY_METRIC",D(t.body.values.prev[d()(t.body.values.prev)[0]])),n("END_DAY_METRIC",D(t.body.values.curr[d()(t.body.values.curr)[0]]))});case 2:return t.next=4,a.a.http.get("values/days?metric_id="+e.id+"&from="+E+"&to="+w+"&prev_from="+x+"&prev_to="+Y).then(function(t){n("SET_WEEK_START_DATA",j(t.body.values.prev)),n("SET_WEEK_END_DATA",j(t.body.values.curr))});case 4:return t.next=6,a.a.http.get("values/days?metric_id="+e.id+"&from="+S+"&to="+w+"&prev_from="+k+"&prev_to="+C).then(function(t){n("SET_MONTH_START_DATA",M(t.body.values.prev,!0)),n("SET_MONTH_END_DATA",M(t.body.values.curr))});case 6:return t.next=8,a.a.http.get("values/days?metric_id="+e.id+"&from="+L+"&to="+w+"&prev_from="+A+"&prev_to="+O).then(function(t){n("SET_QUARTERLY_START_DATA",T(t.body.values.prev)),n("SET_QUARTERLY_END_DATA",T(t.body.values.curr))});case 8:case"end":return t.stop()}},t,s)}))()},getSlices:function(t,e){var s=this,n=t.commit;return p()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.http.get("slices/"+e.id).then(function(t){n("GET_SLICES",t.body.slices)});case 2:case"end":return t.stop()}},t,s)}))()},getMetrics:function(t){var e=this,s=t.commit;return p()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.http.get("metrics").then(function(t){s("GET_ALL_METRICS",t.body.metrics)});case 2:case"end":return t.stop()}},t,e)}))()},getMetricSlice:function(t,e){var s=this,n=t.commit;return p()(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.http.get("values/minutes?metric_id="+e.metricId+"&slice_id="+e.sliceId).then(function(t){n("START_DAY_METRIC",D(t.body.values.prev[d()(t.body.values.prev)[0]])),n("END_DAY_METRIC",D(t.body.values.curr[d()(t.body.values.curr)[0]]))});case 2:return t.next=4,a.a.http.get("values/days?metric_id="+e.metricId+"&slice_id="+e.sliceId+"&from="+E+"&to="+w+"&prev_from="+x+"&prev_to="+Y).then(function(t){n("SET_WEEK_START_DATA",j(t.body.values.prev)),n("SET_WEEK_END_DATA",j(t.body.values.curr))});case 4:return t.next=6,a.a.http.get("values/days?metric_id="+e.metricId+"&slice_id="+e.sliceId+"&from="+S+"&to="+w+"&prev_from="+k+"&prev_to="+C).then(function(t){n("SET_MONTH_START_DATA",M(t.body.values.prev,!0)),n("SET_MONTH_END_DATA",M(t.body.values.curr))});case 6:return t.next=8,a.a.http.get("values/days?metric_id="+e.metricId+"&slice_id="+e.sliceId+"&from="+L+"&to="+w+"&prev_from="+A+"&prev_to="+O).then(function(t){n("SET_QUARTERLY_START_DATA",T(t.body.values.prev)),n("SET_QUARTERLY_END_DATA",T(t.body.values.curr))});case 8:case"end":return t.stop()}},t,s)}))()}},N=new m.a.Store({strict:!1,state:R,mutations:{LOGIN_USER:function(t){t.isLogged=!0},START_DAY_METRIC:function(t,e){t.startDayMetricData=e},END_DAY_METRIC:function(t,e){t.endDayMetricData=e},GET_ALL_METRICS:function(t,e){t.metrics=e},GET_SLICES:function(t,e){t.slices=e},SET_WEEK_START_DATA:function(t,e){t.startWeekMetricData=e},SET_WEEK_END_DATA:function(t,e){t.endWeekMetricData=e},SET_MONTH_START_DATA:function(t,e){t.startMonthMetricData=e},SET_MONTH_END_DATA:function(t,e){t.endMonthMetricData=e},SET_QUARTERLY_START_DATA:function(t,e){t.startQuarterlyMetricData=e},SET_QUARTERLY_END_DATA:function(t,e){t.endQuarterlyMetricData=e}},actions:I}),$={name:"index",data:function(){return{infoError:!1,username:"",password:""}},beforeCreate:function(){N.state.isLogged&&tt.push("/")},methods:{login:function(){var t,e,s=this,n=(t=this.username,e=this.password,window.btoa(t+":"+e));a.a.http.interceptors.push(function(t,e){t.headers.set("Authorization","Basic "+n),e()}),this.$http.get("slices").then(function(t){localStorage.setItem("token",n),N.commit("LOGIN_USER"),tt.push("/")},function(){s.infoError=!0,s.password=""})}}},H={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login__box"},[s("div",{staticClass:"login__head_box"},[t._v("\n        realmetric\n    ")]),t._v(" "),t._m(0),t._v(" "),t.infoError?s("div",{staticClass:"info info--error"},[t._v("Login failed")]):t._e(),t._v(" "),s("div",{staticClass:"form__row"},[s("div",{staticClass:"row"},[s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{placeholder:"Login",type:"text",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),s("button",{attrs:{type:"submit",id:"login__button"},on:{click:function(e){t.login()}}},[t._v("Login")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo__box"},[e("img",{attrs:{src:"https://avatars2.githubusercontent.com/u/16989772?s=200&v=4"}})])}]},z=s("VU/8")($,H,!1,null,null,null).exports,W={name:"groups",data:function(){return{search:"",open:!1,animation:"accordion"}},beforeCreate:function(){if(!this.$store.state.isLogged)return tt.push("login")},created:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.state.metrics.length){e.next=3;break}return e.next=3,t.$store.dispatch("getMetrics");case 3:case"end":return e.stop()}},e,t)}))()},methods:{toggle:function(t){this.open=this.open!==t&&t},clearMainName:function(t,e){return t.replace(e+"."," ")},goToMetric:function(t){this.$router.push({name:"charts",params:{id:t}})},includesSearch:function(t){return t.toLowerCase().includes(this.search.toLowerCase())}}},q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"search__wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"search",placeholder:"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"ac_weapper"},t._l(this.$store.state.metrics,function(e,a){return t.includesSearch(a)?s("div",{staticClass:"accordion"},[s("div",{staticClass:"accordion_trigger item_title",class:{active:t.open===a},on:{click:function(e){t.toggle(a)}}},[t._v("\n                "+t._s(a)+"\n            ")]),t._v(" "),t._l(e,function(n){return s("transition",{key:e.id,attrs:{name:t.animation,data:e}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.open===a,expression:"open === metricName"}],staticClass:"accordion_body"},[s("div",{on:{click:function(e){t.goToMetric(n.id)}}},[s("div",{staticClass:"item__name"},[t._v(t._s(t.clearMainName(n.name,a)))]),t._v(" "),s("div",{staticClass:"item__count"},[t._v(t._s(n.total))])])])])})],2):t._e()}))])},staticRenderFns:[]},P=s("VU/8")(W,q,!1,null,null,null).exports,F={name:"slices",data:function(){return{slices:[],open:!1,selected:!1,selectedItems:[]}},beforeCreate:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getSlices",{id:t.$route.params.id});case 2:t.slices=t.$store.state.slices;case 3:case"end":return e.stop()}},e,t)}))()},methods:{toggle:function(t){this.open=this.open!==t&&t,this.selected=!1},showWrapper:function(){document.getElementsByClassName("non_clicked_wrapper")[0].classList.add("active")},hideWrapper:function(){document.getElementsByClassName("non_clicked_wrapper")[0].classList.remove("active")},resetSelected:function(){var t=this;return p()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getMetricData",{id:t.$route.params.id});case 2:t.selectedItems=[],t.selected=!1,t.open=!1,t.$root.$emit("chartRedraw");case 6:case"end":return e.stop()}},e,t)}))()},toggleSlice:function(t,e,s,a){var n=this;return p()(l.a.mark(function r(){var i;return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(i=n.selected,n.selectedItems=[],n.selectedItems.push({name:s.name,total:s.total,parent:a}),n.selected=n.selected!==t&&t,setTimeout(function(){this.hideWrapper()}.bind(n),500),i===t){r.next=10;break}return r.next=8,n.$store.dispatch("getMetricSlice",{metricId:n.$route.params.id,sliceId:e});case 8:r.next=13;break;case 10:return r.next=12,n.$store.dispatch("getMetricData",{id:n.$route.params.id});case 12:n.selectedItems=[];case 13:n.$root.$emit("chartRedraw",{metricId:n.$route.params.id,sliceId:e});case 14:case"end":return r.stop()}},r,n)}))()}}},U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"float",on:{click:function(e){t.showWrapper()}}},[t._v("\n        Slices\n    ")]),t._v(" "),s("div",{staticClass:"non_clicked_wrapper"},[s("div",{staticClass:"selected_items_wrapper"},t._l(t.selectedItems,function(e){return s("div",{staticClass:"item",on:{click:function(e){t.resetSelected()}}},[s("div",{staticClass:"slices_item__title"},[t._v(t._s(e.parent)+" - "+t._s(e.name))]),t._v(" "),s("div",{staticClass:"slices_item__count"},[t._v(t._s(e.total))])])})),t._v(" "),s("div",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:t.hideWrapper,expression:"hideWrapper",arg:"swipe",modifiers:{left:!0}}],staticClass:"slice__header",on:{click:function(e){t.hideWrapper()}}},[s("div",{staticClass:"arrow"})]),t._v(" "),s("div",{directives:[{name:"touch",rawName:"v-touch:swipe.left",value:t.hideWrapper,expression:"hideWrapper",arg:"swipe",modifiers:{left:!0}}],staticClass:"slices__wrapper"},[s("div",{staticClass:"slices__list"},t._l(this.slices,function(e,a){return s("div",[s("div",{staticClass:"slice_title",class:{active:t.open===a},on:{click:function(e){t.toggle(a)}}},[t._v("\n                        "+t._s(a)+"\n                        "),s("span",{staticClass:"slice_count"},[t._v(t._s(e.length))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open===a,expression:"open === index"}],staticClass:"sub__wrapper"},t._l(e,function(e){return s("div",{staticClass:"sub_menu_wrapper",class:{active:t.selected===e.name},on:{click:function(s){t.toggleSlice(e.name,e.id,e,a)}}},[s("div",[s("div",{staticClass:"item__name"},[t._v(" "+t._s(e.name))]),t._v(" "),s("div",{staticClass:"item__count"},[t._v(t._s(e.total))])])])}))])}))])])])},staticRenderFns:[]},Q=s("VU/8")(F,U,!1,null,null,null).exports,B={0:"Monday",1:"Tuesday",2:"Wednesday",3:"Thursday",4:"Friday",5:"Saturday",6:"Sunday"},V=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],G=s("504h"),K=s.n(G),X={name:"charts",data:function(){return{dayChartOptions:(t=this.$store.state.startDayMetricData,e=this.$store.state.endDayMetricData,{chart:{type:"area",spacingBottom:20,spacingTop:20,zoomType:"x"},title:{text:"Day"},xAxis:[{crosshair:!0,type:"datetime",tickLength:5,labels:{y:15,formatter:function(){return b.a.utc(this.value).format("HH:mm")},useHTML:!0,style:{fontSize:"12px",fontFamily:"proxima-nova,helvetica,arial,sans-seri",whiteSpace:"nowrap",paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"10px"}}}],yAxis:{crosshair:!0,min:0,title:null,startOnTick:!1,labels:{enabled:!1}},legend:{enabled:!0,y:5,itemStyle:{color:"#000",fontSize:"12px"}},credits:{enabled:!1},tooltip:{shape:"square",animation:!1,shared:!0,useHTML:!0,shadow:!1},plotOptions:{area:{marker:{enabled:!1,radius:2,symbol:"circle"}},column:{grouping:!1,pointPadding:0,groupPadding:0},stickyTracking:!1},series:[{colorIndex:1,name:"Yesterday",data:t,className:"yesterday",animation:{duration:500}},{colorIndex:0,name:"Today",className:"today",data:e,animation:{duration:500},color:"#1976d2",fillOpacity:.5}]}),weekChartOptions:function(t,e){return{chart:{type:"column",spacingBottom:20,spacingTop:10},credits:{enabled:!1},legend:{y:5,itemStyle:{color:"#000",fontSize:"12px"}},title:{text:"Week"},subtitle:!1,xAxis:{labels:{enabled:!1}},yAxis:{crosshair:!0,min:0,title:null,startOnTick:!1,labels:{enabled:!1}},tooltip:{shape:"square",shared:!0,useHTML:!0,formatter:function(){var t='<span style="font-size:10px">'+B[this.points[0].x]+"</span>";return this.points[1]?t+='<table><tr><td><span style="color:#434348">●</span> '+this.points[0].key+':</td>\n                <td style="padding:0"><b>'+this.points[0].y.toLocaleString()+' </b></td></tr></table>\n                <table><tr><td><span style="color:#1976d2">●</span> '+this.points[1].key+': </td>\n                <td style="padding:0"><b>'+this.points[1].y.toLocaleString()+" </b></td></tr></table>":t+='<table><tr><td><span style="color:#434348">●</span> '+this.points[0].key+':</td>\n                <td style="padding:0"><b>'+this.points[0].y.toLocaleString()+" </b></td></tr></table> ",t}},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{colorIndex:1,name:"Previous",data:t,animation:{duration:500}},{colorIndex:0,name:"Current",color:"#1976d2",data:e,animation:{duration:500}}]}}(this.$store.state.startWeekMetricData,this.$store.state.endWeekMetricData),monthChartOptions:function(t,e){return{chart:{type:"bar",spacingBottom:20,spacingTop:20,height:"650px"},title:{text:"Month"},subtitle:!1,xAxis:[{categories:V,reversed:!1,labels:{step:1}},{opposite:!0,reversed:!1,categories:V,linkedTo:0,labels:{step:1}}],yAxis:{title:{text:null},labels:!1},legend:{y:5,itemStyle:{color:"#000",fontSize:"12px"}},credits:{enabled:!1},plotOptions:{series:{stacking:"normal",pointWidth:15,pointInterval:1}},tooltip:{shape:"square",shared:!0,useHTML:!0,formatter:function(){var t="";return this.points[1]?t+='<table><tr><td><span style="color:#434348">●</span> '+b()().subtract(1,"month").date(this.points[0].key).format("YYYY-MM-DD")+':</td>\n                <td style="padding:0"><b>'+(-1*this.points[0].y).toLocaleString()+' </b></td></tr></table>\n                <table><tr><td><span style="color:#1976d2">●</span> '+b()().date(this.points[1].key).format("YYYY-MM-DD")+': </td>\n                <td style="padding:0"><b>'+this.points[1].y.toLocaleString()+" </b></td></tr></table>":t+='<table><tr><td><span style="color:#434348">●</span> '+b()().subtract(1,"month").date(this.points[0].key).format("YYYY-MM-DD")+':</td>\n                <td style="padding:0"><b>'+(-1*this.points[0].y).toLocaleString()+" </b></td></tr></table> ",t}},series:[{colorIndex:1,name:"Previous",data:t,animation:{duration:500}},{colorIndex:0,color:"#1976d2",name:"Current",data:e,animation:{duration:500}}]}}(this.$store.state.startMonthMetricData,this.$store.state.endMonthMetricData),quarterlyChartOptions:function(t,e){return{chart:{type:"column"},title:{text:"Quarterly"},xAxis:{categories:[],labels:{enabled:!1}},yAxis:{labels:{enabled:!1},title:!1},legend:{y:5,itemStyle:{color:"#000",fontSize:"12px"}},tooltip:{shape:"square",shared:!0,useHTML:!0,formatter:function(){var t="";return this.points[1]?t+='<table><tr><td><span style="color:#434348">●</span> '+b()().subtract(5-this.points[0].key,"month").startOf("month").format("YYYY-MM")+':</td>\n                <td style="padding:0"><b>'+this.points[0].y.toLocaleString()+' </b></td></tr></table>\n                <table><tr><td><span style="color:#1976d2">●</span> '+b()().subtract(2-this.points[1].key,"month").startOf("month").format("YYYY-MM")+': </td>\n                <td style="padding:0"><b>'+this.points[1].y.toLocaleString()+" </b></td></tr></table>":t+='<table><tr><td><span style="color:#434348">●</span> '+b()().subtract(2-this.points[0].key,"month").startOf("month").format("YYYY-MM")+':</td>\n                <td style="padding:0"><b>'+this.points[0].y.toLocaleString()+" </b></td></tr></table> ",t}},plotOptions:{column:{stacking:"normal",dataLabels:{enabled:!0,color:K.a.theme&&K.a.theme.dataLabelsColor||"white"}}},credits:{enabled:!1},series:[{colorIndex:1,name:"Previous",data:t,animation:{duration:500}},{colorIndex:0,color:"#1976d2",name:"Current",data:e,animation:{duration:500}}]}}(this.$store.state.startQuarterlyMetricData,this.$store.state.endQuarterlyMetricData),metric:null,totalCount:null,tabs:[{name:"Day",link:"?tab=1"},{name:"Week",link:"?tab=2"},{name:"Month",link:"?tab=3"},{name:"Quarterly",link:"?tab=4"}],interval:!1};var t,e},components:{Slices:Q},created:function(){this.fillData()},beforeCreate:function(){var t=this;return p()(l.a.mark(function e(){var s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getMetrics");case 2:s=t,v()(t.$store.state.metrics).forEach(function(t){v()(t).forEach(function(t){t.id===parseInt(s.$route.params.id)&&(s.metric=t.name,s.totalCount=t.total)})});case 4:case"end":return e.stop()}},e,t)}))()},methods:{getOptions:function(t){switch(t){case 0:return this.dayChartOptions;case 1:return this.weekChartOptions;case 2:return this.monthChartOptions;case 3:return this.quarterlyChartOptions;default:return this.dayChartOptions}},goBack:function(){N.dispatch("clearMetric"),this.$router.push("/")},fillData:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return p()(l.a.mark(function a(){return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!s){a.next=5;break}return a.next=3,N.dispatch("getMetricSlice",{metricId:t.$route.params.id,sliceId:s});case 3:a.next=7;break;case 5:return a.next=7,N.dispatch("getMetricData",{id:t.$route.params.id});case 7:t.redraw(e);case 8:case"end":return a.stop()}},a,t)}))()},redraw:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.swichAnimation(t),this.dayChartOptions.series[0].data=v()(this.$store.state.startDayMetricData),this.dayChartOptions.series[1].data=v()(this.$store.state.endDayMetricData),this.weekChartOptions.series[0].data=v()(this.$store.state.startWeekMetricData),this.weekChartOptions.series[1].data=v()(this.$store.state.endWeekMetricData),this.monthChartOptions.series[0].data=v()(this.$store.state.startMonthMetricData),this.monthChartOptions.series[1].data=v()(this.$store.state.endMonthMetricData),this.quarterlyChartOptions.series[0].data=v()(this.$store.state.startQuarterlyMetricData),this.quarterlyChartOptions.series[1].data=v()(this.$store.state.endQuarterlyMetricData)},swichAnimation:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.dayChartOptions.series[0].animation=t,this.dayChartOptions.series[1].animation=t,this.weekChartOptions.series[0].animation=t,this.weekChartOptions.series[1].animation=t,this.monthChartOptions.series[0].animation=t,this.monthChartOptions.series[1].animation=t,this.quarterlyChartOptions.series[0].animation=t,this.quarterlyChartOptions.series[1].animation=t},showLoading:function(){this.$children[0].chart.showLoading(),this.$children[1].chart.showLoading(),this.$children[2].chart.showLoading(),this.$children[3].chart.showLoading()},hideLoading:function(){this.$children[0].chart.hideLoading(),this.$children[1].chart.hideLoading(),this.$children[2].chart.hideLoading(),this.$children[3].chart.hideLoading()},setInterval:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];clearInterval(this.interval),this.interval=setInterval(function(){this.fillData(!1,t)}.bind(this),5e4)})},mounted:function(){var t=this;this.$root.$on("chartRedraw",function(e){void 0===e?t.setInterval():t.setInterval(e.sliceId),t.redraw()}),t.setInterval()}},Z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"charts_wrapper"},[s("div",{staticClass:"metric_title"},[s("div",{staticClass:"back",on:{click:function(e){t.goBack()}}}),t._v(" "),s("div",{staticClass:"item_title"},[t._v(t._s(t.metric))]),t._v(" "),s("div",{staticClass:"item_count"},[t._v(t._s(t.totalCount))])]),t._v(" "),t._l(t.tabs,function(e,a){return s("div",{staticClass:"chart__item"},[s("highcharts",{staticClass:"chart",attrs:{options:t.getOptions(a)}})],1)}),t._v(" "),s("slices")],2)},staticRenderFns:[]},J=s("VU/8")(X,Z,!1,null,null,null).exports,tt=new r.a({scrollBehavior:function(){return{x:0,y:0}},mode:"history",routes:[{path:"/login",name:"login",component:z},{path:"/",name:" groups",component:P},{path:"/chart/:id",name:"charts",component:J}]}),et=s("jhCd"),st=s.n(et),at=s("ufW0"),nt=s.n(at);s("ux0l");a.a.use(n.a),a.a.use(st.a),a.a.use(r.a),a.a.use(nt.a),a.a.http.options.root="https://realmetric2.mailfire.io",function(){var t=localStorage.getItem("token");if(!t)return!1;a.a.http.interceptors.push(function(e,s){e.headers.set("Authorization","Basic "+t),s()})}(),new a.a({el:"#app",router:tt,store:N,components:{App:o},template:"<App/>"})},cZYH:function(t,e){},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return s(r(t))}function r(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="uslO"},ux0l:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f9c8e2cf9f2d24474210.js.map