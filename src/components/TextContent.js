import React from 'react';
import {GOLD, STATS, NEXTPAGE, MAINMENU, CRRNTLCK} from '../ConstantFile';
import {LCKROLL, SKLROLL, ADVENTURE} from '../ConstantFile';
import rollDie from '../functions/RollDie';

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
                                    <img id='image' src={ require('../images/' + props.page.image)} alt={props.page.image} />
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
    else if((props.page.current === 246 || props.page.current === 249) && !props.equipment.includes("Boat House Key")) {
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

export default TextContent;