const app = Vue.createApp({
    data () {
        return{
            showBooks: true,
            title: 'the final empire',
            author: 'Big Boller',
            age: 45,
            X: 0,
            Y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvente(e, data) {
            console.log(e, e.type)
                if (data) {
                    console.log(data)
                }
        },
        handleMouseMove(e) {
            this.X = e.offsetX
            this.Y = e.offsetY
        }
    },
}) 

app.mount('#app')