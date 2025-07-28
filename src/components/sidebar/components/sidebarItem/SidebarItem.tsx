import { ChevronDown, ChevronUp } from "lucide-react";
import "./sidebarItem.scss";
import { useState } from "react";

interface GroupItem {
    id: string | number;
    title: string;
    color: string;
}

interface SidebarItemProps {
    title: string;
    icon: React.ReactNode;
    group?: GroupItem[] | undefined;
    isHover: boolean;
    setCurrent: (prop: string) => void;
}

export const SidebarItem = ({
    title,
    icon,
    group,
    isHover,
    setCurrent,
}: SidebarItemProps) => {
    const [isGroupOpen, setIsGroupOpen] = useState(false);

    return (
        <div
            className="sidebar-item"
            style={{
                width: isHover ? "100%" : "",
            }}
        >
            <div
                className="nav-menu__point"
                onClick={() =>
                    group ? setIsGroupOpen((prev) => !prev) : setCurrent(title)
                }
            >
                {icon}
                {isHover && <p>{title}</p>}
                {isHover &&
                    group &&
                    (isGroupOpen ? <ChevronUp /> : <ChevronDown />)}
            </div>
            {isHover && (
                <div
                    className="nav-menu__sub-points-container"
                    style={{
                        maxHeight: isGroupOpen ? "100%" : "0",
                    }}
                >
                    {group?.map(({ id, title: groupTitle, color }) => (
                        <div
                            key={id}
                            className="nav-menu__sub-point"
                            onClick={() =>
                                setCurrent(`${title} / ${groupTitle}`)
                            }
                        >
                            <div
                                style={{
                                    backgroundColor: color,
                                }}
                                className="nav-menu__sub-point--color"
                            ></div>
                            <div className="nav-menu__sub-point--title">
                                {groupTitle}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
