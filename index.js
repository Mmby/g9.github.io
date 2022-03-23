const vm = new Vue({
  el: '#app',
  data: {
    currentIndex: 0,
    charts: null,
    isover:false,
    list: [{
        title: '关于人生观，我的内心其实是：',
        selected: null,
        selectArr: [
          '想象中是拥有丰富多彩的人生体验，多元化的人生观想',
          '量力而行，有明确的人生目标，会坚定不移地去执行',
          '勇于挑战一切皆有可能的成就',
          '安于现状，喜欢稳定的生活方式，不喜欢冒险'
        ]
      },
      {
        title: '在旅游爬山的过程中，通常情况下，往返下山回来的路线我最有可能：',
        selected: null,
        selectArr: [
          '热爱新趣味，所以会选择一条新路线返回',
          '追求安全稳当，所以宁愿选择原路线返回',
          '勇于挑战困难，所以宁愿新路线返回',
          '便利省心，所以宁愿原路线返回'
        ]
      },
      {
        title: '与人交谈时，我更看重：',
        selected: null,
        selectArr: [
          '为了更明显的感觉效果，有时可能会略显得夸张',
          '为了描述更精确，有时候可能略过冗长',
          '为了更快的得到结果，有时可能过于直接惹人不悦',
          '人际之间的交流感受，有时可能宁愿讲违心话　'
        ]
      },
      {
        title: '在更多的时候，我的内心更想要：',
        selected: null,
        selectArr: [
          '经常冒出新点子，雷厉风行，喜欢与众不同，追求刺激',
          '头脑时刻保持冷静，不易冲动，安全型',
          '生命中随时充满竞争，有强烈征服欲，勇于挑战',
          '知足常乐，安于现状，稳妥型'
        ]
      },
      {
        title: '我认为自己在情感上的基本特点是：',
        selected: null,
        selectArr: [
          '情绪多变，经常波动',
          '外表自我抑制强，但内心感情起伏大，一旦挫伤难以平复',
          '感情不拖泥带水，只是一旦不稳定，容易发怒',
          '天性情绪四平八稳'
        ]
      },
      {
        title: '我认为自己除了工作外，在控制欲上面，我：',
        selected: null,
        selectArr: [
          '没有控制欲，只有感染带动他人的欲望，但自控能力不算强',
          '用规则来保持我对自己的控制和对他人的要求',
          '内心是有控制欲和希望别人服从我的',
          '没兴趣影响别人，也不愿别人来控制我'
        ]
      },
      {
        title: '当与情人交往时，我最希望对方：',
        selected: null,
        selectArr: [
          '经常赞美我，让我享受开心、被关怀且又有一定自由',
          '可随时默契到我内心所想，对我的需求极其敏感',
          '得到对方的认可，我是正确的并且我对其是有价值的',
          '尊重并且相处静谧的'
        ]
      },
      {
        title: '在人际交往时，我：',
        selected: null,
        selectArr: [
          '本质上还是认为与人交往比长时间独处是有乐趣的',
          '非常审慎缓慢地进入，常会被人认为容易有距离感',
          '希望在人际关系中占据主导地位',
          '顺其自然，不温不火，相对被动'
        ]
      },
      {
        title: '我做事情，经常：',
        selected: null,
        selectArr: [
          '缺少长性，不喜欢长期做相同无变化的事情',
          '缺少果断，期待最好的结果但总能先看到事情的不利面',
          '缺少耐性，有时行事过于草率',
          '缺少紧迫，行动迟缓，难下决心'
        ]
      },
      {
        title: '通常我完成任务的方式是：',
        selected: null,
        selectArr: [
          '常赶在最后期限前完成，是临时抱佛脚的高手',
          '自己有严格规定的程序，精确地做，不要麻烦别人',
          '先做，快速做',
          '使用传统的方法按部就班，需要时从他人处得到帮忙'
        ]
      },
    ]
  },
  mounted() {
    this.currentObj = this.list[this.currentIndex]
  },
  computed: {
    progressVal: function () {
      return ((this.currentIndex+1) / this.list.length) * 100
    }
  },
  methods: {
    next() {
      if (this.list[this.currentIndex].selected) {
        this.currentIndex += 1
      } else {
        this.$message('请先选择再进行下一个');
      }
    },
    submit() {
      if(this.isover) {
        this.currentIndex = 0
      }else {
        let arr = []
        let mapLetter = ['A', 'B', 'C', 'D']
        this.list.map(item => {
          let eindex = item.selectArr.findIndex(e => {
            return e == item.selected
          })
          arr.push(mapLetter[eindex])
        })
        let data = this.sliceArr(arr)
        this.isover = true
        setTimeout(() => {
          this.initEcharts(data)
        },500)
      }
    },
    sliceArr(arr, sliceNum = 5) {
      let arr1 = arr.slice(0, sliceNum)
      let arr2 = arr.slice(sliceNum)
      let beforeA = arr1.filter(item => {
        return item == 'A'
      })
      let beforeB = arr1.filter(item => {
        return item == 'B'
      })
      let beforeC = arr1.filter(item => {
        return item == 'C'
      })
      let beforeD = arr1.filter(item => {
        return item == 'D'
      })
      let afterA = arr2.filter(item => {
        return item == 'A'
      })
      let afterB = arr2.filter(item => {
        return item == 'B'
      })
      let afterC = arr2.filter(item => {
        return item == 'C'
      })
      let afterD = arr2.filter(item => {
        return item == 'D'
      })
      let data = [{
          name: 'A',
          value: (beforeA.length + afterA.length)
        },
        {
          name: 'B',
          value: (beforeB.length + afterB.length)
        },
        {
          name: 'C',
          value: (beforeC.length + afterC.length)
        },
        {
          name: 'D',
          value: (beforeD.length + afterD.length)
        },
      ]
      return data
    },
    initEcharts(data) {
      this.charts = echarts.init(document.getElementById('chartPie'));
      this.charts.setOption({
        color: ['red', 'blue', 'yellow', 'green'],
        series: [{
          type: 'pie',
          radius:['20%','80%'],
          label: {
            show: true,
            position: 'inside',
            formatter: '{b}: {c}~{d}%'
          },
          data: data
        }]
      })
    }
  },
})