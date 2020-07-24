import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ImageSlider from "./components/content/ImageSlider/ImageSlider";
import BackGround from "./components/content/BackGround/BackGround";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ImageSlider/>
                <BackGround/>
                <Footer/>
            </div>
        );
    }
}

export default App;
