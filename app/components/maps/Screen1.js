import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Component1 from './Component1';

export default class Screen1 extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            Component1Visible: true,
        }

    }

    toggleComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';
        let val  = this.state[prop];
        if (typeof val === 'undefined') {
            return false;
        }

        this.setState({
            [prop]: val === true ? false : true
        })

        return true;

    }

    hideComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: false
        })

        return true;

    }

    showComponent(component = false) {

        if (!component) {
            return false;
        }

        let prop = component + 'Visible';

        this.setState({
            [prop]: true
        })

        return true;

    }
    render() {
        return (
            <View style={styles.container}>
              <StatusBar barStyle='light-content' />
                <View style={styles.screencontainer}>
                    <View style={styles.screencontainerInner}>
                        <Component1
                            navigation={this.props.navigation}
                            toggleComponent={ (component) => this.toggleComponent(component) }
                            hideComponent={ (component) => this.hideComponent(component) }
                            showComponent={ (component) => this.showComponent(component) }
                            visible={ this.state.Component1Visible }
                        />

                    </View>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

	screencontainer: {
	    backgroundColor: 'rgba(255,255,255,1)',
	    flex: 1,
	},

	screencontainerInner: {
	    flex: 1,
	},

});
