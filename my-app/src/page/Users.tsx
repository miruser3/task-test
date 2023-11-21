import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Users = () => {

    const users = useSelector((state: RootState) => state.users);

    return (
        <div>
            <ul>
                {users.map((users: any) => (
                    <li key={users.id}>{users.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;