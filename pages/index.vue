<template>
    <Header v-if="templateData" :templateData="templateData"></Header>
    <Main v-if="templateData" :templateData="templateData"></Main>
    <Footer v-if="templateData" :templateData="templateData"></Footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const siteData = ref(null)
const templateData = ref(null)

const fetchData = async () => {
  try {
    const response = await fetch('https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data')
    siteData.value = await response.json()
    templateData.value =  siteData.value.data.siteData.testTaskTemplate_30_15673
    console.log(templateData.value)
  } catch (error) {
    console.error('Error fetching site data:', error)
  }
}

onMounted(() => {
  fetchData()
})
</script>
