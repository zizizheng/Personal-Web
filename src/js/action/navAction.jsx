export const CHANGE_PAGE = 'CHANGE_PAGE';

export function navAction(name) {
    return {
        type: CHANGE_PAGE,
        name
    };
}