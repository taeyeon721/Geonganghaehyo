package com.example.main.SetTop.controller;

import com.example.main.Manager.controller.request.LoginManagerRequest;
import com.example.main.Manager.controller.response.TokenResponse;
import com.example.main.Manager.dto.Auth;
import com.example.main.Manager.dto.TokensDto;
import com.example.main.SetTop.controller.request.LoginSetTopRequest;
import com.example.main.SetTop.controller.request.RegisterSetTopRequest;
import com.example.main.SetTop.dto.SetTop;
import com.example.main.SetTop.dto.SetTopTokensDto;
import com.example.main.SetTop.service.SetTopService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.UUID;


@RestController
@RequestMapping("set-top")
@RequiredArgsConstructor
public class SetTopController {
    private final SetTopService setTopService;

    private void setToken(HttpServletResponse response, SetTopTokensDto tokens) {
        ResponseCookie cookie = ResponseCookie.from("refreshToken", tokens.getRefreshToken())
                .maxAge(26784000)
                .path("/")
                .secure(false)
                .httpOnly(true)
                .build();

        response.setHeader("Set-Cookie", cookie.toString());
    }

    @PostMapping("update")
    public ResponseEntity<?> update(@AuthenticationPrincipal Auth auth, @RequestBody RegisterSetTopRequest setTop) {
        if(auth.getRole().label() != "ADMIN"){  // 관리자 권한이 아니면 셋탑 등록 불가함
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("관리자 권한이 아닙니다.");
        } else{
            UUID setTopId = UUID.randomUUID();
            int check = setTopService.register(new SetTop(setTop.getSetTopID(), setTop.getName(), setTop.getTelNo(), auth.getEmail()));
            if (check == 1) return ResponseEntity.ok("새 셋탑박스 정보를 등록하였습니다.");
            else{
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("정보 등록에 실패하였습니다.");
            }
        }
    }

    @PostMapping("login")
    public ResponseEntity<?> setTopLogin(@RequestBody LoginSetTopRequest setTop, HttpServletResponse response) throws Exception {
        SetTopTokensDto tokens = setTopService.setTopLogin(setTop);
        if (tokens != null) {
            setToken(response, tokens);
            return ResponseEntity.ok(new TokenResponse(setTop.getSetTopId() + "기기가 접속했습니다", tokens.getAccessToken()));
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("로그인을 실패하였습니다.");
        }
    }
}
