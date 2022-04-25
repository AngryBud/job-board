// import logo from './logo.svg';
import './App.css';

import Box from './components/Box';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
    <div className="App"> 
      <Header />
      <div className="Jobs">
        <Box className = "box-red" 
                title = "Full Time Sales Associated - Sydney Boutique"
                contractType = "CDI"
                country = "Australie"
                city = "Sydney"/> 
        <Box className = "box-green" title = "Agent de sécurité - Pantin"
                contractType = "CDI"
                country = "France"
                city = "Pantin"/> 
        <Box className = "box-yellow" title = "Responsable d'Atelier (H/F)"
                contractType = "CDD"
                country = "France"
                city = "Paris"/> 
        <Box className = "box-blue" title = "Chef de projet"
                contractType = "CDD"
                country = "France"
                city = "Paris"/> 
        <Box className = "box-pink" title = "Développeur React.js"
                contractType = "CDI"
                country = "France"
                city = "Paris"/>  
        <Box className = "box-red" title = "Sales Associate Stockholm"
                contractType = "CDI"
                country = "Suède"
                city = "Stockholm"/> 
        <Box className = "box-green" title = "Vendeur/se - Crans Montana"
                contractType = "CDI"
                country = "Suisse"
                city = "Crans Montana"/> 
        <Box className = "box-yellow" title = "CRM and Data Quality Analyst"
                contractType = "CDI"
                country = "USA"
                city = "New-York"/> 
        <Box className = "box-blue" title = "Infirmier (H/F)"
                contractType = "CDI"
                country = "France"
                city = "Pantin"/>
      </div>

      <Footer tech = "React" society = "Le Reacteur" name = "Clément"/>

    </div>
    )
}

export default App;
