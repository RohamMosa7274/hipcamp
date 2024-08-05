const app = Vue.createApp({
    data() {
        return {
        }
    },
    methods: {
        change_eye: () => {
            if (document.querySelector(".password-field").type == "password") {
                document.querySelector('.password-field').type = "text";
                document.querySelector(".eye-icon").style.display = "none";
                document.querySelector(".eye-icon-hide").style.display = "block";
            } else {
                document.querySelector('.password-field').type = "password";
                document.querySelector(".eye-icon-hide").style.display = "none";
                document.querySelector(".eye-icon").style.display = "block";
            }
        },

    },
})


app.mount("#password-input")