import isEmptyString from './types/isEmptyString';
import isHexColor from './types/isHexColor';
import isUserName from './types/isUserName';
import isLength from './types/isLength';
import isPhone from './types/isPhone';
import isUUID from './types/isUUID';
import isMail from './types/isMail';
import isMD5 from './types/isMD5';

import ERROR_TYPES from './config/error';

const validationSwitch = ({ name, param, type, configs }) => {
    let resolve = false;
    let error = null;
    switch (type) {
        case "isMail":
            const mailControl = isMail({ param, name, ERROR_TYPES });
            resolve = mailControl.resolve;
            error = mailControl.error;
            break;
        case "isEmptyString":
            const isEmptyStringControl = isEmptyString({ param, name, ERROR_TYPES });
            resolve = isEmptyStringControl.resolve;
            error = isEmptyStringControl.error;
            break;
        case "isLength":
            const lengthControl = isLength({ param, name, configs, ERROR_TYPES });
            resolve = lengthControl.resolve;
            error = lengthControl.error;
            break;
        case "isHexColor":
            const hexColorControl = isHexColor({ param, name, ERROR_TYPES });
            resolve = hexColorControl.resolve;
            error = hexColorControl.error;
            break;
        case "isUUID":
            const uuidControl = isUUID({ param, name, ERROR_TYPES });
            resolve = uuidControl.resolve;
            error = uuidControl.error;
            break;
        case "isMD5":
            const MD5Control = isMD5({ param, name, ERROR_TYPES });
            resolve = MD5Control.resolve;
            error = MD5Control.error;
            break;
        case "isUserName":
            const userNameControl = isUserName({ param, name, ERROR_TYPES });
            resolve = userNameControl.resolve;
            error = userNameControl.error;
            break;
        case "isPhone":
            const phoneControl = isPhone({ param, name, ERROR_TYPES });
            resolve = phoneControl.resolve;
            error = phoneControl.error;
            break;
    }
    return {
        resolve,
        error
    };
};

const validate = ({ args }) => {
    let result = false;
    let error = null;
    for(let argIndex = 0; argIndex < args.length; argIndex++) {
        const keys = Object.keys(args[argIndex].type);
        let subResult = false;
        for(let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
            let configs = {};
            if(Object.keys(args[argIndex].type) && Object.keys(args[argIndex].type).length > 0) {
                configs = args[argIndex].type[keys[keyIndex]];
            }
            const keyResolve = validationSwitch({
                name: args[argIndex].name,
                param: args[argIndex].param,
                type: keys[keyIndex],
                configs
            });
            if(keyResolve.resolve) {
                subResult = true;
            } else {
                subResult = false;
                error = keyResolve.error;
                break;
            }
        }
        result = subResult;
        if(!result) break;
    }
    return {
        result,
        error
    };
};
export default validate;