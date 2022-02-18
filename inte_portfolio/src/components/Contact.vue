<template>
  <div class="contact">

  </div>
</template>

<script>
import param from "@/param/param";

export default {
  name: 'Contact',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: black;
}
  .container {
    display: flex;
    overflow: hidden;
    width: 100%;
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
  }

  .title_port {
    white-space: nowrap;
    font-size: 200px;
    animation: scrollTxt 25s linear infinite;
    border-top: solid 10px black;
    border-bottom: solid 10px black;
    /*padding-bottom: 15px;*/
    padding-top: 15px;
  }

  .title2 {
    margin-top: 20%;
  }

  .title2 .title_port {
    animation: scrollTxt 25s linear infinite reverse;

  }

  .title_comp {

    margin-top: 20%;
    white-space: nowrap;
    font-size: 200px;
    animation: scrollTxtReverse 25s linear infinite;
    border-top: solid 10px black;
    border-bottom: solid 10px black;
  }

  /*.tp1 {*/
  /*  color: red;*/
  /*}*/

  /*.tp2 {*/
  /*  color: blue;*/
  /*}*/

  @keyframes scrollTxt {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }

  @keyframes scrollTxtReverse {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(100%, 0);
    }
  }

  .outline {
    color: transparent;
    -webkit-text-stroke: 7px black;
  }
</style>
