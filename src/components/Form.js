import { useState } from "react";
import axios from "axios";
import "./Form.css"
export function Form(props) {
  
      const [name, setName] = useState('');
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [website, setWebsite] = useState('');
      const [posts, setPosts] = useState([]);
  
  
      
  
      const addPosts = (name, username, email, phone, website) => {
          const promise =axios.post('https://jsonplaceholder.typicode.com/users', JSON.stringify({
                  name : {name},
                  username : {username},
                  email : {email},
                  phone : {phone},
                  website : {website},
              }))
              promise.then((response) => {
                  console.log(response);
                  setPosts([response.data, ...posts]);
              });
          setName('');
          setUsername('');
          setEmail('');
          setPhone('');
          setWebsite('');
      };
      return (
          <>
              <div>
                  
                      <div className="form">
                          <form>

                             <input type="text" name="name" placeholder="Name"/>
                             <input type="text" name="username" placeholder="Username"/>
                              <input type="email" name="email" placeholder="Email"/>
                             <input type="text" name="phone" placeholder="Phone"/>
                             <input type="text" name="website" placeholder="Website"/>
                            <input type="submit" value="Cancel" />
                            <input type="submit" value="Add" />
                          </form>
                      </div>
                      <div>
                        
                         
                      </div>
                  </div>
              
          </>
      );
  }

export default Form