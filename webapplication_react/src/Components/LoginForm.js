import React,{Component} from 'react';
import TextButton from '../Components/TextButton';
import BarButton from '../Components/BarButton';
import CheckboxText from '../Components/CheckboxText'
import LoginInfo from '../Components/LoginInfo'
import '../CSS/LoginForm.css';
class LoginForm extends Component{
  _ClickLogin(){
    alert("로그인 서비스 준비중")
  }
  _ClickSignup(){
    alert("회원가입 서비스 준비중")
  }
  _ClickFindID(){
    alert("아이디 찾기 서비스 준비중")
  }
  _ClickFindPassword(){
    alert("비밀번호 찾기 서비스 준비중")
  }
  render(){
    return (
      <div className="LoginForm">
        <div id="header">
            <img  src={require('../Images/logo.png')} width="350px"height="350px" alt="No Image"></img>
            <small id="headertext">프라이빗 블록체인 기반 반려동물 분양시스템</small>
        </div>
        <LoginInfo></LoginInfo>
        <div id="login">
          <BarButton type="submit" value="로그인" onClick={()=>this._ClickLogin()}></BarButton>
        </div>
        <div className="textbutton">
          <CheckboxText id="checkboxtext" text="자동로그인"></CheckboxText>
          <div id="findinfo">
            <TextButton value="아이디찾기" onClick={()=>this._ClickFindID()}></TextButton>
            <hr id="vertical"></hr>
            <TextButton value="비밀번호찾기" onClick={()=>this._ClickFindPassword()}></TextButton>
          </div>
        </div>
        <div id="tail">
            <hr id="horizental"></hr>
            <small id="suggesttext">'DOGDOQ 서비스를 시작해보시겠어요?'</small>
        </div>
        <div id="signup">
            <BarButton type="submit" value="회원가입" onClick={()=>this._ClickSignup()}></BarButton>
        </div>
      </div>
    ); 
  }
}

 
export default LoginForm;
