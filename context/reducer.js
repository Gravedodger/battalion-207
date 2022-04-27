import { MODAL_CLOSE, MODAL_OPEN } from "./constants";

const reducer = (state, {type}) => {
    switch (type) {
        case MODAL_OPEN:
            return {...state, isModalOpen: true};
        case MODAL_CLOSE:
            return {...state, isModalOpen: false};
        default:
            return state;
    }
}

export default reducer;
