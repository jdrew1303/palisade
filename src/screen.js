import map from 'lodash.map'
import lens from './lens'

const screen = (rules, type, user, data) => {
  if (Array.isArray(data)) {
    if (!rules[type]) return []
    return map(data, screen.bind(null, rules, type, user))
  }
  if (data && typeof data === 'object') {
    if (!rules[type]) return {}
    return lens(rules[type], user, data)
  }
}

export default screen
