const t={key:"<API_KEY>",per_page:"20",image_type:"photo",orientation:"horizontal",safesearch:"true"};async function e({q:e="",page:a="1"}){try{const o=new URLSearchParams({...t,page:a,q:e}),n=await fetch(`https://pixabay.com/api?${o}`);if(!n.ok)return 400===n.status?[]:{error:n.status};const{hits:r}=await n.json();return r}catch(t){return{error:t.toString()}}}const a=t=>{const e=document.createElement("img");return e.classList.add("photo"),e.src=t.webformatURL,e};async function o({q:t,page:o}){const n=await e({q:t,page:o});n.error?alert(n.error):function({photos:t,page:e}){const o=document.querySelector("#photos");"1"===e&&(o.innerHTML="");const n=t.map(a);o.append(...n)}({photos:n,page:o})}const n=document.querySelector("#searchPhotosForm");n.addEventListener("submit",(async function(t){t.preventDefault(),t.target.page.value="1";const e=t.target.q.value;await o({q:e,page:"1"})})),n.dispatchEvent(new Event("submit")),window.addEventListener("scroll",(async function(){const{scrollTop:t,scrollHeight:e,clientHeight:a}=document.documentElement;if(t+a>=e){const t=document.querySelector("#searchPhotosForm"),e=parseInt(t.page.value);t.page.value=e+1,await o({q:t.q.value,page:t.page.value})}}));
//# sourceMappingURL=index.ef7e1fcf.js.map
