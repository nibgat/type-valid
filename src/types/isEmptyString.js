const isEmptyString = ({ param, name, ERROR_TYPES }) => {
    let resolve = false;
    let error = null;
    if(Array.isArray(param)) {
        let subResolve = false;
        for(let paramIndex = 0; paramIndex < param.length; paramIndex++) {
            const isValid = param[paramIndex].trim() !== "";
            subResolve = isValid;
            if(!subResolve) break;
        }
        resolve = subResolve;
        if(!resolve) error = name + ERROR_TYPES["isEmptyStringArray"];
    } else {
        resolve = param.trim() !== "";
        if(!resolve) error = name + ERROR_TYPES["isEmptyString"];
    }
    return {
        resolve,
        error
    };
};
export default isEmptyString;