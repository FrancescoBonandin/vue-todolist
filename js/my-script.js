

const {createApp}=Vue;

createApp({
    
    data(){

        return{
            newToDo:{ text:null,
                        done:false

            },
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
        },

        cloneToDo(obj){
            let clone={};
            for(key in obj){
                clone[key]=obj[key]; 
            }
            return clone;

        },

        addToDo(){
            if(this.newToDo.text.trim(" ").length >0){
               
                this.toDos.push(this.cloneToDo(this.newToDo))
                console.log(this.toDos)
            }
            this.newToDo.text=null

            
        },
        changeValue(index){

            if(this.toDos[index].done==true){
                this.toDos[index].done=false;
                
            }

            else{
                 this.toDos[index].done=true;
            }
        }


    }

}).mount("#app")