import React from 'react'

class App extends React.Component{
    state={
        counter:0
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({counter:this.state.counter +1})
        }, 1000)
    }
    render(){return(<div> {this.state.counter}</div>)
    }
        
}
export default App;