import React from 'react';

class ProgressBar extends React.Component  {

    render() {
        return(
            <div className="d-flex justify-content-center">
                <div id="progress-info"  className="w-75 px-4 py-4 bg-white">
                    <p className="fs-5 text-center">Uploading file '{this.props.file.name}'. Please Wait ...</p>
                    <div className="progress mb-3"  style={{height: '20px'}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{width: this.props.progress + '%'}}></div>
                    </div>
                    { this.props.progress === 100  &&
                    <div className="text-center">
                        <span className="spinner-border spinner-border-sm text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </span>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default ProgressBar;
