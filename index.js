import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

// started from code at https://v5.reactrouter.com/web/example/query-parameters

// needs string of space separated values to indicate which parameters to extract
export default function useQuery(paramsSSV) {
    const { search } = useLocation();

    const get = useMemo(() => {
        return new URLSearchParams(search).get;
    }, [search]);

    const params = useMemo(() => {
        return paramsSSV.split(' ').filter(Boolean);
    }, [paramsSSV]);

    const values = useMemo(() => {
        const values = {};
        params.forEach((param) => {
            values[param] = get(param);
        });
        return values;
    }, [get, params]);

    return values;
}
