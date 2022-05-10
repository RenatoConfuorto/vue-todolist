const app = new Vue({
  el: '#root',
  data: {
    toDo:[
      {
        text: "Fare l'esercizio",
        done: false,
        visible: true,
      },
      {
        text: "Dare da mangiare ai gatti",
        done: true,
        visible: true,
      },
      {
        text: "Riguardare la lezione",
        done: false,
        visible: true,
      },
      {
        text: "Fare la spesa",
        done: false,
        visible: true,
      }
    ],
    newToDo: '',
    search: '',
  },
  methods:{
    removeToDo: function(index){
      // console.log(index);
      this.toDo.splice(index, 1);
    },

    addToDo: function(){
      //rimuovere gli spazi all'inizio della stringa
      const formattedString = this.newToDo.trim();
      //creare un nuovo oggetto
      const newObj = {
        text: formattedString,
        done: false
      };

      //inserire l'oggetto se la stringa non è vuota
      if(formattedString)this.toDo.push(newObj);

      //ripulire l'input
      this.newToDo = '';
    },

    changeStatus: function(index){
      this.toDo[index].done = !this.toDo[index].done;
    },

    filter: function(){

      this.toDo.forEach(element => {
        if(element.text.toLowerCase().includes(this.search.trim().toLowerCase())){
          element.visible = true;
        }else{
          element.visible = false;
        }
      });
      
    },
  }
});