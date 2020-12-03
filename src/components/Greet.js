import React from 'react'

class Greet extends React.Component {

    //Component Will Unmount: Metodo que se activa cuando el componente en el que se esta llamando deja de aparecer en mi pagina, es decir, cuando se desmonta

    componentWillUnmount(){
        console.log('Greet UNMOUNT')
    }

    render(){
        return(
            <div>
                <h2>Soy Greet {this.props.counter}</h2>
            </div>
        )
    }
}

export default Greet