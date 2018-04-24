import React from 'react';
import marked from 'marked';
class TextPreview extends React.Component{
	constructor(props){
		super(props);
	}
	createMarkup = (someText) => {
		let markdown = marked(someText)
		return {__html: markdown}
	}
	render(){
		return(
			<div dangerouslySetInnerHTML={this.createMarkup(this.props.value)} />
			)
	}
}

export default TextPreview;