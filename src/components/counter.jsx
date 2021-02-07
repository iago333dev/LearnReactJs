import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {
   Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button, Tag
 } from 'reactstrap';


 export default class Counter extends Component {

   state = {
      value: this.props.counter.value,
      id: this.props.counter.id
   };

   constructor(props){
      super(props);      
     // this.ValueIncrement = this.ValueIncrement.bind(this);      
   }

   getBadgeClasses(){      
      let classes = ["primary","secondary","success","danger"];
      if(this.state.value == 0){
         return classes[3];
      }else if(this.state.value > 20){
         return classes[1]; 
      }else if(this.state.value > 50){
         return classes[2]; 
      }else{
         return classes[0]; 
      }

      

      

   }


   //Montando Componente
    render() { 
     
        return (
           <React.Fragment>
              <span><h3>{this.props.counter.value}</h3>
               <Button color={this.getBadgeClasses()} onClick={() => this.props.onIncrement(this.props.counter)}>Click me!</Button>
               <Button color="danger" onClick={() => this.props.onDelete(this.props.counter)}>Delete me!</Button>
              </span>
           </React.Fragment>
      )
   }
   //Render ====================== FIM

}
 
