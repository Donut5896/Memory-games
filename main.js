document.addEventListener('DOMContentLoaded', () => {
    

    //card options
    const cardArray = [
        {
             name: 'fries',
             img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png'
       },
       {
           name: 'cheeseburger',
           img: 'src/images/cheeseburger.png'
       },
       {
           name: 'hotdog',
           img: 'src/images/hotdog.png'
       },
       {
           name: 'ice-cream',
           img: 'src/images/ice-cream.png'
       },
       {
           name: 'milkshake',
           img: 'src/images/milkshake.png'
       },
       {
           name: 'pizza',
           img: 'src/images/pizza.png'
       }
    
    ]
    

  

    //sort an array randomly
    cardArray.sort( () => 0.5 - Math.random()) //generate number [-0.5, 0.5]  
      console.log(cardArray)
    

    //put randomly sorted cards into the grid
    const grid = document.querySelector('.grid')
    const resultDisplay = document.getElementById('result')

    let cardsChosenIds = []
    let cardsChosen = []
    let cardsWon = []

        function createBoard(){
            for(let i=0; i < cardArray.length; i++){
                const card = document.createElement('img')
                card.setAttribute('src', 'src/images/blank.png')
                card.setAttribute('data-id', i) //0 to 11
                card.addEventListener('click', flipCard)
                grid.appendChild(card)
            } 
        }

    createBoard()

    //flipcard function
    function flipCard(){
        //get data attribute from the card that user fliped
        let cardId = this.getAttribute('data-id')
        //console.log(cards[cardId])

        //store chosen cards name in the array
        cardsChosen.push(cardArray[cardId].name)

        //console.log(cardsChosen)
        cardsChosenIds.push(cardId)

        //set chosen cards images when filped
        this.setAttribute('src', cardArray[cardId].img)

        //flip card back when two cards don't match
        if(cardsChosen.length === 2){
            setTimeout( checkForMatch, 500)
        }
    }

    //game logic
    function checkForMatch(){

        const cards  = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0] //card option one
        const optionTwoId = cardsChosenIds[1] //card option two
            
        // stop user from double fires 
        if(optionOneId == optionTwoId){
            alert('you have clicked the same image!')
            //flip the cards back
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
        
            //check if two cards matches
        }else if( cardsChosen[0] === cardsChosen[1]){
            alert('it a matched!')
             //flip the cards back
             cards[optionOneId].setAttribute('src', 'src/images/white.png')
             cards[optionTwoId].setAttribute('src', 'src/images/white.png')
             cards[optionOneId].removeEventListener('click', flipCard)
             cards[optionTwoId].removeEventListener('click', flipCard)
        
             //push matches cards to the array
             cardsWon.push(cardsChosen)
            }else{
                //if the cards don't maches
                cards[optionOneId].setAttribute('src', 'src/images/blank.png')
                cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
                alert('you lost!, try again!')
            }
            //reset array
            cardsChosen = []
            cardsChosenIds= []

            //score display
            resultDisplay.textContent = cardsWon.length
            if(cardsWon.length === cardArray.length / 2){
                resultDisplay.textContent = ' Congratulation! You have won!'
            }
        
            console.log(cardsChosen)
            console.log(cardsWon)
    }
})