import scss from "./ModalFrom.module.scss";
import {SlClose} from "react-icons/sl";
const ModalForm =({children, handleIsOpen}) => {
	return(
		<div className={scss.backdrop}>
			<div className={scss.modalBody}>
				<button onClick={handleIsOpen} className={scss.closeModal}><SlClose/></button>
			{children}
			</div>
		</div>
	)
}

export default ModalForm;