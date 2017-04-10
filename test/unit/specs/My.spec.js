import Vue from 'vue'
import My from '@/components/My'

describe('My.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(My)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.my h1').textContent)
      .to.equal('Hello world')
  })

  it('should show alert', () => {

    expect(My.methods.sayHi())

  })
})
