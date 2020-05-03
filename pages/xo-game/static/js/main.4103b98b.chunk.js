(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),i=a.n(r),c=(a(17),a(1)),l=a(2),o=a(4),u=a(3),h=a(5),d=function(){return s.a.createElement("div",{className:"game-title"},"TIC TAC TOE")},m=a(8),p=a.n(m),b=a(9),k=a.n(b),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={opened:a.props.toggleCard},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){e.toggleCard!==this.props.toggleCard&&this.setState({opened:this.props.toggleCard})}},{key:"openMenu",value:function(){this.setState(function(e,t){return{opened:!e.opened}}),this.props.closeMenu()}},{key:"render",value:function(){return this.state.opened?s.a.createElement("div",{className:"menu center-items menu-card-one menu-item"},s.a.createElement("span",{className:"rightTopBtn",onClick:this.openMenu.bind(this)},"\u2937"),this.props.children):s.a.createElement("div",null)}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={showMenu:!1,showGame:!1,menuItemToggler:!1,menuType:null,gameStarted:!1,turn:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"menuToggler",value:function(e){this.setState(function(e,t){return{showMenu:!e.showMenu}})}},{key:"setTurn",value:function(e){this.props.setTurn(e),this.setState({gameStarted:!0}),this.setState({menuItemToggler:!1}),this.setState({showMenu:!1}),this.setState({showGame:!this.state.showGame}),this.props.handleShowGame(!this.state.showGame)}},{key:"openMenu",value:function(e){this.setState({menuItemToggler:!0}),this.setState({menuType:e}),this.setState({menuItemToggler:!0})}},{key:"closeMenu",value:function(){this.setState({menuItemToggler:!1})}},{key:"play",value:function(){this.state.gameStarted?(this.props.handleShowGame(!this.state.showGame),this.setState(function(e,t){return{showGame:!e.showGame}})):(this.setState({menuItemToggler:!0}),this.setState({menuType:"play"}))}},{key:"render",value:function(){var e;return"play"===this.state.menuType?e=s.a.createElement(y,{toggleCard:this.state.menuItemToggler,closeMenu:this.closeMenu.bind(this)},s.a.createElement("div",{className:"menuContainer playMenu"},s.a.createElement("p",null,"Choose A Character"),s.a.createElement("div",{className:"playMenuChoice"},s.a.createElement("span",{role:"img","aria-label":"player-x",onClick:this.setTurn.bind(this,"x")},"\u2a2f"),s.a.createElement("span",{role:"img","aria-label":"player-o",onClick:this.setTurn.bind(this,"o")},"\u26aa")))):"help"===this.state.menuType?e=s.a.createElement(y,{toggleCard:this.state.menuItemToggler,closeMenu:this.closeMenu.bind(this)},"HELP"):"about"===this.state.menuType&&(e=s.a.createElement(y,{toggleCard:this.state.menuItemToggler,closeMenu:this.closeMenu.bind(this)},s.a.createElement("div",{className:"menuContainer"},s.a.createElement("span",{className:"about_title"},"Developed By: Leul (dash-dev)"),s.a.createElement("span",{className:"about_title"},"gethub: Leul-dev"),s.a.createElement("span",{className:"about_title1"},"App Description:"),s.a.createElement("p",{className:"about_description"},"This is just a simple game developed using react. inspired by (code pen tic-tac-toe app) it's not efficent and effective it's just a prototype which havent use conventions and easy solutions like redux/context/hooks, i hope you like it... :)"),s.a.createElement("span",{className:"about_date"},"9 Oct,2019")))),s.a.createElement("div",null,s.a.createElement("div",{className:"menu-card-content"},this.state.showGame?null:s.a.createElement("span",{className:"rightTopBtn",onClick:this.menuToggler.bind(this)},"\u2630"),this.state.showMenu?s.a.createElement("div",{className:"menu center-items"},s.a.createElement("span",{className:"rightTopBtn fs",onClick:this.menuToggler.bind(this)},"\xd7"),s.a.createElement("ul",null,s.a.createElement("li",{onClick:this.openMenu.bind(this,"play")},"Play"),s.a.createElement("li",{onClick:this.openMenu.bind(this,"help")},"Help"),s.a.createElement("li",{onClick:this.openMenu.bind(this,"about")},"About"))):null,e,s.a.createElement("div",{className:"menu-center center-items"},s.a.createElement("img",{src:this.state.showGame?k.a:p.a,className:"menu-center-image",alt:"play",onClick:this.play.bind(this)}))))}}]),t}(n.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("h1",null,"Play")}}]),t}(n.Component),f=a(10),E=function(e){function t(e){var a;Object(c.a)(this,t);var n=(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).props.board,s=n.id,r=n.type,i=n.checked,l=n.classes;return a.state={id:s,type:r,checked:i,classes:l},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.cardClicked(!0)}},{key:"checkBoard",value:function(e){return"x"===e?String.fromCodePoint(10799):String.fromCodePoint(9898)}},{key:"cardHoveredEnter",value:function(e){this.state.checked||this.setState({classes:"board-card center-items show"})}},{key:"cardHoveredOut",value:function(){this.state.checked||this.setState({classes:"board-card center-items"})}},{key:"cardClicked",value:function(e){(!0===e?this.state.checked:!this.state.checked)&&("x"===this.props.turn?this.setState({classes:"board-card center-items x-mark show"}):this.setState({classes:"board-card center-items o-mark show"}),this.setState({checked:!0}),this.setState({type:this.props.turn}),this.props.checkedTurn(this.state.id,this.props.turn,!this.state.checked,this.state.classes))}},{key:"render",value:function(){return console.log("board card restart",this.props.restart),s.a.createElement("div",{onMouseOver:this.cardHoveredEnter.bind(this),onMouseOut:this.cardHoveredOut.bind(this),onClick:this.cardClicked.bind(this,!1),className:this.state.classes},this.state.checked?this.checkBoard(this.state.type):this.checkBoard(this.props.turn))}}]),t}(n.Component),T=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).history=[],a.brdcls="board-card center-items",a.initBoard=[{id:1,type:null,checked:!1,classes:a.brdcls},{id:2,type:null,checked:!1,classes:a.brdcls},{id:3,type:null,checked:!1,classes:a.brdcls},{id:4,type:null,checked:!1,classes:a.brdcls},{id:5,type:null,checked:!1,classes:a.brdcls},{id:6,type:null,checked:!1,classes:a.brdcls},{id:7,type:null,checked:!1,classes:a.brdcls},{id:8,type:null,checked:!1,classes:a.brdcls},{id:9,type:null,checked:!1,classes:a.brdcls}],a.state={boards:a.initBoard,turn:a.props.setTurn,winner:null,restart:!1},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){e.setTurn!==this.props.setTurn&&this.setState({turn:this.props.setTurn})}},{key:"checkedTurn",value:function(e,t,a,n){var s;s="x"===this.state.turn?"o":"x",this.setState({turn:s});var r={id:e,type:t,checked:a,classes:n},i=this.state.boards.map(function(e){return e.id===r.id&&(e=r),e});this.history.push(i),this.setState({boards:i}),console.log("HISTORY: ",this.history),this.chackGameWinner(i)}},{key:"chackGameWinner",value:function(e){for(var t=null,a=[[0,1,2],[0,3,6],[0,4,8],[2,5,8],[2,4,6],[1,4,7],[3,4,5],[6,7,8]],n=0;n<a.length;n++){var s=Object(f.a)(a[n],3),r=s[0],i=s[1],c=s[2];if(e[r].type===e[i].type&&e[i].type===e[c].type&&!0===e[r].checked&&!0===e[i].checked&&!0===e[c].checked){t=e[r].type;break}}"x"!==t&&"o"!==t||this.setState({winner:t})}},{key:"restart",value:function(){console.log("restarting game....")}},{key:"render",value:function(){var e=this;return console.log(this.state),s.a.createElement("div",{className:"board-card-container"},this.state.boards.map(function(t){return s.a.createElement(E,{board:t,turn:e.state.turn,checkedTurn:e.checkedTurn.bind(e),key:t.id})}),this.state.winner?s.a.createElement("div",{className:"winner-board center-items"},s.a.createElement("div",{className:"winner-board-ontainer"},"Player: ",this.state.winner," Win's!"),s.a.createElement("button",{className:"restart-btn",onClick:this.restart.bind(this)},"Restart")):null)}}]),t}(n.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"restart",value:function(e){this.props.restart(e)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"game-card-content"},s.a.createElement("div",{className:"game-timer-container"},s.a.createElement(g,null)),s.a.createElement("div",{className:"game-board-container"},s.a.createElement(T,{setTurn:this.props.setTurn,restart:this.restart.bind(this)}))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={showGame:!1,turn:null},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleShowGame",value:function(e){this.setState({showGame:e})}},{key:"setTurn",value:function(e){this.setState({turn:e})}},{key:"restart",value:function(e,t){this.setState({showGame:e}),this.setState({turn:t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(d,null),s.a.createElement("div",{className:"menu-card-container"},s.a.createElement("div",{className:this.state.showGame?"menu-card menu-card-one center-items hide--menu":"menu-card menu-card-one center-items"},s.a.createElement(v,{handleShowGame:this.handleShowGame.bind(this),setTurn:this.setTurn.bind(this)})),s.a.createElement("div",{className:this.state.showGame?"menu-card menu-card-two  show-game":"menu-card menu-card-two"},s.a.createElement(w,{setTurn:this.state.turn,restart:this.restart.bind(this)}))))}}]),t}(n.Component);i.a.render(s.a.createElement(O,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"../media/play.33f10708.png"},9:function(e,t,a){e.exports=a.p+"../media/pause.04d2c8c3.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.4103b98b.chunk.js.map