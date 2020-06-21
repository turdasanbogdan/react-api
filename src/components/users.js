import React, {Component} from 'react';


    
const User = ({ users }) => {
        return (
          <div>
            <center><h1>Users</h1></center>
            {users.map((user) => (
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{user.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{user.email}</h6>
                  <p class="card-text">{user.company.catchPhrase}</p>
                </div>
              </div>
            ))}
          </div>
        )
      };
 
export default User;