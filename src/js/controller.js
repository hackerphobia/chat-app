/* Do logic stuff like check user acc */
const controller = {};


controller.register = ({firstname,lastname,email,password,cfPassword}) => {
    const res_form = {firstname:firstname,lastname:lastname,email:email,password:password,cfPassword:cfPassword};
    console.log(res_form);
    for (const key of Object.keys(res_form)) {
        view.setErrorMessage(`.err-msg-${key}`,"");
        if (res_form[key] == "" || res_form[key] == undefined) {
            view.setErrorMessage(`.err-msg-${key}`,`Please enter your ${key}`);
        }
    }
    if (password == cfPassword) {
        model.register(res_form);
    } else {
        view.setErrorMessage(`.err-msg-cfPassword`,'No match');
    }

}

controller.login = ({text_inp,pwd_inp}) => {
    if (text_inp == "" || text_inp == undefined) {
        view.setErrorMessage('.err-msg-text',"Please enter your username or email");
    } 
    if (pwd_inp == "" || pwd_inp == undefined) {
        view.setErrorMessage('.err-msg-pwd',"Please enter your password");
    } 
    model.login({text_inp,pwd_inp});
}

controller.logout = () => model.logout();