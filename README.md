# JavaScript Veri Tipi Kontrol Kütüphanesi

### Kullanım şekli

```
    const validationControl = (args, validationTypes) => {
        let newArgs = [];
        const names = Object.keys(validationTypes);
        names.forEach(name => newArgs.push({
            name,
            param: args[name],
            type: validationTypes[name]
        }));
        const result = validate({ args: newArgs });
        return result;
    }

    let validationTypes = {
        password: {
            isEmptyString: true,
            isMD5: true
        },
        fullName: {
            isEmptyString: true,
            length: {
                min: 4,
                max: 45
            }
        }
    };

    const validationControlResult = validationControl(args, validationTypes);
    if(!validationControlResult.result) {
        return {
            message: validationControlResult.error,
            code: 400
        };
    }
```
