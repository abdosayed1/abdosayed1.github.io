
const piecesArray = [
    {
        piece: 'back-left-tires',
        img: "./images/Asset 76.svg",
        i: 0
    },
    {
        piece: 'back-right-tires',
        img: "./images/Asset 77.svg",
        i: 1
    },
    {
        piece: 'left-sidepods',
        img: "./images/Asset 78.svg",
        i: 2
    },
    {
        piece: 'right-sidepods',
        img: "./images/Asset 79.svg",
        i: 3
    },
    {
        piece: 'front-left-tires',
        img: "./images/Asset 74.svg",
        i: 4
    },
    {
        piece: 'front-right-tires',
        img: "./images/Asset 75.svg",
        i: 5
    },
    {
        piece: 'front-wings',
        img: "./images/Asset 72.svg",
        i: 6
    },
    {
        piece: 'belgian-nose',
        img: "./images/Asset 73.svg",
        i: 7
    },
    {
        piece: 'passenger-seat',
        img: "./images/Asset 71.svg",
        i: 8
    },
    {
        piece: 'rear-wing',
        img: "./images/Asset 81.svg",
        i: 9
    }
];

const piecesContainer = document.getElementById("pieces-container");
piecesArray.forEach(singlePiece => {
    let pieceElement = document.createElement('img');
    pieceElement.classList.add("piece", singlePiece.piece);
    pieceElement.setAttribute("src", singlePiece.img);
    pieceElement.setAttribute("data-id", singlePiece.i);
    piecesContainer.appendChild(pieceElement);
});


const dragAreas = document.querySelectorAll(".drag-area");
const pieces = document.querySelectorAll(".piece");

// dragAreas.forEach( dragArea => {
//     dragArea.addEventListener('dragstart', () => {


//         
//     })
// });


pieces.forEach( piece => {
    // drag start
    piece.addEventListener('dragstart', () => {
        piece.classList.add("draging");
    })

    // drag end
    piece.addEventListener('dragend', () => {
        piece.classList.remove("draging");
    })

    // touch start
    piece.addEventListener('touchstart', () => {
        piece.classList.add("draging");
    })

    // touch end
    piece.addEventListener('touchend', () => {
        piece.classList.remove("draging");
    })
});

dragAreas.forEach(dragArea => {
    dragArea.addEventListener('dragover', e => {
        e.preventDefault();
        const draging = document.querySelector(".draging");
        // dragArea.appendChild(draging);
            if(document.body.clientWidth > 768 && document.body.clientWidth <= 1125 && document.body.clientHeight >= 1024){
                switch (draging.getAttribute("data-id")){
                    case '0':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '0']");
                            
                            
                            
                            
                            if(
                                e.clientX > 23
                                &&
                                e.clientX < 423
                                &&
                                e.clientY > 446
                                &&
                                e.clientY < 846
                            ){
                                // 
                                dragArea.appendChild(draging);
                                
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
    
                            
                        }
                        break;
                    case '1':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '1']");
                            
                            
                            
                            if(
                                e.clientX > 219
                                &&
                                e.clientX < 619
                                &&
                                e.clientY > 446
                                &&
                                e.clientY < 846
                            ){
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '2':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '2']");
                            
                            
    
                            if(
                                e.clientX > 76
                                &&
                                e.clientX < 476
                                &&
                                e.clientY > 247
                                &&
                                e.clientY < 647
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '3':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '3']");
                            
                            
                            
                            if(
                                e.clientX > 286
                                &&
                                e.clientX < 686
                                &&
                                e.clientY > 252
                                &&
                                e.clientY < 652
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '4':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '4']");
                            
                            
                            
                            if(
                                e.clientX > 26
                                &&
                                e.clientX < 426
                                &&
                                e.clientY > 0
                                &&
                                e.clientY < 314
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '5':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '5']");
                            
                            
    
                            if(
                                e.clientX > 214
                                &&
                                e.clientX < 614
                                &&
                                e.clientY > 0
                                &&
                                e.clientY < 314
                                
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '6':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '6']");
                            
                            
                            
                            if(
                                e.clientX > 52
                                &&
                                e.clientX < 452
                                &&
                                e.clientY > 0
                                &&
                                e.clientY < 200
                                
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '7':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '7']");
                            
                            
                            
                            if(
                                e.clientX > 24
                                &&
                                e.clientX < 424
                                &&
                                e.clientY > 0
                                &&
                                e.clientY < 310
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '8':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '8']");
                            
                            
                            
                            if(
                                e.clientX > 88
                                &&
                                e.clientX < 488
                                &&
                                e.clientY > 144
                                &&
                                e.clientY < 544
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '9':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '9']");
                            
                            
                            
                            if(
                                e.clientX > 104
                                &&
                                e.clientX < 514
                                &&
                                e.clientY > 605
                                &&
                                e.clientY < 1005
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
    
                }
            }else if(document.body.clientWidth > 560 && document.body.clientWidth <= 768){
                switch (draging.getAttribute("data-id")){
                    case '0':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '0']");
                            
                            
                            
                            
                            if(
                                e.clientX > 300
                                &&
                                e.clientX < 450
                                &&
                                e.clientY > 435
                                &&
                                e.clientY < 535
                            ){
                                // 
                                dragArea.appendChild(draging);
                                
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
    
                            
                        }
                        break;
                    case '1':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '1']");
                            
                            
                            
                            if(
                                e.clientX > 436
                                &&
                                e.clientX < 536
                                &&
                                e.clientY > 435
                                &&
                                e.clientY < 535
                            ){
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '2':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '2']");
                            
                            
    
                            if(
                                e.clientX > 339
                                &&
                                e.clientX < 439
                                &&
                                e.clientY > 325
                                &&
                                e.clientY < 425
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '3':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '3']");
                            
                            
                            
                            if(
                                e.clientX > 444
                                &&
                                e.clientX < 544
                                &&
                                e.clientY > 325
                                &&
                                e.clientY < 425
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '4':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '4']");
                            
                            
                            
                            if(
                                e.clientX > 340
                                &&
                                e.clientX < 450
                                &&
                                e.clientY > 54
                                &&
                                e.clientY < 254
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '5':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '5']");
                            
                            
    
                            if(
                                e.clientX > 425
                                &&
                                e.clientX < 525
                                &&
                                e.clientY > 54
                                &&
                                e.clientY < 254
                                
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '6':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '6']");
                            
                            
                            
                            if(
                                e.clientX > 340
                                &&
                                e.clientX < 520
                                &&
                                e.clientY > 50
                                &&
                                e.clientY < 190
                                
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '7':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '7']");
                            
                            
                            
                            if(
                                e.clientX > 412
                                &&
                                e.clientX < 512
                                &&
                                e.clientY > 50
                                &&
                                e.clientY < 250
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '8':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '8']");
                            
                            
                            
                            if(
                                e.clientX > 360
                                &&
                                e.clientX < 500
                                &&
                                e.clientY > 270
                                &&
                                e.clientY < 460
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '9':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '9']");
                            
                            
                            
                            if(
                                e.clientX > 380
                                &&
                                e.clientX < 450
                                &&
                                e.clientY > 470
                                &&
                                e.clientY < 596
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
    
                }
            }else if(document.body.clientWidth > 425 && document.body.clientWidth <= 561){
                switch (draging.getAttribute("data-id")){
                    case '0':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '0']");
                            
                            
                            
                            
                            if(
                                e.clientX > 283
                                &&
                                e.clientX < 383
                                &&
                                e.clientY > 435
                                &&
                                e.clientY < 535
                            ){
                                // 
                                dragArea.appendChild(draging);
                                
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
    
                            
                        }
                        break;
                    case '1':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '1']");
                            
                            
                            
                            if(
                                e.clientX > 414
                                &&
                                e.clientX < 514
                                &&
                                e.clientY > 435
                                &&
                                e.clientY < 535
                            ){
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '2':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '2']");
                            
                            
    
                            if(
                                e.clientX > 259
                                &&
                                e.clientX < 360
                                &&
                                e.clientY > 325
                                &&
                                e.clientY < 425
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '3':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '3']");
                            
                            
                            
                            if(
                                e.clientX > 400
                                &&
                                e.clientX < 500
                                &&
                                e.clientY > 325
                                &&
                                e.clientY < 425
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '4':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '4']");
                            
                            
                            
                            if(
                                e.clientX > 274
                                &&
                                e.clientX < 374
                                &&
                                e.clientY > 140
                                &&
                                e.clientY < 240
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '5':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '5']");
                            
                            
    
                            if(
                                e.clientX > 400
                                &&
                                e.clientX < 500
                                &&
                                e.clientY > 140
                                &&
                                e.clientY < 240
                                
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '6':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '6']");
                            
                            
                            
                            if(
                                e.clientX > 270
                                &&
                                e.clientX < 470
                                &&
                                e.clientY > 50
                                &&
                                e.clientY < 150
                                
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '7':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '7']");
                            
                            
                            
                            if(
                                e.clientX > 346
                                &&
                                e.clientX < 380
                                &&
                                e.clientY > 50
                                &&
                                e.clientY < 250
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '8':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '8']");
                            
                            
                            
                            if(
                                e.clientX > 290
                                &&
                                e.clientX < 427
                                &&
                                e.clientY > 275
                                &&
                                e.clientY < 500
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '9':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '9']");
                            
                            
                            
                            if(
                                e.clientX > 295
                                &&
                                e.clientX < 429
                                &&
                                e.clientY > 396
                                &&
                                e.clientY < 596
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
    
                }
            }else if(document.body.clientWidth > 768 && document.body.clientWidth <= 1125 && document.body.clientHeight < 1024){
                switch (draging.getAttribute("data-id")){
                    case '0':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '0']");
                            
                            
                            
                            
                            if(
                                e.clientX > 300
                                &&
                                e.clientX < 450
                                &&
                                e.clientY > 435
                                &&
                                e.clientY < 535
                            ){
                                // 
                                dragArea.appendChild(draging);
                                
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
    
                            
                        }
                        break;
                    case '1':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '1']");
                            
                            
                            
                            if(
                                e.clientX > 436
                                &&
                                e.clientX < 590
                                &&
                                e.clientY > 435
                                &&
                                e.clientY < 535
                            ){
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '2':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '2']");
                            
                            
    
                            if(
                                e.clientX > 339
                                &&
                                e.clientX < 439
                                &&
                                e.clientY > 325
                                &&
                                e.clientY < 425
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '3':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '3']");
                            
                            
                            
                            if(
                                e.clientX > 444
                                &&
                                e.clientX < 544
                                &&
                                e.clientY > 325
                                &&
                                e.clientY < 425
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '4':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '4']");
                            
                            
                            
                            if(
                                e.clientX > 340
                                &&
                                e.clientX < 450
                                &&
                                e.clientY > 54
                                &&
                                e.clientY < 254
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '5':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '5']");
                            
                            
    
                            if(
                                e.clientX > 425
                                &&
                                e.clientX < 525
                                &&
                                e.clientY > 54
                                &&
                                e.clientY < 254
                                
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '6':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '6']");
                            
                            
                            
                            if(
                                e.clientX > 340
                                &&
                                e.clientX < 520
                                &&
                                e.clientY > 50
                                &&
                                e.clientY < 190
                                
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '7':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '7']");
                            
                            
                            
                            if(
                                e.clientX > 412
                                &&
                                e.clientX < 512
                                &&
                                e.clientY > 50
                                &&
                                e.clientY < 250
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '8':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '8']");
                            
                            
                            
                            if(
                                e.clientX > 360
                                &&
                                e.clientX < 500
                                &&
                                e.clientY > 270
                                &&
                                e.clientY < 460
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '9':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '9']");
                            
                            
                            
                            if(
                                e.clientX > 400
                                &&
                                e.clientX < 550
                                &&
                                e.clientY > 480
                                &&
                                e.clientY < 600
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
    
                }
            }else if(document.body.clientWidth > 1125){
                switch (draging.getAttribute("data-id")){
                    case '0':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '0']");
                            
                            console.log(e.clientX)
                            
                            
                            if(
                                e.clientX > 500
                                &&
                                e.clientX < 630
                                &&
                                e.clientY > 237
                                &&
                                e.clientY < 348
                            ){ 
                                dragArea.appendChild(draging);
                                
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                
                            
                        }
                        break;
                    case '1':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '1']");
                            
                            
                            
                            if(
                                e.clientX > 500
                                &&
                                e.clientX < 630
                                &&
                                e.clientY > 435
                                &&
                                e.clientY < 535
                            ){
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '2':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '2']");
                            
                            
                
                            if(
                                e.clientX > 580
                                &&
                                e.clientX < 930
                                &&
                                e.clientY > 210
                                &&
                                e.clientY < 344
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '3':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '3']");
                            
                            
                            
                            if(
                                e.clientX > 580
                                &&
                                e.clientX < 930
                                &&
                                e.clientY > 450
                                &&
                                e.clientY < 535
                            ){
                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '4':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '4']");
                            
                            
                            
                            if(
                                e.clientX > 1030
                                &&
                                e.clientX < 1300
                                &&
                                e.clientY > 243
                                &&
                                e.clientY < 377
                            ){
                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '5':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '5']");
                            
                            
                            
                            if(
                                e.clientX > 1010
                                &&
                                e.clientX < 1300
                                &&
                                e.clientY > 416
                                &&
                                e.clientY < 525
                            ){
                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '6':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '6']");
                            
                            
                            
                            if(
                                e.clientX > 1100
                                &&
                                e.clientX < 1400
                                &&
                                e.clientY > 235
                                &&
                                e.clientY < 547
                            ){
                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '7':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '7']");
                            
                            
                            
                            if(
                                e.clientX > 1000
                                &&
                                e.clientX < 1500
                                &&
                                e.clientY > 364
                                &&
                                e.clientY < 438
                            ){
                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '8':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '8']");
                            
                            
                            
                            if(
                                e.clientX > 590
                                &&
                                e.clientX < 900
                                &&
                                e.clientY > 263
                                &&
                                e.clientY < 501
                            ){
                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '9':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '9']");
                            
                            
                            
                            if(
                                e.clientX > 407
                                &&
                                e.clientX < 600
                                &&
                                e.clientY > 288
                                &&
                                e.clientY < 493
                            ){
                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                }
            }else{
                switch (draging.getAttribute("data-id")){
                    case '0':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '0']");
                            
                            
                            
                            
                            if(
                                e.clientX > 130
                                &&
                                e.clientX < 230
                                &&
                                e.clientY > 435
                                &&
                                e.clientY < 535
                            ){
                                // 
                                dragArea.appendChild(draging);
                                
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
    
                            
                        }
                        break;
                    case '1':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '1']");
                            
                            
                            
                            if(
                                e.clientX > 256
                                &&
                                e.clientX < 356
                                &&
                                e.clientY > 435
                                &&
                                e.clientY < 535
                            ){
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '2':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '2']");
                            
                            
    
                            if(
                                e.clientX > 130
                                &&
                                e.clientX < 230
                                &&
                                e.clientY > 325
                                &&
                                e.clientY < 425
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '3':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '3']");
                            
                            
                            
                            if(
                                e.clientX > 269
                                &&
                                e.clientX < 369
                                &&
                                e.clientY > 325
                                &&
                                e.clientY < 425
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '4':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '4']");
                            
                            
                            
                            if(
                                e.clientX > 130
                                &&
                                e.clientX < 230
                                &&
                                e.clientY > 54
                                &&
                                e.clientY < 254
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '5':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '5']");
                            
                            
    
                            if(
                                e.clientX > 256
                                &&
                                e.clientX < 365
                                &&
                                e.clientY > 54
                                &&
                                e.clientY < 254
                                
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '6':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '6']");
                            
                            
                            
                            if(
                                e.clientX > 150
                                &&
                                e.clientX < 350
                                &&
                                e.clientY > 0
                                &&
                                e.clientY < 190
                                
                            ){

                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '7':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '7']");
                            
                            
                            
                            if(
                                e.clientX > 212
                                &&
                                e.clientX < 300
                                &&
                                e.clientY > 50
                                &&
                                e.clientY < 250
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '8':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '8']");
                            
                            
                            
                            if(
                                e.clientX > 86
                                &&
                                e.clientX < 270
                                &&
                                e.clientY > 250
                                &&
                                e.clientY < 500
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
                    case '9':
                        {
                            const elementDraging = document.querySelector(".container img[data-id = '9']");
                            
                            
                            
                            if(
                                e.clientX > 150
                                &&
                                e.clientX < 300
                                &&
                                e.clientY > 496
                                &&
                                e.clientY < 596
                            ){
                                
                                dragArea.appendChild(draging);
                                isGameWon();
                            }else{
                                piecesContainer.appendChild(draging)
                            }
                        }
                        break;
    
                }
            }
    });
    const field = document.getElementById("puzzle-field");
    
    dragArea.addEventListener('touchmove', e => {
                e.preventDefault();
                const draging = document.querySelector(".draging");
                // field.appendChild(draging);
                    if(document.body.clientWidth > 768 && document.body.clientWidth <= 1125 && document.body.clientHeight >= 1024){
                        switch (draging.getAttribute("data-id")){
                            case '0':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '0']");
                                    
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 23
                                        &&
                                        e.touches[0].clientX < 423
                                        &&
                                        e.touches[0].clientY > 446
                                        &&
                                        e.touches[0].clientY < 846
                                    ){
                                        // 
                                        field.appendChild(draging);
                                        
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
            
                                    
                                }
                                break;
                            case '1':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '1']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 219
                                        &&
                                        e.touches[0].clientX < 619
                                        &&
                                        e.touches[0].clientY > 446
                                        &&
                                        e.touches[0].clientY < 846
                                    ){
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '2':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '2']");
                                    
                                    
            
                                    if(
                                        e.touches[0].clientX > 76
                                        &&
                                        e.touches[0].clientX < 476
                                        &&
                                        e.touches[0].clientY > 247
                                        &&
                                        e.touches[0].clientY < 647
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '3':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '3']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 286
                                        &&
                                        e.touches[0].clientX < 686
                                        &&
                                        e.touches[0].clientY > 252
                                        &&
                                        e.touches[0].clientY < 652
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '4':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '4']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 26
                                        &&
                                        e.touches[0].clientX < 426
                                        &&
                                        e.touches[0].clientY > 0
                                        &&
                                        e.touches[0].clientY < 314
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '5':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '5']");
                                    
                                    
            
                                    if(
                                        e.touches[0].clientX > 214
                                        &&
                                        e.touches[0].clientX < 614
                                        &&
                                        e.touches[0].clientY > 0
                                        &&
                                        e.touches[0].clientY < 314
                                        
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '6':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '6']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 52
                                        &&
                                        e.touches[0].clientX < 452
                                        &&
                                        e.touches[0].clientY > 0
                                        &&
                                        e.touches[0].clientY < 200
                                        
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '7':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '7']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 24
                                        &&
                                        e.touches[0].clientX < 424
                                        &&
                                        e.touches[0].clientY > 0
                                        &&
                                        e.touches[0].clientY < 310
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '8':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '8']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 88
                                        &&
                                        e.touches[0].clientX < 488
                                        &&
                                        e.touches[0].clientY > 144
                                        &&
                                        e.touches[0].clientY < 544
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '9':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '9']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 104
                                        &&
                                        e.touches[0].clientX < 514
                                        &&
                                        e.touches[0].clientY > 605
                                        &&
                                        e.touches[0].clientY < 1005
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
            
                        }
                    }else if(document.body.clientWidth > 560 && document.body.clientWidth <= 768){
                        switch (draging.getAttribute("data-id")){
                            case '0':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '0']");
                                    
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 300
                                        &&
                                        e.touches[0].clientX < 450
                                        &&
                                        e.touches[0].clientY > 435
                                        &&
                                        e.touches[0].clientY < 535
                                    ){
                                        // 
                                        field.appendChild(draging);
                                        
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
            
                                    
                                }
                                break;
                            case '1':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '1']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 436
                                        &&
                                        e.touches[0].clientX < 536
                                        &&
                                        e.touches[0].clientY > 435
                                        &&
                                        e.touches[0].clientY < 535
                                    ){
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '2':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '2']");
                                    
                                    
            
                                    if(
                                        e.touches[0].clientX > 339
                                        &&
                                        e.touches[0].clientX < 439
                                        &&
                                        e.touches[0].clientY > 325
                                        &&
                                        e.touches[0].clientY < 425
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '3':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '3']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 444
                                        &&
                                        e.touches[0].clientX < 544
                                        &&
                                        e.touches[0].clientY > 325
                                        &&
                                        e.touches[0].clientY < 425
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '4':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '4']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 340
                                        &&
                                        e.touches[0].clientX < 450
                                        &&
                                        e.touches[0].clientY > 54
                                        &&
                                        e.touches[0].clientY < 254
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '5':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '5']");
                                    
                                    
            
                                    if(
                                        e.touches[0].clientX > 425
                                        &&
                                        e.touches[0].clientX < 525
                                        &&
                                        e.touches[0].clientY > 54
                                        &&
                                        e.touches[0].clientY < 254
                                        
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '6':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '6']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 340
                                        &&
                                        e.touches[0].clientX < 520
                                        &&
                                        e.touches[0].clientY > 50
                                        &&
                                        e.touches[0].clientY < 190
                                        
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '7':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '7']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 412
                                        &&
                                        e.touches[0].clientX < 512
                                        &&
                                        e.touches[0].clientY > 50
                                        &&
                                        e.touches[0].clientY < 250
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '8':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '8']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 360
                                        &&
                                        e.touches[0].clientX < 500
                                        &&
                                        e.touches[0].clientY > 270
                                        &&
                                        e.touches[0].clientY < 460
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '9':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '9']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 380
                                        &&
                                        e.touches[0].clientX < 450
                                        &&
                                        e.touches[0].clientY > 470
                                        &&
                                        e.touches[0].clientY < 596
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
            
                        }
                    }else if(document.body.clientWidth > 425 && document.body.clientWidth <= 561){
                        switch (draging.getAttribute("data-id")){
                            case '0':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '0']");
                                    
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 283
                                        &&
                                        e.touches[0].clientX < 383
                                        &&
                                        e.touches[0].clientY > 435
                                        &&
                                        e.touches[0].clientY < 535
                                    ){
                                        // 
                                        field.appendChild(draging);
                                        
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
            
                                    
                                }
                                break;
                            case '1':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '1']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 414
                                        &&
                                        e.touches[0].clientX < 514
                                        &&
                                        e.touches[0].clientY > 435
                                        &&
                                        e.touches[0].clientY < 535
                                    ){
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '2':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '2']");
                                    
                                    
            
                                    if(
                                        e.touches[0].clientX > 259
                                        &&
                                        e.touches[0].clientX < 360
                                        &&
                                        e.touches[0].clientY > 325
                                        &&
                                        e.touches[0].clientY < 425
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '3':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '3']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 400
                                        &&
                                        e.touches[0].clientX < 500
                                        &&
                                        e.touches[0].clientY > 325
                                        &&
                                        e.touches[0].clientY < 425
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '4':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '4']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 274
                                        &&
                                        e.touches[0].clientX < 374
                                        &&
                                        e.touches[0].clientY > 140
                                        &&
                                        e.touches[0].clientY < 240
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '5':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '5']");
                                    
                                    
            
                                    if(
                                        e.touches[0].clientX > 400
                                        &&
                                        e.touches[0].clientX < 500
                                        &&
                                        e.touches[0].clientY > 140
                                        &&
                                        e.touches[0].clientY < 240
                                        
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '6':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '6']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 270
                                        &&
                                        e.touches[0].clientX < 470
                                        &&
                                        e.touches[0].clientY > 50
                                        &&
                                        e.touches[0].clientY < 150
                                        
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '7':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '7']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 346
                                        &&
                                        e.touches[0].clientX < 380
                                        &&
                                        e.touches[0].clientY > 50
                                        &&
                                        e.touches[0].clientY < 250
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '8':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '8']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 290
                                        &&
                                        e.touches[0].clientX < 427
                                        &&
                                        e.touches[0].clientY > 275
                                        &&
                                        e.touches[0].clientY < 500
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '9':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '9']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 295
                                        &&
                                        e.touches[0].clientX < 429
                                        &&
                                        e.touches[0].clientY > 396
                                        &&
                                        e.touches[0].clientY < 596
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
            
                        }
                    }else if(document.body.clientWidth > 768 && document.body.clientWidth <= 1125 && document.body.clientHeight < 1024){
                        switch (draging.getAttribute("data-id")){
                            case '0':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '0']");
                                    
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 300
                                        &&
                                        e.touches[0].clientX < 450
                                        &&
                                        e.touches[0].clientY > 435
                                        &&
                                        e.touches[0].clientY < 535
                                    ){
                                        // 
                                        field.appendChild(draging);
                                        
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
            
                                    
                                }
                                break;
                            case '1':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '1']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 436
                                        &&
                                        e.touches[0].clientX < 590
                                        &&
                                        e.touches[0].clientY > 435
                                        &&
                                        e.touches[0].clientY < 535
                                    ){
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '2':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '2']");
                                    
                                    
            
                                    if(
                                        e.touches[0].clientX > 339
                                        &&
                                        e.touches[0].clientX < 439
                                        &&
                                        e.touches[0].clientY > 325
                                        &&
                                        e.touches[0].clientY < 425
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '3':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '3']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 444
                                        &&
                                        e.touches[0].clientX < 544
                                        &&
                                        e.touches[0].clientY > 325
                                        &&
                                        e.touches[0].clientY < 425
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '4':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '4']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 340
                                        &&
                                        e.touches[0].clientX < 450
                                        &&
                                        e.touches[0].clientY > 54
                                        &&
                                        e.touches[0].clientY < 254
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '5':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '5']");
                                    
                                    
            
                                    if(
                                        e.touches[0].clientX > 425
                                        &&
                                        e.touches[0].clientX < 525
                                        &&
                                        e.touches[0].clientY > 54
                                        &&
                                        e.touches[0].clientY < 254
                                        
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '6':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '6']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 340
                                        &&
                                        e.touches[0].clientX < 520
                                        &&
                                        e.touches[0].clientY > 50
                                        &&
                                        e.touches[0].clientY < 190
                                        
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '7':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '7']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 412
                                        &&
                                        e.touches[0].clientX < 512
                                        &&
                                        e.touches[0].clientY > 50
                                        &&
                                        e.touches[0].clientY < 250
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '8':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '8']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 360
                                        &&
                                        e.touches[0].clientX < 500
                                        &&
                                        e.touches[0].clientY > 270
                                        &&
                                        e.touches[0].clientY < 460
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '9':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '9']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 400
                                        &&
                                        e.touches[0].clientX < 550
                                        &&
                                        e.touches[0].clientY > 480
                                        &&
                                        e.touches[0].clientY < 600
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
            
                        }
                    }else if(document.body.clientWidth > 1125){
                        switch (draging.getAttribute("data-id")){
                            case '0':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '0']");
                                    
                                    console.log(e.touches[0].clientX)
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 500
                                        &&
                                        e.touches[0].clientX < 630
                                        &&
                                        e.touches[0].clientY > 237
                                        &&
                                        e.touches[0].clientY < 348
                                    ){ 
                                        field.appendChild(draging);
                                        
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                        
                                    
                                }
                                break;
                            case '1':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '1']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 500
                                        &&
                                        e.touches[0].clientX < 630
                                        &&
                                        e.touches[0].clientY > 435
                                        &&
                                        e.touches[0].clientY < 535
                                    ){
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '2':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '2']");
                                    
                                    
                        
                                    if(
                                        e.touches[0].clientX > 580
                                        &&
                                        e.touches[0].clientX < 930
                                        &&
                                        e.touches[0].clientY > 210
                                        &&
                                        e.touches[0].clientY < 344
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '3':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '3']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 580
                                        &&
                                        e.touches[0].clientX < 930
                                        &&
                                        e.touches[0].clientY > 450
                                        &&
                                        e.touches[0].clientY < 535
                                    ){
                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '4':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '4']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 1030
                                        &&
                                        e.touches[0].clientX < 1300
                                        &&
                                        e.touches[0].clientY > 243
                                        &&
                                        e.touches[0].clientY < 377
                                    ){
                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '5':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '5']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 1010
                                        &&
                                        e.touches[0].clientX < 1300
                                        &&
                                        e.touches[0].clientY > 416
                                        &&
                                        e.touches[0].clientY < 525
                                    ){
                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '6':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '6']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 1100
                                        &&
                                        e.touches[0].clientX < 1400
                                        &&
                                        e.touches[0].clientY > 235
                                        &&
                                        e.touches[0].clientY < 547
                                    ){
                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '7':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '7']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 1000
                                        &&
                                        e.touches[0].clientX < 1500
                                        &&
                                        e.touches[0].clientY > 364
                                        &&
                                        e.touches[0].clientY < 438
                                    ){
                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '8':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '8']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 590
                                        &&
                                        e.touches[0].clientX < 900
                                        &&
                                        e.touches[0].clientY > 263
                                        &&
                                        e.touches[0].clientY < 501
                                    ){
                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '9':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '9']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 407
                                        &&
                                        e.touches[0].clientX < 600
                                        &&
                                        e.touches[0].clientY > 288
                                        &&
                                        e.touches[0].clientY < 493
                                    ){
                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                        }
                    }else{
                        switch (draging.getAttribute("data-id")){
                            case '0':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '0']");
                                    
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 130
                                        &&
                                        e.touches[0].clientX < 230
                                        &&
                                        e.touches[0].clientY > 435
                                        &&
                                        e.touches[0].clientY < 535
                                    ){
                                        // 
                                        field.appendChild(draging);
                                        
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
            
                                    
                                }
                                break;
                            case '1':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '1']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 256
                                        &&
                                        e.touches[0].clientX < 356
                                        &&
                                        e.touches[0].clientY > 435
                                        &&
                                        e.touches[0].clientY < 535
                                    ){
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '2':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '2']");
                                    
                                    
            
                                    if(
                                        e.touches[0].clientX > 130
                                        &&
                                        e.touches[0].clientX < 230
                                        &&
                                        e.touches[0].clientY > 325
                                        &&
                                        e.touches[0].clientY < 425
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '3':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '3']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 269
                                        &&
                                        e.touches[0].clientX < 369
                                        &&
                                        e.touches[0].clientY > 325
                                        &&
                                        e.touches[0].clientY < 425
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '4':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '4']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 130
                                        &&
                                        e.touches[0].clientX < 230
                                        &&
                                        e.touches[0].clientY > 54
                                        &&
                                        e.touches[0].clientY < 254
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '5':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '5']");
                                    
                                    
            
                                    if(
                                        e.touches[0].clientX > 256
                                        &&
                                        e.touches[0].clientX < 365
                                        &&
                                        e.touches[0].clientY > 54
                                        &&
                                        e.touches[0].clientY < 254
                                        
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '6':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '6']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 150
                                        &&
                                        e.touches[0].clientX < 350
                                        &&
                                        e.touches[0].clientY > 0
                                        &&
                                        e.touches[0].clientY < 190
                                        
                                    ){
    
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '7':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '7']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 212
                                        &&
                                        e.touches[0].clientX < 300
                                        &&
                                        e.touches[0].clientY > 50
                                        &&
                                        e.touches[0].clientY < 250
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '8':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '8']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 86
                                        &&
                                        e.touches[0].clientX < 270
                                        &&
                                        e.touches[0].clientY > 250
                                        &&
                                        e.touches[0].clientY < 500
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
                            case '9':
                                {
                                    const elementDraging = document.querySelector(".container img[data-id = '9']");
                                    
                                    
                                    
                                    if(
                                        e.touches[0].clientX > 150
                                        &&
                                        e.touches[0].clientX < 300
                                        &&
                                        e.touches[0].clientY > 496
                                        &&
                                        e.touches[0].clientY < 596
                                    ){
                                        
                                        field.appendChild(draging);
                                        isGameWon();
                                    }else{
                                        piecesContainer.appendChild(draging)
                                    }
                                }
                                break;
            
                        }
                    }
            });


});

let x = 0;
function isGameWon() {
    let checkPiecesArray = [];
    let piecesInPlayField = document.querySelectorAll("#puzzle-field .piece")
    piecesInPlayField.forEach(piece => {
        if(piece.hasAttribute("data-id")){
            checkPiecesArray[piece.getAttribute("data-id")] = true;
        }
    });
    
    if(
        checkPiecesArray.length == 10
        &&
        checkPiecesArray[0]
        &&
        checkPiecesArray[1]
        &&
        checkPiecesArray[2]
        &&
        checkPiecesArray[3]
        &&
        checkPiecesArray[4]
        &&
        checkPiecesArray[5]
        &&
        checkPiecesArray[6]
        &&
        checkPiecesArray[7]
        &&
        checkPiecesArray[8]
        &&
        checkPiecesArray[9]
    ){
        if(x == 0){
            
            congratulation();
        }
        x++;
    }else{
        console.log("you still didn't won");
    }
}


let sec = 0;
let milliSec = 0;


function myTimer() {
    const timePassedElement = document.getElementById("spentTime");
    milliSec += 10;
    if (milliSec >= 1000 && sec != 60) {
        milliSec = 0;
        sec++;
    }
    if (sec >= 30){
        loseMassage();
    }
    if(sec > 26){
        hintBtn.removeEventListener("click", showHint);
    }
    timePassedElement.innerText = sec + "s:" + milliSec;
    
}


//Start the timer
let interval;
let timerStarter = document.querySelector(".startTimer");
function startTimer() {
    timerStarter.style.display = "none";
    puzzleField.scrollIntoView()
    // const piecesContainer = document.querySelectorAll("#pieces-container .piece");
    // puzzleField.appendChild(piecesContainer[0]);
    interval = setInterval(myTimer, 10);

}
timerStarter.addEventListener('click', startTimer, { once: true });

let msgContainer = document.getElementById("msg");
function congratulation() {
    clearInterval(interval);
    const congratulationMsgElement = document.createElement("div");
    congratulationMsgElement.classList.add("msg");
    let msg = "congratulation you won your time is ss:ms " + sec + ":" + milliSec;
    msgContainer.style.display = "block";
    msgContainer.appendChild(congratulationMsgElement);
    congratulationMsgElement.innerText = msg;
    congratulationMsgElement.style.top = (window.innerHeight - congratulationMsgElement.style.height) / 2;
    congratulationMsgElement.style.left = (window.innerHeight - congratulationMsgElement.style.width) / 2;
}
function loseMassage() {
    clearInterval(interval);
    const lostMsgElement = document.createElement("div");
    const playAgain = document.createElement("div");
    playAgain.classList.add("play-again");
    playAgain.innerText = "play again!";
    lostMsgElement.classList.add("msg");
    let msg = "you lost the timer exceeds 30s click here to replay the game";
    msgContainer.style.display = "block";
    msgContainer.appendChild(lostMsgElement);
    lostMsgElement.addEventListener("click", function(){
        location.reload();
    });
    lostMsgElement.innerText = msg;
    lostMsgElement.style.top = (window.innerHeight - lostMsgElement.style.height) / 2;
    lostMsgElement.style.left = (window.innerHeight - lostMsgElement.style.width) / 2;
}

const gameContainer = document.getElementById("puzzle-field");
const hintBtn = document.getElementById("hintBtn");
let hint
function showHint() {
    hintBtn.removeEventListener("click", showHint);
    const piecesContainer = document.querySelectorAll("#pieces-container .piece");
    hint = piecesContainer[0].cloneNode(true);
    hint.removeAttribute("data-id");
    hint.classList.add("hint")
    
    sec += 3;
    gameContainer.appendChild(hint);
    setTimeout(removeHint, 3000);
}

function removeHint() {
    gameContainer.removeChild(hint);
    hintBtn.addEventListener("click", showHint);
}
hintBtn.addEventListener("click", showHint);

const puzzleField = document.getElementById("puzzle-field");

puzzleField.addEventListener("click", function(e) {
    console.log("x: " + e.clientX + " y: " + e.clientY);
    console.log(e);
});

// document.addEventListener("click", () => {
//     pieces.forEach(piece => {
//         console.log(piece);
//     })
// })