import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService"

const TableUser = (props) => {
    const [listUser, setListUser] = useState([]);

    // ComponentDidMount && no need asyn await
    useEffect(() => {
        fetchList();
    }, [])

    const fetchList = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUser(res.DT);
        }
    }

    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.username}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-primary">View</button>
                                        <button className="btn btn-warning mx-3">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {listUser && listUser.length === 0 &&
                        < tr >
                            <td colSpan={5}>No user found</td>
                        </tr>
                    }
                </tbody>
            </table >
        </>
    )
};

export default TableUser;