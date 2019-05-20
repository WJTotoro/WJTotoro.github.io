<template>
  <div class="container">
    <ul class="navbar">
      <li v-for="(item,index) in gameClassName" :key="item.name" @click.stop="alterTab(index)" :class="curActiveIndex===index?'active':''">
        <img :src="item.imgUrl" alt="" :width="item.imgWidth" :height="item.imgHeight">
        <p>{{item.name}}</p>
      </li>
    </ul>

    <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight">
      <div class="content">
        <p v-if="curActiveIndex===0">这是角色页</p>
        <p v-if="curActiveIndex===1">这是休闲页</p>

        <ul v-if="curActiveIndex===2" class="consolegame-list">
          <li v-for="(item,index) in consolegameClass" :key="item.name">
            <img :src="item.imgUrl" alt="" width="64" height="64">
            <div class="text-box">
              <p class="game-name">{{item.name}}</p>
              <p class="game-desc">{{item.description}}</p>
              <button class="game-download-btn" @click.stop="handleDownload(index)">{{item.isDownload?"已下载":(item.isLoading?"下载中...":"下载")}}</button>
            </div>
          </li>
        </ul>

        <p v-if="curActiveIndex===3">这是棋牌页</p>
        <p v-if="curActiveIndex===4">这是动作页</p>
        <p v-if="curActiveIndex===5">这是射击页</p>
      </div>
    </v-touch>
  </div>
</template>

<script>
export default {
  name: 'GameDivision',
  data () {
    return {
      gameClassName:[
        {
          name:"角色",
          imgUrl:"../../static/icon/role-icon.png",
          imgWidth:"22",
          imgHeight:"24"
        },
        {
          name:"休闲",
          imgUrl:"../../static/icon/entertainment-icon.png",
          imgWidth:"30",
          imgHeight:"17"
        },
        {
          name:"单机",
          imgUrl:"../../static/icon/consolegame-icon.png",
          imgWidth:"29",
          imgHeight:"17.5"
        },
        {
          name:"棋牌",
          imgUrl:"../../static/icon/poker-icon.png",
          imgWidth:"24",
          imgHeight:"24"
        },
        {
          name:"动作",
          imgUrl:"../../static/icon/action-icon.png",
          imgWidth:"20",
          imgHeight:"24"
        },
        {
          name:"射击",
          imgUrl:"../../static/icon/shoot-icon.png",
          imgWidth:"28",
          imgHeight:"24"
        },
      ],
      consolegameClass:[
        {
          name:"纪念碑谷",
          imgUrl:"../../static/icon/game1.png",
          description:"艺术品级的解密游戏",
          isDownload:false,
          isLoading:false
        },
        {
          name:"头脑特工队:泡泡乐",
          imgUrl:"../../static/icon/game2.png",
          description:"迪士尼满分泡泡龙",
          isDownload:false,
          isLoading:false
        },
        {
          name:"城堡突袭2",
          imgUrl:"../../static/icon/game3.png",
          description:"年度塔防 不得不玩",
          isDownload:false,
          isLoading:false
        },
        {
          name:"无尽吞噬",
          imgUrl:"../../static/icon/game4.png",
          description:"优雅的吃掉你",
          isDownload:false,
          isLoading:false
        },
        {
          name:"TwoDots:冒险之旅",
          imgUrl:"../../static/icon/game5.png",
          description:"玩得完全停不下来",
          isDownload:false,
          isLoading:false
        }
      ],
      curActiveIndex: 2
    }
  },
  methods:{
    alterTab (idx) {
      this.curActiveIndex = idx
    },
    onSwipeLeft () {
      if (this.curActiveIndex === 0) {
        return
      } else{
        this.curActiveIndex--
      }
    },
    onSwipeRight () {
      if (this.curActiveIndex === 5) {
        return
      } else{
        this.curActiveIndex++
      }
    },
    handleDownload (idx) {
      if (this.consolegameClass[idx].isDownload) {
        return
      } else {
        this.consolegameClass[idx].isLoading = true
        setTimeout(() => {
          this.consolegameClass[idx].isLoading = false
          this.consolegameClass[idx].isDownload = true
        },1500)
      }
    }
  },
  mounted () {
    document.title = "游戏分类"
  }
}
</script>

<style scoped>
.container {
  margin:0;
  padding:0;
}
.navbar {
  display:flex;
  flex-direction: row;
  align-items:flex-end;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  border-bottom:1px solid #eee;
}
.consolegame-list{
  display:flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
}
.navbar li{
  flex-grow: 1;
  padding-bottom:18px;
}
.navbar li.active{
  padding-bottom:13px;
  border-bottom:5px solid #ff6749;
}
.navbar li p{
  font-size: 22px;
  font-family: "STXihei";
  color: rgb(119, 119, 119);
  margin:16px 0 0 0;
}
.consolegame-list li{
  padding-left:30px;
  margin-bottom:14px;
}
.consolegame-list img{
  float:left;
}
.text-box{
  float:left;
  border-bottom:1px solid #eee;
  text-align:left;
  margin-left:21px;
  width:79%;
  position:relative;
}
.game-name{
  margin:16px 0 5px;
  font-size: 32px;
  font-weight:500;
  font-family: "STXihei";
  color: rgb(0, 0, 0);
}
.game-desc{
  margin:0 0 46px 0;
  font-size: 26px;
  font-family: "STXihei";
  color: rgb(166, 166, 166);
}
.game-download-btn{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  right:30px;
  background:#fff;
  border:1px solid #cacccd;
  color:#999;
  font-size:32px;
  display:inline-block;
  padding:9px 30px;
  border-radius:8px;
}
</style>