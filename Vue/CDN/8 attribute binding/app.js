const app = Vue.createApp({
    data () {
        return{
            showBooks: true,
            books:[
                {title:'The name of the Wind', author:'Shinanigans', img:'assets/1.jpg'},
                {title:'The way of kings', author:'Big Boller', img:'assets/2.jpg' }, 
                {title:'The Final Empire', author:'Revenjer', img:'assets/3.jpg'},
            ],
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
        }
    },
}) 

app.mount('#app')