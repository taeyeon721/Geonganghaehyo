// pages 라우터를 관리하기 위한 index
// index.js를 통해 router을 관리하면, App.js의 코드가 간결해진다.
// 참고문서: https://developer-talk.tistory.com/139

// 없는 페이지 들어가면 404 출력 > 추후 추가 예정

import Welcome from "./user/Welcome.js"
import Login from "./user/Login.js" 
import Main from "./user/Main.js"
import ChooseMusic from "./karaoke/ChooseMusic.js"
import PlayMusic from "./karaoke/PlayMusic.js"
import Quiz from "./quiz/Quiz.js" 
import QuizLobby from "./quiz/QuizLobby.js"
import QuizResult from "./quiz/QuizResult.js"
import SelectGym from "./gym/SelectGym.js"
import Gym from "./gym/Gym.js"
import Message from "./message/Message.js"
import Notfound from "./user/Notfound.js"

export { Welcome, Login, Main, ChooseMusic, PlayMusic, Quiz, QuizLobby, QuizResult, SelectGym, Gym, Message,  Notfound } ;
// object 형식으로 export 한다.


