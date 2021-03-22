import React, { Component } from 'react';
class Counter extends Component {
    render() { 
        return ( 
            <div>
                <span style={{ color:'red' }} className="badge badge-warning m-2">{this.formateCount()}</span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm m-2"
                >
                        +
                </button>
                <button 
                    onClick={() => this.props.onDecrement(this.props.counter)} 
                    className="btn btn-secondary btn-sm m-2"
                    disabled={this.props.counter.value === 0 ? 'disabled' : ''}
                >
                        -
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-primary btn-sm m-2">
                    x
                </button>
            </div>
         );
    }
    formateCount(){
        const { value } = this.props.counter;
        return value  === 0 ? 'Zero' : value;
    }
}
 
export default Counter;