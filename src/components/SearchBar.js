import { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./SearchBar.module.css";

function SearchBar(props) {
    const [keyword, setKeyword] = useState("");
    let history = useHistory();

    const onChange = (e) => setKeyword(e.target.value);
    const handelSubmut = (e) => {
        e.preventDefault();
        if (keyword !== "") {
            history.push(`/search/${keyword}`);
        } else {
            history.push(`/`);
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handelSubmut}>
                <div className={styles.div_serach}>
                    <input className={styles.input_search}
                        value={props.keyword}
                        onChange={onChange}
                        placeholder="Search Movie Title..."
                    />
                    <button className={styles.button_search}>검색🔍</button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;