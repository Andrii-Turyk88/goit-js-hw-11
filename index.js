import{a as f,S as d,i as a}from"./assets/vendor-DFA_L3eI.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",m="55703033-0c3414e280352f7ac0065df9c";function g(o){return f.get(p,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const r=o.map(({webformatURL:i,largeImageURL:n,tags:e,likes:t,views:s,comments:l,downloads:u})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${i}" alt="${e}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${t}</p>
        <p>Views: ${s}</p>
        <p>Comments: ${l}</p>
        <p>Downloads: ${u}</p>
      </div>

    </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){c.innerHTML=""}function b(){document.querySelector(".loader").classList.add("is-visible")}function S(){document.querySelector(".loader").classList.remove("is-visible")}const q=document.querySelector(".form");q.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter a search query.",position:"topRight"});return}L(),b(),g(r).then(i=>{if(i.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i.hits)}).catch(()=>{a.error({message:"Something went wrong. Try again later!",position:"topRight"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
