// 로그인을 하는 페이지
// react에서 form 태그 사용할 수 있는지 알아볼 것
// 추후 내 MM으로 보낸 링크 활용하여 로그인 기능 있는 페이지 구현,
// css 손볼 것.

import Note from "components/note";

const Login = () => {
  return (
    <>
      <div>건강해효</div>

      <Note>
        <div>
          <form action="" method="POST">
            <span>
              <h3>아이디</h3>
              <input type="text" name="id" placeholder="id를 입력하세요" />
            </span>
            <span>
              <h3>패스워드</h3>
              <input
                type="text"
                name="password"
                placeholder="비밀 번호를 입력하세요"
              />
            </span>
            <br />
            <span>
              {/* <a href="#">회원가입</a>
              <a href="#">ID/비밀번호 찾기</a> */}
            </span>
            <button> 로그인 </button>
          </form>
        </div>
      </Note>
    </>
  );
};

export default Login;
