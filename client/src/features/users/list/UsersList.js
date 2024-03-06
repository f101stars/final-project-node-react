import React from 'react'
import Search from '../../../components/search/Search';
import { Link } from 'react-router-dom';
import "./users-list.css"
const UsersList = () => {
    const users = [{
        username: "323749788", email: "f0548580123@gmail.com", active: true, fullname: "faigy nachman", phone: "0548580123", roles: "User"
    }]
    return (
        <div className="users-list">
            <div className="users-list-top">
                <Search placeholder="Search for a user..." />
                <Link className="users-list-add-button" to="/dash/users/add">משתמש חדש</Link>


            </div>
            <table className="users-list-table">
                <thead>
                    <tr>
                        <td>שם</td>
                        <td>שם משתמש</td>
                        <td>מייל</td>
                        <td>הרשאה</td>
                        <td>פעיל</td>
                        <td>טלפון</td>
                        <td>פעולות</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <div className="users-list-user">
                                <img 
                                src={user.image || "/noavatar.png"}
                                alt=""
                                width={40}
                                height={40}
                                className="users-list-user-image" />
                                    {user.fullname}
                                </div>
                            </td>
                            <td>{user.username}</td>

                            <td>{user.email}</td>

                            <td>{user.roles === "Admin" ? "מנהל" : "משתמש"}</td>
                            <td>{user.active ? "כן" : "לא"}</td>
                            <td>{user.phone}</td>

                            <td>
                                <div className="users-list-buttons">
                                    <Link className='users-list-button users-list-view' to={`/dash/users/${user._id}`}>
                                        צפייה
                                    </Link>

                                    <button className="users-list-button users-list-delete">
                                        מחיקה
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default UsersList