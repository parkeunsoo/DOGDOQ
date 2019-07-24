import React,{Component} from 'react';
import '../CSS/TextButton.css'
class TextButton extends Component{
  render(){
    return (
      <div>
        <button id="textbutton" type="button" onClick={this.props.onClick}><small id="textbuttontext">{this.props.value}</small></button>
      </div>
    ); 
  }
}
//type은  text 
//value은 아이디찾기는 아이디찾기 비밀번호찾기는 비밀번호찾기
export default TextButton;
