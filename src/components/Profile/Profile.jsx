import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {

    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch()

    const setShowName = useCallback(() => {
        dispatch({type:'True'});
    }, [dispatch]);


    return (
        <div>
            <h4>Profile</h4>
            <input
                type="checkbox"
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            {showName && <div>{name}</div>}
        </div>
    );

}

export default Profile;