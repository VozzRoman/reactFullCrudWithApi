
import { useEffect, useState } from 'react';
import './App.css';
import SendForm from './components/SendForm/SendForm';
import UserList from './components/UsersList/UserList';
import { addUser, deleteUser, getAllUsers, updateUser } from './API/api';
import ModalForm from './components/Modal/ModalForm';
import Edit from './components/Edit/Edit';

function App() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [contentError, setContentError] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const [userId, setUserId] = useState(null);
	console.log(error);

	const  getFormDAta = async (value) => {
		const trigger = data.find(item => item.first === value.first && item.second === value.second && item.adress === value.adress && item.City === value.City && item.sex === value.sex)
		if(trigger){
			const newError = "user already exist";
			 setContentError(newError);
			setTimeout(() => {
				return setContentError('')
			}, 2000)
			return;
		}
		try {
			setIsLoading(true)
		const response = await addUser(value);
		setData(prev => [...prev, response]);
		setError('');
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
		
	}
	const updateData = async (value) => {
	try {
		const response = await updateUser(value);
		if(response){
			alert("updated successfully")
		}
		setData(prev => prev.map(item => {
			if(item.id === response.id){
				console.log("OBJECT",prev);
				return response;
			}
			return item;
		}));
		setIsOpen(false);
	} catch (error) {
		setError(error)
	}
	}

	const handleDelete = async (idx) => {
		try {
			await	deleteUser(idx);
		setData(prev => prev.filter(item => item.id !== idx));
		} catch (error) {
			setError(error);
		}
	
	}
	const handleIsOpen = (idx) => {
		setIsOpen(prev => !prev);
		setUserId(idx)
	}


	useEffect(() => {
	const allUsers = async () => {
		setIsLoading(true);
		try {
			const response = await getAllUsers();
		
		setData(response);
		setError('');
		setIsLoading(false);
		} catch (error) {
			console.log(error);
			error.message = 'No connection or wrong root'
			setError(error.message);
		}
}
allUsers();

	},[]);

  return (
	<>
    {!error ? <div className="App">
		
		{data && <div>
			{contentError && <h3 style={{textAlign:"center", color:"red", marginTop:"20px"}}>{contentError}</h3>}
  <SendForm getFormDAta={getFormDAta} isSubmitting={isLoading}/>
  {isLoading ? <h1>...Loading</h1> : <UserList data={data} handleDelete={handleDelete} handleIsOpen={handleIsOpen}/>}
  {isOpen && 
  <ModalForm handleIsOpen={handleIsOpen}>
	<Edit userId={userId} updateData={updateData}/>
	</ModalForm>}
	</div>}
    </div> : <h3 style={{textAlign:"center", marginTop:"60px", color:"white", fontWeight:"600"}}>{error}</h3>}
	 </>
  );
}

export default App;
