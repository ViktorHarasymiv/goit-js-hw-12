import{a as b,S as C,i as c}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function g(i){return i.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:o,comments:l,downloads:w})=>`<li class="gallery--list">
  <a class="gallery--link" href="${s}">
  <img
  class="gallery--image"
                src="${t}"
                alt="${a}"
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
                <p class="thumb--amount">${o}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Comments</h2>
                <p class="thumb--amount">${l}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Downloads</h2>
                <p class="thumb--amount">${w}</p>
              </div>
            </div>
          </li>`).join("")}function v(){const i=()=>document.querySelector(".gallery--list").getBoundingClientRect();window.scrollBy({top:i().height*2,left:0,behavior:"smooth"})}const p=140;async function f(i,t){const s="48554296-d2b735e3ffae040ef4553c6bb";try{return(await b.get("https://pixabay.com/api/",{params:{key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:p}})).data}catch{throw new Error(res.statusText)}}const m=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=document.querySelector(".more"),r=document.querySelector(".form");let d=1,n="";const y=new C(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});r.addEventListener("submit",async i=>{if(i.preventDefault(),n=r.search.value.trim(),d=1,h.classList.add("hidden"),u.classList.remove("hidden"),m.innerHTML="",n.length===0||n===""){c.warning({title:"Warning",message:"Please, enter a value!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),u.classList.add("hidden");return}await f(n,d).then(t=>{t.hits.length?(m.insertAdjacentHTML("beforeend",g(t.hits)),u.classList.add("hidden"),h.classList.remove("hidden"),y.refresh(),r.reset()):(c.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),u.classList.add("hidden"),h.classList.add("hidden"),r.reset())}).catch(t=>{c.error({title:"Error",message:"Something went wrong. Please try again later.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),r.reset()})});h.addEventListener("click",async()=>{d+=1,await f(n,d).then(i=>{const t=Math.ceil(i.totalHits/p);m.insertAdjacentHTML("beforeend",g(i.hits)),v(),y.refresh(),(d===t||i.hits<=t)&&(h.style.display="none",c.error({title:"No images data",message:"You have viewed all images.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}))}).catch(i=>{c.error({title:"Error",message:"Something went wrong. Please try again later.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),r.reset()})});
//# sourceMappingURL=index.js.map
