import "./add-user.css"

const AddUser = () => {
    return (
        <div className="add-user-container">
            <form className="add-user-form">
                <input type="text" placeholder="שם משתמש" name="username" required />
                <input
                    type="password"
                    placeholder="סיסמא"
                    name="password"
                    required
                />
                <input type="text" placeholder="שם מלא" name="fullname" required />
                <input type="email" placeholder="מייל" name="email" required />
                <input type="phone" placeholder="טלפון" name="phone" required />
                <select name="roles" id="roles">
                    <option value="User">
                        הרשאה
                    </option>
                    <option value="Admin">מנהל</option>
                    <option value="User">משתמש</option>
                </select>
                <select name="active" id="active">
                    <option value={true}>
                        פעיל
                    </option>
                    <option value={true}>כן</option>
                    <option value={false}>לא</option>
                </select>
                <input type="file" name="logo" />
                <button type="submit">שלח</button>
            </form>
        </div>
    );
};

export default AddUser;
