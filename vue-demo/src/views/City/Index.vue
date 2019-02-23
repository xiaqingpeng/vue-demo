<template>
  <div class="mz-city">
    <mz-header :title="'当前城市-'+ curCityName"></mz-header>
    <div class="lv-indexlist">
      <ul class="lv-indexlist__content" id="lv-indexlist__content">
        <div class="recommend-city">
          <div class="gprs-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">定位失败</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail">
              <li class="city-item-detail">
                <div class="city-item-text">上海</div>
              </li>
              <li class="city-item-detail">
                <div class="city-item-text">天津</div>
              </li>
            </ul>
          </div>
        </div>
        <li class="lv-indexsection">
          <p class="lv-indexsection__index"></p>
          <ul>
            <li>鞍山</li>
            <li>安庆</li>
            <li>安阳</li>
            <li>安顺</li>
            <li>安康</li>
          </ul>
        </li>
      </ul>
      <div class="lv-indexlist__nav">
        <ul>
           <li>A</li>
           <li>B</li>
           <li>C</li>
           <li>D</li>
           <li>E</li>
           <li>F</li>
           <li>G</li>
           <li>H</li>
           <li>L</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import MzHeader from "@/components/MzHeader/Index";
import axios from "axios";
export default {
  components: {
    "mz-header": MzHeader
  },
  data() {
    return {
      cityDate: []
    };
  },
  computed: {
    curCityName() {
      return this.$store.state.curCityName;
    }
  },
  methods: {
    changeCity(city) {
      this.$store.commit("chgCityName");
    },
    getCityDate() {
      axios.get("./json/city.json").then(Response => {
        console.log(1);
        let data = Response.data;
        console.log(data);
      });
    },
    created() {
      this.getCityDate();
    }
  }
};
</script> 
<style lang="less">
@import url("./index.less");
</style>
