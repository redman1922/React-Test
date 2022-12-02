import { useCallback, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getALLGists } from '../store/middleware';
import { selectGists, selectGistsError, selectGistsLoading } from '../store/gists/selectors';

const Gists = () => {

    const dispatch = useDispatch();

    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);

    const requestGists = () => {
        dispatch(getALLGists());
    }

    useEffect(() => {
        requestGists();
    }, []);

    // const renderGist = useCallback((gist) => (
    //     <li key={gist.id} > {gist.description || 'No description'}</li >
    // ), []);

    const renderGist = useCallback((gist) => {
        return (<li key={gist.id} > {gist.id || 'No id'} <br /> {gist.name || 'No name'} <br /> {gist.email || 'No email'} <hr/> </li >)
    }, []);

    if (loading) {
        return <CircularProgress />
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        )
    }

    return <ul>{gists?.map(renderGist)}</ul>
}

export default Gists;