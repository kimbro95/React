import PropTypes from "prop-types";
import styled from "./Button.module.css"

function Button({ text }) {
    /* create-react-app의 기능 - xxx.module.css 통해 css 를 설정하면 랜덤한 class 명을 갖는다. */
    return <button className={styled.btn}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;