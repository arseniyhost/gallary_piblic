const initState = {
    urlImg: null
};

const indexReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_URL': {
            return {
                ...state,
                urlImg: action.img
            }
        }
    
        default:
           return state;
    }
}

export const getImg = (img) => ({type: 'GET_URL', img});

export default indexReducer;