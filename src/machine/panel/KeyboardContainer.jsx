import { connect } from "react-redux";
import Keyboard from "./Keyboard.jsx";
import { typeNumber } from "../../redux/actions.js";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
    return {
        typeNumber: number => dispatch(typeNumber(number))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
