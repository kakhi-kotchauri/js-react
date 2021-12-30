import react from "react";

export class Stupidclass extends react.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'stupid class text'};
  }
    
  change = () => {
    this.setState({text: 'changed stupid text'})
  }

   render() {
     return (
       <div>
         <h3>this is a class component</h3>
         <button onClick={this.change}>change text</button>
         <div>{this.state.text}</div>
       </div>
     )
   }
}

