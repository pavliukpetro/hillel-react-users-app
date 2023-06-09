import {useState} from 'react';
import Card from '../UI/Card';
import styles from './User.module.scss';

console.log(styles);

const User = (props) => {
    const [userName, setUserName] = useState(props.name);
    // console.log(props);

    function handleClick(e) {
        // console.log('Button click');
        setUserName('new user name');
    }

    return (
        <Card className={styles.userItem}>
            <div className={styles.userItemId}>{props.id}.</div>
            <div className="user-item_name">{userName}</div>
            <div className="user-item_email">{props.email}</div>
            <button onClick={handleClick}>Click</button>
        </Card>
    );
}

export default User;
