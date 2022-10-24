import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebar: true,
    device: 'web'
  }),
  getters: {
    getSidebar: state => state.sidebar,
    getDevice: state => state.device
  },
  actions: {
    TOGGLE_SIDEBAR () {
      this.sidebar = !this.sidebar
    },
    TOGGLE_DEVICE (device) {
      this.device = device
    }
  }
})
