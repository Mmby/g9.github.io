const vm = new Vue({
  el:'#app',
  data:{
    currentIndex:0,
    currentObj:{
      title:'',
      selectRadio:null,
      selectArr:[]
    },
    list:[
      {
        title:'关于人生观，我的内心其实是：',
        selected:null,
        selectArr:[
          '想象中是拥有丰富多彩的人生体验，多元化的人生观想象中是拥有丰富多彩的人生体验，多元化的人生观',
          '量力而行，有明确的人生目标，会坚定不移地去执行',
          '勇于挑战一切皆有可能的成就',
          '安于现状，喜欢稳定的生活方式，不喜欢冒险'
        ]
      }
    ]
  },
  mounted() {
    this.currentObj = this.list[this.currentIndex]
  },
  methods: {
    
  },
})