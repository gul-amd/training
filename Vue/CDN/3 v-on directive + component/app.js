const app = Vue.createApp({
    data () {
        return{
            title: 'the final empire',
            author: 'Big Boller',
            age: '45'
        }
    },
    methods: {
        changeTitle () {
            this.title = 'FInal Book'
        }
    },
}) 

app.mount('#app')