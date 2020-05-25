import validator from 'validator';

export const isEmptyString = ({ param, name, ERROR_TYPES }) => {
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

export const isHexColor = ({ param, name, ERROR_TYPES }) => {
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
        if(!resolve) error = name + ERROR_TYPES["hexColorArray"];
    } else {
        resolve = validator.isHexColor(param);
        if(!resolve) error = name + ERROR_TYPES["hexColor"];
    }
    return {
        resolve,
        error
    };
};

export const isMD5 = ({ param, name, ERROR_TYPES }) => {
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

export const isPhone = ({ param, name, ERROR_TYPES }) => {
    let resolve = false;
    let error = null;
    resolve = validator.isMobilePhone(param);
    if(!resolve) error = name + ERROR_TYPES["isPhone"];
    return {
        resolve,
        error
    };
};

export const isEmptyString = ({ param, name, ERROR_TYPES }) => {
    let resolve = false;
    let error = null;
    if(Array.isArray(param)) {
        let subResolve = false;
        for(let paramIndex = 0; paramIndex < param.length; paramIndex++) {
            const isValid = userNameRegex.test(param[paramIndex]);
            subResolve = isValid;
            if(!subResolve) break;
        }
        resolve = subResolve;
        if(!resolve) error = name + ERROR_TYPES["isUserNameArray"];
    } else {
        resolve = userNameRegex.test(param);
        if(!resolve) error = name + ERROR_TYPES["isUserName"];
    }
    return {
        resolve,
        error
    };
};

export const length = ({ param, name, configs, ERROR_TYPES }) => {
    let resolve = false;
    let error = null;
    let min = configs.min ? configs.min : 0;
    let max = configs.max ? configs.max : undefined;
    resolve = validator.isLength(param, {
        min,
        max
    });
    if(!resolve) error = name + ERROR_TYPES["length"](configs);
    return {
        resolve,
        error
    };
};

export const mailValidation = ({ param, name, ERROR_TYPES }) => {
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
        if(!resolve) error = name + ERROR_TYPES["mailArray"];
    } else {
        resolve = validator.isEmail(param);
        if(!resolve) error = name + ERROR_TYPES["mail"];
    }
    return {
        resolve,
        error
    };
};

export const uuidValidation = ({ param, name, ERROR_TYPES }) => {
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
        if(!resolve) error = name + ERROR_TYPES["uuidArray"];
    } else {
        resolve = validator.isUUID(param);
        if(!resolve) error = name + ERROR_TYPES["uuid"];
    }
    return {
        resolve,
        error
    };
};