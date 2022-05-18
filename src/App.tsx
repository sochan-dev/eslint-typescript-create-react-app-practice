import { FC } from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './Title';

export const App: FC = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Title msg="practice eslint for create-react-app" />
        </header>
    </div>
);
