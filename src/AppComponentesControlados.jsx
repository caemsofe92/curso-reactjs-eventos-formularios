import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      value: '',
      options:[
        { id:'opcion-1', label: 'Producto 1' },
        { id:'opcion-2', label: 'Producto 2' },
        { id:'opcion-3', label: 'Producto 3' },
        { id:'opcion-4', label: 'Producto 4' },
        { id:'opcion-5', label: 'Producto 5' },
        { id:'opcion-6', label: 'Producto 6' },
      ]
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    alert("El nombre de la persona es: "+this.state.value);
    e.preventDefault();
  }

  render(){

    
    const opciones = this.state.options.map((item,index) => {
      
      console.log(item, index);

      return <option key={index} value={item.id}>{item.label}</option>;
    });
            
    return(
    <div className="App">
      <header className="App-header">
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre: 
          <select 
            value={this.state.value} 
            onChange={(e) => {return this.setState({value: e.target.value})}}>
            {opciones}
            
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </header>
    </div>
    );
  }
}

export default App;
