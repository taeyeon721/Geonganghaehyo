package com.example.main.Manager.controller;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.example.main.Manager.controller.request.InfoManagerRequest;
import com.example.main.Manager.controller.request.LoginManagerRequest;
import com.example.main.Manager.controller.request.RegisterManagerRequest;
import com.example.main.Manager.controller.response.TokenResponse;
import com.example.main.Manager.dto.Auth;
import com.example.main.Manager.dto.Manager;
import com.example.main.Manager.dto.ROLE;
import com.example.main.Manager.dto.TokensDto;
import com.example.main.Manager.service.ManagerService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("manager")
public class ManagerController {
	final static Logger logger = LogManager.getLogger(ManagerController.class);
	@Autowired
	private ManagerService managerService;
//	@Autowired
//	private MailService mailService;

//	@PostMapping("/verifyRecaptcha")
//	public int VerifyRecaptcha(HttpServletRequest request) {
//		VerifyRecaptcha.setSecretKey("6LeWkCUjAAAAAD3kdVcTxIzqR9OmSEQX_-_EhFdx");
//		String gRecaptchaResponse = request.getParameter("recaptcha");
//		try {
//			if (VerifyRecaptcha.verify(gRecaptchaResponse))
//				return 0; // 성공
//			else
//				return 1; // 실패
//		} catch (Exception e) {
//			e.printStackTrace();
//			return -1; // 에러
//		}
//	}

	// 값 입력할 때 꼭 @RequestBody 붙이기 !!!!!
	@PostMapping("register")
	public ResponseEntity<String> register(@RequestBody RegisterManagerRequest manager) throws Exception {
		logger.info("ManagerController called");
		// 아이디 확인 
//		Pattern idPattern = Pattern.compile("^[A-Za-z[0-9]]{5,15}$");
	    Pattern emPattern = Pattern.compile("^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$");
	    Pattern pwPattern = Pattern.compile("^(?=.*[a-zA-Z])(?=.*\\d)(?=.*\\W).{8,20}$");
	    Matcher emMatcher = emPattern.matcher(manager.getEmail());
	    Matcher pwMatcher = pwPattern.matcher(manager.getPassword());

	    if (!emMatcher.find() || !pwMatcher.find()) {
	    	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("양식에 맞지 않습니다.");
	    }

	    int check = managerService.register(new Manager(manager.getEmail(), manager.getPassword(), manager.getName(), ROLE.MANAGER));
	    if (check > 0) {
	    	return ResponseEntity.ok("회원가입을 성공하였습니다.");
	    } else {
	    	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("회원가입을 실패하였습니다.");
	    }

	}
	
	@PostMapping("idCheck")
	public ResponseEntity<String> idCheck(@RequestBody Map<String, String> map) throws Exception {
		String userId = map.get("userId");
		
		Pattern idPattern = Pattern.compile("^[A-Za-z[0-9]]{3,15}$");
		Matcher idMatcher = idPattern.matcher(userId);
		if (!idMatcher.find()) {
	    	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("양식에 맞지 않습니다.");
	    }
		
		int check = managerService.emailCheck(userId);
		if (check == 0) return ResponseEntity.ok("아이디 사용가능합니다.");
		else return ResponseEntity.ok("아이디 중복입니다.");
	}
	
	@PostMapping("emailCheck")
	public ResponseEntity<String> emailCheck(@RequestBody Map<String, String> map) throws Exception {
		String email = map.get("email");
		
		Pattern emPattern = Pattern.compile("^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\\w+\\.)+\\w+$");
	    Matcher emMatcher = emPattern.matcher(email);

	    if (!emMatcher.find()) {
	    	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("양식에 맞지 않습니다.");
	    }
	    
		int check = managerService.emailCheck(email);
		if (check == 0) return ResponseEntity.ok("이메일 사용가능합니다.");
		else return ResponseEntity.ok("이메일 중복입니다.");
	}
	
	@PostMapping("login")
	public ResponseEntity<?> login(@RequestBody LoginManagerRequest manager, HttpServletResponse response) throws Exception {
		TokensDto tokens = managerService.login(manager);
		if (tokens != null) {
			setToken(response, tokens);
			return ResponseEntity.ok(new TokenResponse(manager.getEmail() + "님 환영합니다.", tokens.getAccessToken()));
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("로그인을 실패하였습니다.");
		}
	}
	
//    @GetMapping("klogin")
//    public ResponseEntity<?> kakaoAuthRequest(@RequestParam("token") String kakaoAccessToken, HttpServletResponse response) {
//        TokensDto tokens = userService.login(kakaoAccessToken);
//        if (tokens != null) {
//			setToken(response, tokens);
//			return ResponseEntity.ok(new TokenResponse("환영합니다.", tokens.getAccessToken()));
//		} else {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("로그인을 실패하였습니다.");
//		}
//    }
    
	@GetMapping("logout")
	public ResponseEntity<?> logout(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session != null) {
			session.invalidate();
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인이 되어있지 않습니다.");
		}
	}
	
	@GetMapping("mypage")
	public ResponseEntity<?> info(@AuthenticationPrincipal Auth auth) {
		Manager manager = managerService.get(auth.getId());
		return ResponseEntity.ok(new InfoManagerRequest(manager.getEmail(), manager.getPassword(), manager.getName()));
	}
	
	@PostMapping("update")
	public ResponseEntity<?> update(@AuthenticationPrincipal Auth auth, @RequestBody RegisterManagerRequest manager) {
		int check = managerService.update(new Manager(auth.getEmail(), manager.getPassword(), manager.getName()));
		System.out.println(check);
		if (check == 1) return ResponseEntity.ok("회원 정보를 수정하였습니다.");
		else return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("회원 정보 수정에 실패하였습니다.");

	}
	
	@GetMapping("withdraw")
	public ResponseEntity<?> withdraw(@AuthenticationPrincipal Auth auth, HttpServletRequest request) {
		managerService.delete(auth.getEmail());

		Cookie[] cookies = request.getCookies();
		if(cookies!=null)
		for (int i = 0; i < cookies.length; i++) {
			cookies[i].setMaxAge(0);
		}
		
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping("checkPassword")
	public ResponseEntity<?> checkPassword(@AuthenticationPrincipal Auth auth, @RequestBody Map<String, String> password) {
		boolean check = managerService.checkPassword(password.get("password"), auth.getId());
		if (check) return ResponseEntity.ok("비밀번호가 일치합니다.");
		else return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("비밀번호가 일치하지 않습니다.");
	}
	
	// 이메일 인증 
//	@PostMapping("mailConfirm")
//	public String mailConfirm(@RequestParam("email") String email) throws Exception {
//		System.out.println(email);
//		String code = mailService.sendSimpleMessage(email);
//		return code;
//	}
	
	// 비밀번호 찾기 - 임시 비밀번호
	
	private void setToken(HttpServletResponse response, TokensDto tokens) {
		ResponseCookie cookie = ResponseCookie.from("refreshToken", tokens.getRefreshToken())
                .maxAge(1209600000)
                .path("/")
                .secure(false)
                .httpOnly(true)
                .build();

        response.setHeader("Set-Cookie", cookie.toString());
	}
	
	/* 권한 */
	@GetMapping("isAdmin")
	public boolean isAdmin(@AuthenticationPrincipal Auth auth) throws Exception {
		System.out.println(auth.getId() + " ");
		if (auth.getRole() == ROLE.ADMIN) return true;
		else return false;
	}
	
//	@GetMapping("isBroker")
//	public boolean isBroker(@AuthenticationPrincipal Auth auth) throws Exception {
//		if (auth.getRole() == ROLE.BROKER) return true;
//		else return false;
//	}
}
