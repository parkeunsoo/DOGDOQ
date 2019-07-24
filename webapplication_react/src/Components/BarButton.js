import React,{Component} from 'react';
import '../CSS/BarButton.css'
class BarButton extends Component{
  render(){
    return (
      <div className="BarbuttonBlock">
        <div id="barbutton" onClick={this.props.onClick}><small id="barbuttontext">{this.props.value}</small></div>
      </div>
    ); 
  }
}

export default BarButton;
