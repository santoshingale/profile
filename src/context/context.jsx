export const initialState = {
    currentTheme: 'linghtTheme'
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGELE_THEME':
            return {
                ...state,
                currentTheme: action.theme
            }
    }
}