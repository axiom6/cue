
import i18n from './vuex-i18n.es.js'

// add translations directly to the application
import br from './br.js'
import en from './en.js'
import es from './es.js'

i18n.add('br', br )
i18n.add('en', en )
i18n.add('es', es )

// set the start locale to use
i18n.set('en')

// set fallback for non-translated strings
i18n.fallback('en')
