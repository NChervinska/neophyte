import React from "react";
import {refresh} from '../client/auth_api';
import { postImage } from "../client/ii_api";
import {useState} from 'react';

const ScreenCaptureContent = () => {

    const token = localStorage.getItem("token");
    const isAuth = token != null;
    

    const [id, setId] = useState('');


            window.addEventListener('load', startup, false);
            var width = 600;   
            var height = 600;    
          
            var streaming = false;
          
            var video = null;
            var canvas = null;
            var timerId = 0;


            function startup() {
              video = document.getElementById('video');
              canvas = document.getElementById('canvas');
        
              navigator.mediaDevices.getDisplayMedia({video: true, audio: false})
              .then(function(stream) {
                video.srcObject = stream;
                video.play();
                video.addEventListener('canplay', function(ev){
                if (!streaming) {
                  height = video.videoHeight / (video.videoWidth/width);
                
                
                  if (isNaN(height)) {
                    height = width / (4/3);
                  }
                
                  video.setAttribute('width', width);
                  video.setAttribute('height', height);
                  canvas.setAttribute('width', width);
                  canvas.setAttribute('height', height);
                  streaming = true;
                }
              }, false);
              })
              .catch(function(err) {
                console.log("An error occurred: " + err);
              });
        
              clearphoto();
            }
          
            function stop(){
              let tracks = video.srcObject.getTracks();

              tracks.forEach(track => track.stop());
              video.srcObject = null;
            }
          
            function clearphoto() {
              var context = canvas.getContext('2d');
              context.fillStyle = "#AAA";
              context.fillRect(0, 0, canvas.width, canvas.height);
          
              var data = canvas.toDataURL('image/png');
            }
            
          
            function takepicture() {
              var context = canvas.getContext('2d');
              if (width && height) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
              
                var data = canvas.toDataURL('image/png');
                async function getData() {
                  const response = await refresh();
                  await postImage(id, data.replace(/^data:image\/(png|jpg);base64,/, ""), video.videoWidth, video.videoHeight, response.data.access);
              } 
              getData();
              } else {
                clearphoto();
              }
            }
            
        

    return (
        (isAuth &&<div>

          
<input type="number" value={id} onChange={(event) => setId(event.target.value)} />


            <h1>Interview screen capturing</h1>
            <div>
            <button id="startbutton" className="gradient-button" 
                onClick={(ev) => {window.location.reload();}}>Start Capture
            </button>
            <button className="gradient-button" onClick={(ev) => {
                    stop();
                }}>Stop Capture
            </button>
            </div>
            

            <div>
                <button className="gradient-button" onClick={(ev) => {
                      timerId = setInterval(() => takepicture(), 1000);
                  }}>Start Photo
                </button>
                <button id="cancelbutton" className="gradient-button" onClick={(ev) => {
                    clearInterval(timerId);
                  }}>Stop Photo
                </button>

                <div className="camera">
                <video id="video">Video stream not available.</video>
                </div>
                <canvas id="canvas"></canvas>
            </div>
        </div>)
    );
}

export default ScreenCaptureContent;
