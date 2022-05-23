import React from 'react'

function AdminPage() {
  return (
    <div class="bg-light" style={{height: "100vh"}}>
    
      <div class="container p-4 mt-4">
        <div class="row justify-content-evenly mt-4">
           
           <div class="col-lg-12 col-md-12 mt-4">
               <div class="d-flex">
                <i class="fa-solid fa-user fs-1 mx-2"></i> <h2>Profiles list</h2>
               </div>
               <div class="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">telephone</th>
                        <th scope="col">city</th>
                        <th scope="col">country</th>
                        <th scope="col">bio</th>
                        <th scope="col">actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>lobna sidia</th>
                        <td>lobna sidia@gmail.com</td>
                        <td>ADMIN</td>
                        <td>56666666</td>
                        <td>tunisia</td>
                        <td>tunisia</td>
                        <td>intern</td>
                        <td><button class="btn btn-outline-danger">Delete</button></td>
                      </tr>
                      <tr>
                        <th>kawther benticha</th>
                        <td>kawther benticha@gmail.com</td>
                        <td>USER</td>
                        <td>54010184</td>
                        <td>tunisia</td>
                        <td>tunisia</td>
                        <td>intern</td>
                        <td><button class="btn btn-outline-danger">Delete</button></td>
                      </tr>
                    </tbody>
                  </table>
            </div>
           </div>
       </div>
   </div>
   </div>

  )
}

export default AdminPage