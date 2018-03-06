<!-- 自定义搜索下拉组件 -->
<template>
  <div id="search-input" :class = 'classes'>
    <div class="ivu-select-selection">
      <input 
        type="text" 
        class = 'ivu-select-input'
        :disabled = 'disabled'
        :readonly = 'readonly'
        :maxlength = 'maxlength'
        :minlength = 'minlength'
        :placeholder = 'placeholder'
        :value = 'curValue' 
        @blur = 'blur'
        @focus = 'focus'
        @input = 'input'
        @keydown.enter = 'enter'
      />
    </div>
    <transition name = 'slide-up'>
      <div class = 'ivu-select-dropdown' v-show='isShowDropList'>
        <ul class = 'ivu-select-dropdown-list' v-show='dropList.length > 0'>
          <li class = 'ivu-select-item' v-for='(item, index) in dropList' @click='select(index)'>
            {{ optionKey ? item[optionKey] : item }}
          </li>
        </ul>
        <p class = 'ivu-select-loading' v-show='dropList.length <= 0 && loading && loadingText !== ""'>{{ loadingText }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'SearchInput',
    data() {
      return {
        curValue: this.value,
        isfocus: false
      };
    },
    computed: {
      classes() {
        return [
          'ivu-select',
          'ivu-select-single',
          {
            'ivu-select-visible': this.isfocus,
            'ivu-select-disabled': this.disabled,
            ['ivu-select-' + this.size]: this.size
          }
        ];
      },
      isShowDropList() {
        let show = false;
        if(this.value.length > 0) {
          show = true;
        }
        return this.isfocus && show;
      }
    },
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      size: {
        validator(val) {
          return ['small', 'large', 'default'].includes(val);
        }
      },
      dropList: {
        type: Array,
        default: () => []
      },
      optionKey: {
        type: String,
        default: ''
      },
      loading: {
        type: Boolean,
        default: false
      },
      loadingText: {
        type: String,
        default: '加载中...'
      },
      /* placement: {
        validator(value) {
          return ['top', 'bottom'].includes(value);
        },
        default: 'bottom'
      }, */
      disabled: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      readonly: {
        type: Boolean,
        default: false
      },
      minlength: {
        type: Number,
        default: 0
      },
      maxlength: {
        type: Number,
        default: 30
      }
    },
    watch: {
      value(newVal) {
        this.curValue = newVal;
      },
      curValue(newCurValue) {
        this.$emit('input', newCurValue);
      }
    },
    methods: {
      // 输入事件
      input(evt) {
        const val = evt.target.value.trim();
        this.$emit('input', val);
        this.$emit('on-change', val);
      },
      // 聚焦事件
      focus() {
        this.isfocus = true;
        /* if(this.value.length >= this.minlength) {
          this.$emit('on-change', this.value);
        } */
        this.$emit('on-focus', this.value);
      },
      // 失去焦点事件
      blur() {
        setTimeout(() => {
          this.isfocus = false;
          this.$emit('on-blur', this.value);
        }, 300);
      },
      // 按下 enter 键时的事件
      enter() {
        this.isfocus = false;
        this.$emit('on-enter', this.curValue);
      },
      // 选中事件
      select(index) {
        const selected = this.dropList[index];
        if(this.optionKey) {
          this.$emit('input', selected[this.optionKey]);
          this.$emit('on-change', selected[this.optionKey]);
        }
        else {
          this.$emit('input', selected);
          this.$emit('on-change', selected);
        }
        this.$emit('on-select', selected);
      }
    }
  }
</script>

<style lang="less">
  .ivu-select-dropdown-list {
    width: 100%;
  }
</style>
