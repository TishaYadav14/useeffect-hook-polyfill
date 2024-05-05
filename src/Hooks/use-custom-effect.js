import { useRef } from "react"

const useCustomEffect = (effect, deps) => {

    const isFirstRender = useRef(true);
    const prevDeps = useRef([]);

    // first render logic
    if(isFirstRender.current) {
        isFirstRender.current = false;
        const cleanup = effect();
        return () => {
            if(cleanup && typeof cleanup === 'function'){
                cleanup();
            }
        };
    }

    // Deps changes or no deps array
    const depsChanged = deps ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current) : true;
    if(depsChanged) {
        const cleanup = effect();

        // cleanup logic (if deps present)
        if(cleanup && typeof cleanup === 'function' && deps){
            cleanup();
        }
    }
    prevDeps.current = deps || [];
};

export default useCustomEffect;