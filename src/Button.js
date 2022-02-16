import PropTypes from "prop-types";
import styled from "./Button.module.css"

function Button({ text }) {
    /* create-react-app�� ��� - xxx.module.css ���� css �� �����ϸ� ������ class ���� ���´�. */
    return <button className={styled.btn}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;