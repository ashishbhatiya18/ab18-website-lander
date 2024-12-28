import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Ashish Bhatiya",
  description: "Ashish Bhatiya's Portfolio website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        items: [
          {text: 'Projects', link: '/projects'},
          {text: 'Contact', link: '/contact'},
          // {text: 'Blog', link: '/blog'},
        ],
        // items: [
        //   { text: 'Markdown Examples', link: '/markdown-examples' },
        //   { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ashishbhatiya18' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/ashishbhatiya18'}
    ],

    footer: {
      message: 'Built in ❤️ with <a href="https://vitepress.dev/">VitePress</a>'
    }
    
  }
})
