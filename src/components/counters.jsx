import react,{ Component } from "react";

import Counter from "./counter"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Tag
  } from 'reactstrap';

class Counters extends Component {
    //Objeto com vetor
    state = {
        counter: [
            {id: 1, value: 0},
            {id: 2, value: 20},
            {id: 3, value: 60},
            {id: 4, value: 90}
        ]
    }

    //Função de deletar possui ID como parametro
    HandleDelete(props) {
        //Vetor filtrando todos objetos sem o ID do parametro
        const counter_atualizado = this.state.counter.filter( c=> c.id !== props.id);
        //Seta State com novo vetor
        this.setState({ counter: counter_atualizado });    
    }

    HandleIncrement = props =>{
        const counters = [...this.state.counter];
        const index = counters.indexOf(props);
        counters[index] = {...props};
        counters[index].value++;
        this.setState({ counter: counters });  
    }

    HandleReset = props =>{
        const counters = this.state.counter.map(c=>{
            c.value = 0;
            return c;
        });   

        this.setState(counters);
 
    }


    render() {return(

            <div>
                <Button color="primary" onClick={()=>this.HandleReset()}>RESET</Button>
                
                { this.state.counter.map(c =>
                 <Counter 
                 onDelete={()=>this.HandleDelete(c)}
                 onIncrement={()=>this.HandleIncrement(c)}
                 key={c.id} 
                 id={c.id} counter={c}/>)}
            </div>
        ); 
    }
}
 
export default Counters;