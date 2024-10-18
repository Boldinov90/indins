<template>
   <div class="post-item">
      <div class="post-item__description">
         <div class="description-date">{{ formatDate(post.date) }}</div> /
         <div class="description-author-name">{{ post.authorName }}</div> /
         <div class="description-author-url">{{ post.authorUrl }}</div>
      </div>
      <div class="post-item__content-wrapper">
         <div class="post-item__content" v-html="coloredContent" v-once></div>
      </div>
      <div class="post-item__line"></div>
   </div>
</template>

<script>
export default {
   props: {
      post: Object,
   },
   computed: {
      coloredContent() {
         return this.colorText(this.post.content, this.post.contentPostTones)
      }
   },
   methods: {
      colorText(content, contentPostTones) {
         let result = []
         let start = 0
         for (let item of contentPostTones) {
            if (start < item.position) {
               result.push(content.slice(start, item.position))
            }
            let textStyle = `<span style="background-color: rgba(${this.getBackgroundColor(item.tone)}, 0.6)">${this.post.content.slice(item.position, item.position + item.length)}</span>`
            result.push(textStyle)
            start = item.position + item.length
         }
         if (start < content.length) {
            result.push(content.slice(start))
         }
         return result.join('')
      },
      getBackgroundColor(tone) {
         if (tone < 0) {
            return this.getRedToYellow(tone)
         } else if (tone > 0) {
            return this.getYellowToGreen(tone)
         } else {
            return '255, 255, 0'
         }
      },

      getRedToYellow(tone) {
         const r = 255
         const g = Math.floor(255 * (1 + tone))
         return `${r}, ${g}, 0`
      },

      getYellowToGreen(tone) {
         const r = Math.floor(255 * (1 - tone))
         const g = 255
         return `${r}, ${g}, 0`
      },
      formatDate(isoDate) {
         const date = new Date(isoDate);
         const months = [
            "января", "февраля", "марта", "апреля", "мая",
            "июня", "июля", "августа", "сентября", "октября",
            "ноября", "декабря"
         ]
         const hours = String(date.getUTCHours()).padStart(2, '0'); // Часы
         const minutes = String(date.getUTCMinutes()).padStart(2, '0'); // Минуты
         const day = date.getUTCDate(); // День месяца
         const month = months[date.getUTCMonth()]; // Месяц (0-11)
         const year = date.getUTCFullYear(); // Год

         return `${hours}:${minutes} ${day} ${month} ${year} г.`;
      }
   }
}
</script>

<style lang="scss" scoped>
.post-item{
   .post-item__description{
      font-size: 14px;
      display: flex;
      align-items: center;
      margin-bottom: 6px;
      .description-date{
         font-size: 14px;
         margin-right: 7px;
         font-size: 13px;
         color: rgb(91, 91, 91);
      }
      .description-author-name{
         font-size: 14px;
         margin-right: 7px;
         margin-left: 7px;
         font-weight: bold;
         color: rgb(88, 52, 34);
      }
      .description-author-url{
         margin-right: 7px;
         margin-left: 7px;
         font-size: 13px;
         color: rgb(91, 91, 91);
      }
   }
   .post-item__content {
      font-size: 13px;
      line-height: 1.7;
      margin: 3px;
   }
   .post-item__line{
      width: 100%;
      height: 1px;
      background-color: rgb(221, 221, 221);
      margin-bottom: 14px;
      margin-top: 14px;
   }
}
</style>