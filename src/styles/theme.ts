import { Theme } from "@/types";

export const lightTheme: Theme = {
    appBackground: '#FFF',
    appColor: '#000',
    appDefaultStroke: '#E0E0E0',
    appLogo: '#dnc-logo-black.svg',
    appskeletonFrom: '#EEE',
    appSkeletonTo: '#CCC',
    buttons: {
        alert: '#E80000',
        alertColor: '#FFF',
        alertHover: '#D80000',
        disabled: '#CCC',
        disabledColor: '#666',
        primary: '#0C70F2',
        primaryColor: '#FFF',
        primaryHover: '#0061DE',
    },
    card: {
        alert: '#E80000',
        background: '#FFF',
        border: '#E0E0E0',
        success: '#0083000',
        warning: '#F7A300',
    },
    textInput: {
        active: '#FFF',
        activeColer: '#000',
        borderColor: '#E0E0E0',
        disabled: '#EEE',
        disabledBorderColor: '#E0E0E0',
        disabledColor: '#666',
        placeholderColor: '#666',
    },
    typographies: {
        error: '#FF0202',
        subtitle: '#666',
        success: '#008000',
    }
}

export const darkTheme: Theme = {
    appBackground: '#060B26',
    appColor: '#FFF',
    appDefaultStroke: '#21497D',
    appLogo: '#dnc-logo-white.svg',
    appskeletonFrom: '#060B26',
    appSkeletonTo: '#21497D',
    buttons: {
        alert: '#E80000',
        alertColor: '#FFF',
        alertHover: '#D80000',
        disabled: '#313649',
        disabledColor: '#6D7B8E',
        primary: '#0C70F2',
        primaryColor: '#FFF',
        primaryHover: '#0061DE',
    },
    card: {
        alert: '#E80000',
        background: '#0F1535',
        border: '#21497D',
        success: '#0083000',
        warning: '#F7A300',
    },
    textInput: {
        active: '#0F1535',
        activeColer: '#FFF',
        borderColor: '#21497D',
        disabled: '#282D49',
        disabledBorderColor: '#2E3F55',
        disabledColor: '#58677C',
        placeholderColor: '#89A7CE',
    },
    typographies: {
        error: '#FF0202',
        subtitle: '#89A7CE',
        success: '#008000',
    }
}