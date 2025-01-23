<template>
  <div class="body">
    Hello, world!
    <div id="pdf-viewer" style="width: 100%; height: 100vh;">
      <embed :src="pdfUrl" type="application/pdf" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
import pdfFile from '@/assets/price_list.pdf';

export default {
  name: 'PriceList',
  data() {
    return {
      pdfUrl: pdfFile, // Dynamically resolve the hashed URL
    };
  },
  mounted() {
    // Optional: Use PDFObject to embed if needed
    const success = PDFObject.embed(this.pdfUrl, "#pdf-viewer");
    if (!success) {
      this.downloadPDF();
    }
  },
  methods: {
    downloadPDF() {
      const link = document.createElement('a');
      link.href = this.pdfUrl;
      link.setAttribute('download', 'price_list.pdf');
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
</script>

<style>
.body {
  width: 100vw;
  height: 100%;
  background-color: aliceblue;
}
</style>