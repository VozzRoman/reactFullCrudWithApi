import { useEffect, useState } from "react";
import { getByIdUser} from "../../API/api";
const Edit = ({userId, updateData}) => {
const [user, setUser] = useState(null);
const [error, setError] = useState(null);
console.log(error);

useEffect(() => {
getByIdUser(userId)
.then(res => setUser(res), setError(''))
.catch(error => setError(error))

},[userId])


	const handleSubmit = (e) => {
		e.preventDefault()
	updateData(user);

	}
	
	
	return(
		<>
		{user && <div>
		<form onSubmit={handleSubmit} className="row g-3 mx-auto pt-5 pb-5" >
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label text-light">First name</label>
    <input value={user.first} onChange={(e) => setUser({...user, first: e.target.value}) } type="text" className="form-control" id="inputEmail4" name="first"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4"className="form-label text-light">Second Name</label>
    <input value={user.second} onChange={(e) => setUser({...user, second: e.target.value}) } type="text" className="form-control" id="inputPassword4" name="second"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label text-light" >Address</label>
    <input value={user.adress} onChange={(e) => setUser({...user, adress: e.target.value}) } type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="adress"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label text-light">City</label>
    <input value={user.City} onChange={(e) => setUser({...user, City: e.target.value}) } type="text" className="form-control" id="inputCity"name="city"/>
  </div>
  <div className="col-md-4 flex-shrink-1 flex-grow-1">
    <label htmlFor="inputState" className="form-label text-light">Sex</label>
    <select value={user.sex} onChange={(e) => setUser({...user, sex: e.target.value}) }  id="inputState" className="form-select w-100" name="sex">
      <option  defaultValue="male">male</option>
      <option  value="female">female</option>
    </select>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary bg-success border-success">Update</button>
  </div>
</form>
</div>}
</>
	)
}

export default Edit;