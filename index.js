import{a as w,S as v,i as u}from"./assets/vendor-DEenWwFD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function g(i){return i.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:n,downloads:b})=>`<li class="gallery--list">
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
                <p class="thumb--amount">${r}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Comments</h2>
                <p class="thumb--amount">${n}</p>
              </div>
              <div class="thumb--item">
                <h2 class="thumb--tittle">Downloads</h2>
                <p class="thumb--amount">${b}</p>
              </div>
            </div>
          </li>`).join("")}function L(){const i=()=>document.querySelector(".gallery--list").getBoundingClientRect();window.scrollBy({top:i().height*2,left:0,behavior:"smooth"})}const p=40;async function f(i,t){const s="48554296-d2b735e3ffae040ef4553c6bb";try{return(await w.get("https://pixabay.com/api/",{params:{key:s,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:p}})).data}catch{throw new Error(res.statusText)}}const m=document.querySelector(".gallery"),d=document.querySelector(".loader"),c=document.querySelector(".more"),o=document.querySelector(".form");let h=1,l="";const y=new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});o.addEventListener("submit",async i=>{if(i.preventDefault(),l=o.search.value.trim(),h=1,c.classList.add("hidden"),d.classList.remove("hidden"),m.innerHTML="",l.length===0||l===""){u.warning({title:"Warning",message:"Please, enter a value!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),d.classList.add("hidden");return}await f(l,h).then(t=>{t.hits.length?(m.insertAdjacentHTML("beforeend",g(t.hits)),d.classList.add("hidden"),c.classList.remove("hidden"),y.refresh(),o.reset()):(u.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),d.classList.add("hidden"),c.classList.add("hidden"),o.reset())}).catch(t=>{u.error({title:"Error",message:"Something went wrong. Please try again later.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),o.reset()})});c.addEventListener("click",async()=>{h+=1,await f(l,h).then(i=>{const t=Math.ceil(i.totalHits/p);m.insertAdjacentHTML("beforeend",g(i.hits)),L(),y.refresh(),h===t&&(c.style.display="none")}).catch(i=>{u.error({title:"Error",message:"Something went wrong. Please try again later.",titleColor:"white",messageColor:"white",titleSize:"12px",backgroundColor:"#ef4040",iconColor:"white",position:"topRight"}),o.reset()})});
//# sourceMappingURL=index.js.map
