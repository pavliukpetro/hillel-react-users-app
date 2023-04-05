import User from './User';
import './Users.css';
import Card from '../UI/Card';

const Users = (props) => {

    return (
        <div>
            <Card className="users">
                <h1>Users</h1>
                {props.users.length === 0 && <p>No users found</p>}
                {props.users.length > 0 && props.users.map(user => (
                    <User id={user.id} name={user.name} email={user.email} key={user.id} />
                ))}
                {/* <User id={props.users[0].id} name={props.users[0].name} email={props.users[0].email} />
                <User id={props.users[1].id} name={props.users[1].name} email={props.users[1].email} />
                <User id={props.users[2].id} name={props.users[2].name} email={props.users[2].email} /> */}
            </Card>
        </div>
    );
};

export default Users;
