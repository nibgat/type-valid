var validator = require("validator");
const isLength = ({ param, name, configs, ERROR_TYPES }) => {
    let resolve = false;
    let error = null;
    let min = configs.min ? configs.min : 0;
    let max = configs.max ? configs.max : undefined;
    resolve = validator.isLength(param, {
        min,
        max
    });
    if(!resolve) error = name + ERROR_TYPES["isLength"](configs);
    return {
        resolve,
        error
    };
};
export default isLength;