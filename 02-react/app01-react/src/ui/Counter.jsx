import { Component } from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count:0
        };
    }

    stepUp = event => this.setState({count:this.state.count+1});

    render(){
        return(
            <section className='col-2 p-2 m-2 bg-dark text-light fw-bold text-center' onClick={this.stepUp}>
                Count : {this.state.count}
            </section>
        );
    }
}

export default Counter;