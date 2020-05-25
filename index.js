var validator = require("validator");

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

const isEmptyString = ({ param, name, ERROR_TYPES }) => {
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

const length = ({ param, name, configs, ERROR_TYPES }) => {
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

const mail = ({ param, name, ERROR_TYPES }) => {
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

const uuid = ({ param, name, ERROR_TYPES }) => {
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

const ERROR_TYPES = {
    mail: " parametresi Mail şartını sağlamadı. Lütfen bir mail gönderdiğinizden emin olunuz. Örn. example@mail.com",
    mailArray: " parametresi MailArray şartını sağlamadı. Lütfen dizi içerisinde ki her öğenin mail şartını sağladığından emin olunuz. Örn. example@mail.com",
    isEmptyString: " parametresi EmptyString şartını sağlamadı. Lütfen boş string göndermediğinizden emin olunuz.",
    isEmptyStringArray: " parametresi EmptyStringArray şartını sağlamadı. Lütfen dizi içerisinde boş string göndermediğinizden emin olunuz.",
    length: ({ min, max }) => " parametresi Length şartını sağlamadı. Lütfen " + min + " ve " + max + " uzunlukları arasında bir değer gönderdiğinizden emin olun.",
    hexColor: " parametresi HexColor şartını sağlamadı. Lütfen renk kodunuzu kontrol ediniz. Örn. #00C2A9",
    hexColorArray: " parametresi HexColor şartını sağlamadı. Lütfen dizi içerisndeki renk kodlarını kontrol ediniz. Örn. #00C2A9",
    uuid: " parametresi UUID şartını sağlamadı. Lütfen bir uniq id gönderdiğinizden emin olunuz. Örn. 'e6522fd7-cae0-471f-b97c-fca3eff51138'",
    isMD5Array: " parametresi isMD5Array şartını sağlamadı. Lütfen MD5 türlerinde id array gönderdiğinizden emin olunuz. Örn. ['81dc9bdb52d04dc20036dbd8313ed055', '81dc9bdb52d04dc20036dbd8313ed055']",
    isMD5: " parametresi isMD5 şartını sağlamadı. Lütfen bir MD5 türünde string gönderdiğinizden emin olunuz. Örn. 'e6522fd7-cae0-471f-b97c-fca3eff51138'",
    isUserNameArray: " parametresi isUserNameArray şartını sağlamadı. Lütfen gönderdiğiniz array'in tamamının UserName olduğundan emin olun. Örn. [example1234, example5678]",
    isUserName: " parametresi isUserName şartını sağlamadı. Lütfen gönderdiğiniz parametrenin UserName olduğundan emin olun. Örn. example1234",
    isPhone: " parametresi isPhone şartını sağlamadı. Lütfen gönderdiğiniz parametrenin telefon numarası olduğundan emin olun. Örn. 0555 555 55 55"
}
const validationSwitch = ({ name, param, type, configs }) => {
    let resolve = false;
    let error = null;
    switch (type) {
        case "mail":
            const mailControl = mail({ param, name, ERROR_TYPES });
            resolve = mailControl.resolve;
            error = mailControl.error;
            break;
        case "isEmptyString":
            const isEmptyStringControl = isEmptyString({ param, name, ERROR_TYPES });
            resolve = isEmptyStringControl.resolve;
            error = isEmptyStringControl.error;
            break;
        case "length":
            const lengthControl = length({ param, name, configs, ERROR_TYPES });
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