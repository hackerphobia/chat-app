/* Lưu giữ các thẻ html (html fragment) / các const để đẩy vào index.html */

const components = {};

components.welcome = `<div>Hello world</div>`;

components.register = `
    <div class="register-container">
    <div class="background-img"></div>
    <div class="form-wrapper">
        <div class="register-header">Messenger</div>
        <form id="register-form">
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" placeholder="First Name" name="firstName">
                    <div class="err-msg-firstname"></div>
                </div>
                <div class="input-wrapper">
                    <input type="text" placeholder="Last Name" name="lastName">
                    <div class="err-msg-lastname"></div>
                </div>
            </div>
            <div class="input-wrapper">
                <input type="email" placeholder="Email" name="email">
                <div class="err-msg-email"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div class="err-msg-password"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Confirm Password" name="cfPassword">
                <div class="err-msg-cfPassword"></div>
            </div>
            <div class="err-msg-local"></div>
            <div class="register-form-action">
                <div id="have-acc-msg">
                    Aready have an account ?
                    <span>Login</span>
                </div>
                <button class="btn" type="submit">Register</button>
            </div>
        </form>
    </div>
    </div>
`;
components.login = `
    <div class="login-container">
    <div class="background-img"></div>
    <div class="form-wrapper">
    <div class="login-header">LOGIN</div>
    <form action="" id="login-form">
        <div class="input-wrapper">
            <input type="email" name="text_inp" placeholder="Email">
            <div class="err-msg-text"></div>
        </div>
        <div class="input-wrapper">
                <input type="text" placeholder="Password" name="password">
                <div class="err-msg-pwd"></div>
        </div>
        <div class="err-msg-local"></div>
        <div class="login-form-action">
            <div id="dont-have-acc-msg">
                Don't have an account ?
                <span>Register</span>
            </div>
            <button class="btn" type="submit">Login</button>
    </form>

    </div>
    </div>
`