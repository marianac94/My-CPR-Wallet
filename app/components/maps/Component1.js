import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

import { MapView } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

export default class Component1 extends React.Component {


    render() {

        if (!this.props.visible) {
            return false;
        }


        return (

            <View
                style={styles.component}
            >

                <View style={styles.layouts}>

                	<View style={styles.layout1}>

                		<View style={styles.itemcontainer1}>

                			<View style={styles.itemcontainer1Inner}>

                                <MapView
										style={styles.item1}
										initialRegion={{
											latitude: 37.78825,
											longitude: -122.4324,
											latitudeDelta: 0.0922,
											longitudeDelta: 0.0421,
										}}
									/>

                                <View style={styles.inneritem1}>
                                    <View style={styles.item2}>
											<FontAwesome
												name={"map-pin"}
												size={28}
												color={"rgba(0,0,0,1)"}
											/>
										</View>
                                </View>

                			</View>

                		</View>

                	</View>

                </View>

            </View>

        );

    }

}

const styles = StyleSheet.create({

	component: {
	    width: '100%',
	    flexDirection: 'column',
	    height: '100%',
	    justifyContent: 'center',
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	},

	layouts: {
	    flexDirection: 'row',
	    flexWrap: 'wrap',
	},

	layout1: {
	    width: '100%',
	    height: 619.5,
	},

	itemcontainer1: {
	    width: '100%',
	    height: '100%',
	    paddingTop: 7.5,
	    paddingBottom: 7.5,
	    paddingLeft: 7.5,
	    paddingRight: 7.5,
	},

	itemcontainer1Inner: {
	    width: '100%',
	    height: '100%',
	    position: 'relative',
	    alignItems: 'center',
	    justifyContent: 'center',
	},

	item1: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	},

	inneritem1: {
	    position: 'absolute',
	    zIndex: 1,
	    top: 10.5,
	    left: '0%',
	    width: '19%',
	    height: 51,
	    alignItems: 'center',
	    justifyContent: 'center',
	},

	item2: {
	    width: '100%',
	    height: '100%',
	    alignItems: 'center',
	    justifyContent: 'center',
	    overflow: 'hidden',
	},

});
