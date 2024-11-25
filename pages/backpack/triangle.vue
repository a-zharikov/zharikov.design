<template>
  <div>
    <PageTitle>Рюкзак</PageTitle>
    <div class="page backpack backpack-page">
      <div class="triangle">
        <div class="triangle__setting">
          <div class="triangle__setting-directions">
            <label>
              <input
                type="radio"
                name="direction"
                value="top-right"
                v-model="direction"
              />
            </label>
            <label>
              <input
                type="radio"
                name="direction"
                value="top"
                v-model="direction"
              />
            </label>
            <label>
              <input
                type="radio"
                name="direction"
                value="top-left"
                v-model="direction"
              />
            </label>
            <label>
              <input
                type="radio"
                name="direction"
                value="left"
                v-model="direction"
              />
            </label>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M323-160q-11 0-20.5-5.5T288-181l-78-139h58l40 80h92v-40h-68l-40-80H188l-57-100q-2-5-3.5-10t-1.5-10q0-4 5-20l57-100h104l40-80h68v-40h-92l-40 80h-58l78-139q5-10 14.5-15.5T323-800h97q17 0 28.5 11.5T460-760v160h-60l-40 40h100v120h-88l-40-80h-92l-40 40h108l40 80h112v200q0 17-11.5 28.5T420-160h-97Zm217 0q-17 0-28.5-11.5T500-200v-200h112l40-80h108l-40-40h-92l-40 80h-88v-120h100l-40-40h-60v-160q0-17 11.5-28.5T540-800h97q11 0 20.5 5.5T672-779l78 139h-58l-40-80h-92v40h68l40 80h104l57 100q2 5 3.5 10t1.5 10q0 4-5 20l-57 100H668l-40 80h-68v40h92l40-80h58l-78 139q-5 10-14.5 15.5T637-160h-97Z"/></svg>
            </div>
            <label>
              <input
                type="radio"
                name="direction"
                value="right"
                v-model="direction"
              />
            </label>
            <label>
              <input
                type="radio"
                name="direction"
                value="bottom-right"
                v-model="direction"
              />
            </label>
            <label>
              <input
                type="radio"
                name="direction"
                value="bottom"
                v-model="direction"
              />
            </label>
            <label>
              <input
                type="radio"
                name="direction"
                value="bottom-left"
                v-model="direction"
              />
            </label>
          </div>
          <div class="triangle__setting-size">
            <div class="triangle__setting-item">
              <label for="width">Width:</label>
              <input type="number" id="width" v-model.number="width">
            </div>
            <div class="triangle__setting-item">
              <label for="height">Height:</label>
              <input type="number" id="height" v-model.number="height">
            </div>
          </div>
        </div>
        <div class="triangle__demo">
          <div class="triangle__demo-preview">
            <div id="triangle" :style="triangleStyle"></div>
          </div>
          <div class="triangle__demo-code">
            <div class="triangle__demo-textarea">
              <span class="message">{{ copyMessage }}</span>
              <textarea :value="cssCode" readonly></textarea>
            </div>
            <button @click="copyCode">Копировать</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'CSS — треугольник // Рюкзак // Zharikov.design'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Генератор CSS — треугольника'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'треугольник, github, html, slim, haml, css, sass, less, javascritp, jquery, vue, nuxt, react,'
          }
        ]
      }
    },

    async asyncData({ $content, params }) {
      const articles = await $content('blog', params.slug)
        .only(['title', 'description', 'img', 'tag', 'slug', 'createdAt'])
        .sortBy('createdAt', 'desc')
        .fetch();

      return {
        articles
      }
    }
  }
</script>

<script>
export default {
  data() {
    return {
      width: 80,
      height: 80,
      direction: "top",
      defaultColor: "#40b4ea",
      copyMessage: "",
      cssCode: "",
    };
  },
  computed: {
    triangleStyle() {
      const { width, height, direction, defaultColor } = this;
      let style = {
        width: "0",
        height: "0",
        borderStyle: "solid",
      };

      switch (direction) {
        case "top":
          style.borderWidth = `0 ${width}px ${height}px ${width}px`;
          style.borderColor = `transparent transparent ${defaultColor} transparent`;
          break;
        case "right":
          style.borderWidth = `${height}px 0 ${height}px ${width}px`;
          style.borderColor = `transparent transparent transparent ${defaultColor}`;
          break;
        case "bottom":
          style.borderWidth = `${height}px ${width}px 0 ${width}px`;
          style.borderColor = `${defaultColor} transparent transparent transparent`;
          break;
        case "left":
          style.borderWidth = `${height}px ${width}px ${height}px 0`;
          style.borderColor = `transparent ${defaultColor} transparent transparent`;
          break;
        case "top-left":
          style.borderWidth = `${height}px 0 0 ${width}px`;
          style.borderColor = `${defaultColor} transparent transparent transparent`;
          break;
        case "top-right":
          style.borderWidth = `${height}px ${width}px 0 0`;
          style.borderColor = `${defaultColor} transparent transparent transparent`;
          break;
        case "bottom-left":
          style.borderWidth = `0 0 ${height}px ${width}px`;
          style.borderColor = `transparent transparent ${defaultColor} transparent`;
          break;
        case "bottom-right":
          style.borderWidth = `${width}px 0 0 ${height}px`;
          style.borderColor = `transparent transparent transparent ${defaultColor}`;
          break;
      }

      return style;
    },
  },
  watch: {
    width: "generateCssCode",
    height: "generateCssCode",
    direction: "generateCssCode",
  },
  methods: {
    generateCssCode() {
      const { width, height, direction, defaultColor } = this;
      let cssText = `width: 0;\nheight: 0;\nborder-style: solid;\n`;

      switch (direction) {
        case "top":
          cssText += `border-width: 0 ${width}px ${height}px ${width}px;\nborder-color: transparent transparent ${defaultColor} transparent;`;
          break;
        case "right":
          cssText += `border-width: ${height}px 0 ${height}px ${width}px;\nborder-color: transparent transparent transparent ${defaultColor};`;
          break;
        case "bottom":
          cssText += `border-width: ${height}px ${width}px 0 ${width}px;\nborder-color: ${defaultColor} transparent transparent transparent;`;
          break;
        case "left":
          cssText += `border-width: ${height}px ${width}px ${height}px 0;\nborder-color: transparent ${defaultColor} transparent transparent;`;
          break;
        case "top-left":
          cssText += `border-width: ${height}px 0 0 ${width}px;\nborder-color: ${defaultColor} transparent transparent transparent;`;
          break;
        case "top-right":
          cssText += `border-width: ${height}px ${width}px 0 0;\nborder-color: ${defaultColor} transparent transparent transparent;`;
          break;
        case "bottom-left":
          cssText += `border-width: 0 0 ${height}px ${width}px;\nborder-color: transparent transparent ${defaultColor} transparent;`;
          break;
        case "bottom-right":
          cssText += `border-width: 0 ${width}px ${height}px 0;\nborder-color: transparent ${defaultColor} transparent transparent;`;
          break;
      }

      this.cssCode = cssText;
    },
    copyCode() {
      navigator.clipboard.writeText(this.cssCode).then(() => {
        this.copyMessage = "Скопировано"; // Устанавливаем текст сообщения
        const messageElement = document.querySelector(".message");
        
        if (messageElement) {
          messageElement.classList.add("__active"); // Добавляем класс __active
          
          setTimeout(() => {
            this.copyMessage = ""; // Очищаем текст сообщения
            messageElement.classList.remove("__active"); // Удаляем класс __active
          }, 2000);
        }
      });
    }
  },
  mounted() {
    this.generateCssCode();
  },
};
</script>