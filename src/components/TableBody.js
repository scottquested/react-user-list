import React from "react";
import {removeUser} from "../redux/actions";
import {useSelector, useDispatch} from "react-redux";

const TableBody = () => {

    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer);

    const rows = users.map((row, index) => {
        return (
            <tr key={index} className="animated fadeIn fast">
                <td width="5%">{index}</td>
                <td width="38.5%">{row.name}</td>
                <td width="38.5%">{row.job}</td>
                <td width="10%">
                    <button onClick={() => dispatch(removeUser(index))} className="btn btn-danger btn-sm">X</button>
                </td>
            </tr>
        )
    });

    return <tbody>{rows}</tbody>
};

export default TableBody;