export interface Theme {
    appBackground: string
    appColor: string
    appDefaultStroke: string
    appLogo: string
    appskeletonFrom: string
    appSkeletonTo: string
    buttons: {
        alert: string
        alertColor: string
        alertHover: string
        disabled: string
        disabledColor: string
        primary: string
        primaryColor: string
        primaryHover: string
    }
    card: {
        alert: string
        background: string
        border: string
        success: string
        warning: string
    }
    textInput: {
        active: string
        activeColer: string
        borderColor: string
        disabled: string
        disabledBorderColor: string
        disabledColor: string
        placeholderColor: string
    }
    typographies: {
        error: string
        subtitle: string
        success: string
    }
}