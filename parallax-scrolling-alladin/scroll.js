(function(){
 'use strict';
 const scenes=[...document.querySelectorAll('.scene-parent')];
 const clamp=x=>Math.max(0,Math.min(1,x)),ease=x=>1-Math.pow(1-clamp(x),3),smooth=x=>{x=clamp(x);return x*x*(3-2*x);};
 let metrics=[],queued=false;
 function measure(){metrics=scenes.map(el=>({el,top:el.getBoundingClientRect().top+scrollY,travel:Math.max(1,el.offsetHeight-el.firstElementChild.offsetHeight),last:-1}));}
 // Approved Scene 01 motion: unchanged.
 function pose(index,p,w,h){
  p=clamp(p);const e=ease(p),n=w<=720;
  if(index===0){const f=clamp(p/.82),r=smooth((p-.52)/.48);return {x:w*(1.08+((n?.27:.37)-1.08)*ease(f)),y:-Math.sin(f*Math.PI)*h*.018,px:w*(n?.04:.035)*r,py:-h*.055*r,angle:2.8*r,arm:-16*r};}
  if(index===1)return {x:w*(-.58+(n?.80:.94)*e),y:h*(.54-.34*e),rotate:-7+9*e,scale:.85+.15*e,midX:-p*w*.13,midY:p*h*.025,frontX:-p*w*.16,frontY:0};
  if(index===2)return {x:w*(n?.03:.17)+Math.sin(p*Math.PI)*w*.08,y:h*(.52-.40*e),rotate:5-9*e,scale:.84+.16*e,midX:-p*w*.07,midY:p*h*.035,frontX:p*w*.18,frontY:-p*h*.07};
  if(index===3)return {x:w*(1.08-(n?.93:.72)*e),y:h*(.26-.04*Math.sin(p*Math.PI)),rotate:4-5*e,scale:.80+.20*e,midX:-p*w*.045,midY:0,frontX:-p*w*.12,frontY:0};
  if(index===4){const x=w*(-.60+(n?.87:.98)*e);return {x,y:h*(.36-.06*Math.sin(p*Math.PI)),rotate:2*Math.sin(p*Math.PI*2),scale:1,midX:-p*w*.06,midY:0,frontX:x+w*(n?.32:.13),frontY:Math.sin(p*Math.PI)*h*.012};}
  return {x:0,y:-h*.025*e,rotate:0,scale:.92+.08*e,midX:0,midY:-p*h*.035};
 }
 function render(){queued=false;const w=innerWidth,h=innerHeight;
  metrics.forEach((m,i)=>{const p=clamp((scrollY-m.top)/m.travel);if(p===m.last)return;m.last=p;const v=m.el.firstElementChild,s=pose(i,p,w,h);
   if(i===0){v.querySelector('.aladdin-layer').style.transform=`translate3d(${s.x}px,${s.y}px,0)`;v.querySelector('.princess-layer').style.transform=`translate3d(${s.px}px,${s.py}px,0) rotate(${s.angle}deg)`;document.getElementById('princessArm').setAttribute('transform',`rotate(${s.arm} 407 602)`);return;}
   const hero=v.querySelector('[data-plane="hero"]');
   hero.style.transform=i===5?`translate3d(-50%,${s.y}px,0) scale(${s.scale})`:`translate3d(${s.x}px,${s.y}px,0) rotate(${s.rotate}deg) scale(${s.scale})`;
   v.querySelector('[data-plane="midground"]').style.transform=`translate3d(${s.midX}px,${s.midY}px,0)`;
   const front=v.querySelector('[data-plane="foreground"]');if(front)front.style.transform=`translate3d(${s.frontX}px,${s.frontY}px,0)${i===1?' scaleX(-1)':''}`;
   // The background is always stationary. No scene swaps, dissolves or opacity changes.
  });
 }
 function schedule(){if(!queued){queued=true;requestAnimationFrame(render);}}
 function resize(){measure();schedule();}
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',resize,{passive:true});addEventListener('pageshow',resize);const ro=new ResizeObserver(resize);scenes.forEach(el=>ro.observe(el));measure();render();window.__layeredScenes={pose,measure,render,get metrics(){return metrics;}};
})();
