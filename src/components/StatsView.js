import React from 'react';
import {GOLD, STMNROLL, LCKROLL, INITLCK, CRRNTLCK} from '../ConstantFile';
import {CRRNTSTAMN, INITSTAMN, SKLROLL, JEWELS} from '../ConstantFile';
import {CRRNTSKILL, INITSKILL, CRRNTPROVI, INITPROVI} from '../ConstantFile';
import tooltipText from '../functions/TooltipText';

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

export default StatsView;