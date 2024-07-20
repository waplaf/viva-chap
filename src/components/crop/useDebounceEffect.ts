import { useEffect, DependencyList } from 'react';

export function useDebounceEffect(
    fn: () => void,
    waitTime: number,
    deps?: DependencyList,
) {
    useEffect(() => {
        const timeoutId = setTimeout(fn, waitTime);

        return () => {
            clearTimeout(timeoutId);
        };
    }, deps);
}

