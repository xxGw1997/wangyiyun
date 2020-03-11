<template>
 <section>
    <HeaderTop>
      <div class="header_left" slot="left">
        <i class="iconfont icon-live_icon"></i>
      </div>
      <div class="header_center" slot="center">
        <i class="iconfont icon-iconfonticonfontsousuo1"></i>
        <input type="text" name="" placeholder="搜索歌曲、歌手">
      </div>  
    </HeaderTop>
    <div class="wrapper" ref="test">
      <div class="content">
        <li>轩轩国王1</li>
        <li>轩轩国王2</li>
        <li>轩轩国王3</li>
        <li>轩轩国王4</li>
        <li>轩轩国王5</li>
        <li>轩轩国王6</li>
        <li>轩轩国王7</li>
        <li>轩轩国王8</li>
        <li>轩轩国王9</li>
        <li>轩轩国王10</li>
        <li>轩轩国王11</li>
        <li>轩轩国王12</li>
        <li>轩轩国王13</li>
        <li>轩轩国王14</li>
        <li>轩轩国王15</li>
        <li>轩轩国王16</li>
        <li>轩轩国王17</li>
        <li>轩轩国王18</li>
        <li>轩轩国王19</li>
        <li>轩轩国王20</li>
        <li>轩轩国王21</li>
        <li>轩轩国王22</li>
        <li>轩轩国王23</li>
        <li>轩轩国王24</li>
        <li>轩轩国王25</li>
        <li>轩轩国王26</li>
        <li>轩轩国王27</li>
        <li>轩轩国王28</li>
        <li>轩轩国王29</li>
        <li>轩轩国王30</li>
        <li>轩轩国王31</li>
        <li>轩轩国王32</li>
        <li>轩轩国王33</li>
        <li>轩轩国王34</li>
        <li>轩轩国王35</li>
        <li>轩轩国王36</li>
        <li>轩轩国王37</li>
        <li>轩轩国王38</li>
        <li>轩轩国王39</li>
        <li>轩轩国王40</li>
        <li>轩轩国王41</li>
        <li>轩轩国王42</li>
        <li>轩轩国王43</li>
        <li>轩轩国王44</li>
        <li>轩轩国王45</li>
        <li>轩轩国王46</li>
        <li>轩轩国王47</li>
        <li>轩轩国王48</li>
        <li>轩轩国王49</li>
        <li>轩轩国王50</li>
        <li>轩轩国王51</li>
        <li>轩轩国王52</li>
        <li>轩轩国王53</li>
        <li>轩轩国王54</li>
        <li>轩轩国王55</li>
        <li>轩轩国王56</li>
        <li>轩轩国王57</li>
        <li>轩轩国王58</li>
        <li>轩轩国王59</li>
        <li>轩轩国王60</li>
        <li>轩轩国王61</li>
        <li>轩轩国王62</li>
        <li>轩轩国王63</li>
        <li>轩轩国王64</li>
        <li>轩轩国王65</li>
        <li>轩轩国王66</li>
        <li>轩轩国王67</li>
        <li>轩轩国王68</li>
        <li>轩轩国王69</li>
        <li>轩轩国王70</li>
        <li>轩轩国王71</li>
        <li>轩轩国王72</li>
        <li>轩轩国王73</li>
        <li>轩轩国王74</li>
        <li>轩轩国王75</li>
        <li>轩轩国王76</li>
        <li>轩轩国王77</li>
        <li>轩轩国王78</li>
        <li>轩轩国王79</li>
        <li>轩轩国王80</li>
        <li>轩轩国王81</li>
        <li>轩轩国王82</li>
        <li>轩轩国王83</li>
        <li>轩轩国王84</li>
        <li>轩轩国王85</li>
        <li>轩轩国王86</li>
        <li>轩轩国王87</li>
        <li>轩轩国王88</li>
        <li>轩轩国王89</li>
        <li>轩轩国王90</li>
        <li>轩轩国王91</li>
        <li>轩轩国王92</li>
        <li>轩轩国王93</li>
        <li>轩轩国王94</li>
        <li>轩轩国王95</li>
        <li>轩轩国王96</li>
        <li>轩轩国王97</li>
        <li>轩轩国王98</li>
        <li>轩轩国王99</li>
        <li>轩轩国王100</li>
      </div>
    </div>
    
 </section>
</template>

<script>
import BScroll from 'better-scroll'
import HeaderTop from '@/components/HeaderTop/HeaderTop'

 export default {
   data(){
     return {
       scroll:null
     }
   },
   mounted(){
     this.scroll = new BScroll(this.$refs.test,{
       probeType:3
     })
     this.scroll.on('scroll',position=>{
       console.log(position)
     })
   },
   components: {
     HeaderTop
   }
 }
</script>

<style scoped>
.wrapper{
  height: 150px;
  background: red;
  overflow: hidden;
}
 
</style>
