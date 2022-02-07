'use strict';

import Picker from 'react-native-picker';

const fn = () => null;

class PickerComponent {
    constructor() {
        this._pickerTitleText = '';
        this._pickerConfirmBtnText = '';
        this._pickerCancelBtnText = '';
        this._pickerConfirmBtnColor = [255, 255, 255, 1];
        this._pickerCancelBtnColor = [255, 255, 255, 1];
        this._pickerFontColor = [255, 255, 255, 1];
    }

    get pickerTitleText() {
        return this._pickerTitleText;
    }

    set pickerTitleText(value) {
        this._pickerTitleText = value;
    }

    get pickerConfirmBtnText() {
        return this._pickerConfirmBtnText;
    }

    set pickerConfirmBtnText(value) {
        this._pickerConfirmBtnText = value;
    }

    get pickerCancelBtnText() {
        return this._pickerCancelBtnText;
    }

    set pickerCancelBtnText(value) {
        this._pickerCancelBtnText = value;
    }

    get pickerConfirmBtnColor() {
        return this._pickerConfirmBtnColor;
    }

    set pickerConfirmBtnColor(value) {
        this._pickerConfirmBtnColor = value;
    }

    get pickerCancelBtnColor() {
        return this._pickerCancelBtnColor;
    }

    set pickerCancelBtnColor(value) {
        this._pickerCancelBtnColor = value;
    }

    get pickerFontColor() {
        return this._pickerFontColor;
    }

    set pickerFontColor(value) {
        this._pickerFontColor = value;
    }

    show(
        data = [],
        selectedValue = [],
        onConfirm = fn,
        onCancel = fn,
        onSelect = fn
    ) {
        Picker.init({
            pickerTitleText: this.pickerTitleText,
            pickerConfirmBtnText: this.pickerConfirmBtnText,
            pickerCancelBtnText: this.pickerCancelBtnText,
            pickerFontColor: this.pickerFontColor,
            pickerConfirmBtnColor: this.pickerConfirmBtnColor,
            pickerCancelBtnColor: this.pickerCancelBtnColor,
            pickerData: data,
            selectedValue: selectedValue,
            onPickerConfirm: item => {
                onConfirm(item);
            },
            onPickerCancel: item => {
                onCancel(item);
            },
            onPickerSelect: item => {
                onSelect(item);
            },
        });
        Picker.show();
    }

    hide() {
        Picker.hide();
    }

    toggle() {
        Picker.toggle();
    }
}

const component = new PickerComponent();
export default component;
