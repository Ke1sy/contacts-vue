<template>
    <GmapMap
            :center="settings.loc"
            :zoom="12"
            map-type-id="terrain"
            :options="mapStyle"
            class="map">
        <gmap-info-window :options="infoOptions" :position="settings.loc" :opened="infoWinOpen"
                          @closeclick="infoWinOpen=false">
            <div class="map__title">{{settings.company}}</div>
            <div class="map__address">{{settings.address}}</div>
        </gmap-info-window>
        <GmapMarker
                :position="settings.loc"
                :clickable="true"
                :icon="icon"
                @click="infoWinOpen = !infoWinOpen"
        />
    </GmapMap>
</template>

<script>
    import icon from '../assets/marker.png';
    import Vue from 'vue';
    import * as VueGoogleMaps from 'vue2-google-maps';

    Vue.use(VueGoogleMaps, {
        load: {
            key: 'AIzaSyDV57vEPZTMec-stGUthmwwmxuOub9dJhs'
        },
    });

    export default {
        props: ['settings'],
        data() {
            return {
                center: this.settings.loc,
                company: this.settings.company,
                icon: icon,
                infoWinOpen: true,
                infoOptions: {
                    pixelOffset: {
                        width: 0,
                        height: -36
                    }
                },

                mapStyle: {
                    mapTypeControl: false,
                    streetViewControl: false,
                    styles: [
                        {
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#212121"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#212121"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.country",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.locality",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#181818"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "poi.park",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#1b1b1b"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#2c2c2c"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#8a8a8a"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#373737"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#3c3c3c"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway.controlled_access",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#4e4e4e"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#3d3d3d"
                                }
                            ]
                        }
                    ]
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .map {
        height: 100%;
        width: 100%;

        &__title {
            font-weight: 500;
            font-size: 14px;
            margin-bottom: 5px;
        }
    }

    .gm-style-iw-d {
        padding: 20px;
    }

</style>
