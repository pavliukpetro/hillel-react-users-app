import { Component, useState } from 'react';

class UserForm extends Component {
    constructor() {
        super();

        this.state = {
            newName: '',
            newEmail: '',
            isFormEmpty: false
        }

        // this.nameInputChange = this.nameInputChange.bind(this);
    }

    nameInputChange(e) {
        // setNewName(e.target.value);
        this.setState({newName: e.target.value});
    }

    emailInputChange(e) {
        // setNewEmail(e.target.value);
        this.setState({newEmail: e.target.value});
    }

    formSubmit(e) {
        e.preventDefault();
        // console.log(newName, newEmail);

        if (this.state.newName.trim() === '' || this.state.newEmail.trim() === '') {
            // setIsFormEmpty(true);
            this.setState({isFormEmpty: true});
            return;
        }

        // setIsFormEmpty(false);
        this.setState({isFormEmpty: false});

        const newUser = {
            id: Math.random(),
            name: this.state.newName,
            email: this.state.newEmail
        };

        this.props.onSaveUserForm(newUser);
        // setNewName('');
        this.setState({newName: ''});
        // setNewEmail('');
        this.setState({newEmail: ''});
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState);
        console.log(this.state);
        if (prevState.isFormEmpty !== this.state.isFormEmpty) {
            console.log('componentDidUpdate');

        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <div className="user-form card">
                <form onSubmit={this.formSubmit.bind(this)}>
                    <div className="form-controls">
                        <div className="form-control">
                            <label htmlFor="name" className={this.state.isFormEmpty && !this.state.newName ? 'error' : ''}>Name</label>
                            <input className={this.state.isFormEmpty && !this.state.newName ? 'error' : ''} onChange={this.nameInputChange.bind(this)} value={this.state.newName} type="text" id="name" placeholder="Username" />
                            <div>{ this.state.newName }</div>
                        </div>
                        <div className="form-control">
                            <label htmlFor="email" className={this.state.isFormEmpty && !this.state.newEmail ? 'error' : ''}>Email</label>
                            <input className={this.state.isFormEmpty && !this.state.newEmail ? 'error' : ''} onChange={this.emailInputChange.bind(this)} value={this.state.newEmail} type="text" id="email" placeholder="email" />
                            <div>{this.state.newEmail}</div>
                        </div>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

// const UserForm = (props) => {
//     const [newName, setNewName] = useState('');
//     const [newEmail, setNewEmail] = useState('');
//     const [isFormEmpty, setIsFormEmpty] = useState(false);

//     function nameInputChange(e) {
//         setNewName(e.target.value);
//     }

//     function emailInputChange(e) {
//         setNewEmail(e.target.value);
//     }

//     function formSubmit(e) {
//         e.preventDefault();
//         console.log(newName, newEmail);

//         if (newName.trim() === '' || newEmail.trim() === '') {
//             setIsFormEmpty(true);
//             return;
//         }

//         setIsFormEmpty(false);

//         const newUser = {
//             id: Math.random(),
//             name: newName,
//             email: newEmail
//         };

//         props.onSaveUserForm(newUser);
//         setNewName('');
//         setNewEmail('');
//     }

//     return (
//         <div className="user-form card">
//             <form onSubmit={formSubmit}>
//                 <div className="form-controls">
//                     <div className="form-control">
//                         <label htmlFor="name" className={isFormEmpty && !newName ? 'error' : ''}>Name</label>
//                         <input className={isFormEmpty && !newName ? 'error' : ''} onChange={nameInputChange} value={newName} type="text" id="name" placeholder="Username" />
//                         <div>{ newName }</div>
//                     </div>
//                     <div className="form-control">
//                         <label htmlFor="email" className={isFormEmpty && !newEmail ? 'error' : ''}>Email</label>
//                         <input className={isFormEmpty && !newEmail ? 'error' : ''} onChange={emailInputChange} value={newEmail} type="text" id="email" placeholder="email" />
//                         <div>{newEmail}</div>
//                     </div>
//                 </div>
//                 <button>Submit</button>
//             </form>
//         </div>
//     );
// }

export default UserForm;