import{a as w,S as L,i as h}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();function p(s){return s.map(({webformatURL:t,largeImageURL:a,tags:n,likes:e,views:i,comments:c,downloads:b})=>`<li class="gallery--list">
  <a class="gallery--link" href="${a}">
  <img
  class="gallery--image"
                src="${t}"
                alt="${n}"
                width="360"
                height="200"
              />
            </a>
            <div class="thumb--box">
              <div class="thumb--item">
                <h2 class="thumb--tittle">Likes</h2>
                <p class="thumb--amount">${e}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Views</h2>
                <p class="thumb--amount">${i}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Comments</h2>
                <p class="thumb--amount">${c}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Downloads</h2>
                <p class="thumb--amount">${b}</p>
              </div>
            </div>
          </li>`).join("")}function v(){const s=()=>document.querySelector(".gallery--list").getBoundingClientRect();window.scrollBy({top:s().height*2,left:0,behavior:"smooth"})}const g=40;async function f(s,t){const a="48554296-d2b735e3ffae040ef4553c6bb";try{return(await w.get("https://pixabay.com/api/",{params:{key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:g}})).data}catch{throw new Error(res.statusText)}}const m=document.querySelector(".gallery"),o=document.querySelector(".loader"),r=document.querySelector(".more"),u=document.querySelector(".form");let l=1,d="";const y=new L(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});u.addEventListener("submit",async s=>{if(s.preventDefault(),d=u.search.value.trim(),l=1,r.classList.add("hidden"),o.classList.remove("hidden"),m.innerHTML="",d.length===0||d===""){h.warning({title:"Warning",message:"Please, enter a value!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),o.classList.add("hidden");return}await f(d,l).then(t=>{r.style.display="block",l=1;const a=Math.ceil(t.totalHits/g);l===a&&(r.style.display="none"),t.hits.length?(m.insertAdjacentHTML("beforeend",p(t.hits)),o.classList.add("hidden"),r.classList.remove("hidden"),y.refresh(),u.reset()):(h.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),o.classList.add("hidden"),r.classList.add("hidden"))}).catch(t=>{o.classList.add("hidden"),h.error({title:"Error",message:"Something went wrong. Please try again later.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"})})});r.addEventListener("click",async()=>{r.style.display="none",o.style.top="93%",o.classList.remove("hidden"),l+=1,await f(d,l).then(s=>{r.style.display="block",o.classList.add("hidden");const t=Math.ceil(s.totalHits/g);m.insertAdjacentHTML("beforeend",p(s.hits)),v(),y.refresh(),o.style.top="50%",(l===t||s.hits<=t)&&(o.classList.add("hidden"),r.style.display="none")}).catch(s=>{o.classList.add("hidden"),h.error({title:"Error",message:"Something went wrong. Please try again later.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"})})});
//# sourceMappingURL=index.js.map
