import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeName, toggleShowName} from "./actions";

// const Profile = () => {
//
//     const { showName, name } = useSelector((state) => state.profile);
//     const dispatch = useDispatch()
//
//     const setShowName = useCallback(() => {
//         dispatch({type:'True'});
//     }, [dispatch]);
//
//
//     return (
//         <div>
//             <h4>Profile</h4>
//             <input
//                 type="checkbox"
//                 checked={showName}
//                 value={showName}
//                 onChange={setShowName}
//             />
//             <span>Show Name</span>
//             {showName && <div>{name}</div>}
//         </div>
//     );
//
// }

export const Profile = () => {
    const { name } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    const setName = useCallback(() => {
        dispatch(changeName(value))
    }, [dispatch, value]);

    return (
        <>
            <div>
                <h4>Profile</h4>
            </div>
            <div>
                <input type="text" value={value} onChange={handleChange} />
            </div>
            <div>
                <button onClick={setName}>Change Name</button>
            </div>
        </>
    );
}



export default Profile;