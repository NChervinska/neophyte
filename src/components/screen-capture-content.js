import React from "react";
import {refresh} from '../client/auth_api';
import {getVacancies} from '../client/vacancy_api';

const ScreenCaptureContent = () => {

    const token = localStorage.getItem("token");
    const isAuth = token != null;
    
            window.addEventListener('load', startup, false);
            var width = 600;   
            var height = 0;    
          
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
          
          
            function clearphoto() {
              var context = canvas.getContext('2d');
              context.fillStyle = "#AAA";
              context.fillRect(0, 0, canvas.width, canvas.height);
          
              var data = canvas.toDataURL('image/png');
            }
            
          
            function takepicture() {
              var context = canvas.getContext('2d');
              if (width && height) {
                canvas.width = width;
                canvas.height = height;
                context.drawImage(video, 0, 0, width, height);
              
                var data = canvas.toDataURL('image/png');
                // отправка на сервер
              } else {
                clearphoto();
              }
            }
            
        


    return (
        (isAuth &&<div>
            <h1>Interview screen capturing</h1>
            <div>
                <button id="startbutton" className="gradient-button" onClick={(ev) => {
                    timerId = setInterval(() => takepicture(), 1000);
                    ev.preventDefault();
                }}>Start</button>
                <button id="cancelbutton" className="gradient-button" onClick={(ev) => {
                    clearInterval(timerId);
                    window.removeEventListener('canplay', startup, false);
                    ev.preventDefault();
                }}>Cancel</button>
                <div className="camera">
                <video id="video">Video stream not available.</video>
                </div>
                <canvas id="canvas"> 
                </canvas>
            </div>
        </div>)
    );
}

export default ScreenCaptureContent;
