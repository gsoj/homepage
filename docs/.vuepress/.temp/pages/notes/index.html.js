import comp from "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/notes/index.html.vue"
const data = JSON.parse("{\"path\":\"/notes/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"head\":[[\"script\",{\"id\":\"check-dark-mode\"},\";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();\"],[\"script\",{\"id\":\"check-mac-os\"},\"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"notes/index.md\",\"categoryList\":[{\"id\":\"4358b5\",\"sort\":10004,\"name\":\"notes\"}],\"git\":{\"createdTime\":1725007063000,\"updatedTime\":1725007063000,\"contributors\":[{\"name\":\"Mai\",\"email\":\"2512834769@qq.com\",\"commits\":1}]}}")
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
