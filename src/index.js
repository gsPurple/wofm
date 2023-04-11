import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pages from './pagesObj.js';
import AdvPages from './pagesAdventure.js';
import ToolTips from './tooltipsText.js';

const NEXTPAGE = -1;
const HOWTO = -2;
const MAINMENU = -3;
const STARTGAME = -4;
const STMNROLL = -5;
const LCKROLL = -6;
const SKLROLL = -7;
const ADVENTURE = -8;
const HINTS = -9;

const INITSTAMN = 0;
const CRRNTSTAMN = 1;
const INITLCK = 2;
const CRRNTLCK = 3;
const INITSKILL = 4;
const CRRNTSKILL = 5;
const INITPROVI = 6;
const CRRNTPROVI = 7;
const JEWELS = 8;
const GOLD = 9;

const TUTORIAL = "tutorial";
const GAME = "game";
const STATS = "Stats";
const DEAD = "dead";

const TESTE = 255;
const TEST_GAMESAVE = [16,10,7,5,8,8,10,10,0,15,["Sword", "Shield", "Lantern", "Potion of Strength x2"]];

function statButtonToggle(props) {
    console.log("Stat toggle function -->> " + props.pageNumber);
    if (props.pageNumber === 6)
        props.displayRollButton(LCKROLL);
    if(props.pageNumber === 7)
        props.displayRollButton(SKLROLL);
    if(props.pageNumber === 8)
        props.onClick(ADVENTURE);
    else
        props.onClick(NEXTPAGE);
    props.toggleAllowNext();
    props.clearDice();
}

function handleChoiceButtons(props) {
    const buttons = [];
    const choiceText = props.page.choices;

    if(props.page.current === 193 && props.gameSave[GOLD] < 3) {
        buttons.push(
            <button key={0} id={"Go back"} onClick={() => props.onClick(192)}>
                Go back
            </button>
        )
        buttons.push(
            <button key={1} id={"Threaten him - 127"} onClick={() => props.onClick(props.page['choice1'])}>
                {choiceText[1]}
            </button>
        )
    }
    else if(props.page.current ===207 && props.gameSave[GOLD] < 5) {
        buttons.push(
            <button key={1} id={"Prepare to attack - 188"} onClick={() => props.onClick(props.page['choice1'])}>
                {choiceText[1]}
            </button>
        )
    }
    else if(props.page.current === 246 && !props.equipment.includes("Boat House Key")) {
        for( let i = 1; i < choiceText.length; i++) {
            let choice = 'choice'+i
            buttons.push(
                <button key={i} id={props.page[choice]} onClick={() => props.onClick(props.page[choice])}>
                    {choiceText[i]}
                </button>
            )
        }
    }
    else
        for( let i = 0; i < choiceText.length; i++) {
            let choice = 'choice'+i
            buttons.push(
                <button key={i} id={props.page[choice]} onClick={() => props.onClick(props.page[choice])}>
                    {choiceText[i]}
                </button>
            )
        }
    return buttons;
}

function SetButtons(props) {

    console.log("TESTE SECTION SETBUTTONS -----> "+ props.section);
    if(props.page.choices === 0 && props.page.previous != null) {
        if(props.page.previous === -1)
            if(props.section === STATS)
                return(
                    <div className="container">
                        <button
                            className="buttonnext"
                            onClick={() => statButtonToggle(props)}
                            >
                            Next
                        </button>
                    </div>
                );
            else
                return(
                    <div className="container">
                        <button
                            className="buttonnext"
                            onClick={() => props.onClick(NEXTPAGE)}
                            >
                            Next
                        </button>
                    </div>
                );
        else
            return (
                <div className="container">
                    <button
                        className="buttonback"
                        onClick={() => props.onClick(props.page.previous)}
                        >
                        Back
                    </button>
                    <button
                        className="buttonnext"
                        onClick={() => props.onClick(NEXTPAGE)}
                        >
                        Next
                    </button>
                </div>
            )
    }
    else {
        if(props.page.choices === 0) {
            return (
                <div className="container">
                    <button
                        className="buttonback"
                        onClick={() => props.onClick(MAINMENU)}
                        >
                        Back to Menu
                    </button>
                    <button
                        className="buttonnext"
                        onClick={() => props.onClick(NEXTPAGE)}
                        >
                        Next
                    </button>
                </div>
            )
        }else if(props.page.choices === "menu"){
            if(props.page.previous === -1)
                return (
                    <div className="container">
                        <button
                            className="buttonnext"
                            onClick={() => props.onClick(MAINMENU)}
                            >
                            Back to Menu
                        </button>
                    </div>
                )
            else
                return (
                    <div className="container">
                        <button
                            className="buttonback"
                            onClick={() => props.onClick(props.page.previous)}
                            >
                            Back
                        </button>
                        <button
                            className="buttonnext"
                            onClick={() => props.onClick(MAINMENU)}
                            >
                            Back to Menu
                        </button>
                    </div>
                )
        }
        else {

            return (

                <div className="container">

                    {(props.page.previous !== -1) &&
                        <button
                            className="buttonback"
                            onClick={() => props.onClick(props.page.previous)}
                            >
                            Back
                        </button>

                    }

                    <div id="choiceList">
                        {handleChoiceButtons(props)}
                    </div>

                </div>
            )
        }
    }
}

function testYourLuck(props) {

    let dieOne = Math.floor(Math.random() * 6) + 1;
    let dieTwo = Math.floor(Math.random() * 6) + 1;
    let result = dieOne + dieTwo;

    if(result <= props.gameSave[CRRNTLCK]) {
        console.log("LUCK TEST VALUE ---> Lucky");
        props.onClick(props.page.lucky);
    }
    else {
        console.log("LUCK TEST VALUE ---> Unlucky");
        props.onClick(props.page.unlucky);
    }
    if(parseInt(props.gameSave[CRRNTLCK]) > 0)
        props.updateLuck(parseInt(props.gameSave[CRRNTLCK]) - 1);

    console.log("Roll result: " + result + " current luck: "+ props.gameSave[CRRNTLCK]);
}

function EnemyList(props) {

    const enemies = props.enemies;

    const listItems = enemies.map((item) =>
                                  <li key={item.toString()}>
                                      {item.split("-")[0]+ " " +item.split("-")[1]+ " " +item.split("-")[2]}
                                  </li>
                                 );
                                  return (
                                  <ul className="ul">{listItems}</ul>
                                 );
}

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

class BattleContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lucky: 0,
            enemyNum: props.page.enemies.length,
            enemies: props.page.enemies,
            enemyName: this.props.page.enemies[0].split("-")[0],
            enemySTA: parseInt(this.props.page.enemies[0].split("-")[2]),
            currentSTA:parseInt(this.props.page.enemies[0].split("-")[2]),
            enemySKL: this.props.page.enemies[0].split("-")[1],
            enemyAtk: 0,
            enemyExtraAct: "",
            shield: 0,
            turnCounter: 1,
            canShieldClick: true,
            playerAtk: 0,
            playerCurrSTA: props.gameSave[CRRNTSTAMN],
            turn: "enemy",
            luckText: "",
            miss: false,
            textColor: 'red',
        };
    }

    deleteEnemy() {
        const enemies = Object.assign([], this.state.enemies);
        enemies.splice(0,1);
        if(enemies.length > 0)
            this.setState({
                enemies:enemies,
                enemyName: enemies[0].split("-")[0],
                enemySTA: enemies[0].split("-")[2],
                currentSTA: enemies[0].split("-")[2],
                enemySKL: enemies[0].split("-")[1]
            });
        else
            this.setState({
                enemies:enemies,
                turn: "victory"
            });
    }

    rollEnemyAtk() {
        const die1 = rollDie();
        const die2 = rollDie();
        const result = die1 + die2 + parseInt(this.state.enemySKL);

        console.log("ENEMY ATTACK ROLL ->> " + die1 + " " + die2 + " Skill: " + this.state.enemySKL);

        this.setState({
            enemyAtk: result,
            turn: "player"
        });
    }

    rollEnemyExtraAction() {
        const die1 = rollDie();
        let result = "";

        console.log("ROLL ENEMY EXTRA ACTION - " + die1);

        if(die1 > 2) {
            result = "Miss";
        }
        else {
            result = "Hit!";
        }

        this.setState({
            enemyExtraAct: result,
            turn: "extraPlayer"
        });
    }

    rollPlayerAtk() {
        const die1 = rollDie();
        const die2 = rollDie();
        var bonus = 0;
        if(this.props.page.bonus !== undefined)
            bonus = this.props.page.bonus;

        if(this.props.equipment.includes("Iron Helmet"))
            bonus = bonus + 1;

        const result = die1 + die2 + parseInt(this.props.gameSave[CRRNTSKILL]) + bonus;

        console.log("PLAYER ATTACK ROLL ->> " + die1 + " " + die2 + " Skill: " + this.props.gameSave[CRRNTSKILL] + " Bonus: " + bonus);

        if(result === parseInt(this.state.enemyAtk))
            this.setState({
                miss: true,
                playerAtk: result,
                turn: "fight"
            });
        else
            this.setState({
                playerAtk: result,
                turn: "fight"
            });
    }

    testLuck() {
        const die1 = rollDie();
        const die2 = rollDie();

        const result = die1 + die2;
        console.log("TURN WHEN TEST YOUR LUCK IS CLICKED: " + this.state.turn);

        if(parseInt(this.state.enemyAtk) < parseInt(this.state.playerAtk)){
            if(result <= this.props.gameSave[CRRNTLCK]) {
                this.setState({
                    textColor: 'green',
                    luckText: 'Lucky (+2 DMG)',
                    turn: "ready",
                    lucky: 1
                });
            }else {
                this.setState({
                    textColor: 'red',
                    luckText: "Unlucky (-1 DMG)",
                    turn: "ready",
                    lucky: -1
                })
            }
        }else if(parseInt(this.state.enemyAtk) > parseInt(this.state.playerAtk)){
            if(result <= this.props.gameSave[CRRNTLCK]) {
                this.setState({
                    textColor: 'green',
                    luckText: 'Lucky (Dodged -1 DMG)',
                    turn: "ready",
                    lucky: 1
                });
            }else {
                this.setState({
                    textColor: 'red',
                    luckText: "Unlucky (Oops +1 DMG)",
                    turn: "ready",
                    lucky: -1
                })
            }
        }
        
        if(this.state.turn === "escape") {
            console.log("testing luck during escape");
            if(result <= this.props.gameSave[CRRNTLCK]) {
                this.setState({
                    textColor: 'green',
                    luckText: 'Lucky (Dodged -1 DMG)',
                    turn: "readyE",
                    lucky: 1
                });
            }else {
                this.setState({
                    textColor: 'red',
                    luckText: "Unlucky",
                    turn: "readyE",
                    lucky: -1
                });
            }
        }
        
        if(this.state.turn === "extraPlayer") {
            if(result <= this.props.gameSave[CRRNTLCK]) {
                this.setState({
                    textColor: 'green',
                    luckText: 'Lucky (Dodged -1 DMG)',
                    turn: "ready",
                    lucky: 1
                });
            }else {
                this.setState({
                    textColor: 'red',
                    luckText: "Unlucky",
                    turn: "ready",
                    lucky: -1
                });
            }
        }

        if(parseInt(this.props.gameSave[CRRNTLCK]) > 0)
            this.props.updateLuck(parseInt(this.props.gameSave[CRRNTLCK]) - 1);

    }

    useShield() {
        const die1 = rollDie();

        if(die1 === 6)
            this.setState({
                shield: 1,
                canShieldClick: false
            });
        console.log("Roll Golden Crescent: " + die1)
    }

    escape() {
        //this.props.onClick(this.props.page.escape);
        this.setState({
            turn: "escape"
        });
    }

    flee() {
        let playerSTA = parseInt(this.state.playerCurrSTA);

        if(this.state.lucky > 0)
            playerSTA -= 1;
        else
            playerSTA -= 2;

        this.props.updateSta(playerSTA);

        this.setState({
            turn: "successEscape"
        });
    }



    battle() {

        let playerSTA = parseInt(this.state.playerCurrSTA);
        let enemySTA = parseInt(this.state.currentSTA);
        let shieldVal = this.state.shield;
        console.log("STATE IN BATTLE - " + this.state.turn);
        if((this.state.turn !== "extraPlayer" && this.state.turn !== "extraEnemy")) {
            if(parseInt(this.state.enemyAtk) > parseInt(this.state.playerAtk)){

                if(this.state.lucky > 0){
                    playerSTA -= 1;
    
                }else if(this.state.lucky < 0){
                    playerSTA -= 3;
    
                }else {
                    playerSTA -= 2;
    
                }
    
                this.props.updateSta(playerSTA);
    
            }else if(parseInt(this.state.enemyAtk) < parseInt(this.state.playerAtk)) {
    
                if(this.state.lucky > 0){
                    enemySTA -= 4;
    
                }else if(this.state.lucky < 0){
                    enemySTA -= 1;
    
                }else {
                    enemySTA -= 2;
    
                }
            }
        }

        if(this.state.enemyExtraAct === "Hit!"){
            console.log("lucky = " + this.state.lucky);
            if(this.state.lucky <= 0){
                playerSTA -= 1;
            }

            this.props.updateSta(playerSTA);
        }

        let extra = "";
        if(this.props.page.extraaction && this.state.enemyExtraAct === "") {
            extra = "extraEnemy";
        }
        else {
            extra = "enemy";
        }

        this.setState({
            playerCurrSTA: (playerSTA  + shieldVal),
            currentSTA: enemySTA,
            turn: extra,
            lucky: 0,
            enemyAtk: 0,
            playerAtk: 0,
            enemyExtraAct: "",
            miss: false,
            shield: 0,
            turnCounter: this.state.turnCounter + 1,
            canShieldClick: true
        });

        if(enemySTA <= 0)
            this.deleteEnemy();

        if(playerSTA <= 0)
            this.setState({
                turn: "lost" 
            });


    }

    renderBattleContent() {
        console.log("Number of enemies: " + this.state.enemyNum);
        let props = this.props;

        return (
            <div>
                <div className="textview">
                    <div className="title">
                        {props.page.title}
                    </div>
                    <div>
                        {props.page.pageContent.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br/></span>
                        })}
                    </div>

                    {(props.page.image !== null && props.page.image !== undefined) &&
                        <div id="swordImgContainer">
                            <img id='imageSword' src={ require('./images/' + props.page.image)} alt={props.page.image} />
                        </div>

                    }

                    <p></p>
                    <hr></hr>
                    Enemy: {this.state.enemyName}
                    <p></p>
                    Skill: {this.state.enemySKL}
                    {(this.state.turn !== "victory" && this.state.turn !== "lost") && <div className="marginLeft">
                        {(this.state.turn !== "extraEnemy" && this.state.turn !== "extraPlayer") && <div>
                            <span>Attack Strength:</span> {(this.state.enemyAtk > 0) && <span id="enemyAtk">{this.state.enemyAtk}</span>}
                            {this.state.turn === "enemy" && <button id="rollEnemyAtk" onClick={() => this.rollEnemyAtk()}>Roll</button>}
                        </div>}
                        <br></br>
                        {(this.state.turn === "extraEnemy" || this.state.turn === "extraPlayer") && <div>
                            <span>{props.page.action0}:</span> {(this.state.enemyExtraAct !== "") && <span id="extraAct">{this.state.enemyExtraAct}</span>}
                            {this.state.turn === "extraEnemy" && <button id="rollEnemyExtraAct" onClick={() => this.rollEnemyExtraAction()}>Roll</button>}
                        </div>}
                    </div>}
                    {this.state.turn === "victory" && <div className="marginLeft">
                        You win!
                    </div>}
                    <br></br>
                    Stamina: {this.state.currentSTA}/{this.state.enemySTA}
                    <hr></hr>
                    You
                    <p></p>
                    Skill: {this.props.gameSave[CRRNTSKILL]} {this.props.equipment.includes("Iron Helmet") && <span style={{color:'green'}}>(+1 from Iron Helmet)</span>}
                    {(this.state.turn !== "victory" && this.state.turn !== "lost") && (this.state.turn !== "extraPlayer") && (this.state.turn !== "extraEnemy") && <div className="marginLeft">
                        Attack Strength: {(this.state.playerAtk > 0) && <span id="playerAtk">{this.state.playerAtk}</span>}
                        {this.state.turn === "player" && <button id="rollPlayerAtk" onClick={() => this.rollPlayerAtk()}>Roll</button>}
                    </div>}
                    {this.state.turn === "lost" && <div className="marginLeft">
                        You are dead!
                    </div>}
                    <br></br>
                    Stamina: {this.state.playerCurrSTA}/{this.props.gameSave[INITSTAMN]}

                    {((this.state.turn === "fight") || (this.state.turn === "ready") || (this.state.turn === "extraPlayer")) &&
                        <div>
                            <div className="container">

                                {(this.state.turn !== "ready" && !(this.state.miss)) && (this.state.enemyExtraAct !== "Miss") && <button onClick={() => this.testLuck()}>
                                        Test your Luck
                                    </button>}
                                &nbsp;
                                {this.state.turn === "ready" && <span style={{color:this.state.textColor, fontSize: 14}}>{this.state.luckText}</span>}
                                {this.state.miss && <span style={{fontSize: 14}}>Attacks Missed</span>}
                                {(this.state.turn !== "ready" && !(this.state.miss)) && (this.state.enemyExtraAct !== "Miss") && <span>or</span>}
                                &nbsp;
                                <button onClick={() => this.battle()}>
                                    {(this.state.turn !== "extraPlayer") && <span>Battle</span>}
                                    {(this.state.turn === "extraPlayer") && (this.state.enemyExtraAct === "Miss") && <span>You dodged!</span>}
                                    {(this.state.turn === "extraPlayer") && (this.state.enemyExtraAct === "Hit!") && <span>Prepare for next round</span>}
                                </button>
                            </div>
                            {this.state.playerAtk < this.state.enemyAtk && this.props.equipment.includes("Golden Crescent") &&
                                <div className='container'>
                                    <br></br>
                                    {this.state.canShieldClick && 
                                        <button onClick={() => this.useShield()}>
                                            Use Golden Crescent
                                        </button>
                                    }

                                    {!this.state.canShieldClick && this.state.shield === 0 && 
                                        <span style={{fontSize: 14}}>You won't block with the shield</span>
                                    }
                                    {!this.state.canShieldClick && this.state.shield === 1 && 
                                        <span style={{color: 'green',fontSize: 14}}>Attack blocked (-1 DMG)</span>
                                    }
                                </div>
                            }
                        </div>
                    }

                    {(props.page.canEscape && this.state.turn !== "victory" && this.state.turn !== "escape" && this.state.turn !== "successEscape" && this.state.turn !== "lost") &&
                        <div className="container">
                            {this.state.turn !== "readyE" &&
                                <button className="escapeBttn tooltip" onClick={() => this.escape()}>
                                    Try to Escape
                                    {tooltipText("Escape")}
                                </button>
                            }
                        </div>
                    }

                    {(props.page.current === 199 || props.page.current === 217) && this.state.turnCounter > 3 && this.state.turn !== "victory" && this.state.turn !== "escape" && this.state.turn !== "successEscape" && this.state.turn !== "lost" &&
                        <div className="container">
                            {this.state.turn !== "readyE" &&
                                <button className="escapeBttn tooltip" onClick={() => this.escape()}>
                                    Try to Escape
                                    {tooltipText("Escape")}
                                </button>
                            }
                        </div>
                    }
                    
                    {(props.page.current === 225) && this.state.turnCounter > 3 && this.state.turn !== "victory" && this.state.turn !== "escape" && this.state.turn !== "successEscape" && this.state.turn !== "lost" &&
                        <div className="container">
                            {this.state.turn !== "readyE" && (this.state.currentSTA < this.state.enemySTA) &&
                                <button className="escapeBttn" onClick={() => props.onClick(props.page.escape)}>
                                    Hold until mysterious visitor - 350
                                </button>
                            }
                            
                            {this.state.turn !== "readyE" && (this.state.currentSTA === this.state.enemySTA) &&
                                <button className="escapeBttn" onClick={() => props.onClick(props.page.escape2)}>
                                    Hold until mysterious visitor - 350
                                </button>
                            }
                            
                        </div>
                    }
                    
                    

                    {(this.state.turn === "escape" || (this.state.turn === "readyE")) &&
                        <div className="container marginTop">
                            {this.state.turn !== "readyE" &&
                                <button onClick={() => this.testLuck()}>
                                    Test your Luck
                                </button>
                            }
                            &nbsp;
                            {this.state.turn === "readyE" && <span style={{color:this.state.textColor, fontSize: 14}}>{this.state.luckText}</span>}
                            {this.state.miss && <span style={{fontSize: 14}}>Attacks Missed</span>}
                            {(this.state.turn !== "readyE" && !(this.state.miss)) && <span>or</span>}
                            &nbsp;
                            <button onClick={() => this.flee()}>
                                Escape
                            </button>
                        </div>
                    }

                    {this.state.turn === "victory" &&
                        <div className="container">
                            <button onClick={() => props.onClick(props.page.win)}>
                                Continue
                            </button>
                        </div>
                    }

                    {this.state.turn === "successEscape" &&
                        <div className="container marginTop">
                            You have escaped successfully!<br/>
                            <button onClick={() => props.onClick(props.page.escape)}>
                                Continue
                            </button>
                        </div>
                    }

                    {this.state.turn === "lost" &&
                        <div className="container">
                            <button onClick={() => window.location.reload()}>
                                Back to Menu
                            </button>
                        </div>
                    }

                </div>

                <div className="merda">
                    <div className="enemiesbox">
                        <div className="equipmargin">
                            <div className="statmargin">ENEMIES :&nbsp;</div>
                            <EnemyList enemies={this.state.enemies} />
                            <span className="tip">Name Skill Stamina</span>                 
                        </div>
                    </div>
                    <div>
                        <div className="turnbox">
                            <div className="statmargin">ROUND :&nbsp;</div>{this.state.turnCounter}
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderBattleContent()}
            </div>
        );
    }
}

function bitch(props) {
    const backpack = props.equipment;

    const listItems = backpack.map((item) =>
                                   <li className="invItem" key={item.toString()} onClick={() => removeInv(item.toString(), props)}>
                                       {item}
                                   </li>
                                  );
                                   return (
                                   <ul className="ul">{listItems}</ul>
                                  );
}

function removeInv(item, props) {
    props.deleteEquip(item, props.page.choice1);
}

class TextContent extends React.Component {

    constructor(props) {
        super(props);

        var maxBet = 20;

        if(props.gameSave !== undefined)
        {
            if(props.gameSave[GOLD] !== undefined && props.gameSave[GOLD] < maxBet)
                maxBet = props.gameSave[GOLD]

            this.state = {
                betValue: 1,
                betMax: maxBet,
                rolled: false,
                playerRoll: 0,
                oldManRoll: 0,
                initGold: props.gameSave[GOLD]
            };
        }

        

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            betValue: event.target.value,
            rolled: false
        });
    }

    rollBets() {
        var currGold = parseInt(this.props.gameSave[GOLD]);
        var bet = parseInt(this.state.betValue);

        if(currGold >= bet && currGold > 0){
            const die1 = rollDie();
            const die2 = rollDie();

            const die3 = rollDie();
            const die4 = rollDie();

            var player = parseInt(die1 + die2);
            var oldMan = parseInt(die3 + die4);

            var newGold = currGold;
            var maxBet = this.state.betMax;

            if(player > oldMan) {
                newGold = parseInt(currGold + bet);
                this.props.updateGold(newGold);
            }
            else if(player < oldMan) {
                newGold = parseInt(currGold - bet);
                this.props.updateGold(newGold);
            }

            if(newGold < maxBet) {
                maxBet = newGold;
            }
            else if(newGold >= maxBet && newGold <= 20)
                maxBet = newGold;
            else
                maxBet = 20;

            this.setState({
                rolled: true,
                playerRoll: player,
                oldManRoll: oldMan,
                betMax: maxBet
            });
        }
    }

    wonOrLost() {
        var result = 169;
        let initGold = this.state.initGold;
        let currentGold = this.props.gameSave[GOLD];

        if(initGold < currentGold)
            result = 170;

        this.props.onClick(result);
    }

    renderTextContent() {

        let props = this.props;

        if(props.section !== "")
            if(props.section === STATS)
                return (
                    <div>
                        <div className="textview">
                            <div className="title">
                                {props.page.title}
                            </div>
                            <div>
                                {props.page.pageContent.split('\n').map((item, key) => {
                                    return <span key={key}>{item}<br/></span>
                                })}
                            </div>
                            <p></p>
                            <div>
                                {props.dieOne !== 0 && <div>DIE 1: <span className="red">{props.dieOne}</span></div>}
                                {props.dieTwo !== 0 && <div>DIE 2: <span className="green">{props.dieTwo}</span></div>}
                                <p></p>
                                {props.dieOne !== 0 && <div>TOTAL: <span className="red">{props.dieOne}</span> + <span className="green">{props.dieTwo !== 0 && props.dieTwo}</span> {props.dieTwo !== 0 && "+ "} <span className="blue">{props.page.pageContent.match(/\d+/g)}</span> = {props.dieOne + props.dieTwo + parseInt(props.page.pageContent.match(/\d+/g))}</div>}
                            </div>
                            {props.allowNext && SetButtons(props)}
                        </div>
                    </div>
                );
            else if(props.section === "Take Shield")
                return(
                    <div>
                        <div className="textview">
                            <div className="title">
                                Choose Item To Delete
                            </div>

                            <div>
                                {bitch(props)}
                            </div>

                            <div className="container">
                                <button onClick={() => props.onClick(props.page.choice1)}>
                                    Leave the Shield - 300
                                </button>
                            </div>

                        </div>
                    </div>
                );
            else if(props.section === "Take the wood")
                return(
                    <div>
                        <div className="textview">
                            <div className="title">
                                Choose Item To Delete
                            </div>

                            <div>
                                {bitch(props)}
                            </div>

                            <div className="container">
                                <button onClick={() => props.onClick(props.page.choice0)}>
                                    Leave through door - 73
                                </button>
                                <button onClick={() => props.onClick(props.page.choice1)}>
                                    Examine rope - 125
                                </button>
                            </div>

                        </div>
                    </div>
                );
            else if(props.section === "Throw Equips")
                return(
                    <div>
                        <div className="textview">
                            <div className="title">
                                Choose Item To Delete
                            </div>

                            <div>
                                {bitch(props)}
                            </div>

                            <div className="container">
                                {props.gameSave[GOLD] > 0 && <button onClick={() => props.onClick(props.page.choice2)}>
                                        Throw a Gold Piece
                                    </button>}
                            </div>

                        </div>
                    </div>
                );
            else
                return (
                    <div>
                        <div className="textview">
                            <div className="title">
                                {props.page.title}
                            </div>
                            <div>
                                {props.page.pageContent.split('\n').map((item, key) => {
                                    return <span key={key}>{item}<br/></span>
                                })}
                            </div>

                            {(props.page.image !== null && props.page.image !== undefined) &&
                                <div id="imageContainer">
                                    <img id='image' src={ require('./images/' + props.page.image)} alt={props.page.image} />
                                </div>

                            }

                            {
                                (props.page.current === 153) &&
                                    <div className="container">
                                        <p></p>
                                        <div className="slidecontainer">
                                            <input type="range" min="1" max={this.state.betMax} defaultValue={this.state.betValue} className="slider" id="myRange" onChange={this.handleChange}></input>
                                            <p>Bet Ammount: <span id="showRange">{this.state.betValue}</span></p>
                                        </div>
                                        <button onClick={() => this.rollBets()}>
                                            Place bet
                                        </button>
                                        <p></p>
                                        <button onClick={() => this.wonOrLost()}>
                                            Leave table
                                        </button>
                                    </div>


                            }

                            {(props.page.current === 153) && (this.state.rolled) &&
                                <div>
                                    <p>Your roll: {this.state.playerRoll}</p> Old Man Roll: {this.state.oldManRoll}
                                </div>
                            }

                            {SetButtons(props)}

                            {(props.page.canTestLuck) &&
                                <div className="container">
                                    <button onClick={() => testYourLuck(props)}>
                                        Test your Luck
                                    </button>
                                </div>
                            }

                            {(props.page.hasInvisibility) && (props.equipment.includes("Potion of Invisibility")) &&
                                <div className="container">
                                    <button onClick={() => removeInv("Potion of Invisibility", props)}>
                                        Use Potion of Invisibility - 51
                                    </button>
                                </div>
                            }

                            {
                                (props.page.current === 157) && (props.equipment.includes("Cheese")) &&
                                    <div className="container">
                                        <button onClick={() => props.onClick(props.page.choice1)}>
                                            Throw Cheese - 32
                                        </button>
                                    </div>
                            }

                            {
                                (props.page.current === 107) && (props.equipment.includes("Blue Candle")) &&
                                    <div className="container">
                                        <button onClick={() => props.onClick(props.page.choice0)}>
                                            Yes - 239
                                        </button>
                                    </div>
                            }

                            {
                                (props.page.current === 107) && !(props.equipment.includes("Blue Candle")) &&
                                    <div className="container">
                                        <button onClick={() => props.onClick(props.page.choice1)}>
                                            No - 40
                                        </button>
                                    </div>
                            }




                        </div>
                    </div>
                );
    }

    render() {

        return (
            <div>
                {this.renderTextContent()}
            </div>
        );
    }

}

function updateInv(item, props) {

    switch(item) {
        case "Potion of Strength x2": 
            if(props.gameSave[CRRNTSTAMN] < props.gameSave[INITSTAMN]) {
                props.updateSta(props.gameSave[INITSTAMN]);
                props.deleteEquip(item, -1);
            }
            break;

        case "Potion of Strength x1":
            if(props.gameSave[CRRNTSTAMN] < props.gameSave[INITSTAMN]) {
                props.updateSta(props.gameSave[INITSTAMN]);
                props.deleteEquip(item, -1);
            }
            break;

        case "Potion of Fortune x2":
            props.potionLuck((parseInt(props.gameSave[INITLCK]) + 1));
            props.deleteEquip(item, -1);
            break;

        case "Potion of Fortune x1":
            props.potionLuck((parseInt(props.gameSave[INITLCK]) + 1));
            props.deleteEquip(item, -1);
            break;

        case "Potion of Skill x2":
            if(props.gameSave[CRRNTSKILL] < props.gameSave[INITSKILL]) {
                //props.updateSta(props.gameSave[INITSTAMN]);
                props.deleteEquip(item, -1);
            }
            break;

        case "Potion of Skill x1":
            if(props.gameSave[CRRNTSKILL] < props.gameSave[INITSKILL]) {
                //props.updateSta(props.gameSave[INITSTAMN]);
                props.deleteEquip(item, -1);
            }
            break;

        default:
    }
}

function tooltipText(item) {

    var result;

    switch(item) {
        case "Lantern":
            result = ToolTips.Lantern;
            break;

        case "Potion of Strength x2":
            result = ToolTips.PotionofStrength;
            break;

        case "Potion of Strength x1":
            result = ToolTips.PotionofStrength;
            break;

        case "Escape":
            result = ToolTips.Escape;
            break;

        case "Sword":
            result = ToolTips.Sword;
            break;

        case "Shield":
            result = ToolTips.Shield;
            break;

        case "Key 99":
            result = ToolTips.Key99;
            break;

        case "Provisions":
            result = ToolTips.Provisions;
            break;

        case "Silky Black Glove":
            result = ToolTips.SilkyBlackGlove;
            break;

        case "Golden Crescent":
            result = ToolTips.GoldenCrescent;
            break;

        case "Bow & Arrow":
            result = ToolTips.BowArrow;
            break;

        case "Cheese":
            result = ToolTips.Cheese;
            break;

        case "Iron Helmet":
            result = ToolTips.IronHelmet;
            break;

        case "Light Sword":
            result = ToolTips.LightSword;
            break;
        
        case "Boat House Key":
            result = ToolTips.BoatHouseKey;
            break;

        case "Potion of Invisibility":
            result = ToolTips.PotionofInvisibility;
            break;
        default:
    }

    return result;

}

function InventoryList(props) {

    const backpack = props.equipment;

    const listItems = backpack.map((item) =>
                                   <li className="invItem tooltip" key={item.toString()} onClick={() => updateInv(item.toString(), props)}>
                                       {item}
                                       {tooltipText(item)}
                                   </li>
                                  );
                                   return (
                                   <ul className="ul">{listItems}</ul>
                                  );
}

class StatsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allowProvision: true,
        };
    }

    randomizeStat(stat) {
        let result;
        let dieOne = Math.floor(Math.random() * 6) + 1;
        let dieTwo = 0;

        if(stat === STMNROLL) {
            dieTwo = Math.floor(Math.random() * 6) + 1;
            result = dieOne + dieTwo + 12;
        }
        else if(stat === LCKROLL)
            result = dieOne + 6;
        else
            result = dieOne + 6;

        this.props.viewNumbRolled("one", dieOne);
        this.props.viewNumbRolled("two", dieTwo);
        this.props.setStat(stat, result);
    }

    displayButton(button) {
        if (button === STMNROLL) {
            this.randomizeStat(STMNROLL);
            this.props.displayRollButton(STMNROLL);
        } else if(button === LCKROLL) {
            this.randomizeStat(LCKROLL);
            this.props.displayRollButton(LCKROLL);
        } else {
            this.randomizeStat(SKLROLL);
            this.props.displayRollButton(SKLROLL);
        }
        this.props.toggleAllowNext();
    }

    useProvision() {
        this.props.useProvisions();
    }

    renderStatsView(i) {
        return (
            <div>
                <div>
                    <div className="statbox">
                        <div className="statmargin">STAMINA :&nbsp;</div>{this.props.gameSave[CRRNTSTAMN]}/{this.props.gameSave[INITSTAMN]}
                    </div>
                    {this.props.rollSTA && <button onClick={() => this.displayButton(STMNROLL)}>
                            Roll
                        </button>}
                </div>
                <div>
                    <div className="statbox">
                        <div className="statmargin">LUCK :&nbsp;</div>{this.props.gameSave[CRRNTLCK]}/{this.props.gameSave[INITLCK]}
                    </div>
                    {this.props.rollLCK && <button onClick={() => this.displayButton(LCKROLL)}>
                            Roll
                        </button>}
                </div>
                <div>
                    <div className="statbox">
                        <div className="statmargin">SKILL :&nbsp;</div>{this.props.gameSave[CRRNTSKILL]}/{this.props.gameSave[INITSKILL]}
                    </div>
                    {this.props.rollSKL && <button onClick={() => this.displayButton(SKLROLL)}>
                            Roll
                        </button>}
                </div>
                <div>
                    <div className="equipmentbox">
                        <div className="equipmargin">
                            <div className="statmargin">EQUIPMENT :&nbsp;</div>
                            <InventoryList 
                                equipment={this.props.equipment}
                                updateSta = {this.props.updateSta}
                                updateSKL = {this.props.updateSKL}
                                potionLuck = {this.props.potionLuck}
                                deleteEquip = {this.props.deleteEquip}
                                gameSave = {this.props.gameSave}
                                />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="statbox">
                        <span className="tooltip"><div className="statmargin">PROVISIONS :&nbsp;</div>{this.props.gameSave[CRRNTPROVI]}/{this.props.gameSave[INITPROVI]}
                            {tooltipText("Provisions")}</span>
                    </div>
                    {this.props.page.canTakeProvisions && this.props.canUseProvi && this.state.allowProvision && <button onClick={() => this.useProvision()}>Use</button>}
                </div>
                <div>
                    <div className="statbox">
                        <div className="statmargin">JEWELS :&nbsp;</div>{this.props.gameSave[JEWELS]}
                    </div>
                </div>
                <div>
                    <div className="statbox">
                        <div className="statmargin">GOLD :&nbsp;</div>{this.props.gameSave[GOLD]}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderStatsView(this.props.pageNumber)}
            </div>
        );
    }
}

class GameView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dieOne: 0,
            dieTwo: 0,
            rollSTA: true,
            rollLCK: false,
            rollSKL: false,
            allowNext: false,
        };
    }

    toggleAllowNext() {
        this.setState({
            allowNext: !this.state.allowNext
        });
    }

    clearDice() {
        this.setState({
            dieOne: 0,
            dieTwo: 0
        });
    }

    displayRollButton(button) {
        if (button === STMNROLL) {
            this.setState({
                rollSTA: false,
            });
        } else if(button === LCKROLL) {
            this.setState({
                rollLCK: !this.state.rollLCK,
            });
        } else {
            this.setState({
                rollSKL: !this.state.rollSKL,
            });
        }
    }


    viewNumbRolled(die, value) {
        console.log("DADO: "+ die + " VALUE: "+ value);
        if (die === "one")
            this.setState({
                dieOne: value,
            });
        else
            this.setState({
                dieTwo: value,
            });
    }

    renderGameView() {
        console.log("RENDER DENTRO DO GAMEVIEW "+ this.props.section);

        switch (this.props.section) {
            case TUTORIAL:
                return (
                    <TextContent
                        section = {this.props.section}
                        page = {this.props.pageArray[this.props.pageNumber]}
                        onClick = {this.props.onClick}
                        />
                );

                break;

            case GAME:
                if(this.props.pageArray[this.props.pageNumber].battle) {
                    console.log("Battle content");
                    return(
                        <div>
                            <BattleContent
                                section = {this.props.section}
                                page = {this.props.pageArray[this.props.pageNumber]}
                                gameSave = {this.props.gameSave}
                                onClick = {this.props.onClick}
                                updateLuck = {this.props.updateLuck}
                                updateSta = {this.props.updateSta}
                                equipment = {this.props.equipment}
                                />
                            <StatsView
                                gameSave = {this.props.gameSave}
                                page = {this.props.pageArray[this.props.pageNumber]}
                                equipment = {this.props.equipment}
                                onClick = {this.props.onClick}
                                updateSta = {this.props.updateSta}
                                updateSKL = {this.props.updateSKL}
                                potionLuck = {this.props.potionLuck}
                                deleteEquip = {this.props.deleteEquip}
                                />
                        </div>
                    );
                }
                else
                    return(
                        <div>
                            <TextContent
                                section = {this.props.section}
                                page = {this.props.pageArray[this.props.pageNumber]}
                                gameSave = {this.props.gameSave}
                                onClick = {this.props.onClick}
                                equipment = {this.props.equipment}
                                updateLuck = {this.props.updateLuck}
                                updateGold = {this.props.updateGold}
                                deleteEquip = {this.props.deleteEquip}
                                />
                            <StatsView
                                gameSave = {this.props.gameSave}
                                equipment = {this.props.equipment}
                                page = {this.props.pageArray[this.props.pageNumber]}
                                onClick = {this.props.onClick}
                                updateSta = {this.props.updateSta}
                                updateSKL = {this.props.updateSKL}
                                potionLuck = {this.props.potionLuck}
                                deleteEquip = {this.props.deleteEquip}
                                useProvisions = {this.props.useProvisions}
                                canUseProvi = {this.props.canUseProvi}
                                />
                        </div>
                    );

                break;

            case STATS:

                return(

                    <div>
                        <TextContent
                            section = {this.props.section}
                            page = {this.props.pageArray[this.props.pageNumber]}
                            displayRollButton = {button => this.displayRollButton(button)}
                            onClick = {this.props.onClick}
                            dieOne = {this.state.dieOne}
                            dieTwo = {this.state.dieTwo}
                            rollSTA = {this.state.rollSTA}
                            rollLCK = {this.state.rollLCK}
                            rollSKL = {this.state.rollSKL}
                            gameSave = {this.props.gameSave}
                            pageNumber = {this.props.pageNumber}
                            allowNext = {this.state.allowNext}
                            toggleAllowNext = {() => this.toggleAllowNext()}
                            clearDice = {() => this.clearDice()}
                            />
                        <StatsView
                            gameSave = {this.props.gameSave}
                            onClick = {this.props.onClick}
                            page = {this.props.pageArray[this.props.pageNumber]}
                            viewNumbRolled = {(die, value) => this.viewNumbRolled(die,value)}
                            displayRollButton = {button => this.displayRollButton(button)}
                            setStat = {this.props.setStat}
                            rollSTA = {this.state.rollSTA}
                            rollLCK = {this.state.rollLCK}
                            rollSKL = {this.state.rollSKL}
                            equipment = {this.props.equipment}
                            toggleAllowNext = {() => this.toggleAllowNext()}
                            />
                    </div>
                );

                break;

            case DEAD:
                return(
                    <div>MORTO PA CARALHO</div>
                );
                break;

            case "Take Shield":
                return(
                    <div>
                        <TextContent
                            section = {this.props.section}
                            page = {this.props.pageArray[this.props.pageNumber]}
                            gameSave = {this.props.gameSave}
                            onClick = {this.props.onClick}
                            updateLuck = {this.props.updateLuck}
                            equipment = {this.props.equipment}
                            deleteEquip = {this.props.deleteEquip}
                            />
                        <StatsView
                            gameSave = {this.props.gameSave}
                            equipment = {this.props.equipment}
                            page = {this.props.pageArray[this.props.pageNumber]}
                            onClick = {this.props.onClick}
                            updateSta = {this.props.updateSta}
                            updateSKL = {this.props.updateSKL}
                            potionLuck = {this.props.potionLuck}
                            deleteEquip = {this.props.deleteEquip}
                            useProvisions = {this.props.useProvisions}
                            canUseProvi = {this.props.canUseProvi}
                            />
                    </div>
                );
                break;

            case "Take the wood":
                return(
                    <div>
                        <TextContent
                            section = {this.props.section}
                            page = {this.props.pageArray[this.props.pageNumber]}
                            gameSave = {this.props.gameSave}
                            onClick = {this.props.onClick}
                            updateLuck = {this.props.updateLuck}
                            equipment = {this.props.equipment}
                            deleteEquip = {this.props.deleteEquip}
                            />
                        <StatsView
                            gameSave = {this.props.gameSave}
                            equipment = {this.props.equipment}
                            page = {this.props.pageArray[this.props.pageNumber]}
                            onClick = {this.props.onClick}
                            updateSta = {this.props.updateSta}
                            updateSKL = {this.props.updateSKL}
                            potionLuck = {this.props.potionLuck}
                            deleteEquip = {this.props.deleteEquip}
                            useProvisions = {this.props.useProvisions}
                            canUseProvi = {this.props.canUseProvi}
                            />
                    </div>
                );
                break;

            case "Throw Equips":
                return(
                    <div>
                        <TextContent
                            section = {this.props.section}
                            page = {this.props.pageArray[this.props.pageNumber]}
                            gameSave = {this.props.gameSave}
                            onClick = {this.props.onClick}
                            updateLuck = {this.props.updateLuck}
                            equipment = {this.props.equipment}
                            deleteEquip = {this.props.deleteEquip}
                            />
                        <StatsView
                            gameSave = {this.props.gameSave}
                            equipment = {this.props.equipment}
                            page = {this.props.pageArray[this.props.pageNumber]}
                            onClick = {this.props.onClick}
                            updateSta = {this.props.updateSta}
                            updateSKL = {this.props.updateSKL}
                            potionLuck = {this.props.potionLuck}
                            deleteEquip = {this.props.deleteEquip}
                            useProvisions = {this.props.useProvisions}
                            canUseProvi = {this.props.canUseProvi}
                            />
                    </div>
                );
                break;
            default:
                return (
                    <div className="textview" >
                        <div className="title" style={{marginBottom: 30}}>
                            THE WARLOCK OF FIRETOP MOUNTAIN
                        </div>
                        <div className="container">
                            <button className="menubuttons"
                                onClick={() => this.props.onClick(HOWTO)}
                                >
                                HOW TO PLAY
                            </button>
                            <button className="menubuttons"
                                onClick={() => this.props.onClick(HINTS)}
                                >
                                HINTS ON PLAY
                            </button>
                            <button className="menubuttons"
                                onClick={() => this.props.onClick(STARTGAME)}
                                >
                                START YOUR ADVENTURE
                            </button>
                            <button className="menubuttons"
                                onClick={() => this.props.onClick("teste")}
                                >
                                TEST PAGE
                            </button>
                        </div>
                    </div>
                );
        }
    }

    render() {
        return (
            <div>
                {this.renderGameView()}
            </div>
        );
    }
}

function testSkill(gameSave) {
    const die1 = rollDie();
    const die2 = rollDie();

    const result = die1 + die2;

    console.log("Test Skill: " + die1 + " " + die2 + " = "+ result);

    if(result <= gameSave[CRRNTSKILL])
        return true;
    else
        return false;

}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageArray: [],
            pageNumber: 0,
            section: "",
            equipment: ["Sword","Shield","Lantern"],
            gameSave: [0,0,0,0,0,0,10,10,0,0,[]],
            canUseProvi: true
        };

        this.deleteEquip = this.deleteEquip.bind(this);
    }


    setStat(stat, value) {
        let x = this.state.gameSave.slice();
        if(stat === STMNROLL)
            this.setState({
                gameSave: [value,value,x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],x[10]],
            });
        else if(stat === LCKROLL)
            this.setState({
                gameSave: [x[INITSTAMN],x[CRRNTSTAMN],value,value,x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],x[10]]
            });
        else
            this.setState({
                gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],value,value,x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],x[10]]
            });
    }

    deleteEquip(key, page) {

        if(page === -1){

            if(key === "Potion of Strength x2")
                this.setState(prevState => ({
                    equipment: prevState.equipment.filter(el => el !== key).concat(["Potion of Strength x1"])
                }));
            else if(key === "Potion of Fortune x2")
                this.setState(prevState => ({
                    equipment: prevState.equipment.filter(el => el !== key).concat(["Potion of Fortune x1"])
                }));
            else if(key === "Potion of Skill x2")
                this.setState(prevState => ({
                    equipment: prevState.equipment.filter(el => el !== key).concat(["Potion of Skill x1"])
                }));
            else
                this.setState(prevState => ({
                    equipment: prevState.equipment.filter(el => el !== key)
                }));
        }
        else if(page === 120){
            this.setState(prevState => ({
                equipment: prevState.equipment.filter(el => el !== key),
                pageNumber: page,
                section: GAME
            }));
        }
        else if(page === 163){
            this.setState(prevState => ({
                equipment: prevState.equipment.filter(el => el !== key).concat(["Y-Shaped Wood"]),
                section: GAME
            }));
        }
        else {
            if(key === "Potion of Strength x2")
                this.setState(prevState => ({
                    equipment: prevState.equipment.filter(el => el !== key).concat(["Potion of Strength x1","Golden Crescent"]),
                    pageNumber: page,
                    section: GAME
                }));
            else if(key === "Potion of Fortune x2")
                this.setState(prevState => ({
                    equipment: prevState.equipment.filter(el => el !== key).concat(["Potion of Fortune x1","Golden Crescent"]),
                    pageNumber: page,
                    section: GAME
                }));
            else if(key === "Potion of Skill x2")
                this.setState(prevState => ({
                    equipment: prevState.equipment.filter(el => el !== key).concat(["Potion of Skill x1","Golden Crescent"]),
                    pageNumber: page,
                    section: GAME
                }));
            else if(key === "Light Sword") {
                let please = this.state.equipment.filter(el => el !== key);
                console.log("FILTER? -> "+ please);
                this.setState(prevState => ({
                    equipment: please
                }));
                console.log("ENTREI NO DELETE CERTO "+this.state.equipment);
            }
            else
                this.setState(prevState => ({
                    equipment: prevState.equipment.filter(el => el !== key).concat(["Golden Crescent"]),
                    pageNumber: page,
                    section: GAME
                }));
        }

    }

    updateLUCK(luck) {
        let x = this.state.gameSave.slice();
        var l = luck;
        var sta = parseInt(x[CRRNTSTAMN]);

        if(this.state.pageNumber === 177)
            sta -= 1;

        if(l > parseInt(this.state.gameSave[INITLCK]))
            l = parseInt(this.state.gameSave[INITLCK]);
        this.setState({
            gameSave: [x[INITSTAMN],sta,x[INITLCK],l,x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],x[10]]
        });
    }

    potionLuck(luck) {
        let x = this.state.gameSave.slice();
        this.setState({
            gameSave: [x[INITSTAMN],x[CRRNTSTAMN],luck,luck,x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],x[10]]
        });
    }

    updateSTA(sta) {
        let x = this.state.gameSave.slice();
        this.setState({
            gameSave: [x[INITSTAMN],sta,x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],x[10]]
        });
    }

    updateSKL(skill) {
        let x = this.state.gameSave.slice();
        this.setState({
            gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],skill,x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],x[10]]
        });
    }

    updateGold(gold) {
        let x = this.state.gameSave.slice();
        this.setState({
            gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],gold,x[10]]
        });
    }

    updateEquips(equips) {
        let x = this.state.gameSave.slice();
        this.setState({
            gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],equips]
        });
    }

    useProvisions() {
        let x = this.state.gameSave.slice();
        var provisions = parseInt(x[CRRNTPROVI]);

        if(parseInt(x[CRRNTSTAMN]) < x[INITSTAMN])
            provisions--;

        var sta = parseInt(x[CRRNTSTAMN]) + 4;

        if(sta > x[INITSTAMN])
            sta = x[INITSTAMN];

        this.setState({
            gameSave: [x[INITSTAMN],sta,x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],provisions,x[JEWELS],x[GOLD],x[10]],
            canUseProvi: false
        });
    }

    oddOrEven() {
        let roll = rollDie();
        console.log("DIE: " + roll + " ODD OR EVEN: " + roll%2);
        return roll;
    }


    handleClick(i) {
        console.log("HANDLE CLICK DE: "+ i);
        var equips = "";
        var x = "";
        var e = "";

        switch (i)  {
            case NEXTPAGE:
                this.setState({
                    pageNumber: this.state.pageNumber + 1
                });
                break;
            case HOWTO:
                this.setState({
                    section: TUTORIAL,
                    pageArray: Pages.data,
                    pageNumber: 1,
                });
                break;
            case HINTS:
                this.setState({
                    section: TUTORIAL,
                    pageArray: Pages.data,
                    pageNumber: 0,
                });
                break;
            case MAINMENU:
                this.setState({
                    section: "",
                    pageArray: [],
                    pageNumber: 0,
                });
                break;
            case STARTGAME:
                this.setState({
                    section: STATS,
                    pageArray: Pages.data,
                    pageNumber: 6,
                    gameSave: this.state.gameSave,
                });
                break;
            case ADVENTURE:
                this.setState({
                    section: GAME,
                    pageArray: AdvPages.data,
                    pageNumber: 1,
                });
                break;
            case "Test Skill":
                let page = this.state.pageArray[this.state.pageNumber];
                let pageNum = 0;
                if(testSkill(this.state.gameSave))
                    pageNum = page.skill;
                else
                    pageNum = page.noSkill;

                this.setState({
                    section: GAME,
                    pageArray: AdvPages.data,
                    pageNumber: pageNum,
                });
                break;
            case "Test Roll":
                let page2 = this.state.pageArray[this.state.pageNumber];
                let pageNum2 = 0;
                let rollVal = rollDie();
                let rollVal2 = rollDie();
                console.log("ROLL RESULT -> One die - "+ rollVal + " Two dice - " + (rollVal+rollVal2));

                if(page2.current === 195)
                    if(rollVal === 6)
                        pageNum2 = page2.choice1;
                    else
                        pageNum2 = page2.choice2;

                if(page2.current === 196)
                    if((rollVal + rollVal2)  <= this.state.gameSave[CRRNTSTAMN])
                        pageNum2 = page2.choice1;
                    else
                        pageNum2 = page2.choice2;
                
                if(page2.current === 208)
                    if((rollVal + rollVal2)  <= this.state.gameSave[CRRNTLCK] && (rollVal + rollVal2)  <= this.state.gameSave[CRRNTSTAMN])
                        pageNum2 = page2.choice1;
                    else
                        pageNum2 = page2.choice2;
                
                if(page2.current === 209)
                    if(rollVal  <= 4)
                        pageNum2 = page2.choice1;
                    else
                        pageNum2 = page2.choice2;
                
                if(page2.current === 211 || page2.current === 224)
                    if(rollVal  === 6)
                        pageNum2 = page2.choice1;
                    else
                        pageNum2 = page2.choice2;
                
                if(page2.current === 234)
                    if(rollVal  <= 2)
                        pageNum2 = page2.choice1;
                    else
                        pageNum2 = page2.choice2;


                this.setState({
                    section: GAME,
                    pageArray: AdvPages.data,
                    pageNumber: pageNum2,
                });
                break;

            case "teste":
                this.setState({
                    section: GAME,
                    pageArray: AdvPages.data,
                    gameSave: TEST_GAMESAVE,
                    equipment: ["Sword", "Shield", "Lantern", "Potion of Strength x2","Potion of Invisibility","Cheese", "Iron Helmet"],
                    pageNumber: TESTE,
                });
                break;
            case "Take Shield":
                this.setState({
                    section: "Take Shield"
                });
                break;
            case "Take the wood":
                equips = this.state.equipment;
                if(!equips.includes("Y-Shaped Wood"))
                    this.setState({
                        section: "Take the wood"
                    });
                break;
            case "Throw Equips":
                this.setState({
                    section: "Throw Equips"
                });
                break;
            case "Potion of Skill":
                x = this.state.gameSave.slice();
                equips = this.state.equipment;
                e = equips.concat(["Potion of Skill x2"]);
                this.setState({
                    equipment: e,
                    pageNumber: 2,
                    gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],e]
                });
                break;
            case "Potion of Strength":
                x = this.state.gameSave.slice();
                equips = this.state.equipment;
                e = equips.concat(["Potion of Strength x2"]);
                this.setState({
                    equipment: e,
                    pageNumber: 2,
                    gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],e]
                });
                break;
            case "Potion of Fortune":
                x = this.state.gameSave.slice();
                equips = this.state.equipment;
                e = equips.concat(["Potion of Fortune x2"]);
                this.setState({
                    equipment: e,
                    pageNumber: 2,
                    gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],e]
                });
                break;
            case "RollOne4Life":
                x = this.state.gameSave.slice();
                var sta = x[CRRNTSTAMN];
                let die = rollDie();
                console.log("Die lose life: "+ die);
                sta = sta - die;
                console.log("Stamina after roll: " + sta);

                if(sta <= 0)
                    this.setState({
                        section: DEAD
                    });
                else
                    this.setState({
                        pageNumber: this.state.pageArray[this.state.pageNumber].survived,
                        gameSave: [x[INITSTAMN],sta,x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],x[10]],
                    });
                break;

            case "Potion of Invisibility":
                x = this.state.gameSave.slice();
                equips = this.state.equipment;
                if(!equips.includes("Potion of Invisibility")) {
                    e = equips.concat(["Potion of Invisibility"]);
                    this.setState({
                        equipment: e,
                        gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],e]
                    });
                }
                break;

            case "Take Key 9":
                x = this.state.gameSave.slice();
                equips = this.state.equipment;
                if(!equips.includes("Key 9")) {
                    e = equips.concat(["Key 9"]);
                    this.setState({
                        equipment: e,
                        gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],e]
                    });
                }
                break;

            case "Take Boat House Key":
                console.log("WTF");
                x = this.state.gameSave.slice();
                equips = this.state.equipment;
                if(!equips.includes("Boat House Key")) {
                    e = equips.concat(["Boat House Key"]);
                    this.setState({
                        equipment: e,
                        gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],e]
                    });
                }
                break;

            case "Take Wooden Mallet and Stakes":
                x = this.state.gameSave.slice();
                equips = this.state.equipment;
                if(!equips.includes("Wooden Mallet")) {
                    e = equips.concat(["Wooden Mallet","Stakes"]);
                    this.setState({
                        equipment: e,
                        gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],e]
                    });
                }
                break;

            case "Take Glove":
                x = this.state.gameSave.slice();
                equips = this.state.equipment;
                if(!equips.includes("Silky Black Glove")) {
                    e = equips.concat(["Silky Black Glove"]);
                    this.setState({
                        equipment: e,
                        gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],e]
                    });
                }
                break;

            case "Hand Check":
                x = this.state.gameSave.slice();
                let hand = this.oddOrEven();
                var skille = x[CRRNTSKILL];
                var stam = x[CRRNTSTAMN];
                var page = 0;

                console.log("HAND -> " + hand)

                if(hand % 2 === 0){
                    skille -= 1;
                    stam -= 2;
                    page = 72;
                }
                else {
                    skille -= 3;
                    stam -= 1;
                    page = 71;
                }

                this.setState({
                    gameSave: [x[INITSTAMN],stam,x[INITLCK],x[CRRNTLCK],x[INITSKILL],skille,x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],x[10]],
                    pageNumber: page
                });

                break;

            case "Take Cheese":
                x = this.state.gameSave.slice();
                equips = this.state.equipment;
                if(!equips.includes("Cheese")) {
                    e = equips.concat(["Cheese"]);
                    this.setState({
                        equipment: e,
                        gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD],e]
                    });
                }
                break;

            case "Buy Candle":
                x = this.state.gameSave.slice();
                equips = this.state.equipment;
                if(!equips.includes("Blue Candle")) {
                    if(x[GOLD] >= 20){
                        e = equips.concat(["Blue Candle"]);
                        this.setState({
                            equipment: e,
                            gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD] - 20,e]
                        });
                    }
                }
                break;

            case "Accept wager":
                x = this.state.gameSave.slice();
                if(x[GOLD] > 0) {
                    this.setState({
                        gameSave: [x[INITSTAMN],x[CRRNTSTAMN],x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],x[CRRNTPROVI],x[JEWELS],x[GOLD] - 1,x[10]],
                        pageNumber: 153
                    });
                }
                break;

            case "Hold a jewel":
                x = this.state.gameSave.slice();
                if(x[JEWELS] > 0)
                    this.setState({
                        pageNumber: 166
                    });
                break;

            case "Plunge wooden stake":
                equips = this.state.equipment;
                if(equips.includes("Stakes"))
                    this.setState({
                        pageNumber: 167
                    });
                break;

            case "Throw cheese at painting":
                equips = this.state.equipment;
                if(equips.includes("Cheese"))
                    this.setState({
                        pageNumber: 168
                    });
                break;

            case "End Game":
                window.location.reload();
                break;

            case "Stop and eat":
                x = this.state.gameSave.slice();

                var provisions = parseInt(x[CRRNTPROVI]);

                if(parseInt(x[CRRNTSTAMN]) < x[INITSTAMN])
                    provisions--;

                var sta = parseInt(x[CRRNTSTAMN]) + 4;

                if(sta > x[INITSTAMN])
                    sta = x[INITSTAMN];

                this.setState({
                    gameSave: [x[INITSTAMN],sta,x[INITLCK],x[CRRNTLCK],x[INITSKILL],x[CRRNTSKILL],x[INITPROVI],provisions,x[JEWELS],x[GOLD],x[10]],
                    pageNumber: 77
                });

                break;

            default:
                x = this.state.gameSave.slice();
                var sta = x[CRRNTSTAMN];
                var gold = x[GOLD];
                var luck = x[CRRNTLCK];
                var jewels = x[JEWELS];
                var skill = x[CRRNTSKILL];
                var equips = this.state.equipment;
                var canProvision = this.state.canUseProvi;
                var provisions = x[CRRNTPROVI];

                if(this.state.pageArray[this.state.pageNumber].updtlife){
                    sta = parseInt(this.state.gameSave[CRRNTSTAMN]) + this.state.pageArray[this.state.pageNumber].lifeAmount;
                    if(sta > x[INITSTAMN])
                        sta = x[INITSTAMN];
                    else if(sta <= 0)
                        this.setState({
                            section: DEAD
                        });
                }

                if(this.state.pageArray[this.state.pageNumber].current === 152){
                    jewels += 1;
                }

                if(this.state.pageArray[this.state.pageNumber].current === 206){
                    gold = gold - 3;                    
                }

                if(this.state.pageArray[this.state.pageNumber].current === 222){
                    gold = gold - 5;                    
                }

                if(this.state.pageArray[this.state.pageNumber].current === 220){
                    let please = equips.filter(el => el !== "Light Sword");
                    equips = please;                    
                }

                if(this.state.pageArray[this.state.pageNumber].current === 219){
                    let please = equips.filter(el => el !== "Sword");
                    equips = please;
                    skill = x[CRRNTSKILL] + 1;
                    x[INITSKILL] = x[INITSKILL] + 1;
                }

                if(this.state.pageArray[this.state.pageNumber].updtGold)
                    gold = parseInt(this.state.gameSave[GOLD]) + this.state.pageArray[this.state.pageNumber].goldAmount;

                if(this.state.pageArray[this.state.pageNumber].updtLuck){
                    luck = parseInt(this.state.gameSave[CRRNTLCK]) + this.state.pageArray[this.state.pageNumber].luckAmount;
                    if(luck > x[INITLCK])
                        luck = x[INITLCK];
                }

                if(this.state.pageArray[this.state.pageNumber].updtProvisions){
                    provisions = parseInt(this.state.gameSave[CRRNTPROVI]) + this.state.pageArray[this.state.pageNumber].provisionAmount;
                }

                if(this.state.pageArray[this.state.pageNumber].updtSkill) {
                    skill = parseInt(this.state.gameSave[CRRNTSKILL]) + this.state.pageArray[this.state.pageNumber].skillAmount;
                    if(skill > x[INITSKILL])
                        skill = x[INITSKILL];
                }

                if(this.state.pageArray[this.state.pageNumber].updtEquip) {
                    equips = equips.concat(this.state.pageArray[this.state.pageNumber].equip);
                }

                if(sta === x[INITSTAMN])
                    canProvision = false;
                else
                    canProvision = true;

                this.setState({
                    section: GAME,
                    pageNumber: i,
                    gameSave: [x[INITSTAMN],sta,x[INITLCK],luck,x[INITSKILL],skill,x[INITPROVI],provisions,jewels,gold,x[10]],
                    equipment: equips,
                    canUseProvi: canProvision
                });
        }
    }

    render() {
        return (
            <div>
                <div>
                    <GameView
                        pageArray = {this.state.pageArray}
                        pageNumber = {this.state.pageNumber}
                        section = {this.state.section}
                        gameSave = {this.state.gameSave}
                        equipment = {this.state.equipment}
                        onClick={i => this.handleClick(i)}
                        setStat={(stat, value) => this.setStat(stat, value)}
                        updateLuck = {luck => this.updateLUCK(luck)}
                        updateSta = {sta => this.updateSTA(sta)}
                        updateSKL = {skill => this.updateSKL(skill)}
                        updateGold = {gold => this.updateGold(gold)}
                        potionLuck = {luck => this.potionLuck(luck)}
                        deleteEquip = {this.deleteEquip}
                        useProvisions = {() => this.useProvisions()}
                        canUseProvi = {this.state.canUseProvi}
                        />

                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
