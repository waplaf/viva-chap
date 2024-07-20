

export const initialState = {

    cropBase64: ""

};

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setCropBase64':
            return { ...state, cropBase64: action.payload.cropBase64 }; break;


        default:
            return state;
    }
}