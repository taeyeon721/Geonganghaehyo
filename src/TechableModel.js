import React, {useEffect, useRef} from "react";
import styled from "styled-components"; 
import * as tmPose from '@teachablemachine/pose';


const URL = 'https://teachablemachine.withgoogle.com/models/vXTImU8Sw/';

let model, webcam, ctx, labelContainer, maxPredictions;
let maxval = -1;
let result = "";

function TeachableModel() {

    async function init() {
        const modelURL = URL + "model.json"; 
        const metadataURL = URL + "metadata.json";

        model = await tmPose.load(modelURL, metadataURL); // 모델 불러오기
        maxPredictions = model.getTotalClasses(); // 클래스 이름 받아오기

        // 웹캠 조정하기
        const size = 500;
        const flip = true; // whether to flip the webcam
        webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
        await webcam.setup(); // 웹캠에 접근하기
        await webcam.play(); // 웹캠 play 하기
        window.requestAnimationFrame(loop); // 계속해서 프레임을 송출하기 위함

        // append/get elements to the DOM

        const canvas = document.getElementById("canvas");

        canvas.width = size;
        canvas.height = size;
        
        ctx = await canvas.getContext("2d");
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { 
            labelContainer.appendChild(document.createElement("div"));
        }

    }

    async function loop(timestamp) {
        await webcam.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
    }

    async function predict() {
        // 자세 추정하기
        const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
        const prediction = await model.predict(posenetOutput);

        for (let i = 0; i < maxPredictions; i++) {
            // 추정한 자세와 정확도 나타내기
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }

        drawPose(pose); // 웹캠에 자세 skeleton 그리기
        calcValue(prediction); // calcValue로 값 넘기기
    }
    
 
    function drawPose(pose) {
        if (webcam.canvas) {
            ctx.drawImage(webcam.canvas, 0, 0);
            // draw the keypoints and skeleton
            if (pose) {
                const minPartConfidence = 0.5;
                tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
            }
        }
    }

    function calcValue(prediction) {

        for(let i = 0; i < maxPredictions; i++) {
            if (maxval < prediction[i].probability.toFixed(2)) {
                maxval = prediction[i].probability.toFixed(2);
                result = prediction[i].className;
            }
        }
        
        console.log(result);
    }

    return(
        <>
        <StartBtn onClick={() => init()}>start</StartBtn>
        <div><Canvas id="canvas"></Canvas></div>
        <Label id="label-container"></Label>
        </>
    )
}

const StartBtn = styled.button`
    width: 500px;
    height: 200px;
`

const Canvas = styled.canvas``

const Label = styled.div``

export default TeachableModel;