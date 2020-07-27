import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ImageSlider from "./components/Content/ImageSlider/ImageSlider";
import BackGround from "./components/Content/BackGround/BackGround";

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
