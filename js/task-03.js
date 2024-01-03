const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];


const galleryList = document.querySelector('.gallery');

const galleryMarkup = images.map((image) => 
`<li class="gallery-item">
    <img src="${image.url}" alt="${image.alt}" width="350" class="gallery-image">
  </li>`
).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.style.listStyle = "none";
galleryList.style.display = "flex";
galleryList.style.gap = "30px";
galleryList.style.justifyContent = "start";
galleryList.style.alignItems = "start";
