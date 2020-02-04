import React from 'react';//libreria para pintar
import './App.css';

//funcion
//En la funcion uso el id para darle un estilo y referencio en el App.css a este estilo
//Dentro de jsx para interpretar variables las escribimos dentro de {}
/*
function Helloworld(props){
  //ver datos en pantalla
  //console.log(props);
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
}
*/


/*
//funcion flecha para sustituir la funcion App()
const App = () => <div>This is my componet: <Helloworld/></div>
*/


/* clase para sustituir la funcion App()
class App extends React.Component{
  render(){
    return <div> This is my componet: <Helloworld/></div>
  }
}
*/

//Estado: cambiar datos de un componente
//El state es una propiedad que es un objeto almacena datos de este componente
//para escuchar un evento del boton escribimos una fucnion flecha dentro de las llaves 
//<button onClick={this.toggleShow.bind(this)}>toggle show</button> para pasar realar algo dentro del onclik llamando al toogle show
//!this.state.show el signo ! hace que el stado mute a lo contrario si esta falso cambiara a true y bis eversa


class Helloworld extends React.Component{
  state={
    show:true
  }
  //funcion que controla el evento onClic del boton toggle Show
  toggleShow=()=>{
    this.setState({show: !this.state.show})
  }

  render (){
    if(this.state.show){
    return <div id="hello">
      <h3>{this.props.subtitle}</h3>
      {this.props.mytext}
      <button onClick={this.toggleShow}>toggle show</button>
     </div>
  }else{
    return <h1>
      There are not elements
      <button onClick={this.toggleShow}>
        toggle show
        </button>
    </h1>
  }
}
}


// leguaje usado:jsx
//funcion  app que retorna un div retorna un elemento html
// Props
function App() {
  return (
    <div>
      this is my componet: 
      <Helloworld mytext="Hello fazt" subtitle="Loren ispum"/>
      <Helloworld mytext="Hola mundo" subtitle="Component two"/>
      <Helloworld mytext="Hello!" subtitle="Componetente tres"/>
    </div>
  );
}

export default App;

