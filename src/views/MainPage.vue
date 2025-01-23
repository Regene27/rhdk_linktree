<template>
  <body>
    <div class="main-card">
      <div class="title-card">
        <img src="../assets/rhdk_logo.jpg" alt="" class="logo">
        <p>មន្ទីរពេទ្យបង្អែក ដង្កោ</p>
      </div>

      <div class="video-card">
        <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbayontvdailynews%2Fvideos%2F1288936715565612%2F&show_text=false&t=0&autoplay=1" width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" ></iframe>
      </div>

      <a href="https://rhdk-linktree.onrender.com/" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/website.png" alt="" class="icon">
        <p>គេហទំព័រនៃមន្ទីរពេទ្យ / Website</p>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100082954795594" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/facebook.png" alt="" class="icon">
        <p>ហ្វេកបុកផេក / Facebook Page</p>
      </a>
      <a href="https://rhdk-linktree.onrender.com/" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/youtube.png" alt="" class="icon">
        <p>យូធូបឆាណែល / Youtube</p>
      </a>
      <a href="https://rhdk-linktree.onrender.com/" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/tiktok.png" alt="" class="icon">
        <p>បណ្តាញសង្គមតីកតុក / TikTok</p>
      </a>
      <a href="https://www.facebook.com/messages/t/112353538169011" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/messenger.png" alt="" class="icon">
        <p>ឆាតសួរពត៌មានបន្ថែម / Messenger</p>
      </a>
      <a href="https://t.me/+85517751690" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/telegram.png" alt="" class="icon">
        <p>ឆាណែលតេលេក្រាម / Telegram</p>
      </a>
      <a href="https://maps.app.goo.gl/jJwBKzKovsEZVv2KA" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/location.png" alt="" class="icon">
        <p>ទីតាំងនៃមន្ទីរពេទ្យ / RH_Location</p>
      </a>
      <a v-if="isMobile" href="/pdf" download="" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/riels.png" alt="" class="icon">
        <p>កញ្ចប់តម្លៃសេវាពិនិត្យសុខភាពទូទៅ</p>
      </a>
      <a v-else href="/pdf" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/riels.png" alt="" class="icon">
        <p>កញ្ចប់តម្លៃសេវាពិនិត្យសុខភាពទូទៅ</p>
      </a>
      <a href="https://rhdk-linktree.onrender.com/" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/rielss.png" alt="" class="icon">
        <p>កញ្ចប់ពិនិត្យសុខភាពទៅតាមវ័យ</p>
      </a>
      <a href="https://rhdk-linktree.onrender.com/" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/riel.png" alt="" class="icon">
        <p>តម្លៃសេវាមន្ទីរពេទ្យ / Hospital Price List</p>
      </a>
      <a href="https://rhdk-linktree.onrender.com/" class="link-card">
        <img src="https://rhsdsm.netlify.app/logos/feedback.png" alt="" class="icon">
        <p>ផ្តល់ពត័មានត្រឡប់ / Feedback</p>
      </a>
    </div>
  </body>
</template>


<style>
body {
  font-family: "Kantumruy", sans-serif;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0;
}

.title-card {
  margin-top: 1.5rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  background-color: #ffffff;
  text-align: center;
  color: #0033ff;
  height: 6rem;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.5rem;
}

.video-card {
  margin: 0.5rem;
  margin-top: 2rem;
  background-color: #ffffff;
  height: 13rem;
  border: 3px solid #0033ff;
}

.link-card {
  background-color: #f0f0f0d2;
  height: 5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  margin: 1rem;
  padding-left: 2rem;
}

.link-card p {
  margin-left: -1rem;
  flex: 1;
}

.main-card {
  margin: 1rem;
  background-color: rgb(111, 0, 180);
  width: 100vw; /* Full width of the viewport */
  height: 100%; /* Full height of the viewport */
  border: 1px solid rgb(179, 57, 255);
  border-radius: 1rem;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

.icon {
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}

.logo {
  width: 5rem;
  height: 5rem;
  margin-right: 2vw;
  margin-left: -1vw;
}

.link-card:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}
</style>


<script>
export default {
  mounted() {
    this.adjustLayout();
    window.addEventListener('resize', this.adjustLayout);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.adjustLayout);
  },
  data() {
    return {
      isMobile: window.innerWidth <= 768
    };
  },
  methods: {
    adjustLayout() {
      const isMobile = window.innerWidth <= 768;
      const mainCard = document.querySelector('.main-card');
      if (isMobile) {
        mainCard.style.width = '100vw';
        mainCard.style.height = '100%';
      } else {
        mainCard.style.width = '20vw';
        mainCard.style.height = 'auto';
      }
    },
  },
  name: 'MainPage'
};
</script>