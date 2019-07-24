import React,{Component} from 'react';
import RoundbarInput from'./RoundbarInput';
import '../CSS/LoginInfo.css';
class LoginInfo extends Component{
  render(){
    return (
      <div className="InfoBlock">
         <RoundbarInput type="email" placeholder="Email" name="InputEmail"></RoundbarInput>
         <hr id="line"></hr>
         <RoundbarInput type="password" placeholder="Password" name="InputPassword"></RoundbarInput>
      </div>
    ); 
  }
}
 
export default LoginInfo;
