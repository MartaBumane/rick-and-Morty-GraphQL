import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { Body } from './Body'
import { Locations } from './Planets'
import { Episodes } from './Episodes'
import { Footer } from './Footer'
import { Character } from './Character'
import { Header } from './Header'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route } from "react-router-dom"
import { SinglePlanet } from './SinglePlanet';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
});


const App: React.FC = () => {
  return (
    <div className='App'>
      <Router>
        <ApolloProvider client={client}>
          <Header />
          <div className='body'>
            <Route path="/" exact component={Body} />
            <Route path="/characters/:id" exact component={Character} />
            <Route path="/planets" exact component={Locations} />
            <Route path="/planets/:id" exact component={SinglePlanet} />
            <Route path="/episodes" exact component={Episodes} />
          </div>
          <Footer />
        </ApolloProvider>
      </Router>
    </div>
  );
}

export default App;
