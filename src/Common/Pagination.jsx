import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';//to make validate of data 
class Pagination extends Component {
    
    render() { 
      console.log(this.props.currentPage);
      const {pageSize,count, onPageChange,currentPage}=this.props;
   const  pageCount=Math.ceil(count/pageSize);
   //install lodash library to complete code with pagination 
   const pages=_.range(1,pageCount+1);//range from one to pagecount-1 so we add +1 to add all pages
if(pageCount==1){
  return null;
}

        return (
            <nav aria-label="Page navigation example">
  <ul className="pagination">
   {pages.map(page => <li key={page} className={page===currentPage ?"page-item active":"page-item"}><a className="page-link" onClick={()=> onPageChange(page)} >{page}</a></li>)}
   
   
   
    
  </ul>
</nav>
        );
    }
    
}//make validation for all prameter props 
Pagination.propTypes={
count:PropTypes.number.isRequired,
pageSize:PropTypes.number.isRequired,
currentPage:PropTypes.number.isRequired,
onPageChange:PropTypes.func.isRequired,

};
 
export default Pagination;