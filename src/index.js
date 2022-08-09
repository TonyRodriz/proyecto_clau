const token = 'IGQVJYSmJ6aVluRGdMTzNvQ3E0REV2dC12VUJ5MEl1cmtMUDlJVlhqd0RTNmozSjR2cmV1dGx1N1d5c0YzaHJpcHBkVVFhd2NwV3dwLUZAHSnlLUGlDWHU3QmFIWmdMb0g2WGo1QzJrT2xwLV9ob2dxOQZDZD'
const apiuUrl = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=9&access_token=${token}`;

const buildHtmlPhotos = (data) => {
  data.edges.map( (photo, index) => {
    let section = document.createElement('section')
    let imageContainer = document.createElement('div')
    let image = document.createElement('img')
    let caption = document.createElement('div')
    let captionInfo = document.createElement('p')

    captionInfo.className = 'instagram-captions'
    captionInfo.innerText = photo.node.edge_media_to_caption.edges[0].node.text

    caption.appendChild(captionInfo)

    image.src = photo.node.thumbnail_src
    image.alt = `foto clau-${index}`

    imageContainer.appendChild(image)

    section.appendChild(imageContainer)
    section.appendChild(caption)

    content.appendChild(section)
  })

}

const fetchData = async (apiUrl) =>  {
  try {
    const response = await fetch(apiUrl, token);
    const data = await response.json();
    console.log(data);
    buildHtmlPhotos(data)
  } catch (error) {
    console.log(error)
  }
}

fetchData(apiuUrl)



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