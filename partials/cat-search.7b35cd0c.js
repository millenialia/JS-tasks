const e=document.querySelector(".breed-select"),s=document.querySelector(".cat-info"),i=document.querySelector(".error"),t=document.querySelector(".loader");i.classList.add("is-hidden"),e.classList.toggle("is-hidden"),e.addEventListener("change",(function(n){t.classList.toggle("is-hidden"),e.classList.toggle("is-hidden"),s.innerHTML="";(a=n.target.value,fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${a}&api_key=live_zdyUG7wzdoiIwBMAkBsR7rwl1ZORjkzyrLyoKTZwasbOGwCUj7WxZGiroXrVaKPN`).then((e=>e.json()))).then((t=>{const n=t[0].breeds[0];!function(e,i){const t=e,n=i.name,a=i.description,l=i.temperament,c=`<img src=${t} class='img'>\n  <ul class='list'>\n  <li class='name'>${n}</li>\n  <li class='description'>${a}</li>\n  <li class='temperament'><span class='bold'>Temperament:</span> ${l}</li></ul>`;s.innerHTML+=c}(t[0].url,n),e.classList.toggle("is-hidden"),i.classList.add("is-hidden")})).catch((()=>{i.classList.remove("is-hidden"),e.classList.toggle("is-hidden")})).finally((()=>{t.classList.toggle("is-hidden")}));var a})),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_zdyUG7wzdoiIwBMAkBsR7rwl1ZORjkzyrLyoKTZwasbOGwCUj7WxZGiroXrVaKPN").then((e=>e.json())).then((function(s){const i=s.map((e=>`<option value='${e.id}'>${e.name}</option>`)).join("");e.insertAdjacentHTML("beforeend",i)})).catch((()=>{i.classList.remove("is-hidden")})).finally((()=>{t.classList.toggle("is-hidden"),e.classList.toggle("is-hidden")}));
//# sourceMappingURL=cat-search.7b35cd0c.js.map