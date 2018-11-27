export default (store) => (next) => (action) =>{

    if(!action.payload || !action.payload.then) {
        //has a promise on the payload property


        return next(action)


    }
    action.payload.then((resp) => {
        const newAction = {
            ...action,
            payload: resp
        }

        store.dispatch(newAction);
    })


}