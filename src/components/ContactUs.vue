<template>
    <div class="contact-us" id="contact-us">
        <div class="container">
            <div class="title title--h2">Contact Us</div>
            <div class="contact-us__content">
                <div class="contact-us__item contact-us__item--left">
                    <contact-form></contact-form>
                </div>
                <div class="contact-us__item">
                    <p>Please tell us more about your request and give us info about your
                        comapny and countru</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import ContactForm from './Form';

    export default {
        components: {
            ContactForm
        }
    }
</script>

<style scoped lang="scss">
    .contact-us {
        background: #4ac47f;
        padding: 60px 0 80px;

        @media only screen and (min-width: 1025px) {
            padding: 100px 0 150px;
        }

        @media only screen and (min-width: 1440px) {
            padding: 143px 0 178px;
        }

        &__content {
            @media only screen and (max-width: 1024px) {
                display: flex;
                flex-wrap: wrap-reverse;
            }
        }

        &__item {
            display: inline-block;
            vertical-align: top;
            width: 100%;
            box-sizing: border-box;

            @media only screen and (min-width: 1025px) {
                width: 50%;
            }

            &:nth-child(2) {
                padding-bottom: 25px;
                @media only screen and (min-width: 520px) {
                    padding-bottom: 40px;
                }
                @media only screen and (min-width: 1025px) {
                    padding: 15px 0 0 60px;
                }
            }

            &--left {
                color: #ffffff;
            }
        }
    }

    .title {
        color: #ffffff;
        margin-bottom: 35px;
        @media only screen and (min-width: 1025px) {
            margin-bottom: 50px;
        }
    }

    p {
        line-height: 1.5;
        font-size: 19px;

        @media only screen and (min-width: 520px) {
            font-size: 22px;
        }

        @media only screen and (min-width: 1440px) {
            font-size: 25.27px;
        }
    }
</style>
