import React from 'react';
import rollDie from '../functions/RollDie';
import tooltipText from '../functions/TooltipText';
import { CRRNTSKILL, CRRNTSTAMN, CRRNTLCK, INITSTAMN } from '../ConstantFile';

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
                            <img id='imageSword' src={ require('../images/' + props.page.image)} alt={props.page.image} />
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

export default BattleContent;