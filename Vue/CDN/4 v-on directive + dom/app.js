const app = Vue.createApp({
    data() {
        return {
            title: 'Good Book',
           author: 'Shinanigane',
             year: 2014
        }
    },
    methods: {
        changeTitle(useDom) {
            this.title = useDom
        }
    },
})

app.mount('#app')