import comp from "C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/aboutUs.html.vue"
const data = JSON.parse("{\"path\":\"/aboutUs.html\",\"title\":\"我们\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"我们\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"aboutUs.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}