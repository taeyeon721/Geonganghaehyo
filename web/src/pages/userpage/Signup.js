import Note from "components/note";

const Signup = () => {
  return (
    <>
      <Note>
        <form action="" method="POST">
          <span>
            <h3>이름</h3>
            <input type="text" name="id" placeholder="id를 입력하세요" />
          </span>
          <span>
            <h3>생년월일</h3>
            <input type="text" name="" placeholder="생년월일" />
          </span>
          <br />
          <span>
            <h3>PW</h3>
            <input
              type="text"
              name="password"
              placeholder="비밀 번호를 입력하세요"
            />
          </span>
          <span>
            <h3>PW확인</h3>
            <input
              type="text"
              name="passwordcheck"
              placeholder="비밀 번호를 입력하세요"
            />
          </span>
          <span>
            <h3>Email</h3>
            <input
              type="text"
              name="email"
              placeholder="비밀 번호를 입력하세요"
            />
            <button></button>
          </span>
          <br />
          <button> 회원가입 </button>
        </form>
      </Note>
    </>
  );
};

export default Signup;
