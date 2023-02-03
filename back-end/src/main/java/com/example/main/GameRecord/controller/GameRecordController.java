package com.example.main.GameRecord.controller;

import com.example.main.GameRecord.dao.GameRecordMapper;
import com.example.main.GameRecord.dto.GameRecordDto;
import com.example.main.GameRecord.service.GameRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/game")
public class GameRecordController {

    @Autowired
    private GameRecordService gameRecordService;

    @PostMapping("/score/{gameName}")
    public ResponseEntity<String> insertScore(@AuthenticationPrincipal Auth auth, @RequestBody GameRecordDto gameRecordDto){

    }

}
