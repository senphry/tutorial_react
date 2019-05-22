import React, { Component } from 'react';

class Contador extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            contador: 0
        };
    }

    // aumentarContador = () => {
    //     // Importante no modificar directamente el estado, si no usar setState
    //     // y pasarle la clave del objeto a modificar y su nuevo valor
    //     this.setState({contador: this.state.contador + 1});
    // }

    componentDidMount() {
        let interval = setInterval(() => {
            
            // let date = new Date().getDate();
            // let month = new Date().getMonth();
            // let year = new Date().getFullYear();
            // let hours = new Date().getHours();
            // let min = new Date().getMinutes();
            // let sec = new Date().getSeconds();
            // this.setState ({date: date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec});

            (this.state.contador === 100 ? (clearInterval(interval)) : this.setState({ contador: this.state.contador + 1 }))
        }, 1000);
        this.getDataFromDb();
    }

    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
          .then((data) => data.json())
          .then((res) => this.setState({ data: res.data }));
      };

    render() {
        return (
            (this.state.contador === 100 ? <h1>Cuenta terminada!</h1> : this.renderContent())
        )
    }

    renderContent() {
        const { data } = this.state;
        return (
            
            /* Como veiamos antes es necesario devolver un unico elemento padre
            por eso usamos un div para agrupar los demas elementos */
            <div>
                <ul>
                {data.length <= 0
                    ? 'NO DB ENTRIES YET'
                    : data.map((dat) => (
                        <div>
                        <h1>Hola {dat.name}</h1>
                        </div>
                    ))}
                </ul>
                <h3>{this.state.date}</h3>
                <span>{this.state.contador}</span>
            </div>
        );
    }
}

export default Contador;