
import User from "../User/User";
const UserList = ({data, handleDelete, handleIsOpen}) => {
	
	return(
		<div style={{padding:"20px", background:"white", borderRadius:"6px"}}>

		<table className="table">
			
  <thead>
    <tr>
      <th scope="col">#</th>
      <th align="center" scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Adress</th>
		<th scope="col">City</th>
		<th scope="col">Sex</th>
		<th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
		{data && <User data={data} handleDelete={handleDelete} handleIsOpen={handleIsOpen}/>}
   
  </tbody>
</table>
</div>
	)
}


export default UserList;