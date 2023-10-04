<template>
   <main class="main">
      <div class="main__header" id="section1">
         <div class="main__header-block">
            <h2 class="main__header-block-title">{{ templateData.testTaskHeaderTitle }}</h2>
            <p class="main__header-block-description">{{ templateData.testTaskHeaderSubtitle }}</p>
            <p class="main__header-block-text"> {{ fixHeaderText }} </p>
            <button class="main__header-block-button">Read More</button>
         </div>
         <div class="main__header-img"><img :src="templateData.testTaskHeaderImage" alt=""></div>
      </div>
      <div class="main__section" id="section2">
         <h2 class="main__section-title">{{ templateData.testTaskSecondBlockTitle }}</h2>
         <div class="main__section-holder">
            <nav class="main__section-nav">
               <p>{{ templateData.testTaskSecondBlockSideNavigationTitle }}</p>
               <ul class="main__section-nav-list">
                  <li class="main__section-nav-item"><a @click.prevent="scrollTo('#item1')">item 1</a></li>
                  <li class="main__section-nav-item"><a @click.prevent="scrollTo('#item2')">item 2</a></li>
                  <li class="main__section-nav-item"><a @click.prevent="scrollTo('#item3')">item 3</a></li>
               </ul>
            </nav>
            <div class="main__section-block">
               <div class="main__section-block-item" id="item1">
                  <div class="main__section-block-img">
                     <img :src="itemsArray[0].image" :alt="itemsArray[0].imageAltAtr">
                  </div>
                  <div class="main__section-block-content">
                     <h3 class="main__section-block-title">{{ itemsArray[0].title }}</h3>
                     <p class="main__section-block-decription">{{ itemsArray[0].subtitle }}</p>
                     <p class="main__section-block-text">{{ cleanTextArray[0].text }}</p>
                     <a :href="itemsArray[0].buttonLink" class="main__section-block-button"><button>{{ itemsArray[0].buttonText }}</button></a>
                  </div>
               </div>
               <div class="main__section-block-item" id="item2">
                  <div class="main__section-block-img">
                     <img :src="itemsArray[1].image" :alt="itemsArray[1].imageAltAtr">
                  </div>
                  <div class="main__section-block-content">
                     <h3 class="main__section-block-title">{{ itemsArray[1].title }}</h3>
                     <p class="main__section-block-decription">{{ itemsArray[1].subtitle }}</p>
                     <p class="main__section-block-text">{{ cleanTextArray[1].text }}</p>
                     <a :href="itemsArray[1].buttonLink" class="main__section-block-button"><button>{{ itemsArray[1].buttonText }}</button></a>
                  </div>
               </div>
               <div class="main__section-block-item" id="item3">
                  <div class="main__section-block-img">
                     <img :src="itemsArray[2].image" :alt="itemsArray[2].imageAltAtr">
                  </div>
                  <div class="main__section-block-content">
                     <h3 class="main__section-block-title">{{ itemsArray[2].title }}</h3>
                     <p class="main__section-block-decription">{{ itemsArray[2].subtitle }}</p>
                     <p class="main__section-block-text">{{ cleanTextArray[2].text }}</p>
                     <a :href="itemsArray[2].buttonLink" class="main__section-block-button"><button>{{ itemsArray[2].buttonText }}</button></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="main__slides" id="section3">
         <h2 class="main__slides-title">{{ templateData.testTaskSlidesBlockTitle }}</h2>
         <Swiper  :height="300"
                  :slides-per-view="1"
                  :loop="true"
                  :effect="'creative'"
                  :modules="[SwiperNavigation, SwiperPagination]"
                  :navigation="true"
                  :pagination="{
                     clickable: true,
                  }"
                  >
            >
               <SwiperSlide>
                  <div class="main__slides-item">
                     <div class="main__slides-content">
                        <h3 class="main__slides-content-title">{{ slidesArray[0].title }}</h3>
                        <p class="main__slides-content-description">{{ slidesArray[0].subtitle }} </p>
                        <p class="main__slides-content-text">{{ cleanDescriptionArray[0].description }}</p>
                        <a :href="slidesArray[0].buttonLink" class="main__section-block-button"><button>{{ slidesArray[0].buttonText }}</button></a>
                     </div>
                     <div class="main__slides-img">
                        <img :src="slidesArray[0].image" :alt="slidesArray[0].imageAltAtr">
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div class="main__slides-item">
                     <div class="main__slides-content">
                        <h3 class="main__slides-content-title">{{ slidesArray[1].title }}</h3>
                        <p class="main__slides-content-description">{{ slidesArray[1].subtitle }}</p>
                        <p class="main__slides-content-text">{{ cleanDescriptionArray[1].description }}</p>
                        <a :href="slidesArray[1].buttonLink" class="main__section-block-button"><button>{{ slidesArray[1].buttonText }}</button></a>
                     </div>
                     <div class="main__slides-img">
                        <img :src="slidesArray[1].image" :alt="slidesArray[1].imageAltAtr">
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div class="main__slides-item">
                     <div class="main__slides-content">
                        <h3 class="main__slides-content-title">{{ slidesArray[2].title }}</h3>
                        <p class="main__slides-content-description">{{ slidesArray[2].subtitle }}</p>
                        <p class="main__slides-content-text">{{ cleanDescriptionArray[2].description }}</p>
                        <a :href="slidesArray[2].buttonLink" class="main__section-block-button"><button>{{ slidesArray[2].buttonText }}</button></a>
                     </div>
                     <div class="main__slides-img">
                        <img :src="slidesArray[2].image" :alt="slidesArray[2].imageAltAtr">
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div class="main__slides-item">
                     <div class="main__slides-content">
                        <h3 class="main__slides-content-title">{{ slidesArray[3].title }}</h3>
                        <p class="main__slides-content-description">{{ slidesArray[3].subtitle }}</p>
                        <p class="main__slides-content-text">{{ cleanDescriptionArray[3].description }}</p>
                        <a :href="slidesArray[3].buttonLink" class="main__section-block-button"><button>{{ slidesArray[3].buttonText }}</button></a>
                     </div>
                     <div class="main__slides-img">
                        <img :src="slidesArray[3].image" :alt="slidesArray[3].imageAltAtr">
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div class="main__slides-item">
                     <div class="main__slides-content">
                        <h3 class="main__slides-content-title">{{ slidesArray[4].title }}</h3>
                        <p class="main__slides-content-description">{{ slidesArray[4].subtitle }}</p>
                        <p class="main__slides-content-text">{{ cleanDescriptionArray[4].description }}</p>
                        <a :href="slidesArray[4].buttonLink" class="main__section-block-button"><button>{{ slidesArray[4].buttonText }}</button></a>
                     </div>
                     <div class="main__slides-img">
                        <img :src="slidesArray[4].image" :alt="slidesArray[4].imageAltAtr">
                     </div>
                  </div>
               </SwiperSlide>
         </Swiper>
      </div>
   </main>
</template>

<script setup>
import { defineProps } from 'vue'

const { templateData } = defineProps(['templateData'])
const  itemsArray  = JSON.parse(templateData.testTaskSecondDescriptiveBlockItems)
const slidesArray = JSON.parse(templateData.testTaskSlidesBlockSlides)
function removeHtmlTags(input) {
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}
const fixHeaderText = removeHtmlTags(templateData.testTaskHeaderText);

const cleanTextArray = itemsArray.map(item => {
  return {
    ...item,
    text: removeHtmlTags(item.text)
  };
});
const cleanDescriptionArray = slidesArray.map(item => {
  return {
    ...item,
    description: removeHtmlTags(item.description)
  };
});
</script>

<script>
import "../assets/css/main.css"
export default {
   data() {
    return {
      slides: [/* ваш массив слайдов здесь */],
      activeSlide: 0
    }
  },
   methods: {
      scrollTo(target) {
      const element = document.querySelector(target);
      if (element) {
        const offset = element.offsetTop - 50;
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
          duration: 700 // Прокручиваем за 700 миллисекунд
        });
      }
    },
}
}
</script>

<style >
.swiper-button-next {
   color: black;
   
}

.swiper-button-prev {
   color: black;
}

.swiper-pagination-bullet-active {
   background-color: red; 
}

.swiper-pagination{
   position: static;
   margin-top: 50px;
}

.swiper-pagination-bullet {
   width: 12px;
   height: 12px; 
}

</style>








