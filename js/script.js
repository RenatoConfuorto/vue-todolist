const app = new Vue({
  el: '#root',
  data: {
    toDo:[
      {
        text: "Fare l'esercizio",
        done: false
      },
      {
        text: "Dare da mangiare ai gatti",
        done: true
      },
      {
        text: "Riguardare la lezione",
        done: false
      },
      {
        text: "Fare la spesa",
        done: false
      }
    ]
  },
  methods:{
    removeToDo: function(index){
      // console.log(index);
      this.toDo.splice(index, 1);
    },
  }
});