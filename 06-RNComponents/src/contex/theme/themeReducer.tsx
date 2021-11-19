import { Theme } from "@react-navigation/native"


type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark',
    dividerColor: string
}

const lightTheme: ThemeState = {
    currentTheme: 'light',
    dark: false,
    colors:{
        primary: 'red',
        background: 'blue',
        card: 'green',
        text: 'pink',
        border: 'orange',
        notification: 'teal'
    }
}

export const themeReduce = (state, action: ThemeAction):=> {

}