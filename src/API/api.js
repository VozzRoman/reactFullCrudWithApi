import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3004/postss';


export const getAllUsers = async () => {
		const response = await axios.get('/');
		return response.data;
	
}


export const addUser = async (data) => {
		const response = await axios.post('/', data);
		return response.data;

}

export const deleteUser = async (id) => {
		const response = await axios.delete(`/${id}`);
		return response.data;
}

export const getByIdUser = async (id) => {
	
	const response = await axios.get(`/${id}`);
	return response.data;

}

export const updateUser = async (data) => {
		const response = await axios.put(`/${data.id}`, data);
		return response.data;
	
}
