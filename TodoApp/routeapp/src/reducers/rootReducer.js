const initState ={
    posts:[
        {id:'1', title:'First post', body:'ssssssssss'},
        {id:'2', title:'Second post', body:'ssssssssss'},
        {id:'3', title:'Third post', body:'ssssssssss'},
    ]
}


const rootReducer = (state = initState, action) => {
    return state;
  }
  
export default rootReducer