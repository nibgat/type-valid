const USER_NAMEREGEX = /^(?=.{8,20}$)(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![_.])$/;
const isUserName = ({ param, name, ERROR_TYPES }) => {
    let resolve = false;
    let error = null;
    if(Array.isArray(param)) {
        let subResolve = false;
        for(let paramIndex = 0; paramIndex < param.length; paramIndex++) {
            const isValid = USER_NAMEREGEX.test(param[paramIndex]);
            subResolve = isValid;
            if(!subResolve) break;
        }
        resolve = subResolve;
        if(!resolve) error = name + ERROR_TYPES["isUserNameArray"];
    } else {
        resolve = USER_NAMEREGEX.test(param);
        if(!resolve) error = name + ERROR_TYPES["isUserName"];
    }
    return {
        resolve,
        error
    };
};
export default isUserName;