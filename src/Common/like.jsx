import React, { Component } from 'react';
class Like extends Component {
  

    render() { 
        
       let classes=this.handle(this.props.liked);
    
        return (
             
            <i className={classes} style={{cursor: 'pointer'}} onClick={this
            .props.onClick} aria-hidden="true"></i>
        );


    }

    handle(liked){
        let classess="fa ";
        classess+=liked==false ?" fa-heart-o":" fa-heart";
        return classess;
    }
}
 
export default Like;