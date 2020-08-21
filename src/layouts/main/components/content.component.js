import React, {Component} from "react";

class ContentComponent extends Component {
    render() {

        return (
            <div className="p-2">
                {this.props.children}
            </div>
        );
    }
}

export default ContentComponent;