//猜拳區


const userG1 = document.querySelector('#userCh1'); //猜拳-玩家
const aiG1 = document.querySelector('#aiCh1');//電腦出拳結果
const message1 =document.querySelector('.message');//猜拳結果
const game1Btn =document.querySelectorAll('.game1btn');//選擇出拳區


let game1Start = true;
let winner,computer;


//猜拳區
//電腦出拳區樣式



const game1set = [
    {
        option:`scissors`,
        html:`<i class='far fa-hand-scissors fa-5x' 
               style="color: #696969;"></i>`,
       
    },
    {
        option:`stone`,
        html:`<i class='far fa-hand-rock fa-5x' 
               style="color: #696969;"></i>`,
        
    },
    {
        option:`paper`,
        html:`<i class='far fa-hand-paper fa-5x' 
               style="color: #696969;"></i>`,
        
    },
];

//開始猜拳
userG1.addEventListener('click',function(e) {

    if(game1Start){
        const clicked =e.target.closest('.game1btn');
        if(!clicked) return;
        let player1 = clicked.dataset.option;
        

        aiRandom();
        race1(player1,computer);
        game1Start = false;
        game1Btn.forEach((btng1) => (btng1.style.cursor='no-drop'));
        document.getElementById("turnGame").style.visibility = "visible";
    }
});

const aiRandom = () => {
    let randomAi = Math.floor(Math.random()*game1set.length);
    
    computer = game1set[randomAi].option;
    aiG1.innerHTML = game1set[randomAi].html;
    aiG1.style.background = game1set[randomAi].bgcolor;
    return computer;
};

const race1 = (player1,computer) => {
    //console.log(player1,computer);
    document.getElementById("game1Mes").style.visibility ="visible";
   
    if (player1 === computer){
        message1.textContent = `平手!繼續猜拳!`;
       
        game1Restart();

    } else if (player1 === `stone` && computer ===`paper`){
        winner = computer;
        win();
    } else if (player1 === `stone` && computer ===`scissors`){
        winner = player1;
        win();
    } else if (player1 === `paper` && computer ===`stone`){
        winner = player1;
        win();
    } else if (player1 === `paper` && computer ===`scissors`){
        winner = computer;
        win();
    } else if (player1 === `scissors` && computer ===`stone`){
        winner = computer;
        win();
    } else if (player1 === `scissors` && computer ===`paper`){
        winner = player1;
        win();
    }

    
};

var atk; //決定攻擊權

const win = () => {
    //console.log(winner,computer);
    if (winner === computer){
        
        message1.textContent = `對方先攻`;
        
        atk = true;
       
    } else {
        console.log(winner);
        message1.textContent = `玩家先攻`;
        
        atk = false;
        
        
    }
    console.log(atk);
};

 const game1Restart = () => {
   
    
   // userG1.addEventListener('click',function(e) {
     if(game1Start){
            const clicked = e.target.closest('.game1btn');
            if(!clicked) return;
            let player1 = clicked.dataset.option;
            
    
            aiRandom();
            race1(player1,computer);
            game1Start = false;
            
            
           
     } 

    //});
}  







