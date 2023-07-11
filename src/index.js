import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pages from './pagesObj.js';
import AdvPages from './pagesAdventure.js';
import rollDie from './functions/RollDie';
import GameView from './components/GameView';

import {STATS, NEXTPAGE, MAINMENU, ADVENTURE, HOWTO, TUTORIAL, HINTS, DEAD} from './ConstantFile';
import {LCKROLL, CRRNTLCK, INITLCK} from './ConstantFile';
import {CRRNTSKILL, INITSKILL} from './ConstantFile';
import {INITPROVI, CRRNTPROVI} from './ConstantFile';
import {STMNROLL, CRRNTSTAMN, INITSTAMN} from './ConstantFile';
import {GOLD, JEWELS, GAME} from './ConstantFile';
import {STARTGAME, TEST_GAMESAVE, TESTE, TEST_EQUIPMENT} from './ConstantFile';




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
                    equipment: TEST_EQUIPMENT,
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
