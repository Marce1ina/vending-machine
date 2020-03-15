import { connect } from "react-redux";
import CreditDisplay from "./CreditDisplay.jsx";

const mapStateToProps = state => {
    return {
        credit: state.credit
    };
};

export default connect(mapStateToProps)(CreditDisplay);
