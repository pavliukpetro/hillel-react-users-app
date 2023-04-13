import { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Users</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

// const Header = () => {
//     return (
//         <header>
//             <nav>
//                 <ul>
//                     <li>
//                         <a href="#">Home</a>
//                     </li>
//                     <li>
//                         <a href="#">Users</a>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

export default Header;
