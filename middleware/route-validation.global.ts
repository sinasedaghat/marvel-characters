export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from middlewear', to.path.toLowerCase().trim() === '/character')
  // if(to.path.toLowerCase().trim() === '/character') navigateTo('/')
    // navigateTo({ name: 'index' })
})