import React from "react";

class AddTodo extends React.Component {
    state = {
        content: ""
    }
    changeHandler = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="content">Add new todo</label>
                    <input placeholder="Enter text here" type="text" name="content" onChange={this.changeHandler} value={this.state.content}/>
                </form>
            </div>
        );
    }
}

export default AddTodo;