import React from "react";
import { Link } from 'react-router-dom';

import DenseTable from "./DenseTable.jsx";

class HomePage extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>All registered users:</h3>
                <DenseTable/>
            </div>
        );
    }
}

export { HomePage };