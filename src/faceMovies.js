  const MOVIES=[
    {
id:"0",
title:"Terminator",
gener:"a",
stock:6,
Rate:2.5,
liked:true,
    },
    {    id:"1",
    title:"Die Hard",
    gener:"b",
    stock:5,
    liked:true,
    Rate:2.5,},

   {    id:"2",
    title:"Airplane",
    gener:"c",
    stock:7,
    liked:false,
    Rate:3.5,},
    {    id:"3",
    title:"Wedding Crashers",
    gener:"d",
    stock:7,
    liked:true,
    Rate:3.5,},
    

];
export function getMovies(){
    return MOVIES;
}