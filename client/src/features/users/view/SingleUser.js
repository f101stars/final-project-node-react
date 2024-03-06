import "./single-user.css"
const SingleUser = () => {
  const user = {
    username: "323749788", email: "f0548580123@gmail.com", active: true, fullname: "faigy nachman", phone: "0548580123", roles: "User"
  }
  return (
    <div className="single-user-container">
      <div className="single-user-info">
        <div className="single-user-img-container">
          <img src={user.company?.image || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className="single-user-form-container">
        <form className="single-user-form">
          <input name="_id" defaultValue={user._id} type="hidden" />
          <label>שם משתמש</label>
          <input readOnly={true} type="text" name="username" defaultValue={user.username} />
          <label>סיסמא</label>
          <input type="password" name="password" />
          <label>שם מלא</label>
          <input type="text" name="fullname" placeholder="שם מלא" defaultValue={user.fullname} />
          <label>מייל</label>
          <input type="email" name="email" placeholder="מייל " defaultValue={user.email} />

          <label>טלפון</label>
          <input type="text" name="phone" placeholder="טלפון " defaultValue={user.phone} />

          <label>הרשאה</label>
          <select name="roles" id="roles">
            <option value="Admin" selected={user.roles === "Admin"}>מנהל</option>
            <option value="User" selected={user.roles === "User"}>משתמש</option>
          </select>
          <label>פעיל?</label>
          <select name="active" id="active">
            <option value={true} selected={user.active}>כן</option>
            <option value={false} selected={!user.active}>לא</option>
          </select>
          <button>עדכן</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
