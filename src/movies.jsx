/*
1)learn jsx write html in js like cont l=<h4></h4>
2)render list or array use map function and arrow function 
3)conditional rendering
4)handle event and how to pass argument 
5)how to update the state variable
6)how to use filter methode*/ 
import React,{ Component } from 'react';
import ListGroup from './Common/ListGroup';
import { getMovies } from './faceMovies';
import Like from './Common/like';
import Pagination from './Common/Pagination';
import { paginate } from './paginate';
import { getGeners } from './geners';
import MoviesTable from './Common/MoviesTable';
import _ from 'lodash';

class Movies extends Component {
    state = { 
       // movies:getMovies(),
       //another way beacuse data take some time from server you should write empty array and use componentDidmount to get data 
       movies:[],
        message:"There is no Movies to display",
        pageSize:2,
        currentPage:1,
        currentGener:"All Geners",
        SortColumn:{path:'title',order:'asc'},
        geners:[],
     } 
//i want to add all geners so how to do this??look to the first line in componentDidMount>>i want to render all geners array(...geners) and add new object All geners but without id beacuse this is not store in database just like button to display all geners

     componentDidMount(){
const AllGeners=[{id:"",gener:"All Geners"},...getGeners()];
      this.setState({movies:getMovies(),geners:AllGeners});
     }

     HandleDelete =(movie)=>{
      console.log(movie);
        const id=movie.id;
        let result=this.state.movies.filter(m=>m.id!==id );
        this.setState({movies:result});
        

       
     }

     HandleSort=(path)=>{
      const Sort={...this.state.SortColumn};
      if(Sort.path===path){
       Sort.order= Sort.order==='asc'?'desc':'asc';
      }
      else{
        Sort.path=path;
    Sort.order='asc';
      }
      this.setState({SortColumn:Sort});
    }
      HandleIconSort=(path)=>{
        const Sort={...this.state.SortColumn};
        if(Sort.path!==path){
         return null;}
         if(Sort.order==='asc'){
         return <i class="fa fa-sort-asc" ></i>
        }
        else{return <i class="fa fa-sort-desc"></i>
          
      }

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
     handleLike=(movie)=>{
    let index=this.state.movies.indexOf(movie);
    if(movie.liked==true){
      movie.liked=false;
    }
    else{
      movie.liked=true;
    }
    let result=this.state.movies;
    console.log(result);
    this.setState({movies:result});
   

    }
    render() {
      const filteredGenere=this.state.currentGener && this.state.currentGener!="All Geners"?this.state.movies.filter(m=>m.gener===this.state.currentGener):this.state.movies;
      
     const SortedMovies=_.orderBy(filteredGenere,[this.state.SortColumn.path],[this.state.SortColumn.order]);
     console.log(SortedMovies);
    
      const paginateMovies=paginate(SortedMovies,this.state.pageSize,this.state.currentPage);
        return (
            <div className="row">
              <div className="col-sm-4">
                <ListGroup items={this.state.geners} genereName="a" genereId="1"  currentGener={this.state.currentGener}onGenerSelect={this.generSelect}/>
              </div>
              <div className="col-sm-8">

             
            <p>{filteredGenere.length}Movies In DataBase</p> 
            <MoviesTable OnSort={this.HandleSort} SortIcon={this.HandleIconSort} OnDelete={this.HandleDelete} OnLike={this.handleLike}paginateMovies={paginateMovies}/>
<Pagination count={filteredGenere.length}  onPageChange={this.handlePage} currentPage={this.state.currentPage} pageSize={this.state.pageSize}/></div>
</div>
        );
    }

    handlePage=(page)=>{
 

       this.setState({currentPage:page});
       

    }

   generSelect=(item)=>{
    this.setState({currentGener:item.gener})
    }
}
 
export default Movies;
