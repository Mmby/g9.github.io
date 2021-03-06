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
      {
        title: '如果有人深深惹恼我时，我：',
        selected: null,
        selectArr: [
          '内心感到受伤，认为没有原谅的可能，可最终很多时候还是会原谅对方',
          '深深感到愤怒，如此之深怎可忘记？我会牢记，同时未来完全避开那个家伙',
          '会火冒三丈，并且内心期望有机会狠狠地回应',
          '避免摊牌，因为还不到那个地步或者自己再去找新朋友'
        ]
      },
      {
        title: '在人际关系中，我最在意的是：',
        selected: null,
        selectArr: [
          '得到他人的赞美和欢迎',
          '得到他人的理解和欣赏',
          '得到他人的感激和尊敬',
          '得到他人的尊重和接纳'
        ]
      },
      {
        title: '在工作上，我表现出来更多的是：',
        selected: null,
        selectArr: [
          '充满热忱，有很多想法且很有灵性',
          '心思细腻，完美精确，而且为人可靠',
          '坚强而直截了当，而且有推动力',
          '有耐心，适应性强而且善于协调'
        ]
      },
      {
        title: '我过往的老师最有可能对我的评价是：',
        selected: null,
        selectArr: [
          '情绪起伏大，善于表达和抒发情感',
          '严格保护自己的私密，有时会显得孤独或是不合群',
          '动作敏捷又独立，并且喜欢自己做事情',
          '看起来安稳轻松，反应度偏低，比较温和'
        ]
      },
      {
        title: '朋友对我的评价最有可能的是：',
        selected: null,
        selectArr: [
          '喜欢对朋友述说，也有感染别人的力量',
          '能够提出很多周全的问题，而且需要许多精细的解说',
          '愿意直言想法，有时会直率而犀利地谈论不喜欢的人、事、物',
          '通常与他人一起是倾听者'
        ]
      },
      {
        title: '在帮助他人的问题上，我内心的想法是：',
        selected: null,
        selectArr: [
          '别人来找我，不太会拒绝，会尽力帮他',
          '值得帮助的人应该帮助',
          '很少承诺要帮，但我若承诺必兑现',
          '虽无英雄打虎胆，常有自告奋勇心'
        ]
      },
      {
        title: '面对他人对自己的赞美，我内心：',
        selected: null,
        selectArr: [
          '没有也无所谓，特别欣喜那也不至于',
          '我不需无关痛痒的赞美，宁可对方欣赏我的能力',
          '思考对方的真实性或立即回避众人的关注',
          '赞美多多益善，总是令人愉悦的'
        ]
      },
      {
        title: '面对生活，我更像：',
        selected: null,
        selectArr: [
          '随和派－外面的世界我无关，我觉得自己这样还不错',
          '行动派－我不进步，别人就会进步，所以我必须不停地前进',
          '分析派－在问题未发生之前，就该想好所有的可能',
          '无忧派－每天的生活开心快乐最重要'
        ]
      },
      {
        title: '对于规则，我内心的态度是：',
        selected: null,
        selectArr: [
          '不愿违反规则，但可能因为松散而无法达到规则的要求',
          '打破规则，希望由自己来制定规则而不是遵守规则',
          '严格遵守规则，并且竭尽全力做到规则内的最好',
          '不喜被规则束缚，不按规则出牌会觉得新鲜有趣'
        ]
      },
      {
        title: '我认为自己在行为上的基本特点是：',
        selected: null,
        selectArr: [
          '慢条斯理，办事按部就班，能与周围的人协调一致',
          '目标明确，集中精力为实现目标而努力，善于抓住核心要点',
          '慎重小心，为做好预防及善后，会不惜一切而尽心操劳',
          '丰富跃动，不喜欢制度和约束，倾向于快速反应'
        ]
      },
      {
        title: '当我做错事时，我倾向于：',
        selected: null,
        selectArr: [
          '害怕但表面不露声色',
          '不承认而且辩驳，但内心其实已经明白',
          '愧疚和痛苦，容易停留在自我压抑中',
          '难为情，希望逃避别人的批评'
        ]
      },
      {
        title: '当结束一段刻骨铭心的感情时，我会：',
        selected: null,
        selectArr: [
          '很难受，可日子总要过，时间会冲淡一切的',
          '虽然觉得受伤，但一旦下定决心，就会努力把过去的影子摔掉',
          '深陷在悲伤的情绪中，在相当长的时期里难以自拔，也不愿再接受新的人',
          '痛不欲生，需要找朋友倾诉或者找到渠道发泄，寻求化解之道'
        ]
      },
      {
        title: '面对他人的倾诉，我回顾自己大多时候本能上倾向于：',
        selected: null,
        selectArr: [
          '能够认同并理解对方当时的感受',
          '快速做出一些定论或判断',
          '给予一些分析或推理，帮助对方理顺思路',
          '可能会随着他的情绪起伏而起伏，也会发表一些评论或意见'
        ]
      },
      {
        title: '我在以下哪个群体中交流较感满足？',
        selected: null,
        selectArr: [
          '舒服轻松的氛围中，心平气和地最终达成一致结论',
          '彼此展开充分激烈的辩论并有收获',
          '有意义地详细讨论事情的好坏和影响',
          '很开心并且随意无拘束地闲谈'
        ]
      },
      {
        title: '在内心的真实想法里，我觉得工作：',
        selected: null,
        selectArr: [
          '不必有太大压力，可以让我做我熟悉的工作就很不错',
          '应该以最快的速度完成，且争取去完成更多的任务',
          '要么不做，要做就做到最好',
          '如果能将好玩融合其中那就太棒了，不过如果不喜欢的工作实在没劲'
        ]
      },
      {
        title: '如果我是领导，我内心更希望在部属心目中，我是：',
        selected: null,
        selectArr: [
          '可以亲近的和善于为他们着想的',
          '有很强的能力和富有领导力的',
          '公平公正且足以信赖的',
          '被他们喜欢并且觉得富有感召力的'
        ]
      },
      {
        title: '我对认同的需求是：',
        selected: null,
        selectArr: [
          '无论别人是否认同，生活都是要继续的',
          '精英群体的认同最重要',
          '只要我在乎的那些人认同我就足够了',
          '所见之人无论贵贱都对我认同那有多好'
        ]
      },
      {
        title: '当我还是个孩子的时候，我：',
        selected: null,
        selectArr: [
          '不太会积极尝试新事物，通常比较喜欢旧有的和熟悉的',
          '是孩子王，大家经常听我的决定',
          '害羞见生人，有意识地回避',
          '调皮可爱，乐观而又热心'
        ]
      },
      {
        title: '如果我是父母，我也许是：',
        selected: null,
        selectArr: [
          '容易说服或者宽容的',
          '比较严厉、性急及说一不二的',
          '坚持自己的想法和比较挑剔的',
          '积极参与到子女中一起玩，被小朋友们们热烈欢迎的'
        ]
      },
      {
        title: '以下有四组格言，哪组里整体上最符合我的感觉?',
        selected: null,
        selectArr: [
          '最深刻的真理是最简单和最平凡的。要在人世间取得成功必须大智若愚。好脾气是一个人在社交中所能穿着的最佳服饰。知足是人生在世最大的幸福。',
          '走自己的路，让人家去说吧。虽然世界充满了苦难，但是苦难总是能战胜的。有所成就是人生唯一的真正的乐趣。对我而言解决一个问题和享受一个假期一样好。',
          '一个不注意小事情的人，永远不会成功大事业。理性是灵魂中最高贵的因素。切忌浮夸铺张。与其说得过分，不如说得不全。谨慎比大胆要有力量得多。',
          '幸福在于对生命的喜悦和激情。任何时候都要最真实地对待你自己，这比什么都重要。使生活变成幻想，再把幻想化为现实。幸福不在于拥有金钱，而在于获得成就时的喜悦以及产生创造力的激情。'
        ]
      },
    ]
  },
  mounted() {
    this.currentObj = this.list[this.currentIndex]
  },
  computed: {
    progressVal: function () {
      return (((this.currentIndex+1) / this.list.length).toFixed(2) * 100)
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
        this.isover = false
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
    sliceArr(arr, sliceNum = 15) {
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