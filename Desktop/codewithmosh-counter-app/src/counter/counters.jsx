import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    render() { 
        return (
            <div className="container">
                <button 
                    className="btn btn-danger btn-sm m-2" 
                    onClick={this.props.onReset}
                >
                    Reset
                </button>
                {this.props.counters.map((counter) =>
                    <Counter 
                        key={counter.id} 
                        counter={counter} 
                        onDelete={this.props.onDelete} 
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                    />
                )}
            </div>
          );
    }
}
 
export default Counters;