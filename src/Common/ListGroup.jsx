
import React, { Component } from 'react';
class LisGroup extends Component {
    state = {  } 
    render() { 
        const{items,onGenerSelect,currentGener}=this.props;
        return (

            <ul className="list-group  pt-3" style={{listStyleType:'none'}}>
  {items.map(item => <li key={item.id} className={item.gener==currentGener?" list-group-item  active":"list-group-item "}><a className="page-link" onClick={()=> onGenerSelect(item)} >{item.gener}</a></li>)}

</ul>
        );
    }
}
 
export default LisGroup;