import React from "react";
import { User } from "../../../domain/User";
import "./UserTable.css";

interface Props {
    users: User[];
    onDelete: (user: User) => void;
}

const UserTable: React.FC<Props> = ({ users, onDelete }) => {
    return (
        <div className="table-container">
            <table className="user-table">
                <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>País</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr className={"user-row"} key={user.id}>
                        <td><img src={user.picture} alt={user.name} className="user-image" /></td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>
                            <button className="delete-btn" onClick={() => onDelete(user)}>ELIMINAR</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>            
        </div>
    );
};

export default UserTable;