import React from 'react';
import ReactDOM from 'react-dom';

class menuitem extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {whereTo : "", leftIcon : "", rightIcon : ""};		
	}

	
	
	render() {  
      return (
        <div><a href={whereTo}></a><span id="leftIcon">{{ leftIcon }}</span><span id="rightIcon">{{ rightIcon }}</span></div>
      );
    }
  }

}
