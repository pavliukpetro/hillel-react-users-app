import { Component } from 'react';
import User from './User';
import './Users.css';
import Card from '../UI/Card';

class Users extends Component {
    render() {
        return (
            <div>
                <Card className="users">
                    <h1>Users</h1>
                    {this.props.users.length === 0 && <p>No users found</p>}
                    {this.props.users.length > 0 && this.props.users.map(user => (
                        <User id={user.id} name={user.name} email={user.email} key={user.id} />
                    ))}
                </Card>
            </div>
        );
    }
}

// const Users = (props) => {
//     return (
//         <div>
//             <Card className="users">
//                 <h1>Users</h1>
//                 {props.users.length === 0 && <p>No users found</p>}
//                 {props.users.length > 0 && props.users.map(user => (
//                     <User id={user.id} name={user.name} email={user.email} key={user.id} />
//                 ))}
//             </Card>
//         </div>
//     );
// };

export default Users;
