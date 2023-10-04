<template>
   <header>
      <nav class="header__nav">
         <h2 class="header__nav-logo"><a href="/">LOGO</a></h2>
         <ul class="header__nav-list">
            <li class="header__nav-item"><a @click.prevent="scrollTo('#section1')">Nav 1</a></li>
            <li class="header__nav-item"><a @click.prevent="scrollTo('#section2')">Nav 2</a></li>
            <li class="header__nav-item"><a @click.prevent="scrollTo('#section3')">Nav 3</a></li>
         </ul>
      </nav>
   </header>
</template>


<script>
   import "../assets/css/header.css"
   export default {
   methods: {
      scrollTo(target) {
      const element = document.querySelector(target);
      if (element) {
        const offset = element.offsetTop - 30;
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