
import "./SendForm.css";
const SendForm = ({getFormDAta, isSubmitting}) => {


const handleSubmit = (e) => {
e.preventDefault();

const form = e.target.elements;
const data = {
	first: form.first.value,
	second: form.second.value,
	adress: form.adress.value,
	City: form.city.value,
	sex: form.sex.value,
}

for (const key in data){
	if(data[key] === ""){
		return alert("fill all filds");
	}
}

getFormDAta(data);

}


	return(
<form onSubmit={handleSubmit} className="row g-3 w-50 mx-auto pt-2 pb-5" >
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label text-light">First name</label>
    <input type="text" className="form-control" id="inputEmail4" name="first"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4"className="form-label text-light">Second Name</label>
    <input type="text" className="form-control" id="inputPassword4" name="second"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label text-light" >Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="adress"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label text-light">City</label>
    <input type="text" className="form-control" id="inputCity"name="city"/>
  </div>
  <div className="col-md-4 flex-shrink-1 flex-grow-1">
    <label htmlFor="inputState" className="form-label text-light">Sex</label>
    <select id="inputState" className="form-select w-100" name="sex">
      <option defaultValue="male">male</option>
      <option value="female">female</option>
    </select>
  </div>
  <div className="col-12">
    <button disabled={isSubmitting} type="submit" className="btn btn-primary bg-success border-success">add person</button>
  </div>
</form>
	)
}

export default SendForm;