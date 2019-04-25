import React, {Component} from 'react';
import '../styles/App.css';
import Home from './Home';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import Location from './Location';
import About from './About';
import Modals from './navbar';
import Images from './Carousel';

export default class App extends Component {

    render() {
        return (
        <div>
            <div>
                <header className="app-header">
                    <Modals/>
                    <h1>Kamanja Team Designs</h1>
                </header>
            </div>
             <div>
                <Home/>
            </div>
            <div>
                <About/>
            </div>
            <div>
                <Images/>
            </div>
            <div>
                <Portfolio/>
            </div>
            <div>
                <Location/>
            </div>
            <div>
                <Contacts/>
            </div>
        </div>
        );
    }
}