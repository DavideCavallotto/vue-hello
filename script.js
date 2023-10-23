const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: 'Hello Vue!',
            imgs: 'https://picsum.photos/200/300',
            className: 'section'
        }
    },
    methods: {
        refreshPage: function () {            
            window.location.reload()
        } 
    }

}).mount('#app')


