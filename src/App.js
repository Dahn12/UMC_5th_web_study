import './App.css';
import './modal.js';



function App() {
  return (
    <div className="App">
      <section>
        <div class='sign-box'>
          <form action=''>
            <h1>회원가입</h1>
            <hr/>
            <div className='signin'>
                <label for='name'>이름</label>
                <input type='text' name='name' id='name' autoComplete='off'></input>
                <div class ='success-name hide sfont'>멋진 이름이네요!</div>
                <div class = 'failure-name hide ffont'>필수 입력 항목입니다!</div>
            </div>
            <div className='signin'>
                <label for='nickname'>닉네임</label>
                <input type='text' name='' id='nickname' autoComplete='off'></input>
                <div class ='success-nickname hide sfont'>멋진 닉네임이군요!</div>
                <div class = 'failure-nickname hide ffont'>닉네임은 2~5글자로 구성해주세요!</div>
            </div>
            <div className='signin'>
                <label for='emailadd'>이메일</label>
                <input type='text' name='emailadd' id='emailadd' autoComplete='off'></input>
                <div class ='success-emailadd hide sfont'>올바른 메일 형식입니다!</div>
                <div class = 'failure-emailadd hide ffont'>올바른 메일 형식이 아닙니다!</div>
            </div>
            <div className='signin'>
                <label for='password'>비밀번호</label>
                <input type='text' name='password' id='password' autoComplete='off'></input>
                <div class ='success-password hide sfont'>안전한 비밀번호입니다!</div>
                <div class = 'failure-password hide ffont'>영어 + 숫자 + 특수문자를 조합하여 작성해주세요.</div>
            </div>
            <div className='signin'>
                <label for='checkpsw'>비밀번호 확인</label>
                <input type='text' name='checkpsw' id='checkpsw' autoComplete='off'></input>
                <div class ='success-checkpsw hide sfont'>비밀번호가 일치합니다</div>
                <div class = 'failure-checkpsw hide ffont'>비밀번호가 일치하지 않습니다.</div>
            </div>
            <div class="btn">
              <button type='submit' class="submit-btn">가입하기</button>
            </div>
          </form>

          <div class='modal-box'>
            <div class="modal">
              <div class="modal-title">가입 성공!</div>
              <p>umc 챌린저 가입을 축하합니다!!</p>
              <div class="modal-close">
                <button>닫기</button>
              </div>
            </div>
          </div>



          </div>
      </section>
    </div>
  );
}

export default App;
