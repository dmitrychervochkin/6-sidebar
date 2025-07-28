import { Search } from "lucide-react";
import "./search.scss";

export const SearchContainer = () => {
    return (
        <div className="search">
            <Search className="search__icon" size="22px" />
            <input className="search__input" placeholder="Search" />
        </div>
    );
};
