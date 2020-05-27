const ERROR_TYPES = {
    isMail: " parametresi Mail şartını sağlamadı. Lütfen bir mail gönderdiğinizden emin olunuz. Örn. example@mail.com",
    isMailArray: " parametresi MailArray şartını sağlamadı. Lütfen dizi içerisinde ki her öğenin mail şartını sağladığından emin olunuz. Örn. example@mail.com",
    isEmptyString: " parametresi EmptyString şartını sağlamadı. Lütfen boş string göndermediğinizden emin olunuz.",
    isEmptyStringArray: " parametresi EmptyStringArray şartını sağlamadı. Lütfen dizi içerisinde boş string göndermediğinizden emin olunuz.",
    isLength: ({ min, max }) => " parametresi Length şartını sağlamadı. Lütfen " + min + " ve " + max + " uzunlukları arasında bir değer gönderdiğinizden emin olun.",
    isHexColor: " parametresi HexColor şartını sağlamadı. Lütfen renk kodunuzu kontrol ediniz. Örn. #00C2A9",
    isHexColorArray: " parametresi HexColor şartını sağlamadı. Lütfen dizi içerisndeki renk kodlarını kontrol ediniz. Örn. #00C2A9",
    isUUID: " parametresi UUID şartını sağlamadı. Lütfen bir uniq id gönderdiğinizden emin olunuz. Örn. 'e6522fd7-cae0-471f-b97c-fca3eff51138'",
    isMD5Array: " parametresi isMD5Array şartını sağlamadı. Lütfen MD5 türlerinde id array gönderdiğinizden emin olunuz. Örn. ['81dc9bdb52d04dc20036dbd8313ed055', '81dc9bdb52d04dc20036dbd8313ed055']",
    isMD5: " parametresi isMD5 şartını sağlamadı. Lütfen bir MD5 türünde string gönderdiğinizden emin olunuz. Örn. 'e6522fd7-cae0-471f-b97c-fca3eff51138'",
    isUserNameArray: " parametresi isUserNameArray şartını sağlamadı. Lütfen gönderdiğiniz array'in tamamının UserName olduğundan emin olun. Örn. [example1234, example5678]",
    isUserName: " parametresi isUserName şartını sağlamadı. Lütfen gönderdiğiniz parametrenin UserName olduğundan emin olun. Örn. example1234",
    isPhone: " parametresi isPhone şartını sağlamadı. Lütfen gönderdiğiniz parametrenin telefon numarası olduğundan emin olun. Örn. 0555 555 55 55"
}
export default ERROR_TYPES;