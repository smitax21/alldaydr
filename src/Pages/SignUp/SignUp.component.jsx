import React, {useState, useEffect} from 'react';
import {useHistory, withRouter} from 'react-router-dom';

// import CustomButton from '../CustomButton/CustomButton.component'
import { SignUpContainer, SignUpTitle } from './SignUp.styles'
// import FormInput from '../Form-Input/FormInput.component'


// class SignUp extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {user: [
//                       email, 
//                       password, 
//                       first_name, 
//                       last_name, 
//                       phone],
//                   device_detail: [
//                       device_type, 
//                       player_id
//                   ]
//                   }
//     };
	
	
// 	componentDidMount() {
// 		fetch('https://dev-api.alldaydr.com/api/users/sign_up.json', {
// 			method: 'POST',
// 			body: JSON.stringify(),
// 			headers: {
// 				"Content-type": "application/json"
// 			}
// 		}).then(response => {
// 				return response.json()
// 			}).then(json => {
// 				this.setState({
// 					user:json
// 				});
// 			});
// 	}
// 	render() {                            
// 		return (
// 			<div>
// 				<SignUpContainer>
//            <h2>Sign-up Page</h2>
//              <SignUpTitle> I do not have an account </SignUpTitle>
//                <span>Sign-up with your email and password</span>
         
//                <form >
//               <input
//                   type='email' 
//                   name='email'
//                   value={this.email} 
//                   onChange={(e)=> (e.target.value)}
//                   autoComplete='on'
//                   placeholder = 'Email'
//                   required />
            
  
//               <input type="password" 
//                   value={this.password} 
//                   name="password"
//                   onChange={(e)=> (e.target.value)} 
//                   autoComplete='on'
//                   placeholder = 'Password'
//                   required/>
           
//               <input 
//                   type="text" 
//                   value={this.firstName} 
//                   name="firstName"
//                   onChange={(e)=> (e.target.value)} 
//                   placeholder = 'First Name'
//                   autoComplete='on'
//                   required/>
            
  
//               <input 
//                   type="text" 
//                   value={this.lastName} 
//                   name="lastName"
//                   onChange={(e)=> (e.target.value)}
//                   placeholder = 'Last Name'
//                   autoComplete='on'
//                   required />
  
//                 <input 
//                   type="text" 
//                   value={this.phone} 
//                   name="phone"
//                   onChange={(e)=> (e.target.value)}
//                   placeholder = 'Phone'
//                   autoComplete='on'
//                   required />
            
              
//               <input 
//                   type="text" 
//                   value={this.device_type} 
//                   name="deviceType"
//                   onChange={(e)=> (e.target.value)}
//                   placeholder = 'Device-type'
//                   autoComplete='on'
//                   required/>
            
//               <input type="text" 
//                   value={this.player_id} 
//                   name="Id"
//                   onChange={(e)=> (e.target.value)}
//                   placeholder = 'Id'
//                   autoComplete='on'
//                    />
            
//             <button type='submit'> SIGN-UP </button>
//             </form>
        
  
//           <span>Already have an account? Login <a href='/'>here</a></span>
//       </SignUpContainer>
// 			</div>
// 		)
// 	}
// }

// export default SignUp;

// const SignUp = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("")
//     const [first_name, setFirstName] = useState("")
//     const [last_name, setLastName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [device_type, setDeviceType] = useState("");
//     const [player_id, setPlayerId] = useState("");
//     // const [isAuth, setIsAuth] = useState(false);
//     const history = useHistory();

//     // useEffect(() => {
//     //   if(localStorage.getItem('user-info')) {
//     //     history.push('/')
//     //   }
//     // }, [])
    
//     let user = [];
//     let device_detail = [];
//     async function register() {
        
//         // event.preventDefault();
//       let item = {
//         user: {email, 
//               password, 
//               first_name, 
//               last_name, 
//               phone},
//          device_detail: {
//               device_type, 
//               player_id}}
//       console.log(item)
      
  
//       let result = await fetch(' https://dev-api.alldaydr.com/api/users/sign_up.json', {
//         method: 'POST',
//         body: JSON.stringify(item),
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json"
//         }
//       })
//       result = await result.json()
//       console.warn("result", result)
//       localStorage.setItem("user-info", JSON.stringify(result))
//       // history.push('/')
//     }


class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {
          email: '', 
          password: '',
          firstName: '', 
          lastName: '', 
          phone: ''
        }, 
        device_detail: {
          deviceType: '',
          Id: ''
        }
        
      };
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
      this.handleChangeLastName = this.handleChangeLastName.bind(this);
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleChangeDeviceType = this.handleChangeDeviceType.bind(this);
      this.handleChangePlayerId = this.handleChangePlayerId.bind(this);
      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);

     


    }

    handleChangeEmail(event) {
      //alert(event.target.value);
      var temp = this.state;
      temp['email'] = event.target.value;
      this.setState(temp);
      console.log(temp);
      //this.setState({value: event.target.value});
    }

    handleChangePassword(event) {
      //alert(event.target.value);
      var temp = this.state;
      temp['password'] = event.target.value;
      this.setState(temp);
      console.log(temp);
      this.setState({value: event.target.value});
    }

    handleChangeFirstName(event) {
      //alert(event.target.value);
      var temp = this.state;
      temp['firstName'] = event.target.value;
      this.setState(temp);
      console.log(temp);
      this.setState({value: event.target.value});
    }

    handleChangeLastName(event) {
      //alert(event.target.value);
      var temp = this.state;
      temp['lastName'] = event.target.value;
      this.setState(temp);
      console.log(temp);
      this.setState({value: event.target.value});
    }

    handleChangePhone(event) {
      //alert(event.target.value);
      var temp = this.state;
      temp['phone'] = event.target.value;
      this.setState(temp);
      console.log(temp);
      this.setState({value: event.target.value});
    }

    handleChangeDeviceType(event) {
      //alert(event.target.value);
      var temp = this.state;
      temp['deviceType'] = event.target.value;
      this.setState(temp);
      console.log(temp);
      this.setState({value: event.target.value});
    }

    handleChangePlayerId(event) {
      //alert(event.target.value);
      var temp = this.state;
      temp['Id'] = event.target.value;
      this.setState(temp);
      console.log(temp);
      this.setState({value: event.target.value});
    }


    onSubmit(data, e){
      // setMessage({
      //   data: "Registration is in progress...",
      //   type: "alert-warning",
      // });


    //   fetch(' https://dev-api.alldaydr.com/api/users/sign_up.json', {
    //     method: 'POST',
    //     body: JSON.stringify(item),
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept": "application/json"
    //     }
    //   })
    //   result = await result.json()
    //   console.warn("result", result)
    //   localStorage.setItem("user-info", JSON.stringify(result))
    //   // history.push('/')
    // }
      fetch("https://dev-api.alldaydr.com/api/users/sign_up.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          const hasError = "error" in data && data.error != null;
          // setMessage({
          //   data: hasError ? data.error : "Registered successfully",
          //   type: hasError ? "alert-danger" : "alert-success",
          // });
           !hasError && e.target.reset();
           console.log(data, "data")
        });
    };
  
    render() {
      const {email, password, firstName, lastName, deviceType, phone, Id} = this.state;

      return(
        <SignUpContainer>
                <h2>Sign-up Page</h2>
                  <SignUpTitle> I do not have an account </SignUpTitle>
                    <span>Sign-up with your email and password</span>
               
                    <form className='sign-up-form' onSubmit={this.onSubmit}> 
                     <input
                        type='email' 
                        name='email'
                        value={email} 
                        onChange={this.handleChangeEmail}
                        autoComplete='on'
                        placeholder = 'Email'
                        required />
                  
        
                    <input type="password" 
                        value={password} 
                        name="password"
                        onChange={this.handleChangePassword} 
                        autoComplete='on'
                        placeholder = 'Password'
                        required/>
                 
                    <input 
                        type="text" 
                        value={firstName} 
                        name="firstName"
                        onChange={this.handleChangeFirstName} 
                        placeholder = 'First Name'
                        autoComplete='on'
                        required/>
                  
        
                    <input 
                        type="text" 
                        value={lastName} 
                        name="lastName"
                        onChange={this.handleChangeLastName}
                        placeholder = 'Last Name'
                        autoComplete='on'
                        required />
        
                      <input 
                        type="text" 
                        value={phone} 
                        name="phone"
                        onChange={this.handleChangePhone}
                        placeholder = 'Phone'
                        autoComplete='on'
                        required />
                  
                    
                    <input 
                        type="text" 
                        value={deviceType} 
                        name="deviceType"
                        onChange={this.handleChangeDeviceType}
                        placeholder = 'Device-type'
                        autoComplete='on'
                        required/>
                  
                    <input type="text" 
                        value={Id} 
                        name="Id"
                        onChange={this.handleChangePlayerId}
                        placeholder = 'Id'
                        autoComplete='on'
                         />
                  
                  <button onClick={this.onSubmit} type='submit'> SIGN-UP </button>
                  </form>
              
        
                <span>Already have an account? Login <a href='/'>here</a></span>
            </SignUpContainer>
              
          
          )
    }
    }

export default withRouter(SignUp);