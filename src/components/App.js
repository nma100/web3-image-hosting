import React from 'react';
import ProgressBar from './ProgressBar';
import FileInfo from './FileInfo';
import UploadPanel from './UploadPanel';

const mode = {
  init: 0,
  upload: 1,
  result: 2
}

class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {mode: mode.init};    
    this.stateHandler = this.stateHandler.bind(this);
  }

  stateHandler(state) {
    this.setState(state);
  }

  render() {
    return( 
      <React.Fragment>
        { this.state.mode === mode.init &&
          <UploadPanel stateHandler={this.stateHandler} />
        }
        { this.state.mode === mode.upload &&
          <ProgressBar file={this.state.file} progress={this.state.uploadProgress} />
        }
        { this.state.mode === mode.result &&
          <FileInfo file={this.state.file} cid={this.state.cid} />
        }
      </React.Fragment> 
    );
  }
}

export { App, mode };
