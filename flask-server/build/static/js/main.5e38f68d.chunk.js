(this["webpackJsonppurlbot-react"]=this["webpackJsonppurlbot-react"]||[]).push([[0],{52:function(e,t,n){},77:function(e,t,n){},81:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(23),i=n.n(a),r=(n(52),n(14)),l=n(45),o=n(19),h=n(16),j=n.n(h),d=n(0),b=function(e){return Object(d.jsxs)("div",{className:"card pattern-display",children:[Object(d.jsx)("h1",{className:"card-title",children:"Your Hat Pattern"}),Object(d.jsx)("h4",{children:"Sizes are given as (children, women, men)."}),Object(d.jsxs)("div",{className:"pattern-button-area m-auto",children:[Object(d.jsx)("button",{className:"btn m-4 btn-info save-pattern",type:"button",onClick:function(){j.a.post("/patterns",{gauge:e.gauge,type:"hat",nickname:e.name}).then((function(t){console.log(t),alert("Pattern Saved! Type: Hat, Gauge: ".concat(e.gauge," "))})).catch((function(e){console.log(e)}))},children:"Save Pattern"}),Object(d.jsx)("button",{onClick:function(){e.setStatus()},className:"reset btn m-4 btn-light no-print",children:"\u2716 RESET"})]}),Object(d.jsxs)("ol",{className:"card-body",children:[Object(d.jsxs)("li",{children:["Cast on (",20*e.gauge,", ",23*e.gauge,", ",24*e.gauge,") stitches."]}),Object(d.jsx)("li",{children:"Knit in k1, p2 rib for 2.5 inches."}),Object(d.jsx)("li",{children:"Knit in your chosen body stitch for (4.5, 5, 6.5) inches."}),Object(d.jsxs)("li",{children:["Complete decrease set-up round:",Object(d.jsx)("ul",{children:Object(d.jsxs)("li",{children:["Knit in chosen stitch ((",20*e.gauge-2,", ",23*e.gauge-2,","," ",24*e.gauge-2,"), k2tog, place marker."]})})]}),Object(d.jsxs)("li",{children:["Then continue decrease pattern:",Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Even rounds: knit in chosen stitch."}),Object(d.jsx)("li",{children:"Odd rounds: knit in chosen stitch to 2 before marker, k2tog."})]})]}),Object(d.jsxs)("li",{children:["Repeat these two rounds until you have (10, 11, 12) stitches left, ending on an odd round."," "]}),Object(d.jsx)("li",{children:"Cut yarn leaving long tail and thread remaining stitches through, pulling tight and securing the end on the inside of the hat with a crochet hook."})," ",Object(d.jsxs)("li",{children:["Weave in starting end and"," ",Object(d.jsx)("a",{href:"https://blog.knitpicks.com/tutorial-blocking-knits/",target:"_blank",rel:"noreferrer",children:"block hat"})," ","to measurements below."]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:' Children = (20" x 8.5")'}),Object(d.jsx)("li",{children:' Women = (23" x 11")'}),Object(d.jsx)("li",{children:' Men = (24" x 11.5")'})]})]}),Object(d.jsx)("button",{className:"print btn btn-light no-print",onClick:function(){window.print()},children:"\ud83d\udcc4 PRINT"})]})},u=function(e){return Object(d.jsxs)("div",{className:"card pattern-display",children:[Object(d.jsx)("h1",{className:"card-title",children:"Your Scarf Pattern"}),Object(d.jsx)("h4",{children:"Sizes are given as (child, adult)."}),Object(d.jsxs)("div",{className:"pattern-button-area m-auto",children:[Object(d.jsx)("button",{className:"btn m-4 btn-info save-pattern",type:"button",onClick:function(){j.a.post("/patterns",{gauge:e.gauge,type:"scarf",nickname:e.name}).then((function(t){console.log(t),alert("Pattern Saved! Type: Scarf, Gauge: ".concat(e.gauge," "))})).catch((function(e){console.log(e)}))},children:"Save Pattern"}),Object(d.jsx)("button",{onClick:function(){e.setStatus()},className:"reset btn m-4 btn-light no-print",children:"\u2716 RESET"})]}),Object(d.jsxs)("ol",{className:"card-body",children:[Object(d.jsxs)("li",{children:["Cast on (",6*e.gauge,", ",8*e.gauge,") stitches."," "]}),Object(d.jsx)("li",{children:"Knit in your chosen stitch until you measure (48, 60) inches from cast on, or desired length, and bind off in pattern."}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"https://blog.knitpicks.com/tutorial-blocking-knits/",target:"_blank",rel:"noreferrer",children:"Block"})," ","to measurements listed below."]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:' Children = (6" x 48")'}),Object(d.jsx)("li",{children:' Adult = (8" x 60")'})]})]}),Object(d.jsx)("button",{className:"print btn btn-light no-print",onClick:function(){window.print()},children:"\ud83d\udcc4 PRINT"})]})},m=function(e){var t=[Math.round(5.5*e.gauge),Math.round(6.5*e.gauge),Math.round(7*e.gauge),Math.round(8*e.gauge)],n=Object(c.useState)([]),s=Object(r.a)(n,2),a=s[0],i=s[1];if(a.length<4)for(var l=0;l<t.length;l++)t[l]%2!==0&&(t[l]=t[l]+1),i([].concat(t));return Object(d.jsxs)("div",{className:"card pattern-display",children:[Object(d.jsx)("h1",{className:"card-title",children:"Your Mitten Pattern"}),Object(d.jsx)("h4",{children:"Sizes are given as (children, adult S, M, L)."}),Object(d.jsxs)("h4",{children:["See ",Object(d.jsx)("a",{href:"#measurements",children:"measurements"})," below."]}),Object(d.jsxs)("div",{className:"pattern-button-area m-auto",children:[Object(d.jsx)("button",{className:"btn m-4 btn-info save-pattern",type:"button",onClick:function(){j.a.post("/patterns",{gauge:e.gauge,type:"mittens",nickname:e.name}).then((function(t){console.log(t),alert("Pattern Saved! Type: Mittens, Gauge: ".concat(e.gauge," "))})).catch((function(e){console.log(e)}))},children:"Save Pattern"}),Object(d.jsx)("button",{onClick:function(){e.setStatus()},className:"reset btn m-4 btn-light no-print",children:"\u2716 RESET"})]}),Object(d.jsx)("h3",{className:"mt-4",children:Object(d.jsx)("strong",{children:"Work cuff:"})}),Object(d.jsxs)("ol",{className:"card-body",children:[Object(d.jsxs)("li",{children:["Cast on (",a[0],", ",a[1],", ",a[2],", ",a[3],") stitches with double pointed needles ",Object(d.jsx)("strong",{children:"one size smaller"})," than the needles you used to check your gauge."]}),Object(d.jsxs)("li",{children:[Object(d.jsx)("strong",{children:"Place marker"})," and join in the round."]}),Object(d.jsx)("li",{children:"Work k1, p1 rib for (2.5, 3, 4, 4) inches."}),Object(d.jsxs)("li",{children:["Switch to the ",Object(d.jsx)("strong",{children:"larger needles"})," (the ones you used to check your gauge."]}),Object(d.jsx)("li",{children:"Knit in your chosen stitch for (.5, .75, .75, .75) inches."})]}),Object(d.jsx)("h3",{className:"mt-4",children:Object(d.jsx)("strong",{children:"Work thumb gusset:"})}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Set up round: m1, k1, m1, place marker. Knit in chosen stitch to end of round."}),Object(d.jsx)("li",{children:"Rounds 1 and 2: knit in chosen stitch."}),Object(d.jsx)("li",{children:"Round 3: m1, knit in chosen stitch to marker, m1, slip marker, knit in chosen stitch to end."}),Object(d.jsx)("li",{children:"Work rounds 1-3 for approximately (1.5, 2, 2, 2,25) inches, ending with round 3."}),Object(d.jsx)("li",{children:"Place stitches between the markers on a piece of waste yarn and leave to the side. Remove the extra marker so that only the beginning of round marker remains."})]}),Object(d.jsx)("h3",{className:"mt-4",children:Object(d.jsx)("strong",{children:"Work and shape body:"})}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Knit in chosen stitch until body measures (3, 3.75, 4, 4.5) inches from gusset."}),Object(d.jsxs)("li",{children:["Decrease setup round: knit in chosen stitch (",Math.round(5.5*e.gauge/2),","," ",Math.round(6.5*e.gauge/2),","," ",Math.round(7*e.gauge)/2,", ",Math.round(8*e.gauge/2),"), place marker, knit until end of round."]}),Object(d.jsx)("li",{children:"Decrease round: *k1, ssk, knit in chosen stitch to 3 sts before marker, k2tog, k1*"}),Object(d.jsx)("li",{children:"Work decrease round until 8 stitches remain."}),Object(d.jsx)("li",{children:"Break yarn and thread tail through remaining stitches; pull tight to secure."})]}),Object(d.jsx)("h3",{className:"mt-4",children:Object(d.jsx)("strong",{children:"Work thumb:"})}),Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Put held stitches on larger needles and knit in chosen stitch across, picking up 1 stitch from body of mitten."}),Object(d.jsx)("li",{children:"Place marker and join in the round."}),Object(d.jsx)("li",{children:"Knit in chosen stitch for (1.25, 1.75, 2, 2.25) inches from picked up stitch."}),Object(d.jsx)("li",{children:"*k2tog*"}),Object(d.jsx)("li",{children:"Break yarn, threading through remaining stitches and pull tight to secure."})]}),Object(d.jsx)("h3",{className:"mt-4",children:Object(d.jsx)("strong",{children:"Finishing:"})}),Object(d.jsxs)("ol",{id:"measurements",children:[Object(d.jsxs)("li",{children:["Weave in ends and"," ",Object(d.jsx)("a",{href:"https://blog.knitpicks.com/tutorial-blocking-knits/",target:"_blank",rel:"noreferrer",children:"block mittens"})," ","to measurements below."]}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:' Children = (6" circum. x 8.5" long)'}),Object(d.jsx)("li",{children:' Adult S = (7" x 10.5")'}),Object(d.jsx)("li",{children:' Adult M = (7.75" x 12")'}),Object(d.jsx)("li",{children:' Adult L = (8.5" x 13")'})]})]}),Object(d.jsx)("button",{className:"print btn btn-light no-print",onClick:function(){window.print()},children:"\ud83d\udcc4 PRINT"})]})};n(77);function g(e){return Object(d.jsxs)("div",{className:"container",children:[function(){switch(e.project){case"SCARF":return Object(d.jsx)(u,{setStatus:e.setStatus,gauge:e.gauge,name:e.name});case"HAT":return Object(d.jsx)(b,{setStatus:e.setStatus,gauge:e.gauge,name:e.name});case"MITTENS":return Object(d.jsx)(m,{setStatus:e.setStatus,gauge:e.gauge,name:e.name});default:return Object(d.jsx)("p",{children:"Please select a valid pattern type."})}}(),Object(d.jsx)("h3",{className:"stitch-title no-print",children:"Suggested Stitches"})," ",Object(d.jsxs)("ul",{className:"difficulty-ratings no-print",children:[Object(d.jsx)("li",{children:"\u2b50 Easier "}),Object(d.jsx)("li",{children:"\u2b50\u2b50 Intermediate "}),Object(d.jsx)("li",{children:"\u2b50\u2b50\u2b50 Advanced"})]}),Object(d.jsxs)("div",{className:"row stitch-display no-print",children:[Object(d.jsxs)("div",{className:"card col-sm-3",children:[Object(d.jsx)("img",{className:"card-img-top",src:"http://freeknitstitches.com/Images/106/106-big.jpg",alt:"Image of pattern"}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("h5",{className:"card-title",children:[Object(d.jsx)("a",{href:"http://freeknitstitches.com/pattern.php?num=106&menu=2",children:"Forked Lightning"})," ","\u2b50"]})})]}),Object(d.jsxs)("div",{className:"card col-sm-3",children:[Object(d.jsx)("img",{className:"card-img-top",src:"http://freeknitstitches.com/Images/216/216-big.jpg",alt:"Image of pattern"}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("h5",{className:"card-title",children:[" ",Object(d.jsx)("a",{href:"http://freeknitstitches.com/pattern.php?num=216&menu=1",children:"Twisted Rib"})," ","\u2b50\u2b50"]})})]}),Object(d.jsxs)("div",{className:"card col-sm-3",children:[Object(d.jsx)("img",{className:"card-img-top",src:"http://freeknitstitches.com/Images/290/290-big.jpg",alt:"Image of pattern"}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("h5",{className:"card-title",children:[" ",Object(d.jsx)("a",{href:"http://freeknitstitches.com/pattern.php?num=290&menu=4",children:"Sine Wave"})," ","\u2b50\u2b50\u2b50"]})})]})]}),Object(d.jsxs)("h3",{className:"yarn-calculator no-print",children:["Not sure if you have enough yarn for your project?"," ",Object(d.jsx)("a",{href:"https://www.JimmyBeansWool.com/knittingCalculator",children:"Find out here."})]})]})}function x(){var e=Object(c.useState)("Select Your Project"),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("PurlBot User"),i=Object(r.a)(a,2),h=i[0],j=i[1],b=Object(c.useState)(),u=Object(r.a)(b,2),m=u[0],x=u[1],O=Object(c.useState)(!1),p=Object(r.a)(O,2),f=p[0],k=p[1];return f?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(g,{setStatus:k,project:n,name:h,gauge:m})}):Object(d.jsx)("div",{id:f?null:"pattern-generator",children:Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("br",{}),Object(d.jsx)("h5",{className:"card-title",children:"Pattern Generator"}),Object(d.jsxs)("form",{id:"scarf-form",autoComplete:"off",children:[Object(d.jsx)("br",{}),Object(d.jsx)("h5",{children:"Optional: enter a nickname for the pattern."}),Object(d.jsx)("input",{className:"form-control",type:"text",placeholder:"Type your pattern's nickname here...",id:"name",onChange:function(e){e.target.value.length>0&&j(e.target.value)}}),Object(d.jsx)("br",{}),Object(d.jsx)("h5",{children:"What do you want to knit?"}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsxs)(l.a,{id:"dropdown-basic-button",title:n,variant:"primary",onSelect:function(e){s(e.slice(2).toUpperCase())},children:[Object(d.jsx)(o.a.Item,{href:"#/scarf",value:"Scarf",children:"SCARF"}),Object(d.jsx)(o.a.Item,{href:"#/hat",value:"Hat",children:"HAT"}),Object(d.jsx)(o.a.Item,{href:"#/mittens",value:"Mittens",children:"MITTENS"})]})}),Object(d.jsx)("br",{}),Object(d.jsxs)("h5",{children:["On your gauge swatch, how many stitches do you count",Object(d.jsx)("strong",{children:" horizontally "})," per inch?"]}),Object(d.jsx)("input",{className:"form-control",type:"text",placeholder:"Type a number here...",id:"gauge",onChange:function(e){x(e.target.value)}}),Object(d.jsx)("br",{})]}),Object(d.jsx)("button",{className:"btn btn-lg btn-success",type:"button",id:"submit",onClick:function(e){e.preventDefault(),0*m===0?k(!0):alert("Please enter a number for your gauge.")},children:"Submit"})]})})})}var O=n(18),p=n(5),f=(n(81),function(){return Object(d.jsx)("div",{className:"nav-container",children:Object(d.jsxs)("nav",{className:"no-print navbar navbar-expand-lg navbar-light bg-light",children:[Object(d.jsx)(O.b,{to:"/",className:"navbar-brand",children:Object(d.jsxs)("h1",{className:"nav-title",children:[Object(d.jsx)("span",{id:"purl-title",children:"Purl"}),Object(d.jsx)("span",{id:"bot-title",children:"Bot"})]})}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(d.jsx)("li",{className:"nav-item active",children:Object(d.jsx)(O.b,{to:"/how-to",className:"nav-link",children:"How To Use"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(O.b,{to:"/about",className:"nav-link",children:"About"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{href:"http://127.0.0.1:5000/account",className:"nav-link",children:"My Account"})})]}),Object(d.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(d.jsx)("li",{className:"nav-item register",children:Object(d.jsx)("a",{href:"http://127.0.0.1:5000/register",className:"nav-link",children:Object(d.jsx)("button",{className:"btn btn-success",children:"Register"})})}),Object(d.jsx)("li",{className:"nav-item login",children:Object(d.jsx)("a",{href:"http://127.0.0.1:5000/login",className:"nav-link",children:Object(d.jsx)("button",{className:"btn btn-primary",children:"Log In"})})})]})]})]})})});n(87);function k(){return Object(d.jsxs)("footer",{id:"coded-by",className:"no-print",children:[Object(d.jsx)("a",{href:"https://github.com/griffique/griffin-she-codes-plus",target:"_blank",rel:"noreferrer",children:"Open Source Code"})," ","by ","",Object(d.jsx)("a",{href:"https://www.linkedin.com/in/quinn-griffin-9955711b8/",target:"_blank",rel:"noreferrer",children:"Quinn Griffin"})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("span",{style:{fontStyle:"italic",fontSize:"16px"},children:[" ","Have you made something with PurlBot?"," ",Object(d.jsx)("a",{href:"mailto:purlbot@protonmail.com",children:"Contact me"})," with photos of your project or suggestions!"]})]})}function v(){return Object(d.jsxs)("div",{className:"using-purlbot",id:"how-to",children:[Object(d.jsx)("img",{src:"/images/howto.jpg",className:"card-img-top img-fluid",alt:"How to use Purlbot"}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"text-area",children:[Object(d.jsxs)("ol",{children:[Object(d.jsx)("li",{children:"Choose your yarn and determine approximately how many yards you have."}),Object(d.jsx)("li",{children:"Check the yarn label for suggested needle size."}),Object(d.jsx)("li",{children:'Using the yarn and needles you\'ve chosen, knit a gauge swatch of at least 4" x 4" in the stitch you intend to use for your project.*'}),Object(d.jsx)("li",{children:"Determine the number of stitches you knit in one inch, both horizontally and vertically. This is your gauge."}),Object(d.jsx)("li",{children:"Use PurlBot to generate a custom pattern!"})]}),Object(d.jsx)("h6",{className:"note mt-3",children:"*This is important because the stitch may change your gauge. A cable pattern, for example, will make it tighter, while a lace pattern often makes it looser."})]})})]})}function y(){return Object(d.jsxs)("div",{className:"about-purlbot",id:"about",children:[Object(d.jsx)("img",{src:"/images/about.jpg",className:"card-img-top img-fluid",alt:"About Purlbot"}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"text-area",children:[Object(d.jsx)("p",{children:"What if a knitting pattern could be customized to your gauge? Imagine, no more creating and measuring multiple swatches, switching out needles until you find a match."}),Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{id:"purl-title-body",children:"Purl"}),Object(d.jsx)("span",{id:"bot-title-body",children:"Bot"})," makes that vision a reality. Just tell us your gauge and we'll generate a basic scarf, hat or mitten pattern for you."]})]})})]})}n(88);function N(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)(O.a,{children:[Object(d.jsx)(f,{}),Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{path:"/",exact:!0,component:x}),Object(d.jsx)(p.a,{path:"/how-to",exact:!0,component:v}),Object(d.jsx)(p.a,{path:"/about",exact:!0,component:y})]})]}),Object(d.jsx)(k,{})]})}var S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),S()}},[[89,1,2]]]);
//# sourceMappingURL=main.5e38f68d.chunk.js.map