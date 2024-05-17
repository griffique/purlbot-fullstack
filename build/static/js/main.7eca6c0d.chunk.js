(this["webpackJsonppurlbot-react"]=this["webpackJsonppurlbot-react"]||[]).push([[0],{52:function(e,t,n){},77:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(23),r=n.n(a),i=(n(52),n(15)),l=n(5),o=n(47),h=n(19),j=n(17),d=n.n(j),b=n(0),u=function(e){return Object(b.jsxs)("div",{className:"card pattern-display",children:[Object(b.jsx)("h1",{className:"card-title",children:"Your Hat Pattern"}),Object(b.jsx)("h4",{children:"Sizes are given as (women, men), and include two inches of negative ease."}),Object(b.jsxs)("div",{className:"pattern-button-area m-auto no-print",children:[Object(b.jsx)("button",{className:"btn m-4 btn-info save-pattern",type:"button",onClick:function(){d.a.post("/patterns",{gauge:e.gauge,type:"hat",nickname:e.name}).then((function(t){console.log(t),alert("Pattern Saved! Type: Hat, Gauge: ".concat(e.gauge,". View your patterns under 'My Account.'"))})).catch((function(e){console.log(e),alert("Please log in to save your pattern.")}))},children:"Save Pattern"}),Object(b.jsx)("button",{onClick:function(){e.setStatus()},className:"reset btn m-4 btn-light",children:Object(b.jsx)("a",{href:"/",children:"\u2716 RESET"})})]}),Object(b.jsxs)("ol",{className:"card-body",children:[Object(b.jsxs)("li",{children:["Cast on (",20*e.gauge,", ",22*e.gauge,") stitches."]}),Object(b.jsx)("li",{children:"Knit in k1, p2 rib for 2.5 inches."}),Object(b.jsx)("li",{children:"Knit in your chosen body stitch for (4.5, 5, 6.5) inches."}),Object(b.jsxs)("li",{children:["Complete decrease set-up round:",Object(b.jsx)("ul",{children:Object(b.jsxs)("li",{children:["*Knit in chosen stitch (",10,", ",11,"), place marker.*"]})})]}),Object(b.jsxs)("li",{children:["Then continue decrease pattern.",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"Even rounds: knit in chosen stitch (or switch to stockinette if you desire)."}),Object(b.jsx)("li",{children:"Odd rounds: *knit in chosen stitch to 2 before marker, k2tog.*"})]})]}),Object(b.jsxs)("li",{children:["Repeat these two rounds until you have (",10,", ",11,") stitches left, ending on an odd round."," "]}),Object(b.jsx)("li",{children:"Cut yarn leaving long tail and thread remaining stitches through, pulling tight and securing the end on the inside of the hat with a crochet hook."})," ",Object(b.jsxs)("li",{children:["Weave in starting end and"," ",Object(b.jsx)("a",{href:"https://blog.knitpicks.com/tutorial-blocking-knits/",target:"_blank",rel:"noreferrer",children:"block hat"}),", folding the ribbed cuff in half."]})]}),Object(b.jsx)("button",{className:"print btn btn-light no-print",onClick:function(){window.print()},children:"\ud83d\udcc4 PRINT"})]})},m=function(e){return Object(b.jsxs)("div",{className:"card pattern-display",children:[Object(b.jsx)("h1",{className:"card-title",children:"Your Scarf Pattern"}),Object(b.jsx)("h4",{children:"Sizes are given as (child, adult)."}),Object(b.jsxs)("div",{className:"pattern-button-area m-auto no-print",children:[Object(b.jsx)("button",{className:"btn m-4 btn-info save-pattern",type:"button",onClick:function(){d.a.post("/patterns",{gauge:e.gauge,type:"scarf",nickname:e.name}).then((function(t){console.log(t),alert("Pattern Saved! Type: Scarf, Gauge: ".concat(e.gauge,". View your patterns under 'My Account.'"))})).catch((function(e){console.log(e),alert("Please log in to save your pattern.")}))},children:"Save Pattern"}),Object(b.jsx)("button",{onClick:function(){e.setStatus()},className:"reset btn m-4 btn-light",children:Object(b.jsx)("a",{href:"/",children:"\u2716 RESET"})})]}),Object(b.jsxs)("ol",{className:"card-body",children:[Object(b.jsxs)("li",{children:["Cast on (",6*e.gauge,", ",8*e.gauge,") stitches."," "]}),Object(b.jsx)("li",{children:"Knit in your chosen stitch until you measure (48, 60) inches from cast on, or desired length, and bind off in pattern."}),Object(b.jsxs)("li",{children:[Object(b.jsx)("a",{href:"https://blog.knitpicks.com/tutorial-blocking-knits/",target:"_blank",rel:"noreferrer",children:"Block"})," ","to measurements listed below."]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:' Children = (6" x 48")'}),Object(b.jsx)("li",{children:' Adult = (8" x 60")'})]})]}),Object(b.jsx)("button",{className:"print btn btn-light no-print",onClick:function(){window.print()},children:"\ud83d\udcc4 PRINT"})]})},g=function(e){var t=[Math.round(5.5*e.gauge),Math.round(6.5*e.gauge),Math.round(7*e.gauge),Math.round(8*e.gauge)],n=Object(s.useState)([]),c=Object(i.a)(n,2),a=c[0],r=c[1];if(a.length<4)for(var l=0;l<t.length;l++)t[l]%2!==0&&(t[l]=t[l]+1),r([].concat(t));return Object(b.jsxs)("div",{className:"card pattern-display",children:[Object(b.jsx)("h1",{className:"card-title",children:"Your Mitten Pattern"}),Object(b.jsx)("h4",{children:"Sizes are given as (children, adult S, M, L)."}),Object(b.jsxs)("h4",{children:["See ",Object(b.jsx)("a",{href:"#measurements",children:"measurements"})," below."]}),Object(b.jsxs)("div",{className:"pattern-button-area m-auto no-print",children:[Object(b.jsx)("button",{className:"btn m-4 btn-info save-pattern",type:"button",onClick:function(){d.a.post("/patterns",{gauge:e.gauge,type:"mittens",nickname:e.name}).then((function(t){console.log(t),alert("Pattern Saved! Type: Mittens, Gauge: ".concat(e.gauge,". View your patterns under 'My Account.'"))})).catch((function(e){console.log(e),alert("Please log in to save your pattern.")}))},children:"Save Pattern"}),Object(b.jsx)("button",{onClick:function(){e.setStatus()},className:"reset btn m-4 btn-light",children:Object(b.jsx)("a",{href:"/",children:"\u2716 RESET"})})]}),Object(b.jsx)("h3",{className:"mt-4",children:Object(b.jsx)("strong",{children:"Work cuff:"})}),Object(b.jsxs)("ol",{className:"card-body",children:[Object(b.jsxs)("li",{children:["Cast on (",a[0],", ",a[1],", ",a[2],", ",a[3],") stitches with double pointed needles ",Object(b.jsx)("strong",{children:"two sizes smaller"})," than the needles you used to check your gauge. ",Object(b.jsx)("em",{children:"If you need to adjust the number of stitches for your particular stitch, you can do so here."})]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Place marker"})," and join in the round."]}),Object(b.jsx)("li",{children:"Work k1, p1 rib for (2.5, 3, 3, 3) inches."}),Object(b.jsx)("li",{children:" Set up round: m1, place marker. Knit in chosen stitch to end of round."}),Object(b.jsxs)("li",{children:["Switch to the ",Object(b.jsx)("strong",{children:"larger needles"})," (the ones you used to check your gauge)."]}),Object(b.jsx)("li",{children:"*k1, slip marker, and knit in your chosen stitch* for (.5, .75, .75, .75) inches."})]}),Object(b.jsx)("h3",{className:"mt-4",children:Object(b.jsx)("strong",{children:"Work thumb gusset:"})}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Rounds 1 and 2: knit to marker, slip marker, knit in chosen stitch to end."}),Object(b.jsx)("li",{children:"Round 3: m1, knit to marker, m1, slip marker, knit in chosen stitch to end."}),Object(b.jsx)("li",{children:"Work rounds 1-3 for approximately (1.5, 2, 2, 2.25) inches, ending with round 3."}),Object(b.jsx)("li",{children:"Place stitches between the markers on a piece of waste yarn and leave to the side. Remove the extra marker so that only the beginning of round marker remains."})]}),Object(b.jsx)("h3",{className:"mt-4",children:Object(b.jsx)("strong",{children:"Work and shape body:"})}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Knit in chosen stitch until body measures (3, 3.75, 4, 4.5) inches from gusset."}),Object(b.jsxs)("li",{children:["Decrease setup round: knit in chosen stitch (",Math.round(5.5*e.gauge/2),","," ",Math.round(6.5*e.gauge/2),","," ",Math.round(7*e.gauge)/2,", ",Math.round(8*e.gauge/2),"), place marker, knit in chosen stitch until end of round."]}),Object(b.jsxs)("li",{children:["Decrease round: *K2tog, knit to 2 sts before marker, ssk, slip marker, k2tog, knit to two sts before end marker, ssk.* ",Object(b.jsx)("br",{}),Object(b.jsx)("sub",{children:"Note: You may continue in your chosen stitch if desired, but I recommend Stockinette for the top of the mitten."})]}),Object(b.jsx)("li",{children:"Normal round: Knit."}),Object(b.jsxs)("li",{children:["Work these two rounds until (",a[0]-16,", ",a[1]-16,", ",a[2]-16,", ",a[3]-16,") stitches remain."]}),Object(b.jsx)("li",{children:"Split the sts across two needles and join by grafting (seamless) or using a three-needle bindoff (this method leaves a visible seam)."})]}),Object(b.jsx)("h3",{className:"mt-4",children:Object(b.jsx)("strong",{children:"Work thumb:"})}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Put held stitches on larger needles and knit in chosen stitch across, picking up 3 sts from body of mitten."}),Object(b.jsx)("li",{children:"Place marker and join in the round."}),Object(b.jsx)("li",{children:"Knit in chosen stitch for (1.25, 1.75, 2, 2.25) inches from picked up stitch."}),Object(b.jsx)("li",{children:"*k2tog*"}),Object(b.jsx)("li",{children:"Break yarn, threading through remaining stitches and pull tight to secure."})]}),Object(b.jsx)("h3",{className:"mt-4",children:Object(b.jsx)("strong",{children:"Finishing:"})}),Object(b.jsxs)("ol",{id:"measurements",children:[Object(b.jsxs)("li",{children:["Weave in ends and"," ",Object(b.jsx)("a",{href:"https://blog.knitpicks.com/tutorial-blocking-knits/",target:"_blank",rel:"noreferrer",children:"block mittens"})," ","to measurements below."]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:' Children = (6" circum. x 8.5" long)'}),Object(b.jsx)("li",{children:' Adult S = (7" x 10.5")'}),Object(b.jsx)("li",{children:' Adult M = (7.75" x 12")'}),Object(b.jsx)("li",{children:' Adult L = (8.5" x 13")'})]})]}),Object(b.jsx)("button",{className:"print btn btn-light no-print",onClick:function(){window.print()},children:"\ud83d\udcc4 PRINT"})]})},x=n.p+"static/media/zigzag.6843e31a.jpg",O=n.p+"static/media/star.57852589.jpg",p=n.p+"static/media/double-moss.304d3900.jpg";n(77);function f(e){return Object(b.jsxs)("div",{className:"container",children:[function(){switch(e.project){case"SCARF":return Object(b.jsx)(m,{setStatus:e.setStatus,gauge:e.gauge,name:e.name});case"HAT":return Object(b.jsx)(u,{setStatus:e.setStatus,gauge:e.gauge,name:e.name});case"MITTENS":return Object(b.jsx)(g,{setStatus:e.setStatus,gauge:e.gauge,name:e.name});default:return Object(b.jsx)("p",{children:"Please select a valid pattern type."})}}(),Object(b.jsx)("h3",{className:"stitch-title no-print",children:"Suggested Stitches"})," ",Object(b.jsxs)("ul",{className:"difficulty-ratings no-print",children:[Object(b.jsx)("li",{children:"\u2b50 Easier "}),Object(b.jsx)("li",{children:"\u2b50\u2b50 Intermediate "}),Object(b.jsx)("li",{children:"\u2b50\u2b50\u2b50 Advanced"})]}),Object(b.jsxs)("div",{className:"row stitch-display no-print",children:[Object(b.jsxs)("div",{className:"card col-sm-3 no-print",children:[Object(b.jsx)("img",{className:"card-img-top",src:p,alt:"pattern"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("h5",{className:"card-title",children:[Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://nimble-needles.com/stitches/the-double-moss-stitch-knitting-pattern/",children:"Double Moss Stitch"})," ","\u2b50"]})})]}),Object(b.jsxs)("div",{className:"card col-sm-3 no-print",children:[Object(b.jsx)("img",{className:"card-img-top",src:x,alt:"pattern"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("h5",{className:"card-title",children:[" ",Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://nimble-needles.com/stitches/how-to-knit-the-zig-zag-stitch/",children:"ZigZag Rib Stitch"})," ","\u2b50\u2b50"]})})]}),Object(b.jsxs)("div",{className:"card col-sm-3 no-print",children:[Object(b.jsx)("img",{className:"card-img-top",src:O,alt:"pattern"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("h5",{className:"card-title",children:[" ",Object(b.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://nimble-needles.com/stitches/how-to-knit-the-star-stitch/",children:"Star Stitch"})," ","\u2b50\u2b50\u2b50"]})})]})]}),Object(b.jsxs)("h3",{className:"yarn-calculator no-print",children:["Not sure if you have enough yarn for your project?"," ",Object(b.jsx)("a",{href:"https://www.JimmyBeansWool.com/knittingCalculator",children:"Find out here."})]})]})}function k(){var e=Object(s.useState)("Select Your Project"),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)("PurlBot User"),r=Object(i.a)(a,2),j=r[0],d=r[1],u=Object(s.useState)(),m=Object(i.a)(u,2),g=m[0],x=m[1],O=Object(s.useState)(!1),p=Object(i.a)(O,2),k=p[0],y=p[1],v=Object(l.f)().search,N=new URLSearchParams(v).get("type"),S=new URLSearchParams(v).get("gauge");if(N&&S)return Object(b.jsx)(f,{setStatus:y,project:N.toUpperCase(),gauge:S});return k?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(f,{setStatus:y,project:n,name:j,gauge:g})}):Object(b.jsx)("div",{id:k?null:"pattern-generator",children:Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h5",{className:"card-title",children:"Pattern Generator"}),Object(b.jsxs)("form",{id:"scarf-form",autoComplete:"off",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h5",{children:"Optional: enter a nickname for the pattern."}),Object(b.jsx)("input",{className:"form-control",type:"text",placeholder:"Type your pattern's nickname here...",id:"name",onChange:function(e){e.target.value.length>0&&d(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("h5",{children:"What do you want to knit?"}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)(o.a,{id:"dropdown-basic-button",title:n,variant:"primary",onSelect:function(e){c(e.slice(2).toUpperCase())},children:[Object(b.jsx)(h.a.Item,{href:"#/scarf",value:"Scarf",children:"SCARF"}),Object(b.jsx)(h.a.Item,{href:"#/hat",value:"Hat",children:"HAT"}),Object(b.jsx)(h.a.Item,{href:"#/mittens",value:"Mittens",children:"MITTENS"})]})}),Object(b.jsx)("br",{}),Object(b.jsxs)("h5",{children:["On your gauge swatch, how many stitches do you count",Object(b.jsx)("strong",{children:" horizontally "})," per inch?"]}),Object(b.jsx)("input",{className:"form-control",type:"text",placeholder:"Type a number here...",id:"gauge",onChange:function(e){x(e.target.value)}}),Object(b.jsx)("br",{})]}),Object(b.jsx)("button",{className:"btn btn-lg btn-success",type:"button",id:"submit",onClick:function(e){e.preventDefault(),0*g===0?y(!0):alert("Please enter a number for your gauge.")},children:"Submit"})]})})})}var y=n(14),v=(n(86),function(){return Object(b.jsx)("div",{className:"nav-container",children:Object(b.jsxs)("nav",{className:"no-print navbar navbar-expand-lg navbar-light bg-light",children:[Object(b.jsx)(y.b,{to:"/",className:"navbar-brand",children:Object(b.jsxs)("h1",{className:"nav-title",children:[Object(b.jsx)("span",{id:"purl-title",children:"Purl"}),Object(b.jsx)("span",{id:"bot-title",children:"Bot"})]})}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"nav-item active",children:Object(b.jsx)(y.b,{to:"/how-to",className:"nav-link",children:"How To Use"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(y.b,{to:"/about",className:"nav-link",children:"About"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{href:"https://purlbot.onrender.com/account",className:"nav-link",children:"My Account"})})]}),Object(b.jsxs)("ul",{className:"navbar-nav mr-auto nav-buttons",children:[Object(b.jsx)("li",{className:"nav-item register",children:Object(b.jsx)("a",{href:"https://purlbot.onrender.com/register",className:"nav-link",children:"Register"})}),Object(b.jsx)("li",{className:"nav-item login",children:Object(b.jsx)("a",{href:"https://purlbot.onrender.com/login",className:"nav-link",children:"Log In"})}),Object(b.jsx)("li",{className:"nav-item login",children:Object(b.jsx)("a",{href:"https://purlbot.onrender.com/logout",className:"nav-link",children:"Log Out"})})]})]})]})})});n(87);function N(){return Object(b.jsxs)("footer",{id:"coded-by",className:"no-print",children:[Object(b.jsx)("a",{href:"https://github.com/griffique/griffin-she-codes-plus",target:"_blank",rel:"noreferrer",children:"Open Source Code"})," ","by ","",Object(b.jsx)("a",{href:"https://www.linkedin.com/in/quinn-griffin-9955711b8/",target:"_blank",rel:"noreferrer",children:"Quinn Griffin"})," ",Object(b.jsx)("br",{}),Object(b.jsxs)("span",{style:{fontStyle:"italic",fontSize:"16px"},children:[" ","Have you made something with PurlBot?"," ",Object(b.jsx)("a",{href:"mailto:purlbot@protonmail.com",children:"Contact me"})," with photos of your project or suggestions!"]})]})}function S(){return Object(b.jsxs)("div",{className:"using-purlbot",id:"how-to",children:[Object(b.jsx)("img",{src:"/images/howto.jpg",className:"card-img-top img-fluid",alt:"How to use Purlbot"}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"text-area",children:[Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Choose your yarn and determine approximately how many yards you have."}),Object(b.jsx)("li",{children:"Check the yarn label for suggested needle size."}),Object(b.jsx)("li",{children:'Using the yarn and needles you\'ve chosen, knit a gauge swatch of at least 4" x 4" in the stitch you intend to use for your project.*'}),Object(b.jsx)("li",{children:"Determine the number of stitches you knit in one inch, both horizontally and vertically. This is your gauge."}),Object(b.jsx)("li",{children:"Use PurlBot to generate a custom pattern!"})]}),Object(b.jsx)("h6",{className:"note mt-3",children:"*This is important because the stitch may change your gauge. A cable pattern, for example, will make it tighter, while a lace pattern often makes it looser."})]})})]})}function w(){return Object(b.jsxs)("div",{className:"about-purlbot",id:"about",children:[Object(b.jsx)("img",{src:"/images/about.jpg",className:"card-img-top img-fluid",alt:"About Purlbot"}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"text-area",children:[Object(b.jsx)("p",{children:"What if a knitting pattern could be customized to your gauge? Imagine, no more creating and measuring multiple swatches, switching out needles until you find a match."}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{id:"purl-title-body",children:"Purl"}),Object(b.jsx)("span",{id:"bot-title-body",children:"Bot"})," makes that vision a reality. Just tell us your gauge and we'll generate a basic scarf, hat or mitten pattern for you."]})]})})]})}n(88);function C(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)(y.a,{children:[Object(b.jsx)(v,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",exact:!0,component:k}),Object(b.jsx)(l.a,{path:"/how-to",exact:!0,component:S}),Object(b.jsx)(l.a,{path:"/about",exact:!0,component:w})]})]}),Object(b.jsx)(N,{})]})}var P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),P()}},[[89,1,2]]]);
//# sourceMappingURL=main.7eca6c0d.chunk.js.map