import React from "react";

import DenseTable from "./DenseTable.jsx";

class HomePage extends React.Component {
    render() {
        return (
            <div className="d-flex flex-column p-3">
                <h3 className="text-center">All registered users:</h3>
                <DenseTable/>
            </div>
        );
    }
}

export { HomePage };