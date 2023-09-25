(()=>{"use strict";document.querySelector("#crono-space")&&new class{constructor(){this.vars(),this.chronometer_id,this.domLoader(),this.events()}vars(){this.isRunning=!1,this.ms=0,this.seg=0,this.min=0,this.lastMs=0,this.lastSeg=0,this.lastMin=0,this.startDate=null,this.lastDate=null,this.baseMs=1e3,this.baseMin=6e4}domLoader(){this.el={min:document.querySelector("#crono-m"),seg:document.querySelector("#crono-s"),ms:document.querySelector("#crono-ms")},this.btns={start:document.querySelector("#crono-start"),stop:document.querySelector("#crono-stop")}}events(){this.btns.start.addEventListener("click",(()=>this.start())),this.btns.stop.addEventListener("click",(()=>this.stop()))}start(){if(this.isRunning=!this.isRunning,this.isRunning){if(this.lastDate){let t=Date.now()-this.pauseDate;this.startDate=this.lastDate+t}else this.startDate=Date.now();this.chronometer_id=setInterval((()=>this.chronometer()),30),this.btns.start.innerHTML="PAUSE"}else clearInterval(this.chronometer_id),this.lastMs=this.ms,this.lastSeg=this.seg,this.lastMin=this.min,this.pauseDate=Date.now(),this.lastDate=this.startDate,this.btns.start.innerHTML="START"}stop(){this.isRunning=!1,this.resetAll(),clearInterval(this.chronometer_id),this.chronometer_id=null,this.lastDate=null,this.startDate=null}chronometer(){let t=Date.now()-this.startDate;return this.ms=t%this.baseMs,this.msPrinter(),this.seg=Math.floor(t/this.baseMs),this.seg>=60&&(this.min=Math.floor(t/this.baseMin),this.minPrinter(),this.seg-=60),this.segPrinter(),!0}async msPrinter(){let t="";return this.ms>999&&(this.ms-=1e3),this.ms<10?t="00":this.ms<100&&(t="0"),t+=this.ms,this.el.ms.innerHTML=t,!0}async segPrinter(){let t="";return this.seg<10&&(t="0"),t+=this.seg,this.el.seg.innerHTML=t,!0}async minPrinter(){let t="";return t=this.min<1?"00":this.min<10&&this.min>0?"0"+this.min:this.min,this.el.min.innerHTML=t,!0}resetAll(){this.el.min.innerHTML="00",this.el.seg.innerHTML="00",this.el.ms.innerHTML="000",this.ms=0,this.seg=0,this.min=0,this.lastMs=0,this.lastSeg=0,this.lastMin=0}},document.querySelector("#wordCounter-app")&&new class{constructor(){this.__chars=0,this.__words=0,this.domLoader(),this.events()}events(){this.contador.addEventListener("input",(()=>{let t=this.contador.value.trim();this.__chars=t.length,this.__words=""===t?0:t.split(" ").length,this.word_counter.innerHTML=this.__words,this.char_counter.innerHTML=this.__chars})),this.word_btn.addEventListener("click",(()=>{navigator.clipboard.writeText(this.__words)})),this.char_btn.addEventListener("click",(()=>{navigator.clipboard.writeText(this.__chars)}))}domLoader(){this.contador=document.querySelector("#wordCounter-app"),this.word_counter=document.querySelector("#wordCount"),this.char_counter=document.querySelector("#charCount"),this.word_btn=document.querySelector("#copyWordsBtn"),this.char_btn=document.querySelector("#copyCharsBtn")}}})();