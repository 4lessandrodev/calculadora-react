import React,{Component} from 'react';
import Button from './../components/Button';
import Display from './../components/Display';
import './Calculator.css';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    currentIndex: 0
};

export default class Calculator extends Component{
    
    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.state = { ...initialState };
    }
    
    clearMemory() {
        this.setState({
            displayValue: '0',
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            currentIndex: 0
        });    
    }

    setOperation(operation) {
        if (this.state.currentIndex === 0) {
            this.setState({ operation, currentIndex: 1, clearDisplay: true });
        } else {
            const equal = operation === '=';
            const currentOperation = this.state.operation;

            const values = [...this.state.values];
            try {
                switch (currentOperation) {
                    case '*':
                        values[0] = values[0] * values[1];
                        break;
                    case '-':
                        values[0] = values[0] - values[1];
                        break;
                    case '/':
                        values[0] = values[0] / values[1];
                        break;
                    case '+':
                        values[0] = values[0] + values[1];
                        break;
                    default:
                        values[0] = this.state.values[0];
                        break;
                }
            } catch (error) {
                values[0] = this.state.values[0];
            }
            values[1] = 0;
            this.setState({
                displayValue: values[0],
                operation: equal ? null : operation,
                currentIndex: equal ? 0 : 1,
                clearDisplay: !equal,
                values
            });
        }    
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return;
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({ displayValue, clearDisplay: false });

        if (n !== '.') {
            const i = this.state.currentIndex;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({ values });
        }
    }

    render() {
       
        return (
            <div className="Calculator">
                <Display value={this.state.displayValue}/>
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
                <Button label='.' click={this.addDigit}/>
                <Button label='=' operational click={this.setOperation}/>
            </div>
        )
    }
}

