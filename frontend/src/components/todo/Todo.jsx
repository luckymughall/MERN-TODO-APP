import React, { useState, useEffect } from 'react';
import "./todo.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoCards from './TodoCards';
import Update from './Update';
import axios from "axios";
import { useCallback } from 'react';

const Todo = () => {
    const [showtextarea, setshowtextarea] = useState(false);
    const [Inputs, setInputs] = useState({ title: "", body: "" });
    const [Arrays, setArrays] = useState([]);
    const [toUpdateArray, setToUpdateArray] = useState(null); // Here is where we store the task to update
    const id = sessionStorage.getItem("id");

    const del = async (cardid) => {
        await axios.delete(`${window.location.origin}/api/v2/deleteTask/${cardid}`, { data: { id: id } }).then(() => {
            toast.success("Your Task is Deleted.");
        });
    };

    const update = (value) => {
        // When update is called, we set the task to update in toUpdateArray state
        setToUpdateArray(Arrays[value]);
    };

    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };

    const submit = useCallback(async () => {
        if (Inputs.title === "" || Inputs.body === "") {
            toast.error("Title or Body Should not be Empty");
        } else {
            if (id) {
                await axios.post(`${window.location.origin}/api/v2/addTask`, { title: Inputs.title, body: Inputs.body, id: id }).then((response) => {
                    console.log(response);
                });
            }
            setArrays([...Arrays, Inputs]);
            setInputs({ title: "", body: "" });
            toast.success("Your Task is Added.");
        }
    }, [id, Inputs, Arrays]);

    useEffect(() => {
        const fetch = async () => {
            if(id) {
                await axios.get(`${window.location.origin}/api/v2/getTask/${id}`).then((response) => {
                    setArrays(response.data.list);
                })
            }
        };
        fetch();
    }, [id,submit]);

    return (
        <>
            <ToastContainer></ToastContainer>
            <div className='todo'>
                <div className='todo-main container d-flex justify-content-center align-items-center flex-column'>
                    <div className='d-flex flex-column w-50 todo-inputs-div p-1'>
                        <input type="text" placeholder='Title' name='title' onChange={change} value={Inputs.title} className='my-2 p-2 todo-inputs' onClick={() => setshowtextarea(true)}></input>
                        {showtextarea && (
                            <textarea
                                type='text'
                                placeholder="Body"
                                name='body'
                                value={Inputs.body}
                                onChange={change}
                                className="my-2 p-2 todo-inputs"
                            />
                        )}
                    </div>
                    <button className='Add-btn' style={{ width: '150px' }} onClick={submit}>Add</button>
                </div>
                <div className='todo-body'>
                    <div className="container-fluid">
                        <div className="row ">
                            {Arrays && Arrays.map((item, index) => (
                                <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                                    <TodoCards title={item.title} body={item.body} id={item._id} delid={del} updateId={index} toBeUpdate={update} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Pass update object to the Update component */}
            {toUpdateArray && <div className="todo-update">
                <div className="container update">
                    <Update update={toUpdateArray} closeUpdate={() => setToUpdateArray(null)} />
                </div>
            </div>}
        </>
    )
}

export default Todo;
