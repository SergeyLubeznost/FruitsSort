// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления
const minWeight = document.querySelector('.minweight__input'); // поле с минимальным весом
const maxWeight = document.querySelector('.maxweight__input'); // поле с максимальным весом

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
const display = () => {
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits
  while (fruitsList.firstChild) {
    fruitsList.removeChild(fruitsList.firstChild);
  }

  for (let i = 0; i < fruits.length; i++ ) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild
    let elem1 = document.createElement("li") 
    elem1.classList.add ("fruit__item")
    console.log(elem1); 
 
    let div = document.createElement("div") 
    div.classList.add("fruit__info")
    console.log(div);

    let div0 = document.createElement("div") 
    div0.innerHTML = `Index:` + [i]; 

    let div1 = document.createElement("div") 
    div1.innerHTML =`Kind:` + fruits[i].kind; 

    let div2 = document.createElement("div") 
    div2.innerHTML =`Color:` + fruits[i].color; 
    

    let div3 = document.createElement("div") 
    div3.innerHTML = `weight:` + fruits[i].weight; 
  
    div.appendChild(div0);
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);

    elem1.appendChild(div);
    elem1.style.cssText = `border: 5 px solid black;`
    fruitsList.appendChild(elem1);
    console.log(fruitsList);
   
    if (fruits[i].color === "фиолетовый"){
      elem1.style.cssText  = `border:5px solid violet;`
    }
    if (fruits[i].color === "зеленый"){
      elem1.style.cssText  = `border:5px solid green;`
    }
  if (fruits[i].color === "розово-красный"){
    elem1.style.cssText  = `border:5px solid #dc143c;`
  }
  if (fruits[i].color === "желтый"){
    elem1.style.cssText  = `border:5px solid yellow;`
  }
  if (fruits[i].color === "светло-коричневый"){
    elem1.style.cssText  = `border:5px solid #cd853f;`
  }
}
};

  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits
  while (fruitsList.firstChild) {
    fruitsList.removeChild(fruitsList.firstChild);
  }

  for (let i = 0; i < fruits.length; i++ ) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild
    let elem1 = document.createElement("li") 
    elem1.classList.add ("fruit__item")
    console.log(elem1); 
 
    let div = document.createElement("div") 
    div.classList.add("fruit__info")
    console.log(div);

    let div0 = document.createElement("div") 
    div0.innerHTML = `Index:` + [i]; 

    let div1 = document.createElement("div") 
    div1.innerHTML =`Kind:` + fruits[i].kind; 

    let div2 = document.createElement("div") 
    div2.innerHTML =`Color:` + fruits[i].color; 
    

    let div3 = document.createElement("div") 
    div3.innerHTML = `weight:` + fruits[i].weight; 
  
    div.appendChild(div0);
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div3);

    elem1.appendChild(div);
    elem1.style.cssText = `border: 5 px solid black;`
    fruitsList.appendChild(elem1);
    console.log(fruitsList);
   
    if (fruits[i].color === "фиолетовый"){
      elem1.style.cssText  = `border:5px solid violet;`
    }
    if (fruits[i].color === "зеленый"){
      elem1.style.cssText  = `border:5px solid green;`
    }
  if (fruits[i].color === "розово-красный"){
    elem1.style.cssText  = `border:5px solid #dc143c;`
  }
  if (fruits[i].color === "желтый"){
    elem1.style.cssText  = `border:5px solid yellow;`
  }
  if (fruits[i].color === "светло-коричневый"){
    elem1.style.cssText  = `border:5px solid #cd853f;`
  }
}

// первая отрисовка карточек
display();
console.log(fruits)
/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let copyFruits = fruits.map(i => i);
console.log(copyFruits)
// перемешивание массива
const shuffleFruits = () => {
  let result = [];

  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {
    
    let randomFriuts = getRandomInt(0, fruits.length - 1);
    let index = fruits[randomFriuts];
    fruits.splice(randomFriuts, 1);
    result.push(index)
    console.log (result)
  }
  
if (comparison (copyFruits, result)) {
alert ('error');
};

  fruits = result;
  
};

function comparison (a, b) {
return JSON.stringify(a)===JSON.stringify(b);
};

shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/


// фильтрация массива
const filterFruits = () => {
  let newFruits = [];
  fruits.filter((item) => {
      if (isNaN(minWeight.value) || minWeight.value == '' ) {
          minWeight.value = 'Число не найдено';
      }
      if (isNaN(maxWeight.value) || maxWeight.value == '') {
          maxWeight.value = 'Число не найдено';
         
      }
          if (
              item.weight <= maxWeight.value &&
              item.weight >= minWeight.value
          ) {
            newFruits.push(item);
              fruits = newFruits.slice();
          }
      
  });
};

minWeight.addEventListener('click', () => {
      minWeight.value = "";
});

maxWeight.addEventListener('click', () => {
      maxWeight.value = "";
});

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету
  return a.color  < b.color;
};

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
       const n = arr.length;
       // внешняя итерация по элементам
       for (let i = 0; i < n-1; i++) { 
           // внутренняя итерация для перестановки элемента в конец массива
           for (let j = 0; j < n-1-i; j++) { 
               // сравниваем элементы
               if (comparationColor(arr[j], arr[j+1])) { 
                   // делаем обмен элементов
                   let temp = arr[j+1]; 
                   arr[j+1] = arr[j]; 
                   arr[j] = temp; 
               }
           }
       }                    
  },

  quickSort(items, left, right) {
    // TODO: допишите функцию быстрой сортировки
  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
},
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;
console.log(sortTime)
sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
  sortTimeLabel.textContent = sortTime;
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
  display();
});
