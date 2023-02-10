// pages 라우터를 관리하기 위한 index
// index.js를 통해 router을 관리하면, App.js의 코드가 간결해진다.
// 참고문서: https://developer-talk.tistory.com/139

// 없는 페이지 들어가면 404 출력 > 추후 추가 예정

import Welcome from "./user/Welcome.js"
import Game from "./user/Game.js" 
import Main from "./user/Main.js"
import Login from "./user/Login.js" 
import GameLobby from "./user/GameLobby.js"
import GameResult from "./user/GameResult.js"
import SelectGame from "./user/SelectGame.js"
import SelectGym from "./user/SelectGym.js"
import Gym from "./user/Gym.js"
import Message from "./user/Message.js"
import Notfound from "./user/Notfound.js"

export { Welcome, Main, Message, GameLobby, GameResult, SelectGame, Game, SelectGym, Gym, Login, Notfound } ;
// object 형식으로 export 한다.


