var validator = require("validator");
const isHexColor = ({ param, name, ERROR_TYPES }) => {
    let resolve = false;
    let error = null;
    if(Array.isArray(param)) {
        let subResolve = false;
        for(let paramIndex = 0; paramIndex < param.length; paramIndex++) {
            const isValid = validator.isHexColor(param[paramIndex]);
            subResolve = isValid;
            if(!subResolve) break;
        }
        resolve = subResolve;
        if(!resolve) error = name + ERROR_TYPES["isHexColorArray"];
    } else {
        resolve = validator.isHexColor(param);
        if(!resolve) error = name + ERROR_TYPES["isHexColor"];
    }
    return {
        resolve,
        error
    };
};
export default isHexColor;