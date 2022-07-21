var validator = require("validator");
const isMD5 = ({ param, name, ERROR_TYPES }) => {
    let resolve = false;
    let error = null;
    if(Array.isArray(param)) {
        let subResolve = false;
        for(let paramIndex = 0; paramIndex < param.length; paramIndex++) {
            const isValid = validator.isMD5(param[paramIndex]);
            subResolve = isValid;
            if(!subResolve) break;
        }
        resolve = subResolve;
        if(!resolve) error = name + ERROR_TYPES["isMD5Array"];
    } else {
        resolve = validator.isMD5(param);
        if(!resolve) error = name + ERROR_TYPES["isMD5"];
    }
    return {
        resolve,
        error
    };
};
export default isMD5;