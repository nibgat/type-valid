import {
    mail,
    isEmptyString,
    length,
    isHexColor,
    isUUID,
    isMD5,
    isUserName,
    isPhone
} from '@types/type-valid';

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