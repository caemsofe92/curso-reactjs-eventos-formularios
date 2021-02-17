import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      lastname: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    alert("El nombre de la persona es: "+this.state.name+" "+this.state.lastname);
    e.preventDefault();
  }

  render(){          
    return(
    <div className="App">
      <header className="App-header">
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre: 
          <input type="text" value={this.state.name} onChange={(e)=> this.setState({name: (e.target.value).toUpperCase()})}/>
        </label>
        <label>
          Apellido: 
          <input type="text" value={this.state.lastname} onChange={(e)=> this.setState({lastname: e.target.value})}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </header>
    </div>
    );
  }
}

export default App;
