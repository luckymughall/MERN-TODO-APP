import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

const Update = ({ closeUpdate, initialTitle, initialBody, onUpdate, update }) => {
    const [title, setTitle] = useState(initialTitle);
    const [body, setBody] = useState(initialBody);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`${window.location.origin}/api/v2/updateTask/${update}`, { title, body });
            toast.success("Your Task is Updated.");
            onUpdate(title, body);
            closeUpdate();
        } catch (error) {
            toast.error("Error updating task.");
        }
    };

    return (
        <div className='p-5 d-flex flex-column update justify-content-center align-items-start'>
            <div className="close-update" onClick={closeUpdate}>X</div> {/* Close button */}
            <h1>Update Your Task.</h1>
            <input type='text' placeholder='Title' className='todo-inputs my-4 w-100 p-3' value={title} onChange={handleTitleChange} />
            <textarea placeholder='Body' className='todo-inputs w-100 p-3' value={body} onChange={handleBodyChange}></textarea>
            <button className='btn btn-dark my-4' onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default Update;
