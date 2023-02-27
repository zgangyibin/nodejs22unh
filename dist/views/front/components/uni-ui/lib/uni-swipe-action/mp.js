'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      position: [],
      button: []
    };
  },

  computed: {
    pos: function pos() {
      return JSON.stringify(this.position);
    },
    btn: function btn() {
      return JSON.stringify(this.button);
    }
  },
  watch: {
    show: function show(newVal) {
      if (this.autoClose) return;
      var valueObj = this.position[0];
      if (!valueObj) return;
      valueObj.show = newVal;
      this.$set(this.position, 0, valueObj);
    }
  },
  // #ifdef H5
  mounted: function mounted() {
    this.init();
    this.getSize();
    this.getButtonSize();
  },

  // #endif
  // #ifndef H5
  onReady: function onReady() {
    this.init();
    this.getSize();
    this.getButtonSize();
  },

  // #endif
  methods: {
    init: function init() {
      var _this = this;

      uni.$on('__uni__swipe__event', function (res) {
        if (res !== _this && _this.autoClose) {
          var valueObj = _this.position[0];
          valueObj.show = false;
          _this.$set(_this.position, 0, valueObj);
        }
      });
    },
    openSwipe: function openSwipe() {
      uni.$emit('__uni__swipe__event', this);
    },
    change: function change(e) {
      this.$emit('change', e.open);
      var valueObj = this.position[0];
      valueObj.show = e.open;
      this.$set(this.position, 0, valueObj);
      // console.log('改变', e);
    },
    onClick: function onClick(index, item) {
      this.$emit('click', {
        content: item,
        index: index
      });
    },
    getSize: function getSize() {
      var _this2 = this;

      var views = uni.createSelectorQuery().in(this);
      views.selectAll('.selector-query-hock').boundingClientRect(function (data) {
        if (_this2.autoClose) {
          data[0].show = false;
        } else {
          data[0].show = _this2.show;
        }
        _this2.position = data;
      }).exec();
    },
    getButtonSize: function getButtonSize() {
      var _this3 = this;

      var views = uni.createSelectorQuery().in(this);
      views.selectAll('.button-hock').boundingClientRect(function (data) {
        _this3.button = data;
      }).exec();
    }
  }
};
//# sourceMappingURL=mp.js.map