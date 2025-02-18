import React, { useEffect, useState } from "react";
import { fetchUsers } from "./application/FetchUsers";
import { User } from "./domain/User";
import UserTable from "./infrastructure/ui/reactComponents/UserTable";
import ConfirmModal from './infrastructure/ui/reactComponents/ConfirmModal';

import "./App.css";

const App: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [userToDelete, setUserToDelete] = useState<User | null>(null);

    useEffect(() => {
        fetchUsers().then(setUsers);
    }, []);

    const handleDeleteClick = (user: User): void => {
        setUserToDelete(user);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = (): void => {
        if (userToDelete) {
            setUsers(users.filter(user => user.id !== userToDelete.id));
            setIsModalOpen(false);
        }
    };

    const handleCancelDelete = (): void => {
        setIsModalOpen(false);
    };

    return (
        <div className="app-container">
            <h1 className="title">Lista de Usuarios </h1>
            <div className={"contador"}>Cantidad: {users.length}</div>
            <UserTable users={users} setUsers={setUsers} onDelete={handleDeleteClick} />
            {isModalOpen && (
                <ConfirmModal
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                    user={userToDelete}
                />
            )}
        </div>
    );
};

export default App;