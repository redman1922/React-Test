export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const toggleShowName = () => {
    return {type: TOGGLE_VISIBLE_PROFILE};
}

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName,
});
