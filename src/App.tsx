import React, { FC, HTMLProps, useState, CSSProperties } from 'react';
// import logo from './logo.svg';
import './App.css';
import Lottie, { Options } from 'react-lottie';
import animationData from './lotties/car.json';

const defaultOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const buttonStyle: CSSProperties = {
  display: 'block',
  margin: '10px auto',
};
type Button = FC<HTMLProps<HTMLButtonElement>>;
const Button: Button = (...props) => <button style={buttonStyle} {...props} />;

function App() {
  useState();
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            isStopped={isStopped}
            isPaused={isPaused}
          />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <Button style={buttonStyle} onClick={() => setIsStopped(true)}>
            Stop
          </Button>
          <Button style={buttonStyle} onClick={() => setIsStopped(false)}>
            Start
          </Button>
          <Button style={buttonStyle} onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? 'Play' : 'Pause'}
          </Button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
