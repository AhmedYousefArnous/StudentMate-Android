<template>
  <div id="app">
     <router-view/>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
    @import "./assets/scss/Abstractions/variables";
    * {
      box-sizing: border-box;
    }
    h1,h2,h3,h4 {
      font-family: Gabriola;
    }
    img.avatar {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 1px solid #EEE;
        padding: 3px;
        box-shadow: 3px 3px 15px 0px #000;   
      &.avatar-conversation {
            width: 75px;
            height: 75px;
            box-shadow: 3px 3px 12px -3px #000;
      }
      &.avatar-header{
        width: 35px;
        height: 35px;
        padding: 1px;        
      }
      &.avatar-msg {
            width: 50px;
            height: 50px;
            box-shadow: 3px 3px 12px -3px #000;
            position: relative;
            left: 10px;
            top: 15px;
      }
    }

    .content-container {
          margin-top: 80px;
          width: 100%;
    }
    .notification-badge {
        position: absolute;
        top: 0;
        left: 0;
        color: #FFF;
        background-color: #d100d8;
        padding: 15px;
        .number {
            position: absolute;
            top: 3px;
            right:  5px;
            font-size: 15px;
            border-radius: 50%;
            background-color: #87008c;
            padding: 1px 5px;
        }
    } 
    
</style>
