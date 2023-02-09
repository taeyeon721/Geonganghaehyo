package com.example.main.SetTop.controller;

import com.example.main.Manager.dto.Auth;
import com.example.main.Message.controller.request.RegisterMsg;
import com.example.main.Message.dto.Message;
import com.example.main.SetTop.service.SetTopService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("set-top")
@RequiredArgsConstructor
public class SetTopController {
    private final SetTopService setTopService;
}
