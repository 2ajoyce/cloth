import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import {CloudinaryContext, Image, Transformation} from 'cloudinary-react'
import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                    <CloudinaryContext cloudName="dfuiao8lz">
                        <Image publicId="sample" format="jpg">
                            <Transformation crop="fill" gravity="faces" width="300" height="200"/>
                        </Image>
                    </CloudinaryContext>
                </Provider>
            </div>
        )
    }
}

export default App
