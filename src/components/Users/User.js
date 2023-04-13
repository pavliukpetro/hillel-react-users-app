import {Component, useState} from 'react';
import Card from '../UI/Card';
import styles from './User.module.scss';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: this.props.name,
            title: 'User Component'
        }
    }

    handleClick(e) {
        console.log('Button click');
        this.setState({userName: 'new user name'});
        // setUserName('new user name');
    }

    render() {
        // console.log(this);

        return (
            <Card className={styles.userItem}>
                <div className={styles.userItemId}>{this.props.id}.</div>
                <div className="user-item_name">{this.state.userName}</div>
                <div className="user-item_email">{this.props.email}</div>
                <button onClick={this.handleClick.bind(this)}>Click</button>
            </Card>
        );
    }
}

// const User = (props) => {
//     const [userName, setUserName] = useState(props.name);
//     // console.log(props);

//     function handleClick(e) {
//         // console.log('Button click');
//         setUserName('new user name');
//     }

//     return (
//         <Card className={styles.userItem}>
//             <div className={styles.userItemId}>{props.id}.</div>
//             <div className="user-item_name">{userName}</div>
//             <div className="user-item_email">{props.email}</div>
//             <button onClick={handleClick}>Click</button>
//         </Card>
//     );
// }

export default User;
