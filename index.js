import{a as u,i as c,S as m}from"./assets/vendor-Dn3QujGD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p=a=>a.map(s=>{const{webformatURL:i,largeImageURL:o,tags:e,likes:r,views:l,comments:n,downloads:d}=s;return`<li class="gallery-item">
      <div>
        <a class="gallery-link" href="${o}">
          <img
            class="gallery-image"
            src="${i}"
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
                <p class="descr-value">${n}</p>
              </li>
              <li class="item-descr">
                <p class="descr-name">Downloads</p>
                <p class="descr-value">${d}</p>
              </li>
            </ul>          
          </div>
          </div>
      </li>
      `}).join(""),f="49287257-770ce306313139aeab99da771",g="https://pixabay.com/api/";function y(){return u.get(g,{params:{key:f,q:t.searchInput.value,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const t={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),searchInput:document.querySelector(".form-input")};t.formEl.addEventListener("submit",h);function h(a){if(a.preventDefault(),t.searchInput.value.trim()==="")return c.warning({position:"topRight",message:"Please enter something"});t.loaderEl.classList.remove("visually-hidden"),t.galleryEl.innerHTML="",y().then(s=>{if(s.data.hits.length===0)return t.formEl.reset(),c.error({position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:"/img/close-ico.png",message:"Sorry, there are no images matching your search query. Please try again!"});t.galleryEl.insertAdjacentHTML("beforeend",p(s.data.hits)),t.formEl.reset(),new m(".gallery a",{captionsData:"title",captionDelay:250,scrollZoom:!1}).refresh()}).catch(s=>console.log(s)).finally(()=>t.loaderEl.classList.add("visually-hidden"))}
//# sourceMappingURL=index.js.map
