<template>
    <div class="offices">
        <div class="offices__left">
            <div class="title title--h2">Our Offices</div>
            <div class="tabs">
                <span v-for="tab in tabs" :key="tab.id" :class="['tabs__item',{active: currentTab === tab }]"
                      @click="changeActive(tab)">
                    {{tab.city}}
                </span>
            </div>
            <div class="title title--h2 offices__company">{{ currentTab.company }}</div>
            <p>{{ currentTab.address }}</p>
            <p>{{ currentTab.index }}</p>
            <p>{{ currentTab.country }}</p>
        </div>
        <div class="offices__right">
            <div class="map">
                <my-map :settings="currentTab"></my-map>
            </div>
        </div>
    </div>

</template>

<script>
    import myMap from './Map';
    export default {
        data() {
            return {
                tabs: [
                    {
                        city: 'KYIV',
                        address: 'Kyiv, Stepan Bandera, 33',
                        index: '02066',
                        country: 'Ukraine',
                        company: 'Global Message Services Ukraine LLC',
                        loc: {
                            lat:50.4860824,
                            lng:30.4956593
                        }
                    }, {
                        city: 'New York',
                        address: '9th street in the East Village',
                        index: '04553',
                        country: 'USA',
                        company: 'Global Message Services USA LLC',
                        loc: {
                            lat: 40.7371253,
                            lng:-73.9841815
                        }
                    }, {
                        city: 'Barcelona',
                        address: 'La Rambla, 13',
                        index: '06482',
                        country: 'Spain',
                        company: 'Global Message Services Spain LLC',
                        loc: {
                            lat:41.4077594,
                            lng:2.1695999
                        }
                    }, {
                        city: 'ROME',
                        address: 'Via del Corso, 22',
                        index: '01468',
                        country: 'Italy',
                        company: 'Global Message Services Italy LLC',
                        loc: {
                            lat: 41.8910068,
                            lng: 12.4539585
                        }
                    },
                ],
                currentTab: null
            }
        },
        methods: {
            changeActive(tab) {
                this.currentTab = tab;
            }
        },
        components: {
            myMap
        },
        beforeMount() {
            this.currentTab = this.tabs[0];
        },
    }
</script>

<style scoped lang="scss">
    .offices {
        background: #5c5c5c;
        display: flex;
        flex-wrap: wrap;

        &__left,
        &__right {
            width: 100%;
            background: #5c5c5c;
            box-sizing: border-box;

            @media only screen and (min-width: 769px) {
                width: 50%;
            }
        }

        &__right {
            height: 300px;

            @media only screen and (min-width: 481px) {
                height: 400px;
            }

            @media only screen and (min-width: 769px) {
                height: auto;
            }
        }

        &__left {
            color: #fff;
            padding: 60px 20px 40px;

            @media only screen and (min-width: 639px) {
                padding: 60px 40px 30px;
            }

            @media only screen and (min-width: 769px) {
                padding: 60px 10px 80px 40px;
            }

            @media only screen and (min-width: 1025px) {
                padding: 100px 15px 150px 40px;
            }

            @media only screen and (min-width: 1440px) {
                padding: 150px 15px 200px 82px;
            }
        }

        &__company {
            line-height: 1.2;

            @media only screen and (max-width: 768px) {
                font-size: 27px;
            }

            @media only screen and (min-width: 769px) and (max-width: 1280px) {
                font-size: 30px;
            }
        }
    }

    .map {
        height: 100%;
        width: 100%;
    }

    .title {
        margin-bottom: 30px;
    }

    .tabs {
        margin: 25px 0 10px;

        @media only screen and (min-width: 1025px) {
            margin: 40px 0 25px;
        }

        @media only screen and (min-width: 1368px) {
            margin: 64px 0 39px;
        }

        &__item {
            text-transform: uppercase;
            display: inline-block;
            margin: 0 15px 15px 0;
            cursor: pointer;
            transition: 0.15s linear;

            @media only screen and (min-width: 1024px) {
                margin-right: 25px;
            }

            &:last-of-type {
                margin-right: 0;
            }

            &:hover,
            &.active {
                color: #5e9575;
            }

            &.active {
                cursor: auto;
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
