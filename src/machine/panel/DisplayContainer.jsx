import { connect } from "react-redux";
import Display from "./Display.jsx";

const mapStateToProps = state => {
    return {
        text: state.choosenNumber ? state.choosenNumber : `Credit: ${state.credit}`
    };
};

export default connect(mapStateToProps)(Display);
