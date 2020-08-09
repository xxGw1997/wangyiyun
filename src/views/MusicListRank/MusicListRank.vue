<template>
  <div class="music-list-rank">
    <div class="header">
      <header-top>
        <div slot="left">
          <i class="iconfont icon-back" @click="$router.go(-1)"/>
        </div>
        <div slot="center" class="center-title">
          <span>排行榜</span>
        </div>
        <div slot="right">
          <i class="iconfont icon-zhengzaibofang" v-show="songDetail[0]" @click="playerShow"/>
        </div>
      </header-top>
    </div>
    <div class="rank-content">
      <cube-scroll>
        <div class="recommend-rank">
          <span class="title">榜单推荐</span>
          <div class="rank-list">
            <rank-item/>
            <rank-item/>
            <rank-item/>
            <rank-item/>
            <rank-item/>
            <rank-item/>
          </div>
        </div>
        <div class="official-rank">
          <span class="title">官方榜</span>
          <div class="official-rank-list">
            <rank-list-official/>
          </div>
        </div>
        <div class="characteristic-rank">
          <span class="title">特色榜</span>
        </div>
        <div class="global-rank">
          <span class="title">全球榜</span>
        </div>
        <div class="region-rank">
          <span class="title">地区榜</span>
        </div>
        <div class="style-rank">
          <span class="title">曲风榜</span>
        </div>
        <div class="more-rank">
          <span class="title">更多榜单</span>
        </div>
        <li>1n</li>
        <li>2n</li>
        <li>3n</li>
        <li>4n</li>
        <li>5n</li>
        <li>6n</li>
        <li>7n</li>
        <li>8n</li>
        <li>9n</li>
        <li>10n</li>
        <li>11n</li>
        <li>12n</li>
        <li>13n</li>
        <li>14n</li>
        <li>15n</li>
        <li>16n</li>
        <li>17n</li>
        <li>18n</li>
        <li>19n</li>
        <li>20n</li>
        <li>21n</li>
        <li>22n</li>
        <li>23n</li>
        <li>24n</li>
        <li>25n</li>
        <li>26n</li>
        <li>27n</li>
        <li>28n</li>
        <li>29n</li>
        <li>30n</li>
        <li>31n</li>
        <li>32n</li>
        <li>33n</li>
        <li>34n</li>
        <li>35n</li>
        <li>36n</li>
        <li>37n</li>
        <li>38n</li>
        <li>39n</li>
        <li>40n</li>
        <li>41n</li>
        <li>42n</li>
        <li>43n</li>
        <li>44n</li>
        <li>45n</li>
        <li>46n</li>
        <li>47n</li>
        <li>48n</li>
        <li>49n</li>
        <li>50n</li>
        <li>51n</li>
        <li>52n</li>
        <li>53n</li>
        <li>54n</li>
        <li>55n</li>
        <li>56n</li>
        <li>57n</li>
        <li>58n</li>
        <li>59n</li>
        <li>60n</li>
        <li>61n</li>
        <li>62n</li>
        <li>63n</li>
        <li>64n</li>
        <li>65n</li>
        <li>66n</li>
        <li>67n</li>
        <li>68n</li>
        <li>69n</li>
        <li>70n</li>
        <li>71n</li>
        <li>72n</li>
        <li>73n</li>
        <li>74n</li>
        <li>75n</li>
        <li>76n</li>
        <li>77n</li>
        <li>78n</li>
        <li>79n</li>
        <li>80n</li>
        <li>81n</li>
        <li>82n</li>
        <li>83n</li>
        <li>84n</li>
        <li>85n</li>
        <li>86n</li>
        <li>87n</li>
        <li>88n</li>
        <li>89n</li>
        <li>90n</li>
        <li>91n</li>
        <li>92n</li>
        <li>93n</li>
        <li>94n</li>
        <li>95n</li>
        <li>96n</li>
        <li>97n</li>
        <li>98n</li>
        <li>99n</li>
        <li>100n</li>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/Header'
import RankItemCover from './ChildComps/RankItemCover'
import RankItem from './ChildComps/RankItem'
import RankListOfficial from './ChildComps/RankListOfficial'

import { getSongDetail } from '@/utils/cache'
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  components: {
    HeaderTop,
    RankItemCover,
    RankItem,
    RankListOfficial
  },
  methods: {
    playerShow() {
      this.$store.dispatch('playerShow', true)
    }
  },
  computed: {
    songDetail() {
      return getSongDetail()
    }
  }
}
</script>

<style lang="scss" scoped>
.music-list-rank {
  .header {
    width: 100%;
    height: 50px;
    .iconfont {
      color: rgba(0, 0, 0, 0.8);
      font-size: 25px;
    }
    .center-title {
      font-size: 16px;
      letter-spacing: 1px;
      color: rgba(0, 0, 0, 0.9);
    }
  }
  .rank-content {
    height: calc(100vh - 110px);
    margin: 0 10px;
    background: pink;
    .recommend-rank {
      margin-top: 15px;
    }
    .title {
      font-size: 20px;
    }
    .official-rank {
      .official-rank-list {
        width: 100%;
      }
    }
  }
  .rank-list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
