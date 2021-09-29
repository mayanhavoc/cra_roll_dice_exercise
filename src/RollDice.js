import React, {Component} from 'react';
import Die from './Die';
import "./RollDice.css"

class RollDice extends Component {
    static defaultProps = {
        face : [
            'one', 'two', 'three', 'four', 'five', 'six'
        ]};
    constructor(props){
        super(props);
        this.state = {dieOne: "one", dieTwo: "one", rolling: false};
        this.roll = this.roll.bind(this);
    }
    roll(){
        let rand = this.props.face[Math.floor(Math.random() * this.props.face.length)];
        let randTwo = this.props.face[Math.floor(Math.random() * this.props.face.length)];
        this.setState({
            dieOne: rand, 
            dieTwo: randTwo, 
            rolling: true
        });
        setTimeout(()=> {
            this.setState({rolling:false});
        }, 1000);
    }
    render(){
        let btn;
        if (this.state.rolling){
            btn = <button onClick={this.roll} disabled={this.state.rolling}>...rolling</button>
        } else {
            btn = <button onClick={this.roll} disabled={this.state.rolling}> Roll dice </button>}
        return (
            <div className='RollDice'>
                <div className="RollDice-container">
                    <Die face = {this.state.dieOne}rolling=    {this.  state.rolling}/>
                    <Die face = {this.state.dieTwo}rolling=    {this.  state.rolling} />
                </div>
                <div className="RollDice-btn">
                    {btn}
                </div>
            </div>
        )
    }
}

export default RollDice;