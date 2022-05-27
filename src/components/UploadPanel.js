import React from 'react';
import uploadFile from '../Web3StorageApi';
import { mode } from './App';


class UploadPanel extends React.Component  {

    constructor(props) {
        super(props);
        this.handleSelectFile = this.handleSelectFile.bind(this);
        this.drop = this.drop.bind(this);
      }

    async processFile(file) {
        console.log('Process file', file);
        this.props.stateHandler({ mode: mode.upload, file: file });
        let cid = await uploadFile(file, this.updateProgress.bind(this));
        this.props.stateHandler({mode: mode.result, cid: cid});
    }

    handleSelectFile() {
        let filePicker = document.getElementById('input-file');
        let file = filePicker.files.item(0);
        this.processFile(file);
    }
      
    drop(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            if (ev.dataTransfer.items[0].kind === 'file') {
                let file = ev.dataTransfer.items[0].getAsFile();
                this.processFile(file);
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            let file = ev.dataTransfer.files[0];
            this.processFile(file);
        }
    }

    allowDrop(e) {
        e.preventDefault();
    }

    handleClick() {
        const inputElem = document.getElementById('input-file');
        if (inputElem) { inputElem.click(); }
    }
    
    updateProgress(value) {
        this.props.stateHandler({ uploadProgress: value });
    }
    
    render() {
        return(
            <div className="d-flex justify-content-center">
                <div id="upload-panel" onClick={this.handleClick} className="w-50 p-4 bg-white text-center rounded-3">
                    <h1>Upload and share your images</h1>
                    <p className="mb-5">Get links for Facebook, Twitter, forums and more</p>
                    <div id="upload-zone" className="p-5" onDrop={this.drop} onDragOver={this.allowDrop}>
                        <p className='fs-4'>Drag and drop files</p>
                        <p>or</p>
                        <p>
                            <input id="input-file" type="file" onChange={() => this.handleSelectFile()} style={{ display: 'none' }} />
                            <button type="button" className="btn btn-danger btn-lg"><i className="fas fa-upload me-2"></i> Click to choose</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadPanel;
