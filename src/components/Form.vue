<template>
    <form class="form">
        <div class="form__group" :class="{ 'form__group--error': $v.name.$error }">
            <div class="form__wrap">
                <label class="form__label">Name</label>
                <input class="form__input" v-model.trim="$v.name.$model"/>
            </div>
            <div v-show="$v.name.$dirty">
                <div class="error" v-if="!$v.name.required">This field is required!</div>
                <div class="error" v-if="!$v.name.alphaName">Please enter a valid name!</div>
                <div class="error" v-if="!$v.name.minLength">Name must contain at least
                    {{$v.name.$params.minLength.min}} symbols!
                </div>
            </div>
        </div>
        <div class="form__group" :class="{ 'form__group--error': $v.phone.$error }">
            <div class="form__wrap">
                <label class="form__label">Phone</label>
                <input class="form__input" v-model.trim="$v.phone.$model"/>
            </div>
            <div v-show="$v.phone.$dirty">
                <div class="error" v-if="!$v.phone.required">This field is required!</div>
                <div class="error" v-if="!$v.phone.numeric">Phone must contain digits only!</div>
                <div class="error" v-if="!$v.phone.minLength">Phone length must contain at least 10 digits!</div>
            </div>
        </div>
        <div class="form__group" :class="{ 'form__group--error': $v.email.$error }">
            <div class="form__wrap">
                <label class="form__label">Email</label>
                <input class="form__input" v-model.trim="$v.email.$model"/>
            </div>
            <div v-show="$v.email.$dirty">
                <div class="error" v-if="!$v.email.required">This field is required!</div>
                <div class="error" v-if="!$v.email.email">Please enter a valid email!</div>
            </div>
        </div>
        <div class="form__group form__group--checkbox">
            <label for="agreement" :class="['form__check', {'checked': agree}]">
                <input type="checkbox" id="agreement" v-model="agree">
                <span>I agree the processing of personal data</span>
            </label>
        </div>
        <div class="form-group form__submit">
            <button type="submit" class="form__btn" @click="submitForm" :disabled="!agree">Get in touch</button>
        </div>

    </form>
</template>

<script>
    import Vue from 'vue'
    import Vuelidate from 'vuelidate'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import {numeric, required, minLength, email, helpers} from 'vuelidate/lib/validators';
    import VueNoty from 'vuejs-noty'
    Vue.use(VueAxios, axios);
    Vue.use(Vuelidate);
    Vue.use(VueNoty, {
        timeout: 1500,
        progressBar: true,
        layout: 'bottomRight'
    });

    const alphaName = helpers.regex('alpha', /^[a-zA-Zа-яА-Я\s-]*$/);

    export default {
        data() {
            return {
                name: '',
                email: '',
                phone: '',
                agree: false,
            }
        },
        validations: {
            name: {
                required,
                alphaName,
                minLength: minLength(3)
            },
            email: {
                required,
                email
            },
            phone: {
                required,
                numeric,
                minLength: minLength(10)
            }
        },
        methods: {
            clearForm() {
                setTimeout(() => {
                    [this.name, this.email, this.phone] = ['', '', ''];
                    this.$v.$reset();
                }, 200);
            },
            submitForm(e) {
                this.$v.$touch();
                if (this.$v.$invalid || this.$v.$error) {
                    e.preventDefault();
                    this.$noty.error("Please enter valid data.")

                } else {
                    this.agree = false;
                    Vue.axios.post('https://httpbin.org/post', {
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                    }).then((response) => {
                        if(response.status == 200) {
                            this.$noty.success("Thank you for getting in touch!");
                        }
                        this.clearForm();
                    }).catch(e => {
                        console.error(e);
                        this.$noty.error("Error! Please try one more time.");
                        this.clearForm();
                    })
                }
                e.preventDefault();
            },
        },
        mounted: function () {
            this.$v.$reset();
        }
    }

</script>

<style lang="scss">
    @import '~vuejs-noty/dist/vuejs-noty.css';

    $color-red: #ff0036;

    .error {
        color: white;
        font-size: 14px;
        display: inline-block;
        background-color: $color-red;
        padding: 3px 5px;
        position: absolute;
        right: 0;
        bottom: -20px;
    }

    .form {
        @media only screen and (min-width: 1280px) {
            margin-right: 7%;
        }

        &__check {
            font-size: 20px;
            padding-left: 48px;
            position: relative;
            cursor: pointer;
            line-height: 1.2;
            display: flex;
            @media only screen and (min-width: 1440px) {
                font-size: 22.5px;
            }

            & > input {
                display: none;
            }

            &::before {
                content: '';
                display: inline-block;
                height: 23px;
                width: 23px;
                position: absolute;
                left: 0;
                background-color: #fff;
                background-size: 15px;
                background-repeat: no-repeat;
                background-position: center;
            }

            &.checked {
                &:before {
                    background-image: url('../assets/checked.svg');
                }
            }
        }

        &__group {
            position: relative;
            border-bottom: 2px solid #fff;
            padding: 9px 0;

            &--error {
                animation-name: shakeError;
                animation-duration: .6s;
                animation-timing-function: ease-in-out;
                border-bottom-color: $color-red;

                .error {
                    display: none;

                    &:first-of-type {
                        display: block;
                    }
                }
            }

            &--checkbox {
                margin-top: 60px;
                border-bottom: none;
            }
        }

        &__wrap {
            display: flex;
            width: 100%;
            align-items: center;
        }


        &__submit {
            margin-top: 40px;
        }

        &__btn {
            cursor: pointer;
            font-weight: 700;
            padding: 35px 20px;
            font-size: 22.5px;
            background: #5c5c5c;
            border: 2px solid #5c5c5c;
            color: #fff;
            transition: 0.15s linear;
            width: 100%;
            min-width: 250px;

            @media only screen and (min-width: 641px) {
                width: 52%;
            }

            @media only screen and (min-width: 769px) {
                padding: 47px 20px;
            }

            &:disabled {
                pointer-events: none;
                opacity: 0.6;
            }

            &:hover {
                border-color: #fff;
                background: #4ac47f;
            }
        }

        &__label {
            display: block;
            width: 25%;

            @media only screen and (min-width: 640px) {
                width: 20%;
                min-width: 130px;
            }
        }

        &__input {
            outline: none;
            background: transparent;
            border: none;
            flex-grow: 1;
            color: #fff;
            padding: 10px 15px;
            width: 100%;
        }

        &__label,
        &__input {
            font-size: 20px;

            @media only screen and (min-width: 520px) {
                font-size: 24px;
            }

            @media only screen and (min-width: 1440px) {
                font-size: 27.5px;
            }
        }

    }

    @keyframes shakeError {
        0% {
            transform: translateX(0);
        }
        15% {
            transform: translateX(0.375rem);
        }
        30% {
            transform: translateX(-0.375rem);
        }
        45% {
            transform: translateX(0.375rem);
        }
        60% {
            transform: translateX(-0.375rem);
        }
        75% {
            transform: translateX(0.375rem);
        }
        90% {
            transform: translateX(-0.375rem);
        }
        100% {
            transform: translateX(0);
        }
    }

    .noty_theme__mint {

        &.noty_bar {
            .noty_body {
                padding: 15px;
                font-size: 16px;
            }
        }

        &.noty_type__error {
            background-color: $color-red;
            border-bottom: 1px solid $color-red;
        }

        &.noty_type__success {
            background-color: #5c5c5c;
            border-bottom: 1px solid #5c5c5c;
            color: #fff;

            .noty_progressbar {
                background-color: #fff;
            }
        }

    }


</style>
