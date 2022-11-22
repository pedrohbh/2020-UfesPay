import React from 'react';
import ReactDOM from 'react-dom';

class createacc extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {name : "", email : "", password : "", repeatPassword : ""};		
	}

	
	handleSubmit() 
	{
		//TODO To be implemented
	}
	
	
	render() {  
      return (
        <div>
   
   <form>
   <TextField id="TextField"/><TextField id="TextField"/><TextField id="TextField"/><TextField id="TextField"/>
	
	
	<button onClick="handleSubmit">handleSubmit</button>
	
	</form></div>
      );
    }
  }

}
