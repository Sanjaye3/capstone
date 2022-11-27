import "C:\\Users\\sanja\\OneDrive\\Desktop\\capstone\\my-app\\src\\components\\Login.css"

function Login(){
    return(
        <div className ="login">
            <p >Login</p>
            <label for="email" className="email" >Email<br/></label>
  <input type="email" className="email"  name="email"></input><br/>
  
  <label for="pwd" className="email" >Password</label><br />
  <input type="password"  className="email"  name="pwd"></input>
        </div>
    )
  }
  


export default Login;