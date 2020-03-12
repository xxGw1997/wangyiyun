<template>
    <div class="playlist">
        <header-top class="header-top">
            <div class="header_left" slot="left" @click="$router.go(-1)">
                <i class="iconfont icon-back"></i>
            </div>
            <div class="header_center" slot="center">
                歌单
            </div>
        </header-top>
        <scroll class="content">
            <play-info :playListDetail="playListDetail"/>


            <li>哈哈哈1</li>
            <li>哈哈哈2</li>
            <li>哈哈哈3</li>
            <li>哈哈哈4</li>
            <li>哈哈哈5</li>
            <li>哈哈哈6</li>
            <li>哈哈哈7</li>
            <li>哈哈哈8</li>
            <li>哈哈哈9</li>
            <li>哈哈哈10</li>
            <li>哈哈哈11</li>
            <li>哈哈哈12</li>
            <li>哈哈哈13</li>
            <li>哈哈哈14</li>
            <li>哈哈哈15</li>
            <li>哈哈哈16</li>
            <li>哈哈哈17</li>
            <li>哈哈哈18</li>
            <li>哈哈哈19</li>
            <li>哈哈哈20</li>
            <li>哈哈哈21</li>
            <li>哈哈哈22</li>
            <li>哈哈哈23</li>
            <li>哈哈哈24</li>
            <li>哈哈哈25</li>
            <li>哈哈哈26</li>
            <li>哈哈哈27</li>
            <li>哈哈哈28</li>
            <li>哈哈哈29</li>
            <li>哈哈哈30</li>
            <li>哈哈哈31</li>
            <li>哈哈哈32</li>
            <li>哈哈哈33</li>
            <li>哈哈哈34</li>
            <li>哈哈哈35</li>
            <li>哈哈哈36</li>
            <li>哈哈哈37</li>
            <li>哈哈哈38</li>
            <li>哈哈哈39</li>
            <li>哈哈哈40</li>
            <li>哈哈哈41</li>
            <li>哈哈哈42</li>
            <li>哈哈哈43</li>
            <li>哈哈哈44</li>
            <li>哈哈哈45</li>
            <li>哈哈哈46</li>
            <li>哈哈哈47</li>
            <li>哈哈哈48</li>
            <li>哈哈哈49</li>
            <li>哈哈哈50</li>
            <li>哈哈哈51</li>
            <li>哈哈哈52</li>
            <li>哈哈哈53</li>
            <li>哈哈哈54</li>
            <li>哈哈哈55</li>
            <li>哈哈哈56</li>
            <li>哈哈哈57</li>
            <li>哈哈哈58</li>
            <li>哈哈哈59</li>
            <li>哈哈哈60</li>
            <li>哈哈哈61</li>
            <li>哈哈哈62</li>
            <li>哈哈哈63</li>
            <li>哈哈哈64</li>
            <li>哈哈哈65</li>
            <li>哈哈哈66</li>
            <li>哈哈哈67</li>
            <li>哈哈哈68</li>
            <li>哈哈哈69</li>
            <li>哈哈哈70</li>
        </scroll>
    </div>
</template>

<script>
 import {mapState} from 'vuex'

 import HeaderTop from '@/components/HeaderTop/HeaderTop'
 import Scroll from '@/components/Scroll/Scroll'

 import PlayInfo from './ChildComps/PlayInfo'

 export default {
   data () {
     return {

     }
   },
   components: {
        HeaderTop,
        Scroll,
        PlayInfo
   },
   computed:{
     ...mapState(['playListDetail'])
   },
   created(){
    //    this.$store.dispatch('getPlayListDetail',this.playListId)
   }
 }
</script>

<style scoped>
    .playlist{
        height: 100vh;
        padding-top: 50px;
    }

    .header_center{
        text-align: center;
        line-height: 30px;
        color: aliceblue;
    }

    .content{
        width: 95%;
        height: calc(100% - 110px);
        overflow: hidden;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }

    
 
</style>
