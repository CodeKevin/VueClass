Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})
var app = new Vue({
  el: '#app',
  data: {
    message: 'hello',
    // component
    propsList: [
      { id: 0, text: 'mike' },
      { id: 2, text: 'apple' },
      { id: 3, text: 'pen' }
    ],
    question: '',
    answer: 'I cannot give you any anwser until you ask a question!'
  },
  watch: {
    question: function (newAnswer, oldAnswer) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    reverseMsg: function () {
      this.message = this.message.split('').reverse().join('')
    },
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
}
)
