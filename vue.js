new Vue({
    el: "#app",
    data: {
        currentLanguage: "zh", // Default language set to Chinese
        translations: {
            en: {
                welcome: "Welcome!",
                username: "Username",
                password: "Password",
                keepLoggedIn: "Keep me logged in",
                forgotPassword: "Forgot Password?",
                login: "Login",
                validationMessage: "Please fill out this field.",
            },
            zh: {
                welcome: "欢迎!",
                username: "用户名",
                password: "密码",
                keepLoggedIn: "保持登录状态",
                forgotPassword: "忘记密码？",
                login: "登录",
                validationMessage: "请填写此字段。",
            },
        },
        username: "",
        password: "",
        errorMessage: "",
    },
    methods: {
        validateForm() {
            if (!this.username || !this.password) {
                this.errorMessage = this.translations[this.currentLanguage].validationMessage;
                return;
            }
            // Form submission logic here
            alert("表单提交成功!"); // Success message in Chinese
        },
    },
});
