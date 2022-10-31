<template>
  <div class="layout">
    <navbar />
    <app-main />
    <bottom />
  </div>
</template>

<script>
import { AppMain, Navbar, Bottom } from './component'
import { useAppStore } from '@/store/app'
import { _isMobile, _isRWD, _isIpad } from '@/lib/Checker'
import { onMounted, onBeforeMount, onBeforeUnmount } from 'vue'
export default {
  name: 'LayOut',
  components: {
    AppMain,
    Navbar,
    Bottom
  },
  setup () {
    const appStore = useAppStore()
    function resizeHandler () {
      if (!document.hidden) {
        const isMobile = (_isRWD() || _isMobile())
        const isIpad = _isIpad()
        appStore.TOGGLE_DEVICE(isMobile ? isIpad ? 'ipad' : 'mobile' : 'web')
        // if (isMobile) return
        // resize()
      }
    }
    onMounted(() => {
      resizeHandler()
    })

    onBeforeMount(() => {
      window.addEventListener('resize', resizeHandler)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize', resizeHandler)
    })
    return { resizeHandler }
  }
}
</script>

<style lang="scss" scoped>
</style>
