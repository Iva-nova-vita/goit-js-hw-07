const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

images.forEach((image) => {
  const ul = document.querySelector('.gallery');
  // first way

  // const li = document.createElement('li');
  // ul.append(li);
  // const img = document.createElement('img');
  // img.src = image.url;
  // img.alt = image.alt;
  // li.append(img);

  // second way
  const li = `<li><img src="${image.url}" alt="${image.alt}"</li>`
  ul.insertAdjacentHTML("afterbegin", li);
});
