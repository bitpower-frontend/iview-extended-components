<template>
  <div id="app">
    <h1 id="logo">iView Extended Components</h1>

    <!-- <div class="component">
      <BpIconPreview></BpIconPreview>
    </div> -->

    <div class="component">
      <TagInputPreview></TagInputPreview>
    </div>

    <!-- 菜单 -->
    <ul class="menu">
      <!-- <a href="#BpIcon"><li>BpIcon （图标）</li></a> -->
      <a href="#TagInput"><li>TagInput（标签输入框）</li></a>
    </ul>
  </div>
</template>

<script>
  // import BpIconPreview from './components/bp-icon.vue';
  import TagInputPreview from './components/tag-input.vue';
  export default {
    name: 'app',
    components: {
      // BpIconPreview,
      TagInputPreview,
    },
  };
</script>

<style lang= "less">
  #app {
    padding: 20px;
    color: #555;
    width: 800px;
    margin: 0 auto;
    > h1 {
      line-height: 40px;
      img {
        height: 40px;
        display: inline-block;
        vertical-align: middle;
        margin-top: -5px;
      }
    }
    .menu {
      position: fixed;
      top: 25%;
      left: 50%;
      margin-left: -700px;
      width: 300px;
      list-style: none;
      padding: 0;
      a {
        text-decoration: none;
        color: inherit;
        &:hover {
          color: #222;
        }
        li {
          font-size: 14px;
          margin: 15px 0;
        }
      }
    }
    .component {
      margin-top: 50px;
      margin-bottom: 150px;
      h2 {
        margin-bottom: 40px;
        padding-top: 40px;
        border-top: 1px solid #dedede;
      }
      h3 {
        margin-top: 50px;
      }
    }
    code {
      font-family: Consolas, 'Microsoft Yahei';
    }
    /* h1 {
      font-size: 2.0rem;
    }
    h2 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 1.4rem;
    }
    h4 {
      font-size: 1.1rem;
    }
    h5 {
      font-size: 1.0rem;
    }
    h6 {
      font-size: 0.8rem;
    }
    h1, h2, h3, h4 {
      font-weight: normal;
    } */
    table {
      width: 100%;
      border-collapse:collapse;
      border: 1px solid #dfdfdf;
      th, td {
        border: 1px solid #dfdfdf;
        padding: 10px;
        text-align: center;
      }
    }
  }
</style>

