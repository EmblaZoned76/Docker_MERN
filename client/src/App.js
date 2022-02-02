import React from 'react';
import {Button, Container, Jumbotron} from 'react-bootstrap'
import {BrowserRouter as Router} from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import {LinkContainer} from "react-router-bootstrap"
const App = () => {
  return(
    <Router>
      <Header />
      <main className="py-3">
        <Container>         
            <h1 className="text-center">
              Librairie 
            </h1> 
            <p className="text-center">
              Cette application est une petite application pour intégrer Docker à une application MERN
            </p>
            <p className="text-center">
              <LinkContainer to="/books">
                <Button variant="success" size="lg">
                  Mes livres
                </Button>
              </LinkContainer>
            </p>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
