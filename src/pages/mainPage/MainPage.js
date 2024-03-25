import React, { useEffect, useState } from 'react';
import Buttons from '../../components/buttons/Buttons';
import User from '../user/User';
import Example from '../../components/example/Example';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import TodoList from '../../components/TodoList/TodoList';
import Button from '../../components/button/Button';

const MainPage = () => {
    const navBar = [ 'Главная', 'Контакты', 'О нас', 'О нас' ];

    const [show, setShow] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [filterOption, setFilterOption] = useState('all');
    const [inputTask, setInputTask] = useState('');
    const [users, setUsers] = useState([]);

    const handleShow = () => {
        setShow(!show);
    };

    const onChangeInputTask = (event) => {
        setInputTask(event.target.value);
    };

    const handleAdd = () => {
        setTasks(prev => [ ...prev, {
            id: tasks.length === 0 ? 1 : tasks[ tasks.length - 1 ].id + 1,
            title: inputTask,
            completed: false
        } ]);
    };

    const handleDone = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    };

    const handleEdit = (editTodo) => {
        setTasks(tasks.map(task => {
            if (task.id === editTodo.id) {
                return { ...task, title: editTodo.title };
            }
            return task;
        }));
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const sendLocalStorage = () => {
        localStorage.setItem('name', 'Baktybek');
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const getLocalStorage = () => {
        console.log(JSON.parse(localStorage.getItem('tasks')));
    };

    const handleClearAllTasks = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
    };

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        if (myLocalStorage === null) {
            return localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        if (myLocalStorage.length !==0) {
            setTasks(myLocalStorage)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    useEffect(() => {
        getApi('users').then((data)=> setUsers(data))
    },[]);

    const getApi = async(api) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${api}`);
        const  data = await response.json();
        return data;
    };

    return (
        <>
            <Button title={'LocalStorage'} action={sendLocalStorage}/>
            <Button title={'GetLocalStorage'} action={getLocalStorage}/>
            <Button title={'ClearAllTasks'} action={handleClearAllTasks}/>
            {show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}
                />
            }

            <select value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
                <option value="all">Все таски</option>
                <option value="completed">Выполненные</option>
                <option value="uncompleted">Не выполненные</option>
            </select>

            <TodoList
                tasks={tasks.filter(task => {
                    if (filterOption === 'completed') {
                        return task.completed;
                    } else if (filterOption === 'uncompleted') {
                        return !task.completed;
                    }
                    return true;
                })}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
            />

            <Button title={'Открыть'} action={handleShow}/>
        </>
    );
};

export default MainPage;
