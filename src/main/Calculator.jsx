import React,{Component} from 'react';
import Button from './../components/Button';
import Display from './../components/Display';
import './Calculator.css';

export default class Calculator extends Component{
    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        console.log('Limpar');    
    }

    setOperation(operation) {
        console.log(operation);    
    }

    addDigit(n) {
        console.log(n);
    }

    render() {
       
        return (
            <div className="Calculator">
                <Display value={0}/>
                <Button label='AC' click={this.clearMemory} triple/>
                <Button label='/'  operational click={this.setOperation}/>
                <Button label='7' click={this.addDigit}/>
                <Button label='8' click={this.addDigit}/>
                <Button label='9' click={this.addDigit}/>
                <Button label='*' operational click={this.setOperation}/>
                <Button label='4' click={this.addDigit}/>
                <Button label='5' click={this.addDigit}/>
                <Button label='6' click={this.addDigit}/>
                <Button label='-' operational click={this.setOperation}/>
                <Button label='1' click={this.addDigit}/>
                <Button label='2' click={this.addDigit}/>
                <Button label='3' click={this.addDigit}/>
                <Button label='+' operational click={this.setOperation}/>
                <Button label='0' click={this.addDigit} double/>
                <Button label='.' click={this.setOperation}/>
                <Button label='=' operational click={this.setOperation}/>
            </div>
        )
    }
}

