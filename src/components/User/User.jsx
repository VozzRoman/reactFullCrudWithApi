
const User = ({data, handleDelete, handleIsOpen}) => {
	return(
	<>
	{data?.map((item, index) => {
		
		return(
			
			<tr key={item?.id}>
			<th  scope="row">{index + 1}</th>
			<td valign="middle">{item.first}</td>
			<td valign="middle">{item.second}</td>
			<td valign="middle">{item.adress}</td>
			<td valign="middle">{item.City}</td>
			<td valign="middle">{item.sex}</td>
			<td>
			<button onClick={() => handleIsOpen(item.id)} type="button" className="btn btn-warning" style={{marginRight:'10px'}}>edit</button>
			<button onClick={() => handleDelete(item.id)} type="button" className="btn btn-warning">delete</button>
			</td>
			</tr>
		)
	})}

		</>
	)
}

export default User;