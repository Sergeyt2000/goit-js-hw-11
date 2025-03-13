import{S as p,a as f,i as n}from"./assets/vendor-Dn3QujGD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g=s=>s.map(t=>{const{webformatURL:o,largeImageURL:a,tags:e,likes:r,views:l,comments:u,downloads:m}=t;return`<li class="gallery-item">
      <div>
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}" 
            title="${e}"
            width="360"
            height="152"
          />
          </a>
          <div class="img-descr">
            <ul class="list-descr">
              <li class="item-descr">
                <p class="descr-name">Likes</p>
                <p class="descr-value">${r}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Views</p>
                <p class="descr-value">${l}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Comments</p>
                <p class="descr-value">${u}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Downloads</p>
                <p class="descr-value">${m}</p>
              </li>
            </ul>          
          </div>
          </div>
      </li>
      `}).join("");function y(){new p(".gallery a",{captionsData:"title",captionDelay:250,scrollZoom:!1}).refresh()}const h="49287257-770ce306313139aeab99da771",v="https://pixabay.com/api/";function L(){return f.get(v,{params:{key:h,q:d.value,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const c=document.querySelector(".form"),d=document.querySelector(".form-input"),i={galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};c.addEventListener("submit",b);function b(s){if(s.preventDefault(),d.value.trim()==="")return n.warning({position:"topRight",message:"Please enter something"});i.loaderEl.classList.remove("visually-hidden"),i.galleryEl.innerHTML="",L().then(t=>{if(t.data.hits.length===0)return c.reset(),n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});i.galleryEl.insertAdjacentHTML("beforeend",g(t.data.hits)),y(),c.reset()}).catch(t=>console.log(t)).finally(()=>i.loaderEl.classList.add("visually-hidden"))}
//# sourceMappingURL=index.js.map
