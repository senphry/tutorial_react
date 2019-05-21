import React, { Component } from 'react';

class Contador extends Component {
    constructor() {
        super();

        this.state = {
            contador: 0
        };
    }

    aumentarContador = () => {
        // Importante no modificar directamente el estado, si no usar setState
        // y pasarle la clave del objeto a modificar y su nuevo valor
        this.setState({contador: this.state.contador + 1});
    }

    render() {
        return (
            /* Como veiamos antes es necesario devolver un unico elemento padre
            por eso usamos un div para agrupar los demas elementos */
            <div>
                <span>{this.state.contador}</span>
                {/* Al metodo onClick le asignamos un metodo.
                Importante poner la C de onClick en mayusculas */}
                <button onClick={this.aumentarContador}>+</button>
            </div>
        );
    }
}

export default Contador;