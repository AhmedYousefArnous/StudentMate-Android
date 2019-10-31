<template>
  <div class="options-overlay">
    <transition
      appear
      enter-class=""
      enter-active-class="animated fadeIn"
      leave-class=""
      leave-to-class="animated fadeOut"
      
      >
  
      <ul class="list-group">

        <slot></slot>
      </ul>
    </transition>

  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
    
</style>
