const juiceInfo = document.querySelector(".juice-info"); //hold name n descrptn
const title = document.querySelector("h1"); //name of juice
const juiceDescription = document.querySelector(".juice-description");// descrptn of juice 
const juiceArray = document.querySelectorAll(".juice-bunch"); //that 4 static bottles after descrptn
const juiceWheel= document.querySelector(".juice-wheel"); //wheel of juices 
const fruitsWheel= document.querySelector(".fruits-wheel"); // wheel of fruits

let currentJuice = juiceArray[0];

const juiceData = [
    {
    name: "Strawberry Juice",
    description: "Strawberry Juice is a refreshing fresh fruit juice that is full of vitamin C and antioxidants and lot of invigorating flavor. Apart from fresh and ripe strawberries, this recipe also uses lime juice to make it tantalizing.",
    backgroundColor: "linear-gradient(90deg,rgb(255, 22, 61),pink)",
    },
    {
        name: "Plum Juice",
        description:"A luscious elixir extracted from ripe plums. Bursting with rich flavor and natural sweetness, it delivers a refreshing and satisfying experience. Indulge in the succulent essence of plums while enjoying the numerous health benefits it offers.",
        backgroundColor: "linear-gradient(90deg ,rgb(88, 0, 99),rgb(193, 89, 237) )",
    },
    {
        name: "Kiwi Juice",
        description: "A vibrant and tangy elixir extracted from ripe kiwis. Packed with essential nutrients, it offers a refreshing and invigorating experience. The perfect balance of sweetness and tanginess makes it a popular choice for a healthy and flavorful beverage.",
        backgroundColor: "linear-gradient(90deg,rgb(95, 107, 0),rgb(107,199 , 88 )",
    },
    {
        name: "Orange Juice",
        description: "Orange juice is a liquid extract of the orange tree fruit, produced by squeezing or reaming oranges. It comes in several different varieties, including blood orange, navel oranges, valencia orange, clementine, and tangerine.",
        backgroundColor: "linear-gradient(90deg,rgb(237, 143, 1),rgb(210, 193, 94) )",
    },
];


juiceArray.forEach((element, index) => {
    element.addEventListener("click", () => {

      document.querySelector("main").style.background =
        juiceData[index].backgroundColor;
     const newDeg = -45 -index * 90;

      juiceWheel.style.transform = `rotate(${newDeg}deg)`;
      fruitsWheel.style.transform = `rotate(${newDeg}deg)`;

      title.innerHTML = juiceData[index].name;
      juiceDescription.innerHTML = juiceData[index].description;
      
      currentJuice.classList.remove("activePhoto");
      element.classList.add("activePhoto");
      currentJuice = element;
      juiceInfo.classList.add("fade-in");

      setTimeout(() => {
        juiceInfo.classList.remove("fade-in");
      }, 1000);
    });
  });