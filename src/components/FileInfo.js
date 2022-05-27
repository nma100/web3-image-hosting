import React from 'react';

const IPFS_GATEWAY = 'https://ipfs.io/ipfs';

class FileInfo extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {imageLoaded: false};    
      }

    handleImageLoaded() {
        document.getElementById('image-preview').classList.add('img-thumbnail');
        this.setState({ imageLoaded: true });
    }
    
    handleCopyClipboard(e, id) {
        let text = document.getElementById(id).value;
        navigator.clipboard.writeText(text).then(function() {
            document.querySelectorAll('.copied-clip').forEach(elem => elem.classList.add('d-none'));
            document.querySelector(`.copied-clip.${id}`).classList.remove('d-none');    
          }, function(e) {
            console.error('Clipboard write failed', e);
          });
    }

    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
    
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
    
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    muted(text) {
        return <span className="text-muted">{text}</span>;
    }

    render() {
        const encodedName = encodeURIComponent(this.props.file.name);
        const imgUrl = `${IPFS_GATEWAY}/${this.props.cid}?filename=${encodedName}`;
        const html = `<a href="${imgUrl}"><img src="${imgUrl}"></a>`;
        const bbcode = `[url=${imgUrl}][img]${imgUrl}[/img][/url]`;
        const markdown = `[${this.props.file.name}](${imgUrl})`;
        const fileSize = this.formatBytes(this.props.file.size);

        return( 
            <div id="file-panel" className="container bg-white p-4 rounded-3">
                  <div className="row">
                    <div className="col-4">
                        <a href={imgUrl}>
                            <img id="image-preview" src={imgUrl} className="img-fluid" alt="Preview" onLoad={() => this.handleImageLoaded()} />
                        </a>
                        { this.state.imageLoaded
                            ? <div id="file-info" className="small py-2">
                                Filename : '{this.muted(this.props.file.name)}', Size : {this.muted(fileSize)}, Type : {this.muted(this.props.file.type)}
                            </div>
                            : <div className="text-center">Loading preview 
                                <span className="spinner-border spinner-border-sm text-danger ms-2" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </span>
                            </div>
                        }
                    </div>
                    <div className="col-8">
                        <label htmlFor="direct-link" className="form-label">Direct link <span className="badge bg-success copied-clip direct-link d-none ms-2">Copied to clipboard !</span></label>
                        <div className="input-group mb-3">
                            <input id="direct-link" type="text" className="form-control" aria-describedby="copy-addon-dl" defaultValue={imgUrl} />
                            <span  id="copy-addon-dl"  className="copy-addon input-group-text" onClick={e => this.handleCopyClipboard(e, 'direct-link')}><i className="far fa-copy"></i></span>              
                        </div>
                        <label htmlFor="html-link" className="form-label">HTML link <span className="badge bg-success copied-clip html-link d-none ms-2">Copied to clipboard !</span></label>
                        <div className="input-group mb-3">
                            <input id="html-link" type="text" className="form-control" aria-describedby="copy-addon-hl" defaultValue={html} />
                            <span id="copy-addon-hl" className="copy-addon input-group-text" onClick={e => this.handleCopyClipboard(e, 'html-link')}><i className="far fa-copy"></i></span>
                        </div>
                        <label htmlFor="bbcode-link" className="form-label">BBCode link <span className="badge bg-success copied-clip bbcode-link d-none ms-2">Copied to clipboard !</span></label>
                        <div className="input-group mb-3">
                            <input id="bbcode-link" type="text" className="form-control" aria-describedby="copy-addon-bbl" defaultValue={bbcode} />
                            <span id="copy-addon-bbl" className="copy-addon input-group-text" onClick={e => this.handleCopyClipboard(e, 'bbcode-link')}><i className="far fa-copy"></i></span>
                        </div>
                        <label htmlFor="markdown-link" className="form-label">Markdown <span className="badge bg-success copied-clip markdown-link d-none ms-2">Copied to clipboard !</span></label>
                        <div className="input-group mb-5">
                            <input id="markdown-link" type="text" className="form-control" aria-describedby="copy-addon-ml" defaultValue={markdown} />
                            <span id="copy-addon-ml" className="copy-addon input-group-text" onClick={e => this.handleCopyClipboard(e, 'markdown-link')}><i className="far fa-copy"></i></span>
                        </div>
                        <div className="d-grid mb-2">
                            <a href="/" className="btn btn-danger btn-lg"><i className="fas fa-undo"></i> New upload</a>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default FileInfo;
