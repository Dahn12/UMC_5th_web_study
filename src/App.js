import logo from './logo.svg';
import './App.css';

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
            </div>
            <div className='signin'>
                <label for='name'>닉네임</label>
                <input type='text' name='nickname' id='nickname' autoComplete='off'></input>
            </div>
            <div className='signin'>
                <label for='name'>이메일</label>
                <input type='text' name='emailadd' id='emailadd' autoComplete='off'></input>
            </div>
            <div className='signin'>
                <label for='name'>비밀번호</label>
                <input type='text' name='password' id='password' autoComplete='off'></input>
            </div>
            <div className='signin'>
                <label for='name'>비밀번호 확인</label>
                <input type='text' name='checkpsw' id='checkpsw' autoComplete='off'></input>
            </div>
            <div class="btn">
              <button type='submit'>가입하기</button>
            </div>
          </form>
          </div>
      </section>
    </div>
  );
}

export default App;
