import {
    MdDashboard,
    MdPendingActions,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
    MdCalendarMonth,
    MdEuro,
    MdOutlineBusinessCenter 
  } from "react-icons/md";
  import {AiOutlineLike} from "react-icons/ai"
  import {HiOutlineShoppingBag } from "react-icons/hi"
  import MenuLink from "./MenuLink";
  import "./sideBar.css"
  const SideBar = () => {
    const menuItems = [
      {
        title: "דפים",
        list: [
          {
            title: "ראשי",
            path: "/dash",
            icon: <MdDashboard />,
          },
          {
            title: "משתמשים",
            path: "/dash/users",
            icon: <MdOutlineBusinessCenter  />,
          },
          {
            title: "קביעת תור",
            path: "/dash/order-turn",
            icon: < MdCalendarMonth/>,
          },
          {
            title: "מוצרים",
            path: "/dash/products",
            icon: < HiOutlineShoppingBag/>,
          },
          {
            title: "מחירון",
            path: "/dash/prices",
            icon: <MdEuro />,
          },
          {
            title: "המלצות",
            path: "/dash/fitback",
            icon: <AiOutlineLike/>,
          },
          {
            title: "פעולות",
            path: "/dash/actions",
            icon: <MdPendingActions />,
          },
        ],
      },
      {
        title: "משתמש",
        list: [
          {
            title: "הגדרות",
            path: "/dash/settings",
            icon: <MdOutlineSettings />,
          },
          {
            title: "עזרה",
            path: "/dash/help",
            icon: <MdHelpCenter />,
          },
        ],
      },
    ];
  
    const user = {
      username: "username",
      fullname: "שם מלא",
      company: "שם החברה",
      image: "",
    };
  
    return (
      <div className="side-bar">
        <div className="side-bar-user">
          <img
            src={user.image || "/noavatar.png"}
            alt=""
            width="50"
            height="50"
            className="side-bar-user-image"
          />
          <div className="side-bar-user-details">
            <span className="side-car-user-username">{user.fullname}</span>
            <span className="side-car-user-title">{user.company}</span>
          </div>
        </div>
  
        <ul className="side-bar-menu-list">
          {menuItems.map(cat=>(
            <li key={cat.title}>
              <span className="side-bar-menu-cat">{cat.title}</span>
              {cat.list.map(item=>(
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          ))}
        </ul>
        <button className="side-bar-logout">
          <MdLogout />
          יציאה
        </button>
      </div>
    );
  };
  
  export default SideBar;
  