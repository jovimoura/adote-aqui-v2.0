// import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js';

let app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      listaPets: [
        {
          id: 0,
          name: "Tadeu",
          src: "./assets/pets/Cachorro2.jpg",
          alt: "exeplo",
        },
        {
          id: 1,
          name: "Safira",
          src: "./assets/pets/Cachorro3.jpg",
          alt: "exemplo",
        },
        {
          id: 2,
          name: "Asuna",
          src: "./assets/pets/Cachorro4.jpg",
          alt: "exemplo",
        },
        {
          id: 3,
          name: "Pudim",
          src: "./assets/pets/Gato1.jpeg",
          alt: "exemplo",
        },
        {
          id: 4,
          name: "Melissa",
          src: "./assets/pets/Gato2.jpg",
          alt: "exemplo",
        },
        {
          id: 5,
          name: "Elvis",
          src: "./assets/pets/Gato3.jpg",
          alt: "exemplo",
        },
      ],
      mostraModal: false,
      mostraAdocao: false,
      mostraContato: false,
      name: '',
      email: '',
      phone: '',
      feedback: false,
      mensagemName: false,
      mensagemPhone: false,
      mensagemEmail: false
    };
  },
  methods: {
    callModal() {
      this.mostraModal = !this.mostraModal;
    },
    callAdocao() {
      this.mostraAdocao = !this.mostraAdocao
    },
    callContato() {
      this.mostraContato = !this.mostraContato
    },
    /**
             * Validação de numero
             * @param {*} phone
             * @returns {(object)}
             */
    mascaraNumero(phone) {
      // Função que cria a máscara para o número de telefone
      if (this.phone.length == 1) {
          const digit = this.phone
          this.phone = `(${digit}`
      } else if (this.phone.length === 3) {
          this.phone += ') '
      } else if (this.phone.length === 9) {
          this.phone += '-'
      }
    },
    testeForm() {
      //validação de numero
      const validaNumero = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/
      //validação de email
      const validaEmail = /\S+@\S+\.\S+/
      if(this.name === '') {
        this.mensagemName = !this.mensagemName
      }
      if(!validaEmail.test(this.email)) {
        this.mensagemEmail = !this.mensagemEmail
      }
      if(!validaNumero.test(this.phone)) {
        this.mensagemPhone = !this.mensagemPhone
      }
      if((this.name != '') && (validaEmail.test(this.email)) && (validaNumero.test(this.phone))) {
        this.resetaErros()
        this.resetaDados()
        this.feedback = !this.feedback
        setTimeout(() => {
          this.feedback = !this.feedback
        }, 2500);
      }
    },
    resetaErros () {
      this.mensagemName = false
      this.mensagemPhone = false
      this.mensagemEmail = false
    },
    resetaDados () {
      this.name = "";
      this.email = "";
      this.phone = "";
    }
  },
});
