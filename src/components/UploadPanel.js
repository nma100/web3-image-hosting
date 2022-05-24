import React from 'react';
import uploadFile from '../Web3StorageApi';
import { mode } from './App';


class UploadPanel extends React.Component  {

    async handleSelectFile() {
        let filePicker = document.getElementById('input-file');
        let file = filePicker.files.item(0);
        console.log('Picked file', file);
        this.props.stateHandler({ mode: mode.upload, file: file });
        let cid = await uploadFile(file, this.updateProgress.bind(this));
        this.props.stateHandler({mode: mode.result, cid: cid});
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
                    <p className="mb-5">Get permalinks for Facebook, Twitter, discussion forums and blogs</p>
                    <div id="upload-zone" className="p-5">
                        <p className='fs-4'>Drag and drop files</p>
                        <p>or</p>
                        <input id="input-file" type="file" onChange={() => this.handleSelectFile()} style={{ display: 'none' }} />
                        <button type="button" className="btn btn-danger btn-lg"><i className="fas fa-upload "></i> Click to choose</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UploadPanel;
