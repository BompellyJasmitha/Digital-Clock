import React from "react";
import "./index.css"


export default class Clock extends React.Component{
    constructor(props){
        super(props)

        this.state={
            date:new Date().toLocaleDateString(),
            time:new Date().toLocaleTimeString(),
        }
    }

    // update timing

    updating=()=>{this.setState({date:new Date().toLocaleDateString(),
                  time:new Date().toLocaleTimeString()})
                 }
    
    componentDidMount() {
        this.intervalId = setInterval(this.updating, 1000);
      }

   
    

    render(){
        return( 
        <div id="childDiv">
    
        <h2 id="date">{this.state.date}</h2>
        <h2 id="time">{this.state.time}</h2>

        </div>
        )
    }

}

// let D=date.toLocaleDateString();
// console.log(D)

// let time=date.toLocaleTimeString()
// console.log(time)

// setInterval(()=>console.log("byeeeee"),0)
