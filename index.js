import{a as m,i as c,S as u}from"./assets/vendor-Dn3QujGD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=l=>l.map(s=>{const{webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:n,downloads:d}=s;return`<li class="gallery-item">
      <div>
        <a class="gallery-link" href="${i}">
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
                <p class="descr-value">${a}</p>
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
      `}).join(""),A="49287257-770ce306313139aeab99da771",g="https://pixabay.com/api/";function f(){return m.get(g,{params:{key:A,q:t.searchInput.value,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}const h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEaSURBVHgBrZZhDoIwDIUL0fjXo3gUb7R5Er0BHsXD7A+bASlhYeC6V4WXGCHr3reNtkAkqG2D9T70mh/HSj4HybyqyPQ9PeuaXlRQ19GFY4c5dDodLSHNK3/fSam29Q+0k7/N1ZAt5hCyh7kIKZl77y/IMBezgEwXTW4ienBxcc65DCQ0PDYCQghGMDASJJpzTG4ue0KABEHmKeBAQEPx3LiIhmKy/M+aitDyGJoPAWsI32vNWTXpVQnXRal2kPQmO7pPx6XpPRCQmsdjSZ8JhIA0FbOllMKsRZqCQoMpXCy0GJRrFc7hVpGLSVqFWaxk52ZnVgPbIaL5HhBovgVSMv+qg7kt9JznZ+VL//pL+5hWFXei+mwRj+UDSHQ9vnHBEYAAAAAASUVORK5CYII=",t={formEl:document.querySelector(".form"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),searchInput:document.querySelector(".form-input")};t.formEl.addEventListener("submit",y);function y(l){if(l.preventDefault(),t.searchInput.value.trim()==="")return c.warning({position:"topRight",message:"Please enter something"});t.loaderEl.classList.remove("visually-hidden"),t.galleryEl.innerHTML="",f().then(s=>{if(s.data.hits.length===0)return t.formEl.reset(),c.error({position:"topRight",backgroundColor:"#ef4040",messageColor:"#fafafb",iconUrl:h,message:"Sorry, there are no images matching your search query. Please try again!"});t.galleryEl.insertAdjacentHTML("beforeend",p(s.data.hits)),t.formEl.reset(),new u(".gallery a",{captionsData:"title",captionDelay:250,scrollZoom:!1}).refresh()}).catch(s=>console.log(s)).finally(()=>t.loaderEl.classList.add("visually-hidden"))}
//# sourceMappingURL=index.js.map
