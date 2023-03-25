/*
1)learn jsx write html in js like cont l=<h4></h4>
2)render list or array use map function and arrow function 
3)conditional rendering
4)handle event and how to pass argument 
5)how to update the state variable*/ 
import React,{ Component } from 'react';

import { getMovies } from './faceMovies';

class Movies extends Component {
    state = { 
        movies:getMovies(),
        message:"There is no Movies to display"
     } 

     HandleDelete =(movie)=>{
        const id=movie.movie.id;
        let result=this.state.movies.filter(m=>m.id!==id );
        this.setState({movies:result});
        

       
     }
     message(){
       if(this.state.movies.length===0){
        return this.state.message;
       }
       else{
        let l=this.state.movies.length;
        return l;
       }
     
     }
    render() {
        
        return (
            <div>
            <h4>{this.message()}</h4>   
<table className="table">
  <thead>
    
    <tr>
    
      <th scope="col">Title</th>
      <th scope="col">Gerne</th>
      <th scope="col">Stock</th>
      <th scope="col">Rate</th>
      <th scope="col">Operation</th>
    </tr>
  </thead>
  <tbody>
    
      {this.state.movies.map(movie=> <tr key={movie.id}>
        
        <td>{movie.title}</td>
        <td>{movie.gener}</td>
        <td>{movie.stock}</td>
        <td>{movie.Rate}</td>
       <td> <button onClick={()=>this.HandleDelete({movie})} type="button" className='btn btn-danger btn-sm ' aria-label="Close">DELETE</button></td>
    </tr>)}
       
    
  </tbody>

   
   
  
</table></div>
        );
    }
}
 
export default Movies;
