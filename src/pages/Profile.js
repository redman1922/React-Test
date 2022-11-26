import { useCallback, useState } from "react";
import { CHANGE_NAME } from "../store/profile/chatActions";
import { useSelector, useDispatch } from 'react-redux'
import {getProfile} from "../store/profile/selectors";

const Profile = () => {
    const {name} = useSelector(getProfile);
    const [value, setValue] = useState(name);
    const dispatch = useDispatch();


    const handleChange = useCallback((event) => {
        setValue(event.target.value);
    }, []);

    const setName = useCallback(() => {
        dispatch({ type: CHANGE_NAME, playload: value })
    }, [dispatch, value]);


    return (
        <div>
            <h4>Profile</h4>
            <input
                type="text"
                value={value}
                onChange={handleChange}
            />
            <button onClick={setName}> Изменить имя
            </button>
        </div>
    );
};

export default Profile; 