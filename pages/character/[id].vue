<script setup lang="ts">
  const route = useRoute()
  console.log('route ===> ', route.params?.id)


  
  const useCha = useCharacters()
  useCha.details(route.params?.id as string)
</script>

<template>
  yo yo
  {{ route.params?.id }}
</template>