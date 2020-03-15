import { connect } from "react-redux";
import Core from "./Core.jsx";
import { insertMoney } from "./redux/actions.js";

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        insertMoney: valueIndex => dispatch(insertMoney(valueIndex))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Core);
