package com.example.main.GymRecord.controller;

import com.example.main.GymRecord.dto.GymRecord;
import com.example.main.GymRecord.service.GymRecordService;
import com.example.main.Manager.dto.Auth;
import lombok.RequiredArgsConstructor;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController
@RequestMapping("gym")
@RequiredArgsConstructor
public class GymRecordController {

    final static Logger logger = LogManager.getLogger(GymRecordController.class);

    private final GymRecordService gymRecordService;

    @PostMapping("{gymName}/record")
    public ResponseEntity<String> insertWorkout(@AuthenticationPrincipal Auth auth, @PathVariable(value = "gymName") String gymName){
        logger.info("insertWorkout called");
        GymRecord rec = new GymRecord(auth.getEmail(), gymName, LocalDateTime.now());
        System.out.println(rec);
        int check = gymRecordService.insertWorkout(rec);
        if (check > 0) {
            return ResponseEntity.ok("현재시간으로 체조 기록이 등록되었습니다");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("저장 실패");
        }
    }

    @PostMapping("{gymName}/daily")
    public int dailyWorkout(@AuthenticationPrincipal Auth auth, @PathVariable(value = "gymName") String gymName){
        logger.info("dailyWorkout called");
        int res = gymRecordService.dailyWorkout(auth.getEmail(), gymName, LocalDateTime.now());
        return res;
    }
}
