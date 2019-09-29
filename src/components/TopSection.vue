<template>
    <div class="top-section">
         <div class="container">
            <div class="title title--h1">Contacts</div>
            <div class="top-section__content">
                <div class="top-section__item">
                    <div class="title title--h2">GMS Headquarters</div>
                    <div class="top-section__contacts contacts">
                        <div class="contacts__item">
                            <p>Global Message Services Ukraine LLC</p>
                            <p>Bundesstrasse 5 / 3rd Floor</p>
                            <p>6300 Zug</p>
                            <p>Switzerland</p>

                            <a :href="'tel:' + phone" class="top-section__phone">
                                {{decoratedPhone}}
                            </a>
                        </div>
                        <div class="contacts__item">
                            <p>Email</p>

                            <a href="mailto:INFO@GMS-WORLDWIDE.COM" class="contacts__link">
                                NFO@GMS-WORLDWIDE.COM
                            </a>
                            <p>Send Message</p>
                            <a :href="'viber://chat?number=' + viberPhone" class="contacts__link">
                                VIBER US
                            </a>
                            <p>Send form</p>
                          <a href="#contact-us" class="contacts__link">
                            CONTACT US
                          </a>

                        </div>
                    </div>
                </div>
                <div class="top-section__item">
                    <div class="title title--h2">Technical support 24/7</div>
                    <p>GMS understand that it can be hard to follow all new technologies. We regularly
                        provide for all our clients educational training to make your operator’s business
                        earn more and better though our best practices. </p>
                    <a :href="'tel:' + phone" class="top-section__phone">
                        {{decoratedPhone}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                phone: '+41415446200',
                email: 'INFO@GMS-WORLDWIDE.COM',
            }
        },
        computed: {
            viberPhone() {
                return this.phone.slice(1);
            },
            decoratedPhone() {
                return this.phone.slice(0, 3) + ' ' + this.phone.slice(3, 5) + ' ' + this.phone.slice(5, 8) + ' ' + this.phone.slice(8, 10) + ' ' + this.phone.slice(10);
            }
        },
    }
</script>

<style scoped lang="scss">
    .contacts {
        @media only screen and (max-width: 479px) {
            display: flex;
            flex-wrap: wrap-reverse;
        }
        &__item {
            display: inline-block;
            vertical-align: top;
            width: 100%;
            box-sizing: border-box;
            margin-bottom: 15px;

            &:first-of-type {
                margin-bottom: 0;
            }

            @media only screen and (min-width: 480px) {
                width: 50%;
                margin-bottom: 0;

                &:first-of-type {
                    padding-right: 15px;
                }
            }

        }

        &__link {
            line-height: 1.9;
            color: #ff0036;
            position: relative;
            display: inline-block;
            text-transform: uppercase;

            &:hover {
                text-decoration: underline;
            }

        }
    }

    .top-section {
        padding: 40px 0 60px;

        @media only screen and (min-width: 640px) {
            padding: 60px 0 80px;
        }

        @media only screen and (min-width: 1025px) {
            padding: 72px 0 136px;
        }

        &__item {
            display: inline-block;
            vertical-align: top;
            width: 100%;
            margin-bottom: 50px;
            box-sizing: border-box;

            @media only screen and (min-width: 1025px) {
                width: 50%;
                margin-bottom: 0;
            }

            &:nth-child(2) {
                @media only screen and (min-width: 1025px) {
                    padding-left: 70px;
                }
                margin-bottom: 0;
            }
        }

        &__phone {
            display: inline-block;
            margin-top: 15px;
            color: #000;
            font-size: 25px;
            @media only screen and (min-width: 480px) {
                margin-top: 36px;
            }
            @media only screen and (min-width: 1280px) {
                font-size: 30px;
            }

            @media only screen and (min-width: 1440px) {
                font-size: 38px;
            }

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .title {
        &--h1 {
            margin-bottom: 35px;
            @media only screen and (min-width: 1025px) {
                margin-bottom: 61px;
            }
        }

        &--h2 {
            margin-bottom: 25px;
            @media only screen and (min-width: 1025px) {
                margin-bottom: 56px;
            }
        }
    }
    p {
        line-height: 1.5;

        @media only screen and (min-width: 1025px) {
            line-height: 2;
        }
    }
</style>
