import {createAction} from "redux-actions";


export const showActiveWindow = createAction('SHOW_ACTIVE_WINDOW',
    (windowBody, windowTitle) => ({windowBody, windowTitle})
);

export const closeActiveWindow = createAction('CLOSE_ACTIVE_WINDOW',
    (windowId) => ({windowId})
);
