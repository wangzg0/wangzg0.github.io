(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{56:function(t,i,e){"use strict";e.r(i),i.default=(t,i,e)=>{if(!t.getContext)return null;const s=Math.random;t.width=i,t.height=e;let h=t.getContext("2d");function n(t){return s()*t+1}function l(t,i){this.x=t,this.y=i,this.add=function(t){this.x=this.x+t.x,this.y=this.y+t.y}}function d(t,i){this.pos=new l(t.x,t.y),this.vel=i,this.dead=!1,this.start=0,this.update=function(t){t-this.start>500&&(this.dead=!0),this.dead||(this.pos.add(this.vel),this.vel.y=this.vel.y+r)},this.draw=function(){this.dead||a(this.pos.x,this.pos.y,1)}}function o(t,i){this.pos=new l(t,i),this.vel=new l(0,-n(10)-3),this.color="hsl("+n(360)+", 100%, 50%)",this.size=4,this.dead=!1,this.start=0;let e=[],s=100,o=!0;this.update=function(t){if(!this.dead)if(o=this.vel.y<0,o)this.pos.add(this.vel),this.vel.y=this.vel.y+r;else{if(0===e.length){u=!0;for(let i=0;i<s;i++)e.push(new d(this.pos,new l(5-n(10),5-n(10)))),e[e.length-1].start=t}let i=0;for(let h=0;h<s;h++){let s=e[h];s.update(t),s.dead&&i++}i===s&&(this.dead=!0)}},this.draw=function(){if(!this.dead)if(h.fillStyle=this.color,o)a(this.pos.x,this.pos.y,this.size);else for(let t=0;t<s;t++){e[t].draw()}}}function a(t,i,e){h.beginPath(),h.arc(t,i,e,0,2*Math.PI),h.fill(),h.closePath()}var f=[],r=.2,u=!1;window.addEventListener("resize",(function(){t.width=t.clientWidth||i,t.height=t.clientHeight||e})),function(){for(let i=0;i<20;i++)f.push(new o(n(t.width),t.height))}(),function i(e){!function(t){for(let i=0,e=f.length;i<e;i++)f[i].update(t)}(e),h.fillStyle="rgba(0,0,0,0.3)",u&&(u=!1),h.fillRect(0,0,t.width,t.height),h.fillStyle="white",h.font="30px Arial",e,h.fillStyle="blue";for(let s=0,h=f.length;s<h;s++){let i=f[s];i.dead&&(f[s]=new o(n(t.width),t.height),i=f[s],i.start=e),i.draw()}window.requestAnimationFrame(i)}()}}}]);