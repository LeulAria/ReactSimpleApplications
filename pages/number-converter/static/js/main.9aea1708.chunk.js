(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(2),r=a(3),l=a(5),s=a(4),c=a(6),o=a(0),u=a.n(o),m=a(8),d=a.n(m),h=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={displayed:!1,answerBinary:null,answerOctal:null,answerDeciaml:null,answerHex:null},a.calculate=function(e){var t=+e;null!==t?a.setState({displayed:!0}):a.setState({displayed:!1}),console.log(t),a.setState({answerBinary:t.toString(2)}),a.setState({answerOctal:t.toString(8)}),a.setState({answerDeciaml:t.toString(10)}),a.setState({answerHex:t.toString(16)})},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){alert("Hi there this is a very simple number converter application build using react. inspiration Traversy Media number converter with HTML,BOOTSTRAP,JS. im Leul z Developer. gethub  @Leul-dev")}},{key:"render",value:function(){return u.a.createElement("div",{className:"container"},u.a.createElement(p,{calculate:this.calculate}),u.a.createElement(g,{theme:"orange",imgLabel:"01",title:"Binary",ans:this.state.answerBinary,displayed:this.state.displayed}),u.a.createElement(g,{theme:"green",imgLabel:"8",title:"Octal",ans:this.state.answerOctal,displayed:this.state.displayed}),u.a.createElement(g,{theme:"blue",imgLabel:"10",title:"Decimal",ans:this.state.answerDeciaml,displayed:this.state.displayed}),u.a.createElement(g,{theme:"red",imgLabel:"16",title:"Hexa-Decimal",ans:this.state.answerHex,displayed:this.state.displayed}))}}]),t}(o.Component)),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(s.a)(t).call(this,e))).onChange=function(e){a.setState({value:e.target.value}),a.props.calculate(e.target.value)},a.input_style={display:"block",background:"#fff",border:"none",borderRadius:"2px",boxShadow:"inset 0px 1px 2px rgba(0,0,0,0.4)",padding:"0px 1em",width:"100%",height:"35px",fontFamily:"Verdana",fontSize:"0.8em",outline:"none",margin:"3em auto"},a.state={value:""},a.onChange=a.onChange.bind(Object(n.a)(Object(n.a)(a))),a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("input",{type:"number",onChange:this.onChange,value:this.state.value,style:this.input_style,placeholder:"Enter any Number....",autoFocus:!0}))}}]),t}(o.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).theme="card ",a.img="img ",a.themeHandler=function(){var e=a.props.theme;"red"===e?(a.theme+="red",a.img+=" green"):"blue"===e?(a.theme+="blue",a.img+=" orange"):"green"===e?(a.theme+="green",a.img+=" red"):"orange"===e?(a.theme+="orange",a.img+=" blue"):(a.theme+="",a.img+=""),!0===a.props.displayed?a.theme+=" display":a.theme+=" hide"},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return this.themeHandler(),u.a.createElement("div",{className:this.theme},u.a.createElement("div",{className:this.img},this.props.imgLabel),u.a.createElement("div",{className:"title"},this.props.title),u.a.createElement("div",{className:"calc"},this.props.ans))}}]),t}(o.Component);d.a.render(u.a.createElement(h,null),document.getElementById("root"))},16:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.9aea1708.chunk.js.map