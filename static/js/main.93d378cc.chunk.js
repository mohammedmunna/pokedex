(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(30)},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),c=n(8),s="GET_POKEMONS_REQUEST",i="GET_POKEMONS_SUCCESS",u="GET_POKEMONS_FAIL",p="SET_POKEMONS",l="FILTER_POKEMONS";function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t,n){var a=n().page.pokemons.filter(function(t){return t.name.toLowerCase().includes(e.toLowerCase())});t({type:l,payload:a})}}var d=n(5),h=n(6),k=n(9),f=n(7),E=n(10),v=function(e){function t(){return Object(d.a)(this,t),Object(k.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.pokemon;return r.a.createElement("div",{className:"pokemon"},r.a.createElement("button",{type:"button",className:"pokemon__sprite",style:{backgroundImage:"url(".concat("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.id,".png"),")")}}),r.a.createElement("p",{className:"pokemon__name"},e.name))}}]),t}(a.PureComponent),y=function(e){var t=e.onChange;return r.a.createElement("input",{type:"text",onChange:t,placeholder:"Enter pokemon name...",autoFocus:!0})},O=function(e){function t(){return Object(d.a)(this,t),Object(k.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.getPokemons()}},{key:"handleSearch",value:function(e){this.props.filterPokemons(e.currentTarget.value)}},{key:"render",value:function(){var e=this.props,t=e.displayedPokemons,n=e.isFetched,a=e.error,o=t.map(function(e){return r.a.createElement("li",{className:"pokemons__item",key:e.id},r.a.createElement(v,{pokemon:e}))});return r.a.createElement("div",{className:"page"},a&&r.a.createElement("div",{className:"page__error"},a),r.a.createElement("div",{className:"page__search"},r.a.createElement(y,{onChange:this.handleSearch.bind(this)})),n?r.a.createElement("p",null,"Loading..."):r.a.createElement("ul",{className:"pokemons"},o))}}]),t}(a.Component);var b={getPokemons:function(){return function(e){return e({type:s}),fetch("https://pokeapi.co/api/v2/pokemon/?limit=784").then(function(e){if(e.ok)return e.json();throw new Error("".concat(e.status,": ").concat(e.statusText))}).then(function(t){e({type:i}),e(function(e){var t=e.results.map(function(e){var t=e.url;return e.id=t.substring(34,t.length-1),e.name=e.name.charAt(0).toUpperCase()+e.name.slice(1),e});return{type:p,payload:t}}(t)),e(m())}).catch(function(t){e({type:u,payload:t.message})})}},filterPokemons:m},g=Object(c.b)(function(e){var t=e.page;return{displayedPokemons:t.displayedPokemons,isFetched:t.isFetched,error:t.error}},b)(O),j=(n(28),n(1)),_=n(18),P=(n(29),n(4)),N={isFetched:!1,error:null,pokemons:[],displayedPokemons:[]},w=Object(j.c)({page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(P.a)({},e,{isFetched:!0});case i:return Object(P.a)({},e,{isFetched:!1});case u:return Object(P.a)({},e,{isFetched:!1,error:t.payload});case p:return Object(P.a)({},e,{pokemons:t.payload});case l:return Object(P.a)({},e,{displayedPokemons:t.payload});default:return e}}});var S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[_.a],n=j.d;return Object(j.e)(w,e,n(j.a.apply(void 0,t)))}();Object(o.render)(r.a.createElement(c.a,{store:S},r.a.createElement(g,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.93d378cc.chunk.js.map