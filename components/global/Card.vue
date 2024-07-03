<script setup lang="ts">
  interface Props {
    image: string
    name: string
  }
  const props = defineProps<Props>()
  console.log(props.name)
</script>


<template>
  <div>
    <NuxtImg
      :src="image"
      class="rounded-lg h-[29rem]"
    />
    <span class="block text-base font-medium truncate mt-2">{{ name }}</span>
  </div>
</template>