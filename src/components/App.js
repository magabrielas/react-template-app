import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'



class App extends Component {
     render(){
        return (
            <Container>
                <Row>
                    <Col md="12" align="center">
                        <h1>Hello!</h1>
                        <p>My name is Maria</p>
                        <p>I am always looking for working</p>
                        
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default App;

/*Declarar variable con este estilo de funcion sin estado, 
para usar el High-order Component, ademas de camabiar el 
export default App a export default AppwithHeader
const AppWithHeader = () =>{
    return(
        <Header Component = {App}/>
    )
}
export default AppWithHeader; //Permite a otras clases importar a App sin necesidad de ponerlo en {}
*/

 /* const bio = this.state.displayBio ? ( 
            <div>
            <p>Hola</p>
            <p>quiero avanzar rapido</p>
            <p>Gracias, la gerencia</p>
        </div>
        ): null; //expresion ternaria
        */