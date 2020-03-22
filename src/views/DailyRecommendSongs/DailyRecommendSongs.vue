<template>
    <div class="daily-recommend-songs">
        <div class="drs-bg">
            <div class="drs-header">
                <div class="header-back">
                    <i class="iconfont icon-back"></i>
                </div>
                <div>
                    <i class="iconfont icon-zhengzaibofang"></i>
                </div>
            </div>
            <div class="drs-bg-black"></div>
            <img :src="img" alt="">
        </div>
        <div class="scroll-list-wrap">
            <cube-sticky :pos="scrollY">
                <cube-scroll 
                    ref="scroll"
                    @scroll="scrollHandler"
                    :scroll-events="scrollEvents">
                    <div class="drs-title">
                        <div class="title-up">
                            <span>22</span>
                            <span>/03</span>
                        </div>
                        <div class="title-down">
                            <div class="recommend-word">根据你的音乐口味，为你推荐好音乐、好朋友</div>
                            <div class="recommend-user">
                                <div><img :src="img" alt=""></div>
                                <div><img :src="img" alt=""></div>
                                <div><img :src="img" alt=""></div>
                            </div>
                        </div>
                    </div>
                    <div class="drs-content">
                        <cube-sticky-ele>
                            <div class="content-title">
                                <div class="test">123</div>
                            </div>
                        </cube-sticky-ele>
                        <div class="content-list">
                        </div>
                    </div>
                    <div>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li>19</li>
                        <li>20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li>26</li>
                        <li>27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                        <li>31</li>
                        <li>32</li>
                        <li>33</li>
                        <li>34</li>
                        <li>35</li>
                        <li>36</li>
                        <li>37</li>
                        <li>38</li>
                        <li>39</li>
                        <li>40</li>
                        <li>41</li>
                        <li>42</li>
                        <li>43</li>
                        <li>44</li>
                        <li>45</li>
                        <li>46</li>
                        <li>47</li>
                        <li>48</li>
                        <li>49</li>
                        <li>50</li>
                        <li>51</li>
                        <li>52</li>
                        <li>53</li>
                        <li>54</li>
                        <li>55</li>
                        <li>56</li>
                        <li>57</li>
                        <li>58</li>
                        <li>59</li>
                        <li>60</li>
                        <li>61</li>
                        <li>62</li>
                        <li>63</li>
                        <li>64</li>
                        <li>65</li>
                        <li>66</li>
                    </div>
                </cube-scroll>
            </cube-sticky>
        </div>
    </div>
</template>

<script>
 export default {
   data () {
     return {
        scrollEvents: ['scroll'],
        scrollY:0,
        img:'http://p2.music.126.net/UI_5fJZa9AHRfJ1AywjSog==/78065325577772.jpg'
     }
   },
   components: {

   },
   methods:{
    scrollHandler({ y }) {
      this.scrollY = -y
    }
   }
 }
</script>

<style scoped>
.test{
    background: blueviolet;
}

.daily-recommend-songs{
    height: 100vh;
}

.scroll-list-wrap{
    position: relative;
    top:50px;
    height: calc(100% - 110px);
}

.drs-bg{
    position: fixed;
    width: 100%;
    height: 30%;
    z-index: -1;
}

.drs-bg .drs-header{
    width: 100%;
    height: 50px;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: space-between;
}

.drs-bg .drs-header>div>i{
    margin: 0 15px;
    font-size: 25px;
    color: white;
    line-height: 50px;
}

.drs-bg .drs-bg-black{
    position: absolute;
    background: rgb(0, 0, 0,.2);
    width: 100%;
    height: 100%;
}

.drs-bg>img{
    width: 100%;
    height: 100%;
}

.scroll-list-wrap .drs-title{
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    margin-left: 20px;
    height: 120px;
}

.scroll-list-wrap .drs-title .title-up{
    width: 100%;
    height: 40px;
    color: white;
    font-size: 30px;
}

.scroll-list-wrap .drs-title .title-up>span:nth-of-type(2){
    font-size: 20px;
}

.scroll-list-wrap .drs-title .title-down{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 25px;
    color: rgb(255, 255, 255,.8);
    letter-spacing: 1px;
    font-size: 10px;
}

.scroll-list-wrap .drs-title .title-down .recommend-word{
    line-height: 25px;
}

.scroll-list-wrap .drs-title .title-down .recommend-user{
    display: flex;
    width: 25%;
    line-height: 25px;
    margin-right: 20px;
}

.scroll-list-wrap .drs-title .title-down .recommend-user>div{
    width: 33%;
}

.scroll-list-wrap .drs-title .title-down .recommend-user>div>img{
    width: 90%;
    border-radius: 50%;
}

.scroll-list-wrap .drs-content{
    margin-top: 20px;
}

.scroll-list-wrap .drs-content .content-title{
    width: 100%;
    height: 20px;
    background: green;
}
</style>
