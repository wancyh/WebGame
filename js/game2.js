//切換遊戲測試
const turnGame = document.getElementById('turnGame'); //遊戲1轉遊戲2
const turnGame2 = document.getElementById('turnGame2');//遊戲2轉遊戲1
let game2Start = true;
let winner2, computer2;
var atkChance = 0;
var aiScore = 0;
var userScore = 0;
var lifePt = 0;
const atkPt = document.getElementById('atkPt');
const lifeP = document.getElementById('lifeP');
const reStart = document.getElementById('reStart');
const winZ = document.getElementById('winZone');

turnGame.addEventListener('click', function () {
    document.getElementById("game1").style.visibility = "hidden";
    document.getElementById("game2").style.visibility = "visible";


    if (atk == true) {
        message1.textContent = "對手攻擊回";
    } else {
        message1.textContent = "玩家攻擊回";
    }

    game2Start = true;


    document.getElementById("turnGame").style.visibility = "hidden";


    console.log('目前次數:' + atkChance);
    
});


const userG2 = document.querySelector('#userCh2');
const aiG2 = document.querySelector('#aiCh2');
const game2Btn = document.querySelectorAll('.game2btn');

const game2set = [
    {
        option: `handUp`,
        html: `<i class='far fa-hand-point-up fa-5x' 
                style="color: #696969;" ></i>`,
        
    },
    {
        option: `handDown`,
        html: `<i class='far fa-hand-point-down fa-5x' 
                style="color: #696969;" >`,
        
    },
    {
        option: `handLeft`,
        html: `<i class='far fa-hand-point-left fa-5x' 
                style="color: #696969;"></i>`,
        
    },
    {
        option: `handRight`,
        html: `<i class='far fa-hand-point-right fa-5x' 
                style="color: #696969;" ></i>`,
        
    },
];

userG2.addEventListener('click', function (e) {

    if (game2Start) {
        const clicked2 = e.target.closest('.game2btn');
        if (!clicked2) return;
        let player2 = clicked2.dataset.option;


        aiRandom2();
        race2(player2, computer2);

        atkChance += 1;
        console.log('已攻擊次數:' + atkChance);
        atkPt.innerText = 0 + atkChance;
    }


});

const aiRandom2 = () => {
    let randomAi2 = Math.floor(Math.random() * game2set.length);

    computer2 = game2set[randomAi2].option;
    aiG2.innerHTML = game2set[randomAi2].html;
    aiG2.style.background = game2set[randomAi2].bgcolor;
    return computer2;
};


const race2 = (player2, computer2) => {
    console.log(player2, computer2);
    //document.getElementById("game1Mes").style.visibility ="visible";


    if (atk == true) {  // 電腦攻擊回

        message1.textContent = "對手攻擊回";

        if (atkChance < 3) { //對手判斷式
            document.getElementById("game1Mes").style.color = "darkslateblue";

            if (atkChance == 2) {
                if (player2 === computer2) {
                    message1.textContent = "對手得分!";
                    aiScore++;
                    lifePt ++ ;
                    console.log('電腦分:' + aiScore);
                    console.log('玩家分:' + userScore);
                    console.log('生命值'+lifePt);
                    lifeP.innerText = 3- lifePt;
                    game2Start = false;
                    aiSc.innerText = aiScore;
                    //setTimeout('alert("對手得分!")', 100);
                    

                    document.getElementById("turnGame2").style.visibility = "visible";

                } else {
                    message1.textContent = "對手攻擊失敗!";
                    userScore ++;
                    //setTimeout('alert("對手攻擊失敗!")', 100);
                    userSc.innerText=userScore;
                    game2Start = false;

                    document.getElementById("turnGame2").style.visibility = "visible";

                }
            } else {
                if (player2 === computer2) {
                    message1.textContent = "對手得分!";
                    aiScore++;
                    lifePt ++;
                    console.log('電腦分:' + aiScore);
                    console.log('玩家分:' + userScore);
                    console.log('生命值'+lifePt);
                    lifeP.innerText = 3- lifePt;
                    game2Start = false;
                    aiSc.innerText = aiScore;
                    //setTimeout('alert("對手得分!")', 100);


                    document.getElementById("turnGame2").style.visibility = "visible";

                } else {
                    message1.textContent = "PASS!";
                    document.getElementById("game1Mes").style.color = "green";

                }

            }

        } else {

            message1.textContent = "已無攻擊機會!";

            //setTimeout('alert("已無攻擊機會!")', 100);

            game2Start = false;

            document.getElementById("turnGame2").style.visibility = "visible";

        }


    } else { //  玩家攻擊回

        message1.textContent = "玩家攻擊回";

        if (atkChance < 3) { //玩家判斷式
            document.getElementById("game1Mes").style.color = "darkslateblue";
            if (atkChance == 2) {
                if (player2 === computer2) {
                    message1.textContent = "玩家得分!";
                    userScore++;
                    console.log('玩家分:' + userScore);
                    console.log('電腦分:' + aiScore);
                    game2Start = false;
                    userSc.innerText=userScore;
                   // setTimeout('alert("玩家得分!")', 100);


                    document.getElementById("turnGame2").style.visibility = "visible";

                } else {
                    message1.textContent = "玩家攻擊失敗!";
                    
                    lifePt ++;
                    console.log('生命值'+lifePt);
                    lifeP.innerText = 3- lifePt;
                    //setTimeout('alert("玩家攻擊失敗!")', 100);
                    aiScore++;
                    aiSc.innerText = aiScore;
                    game2Start = false;

                    document.getElementById("turnGame2").style.visibility = "visible";

                }
            } else {
                if (player2 === computer2) {
                    message1.textContent = "玩家得分!";
                    userScore ++;
                    console.log('玩家分:' + userScore);
                    console.log('電腦分:' + aiScore);

                    game2Start = false;
                    userSc.innerText = userScore;
                    //setTimeout('alert("玩家得分!")', 100);


                    document.getElementById("turnGame2").style.visibility = "visible";

                } else {
                    message1.textContent = "MISS!";
                    document.getElementById("game1Mes").style.color = "red";

                }

            }

        } else {

            message1.textContent = "已無攻擊機會!";

            //setTimeout('alert("已無攻擊機會!")', 100);

            game2Start = false;

            document.getElementById("turnGame2").style.visibility = "visible";

        }

    


    }

    while(lifePt == 3){  //生命值消耗完，遊戲結束
    
        gameEnd();
        document.getElementById("turnGame2").style.visibility = "hidden";
        document.getElementById("lifeP").style.color ="red";
        setTimeout("ending()",800);
    
        break;
    }



};

turnGame2.addEventListener('click', function () {  //切換回猜拳區

    document.getElementById("game1Mes").style.visibility = "hidden";
    document.getElementById("game1").style.visibility = "visible";
    document.getElementById("game2").style.visibility = "hidden";

    aiG1.innerHTML = ``;
    message1.innerHTML = ``;
    
    game1Start = true;

    atkChance = 0;
    atkPt.innerText = atkChance ;

    document.getElementById("turnGame2").style.visibility = "hidden";

    game1Btn.forEach((btng1) => (btng1.style.cursor = 'pointer'));


});


const gameEnd = () => {

    if(aiScore == userScore){
    
        winZ.innerText = '平手!';
        document.getElementById("winZone").style.color = "GreenYellow";
        document.getElementById("winZone").style.textShadow = "-1px -1px 1px #228B22,1px -1px 1px #228B22,-1px 1px 1px #228B22, 1px 1px 1px #228B22 ";
    }else if(aiScore>userScore) {
       
        winZ.innerText = '落敗!';
        document.getElementById("winZone").style.color = "#F45D5D";
        document.getElementById("winZone").style.textShadow = "-1px -1px 1px #e11515,1px -1px 1px #e11515,-1px 1px 1px #e11515, 1px 1px 1px #e11515 ";
    }else {
       
        winZ.innerText = '勝利!';
        document.getElementById("winZone").style.color = "LightSkyBlue";
        document.getElementById("winZone").style.textShadow = "-1px -1px 1px DarkSlateBlue,1px -1px 1px DarkSlateBlue,-1px 1px 1px DarkSlateBlue, 1px 1px 1px DarkSlateBlue ";
    }
    
};

reStart.addEventListener('click', function () {  //遊戲重新啟動

    window.location.reload();
});


function ending(){

    
    document.getElementById("gameEd").style.visibility = "visible";
    $("#gameEd").fadeIn(500);

}

    



