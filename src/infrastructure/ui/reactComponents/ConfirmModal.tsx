import React from 'react';
import "./ConfirmModal.css";
import {User} from "../../../domain/User.ts";

interface ConfirmModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    user: User;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onConfirm, onCancel, user }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>¿Estás seguro de que deseas eliminar a: {user.name}?</p>
                <button className={"delete-btn-confirm"} onClick={onConfirm}>Sí</button>
                <button onClick={onCancel}>No</button>
            </div>
        </div>
    );
};

export default ConfirmModal;