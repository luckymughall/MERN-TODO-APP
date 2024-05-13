import React, { useState } from 'react';
import { MdDelete, MdSystemUpdateAlt } from "react-icons/md";
import Update from './Update';

const TodoCards = ({ title, body, id, delid, updateId, toBeUpdate }) => {
    const [showUpdate, setShowUpdate] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedBody, setUpdatedBody] = useState(body);

    const handleUpdate = (newTitle, newBody) => {
        setUpdatedTitle(newTitle);
        setUpdatedBody(newBody);
    };

    return (
        <div className='p-3 todo-card'>
            <div>
                <h5>{updatedTitle}</h5>
                <p className='todo-card-p'>{updatedBody.length > 77 ? updatedBody.substring(0, 77) + '...' : updatedBody}</p>
            </div>
            <div className='d-flex justify-content-around '>
                <div
                    className="d-flex justify-content-center align-items-center card-icon-head px-2 text-danger"
                    onClick={() => {
                        setShowUpdate(true);
                        toBeUpdate(updateId);
                    }}
                >
                    <MdSystemUpdateAlt className='reic' /> Update
                </div>
                <div className="d-flex justify-content-center align-items-center card-icon-head px-1 text-danger" onClick={() => { delid(id); }}>
                    <MdDelete className='reic' /> Delete
                </div>
            </div>
            {showUpdate && <Update closeUpdate={() => setShowUpdate(false)} initialTitle={updatedTitle} initialBody={updatedBody} onUpdate={handleUpdate} update={id} />}
        </div>
    );
};

export default TodoCards;
