import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss"
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUser = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="manage-user-container">
            <div className='title'>
                ManageUser
            </div>
            <div className='user-content'>
                <div className="btn-addnew-user">
                    <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                        <FcPlus /> Add new user
                    </button>
                </div>
                <div>
                    table
                </div>
                <ModalCreateUser
                    show={showModal}
                    setShow={setShowModal}
                />
            </div>
        </div>
    )
}

export default ManageUser;