import {
    Bell,
    Briefcase,
    Calendar,
    ChartNoAxesColumnIncreasing,
    Goal,
    House,
    MessageSquare,
    PanelLeftClose,
    PanelRightClose,
    Search as SearchIcon,
    Settings,
    SlidersHorizontal,
} from "lucide-react";
import "./sidebar.scss";
import { Logo, Search, SidebarItem } from "./components";
import { useState } from "react";

const NAV_MENU_DATA = [
    { id: 1, title: "Home", icon: <House size="30px" /> },
    { id: 2, title: "Calendar", icon: <Calendar size="30px" /> },
    { id: 3, title: "Messages", icon: <MessageSquare size="30px" /> },
    {
        id: 4,
        title: "Projects",
        icon: <Briefcase size="30px" />,
        group: [
            { id: 7, title: "Google", color: "orange" },
            { id: 8, title: "Amazon", color: "red" },
            { id: 9, title: "Facebook", color: "green" },
            { id: 10, title: "Airbnb", color: "skyblue" },
        ],
    },
    {
        id: 5,
        title: "Progress",
        icon: <ChartNoAxesColumnIncreasing size="30px" />,
    },
    { id: 6, title: "Goals", icon: <Goal size="30px" /> },
];

interface SidebarProps {
    setCurrent: (prop: string) => void;
}

export const Sidebar = ({ setCurrent }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="sidebar"
            onMouseEnter={() => !isOpen && setIsHover(true)}
            onMouseLeave={() => !isOpen && setIsHover(false)}
            style={{
                width: isOpen || isHover ? "300px" : "90px",
            }}
        >
            <div
                className="sidebar__header"
                style={{
                    alignItems: isHover ? "flex-start" : "center",
                    padding: isHover ? "50px 15px 20px 15px" : "20px 0 25px 0",
                }}
            >
                <div
                    className="sidebar__header--top"
                    style={{ width: isHover ? "100%" : "" }}
                >
                    <Logo isHover={isHover} />
                    {isOpen && isHover && (
                        <PanelLeftClose
                            className="toggle-nav-btn"
                            size="27px"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        />
                    )}
                    {!isOpen && isHover && (
                        <PanelRightClose
                            className="toggle-nav-btn"
                            size="27px"
                            onClick={() => {
                                setIsOpen(true);
                                setIsHover(true);
                            }}
                        />
                    )}
                    <div className="tooltip-nav">
                        {isOpen ? "Hide navigation" : "Open navigation"}
                    </div>
                </div>
                {isHover ? (
                    <Search />
                ) : (
                    <SearchIcon color="#86879C" size="30px" />
                )}
            </div>
            <div
                className="sidebar__main"
                style={{
                    alignItems: isHover ? "flex-start" : "center",
                }}
            >
                {NAV_MENU_DATA.map(({ title, icon, group }) => (
                    <SidebarItem
                        title={title}
                        icon={icon}
                        group={group}
                        isHover={isHover}
                        setCurrent={setCurrent}
                    />
                ))}
            </div>
            <div
                className="sidebar__footer"
                style={{
                    alignItems: isHover ? "flex-start" : "center",
                }}
            >
                <SidebarItem
                    title="Notification"
                    icon={<Bell size="30px" />}
                    isHover={isHover}
                    setCurrent={setCurrent}
                />
                <SidebarItem
                    title="Settings"
                    icon={<Settings size="30px" />}
                    isHover={isHover}
                    setCurrent={setCurrent}
                />
            </div>
            <div
                className="sidebar__footer--user"
                style={{
                    justifyContent: isHover ? "space-between" : "center",
                }}
            >
                <img src="user-logo.png" />
                {isHover && <p>Jane Cooper</p>}
                {isHover && <SlidersHorizontal />}
            </div>
        </div>
    );
};
