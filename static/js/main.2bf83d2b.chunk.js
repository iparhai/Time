(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(26).concat([function(e,t,n){"use strict";var a=n(29),r=n.n(a),o=new URLSearchParams(window.location.search),s=o.get("limit")?o.get("limit"):5,i=o.get("dif")?o.get("dif"):"b",c=(o.get("tkn"),"f6083658c798db3c3c3227aa5a813c601da7c196fb0871feb0e23bc2528ca35a9253ef957e37d1d7a25e4360a12652ba5493963207def560cd9cab32db8fe0db6602bc278fcfc5be790fb520811d59236734c52e8e25b8dabdece79b16e1815a15bffd16ef0c5e1d46aa9571d6d687d304724f71aa1b06f929ca2b4da5d5add11efa614b69f83ad544bbf2b41c0afe4689c6457f99006d5943affd31ea6f49d3"),l=0,u=[],m=function(e,t){console.log(u[l]);var n=0;u[l].attemptedAnswer==u[l].corectAnswer&&(n=1);var a=o.get("limit"),s=o.get("cid"),m=o.get("crcid"),p=o.get("sid"),d=o.get("uid"),f=o.get("id"),b=o.get("type");r.a.ajax({url:"https://nano-softs.com/adaptive/api.php?prb="+e+"&aa="+u[l].attemptedAnswer+"&ca="+u[l].corectAnswer+"&tt="+u[l].timeTaken+"&st="+n+"&tkn="+c+"&limit="+a+"&cid="+s+"&crcid="+m+"&sid="+p+"&dif="+i+"&uid="+d+"&id="+f+"&type="+b+"&gt="+t,type:"post",data:"",success:function(e){console.log(e)},error:function(e){}})};t.a={setData:function(e,t,n,a){u.push({index:l,problem:e,wordProblem:t,attemptedAnswer:n,corectAnswer:a,timeTaken:null})},setDataTime:function(e){u[l].timeTaken=e,m(u[l].problem,"a"),m(u[l].wordProblem,"w"),l+=1},sendData:m,authenticate:function(){return!0},limit:s,dif:i}},,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/mango.6fc126f2.png"},,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/removeItem.91412d06.mp3"},,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/grocery.821cde13.gif"},function(module,__webpack_exports__,__webpack_require__){"use strict";var _sessionData__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(26),PRIMES_NUMBERS=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],getRandomSymbol=function(){var e=["+","-","/","*","+"],t=e.length-1;return e[Math.round(Math.random()*(+t-0)+0)]},evaluate=function(e,t){return function(){return getRandomNumber(5)}},getRandomNumber=function(e){var t,n=1;return null==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif||"b"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=5,n=1,t=(Math.random()*(e-n)+1).toFixed()):"i"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif?(e=20,n=10,t=(Math.random()*(e-n)+n).toFixed()):"m"==_sessionData__WEBPACK_IMPORTED_MODULE_0__.a.dif&&(e=30,n=15,t=(Math.random()*(e-n)+n).toFixed()),t},generateProblem=function(e){var t=getRandomNumber(),n=t,a=getRandomSymbol(),r=evaluate(a,t)()||0;return{problem:n+=" ".concat(a," ").concat(r),firstNumber:t,secondNumber:r,symbol:a}},generateTimeProblem=function(){var e=[0,15,30,45];return{hour:(11*Math.random()+1).toFixed(),minute:e[(Math.random()*(e.length-1)).toFixed()]}},generateAdditionProblem=function(e){var t=getRandomNumber(),n=getRandomNumber(),a=t;return{problem:a+=" ".concat("+"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"+"}},generateSubtractionProblem=function(e){var t=getRandomNumber();console.log(t),0==t&&(t=1);var n=getRandomNumber();if(console.log(n),0==n&&(n=1),t<n){var a=t;t=n,n=a}var r=t;return{problem:r+=" ".concat("-"," ").concat(n),firstNumber:t,secondNumber:n,symbol:"-"}},compare=function(e,t){return solve(e)===Number(t)},getRandomInt=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},solve=function solve(expression){var result=eval(expression);return result.toString().includes(".")?Number(result.toFixed(2)):result};__webpack_exports__.a={generateProblem:generateProblem,compare:compare,solve:solve,generateAdditionProblem:generateAdditionProblem,generateSubtractionProblem:generateSubtractionProblem,getRandomInt:getRandomInt,generateTimeProblem:generateTimeProblem}},,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/tostartpressbutton.424d1898.mp3"},function(e,t,n){e.exports=n.p+"static/media/321go.8efff185.mp3"},function(e,t,n){e.exports=n.p+"static/media/rightAnswer.09b0b7bb.mp3"},function(e,t,n){e.exports=n.p+"static/media/wrongAnswer.ddcbc59b.mp3"},,function(e,t,n){e.exports=n.p+"static/media/_1.40d8e09c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_2.65a6b97d.mp3"},function(e,t,n){e.exports=n.p+"static/media/_3.6bd41911.mp3"},function(e,t,n){e.exports=n.p+"static/media/_4.ae5c58d7.mp3"},function(e,t,n){e.exports=n.p+"static/media/_5.fa32eb88.mp3"},function(e,t,n){e.exports=n.p+"static/media/_6.639f363f.mp3"},function(e,t,n){e.exports=n.p+"static/media/_7.7fc04555.mp3"},function(e,t,n){e.exports=n.p+"static/media/_8.9c9b9bcb.mp3"},function(e,t,n){e.exports=n.p+"static/media/_9.fc30493c.mp3"},function(e,t,n){e.exports=n.p+"static/media/_10.594c0b0e.mp3"},function(e,t,n){e.exports=n.p+"static/media/drop.2fd9ac22.wav"},function(e,t,n){e.exports=n.p+"static/media/typing.a0cc197d.mp3"},function(e,t,n){e.exports=n.p+"static/media/apple.d625354e.png"},function(e,t,n){e.exports=n.p+"static/media/banana.411c4e6a.png"},function(e,t,n){e.exports=n.p+"static/media/orange.091d7792.png"},function(e,t,n){e.exports=n.p+"static/media/pear.da95b1d7.png"},function(e,t,n){e.exports=n.p+"static/media/pineapple.73fe0099.png"},function(e,t,n){e.exports=n.p+"static/media/plum.56906949.png"},function(e,t,n){e.exports=n.p+"static/media/pomegranate.7b19bf7b.png"},function(e,t,n){e.exports=n.p+"static/media/strawberry.2684d075.png"},function(e,t,n){e.exports=n.p+"static/media/watermelon.d1d59a88.png"},function(e,t,n){e.exports=n.p+"static/media/lemon.18ba7a06.png"},function(e,t,n){e.exports=n.p+"static/media/carrot.7498fd00.png"},function(e,t,n){e.exports=n.p+"static/media/cherry.560c5f81.png"},function(e,t,n){e.exports=n.p+"static/media/peach.baee8b37.png"},function(e,t,n){e.exports=n.p+"static/media/dragon_fruit.8506c659.png"},function(e,t,n){e.exports=n.p+"static/media/base.eede19c0.svg"},function(e,t,n){e.exports=n.p+"static/media/minute.8d72f3b4.svg"},function(e,t,n){e.exports=n.p+"static/media/hour.dbc7f1cf.svg"},function(e,t,n){e.exports=n.p+"static/media/HB.11d47bf7.svg"},function(e,t,n){e.exports=n.p+"static/media/MB.e1dbc008.svg"},,function(e,t,n){e.exports=n.p+"static/media/grocerySound.a0d6b138.mp3"},function(e,t,n){e.exports=n(208)},,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/paperBag.18c8ae84.png"},function(e,t,n){e.exports=n.p+"static/media/grapes.e036ffe4.png"},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){e.exports=n.p+"static/media/rubix.992960b1.png"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/background.f5f25869.gif"},function(e,t,n){e.exports=n.p+"static/media/background2.b512cd28.gif"},function(e,t,n){e.exports=n.p+"static/media/sound.7360a269.png"},function(e,t,n){e.exports=n.p+"static/media/mute.f02ac89a.png"},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(97),s=n.n(o),i=n(51),c=n(35),l=n(98),u={points:0,lifes:10,seconds:300,level:1,isFinished:!1,isStarted:!1},m=Object(c.compose)(Object(c.applyMiddleware)(l.a))(c.createStore)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GAIN_POINTS":var n=e.points+t.payload;return Object.assign({},e,{points:n});case"SET_TIME":return Object.assign({},e,{seconds:t.payload});case"CORRECT_ANSWER":var a={points:e.points+t.payload.points,level:e.level+t.payload.level};return Object.assign({},e,a);case"REMOVE_LIVE":var r=e.lifes-t.payload.lives;return Object.assign({},e,{level:e.level-t.payload.level,lifes:r});case"FINISH_GAME":return Object.assign({},e,{isFinished:t.payload});case"RESTART_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:300,level:1,isFinished:!1});case"START_GAME":return Object.assign({},e,{isStarted:!0});case"EARN_LIFE":return Object.assign({},e,{lifes:e.lifes+1});case"REBOOT_GAME":return Object.assign({},e,{points:0,lifes:10,seconds:300,level:1,isFinished:!1,isStarted:!1});default:return e}}),p=(n(145),n(6)),d=n(7),f=n(8),b=n(5),h=n(9),g=function(e){return function(t){t(e?{type:"FINISH_GAME",payload:!0}:{type:"RESTART_GAME",payload:!0})}};var v=function(e){var t=e.children,n=e.isClicked;return r.a.createElement("button",{className:"App-link",onClick:n},t)},y={set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},E={set:function(e,t){sessionStorage.setItem(e,t)},get:function(e){return sessionStorage.getItem(e)}},w=n(61),_=n.n(w),O=n(99),S=n.n(O),k=n(100),A=n.n(k),x=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={player:"player",startGameSound:new Audio(S.a),countDownSound:new Audio(A.a)},n.setNameOfPlayer=function(e){n.setState({player:e.target.value})},n.clicked=function(){E.set("onlinePlayer",n.state.player),n.state.countDownSound.play(),n.props.startPressed()},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.state.startGameSound.play(),r.a.createElement("div",null,r.a.createElement("div",{className:"App-brandname"},r.a.createElement("i",{className:"fas fa-graduation-cap"}),r.a.createElement("br",null)),r.a.createElement("p",null,"Press to start the game"),r.a.createElement(v,{isClicked:this.clicked},"Start"))}}]),t}(r.a.Component),R=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={msg:3},n.handleCount=function(e){return 1===e.msg?{msg:"GO"}:"GO"===e.msg?{msg:void 0}:{msg:e.msg-1}},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalRef=setInterval(function(){return e.setState(e.handleCount)},1e3)}},{key:"shouldComponentUpdate",value:function(e,t){return void 0!==t.msg||(clearInterval(this.intervalRef),this.props.isComplete(),!1)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalRef)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"GET READY..."),r.a.createElement("h1",null,this.state.msg))}}]),t}(r.a.Component),j={yellow:"#d8b600",lightBlue:"#61dafb",darkGray:"#999ea7",midGray:"#424855",lightGray:"#f5f5f5",darkBg:"#282c34",red:"#ff6572",green:"#31cd61"},P=n(101),N=n.n(P),M=n(102),T=n.n(M);function C(e){var t=e.text,n=e.type,a=new Audio(N.a),o=new Audio(T.a);return"success"===n?a.play():o.play(),r.a.createElement("span",null,t&&"success"===n&&r.a.createElement("h4",{style:{color:j.green}},t),t&&"success"!==n&&r.a.createElement("h4",{style:{color:j.midGray}},"Answer:  ",r.a.createElement("span",{style:{color:j.lightGray}},t)))}var I=function(e){var t=e.type,n=e.text,a="success"===t?{class:"correct-answer",el:r.a.createElement("i",{className:"fas fa-check"})}:{class:"wrong-answer",el:r.a.createElement("i",{className:"fas fa-times-circle"})};return r.a.createElement("section",null,r.a.createElement("div",{className:"answer  ".concat(a.class)},r.a.createElement("h2",null," ",a.el," ")),r.a.createElement(C,{type:t,text:n}))},D=n(64),G=(n(172),n(173),n(174),n(175),n(26)),B=n(18),L=(n(34),n(48),n(68),n(104),n(105),n(106),n(107),n(108),n(109),n(110),n(111),n(112),n(113),n(49),n(50),n(114),n(36),n(115)),U=n.n(L),W=n(116),F=n.n(W),K=n(117),V=n.n(K),H=n(40),J=n.n(H),Y=n(118),q=n.n(Y),z=n(119),$=n.n(z),Q=n(120),X=n.n(Q),Z=n(121),ee=n.n(Z),te=n(122),ne=n.n(te),ae=n(123),re=n.n(ae),oe=n(124),se=n.n(oe),ie=n(125),ce=n.n(ie),le=n(126),ue=n.n(le),me=n(127),pe=n.n(me),de=n(128),fe=n.n(de),be=n(129),he=n.n(be),ge=(F.a,V.a,J.a,q.a,$.a,X.a,ee.a,ne.a,re.a,se.a,ce.a,ue.a,pe.a,fe.a,he.a,n(52)),ve=n(130),ye=n.n(ve),Ee=n(131),we=n.n(Ee),_e=n(132),Oe=n.n(_e),Se=n(133),ke=n.n(Se),Ae=n(134),xe=n.n(Ae);n(180),n(181);function Re(e){var t=Object(a.useState)(0),n=Object(B.a)(t,2),o=n[0],s=n[1],i=Object(a.useState)(0),c=Object(B.a)(i,2),l=c[0],u=c[1],m=Object(a.useState)(30),p=Object(B.a)(m,2),d=p[0],f=(p[1],Object(a.useState)({hour:0,minute:0})),b=Object(B.a)(f,2),h=b[0],g=b[1],v={minuteRotate:{transform:"rotate("+o+"deg)"},hourRotate:{transform:"rotate("+l+"deg)"}};return Object(a.useEffect)(function(){g(Object(ge.a)({},h,{minute:o/6}))},[o]),Object(a.useEffect)(function(){g(0==l?Object(ge.a)({},h,{hour:12}):Object(ge.a)({},h,{hour:l/30}))},[l]),r.a.createElement("div",{style:{display:"flex",marginLeft:"18vh"}},r.a.createElement("div",{style:{position:"relative",marginTop:"32vh"}},r.a.createElement("img",{src:ke.a,className:"HB",style:v.hourRotate,onClick:function(){u(l+d==360?0:l+d)}}),r.a.createElement("img",{src:xe.a,className:"MB",style:v.minuteRotate,onClick:function(){s(o+d==360?0:o+d)}}),r.a.createElement("img",{src:we.a,className:"minute",style:v.minuteRotate}),r.a.createElement("img",{src:Oe.a,className:"hour",style:v.hourRotate}),r.a.createElement("img",{src:ye.a,className:"baseClock"})),r.a.createElement("div",null,r.a.createElement("button",{className:"glow-on-hover  bttn",type:"button",style:{marginTop:"46vh",marginLeft:"3vw"},onClick:function(){parseInt(h.hour)==parseInt(e.correctAnswer.hour)&&parseInt(h.minute)==parseInt(e.correctAnswer.minute)?e.submit(!0,h.hour+":"+h.minute):e.submit(!1,h.hour+":"+h.minute)}}," ",r.a.createElement("i",{className:"fa fa-paper-plane fa-3x"}))))}var je=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o))))._isMounted=!1,n.state={problem:"",wordProblem:"",hour:0,minute:0,symbol:"",answer:0,attemptedAnswer:0,modal:"",modalShowing:!1,streaks:0,problemTemplates:[],randomImage:"",typingClick:new Audio(U.a),enableDrop:!1,totalProblems:1},n.earnLife=function(){n.props.onEarnLife(),n.showModal("success","STREAK!! You won a life \u2665"),n.setState({streaks:0})},n.correctAnswer=function(){n.state.streaks>2?n.earnLife():n.showModal("success"),n._isMounted&&n.props.onCorretAnswer(),n.setState(function(e){return{streaks:e.streaks+1}}),n.nextProblem()},n.wrongAnswer=function(){n._isMounted&&n.props.onWrongAnswer(),n.setState({streaks:0}),n.showModal("error"),n.nextProblem()},n.nextProblem=function(){setTimeout(function(){n.getProblem(),n._isMounted&&n.setState({modalShowing:!1,answer:0,totalProblems:n.state.totalProblems}),n.props.lifes>0&&n.answerInput&&n.answerInput.focus()},2500)},n.evaluateProblem=function(){var e=D.a.solve(n.state.problem),t=n.state.answer;return G.a.setData(n.state.hour+"!"+n.state.minute,n.state.wordProblem,t,e),D.a.compare(n.state.problem,n.state.answer)?n.correctAnswer():n.wrongAnswer()},n.keyingUp=function(e){"Enter"===e.key&&n.evaluateProblem();var t=e.target.value;n.setState({answer:Number(t.match(/((-?)\d+)/g))})},n.showModal=function(e,t){n.setState({modal:r.a.createElement(I,{type:e,text:t}),modalShowing:!0})},n.getProblem=function(){var e=D.a.generateTimeProblem(n.props.points);n._isMounted&&n.setState({problem:e.problem,hour:e.hour,minute:e.minute,problemTemplates:[{pt:0==e.minute?"Set the clock to "+e.hour+" O' Clock":30==e.minute?"Set the clock to half past "+e.hour:"Set the clock to "+e.minute+" past "+e.hour}]},function(){var e=n.getRandomProblemTemplate();n.setState({wordProblem:e.pt,randomImage:e.ptImage})})},n.getRandomProblemTemplate=function(){return n.state.problemTemplates[D.a.getRandomInt(0,n.state.problemTemplates.length-1)]},n.setEnableDrop=function(){n.setState({enableDrop:n.state.enableDrop})},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){this.state.totalProblems>G.a.limit&&this.props.onEndGame(this.state.points)}},{key:"componentDidMount",value:function(){this._isMounted=!0,this.getProblem()}},{key:"shouldComponentUpdate",value:function(e){return this.props.lifes<1?(this.props.onEndGame(this.state.points),!1):e.lifes>-1}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"show-up"},r.a.createElement("div",null,this.state.modalShowing?this.state.modal:r.a.createElement("div",null,r.a.createElement("div",{className:"thought ",style:{color:"white"},ref:this.wrapperRef},r.a.createElement(_.a,{text:this.state.wordProblem,speed:70,eraseSpeed:70,eraseDelay:1e7,displayTextRenderer:function(t,n){return r.a.createElement("h5",null,t.split("").map(function(t,n){var a="".concat(n);return 0==n&&e.state.typingClick.play(),"?"==t&&e.state.typingClick.pause(),r.a.createElement("span",{key:a},t)}))}})),r.a.createElement(Re,{correctAnswer:{hour:this.state.hour,minute:this.state.minute},attemptedAnswer:function(t){e.setState({attemptedAnswer:t})},submit:function(t,n){G.a.setData(e.state.hour+"!"+e.state.minute,e.state.wordProblem,n,e.state.hour+":"+e.state.minute),t?e.correctAnswer():e.wrongAnswer()}}))))}}]),t}(r.a.Component),Pe={fontSize:"1.5em",color:"black",fontFamily:"fantasy",cursor:"pointer"},Ne={height:0,border:"0.5px solid #61dafb"},Me={color:"black",fontWeight:"bold"},Te=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=Ne,t=Pe,n=Me;return r.a.createElement("div",null,r.a.createElement("h1",null,"GAME OVER"),r.a.createElement("hr",{style:e}),r.a.createElement("h3",null,"FINAL SCORE ",r.a.createElement("b",{style:n},this.props.points)),r.a.createElement("br",null),r.a.createElement("h3",{style:t,onClick:this.props.retryGame},"RETRY"),this.children)}}]),t}(r.a.Component),Ce=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={seconds:n.props.seconds,level:n.props.level,limit:0,totalProblems:1},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({seconds:this.props.seconds,limit:G.a.limit}),this._secondsIntervalRef=setInterval(function(){return e.setState(function(e){return{seconds:--e.seconds}})},1e3)}},{key:"componentDidUpdate",value:function(){var e=this;this.props.level!==this.state.level&&(G.a.setDataTime(300-this.state.seconds),this.setState(function(t){return{level:e.props.level,totalProblems:e.state.totalProblems+1,seconds:300}}),this.props.setTimeChanged(this.state.seconds))}},{key:"componentWillUnmount",value:function(){clearInterval(this._secondsIntervalRef)}},{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("b",null," ",this.state.totalProblems,"/",this.state.limit," "))}},{key:"timeTaken",value:function(){return 20-this.state.seconds}}]),t}(r.a.Component);Ce.defaultProps={level:0};var Ie=Ce;var De=function(e){var t=e.lifes,n=[];if(t<5)for(var a=0;a<t;a++)n.push(r.a.createElement("i",{key:a,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));else n.push(r.a.createElement("i",{key:t,style:{marginLeft:"0.1em"},className:"fas fa-heart"}));return r.a.createElement("span",{style:{color:j.red}},t>4&&r.a.createElement("b",null,"".concat(t,"x")),n)};function Ge(e){var t=e.points;return r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-star",style:{color:j.yellow}})," ",t)}n(182);var Be=n(135),Le={container:{display:"flex",justifyContent:"space-around"},el:{flex:1},title:{margin:"0.6em auto"},divider:{border:"0.5px solid ".concat(j.midGray)},timeCol:{flex:1,padding:"0.3em 0em",fontSize:"0.6em",color:j.darkGray},sectionContainer:{textAlign:"left",padding:"0.15em 0em"}};function Ue(e){var t=e.player;return r.a.createElement("div",{style:Le.sectionContainer},r.a.createElement("h5",{style:Le.title},t.name),r.a.createElement("div",{style:Le.container},r.a.createElement("small",{style:Le.timeCol},r.a.createElement("i",{className:"fas fa-clock"})," "+Be(new Date(t.time)).fromNow()),r.a.createElement("small",{style:Le.el},r.a.createElement("i",{className:"fas fa-star",style:{color:j.yellow}})," ",t.points)),r.a.createElement("hr",{style:Le.divider}))}function We(e){var t=e.points,n=E.get("onlinePlayer"),a=JSON.parse(y.get("scoreTable"))||[];return a.push({name:n,points:t,time:Date.now()}),a=a.sort(function(e,t){return t.points-e.points}).slice(0,4),y.set("scoreTable",JSON.stringify(a)),r.a.createElement("div",null,a.map(function(e,t){return r.a.createElement(Ue,{player:e,key:t})}))}var Fe=n(136),Ke=n.n(Fe),Ve=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={isBeginningDone:!1,lastPoints:0,sound:new Audio(Ke.a),mute:!1},n.retryGame=function(){n.setState({isBeginningDone:!1}),n.props.onRetryGame()},n.completeBeginning=function(){n.setState({isBeginningDone:!0})},n.handleSoundClick=function(){n.state.sound.paused?n.state.sound.paused&&(n.state.sound.play(),n.setState({mute:!1})):(n.state.sound.pause(),n.setState({mute:!0}))},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.state.sound.play()}},{key:"render",value:function(){return this.props.isFinished?r.a.createElement(Te,Object.assign({},this.props,{retryGame:this.retryGame}),r.a.createElement(We,this.props)):r.a.createElement("div",null,this.state.isBeginningDone?r.a.createElement("div",{className:"noselect "},r.a.createElement("div",{className:"App-header-bar"},r.a.createElement("span",{onClick:this.handleSoundClick},this.state.mute?r.a.createElement("i",{className:"fas fa-volume-mute"}):r.a.createElement("i",{className:"fa fa-volume-up "})),r.a.createElement(Ie,this.props),r.a.createElement(De,this.props),r.a.createElement(Ge,this.props)),r.a.createElement("div",null,r.a.createElement(je,this.props))):r.a.createElement(R,{isComplete:this.completeBeginning}))}}]),t}(r.a.Component),He=(n(183),n(184),n(185),n(63)),Je=n.n(He);n(186),n(187),n(188),n(30);var Ye=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={isAuth:!1},n.gameStart=function(){n.props.onStartGame()},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){G.a.authenticate()&&this.setState({isAuth:!0})}},{key:"handleURL",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},this.state.isAuth?r.a.createElement("div",null,(G.a.dif,r.a.createElement("img",{src:Je.a,id:"bg",alt:""})),this.props.isStarted?r.a.createElement(Ve,Object.assign({},this.props,{gameStart:this.gameStart})):r.a.createElement(x,{startPressed:this.gameStart})):r.a.createElement("h1",{style:{color:"black"}}," Error 404 : URL not found!!! ")))}}]),t}(a.Component),qe=Object(i.b)(function(e){return{points:e.points,lifes:e.lifes,seconds:e.seconds,level:e.level,isFinished:e.isFinished,isStarted:e.isStarted}},function(e){return{onCorretAnswer:function(t){return e(function(e){e({type:"CORRECT_ANSWER",payload:{points:100,level:1}})})},onWrongAnswer:function(){return e(function(e){e({type:"REMOVE_LIVE",payload:{level:1,lives:1}})})},setTimeChanged:function(t){return e((n=t,function(e){e({type:"SET_TIME",payload:n})}));var n},onEndGame:function(){return e(g(!0))},onRetryGame:function(){return e(g(!1))},onReStartGame:function(){return e(function(e){e({type:"REBOOT_GAME"})})},onStartGame:function(){return e(function(e){e({type:"START_GAME"})})},onEarnLife:function(){return e(function(e){e({type:"EARN_LIFE"})})}}})(Ye),ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(i.a,{store:m},r.a.createElement(qe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Time",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Time","/service-worker.js");ze?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$e(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):$e(t,e)})}}()}]),[[137,1,2]]]);
//# sourceMappingURL=main.2bf83d2b.chunk.js.map