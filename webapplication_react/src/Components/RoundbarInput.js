import React,{Component} from 'react';
import '../CSS/RoundbarInput.css';
class RoundbarInput extends Component{
  render(){
    return (
      <div className="InputBlock">
        <input id="input" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}></input>
      </div>
    ); 
  }
}
//type은 email과 password
//name은 InputEmail 과 InputPassword
//place holder은 Email과 Password
 
export default RoundbarInput;
