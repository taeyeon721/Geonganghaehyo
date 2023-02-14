import axios from "axios";

const LoginSelect = () => {
   const msg = new SpeechSynthesisUtterance()

   const speechHandler = (msg) => {
     msg.text = "할머니 사랑해요 천년만년 사세요"
     window.speechSynthesis.speak(msg)
   }
 
   return (
     <div>
       <h1>React Text to Speech App</h1>
       <button onClick={() => speechHandler(msg)}>SPEAK</button>
     </div>
   )
 
};

export default LoginSelect;
