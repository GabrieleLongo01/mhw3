
function onJson2(json){
    console.log(json);
 const sezione=document.querySelector(".musica");
 sezione.innerHTML="";

 

 
const risultati = json.tracks.items;
  let n_risultati = risultati.length;
 
  if(n_risultati > 5)
    n_risultati = 5;
 
  for(let i=0; i<n_risultati; i++)
  {
    
    const canzoni = risultati[i]
   
    const titolo = canzoni.name;
    const immagine = canzoni.album.images[0].url;
    
    const div = document.createElement('div');
    
   
    const img = document.createElement('img');
    img.src = immagine;
    img.classList.add("img_api2");
    
    const span = document.createElement('span');
    span.textContent = titolo;
    span.classList.add("span");
    div.appendChild(img);
    div.appendChild(span);
    
    sezione.appendChild(div);
  }

} 









function onResponse2(response) {
    
    return response.json();
  }
  
  function search(event)
  {
    
    event.preventDefault();
    
    const form_text=document.querySelector(".p2").value;
    const text=encodeURIComponent(form_text);
    console.log("RICERCA IN CORSO: "+text);
  
  
    fetch("https://api.spotify.com/v1/search?type=track&q=" + text,
      {
        headers:
        {
          'Authorization': 'Bearer ' + token
        }
      }
    ).then(onResponse2).then(onJson2);
  }
  
  function onTokenJson(json)
  {
    console.log(json)
    
    token = json.access_token;
  }
  
  function onTokenResponse(response)
  {
    return response.json();
  }
  
  
   const client_id="9c2f51850d2c4f6c9e97aea4f7c8ae92";
   const client_secret="ed685e1b2bf74872aa3468206c0335c5";
  
  let token;
 
  fetch("https://accounts.spotify.com/api/token",
      {
     method: "post",
     body: 'grant_type=client_credentials',
     headers:
     {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
     }
    }
  ).then(onTokenResponse).then(onTokenJson);
  
  const form2 = document.querySelector('.form');
  form2.addEventListener('submit', search);

