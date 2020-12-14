import React,{Component} from 'react'

class AddTodo extends Component{
    state={
        content:''
    }

    handleChange = (e) =>{
        this.setState({
            content: e.target.value
          });
        console.log(this.state);
    }
    
    handleSubmit =(e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}></form>
                <label>Add new todo:</label>
                <input type="text" onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default AddTodo