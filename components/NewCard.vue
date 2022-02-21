

<template>
  <div class="card" >
      <a :href="article.link" target="_blank">

        <div class="imageContainer">
          <img v-if="article.media" :src="article.media" />
          <img v-else src="@/static/images/no-image.jpg" />

        </div>

        <div class="p-2 textContainer" >
            <h6 class="m-0" style="font-weight: bold;">{{ article.title.length > 40 ? article.title.slice(0,39) + '...' : article.title }}</h6>
            <span v-if="article.author">Autor: {{ article.author }}</span>
            <p class="mt-2">{{ article.summary.length > 170 ? article.summary.slice(0,169) + '...' : article.summary }}</p>
        </div>
      </a>
  </div>
</template>

<script>
export default {
    props: {
      article: {
        type: Object,
        required: true
      }
    },
}
</script>

<style scoped>

.card {
    border-radius: 20px !important;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 0;
    height: 550px;
    max-height: 550px;
}

.card:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  top: -6px;
  cursor: pointer;
}

a:hover {
  color: black;
}


.imageContainer {
  border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 100%;
    height: 11rem !important;
}

img {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 100%;
}


.textContainer {
    text-align: justify;
}

span {
  color: #135da3 !important;
  font-weight: bold !important;
  font-size: 12px !important;
}

</style>