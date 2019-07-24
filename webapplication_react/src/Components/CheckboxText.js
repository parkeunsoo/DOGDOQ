import React,{Component} from 'react';
import '../CSS/CheckboxText.css';
class CheckboxText extends Component{
  render(){
    return (
      <div className="CheckboxText">
        <input type="checkbox"/><small id="checkboxtext">{this.props.text}</small>
      </div>
    ); 
  }
}

//text는 checkbox 뒤에 들어갈 문자 
 
export default CheckboxText;
