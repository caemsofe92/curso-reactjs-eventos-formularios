import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.name = React.createRef();
    this.lastname = React.createRef();
  }

  handleSubmit(e){
    alert("El nombre de la persona es: "+this.name.current.value+" "+this.lastname.current.value);
    e.preventDefault();
  }

  render(){          
    return(
    <div className="App">
      <header className="App-header">
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre: 
          <input type="text" ref={this.name}/>
        </label>
        <label>
          Apellido: 
          <input type="text" ref={this.lastname}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </header>
    </div>
    );
  }
}

export default App;
