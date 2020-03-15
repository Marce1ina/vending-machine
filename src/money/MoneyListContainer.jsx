import { connect } from "react-redux";
import MoneyList from "./MoneyList.jsx";

const mapStateToProps = state => {
    return {
        availableValues: state.availableValues
    };
};

export default connect(mapStateToProps)(MoneyList);
