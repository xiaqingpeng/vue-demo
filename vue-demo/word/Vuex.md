# 使用步骤

1. 安装  yarn add vuex
2. 创建一个 vuex 的仓库文件   src/store/index.js
3. 编写 仓库文件，并暴露仓库
4. 在  mian.js 中。将 仓库做一个注入
5. 愉快的写代码。


#
1. curCityName 写到了 仓库中
2. 组件中用了 curCityName 的需要删掉，而要换成用仓库的 curCityName


# 如何从仓库中取出数据在组件中使用

1. computed
  computed: {
    curCityName () {
      return this.$store.state.curCityName;
    }
  }


# 需要修改数据的时候，得修改仓库的数据， 如果修改仓库的数据？

并且也只能通过 仓库的 mutation 去修改。

mutations: {
  // key: value
  /**
    * 修改curCityName
    * @param {Object} state 就是当前仓库的 state
    */
  chgCityName (state) {
    state.curCityName = '白山';
  }
}

组件中：（需要提交 chgCityName 这个 mutation）

1. this.$store.commit('chgCityName')



##

1. this.$store.state.xxx 用起来不方便，vuex 提供有 mapState() 这个辅助函数供我们去调用

2. this.$store.getters.xxx ------- vuex mapGetters()

3. this.$store.commit('xxx')  ----- vuex mapMutations()


## 辅助函数的使用

1. 哪里要用，哪里就得先引入



## mapState

  返回是个对象

  Vuex.mapState([
    'cityData',         =>
    'curCityName'
  ]),


  {
    cityData () {
      return this.$store.state.cityData
    },

    curCityName () {
      return this.$store.state.curCityName
    }
  }


  -------


  Vuex.mapState({
    cityData: (state) => state.cityData,
    a: 'curCityName',            =>
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })

  {
    cityData () {
      return this.$store.state.cityData
    },

    a () {
      return this.$store.state.curCityName
    },

    countPlusLocalState () {
      return this.$store.state.count + this.localCount
    }
  }

