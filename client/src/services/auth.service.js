import axios from "axios";
const API_URL = "http://localhost:8080/api/user"

class AuthService{
  login(email, password){
    return axios.post(API_URL+"/login",{
      email,
      password
    });
  }
  logout(){
    localStorage.removeItem("user");
  }
  register(username, email, password){
    return axios.post(API_URL + "/signup", {
      username,
      email,
      password,
      
    });
  }
  getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
  }
}

//create anew AuthService "object"
export default new AuthService();
