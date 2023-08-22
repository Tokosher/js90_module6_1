// getElementById()
// const element = document.getElementById('title');
// console.log(element);

// ******Пошук HTML елементу за допомогою querySelector****** \\

// За назвою тегу
// const element = document.querySelector('h1');
// console.log(element)
 
// За назвою класу
// const element = document.querySelector('.js-title');
// console.log(element);

// За ID
// const element = document.querySelector('#title');
// console.log(element)






// ******Пошук HTML елементів за допомогою querySelectorAll****** \\

// const elements = document.querySelectorAll('.js-item');
// console.log(elements);

// Перетворення колекції до масиву
// console.log([...elements]);
// console.log(Array.from(elements))





// ******Створення HTML елементів за допомогою createElement****** \\

// const list = document.querySelector('.js-list');

// const li = document.createElement('li');
// const h2 = document.createElement('h2');

// h2.textContent = 'Hello World';

// li.append(h2);
// list.append(li);


// ******Створення HTML елементів за допомогою шаблонної розмітки****** \\

// const list = document.querySelector('.js-list');

// const textContent = 'Hello World';

// const li = `<li class = 'class1'>
// <h2>${textContent}</h2>
// </li>`;

// Метод insertAdjacentHTML
// list.insertAdjacentHTML('beforeend', li);

// Властивість innerHTML
// list.innerHTML = `<li class = 'class1'>
// <h2>Hello!!</h2>
// </li>`;

// console.log(list.innerHTML)


// ******Стилізація за допомогою властивості style****** \\

// const list = document.querySelector('.js-list');

// list.style.margin = '20px 20px 30px';
// list.style.color = 'red';
// list.style.fontSize = '30px';




// ******Стилізація за допомогою властивості classList****** \\
// const list = document.querySelector('.js-list');

// // Метод add
// list.classList.add('list')

// // Метод remove
// list.classList.remove('list')

// // Метод toggle
// list.classList.toggle('list');








// ******Системні атрибути****** \\
// const btn = document.querySelector('.js-btn');
// btn.disabled = true;
// btn.disabled = false;
// btn.hidden = true;
// btn.hidden = false;





// методи для роботи з атрибутами
// const btn = document.querySelector('.js-btn');
// btn.setAttribute('class', 'btn')
// btn.removeAttribute('class')

// btn.disabled = true;
// console.log(btn.getAttribute('disabled'))
// console.log(btn.getAttribute('class'))

// const list = document.querySelector('.js-list');
// list.setAttribute('class', 'list');
// list.removeAttribute('class')





// ***************************Практика************************* \\
// Потрібно створити розмітку з картками автомобілів.
// Для створення розмітки використовуй масив cars.

// Варіант-1
// Створи розмітку використовуючи метод createElement

// Варіант-2
// Створи розмітку використовуючи приклад шаблонної розмітки

// const cars = [
//   {
//     id: 1,
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 3,
//     model: "BMW",
//     type: "5 series",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 4,
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 5,
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const list = document.querySelector('.js-list');

// const liArray = cars.map(({ id, model, type, price, img }) => {
//     return `<li>
//     <img src="${img}" alt="${model}" width="300" />
//     <h2>${model}</h2>
//     <h3>${type}</h3>
//     <span>${price}</span>
//     </li>`
// });

// const markup = liArray.join('');
// list.insertAdjacentHTML('afterbegin', markup);

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// console.log(markup);


// const div = document.querySelector('[data-id="area1"]');
// console.log(div);

const list = document.querySelector('.js-list');
console.log(list.firstElementChild.t)