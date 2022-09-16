import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react';

class Counter extends Component {
    styles = {
        fontSize: 50,
        fontweight: "bold"
    }

    renderTags(){
        if (this.state.tags.length === 0) return <p>There is no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }

    render() { 
        return (
            <div>
                <h4>{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
                {/* {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()} */}
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm">-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value
    }
}
 
export default Counter;

