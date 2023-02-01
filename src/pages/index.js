// pages 라우터를 관리하기 위한 index
// index.js를 통해 router을 관리하면, App.js의 코드가 간결해진다.
// 참고문서: https://developer-talk.tistory.com/139

// 없는 페이지 들어가면 404 출력 > 추후 추가 예정

import Game from "./Game.js" 
import Main from "./Main.js" 
import GameLobby from "./GameLobby.js"
import GameResult from "./GameResult.js"
import SelectGame from "./SelectGame.js"
import Notfound from "./Notfound.js"

export { Main, GameLobby, GameResult, SelectGame, Game, Notfound } ;
// object 형식으로 export 한다.


