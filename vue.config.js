module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/contacts-vue/'
        : '/',
        css: {
            loaderOptions: {
                sass: {
                    data: `
                      @import "@/scss/settings/container.scss";
                      @import "@/scss/settings/fonts.scss";
                    `
                },
            },
        }
}
