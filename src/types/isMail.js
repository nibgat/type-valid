var validator = require("validator");
const isMail = ({ param, name, ERROR_TYPES }) => {
    let resolve = false;
    let error = null;
    if(Array.isArray(param)) {
        let subResolve = false;
        for(let paramIndex = 0; paramIndex < param.length; paramIndex++) {
            const isValid = validator.isEmail(param[paramIndex]);
            subResolve = isValid;
            if(!subResolve) break;
        }
        resolve = subResolve;
        if(!resolve) error = name + ERROR_TYPES["isMailArray"];
    } else {
        resolve = validator.isEmail(param);
        if(!resolve) error = name + ERROR_TYPES["isMail"];
    }
    return {
        resolve,
        error
    };
};
export default isMail;