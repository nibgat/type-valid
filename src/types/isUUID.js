import validator from 'validator';
const isUUID = ({ param, name, ERROR_TYPES }) => {
    let resolve = false;
    let error = null;
    if(Array.isArray(param)) {
        let subResolve = false;
        for(let paramIndex = 0; paramIndex < param.length; paramIndex++) {
            const isValid = validator.isUUID(param[paramIndex]);
            subResolve = isValid;
            if(!subResolve) break;
        }
        resolve = subResolve;
        if(!resolve) error = name + ERROR_TYPES["isUUIDArray"];
    } else {
        resolve = validator.isUUID(param);
        if(!resolve) error = name + ERROR_TYPES["isUUID"];
    }
    return {
        resolve,
        error
    };
};
export default isUUID;