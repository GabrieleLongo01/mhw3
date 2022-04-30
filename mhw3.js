
function onJson(json){
    console.log(json);
 const sezione=document.querySelector(".sport");
 sezione.innerHTML="";

 
const data=json.data;
console.log(data);
 for(let dati of data){




const img_url=dati.images.downsized_medium.url;
console.log(img_url);
const div=document.createElement("div");


const img=document.createElement("img");
img.src=img_url;
//console.log(img);
img.classList.add("img_api");

div.appendChild(img);
sezione.appendChild(div);
//console.log(sezione);

} 


}


function onResponse(Response){
    
return Response.json();

}



function search(event){

event.preventDefault();

const form_text=document.querySelector(".p").value;
const text=encodeURIComponent(form_text);
const tipo=document.querySelector("#tipo").value;
console.log("RICERCA IN CORSO: "+text);


if(tipo=='gif'){
    rest_url_gif="http://api.giphy.com/v1/gifs/search"+"?api_key="+api_key +"&q="+text+"&limit="+results;
fetch(rest_url_gif).then(onResponse).then(onJson);
}

if(tipo=='stickers'){
    rest_url_stickers="http://api.giphy.com/v1/stickers/search"+"?api_key="+api_key +"&q="+text+"&limit="+results;
fetch(rest_url_stickers).then(onResponse).then(onJson);
}

}
const api_key="4tegnKLwgvCsgCspXUabVRMU4orSXk1F";
const form=document.querySelector("form");
form.addEventListener("submit",search);
const results=5;




