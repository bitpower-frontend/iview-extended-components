<template>
  <div id="BpIcon">
    <h2>BpIcon 图标</h2>
    <div class="search">
      <input placeholder="搜索图标" v-model="searchKey"></input>
    </div>
    <span class="container" v-for="name,i in icons" @click="copyIcon(name)">
      <BpIcon :name="name" size="20"></BpIcon>
      <label class="name">{{ name }}</label>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'bp-icon-preview',
    data (){
      return {
        searchKey: '',
        iconList: [],
      };
    },
    computed: {
      icons (){
        return this.searchKey.trim() ? this.iconList.filter(name => {
          return name.includes(this.searchKey.trim());
        }) : this.iconList;
      }
    },
    methods: {
      copyIcon (name){
        //
      }
    },
  };
</script>

<style lang= "less" scoped>
  #BpIcon {
    padding: 0 10px;
    .container {
      display: inline-block;
      margin: 10px 0;
      padding: 30px 0;
      width: 110px;
      text-align: center;
      &:hover {
        cursor: pointer;
        background-color: #f5f5f5;
      }
      label {
        display: block;
        margin-top: 8px;
      }
    }
  }
</style>