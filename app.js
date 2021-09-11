new Vue({
    el: '#app',
    
    data () {
      return {
          valTitulo: "",
          valHoras: "",
          cursos: []
      }
    },
    
    computed: {
        totalTime: function() {
            if(this.cursos.length != 0){
                const reducer = (prev, current) => prev + parseInt(current.horas);
                return this.cursos.reduce(reducer, 0);
            }

            return 0;

        }
    },
    
    methods: {
        addCourse: function () {
            if (this.valTitulo === '' || this.valHoras === '' ) {return}
            this.cursos.push({
                titulo: this.valTitulo, 
                horas: this.valHoras
            });
            this.valTitulo = "";
            this.valHoras = 0;
        }
    }
  })