import React, { Component } from 'react';
import Like from './like';
const MoviesTable = (props) => {
    
    return ( <table className="table">
    <thead>
      
      <tr>
      
        <th onClick={()=>props.OnSort('title')}  scope="col">Title{props.SortIcon('title')}</th>
        <th onClick={()=>props.OnSort('gener')}scope="col">Gerne{props.SortIcon('gener')}</th>
        <th onClick={()=>props.OnSort('stock')}scope="col">Stock{props.SortIcon('stock')}</th>
        <th onClick={()=>props.OnSort('rate')}scope="col">Rate{props.SortIcon('rate')}</th><th></th>
        <th scope="col">Operation</th>
      </tr>
    </thead>
    <tbody>
      
        {props.paginateMovies.map(movie=> <tr key={movie.id}>
          
          <td>{movie.title}</td>
          <td>{movie.gener}</td>
          <td>{movie.stock}</td>
          <td>{movie.Rate}</td>
          <td><Like onClick={()=>props.OnLike(movie)} liked={movie.liked}/></td>
         <td> <button onClick={()=>props.OnDelete(movie)} type="button" className='btn btn-danger btn-sm ' aria-label="Close">DELETE</button></td>
      </tr>)}
         
      
    </tbody>
  
     
     
    
  </table> );
}
 
export default MoviesTable;