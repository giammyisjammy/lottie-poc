import React, { useState } from 'react';
import './App.css';
import Lottie, { Options } from 'react-lottie';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {
  Box,
  Container,
  CssBaseline,
  Fab,
  Button,
  Grid,
} from '@material-ui/core';

import { AppBar, ScrollTop } from '@components';
import animationData from '@lotties/car.json';

const defaultOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function App() {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
      <CssBaseline />
      <AppBar />
      <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
      </Container>
      <Grid container>
        <Grid item></Grid>
      </Grid>
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsStopped(true)}
            >
              Stop
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsStopped(false)}
            >
              Start
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsPaused(!isPaused)}
            >
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
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
