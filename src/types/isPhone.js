var validator = require("validator");
const isPhone = ({ param, name, ERROR_TYPES }) => {
    let resolve = false;
    let error = null;
    resolve = validator.isMobilePhone(param);
    if(!resolve) error = name + ERROR_TYPES["isPhone"];
    return {
        resolve,
        error
    };
};
export default isPhone;