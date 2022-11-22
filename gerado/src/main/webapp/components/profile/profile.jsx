import React from 'react';
import ReactDOM from 'react-dom';

export default function profile(props) {

	
	saveProfileChanges() 
	{
		//TODO To be implemented
	}
	
	handleCancel() 
	{
		//TODO To be implemented
	}
	
	setEdit() 
	{
		//TODO To be implemented
	}
	
	
	render() {  
      return (
        <div><Avatar ></Avatar><h3 id="user.name">{{ user.name }}</h3><h3 id="user.email">{{ user.email }}</h3><h1 id="user.wallet.balance">{{ user.wallet.balance }}</h1>
   
   <form>
   <TextField id="TextField"/><TextField id="TextField"/><TextField id="TextField"/><TextField id="TextField"/><TextField id="TextField"/>
	
	
	<button onClick="saveProfileChanges">saveProfileChanges</button>
	
	<button onClick="handleCancel">handleCancel</button>
	
	<button onClick="setEdit">setEdit</button>
	
	</form></div>
      );
    }
  }

}
