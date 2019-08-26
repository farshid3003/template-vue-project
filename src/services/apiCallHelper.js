
export default function funcCaller ({ commit, dispatch }, func, setterName, thenFunc, successMessage) {
    dispatch('loading/setLoading', true, { root: true });
    return func
        .then((result) => {
            if (thenFunc) {
                thenFunc(result);
            }
            if (setterName) {
                commit(setterName, result);
            }
            dispatch('loading/setLoading', false, { root: true });
            if (successMessage) {
                dispatch('messages/addMessage',
                    { message: successMessage, status: 'Success' }, { root: true });
            }
            return result;
        })
        .catch((err) => {
            dispatch('messages/addError', err, { root: true });
            dispatch('loading/setLoading', false, { root: true });
        });
}
