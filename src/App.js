import React from 'react'
import './App.css';
import Greet from './components/Greet'

import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Curriculum from './components/Curriculum'

import { Link, Route, Switch, Redirect } from 'react-router-dom'


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      showGreet: true,
      dataFromAPI: '',
      admin: true
    }
    console.log('CONSTRUCTOR')
  }

  // //Component Did Mount: Metodo que se activa solo una vez tras el primer renderizado (y nunca mas)

  // componentDidMount(){
  //   console.log('DIDMOUNT')
  //   fetch('https://api.magicthegathering.io/v1/cards')
  //   .then((result)=>{
  //     return result.json()
  //   })
  //   .then((data)=>{
  //     this.setState({dataFromAPI: data})
  //   })
  // }

  // //Component Did update: Metodo que se activa cada vez que se detecta un cambio en mi pagina (aka cuando se actualiza el state)

  // componentDidUpdate(){
  //   console.log('DIDUPTDATE')
  // }

  render() {
    console.log('RENDER')
    return (
      <div className="App">
        {/* <h2>{this.state.counter}</h2>
        <button onClick={()=>this.setState({counter: this.state.counter + 1})}>Add 1 to counter</button>
        {this.state.showGreet && <Greet counter={this.state.counter}/>}
        <button onClick={()=>this.setState({showGreet: !this.state.showGreet})}>Show/Hide Greet</button> */}
        {/* {this.state.dataFromAPI ? 'API Cargada' : 'Loading'} */}

        <Link to="/aboutMe">About Me</Link>
        <br />
        <Link to="/curriculum">Curriculum</Link>
        <br />
        <Link to="/projects">Projects</Link>

        <Switch>

          {/* Ruta que renderiza el componente AboutMe. Esta forma de crear routes no parece que tenga ninguna 
          utilidad por encima de las otras dos formas. Es importante que sepais que se pueden crear rutas de esta 
          forma, pero utilizando las otras dos tienes mas funcionalidades que esta no te da */}

          <Route path="/aboutMe">
            <AboutMe />
          </Route> 
          
          {/* Ruta que revisa si eres admin. En el caso de que lo seas, re va a renderizar el componente de Curriculum. 
          Si no lo eres, te va a hacer un redirect a '/aboutMe' */}

          <Route path="/curriculum" render={() => (
            !this.state.admin
            ? <Redirect to="/aboutMe" />
            : <Curriculum />
          )}>
            {this.state.admin ? <Curriculum /> : <Redirect to="/aboutMe" />}
          </Route> 

          {/* Ruta que te renderiza el componente de Projects */}
          
          <Route path="/projects/:id" component={Projects}/>

        </Switch>


        <h1>App</h1>
        {/* <AboutMe />
        <Curriculum />
        <Projects /> */}
      </div>
    );
  }

}

export default App;


// <Router> <App /> <Router> --> Conecta la interfaz del usuario con la URL. (Se hace en indez.js)
// <Link> --> Equivalente al "a" (anchor tags) de HTML. Sirve para poner enlaces.
// <Route> --> Renderizar una interfaz dependiendo de la URL
// <Switch> --> Envoltorio de las rutas (Route's) para que te devuelva laprimera ruta que coincida con el URL
// <Redirect> --> Redirecciona a un enlace


// Tres formas de crear Route's

// 1 - Envolviendo el componente entre el componente Route. Este es util cuando quieres hacer un redirect con 
// condicional, aunque no es la mejor forma de hacerlo.

//    <Route path="/curriculum">
//      {this.state.admin ? <Curriculum /> : <Redirect to="/aboutMe" />}
//    </Route> 

// 2 - Utilizando la propiedad de component. Este es necesario para pasar params por el url

//    <Route path="/projects/:id" component={Projects}/>

// 3 - Utilizando la propiedad de render. Este es util cuando quieres llevar a cabo mas funcionalidades 
// a parte de la de renderizar un componente, como por ejemplo actualizar también el estado.

//    <Route 
//       path="/projects" 
//       render={()=> {
//         <Projects />
//       }} 
//    />