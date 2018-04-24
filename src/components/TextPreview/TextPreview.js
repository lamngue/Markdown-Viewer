import React from 'react';
import './TextPreview.css'
class TextPreview extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<form>
					<textarea className ="input form center pa4 br3 shadow-5" 
					value={this.props.value} 
					onChange={this.props.change} rows="100" />
				</form>
			</div>
			)
	}
}

export default TextPreview;