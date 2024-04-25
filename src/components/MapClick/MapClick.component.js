/**
 * Author: Amr Samir
 * 
 * Description: 
 *  - An example of a plugin that listens to another 
 *    plugin's state changes (Map plugin), and log that state.
 */


import React from "react";
import { connect } from "react-redux";
import { selectorsRegistry, actionsRegistry } from "@penta-b/ma-lib";
import { drawShape, validateVL } from "../../services/mapUtils";

//inherting the props, State, render method and life cycle methods from React
class MapClickComponent extends React.Component {
    constructor(props) {
        super(props);
        // refrences the (This) current instance of the class
        this.handleResp = this.handleResp.bind(this);
    }

    handleResp(res) {
        const data = JSON.parse(res?.data[0]?.features);
        // removes the old click result if this.ID exist(container opened) remove the container
        this.id && this.props.removeMapClickResult(this.id);
        // using the showMapClickResult and passing it the things that we want it to show in the container
        this.props.showMapClickResult(
            {
                info: data,
            },
            (id) => (this.id = id)
        );
    }

    /**
     * Description:
     *  - React lifecycle method, here we check for state changes.
     */
    // prevProps => saving the old props before the change
    componentDidUpdate(prevProps) {
        //isActive => checking if the button is on or off
        if (this.props.isActive) {
            const { YusufLayer } = this.props.settings.dataSettings;
            const { code } = this.props.map.projection;
            drawShape(
                YusufLayer,
                this.handleResp,
                code
            );
        } else {
            // if the trigger isn't active clear all the features on the map and close the container
            validateVL({ clear: true });
            this.id && this.props.removeMapClickResult(this.id);
        }
    }

    render() {
        //why are we returning null?
        // we don't need to return anything since we are not changing the UI, we do it from MnA not from coding
        return null;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // getting the map reducers to be able to access the map projection code
        map: selectorsRegistry.getSelector(
            "selectMapReducers",
            state,
            ownProps.reducerId
        ),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showMapClickResult: (props, onAdd) => dispatch(actionsRegistry.getActionCreator('showComponent', 'ma-plugin-new-Yusuf', 'YusufContainer', props, onAdd)),
        removeMapClickResult: (id) => dispatch(actionsRegistry.getActionCreator('removeComponent', id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapClickComponent);