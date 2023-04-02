import { useState } from 'react';
import './UserForm.css';

const UserForm = (props) => {
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');

    function nameInputChange(e) {
        setNewName(e.target.value);
    }

    function emailInputChange(e) {
        setNewEmail(e.target.value);
    }

    function formSubmit(e) {
        e.preventDefault();
        console.log(newName, newEmail);

        const newUser = {
            id: Math.random(),
            name: newName,
            email: newEmail
        };

        props.onSaveUserForm(newUser);
        setNewName('');
        setNewEmail('');
    }

    return (
        <div className="user-form card">
            <form onSubmit={formSubmit}>
                <div className="form-controls">
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input onChange={nameInputChange} value={newName} type="text" id="name" placeholder="Username" />
                        <div>{ newName }</div>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input onChange={emailInputChange} value={newEmail} type="text" id="email" placeholder="email" />
                        <div>{newEmail}</div>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default UserForm;