document.addEventListener('DOMContentLoaded', () => {

    const cardArray= [
        {
            name: 'car-1',
            img: './images/car-1.jpg'
        },
        {
            name: 'car-2',
            img: './images/car-2.jpg'
        },
        {
            name: 'car-3',
            img: './images/car-3.jpg'
        },
        {
            name: 'car-4',
            img: './images/car-4.jpg'
        },
        {
            name: 'car-5',
            img: './images/car-5.jpg'
        },
        {
            name: 'car-6',
            img: './images/car-6.jpg'
        },
        {
            name: 'car-7',
            img: './images/car-7.jpg'
        },
        {
            name: 'car-8',
            img: './images/car-8.jpg'
        },
        {
            name: 'car-1',
            img: './images/car-1.jpg'
        },
        {
            name: 'car-2',
            img: './images/car-2.jpg'
        },
        {
            name: 'car-3',
            img: './images/car-3.jpg'
        },
        {
            name: 'car-4',
            img: './images/car-4.jpg'
        },
        {
            name: 'car-5',
            img: './images/car-5.jpg'
        },
        {
            name: 'car-6',
            img: './images/car-6.jpg'
        },
        {
            name: 'car-7',
            img: './images/car-7.jpg'
        },
        {
            name: 'car-8',
            img: './images/car-8.jpg'
        }
    ];

    cardArray.sort(() => 0.5 - Math.random());
    const gridElement = document.querySelector('.grid');
    const result = document.getElementById('result');
    const refresh = document.getElementById('refresh');
    var cardsChosen = [];
    var cardsChosenId = [];
    var score = 0;
    var cardsWon = [];

    
    //creat the coard
    function createBoard(){
        for(let i = 0; i < cardArray.length; i++){
            var cardContainer = document.createElement('div');
            cardContainer.classList.add("card");
            var card = document.createElement('img');
            card.setAttribute("src", "images/card.jpg");
            card.setAttribute("data-id", i);
            card.addEventListener('click', flipCard);
            cardContainer.appendChild(card);

            gridElement.appendChild(cardContainer);

        }
    }

    // check for match
    var firstCard;
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] == cardsChosen[1]){
            cards[optionOneId].classList.add("right-choice");
            cards[optionTwoId].classList.add("right-choice");
            cards[optionOneId].classList.remove("wrong-choice");
            cards[optionTwoId].classList.remove("wrong-choice");

            cards[optionOneId].removeEventListener("click", flipCard)
            cards[optionTwoId].removeEventListener("click", flipCard)
            
            cardsWon.push(cardsChosen);
            score += 10;
        }else{
            firstCard.addEventListener("click", flipCard)
            cards[optionOneId].classList.add("wrong-choice");
            cards[optionTwoId].classList.add("wrong-choice");
            cards[optionOneId].classList.remove("right-choice");
            cards[optionTwoId].classList.remove("right-choice");
            cards[optionOneId].setAttribute('src', "images/card.jpg");
            cards[optionTwoId].setAttribute('src', "images/card.jpg");
        }
        cardsChosen = [];
        cardsChosenId = []
        result.innerText = score;
        if(cardsWon.length == cardArray.length / 2){
            alert("Congratulation! You Won");
            refresh.innerText = "refresh the page to play again";
        }
    }
    // flip card function
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length == 1){
            this.removeEventListener("click", flipCard);
            firstCard = this;
        }
        if(cardsChosen.length == 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard()

});