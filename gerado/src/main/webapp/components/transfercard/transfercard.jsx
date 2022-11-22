import React from 'react';
import ReactDOM from 'react-dom';

export default function transfercard(props) {

	
	handleComment() 
	{
		//TODO To be implemented
	}
	
	
	render() {  
      return (
        <div><CardHeader ></CardHeader><CardContent ></CardContent><Typography ></Typography><Typography ></Typography><CardActions ></CardActions><p id="likesNumber">{{ likesNumber }}</p><IconButton ></IconButton><FavoriteIcon ></FavoriteIcon><p id="transac.comments.length">{{ transac.comments.length }}</p><IconButton ></IconButton><ChatBubbleOutlineIcon ></ChatBubbleOutlineIcon><Collapse ></Collapse><CardContent ></CardContent><Typography ></Typography><strong id="comment.author.name">{{ comment.author.name }}</strong><IconButton ></IconButton><Delete ></Delete>
   
   <form>
   <TextField id="TextField"/><IconButton id="IconButton"/><Send id="Send"/>
	
	
	<button onClick="handleComment">handleComment</button>
	
	</form></div>
      );
    }
  }

}
