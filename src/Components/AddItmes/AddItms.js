import React ,{Component} from "react"


class AddItems extends Component {
    state= {
        name:'',
        age:''
    }
    
    handleChange = (e)=>{
        if(e.target.id ==="name"){
            this.setState( {
                name: e.target.value
            })  
        }
        else if(e.target.id ==="age"){
            this.setState( {
                age: e.target.value
            })  
        }
        
    }
    
    handleSubmit =(e)=> {
        e.preventDefault()
        if(this.state.age ==='' || this.state.name===''){
            return 
        }
        else {
            this.props.AddItems(this.state);
            this.setState({ name:'', age : ''});
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="enter name .. " id="name" onChange={this.handleChange} value={this.state.name}/>
                    <input type="number" placeholder="enter age .. " id="age" onChange={this.handleChange} value={this.state.age}/>
                    <input type="submit" value="Add " id="submit" />
                </form>
            </div>
        )
    }
}

export default AddItems