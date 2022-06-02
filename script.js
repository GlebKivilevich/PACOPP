const monthName = ['январь','февраль','март','апрель','май','июнь','июль','август',
                'сентябрь','октябрь','ноябрь','декабрь'],
    container = document.querySelector(".calendar__block"),
    monthContainer = document.querySelector('.name__month'),
    yearContainer = document.querySelector('.name__year'),
    daysContainer = document.querySelector('.days'),
    next = document.querySelector('.next'),
    prev = document.querySelector('.prev');

let nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear();


let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
console.log(nowDate.getFullYear());

let infoAboutDay = "Введение в мир экономики",
    infoAboutTime = "19:00",
    linkInfo = "Подключиться",
    dayInfo = [11, 13, 18, 20, 25, 27];

function setMonthCalendar(year,month) {
    let monthDays = new Date(year, month + 1, 0).getDate(),
        monthPrefix = new Date(year, month, 0).getDay(),
        monthDaysText = '';
        monthDaysText.toUpperCase();


    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;
    daysContainer.innerHTML = '';    

    if (monthPrefix > 0){
        for (let i = 1  ; i <= monthPrefix; i++){
            monthDaysText += '<li></li>';            
        }
    }
    for (let i = 1; i <= monthDays; i++){      

        dayInfo.map((item) => {
           if (i === item) {            
            monthDaysText += `
            <li class="blue__info fz-14"> 
                <h3 class="h3__info__day">${i}</h3>               
                <div class="info__about__day">
                    <p class="info__time">
                        ${infoAboutDay}
                    </p>
                    <p class="info__time">
                        ${infoAboutTime}
                    </p>
                    <a class="info__about__link" href="#">${linkInfo} </a>                                
                </div>
            </li>`;

            }               
        });  
            if (i !== dayInfo[0] && i !== dayInfo[1] && i !== dayInfo[2] && 
                i !== dayInfo[3]&& i !== dayInfo[4] && i !== dayInfo[5]) {
            monthDaysText +=
            `
            <li class="grey__info fz-14"> 
                <h3 class="h3__info__day">${i}</h3>    
            </li>
            `;
        }             

    }


    daysContainer.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear){
        days = daysContainer.getElementsByTagName('li');
        days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
    }
}

setMonthCalendar(nowYear,nowMonth);

prev.addEventListener("click", () => {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() - 1);    

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    dayInfo = [];

    setMonthCalendar(curYear,curMonth);

});

next.addEventListener("click", () => {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() + 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    dayInfo = [];

    setMonthCalendar(curYear,curMonth);

});

// Burger
const BGMenu = document.querySelector(".burger__menu"),
    modal = document.querySelector(".modal"),
    closeModal = document.querySelector("[data-close]");

BGMenu.addEventListener("click", () => {
    if (modal.classList.contains("hide")){
        modal.classList.remove("hide");
        modal.classList.add("show");
    } else {
        modal.classList.add("hide");
        modal.classList.remove("show");
    }

});
closeModal.addEventListener("click", () => {
    if (modal.classList.contains("show")){
        modal.classList.add("hide");
        modal.classList.remove("show");
    }
});

function showBurger(burger) {
    if (window.outerWidth <= 1155 ){
        burger.classList.remove("hide");
        burger.classList.add("show");
        console.log(1);
    } 
    if (window.outerWidth >= 1158) {
        burger.classList.remove("show");
        burger.classList.add("hide");
        console.log(2);
    } 
}

showBurger(BGMenu);
// Burger


// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    const blockID = anchor.getAttribute("href");

    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
// Scroll 