const api = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PLwqhGu6CWqsTkRrRwAhtsEOTkH0I1rzGd&part=snippet&maxResults=6';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d9a47135fmsh862586f3c76b7a4p15886ajsn579af5fb2c3a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const youtubeContainer = document.querySelector('.youtube-container');



const buildHtmlYoutube = (data) => {
  data.items.map ((data, index) => {
    let textImgContainer = document.createElement('div');
    let image = document.createElement('img');
    let title = document.createElement('h4');
    image.className = 'youtube-thumbnail';
    title.className = 'youtube-title';
    textImgContainer.className = 'youtube-text-img-container';
    image.src = data.snippet.thumbnails.high.url;
    title.innerText = data.snippet.title;
    image.alt = `foto clau-${index}`;
    textImgContainer.appendChild(image);
    textImgContainer.appendChild(title);
    youtubeContainer.appendChild(textImgContainer)
})
}

const fetchData = async (api) =>  {
  try {
     const response = await fetch(api, options);
     const data = await response.json();
     console.log(data);
     buildHtmlYoutube(data)
   } catch (error) {
     console.log(error)
   }
 }

fetchData(api);






















/*const api = 'https://instagram188.p.rapidapi.com/userpost/54063827267/12/%7Bend_cursor%7D'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6d9a47135fmsh862586f3c76b7a4p15886ajsn579af5fb2c3a',
		'X-RapidAPI-Host': 'instagram188.p.rapidapi.com'
	}
};

const caption = document.querySelector('.caption');
const captionContenedor = document.querySelector('#caption-contenedor');
const image = document.querySelector('.image');
const imageContenedor = document.querySelector('.img-contenedor');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const buildHtmlFeed = (data) => {
  data.data.edges.map ((feed, index) => {

     caption.innerText = feed.node.edge_media_to_caption.edges[0].node.text
     image.src = photo.node.thumbnail_src
     image.alt = `foto clau-${index}`
 })
}
 const fetchData = async (apiUrl) =>  {
   try {
     const response = await fetch(apiUrl, options);
     const data = await response.json();
     console.log(data);
     buildHtmlFeed(data)
   } catch (error) {
     console.log(error)
   }
 }

 fetchData(api)

*/

// const apiuUrl = 'https://instagram130.p.rapidapi.com/account-medias?userid=54063827267&first=6'

// const content = document.getElementById('content');

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '6d9a47135fmsh862586f3c76b7a4p15886ajsn579af5fb2c3a',
//         'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
//     }
// };

// const buildHtmlPhotos = (data) => {
//   data.edges.map( (photo, index) => {
//     let section = document.createElement('section')
//     let imageContainer = document.createElement('div')
//     let image = document.createElement('img')
//     let caption = document.createElement('div')
//     let captionInfo = document.createElement('p')

//     captionInfo.className = 'instagram-captions'
//     captionInfo.innerText = photo.node.edge_media_to_caption.edges[0].node.text

//     caption.appendChild(captionInfo)

//     image.src = photo.node.thumbnail_src
//     image.alt = `foto clau-${index}`

//     imageContainer.appendChild(image)

//     section.appendChild(imageContainer)
//     section.appendChild(caption)

//     content.appendChild(section)
//   })

// }

// const fetchData = async (apiUrl) =>  {
//   try {
//     const response = await fetch(apiUrl, options);
//     const data = await response.json();
//     console.log(data);
//     buildHtmlPhotos(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

// fetchData(apiuUrl)



// async function fetchData(urlAPI) {
//     const response = await fetch(urlAPI, options);
//     const data = await response.json();
//     return data;
// }
// console.log(data);

// (async()=> {
//     try {
// const fotos = await fetchData(API);
// let view = 
// ${fotos.items.map(foto => 
//     <section>
//     <div>
//      <img src="${foto.edges.items.node.display_url}" alt="Fotos de instagram">
//     </div>
//     <div>
//         <p class="instagram-captions">
//          ${foto.edges.items.node.edge_media_to_caption.edges.item.node.text}
//         </p>
//         </div>
//      </section> 
//     ).slice(0,6).join('')}
//     ;
//     content.innerHTML = view;
//     } catch(error) {
//         console.log(error);
//      }
//  })();