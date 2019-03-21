
let Vjs = {
  template: `  
    <div>
      <img src="../img/vue/logo.png" alt="Vue logo">
      <h1>{{ greeting }}</h1>
      <ul>
        <li>
          To learn more about Vue, visit
          <a :href="docsURL" target="_blank">
            {{ humanizeURL(docsURL) }}
          </a>
        </li>
        <li>
          For live help with simple questions, check out
          <a :href="discordURL" target="_blank">
            the Discord chat
          </a>
        </li>
        <li>
          For more complex questions, post to
          <a :href="forumURL" target="_blank">
            the forum
          </a>
        </li>
      </ul>
    </div>`,
  data() { return {
    greeting:   'Welcome to your Vue.js app!',
    docsURL:    'http://vuejs.org/guide/',
    discordURL: 'https://chat.vuejs.org',
    forumURL:   'http://forum.vuejs.org/' }
  },
  methods: {
    humanizeURL: function (url) {
      return url
        .replace(/^https?:\/\//, '')
        .replace(/\/$/, ''); }
  }
};

export default Vjs;
