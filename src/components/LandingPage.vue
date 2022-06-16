<template>
  <header class="header-background">
    <div class="header-section">
      <div class="header-headline"><h1 class="mat-h1">Metalscraps Bot</h1>
        <h2 class="mat-h2"></h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "LandingPage",
  props: {
    msg: String,
  },
};
</script>

<style>
.header-background {
  background: #3f51b5;
  overflow: hidden;
  position: relative;
  height: 420px;
}
.header-section {
  width: 90%;
  position: absolute;
  z-index: 0;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.header-headline {
  color: #fff;
}
.header-headline h1 {
  font-size: 56px;
  font-weight: bold;
  line-height: 56px;
  margin: 15px 5px;
}
.header-headline h2 {
  font-size: 20px;
  font-weight: 300;
  line-height: 28px;
  margin: 15px 0 25px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>