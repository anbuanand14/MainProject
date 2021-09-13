import React, {Component} from 'react';

class SignUpFunc extends Component {
  
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:''
    }
   }

  updateUserValue(e){
    this.setState({
      username: e.target.value      
    })
  }

  updatePasswordValue(e){
    this.setState({
      password: e.target.value      
    })
  }

  submittedDetails = () => {    
    alert(
      "Entered Username is: " + this.state.username + "\nEntered password is: " + this.state.password
    );
  }

  render() {
    return (
      <div>
        <h1>User Details</h1>
        <p>Username: <input type='text' onChange={e => this.updateUserValue(e)}></input></p>
        <p>Password: <input type='text' onChange={e => this.updatePasswordValue(e)}></input></p>
        <p><button onClick={this.submittedDetails}>Submit</button></p>
      </div>
    );
  }
}

export default SignUpFunc;