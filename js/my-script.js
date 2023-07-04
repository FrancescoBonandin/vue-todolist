

const {createApp}=Vue;

createApp({
    
    data(){

        return{
            toDos:[
                {
                    text:"Seguire la lezione del mattino",
                    done:true
                },
                {
                    text:"Fare l'esercizio del pomeriggio",
                    done:false
                },
                {
                    text:"Ricordarsi riunione delle xx:yy",
                    done:false
                },
                {
                    text:"Chiudere alle 18:00",
                    done:false
                }
            ]
    
        }

    },
    methods: {
        
        removeToDo(index){
            this.toDos.splice(index,1);
        }
    }

}).mount("#app")