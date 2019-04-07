import React, {Component} from 'react';
import '../styles/App.css';
import Sidebar from './Sidebar';
import Home from './Home';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import About from './About';
import NavigationBar from './navbar';

export default class App extends Component {

    render() {
        return (
        <div>
            <div>
                <header className="app-header">
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
                <Portfolio/>
            </div>
            <div>
                <Contacts/>
            </div>
        </div>
        );
    }
}