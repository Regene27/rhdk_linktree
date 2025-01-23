<template>
    <div class="pdf-viewer">
      <iframe
        v-if="pdfUrl"
        :src="pdfUrl"
        width="100%"
        height="100%"
        frameborder="0"></iframe>
      <p v-else>Loading PDF...</p>
    </div>
</template>
  
<script>
    export default {
    data() {
        return {
        pdfUrl: require('@/assets/price_list.pdf') // Adjust the path to your PDF file
        };
    }
    };
</script>

<style scoped>

.pdf-viewer {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
}
</style>