(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"Iu/k":function(e,t,a){"use strict";var r=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var l=r(a("bx4M"));a("14J3");var u=r(a("BMrR"));a("+BJd");var s=r(a("mr32"));a("jCWc");var d=r(a("kPKH"));a("g9YV");var c=r(a("wCAj")),o=r(a("lwsE")),i=r(a("W8MJ")),f=r(a("a1gu")),p=r(a("Nsbk")),g=r(a("7W2i"));a("fu2T");var m=r(a("gK9i"));a("+L6B");var y,E,b=r(a("2/Rp")),h=n(a("q1tI")),v=a("MuoO"),z=r(a("v99g")),S=a("uI15"),k=r(a("e7yt")),w=b.default.Group,I=m.default.Panel,C=(y=(0,v.connect)(function(e){var t=e.zeus;return{zeus:t}}),y(E=function(e){function t(){var e,a;(0,o.default)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return a=(0,f.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(n))),a.componentDidMount=function(){a.fetchSrategyInfos()},a.fetchSrategyInfos=function(){var e=a.props.dispatch;e({type:"zeus/fetchSrategyInfos",payload:{}})},a.changeStrategyStatus=function(e){var t=a.props.dispatch,r=e;t({type:"zeus/changeStrategyStatus",payload:r}),(0,S.sleep)(1e3).then(function(){a.fetchSrategyInfos()})},a.renderTable=function(e){var t=Object.keys(e),a=[],r={key:"just-row-key"},n=0;t.forEach(function(t){n+=80,a.push({title:t,dataIndex:t,key:t,width:80}),r[t]=e[t]});var l=[r];return h.default.createElement(c.default,{bordered:!0,scroll:{x:n},size:"small",dataSource:l,columns:a,pagination:!1})},a}return(0,g.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this,t=this.props.zeus,a={xs:{span:24},sm:{span:24},md:{span:20,offset:2},lg:{span:18,offset:3}},r={display:"inline-block",width:150,border:"1px solid #CCC",backgroundColor:"#F3F3F3",paddingLeft:5,marginLeft:3},n=[],o=0;return t.strategyInfos.forEach(function(t){var a=[{title:"\u53c2\u6570\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u53c2\u6570\u503c",dataIndex:"value",key:"value"}],i=[{title:"\u53d8\u91cf\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u53d8\u91cf\u503c",dataIndex:"value",key:"value"}],f=[],p=Object.keys(t.paramMap);p.forEach(function(e){f.push({name:e,value:t.paramMap[e]})});var g=[],m=Object.keys(t.varMap);m.forEach(function(e){g.push({name:e,value:t.varMap[e]})}),o+=1;var y=h.default.createElement(I,{header:h.default.createElement(u.default,null,h.default.createElement(d.default,{span:6},h.default.createElement("div",null,h.default.createElement("span",null,"\u540d\u79f0:"),h.default.createElement("span",{style:r},t.strategyName))),h.default.createElement(d.default,{span:6},h.default.createElement("div",null,h.default.createElement("span",null,"ID:"),h.default.createElement("span",{style:r},t.strategyID))),h.default.createElement(d.default,{span:8,offset:4},h.default.createElement("div",{style:{float:"right",paddingRight:10}},t.isLoaded?h.default.createElement(s.default,{color:"green"},"\u5df2\u52a0\u8f7d"):h.default.createElement(s.default,{color:"red"},"\u672a\u52a0\u8f7d"),t.initStatus?h.default.createElement(s.default,{color:"green"},"\u5df2\u521d\u59cb\u5316"):h.default.createElement(s.default,{color:"red"},"\u672a\u521d\u59cb\u5316"),t.trading?h.default.createElement(s.default,{color:"green"},"\u5df2\u542f\u52a8"):h.default.createElement(s.default,{color:"red"},"\u672a\u542f\u52a8")))),key:"".concat(o)},h.default.createElement(l.default,{style:{marginTop:20}},h.default.createElement(w,{size:"small",style:{float:"right",marginRight:10}},h.default.createElement(b.default,{icon:"up-circle",disabled:!t.isLoaded||t.initStatus,onClick:function(){return e.changeStrategyStatus({actionType:"init",strategyID:t.strategyID})}},"\u521d\u59cb\u5316"),h.default.createElement(b.default,{icon:"play-circle",disabled:!t.isLoaded||t.trading,onClick:function(){return e.changeStrategyStatus({actionType:"start",strategyID:t.strategyID})}},"\u542f\u52a8"),h.default.createElement(b.default,{type:"danger",disabled:!t.trading,onClick:function(){return e.changeStrategyStatus({actionType:"stop",strategyID:t.strategyID})},icon:"stop"},"\u505c\u6b62"),h.default.createElement(b.default,{type:"danger",disabled:!t.isLoaded,onClick:function(){return e.changeStrategyStatus({actionType:"reload",strategyID:t.strategyID})},icon:"reload"},"\u91cd\u65b0\u52a0\u8f7d")),h.default.createElement(u.default,null,h.default.createElement(d.default,{span:10},h.default.createElement("h3",null,"\u53c2\u6570"),h.default.createElement(c.default,{bordered:!0,size:"small",rowKey:function(){return(0,S.uuidv4)()},dataSource:f,columns:a,pagination:!1})),h.default.createElement(d.default,{span:10,offset:4},h.default.createElement("h3",null,"\u53d8\u91cf"),h.default.createElement(c.default,{bordered:!0,size:"small",rowKey:function(){return(0,S.uuidv4)()},dataSource:g,columns:i,pagination:!1})))));n.push(y)}),h.default.createElement(z.default,{className:k.default.userCenter},h.default.createElement(u.default,{gutter:24},h.default.createElement(d.default,a,h.default.createElement(l.default,null,h.default.createElement(w,null,h.default.createElement(b.default,{icon:"up-circle",onClick:function(){return e.changeStrategyStatus({actionType:"initAll"})}},"\u5168\u90e8\u521d\u59cb\u5316"),h.default.createElement(b.default,{icon:"play-circle",onClick:function(){return e.changeStrategyStatus({actionType:"startAll"})}},"\u5168\u90e8\u542f\u52a8"),h.default.createElement(b.default,{type:"danger",icon:"stop",onClick:function(){return e.changeStrategyStatus({actionType:"stopAll"})}},"\u5168\u90e8\u505c\u6b62"),h.default.createElement(b.default,{type:"danger",icon:"reload",onClick:function(){return e.changeStrategyStatus({actionType:"reloadAll"})}},"\u5168\u90e8\u91cd\u65b0\u52a0\u8f7d"),h.default.createElement(b.default,{icon:"sync",onClick:function(){return e.fetchSrategyInfos()}},"\u5237\u65b0\u72b6\u6001"))),h.default.createElement(m.default,null,n))))}}]),t}(h.PureComponent))||E),T=C;t.default=T},e7yt:function(e,t,a){e.exports={avatarHolder:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-strategy\\-zeus\\-zeus-board-avatarHolder",name:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-strategy\\-zeus\\-zeus-board-name",detail:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-strategy\\-zeus\\-zeus-board-detail",title:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-strategy\\-zeus\\-zeus-board-title",group:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-strategy\\-zeus\\-zeus-board-group",address:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-strategy\\-zeus\\-zeus-board-address",tagsTitle:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-strategy\\-zeus\\-zeus-board-tagsTitle",teamTitle:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-strategy\\-zeus\\-zeus-board-teamTitle",tags:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-strategy\\-zeus\\-zeus-board-tags",team:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-strategy\\-zeus\\-zeus-board-team",tabsCard:"antd-pro\\main\\webapp\\static\\-react-s-p-a\\src\\pages\\-strategy\\-zeus\\-zeus-board-tabsCard"}}}]);