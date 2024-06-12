import React, {Component} from "react";
import launchViewer from './ViewerFunction';

class Viewer extends Component {
    componentDidMount(){
        const {docId} = this.props;
        
        launchViewer('forgeViewer', docId);
    }

    render(){
        return(
            <div id="forgeViewer">
            </div>
        )
    }
}

export default Viewer;