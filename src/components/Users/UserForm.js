import { useState } from 'react';

const UserForm = (props) => {
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [isFormEmpty, setIsFormEmpty] = useState(false);

    function nameInputChange(e) {
        setNewName(e.target.value);
    }

    function emailInputChange(e) {
        setNewEmail(e.target.value);
    }

    function formSubmit(e) {
        e.preventDefault();
        console.log(newName, newEmail);

        if (newName.trim() === '' || newEmail.trim() === '') {
            setIsFormEmpty(true);
            return;
        }

        setIsFormEmpty(false);

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
                        <label htmlFor="name" className={isFormEmpty && !newName ? 'error' : ''}>Name</label>
                        <input className={isFormEmpty && !newName ? 'error' : ''} onChange={nameInputChange} value={newName} type="text" id="name" placeholder="Username" />
                        <div>{ newName }</div>
                    </div>
                    <div className="form-control">
                        <label htmlFor="email" className={isFormEmpty && !newEmail ? 'error' : ''}>Email</label>
                        <input className={isFormEmpty && !newEmail ? 'error' : ''} onChange={emailInputChange} value={newEmail} type="text" id="email" placeholder="email" />
                        <div>{newEmail}</div>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default UserForm;