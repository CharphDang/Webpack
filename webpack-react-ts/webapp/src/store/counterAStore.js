export const counterAReducer = (state = 0, action) => {
    switch (action.type) {
        case 'addA':
            return (state += 1);
        case 'menusA':
            return (state -= 1);
        default:
            return state;
    }
};
