const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY5RUUzRjFiNjg4MDEyNDczQkY2MTIzQWM0QjA5MDQyNGVENmRFRDYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTIzNTc3NzgyNzMsIm5hbWUiOiJXZWIzIGltYWdlIGhvc3RpbmcifQ.i_1AXJWcdNRsYYPMPxu4PG7lim5EHPxzoQV4TM5OVLo';
const ENDPOINT = 'https://api.web3.storage/upload';

function uploadFile(file, uploadProgress) {
    
    return new Promise((resolve, reject) => {

        let onRequestCompleted = function (e) {
            let response = JSON.parse(e.currentTarget.responseText);
            resolve(response.cid);
        };

        let onUploadProgress = function (e) {
            const percentage = Math.round((e.loaded * 100) / e.total);
            uploadProgress(percentage);
        };
    
        let onError = function (e) {
            console.error('API Error', e);
            reject(e);
        };

        let xhr = new XMLHttpRequest();
        xhr.open("POST", ENDPOINT);
        xhr.setRequestHeader('Authorization', 'Bearer ' + TOKEN);	
        xhr.setRequestHeader('X-NAME', encodeURIComponent(file.name));	
        xhr.addEventListener('load', onRequestCompleted);
        xhr.addEventListener('error', onError);
        xhr.upload.addEventListener('progress', onUploadProgress);
        xhr.upload.addEventListener('error', onError);
        xhr.send(file);
    });
}

export default uploadFile;

