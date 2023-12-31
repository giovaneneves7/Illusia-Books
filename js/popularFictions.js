

function getBanners(){

  //var uri = 'https://api.waifu.pics/sfw/smile';
  var host = 'https://dcd9-2804-910-1bb-6f00-5957-715b-2088-59aa.ngrok-free.app';
  var uri = '/api/v1';
  var resource = '/banners';
  var url = host.concat(uri).concat(resource);

  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }
    return response.json(); 
  })
  .then(data => {

    console.log(data);
    //var banner = document.querySelector('img.__banner__');
    //banner.src = data.url;
    
    //banner.src = data.url;
  })
  .catch(error => {
    console.error('Erro:', error);
  });

  /*fetch(uri.concat(resource)
    .then(res => {
      console.log(res);
      return res.json();
    } )
    .then(data => {
      
      console.log("Dados: " + data)
      var banner = document.querySelector('div.__banner__');

      var d = data || [];
      banner.src = d[1].url;
      banner.alt = d[1].description;

    })
    .catch(error => {
      console.log(error);
    });*/
}

getBanners();


const intervalId = setInterval(changeCenterPopularFiction, 3000);

function changeCenterPopularFiction(){

    var leftCover = document.querySelector("img#__leftPopularFictionCover__");
    var centerCover = document.querySelector("img#__centerPopularFictionCover__");
    var rightCover = document.querySelector("img#__rightPopularFictionCover__");

    var title = document.querySelector("h3.__top3PopularFictionTitle__");
    var genres = document.querySelector("p.__top3PopularFictionGenres");
    var synopsis = document.querySelector("p.__top3PopularFictionSynopsis");

    var temp = centerCover.src;

    centerCover.src = leftCover.src;
    leftCover.src = rightCover.src;
    rightCover.src = temp;

    if(centerCover.src.endsWith('another-sample-cover.jpg')){
      title.innerText = 'The Rising of the Shield Hero';
      genres.innerHTML = 'Fantasy, Isekai, LitRPG, Adventure';
      synopsis.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rem tempora nihil beatae ratione, placeat accusamus quod, dolorum excepturi, reprehenderit odit? Itaque quia facilis excepturi ex incidunt nihil animi voluptatum.';
      
      return;
  
    } else if(centerCover.src.endsWith('other-sample-cover.jpg')){

      title.innerText = "The King's Avatar";
      genres.innerHTML = 'Game, Action, Adventure';
      synopsis.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dignissimos asperiores officiis tempore laboriosam non ex repudiandae, corporis consectetur ipsam pariatur nemo, voluptatibus hic dolor rerum! Eius odit fugit ex?';

      return;
    }  

    title.innerText = 'Return of the Frozen Player';
    genres.innerHTML = 'Fantasy, Action, Game';
    synopsis.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat vero ad illo omnis adipisci vitae impedit. Quia quaerat reiciendis alias voluptatum odit aut corrupti eligendi maxime mollitia tenetur? Obcaecati, architecto.';
     

    
  }