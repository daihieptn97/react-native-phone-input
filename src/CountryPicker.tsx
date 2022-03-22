import React, { Component } from 'react'; // eslint-disable-line import/no-extraneous-dependencies, no-use-before-define
import {
    Text, TouchableOpacity, View, Modal,
} from 'react-native';
// import { Picker } from '@react-native-picker/picker';

import Country from './country';
import styles from './styles';
import { ReactNativeCountryPickerProps, ReactNativeCountryPickerState } from './typings';

// const PickerItem = Picker.Item;

export default class CountryPicker extends Component<ReactNativeCountryPickerProps, ReactNativeCountryPickerState> {
    private picker: any;

    constructor(props) {
        super(props);

        this.state = {
            buttonColor: this.props.buttonColor || '#007AFF',
            modalVisible: false,
            selectedCountry: this.props.selectedCountry || Country.getAll()[0],
        };
    }

    selectCountry(selectedCountry) {
        this.setState({
            selectedCountry,
        });
    }

    onPressCancel = () => {
        if (this.props.onPressCancel) {
            this.props.onPressCancel();
        }

        this.setState({
            modalVisible: false,
        });
    }

    onPressSubmit = () => {
        if (this.props.onPressConfirm) {
            this.props.onPressConfirm();
        }

        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.selectedCountry);
        }

        this.setState({
            modalVisible: false,
        });
    }

    onValueChange = (selectedCountry) => {
        this.setState({
            selectedCountry,
        });
    }

    show() {
        this.setState({
            modalVisible: true,
        });
    }

    render() {
        const {buttonColor} = this.state;
        const itemStyle = this.props.itemStyle || {};
        return <View/>
    }
}