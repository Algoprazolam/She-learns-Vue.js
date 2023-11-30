const app = Vue.createApp({
    //ES6 short hand for the data function
    data() {
    //data: function () {
        return {
            product: 'Socks',
            description: 'They\'re just cute little socks.',
            image: './assets/images/socks_green.jpg',
            altText: 'Just a picture of socks.',
            url: 'https://github.com/Algoprazolam/She-learns-Vue.js',
            githubIcon: 'https://img.icons8.com/ios/50/github--v1.png',
            githubClass: 'github'
        }
        
    }
})
