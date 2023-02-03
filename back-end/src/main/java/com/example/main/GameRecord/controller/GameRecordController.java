package com.example.main.GameRecord.controller;

import com.example.main.GameRecord.controller.request.RegisterGameRecordRequest;
import com.example.main.GameRecord.dto.GameRecord;
import com.example.main.GameRecord.service.GameRecordService;
import com.example.main.Manager.dto.Auth;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("game")
public class GameRecordController {

    final static Logger logger = LogManager.getLogger(GameRecordController.class);
    @Autowired
    private GameRecordService gameRecordService;

    @PostMapping("{gameName}/record")
    public ResponseEntity<String> recordScore(@AuthenticationPrincipal Auth auth, @PathVariable(value="gameName") String gameName, @RequestBody RegisterGameRecordRequest gameRecord){
        logger.info("recordScore called");
        GameRecord rec = new GameRecord(auth.getEmail(), gameName, gameRecord.getGameScore(), LocalDateTime.now());
        System.out.println(rec.toString());
        int check = gameRecordService.recordScore(rec);
        if (check > 0) {
            return ResponseEntity.ok("게임기록 등록을 성공하였습니다.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("회원가입을 실패하였습니다.");
        }
    }

    @PostMapping("{gameName}/getLatestScore")
    public int lastScore(@PathVariable(value="gameName") String gameName, @AuthenticationPrincipal Auth auth){
        logger.info("lastScore called");
        int res = gameRecordService.lastScore(gameName, auth.getEmail());
        return res;
    }
}
