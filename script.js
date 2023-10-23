const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: 'Hello Vue!',
            img: './img/developer.jpg'
        }
    }

}).mount('#app')