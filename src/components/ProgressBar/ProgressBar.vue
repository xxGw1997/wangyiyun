<template>
  <div class="progress-bar" :ref="progressBarName">
    <div class="left-bar" :ref="leftBar"></div>
    <div
      class="btn-bar"
      :ref="btnBar"
      @touchstart.prevent="start"
      @touchmove.prevent="move"
      @touchend.prevent="end"
    />
  </div>
</template>

<script>
export default {
  props: {
    progressBarName: {
      type: String,
      default() {
        return "";
      }
    },
    percent: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {
      leftBar: "left" + this.progressBarName,
      btnBar: "btn" + this.progressBarName,
      progressBarWidth: 0,
      rectX: 0,
      rectMaxX: 9999,
      isOperation: false
    };
  },
  watch: {
    percent(newVal) {
      if (this.isOperation) return;
      const progressBarWidth = this.$refs[
        this.progressBarName
      ].getBoundingClientRect().width;
      const leftBarWidth = newVal * progressBarWidth;
      this.$refs[this.leftBar].style.width = leftBarWidth + "px";
    }
  },
  methods: {
    start(e) {
      this.rectX = this.$refs[this.progressBarName].getBoundingClientRect().x;
      this.rectMaxX =
        this.rectX +
        this.$refs[this.progressBarName].getBoundingClientRect().width;
      this.isOperation = true;
    },
    move(e) {
      const pageX = e.touches[0].pageX;
      const leftWidth = pageX - this.rectX;
      this.$refs[this.leftBar].style.width = leftWidth + "px";
    },
    end(e) {
      this.isOperation = false;
      this.updateProgress();
    },
    updateProgress() {
      const leftBarWidth = this.$refs[this.leftBar].getBoundingClientRect()
        .width;
      const progressBarWidth = this.$refs[
        this.progressBarName
      ].getBoundingClientRect().width;
      const percent = leftBarWidth / progressBarWidth;
      this.$emit(this.progressBarName + "_updateProgress", percent);
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin-left: 20px;
  width: 200px;
}

.progress-bar {
  width: 100%;
  height: 2px;
  background: aliceblue;
  display: flex;
  align-items: center;
}

.progress-bar .left-bar {
  width: 50%;
  height: 100%;
  background: rosybrown;
}

.progress-bar .btn-bar {
  width: 8px;
  height: 8px;
  /* flex-basis: 8px; */
  flex-shrink: 0;
  background: white;
  border-radius: 50%;
  position: relative;
}
</style>
