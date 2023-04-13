import _ from 'lodash';//package have many function like range.slice.splice,take....
export function paginate(items,pageSize,pageNumber){
const startIndex=(pageNumber-1)*pageSize;//to calculate startindex
return _(items).slice(startIndex).take(pageSize).value();//we want to create new array of movies to return data paginate ,firt i create lodash object(items)/slice return array /
}