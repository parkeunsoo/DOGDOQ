import React,{Component} from 'react';
import LoginForm from '../Components/LoginForm';
import '../CSS/LoginScreen.css'
class LoginScreen extends Component{
  render(){
    return (
      <div className="LoginScreen">
        <div id="Top"></div>
        <div id="Bottom"></div>
        <LoginForm></LoginForm>
      </div>
    ); 
  }
}

 
export default LoginScreen;
