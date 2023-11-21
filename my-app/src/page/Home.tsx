import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';


const Home = () => {
    const users = useSelector((state: RootState) => state.users);

    return (
        <div>
            <h1>Data from backend:</h1>
            <ul>
                {users.map((user: any) => (
                    <li key={user.id}>
                        <strong>Name:</strong> {user.name},
                        <strong>Email:</strong> {user.email},
                        <strong>PHONE:</strong> {user.phone},
                        <strong>WEBSITE:</strong> {user.website},
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Home;