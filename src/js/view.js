/* Chứa các method (Render các components và các index.html (AJAX)) */
/* listen to user, ... */

const view = {};

view.setActiveScreen = (screenName,clr=1) => {
    if (clr) {
        $('#app').empty();
    }
    switch (screenName) {
        case "welcome":
            $('#app').append(components.welcome);
            break;
        case "register":
            $('#app').append(components.register);
            $(()=> {
                // redirect
                $('div#have-acc-msg > span').click(() => {
                    view.setActiveScreen('login');
                })
                // submit
                const form = $('#register-form');
                form.submit((e) => {
                    // console.log(e);
                    e.preventDefault()
                    const dataRes = {
                        firstname : form.find('input[name="firstName"]').val(),
                        lastname : form.find('input[name="lastName"]').val(),
                        email : form.find('input[name="email"]').val(),
                        password: form.find('input[name="password"]').val(),
                        cfPassword : form.find('input[name="cfPassword"]').val()
                    }
                    console.log(dataRes);
                    controller.register(dataRes);
                })
            })
 
            break;
        case "login":
            $('#app').append(components.login);
            $(()=> {
                // redirect
                $('div#dont-have-acc-msg > span').click(() => {
                    view.setActiveScreen('register');
                })

                const lg_form = $('#login-form');
                lg_form.submit((e) => {
                    e.preventDefault();
                    const dataLG = {
                        text_inp : lg_form.find('input[name="text_inp"]').val(),
                        pwd_inp:  lg_form.find('input[name="password"]').val()
                    }
                    controller.login(dataLG)
                })
            })
            
            break;
        case "welcome":
            
            break;
        case "welcome":
            
            break;
        default:
            break;
    }
}

view.setErrorMessage = (id,err_msg) => {
    $(`${id}`).text(err_msg);    
}