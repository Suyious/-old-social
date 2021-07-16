import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth';
import DropDown from './DropDown';
import  "./Navigation.css"
import NewPost from './NewPost';

function Navigation() {

    const {logout, user} = useContext(AuthContext);
    const [openBar, setOpenBar] = useState(false);
    const [openSettings, setOpenSettings] = useState(false);

    const [darkMode, setDarkMode] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem("darkMode")==="true"){
            setDarkMode(true);
        }
    },[])

    const darkModeToggle = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("darkMode",!darkMode);
        const root = document.querySelector(":root");
        if(!darkMode){
            root.style.setProperty("--primary","#250D07");
            root.style.setProperty("--secondary-trans","#261818E5");
            root.style.setProperty("--secondary-trans-var","#261818");
            root.style.setProperty("--tertiary-text","#DBDCE8");
            root.style.setProperty("--editor-body","#302727");
            root.style.setProperty("--primary-text","#fff");
            root.style.setProperty("--highlight","#cccccc1f");
        } else {
            root.style.setProperty("--primary","#F9EFF4");
            root.style.setProperty("--secondary-trans","#EEF1FFD6");
            root.style.setProperty("--secondary-trans-var","#f1f4fff3");
            root.style.setProperty("--primary-text","#000");
            root.style.setProperty("--tertiary-text","#4f4f4f");
            root.style.setProperty("--editor-body","#F5F7FF");
            root.style.setProperty("--highlight","#ccccccc0");
        }
    }

    const handleLogout = () => {
        setOpenSettings(false);
        logout();
    }

    return (
        <div className="Navigation">
            <div className="Nav  wrapper">
                <div className="nav_left logo">
                    <h1>social.</h1>
                </div>
                {user && <ul className="nav_right">
                    <li className="nav_list post" onClick={()=>setOpenBar(!openBar)}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.1666 14.1667C22.1666 14.719 21.7189 15.1667 21.1666 15.1667H16.1666C15.6143 15.1667 15.1666 15.6144 15.1666 16.1667V21.1667C15.1666 21.719 14.7189 22.1667 14.1666 22.1667H13.8333C13.281 22.1667 12.8333 21.719 12.8333 21.1667V16.1667C12.8333 15.6144 12.3855 15.1667 11.8333 15.1667H6.83325C6.28097 15.1667 5.83325 14.719 5.83325 14.1667V13.8333C5.83325 13.2811 6.28097 12.8333 6.83325 12.8333H11.8333C12.3855 12.8333 12.8333 12.3856 12.8333 11.8333V6.83334C12.8333 6.28106 13.281 5.83334 13.8333 5.83334H14.1666C14.7189 5.83334 15.1666 6.28106 15.1666 6.83334V11.8333C15.1666 12.3856 15.6143 12.8333 16.1666 12.8333H21.1666C21.7189 12.8333 22.1666 13.2811 22.1666 13.8333V14.1667Z" fill="#4F4F4F"/>
                        </svg>
                    </li>
                    <li className="nav_list notif">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 20V20.4142L21.7929 20.7071L23.8358 22.75H6.16421L8.20711 20.7071L8.5 20.4142V20V13.75C8.5 10.2487 10.3219 7.54184 13.3556 6.82306L14.125 6.64075V5.85V5C14.125 4.51478 14.5148 4.125 15 4.125C15.4852 4.125 15.875 4.51478 15.875 5V5.85V6.64011L16.6437 6.82288C19.6662 7.54153 21.5 10.2621 21.5 13.75V20ZM16.114 26C15.8386 26.3062 15.4401 26.5 15 26.5C14.5543 26.5 14.1557 26.3066 13.8816 26H16.114Z" stroke="#4F4F4F" strokeWidth="2"/>
                        </svg>
                    </li>
                    <li className="nav_list setting" onClick={()=>setOpenSettings(!openSettings)}>
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.4805 15.6842L22.4883 15.5601L22.4179 16.1227L22.8645 16.4719L23.4805 15.6842ZM26.0301 17.6779L26.6498 16.893L26.6461 16.8902L26.0301 17.6779ZM26.1751 18.4512L27.0409 18.9517L27.0471 18.941L27.053 18.9301L26.1751 18.4512ZM23.7584 22.6321L22.8927 22.1316L22.8865 22.1423L22.8806 22.1532L23.7584 22.6321ZM23.0214 22.8979L22.6487 23.8259L22.657 23.8291L23.0214 22.8979ZM20.0126 21.6896L20.3853 20.7616L19.8629 20.5518L19.4126 20.8896L20.0126 21.6896ZM17.9705 22.8737L17.5913 21.9484L17.0619 22.1654L16.9807 22.7318L17.9705 22.8737ZM17.5114 26.0758L16.5215 25.9339L16.5202 25.9428L16.5191 25.9518L17.5114 26.0758ZM11.4939 26.0758L12.4861 25.9518L12.485 25.9428L12.4837 25.9339L11.4939 26.0758ZM11.0347 22.8737L12.0246 22.7318L11.9434 22.1654L11.4139 21.9484L11.0347 22.8737ZM8.99261 21.6896L9.60232 20.8969L9.14977 20.5488L8.61994 20.7616L8.99261 21.6896ZM5.98386 22.8979L6.32561 23.8377L6.34117 23.832L6.35654 23.8259L5.98386 22.8979ZM5.24678 22.6321L6.12468 22.1532L6.11875 22.1423L6.11255 22.1316L5.24678 22.6321ZM2.83011 18.4512L1.95222 18.9301L1.95815 18.941L1.96434 18.9517L2.83011 18.4512ZM2.97511 17.6779L2.3591 16.8902L2.35547 16.893L2.97511 17.6779ZM5.5247 15.6842L6.1407 16.4719L6.58729 16.1227L6.51697 15.5601L5.5247 15.6842ZM5.5247 13.3158L6.51697 13.4399L6.58729 12.8773L6.1407 12.5281L5.5247 13.3158ZM2.97511 11.3221L2.35546 12.107L2.35911 12.1098L2.97511 11.3221ZM2.83011 10.5487L3.69108 11.0575L3.69588 11.0492L2.83011 10.5487ZM5.24678 6.36791L6.11255 6.86835L6.11875 6.85763L6.12468 6.84676L5.24678 6.36791ZM5.98386 6.10207L6.35655 5.17407L6.34826 5.17083L5.98386 6.10207ZM8.99261 7.31041L8.61994 8.23837L9.14229 8.44815L9.59261 8.11041L8.99261 7.31041ZM11.0347 6.12624L11.4139 7.05154L11.9434 6.83456L12.0246 6.26818L11.0347 6.12624ZM11.4939 2.92416L12.4837 3.0661L12.485 3.05716L12.4861 3.04819L11.4939 2.92416ZM17.5114 2.92416L16.5191 3.04819L16.5202 3.05716L16.5215 3.0661L17.5114 2.92416ZM17.9705 6.12624L16.9807 6.26818L17.0619 6.83456L17.5913 7.05154L17.9705 6.12624ZM20.0126 7.31041L19.4029 8.10303L19.8555 8.45115L20.3853 8.23837L20.0126 7.31041ZM23.0214 6.10207L22.6796 5.16228L22.6641 5.16794L22.6487 5.17411L23.0214 6.10207ZM23.7584 6.36791L22.8806 6.84676L22.8865 6.85763L22.8927 6.86835L23.7584 6.36791ZM26.1751 10.5487L27.053 10.0699L27.0471 10.059L27.0409 10.0483L26.1751 10.5487ZM26.0301 11.3221L26.6461 12.1098L26.6498 12.107L26.0301 11.3221ZM23.4805 13.3158L22.8645 12.5281L22.4179 12.8773L22.4883 13.4399L23.4805 13.3158ZM24.4728 15.8082C24.5236 15.402 24.5651 14.9695 24.5651 14.5H22.5651C22.5651 14.8521 22.5341 15.193 22.4883 15.5601L24.4728 15.8082ZM26.6461 16.8902L24.0965 14.8964L22.8645 16.4719L25.4141 18.4656L26.6461 16.8902ZM27.053 18.9301C27.4171 18.2625 27.2848 17.3944 26.6498 16.893L25.4105 18.4628C25.2346 18.3239 25.2231 18.1083 25.2972 17.9724L27.053 18.9301ZM24.6242 23.1325L27.0409 18.9517L25.3093 17.9508L22.8927 22.1316L24.6242 23.1325ZM22.657 23.8291C23.3923 24.1169 24.2443 23.8296 24.6363 23.1109L22.8806 22.1532C22.9826 21.9662 23.2063 21.8964 23.3858 21.9667L22.657 23.8291ZM19.6399 22.6175L22.6487 23.8259L23.394 21.9699L20.3853 20.7616L19.6399 22.6175ZM18.3498 23.799C19.1823 23.4578 19.9326 22.9996 20.6126 22.4896L19.4126 20.8896C18.836 21.3221 18.2329 21.6855 17.5913 21.9484L18.3498 23.799ZM18.5012 26.2178L18.9604 23.0157L16.9807 22.7318L16.5215 25.9339L18.5012 26.2178ZM16.9193 27.5833C17.6995 27.5833 18.4016 27.0158 18.5036 26.1999L16.5191 25.9518C16.5486 25.7158 16.7432 25.5833 16.9193 25.5833V27.5833ZM12.0859 27.5833H16.9193V25.5833H12.0859V27.5833ZM10.5016 26.1999C10.6036 27.0158 11.3057 27.5833 12.0859 27.5833V25.5833C12.262 25.5833 12.4566 25.7158 12.4861 25.9518L10.5016 26.1999ZM10.0448 23.0157L10.504 26.2178L12.4837 25.9339L12.0246 22.7318L10.0448 23.0157ZM8.3829 22.4822C9.07647 23.0157 9.82999 23.4607 10.6555 23.799L11.4139 21.9484C10.7652 21.6826 10.1654 21.3301 9.60232 20.8969L8.3829 22.4822ZM6.35654 23.8259L9.36529 22.6175L8.61994 20.7616L5.61119 21.9699L6.35654 23.8259ZM4.36888 23.1109C4.77768 23.8604 5.65038 24.0832 6.32561 23.8377L5.64212 21.9581C5.72968 21.9263 5.81621 21.9283 5.89269 21.9544C5.97458 21.9823 6.06639 22.0464 6.12468 22.1532L4.36888 23.1109ZM1.96434 18.9517L4.38101 23.1325L6.11255 22.1316L3.69588 17.9508L1.96434 18.9517ZM2.35547 16.893C1.72043 17.3944 1.58808 18.2625 1.95222 18.9301L3.70801 17.9724C3.78215 18.1083 3.77063 18.3239 3.59476 18.4628L2.35547 16.893ZM4.90869 14.8964L2.35911 16.8902L3.59112 18.4656L6.1407 16.4719L4.90869 14.8964ZM4.44011 14.5C4.44011 14.9568 4.48153 15.401 4.53242 15.8082L6.51697 15.5601C6.4712 15.1939 6.44011 14.8407 6.44011 14.5H4.44011ZM4.53242 13.1918C4.48153 13.5989 4.44011 14.0432 4.44011 14.5H6.44011C6.44011 14.1593 6.4712 13.806 6.51697 13.4399L4.53242 13.1918ZM2.35911 12.1098L4.90869 14.1036L6.1407 12.5281L3.59112 10.5343L2.35911 12.1098ZM1.96919 10.04C1.54778 10.7532 1.74832 11.6276 2.35547 12.107L3.59476 10.5372C3.74274 10.654 3.79828 10.876 3.69104 11.0575L1.96919 10.04ZM4.38101 5.86746L1.96434 10.0483L3.69588 11.0492L6.11255 6.86835L4.38101 5.86746ZM6.34826 5.17083C5.61293 4.88309 4.76089 5.17037 4.36888 5.88905L6.12468 6.84676C6.02267 7.03377 5.79896 7.10355 5.61946 7.03332L6.34826 5.17083ZM9.36529 6.38244L6.35654 5.17411L5.61119 7.03004L8.61994 8.23837L9.36529 6.38244ZM10.6555 5.20093C9.82295 5.54213 9.07265 6.00038 8.39261 6.51041L9.59261 8.11041C10.1692 7.67793 10.7723 7.31451 11.4139 7.05154L10.6555 5.20093ZM10.504 2.78221L10.0448 5.9843L12.0246 6.26818L12.4837 3.0661L10.504 2.78221ZM12.0859 1.41666C11.3057 1.41666 10.6036 1.98415 10.5016 2.80012L12.4861 3.04819C12.4566 3.28416 12.262 3.41666 12.0859 3.41666V1.41666ZM16.9193 1.41666H12.0859V3.41666H16.9193V1.41666ZM18.5036 2.80012C18.4016 1.98415 17.6995 1.41666 16.9193 1.41666V3.41666C16.7432 3.41666 16.5486 3.28416 16.5191 3.04819L18.5036 2.80012ZM18.9604 5.9843L18.5012 2.78221L16.5215 3.0661L16.9807 6.26818L18.9604 5.9843ZM20.6223 6.51778C19.9288 5.98427 19.1752 5.53925 18.3498 5.20093L17.5913 7.05154C18.24 7.3174 18.8398 7.66988 19.4029 8.10303L20.6223 6.51778ZM22.6487 5.17411L19.6399 6.38244L20.3853 8.23837L23.394 7.03004L22.6487 5.17411ZM24.6363 5.88905C24.2275 5.13959 23.3548 4.91674 22.6796 5.16228L23.3631 7.04187C23.2755 7.07371 23.189 7.07163 23.1125 7.04556C23.0307 7.01765 22.9388 6.95363 22.8806 6.84676L24.6363 5.88905ZM27.0409 10.0483L24.6242 5.86746L22.8927 6.86835L25.3093 11.0492L27.0409 10.0483ZM26.6498 12.107C27.2848 11.6056 27.4171 10.7375 27.053 10.0699L25.2972 11.0276C25.2231 10.8917 25.2346 10.676 25.4105 10.5372L26.6498 12.107ZM24.0965 14.1036L26.6461 12.1098L25.4141 10.5343L22.8645 12.5281L24.0965 14.1036ZM24.5651 14.5C24.5651 14.0305 24.5236 13.598 24.4728 13.1918L22.4883 13.4399C22.5341 13.807 22.5651 14.1478 22.5651 14.5H24.5651ZM14.5026 17.7292C12.7228 17.7292 11.2734 16.2798 11.2734 14.5H9.27343C9.27343 17.3844 11.6182 19.7292 14.5026 19.7292V17.7292ZM17.7318 14.5C17.7318 16.2798 16.2824 17.7292 14.5026 17.7292V19.7292C17.387 19.7292 19.7318 17.3844 19.7318 14.5H17.7318ZM14.5026 11.2708C16.2824 11.2708 17.7318 12.7202 17.7318 14.5H19.7318C19.7318 11.6156 17.387 9.27082 14.5026 9.27082V11.2708ZM11.2734 14.5C11.2734 12.7202 12.7228 11.2708 14.5026 11.2708V9.27082C11.6182 9.27082 9.27343 11.6156 9.27343 14.5H11.2734Z" fill="#4F4F4F"/>
                        </svg>
                    </li>
                    <DropDown openDrop={openSettings} setOpenDrop={setOpenSettings}>
                        <ul className="settings">
                            <li className="user">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V18Z" fill="#000000"/></svg>
                                user
                            </li>
                            {darkMode?
                            <li className="dark" onClick={darkModeToggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"/></svg>
                                light mode
                            </li>
                            :
                            <li className="dark" onClick={darkModeToggle}>
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"/></svg>
                                dark mode
                            </li>
                            }
                            <li className="logout" onClick={handleLogout}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V16C3 15.45 3.45 15 4 15C4.55 15 5 15.45 5 16V18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18V6C19 5.45 18.55 5 18 5H6C5.45 5 5 5.45 5 6V8C5 8.55 4.55 9 4 9C3.45 9 3 8.55 3 8V5C3 3.9 3.89 3 5 3ZM15.79 12.7L12.2 16.29C11.81 16.68 11.18 16.68 10.79 16.29C10.41 15.91 10.4 15.27 10.79 14.88L12.67 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H12.67L10.79 9.11C10.4 8.72 10.4 8.09 10.79 7.7C10.9768 7.51275 11.2305 7.40751 11.495 7.40751C11.7595 7.40751 12.0132 7.51275 12.2 7.7L15.79 11.29C16.18 11.68 16.18 12.31 15.79 12.7Z" fill="#000000"/></svg>
                                Log out
                            </li>
                        </ul>
                    </DropDown>
                </ul>}
            </div>
            <NewPost openBar={openBar} setOpenBar={setOpenBar}/>
        </div>
    )
}

export default Navigation
