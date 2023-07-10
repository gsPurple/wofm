import React from 'react';
import {GAME, TUTORIAL, STATS, DEAD, HINTS} from '../ConstantFile';
import {STMNROLL, LCKROLL, HOWTO, STARTGAME} from '../ConstantFile';
import TextContent from './TextContent';
import BattleContent from './BattleContent';
import StatsView from './StatsView';

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

export default GameView;