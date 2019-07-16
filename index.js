const wrapContainer = (el, attrs, content) => !attrs.includes('<script') ? `<${el}${attrs ? ` ${attrs}` : ''}>${content}</${el}>` : ''

export const a = (attrs, content) => wrapContainer('a', attrs, content)
export const abbr = (attrs, content) => wrapContainer('abbr', attrs, content)
export const address = (attrs, content) => wrapContainer('address', attrs, content)
export const area = (attrs, content) => wrapContainer('area', attrs, content)
export const article = (attrs, content) => wrapContainer('article', attrs, content)
export const aside = (attrs, content) => wrapContainer('aside', attrs, content)
export const audio = (attrs, content) => wrapContainer('audio', attrs, content)
export const b = (attrs, content) => wrapContainer('b', attrs, content)
export const base = (attrs, content) => wrapContainer('base', attrs, content)
export const bdi = (attrs, content) => wrapContainer('bdi', attrs, content)
export const bdo = (attrs, content) => wrapContainer('bdo', attrs, content)
export const blockquote = (attrs, content) => wrapContainer('blockquote', attrs, content)
export const body = (attrs, content) => wrapContainer('body', attrs, content)
export const br = (attrs, content) => wrapContainer('br', attrs, content)
export const button = (attrs, content) => wrapContainer('button', attrs, content)
export const canvas = (attrs, content) => wrapContainer('canvas', attrs, content)
export const caption = (attrs, content) => wrapContainer('caption', attrs, content)
export const cite = (attrs, content) => wrapContainer('cite', attrs, content)
export const code = (attrs, content) => wrapContainer('code', attrs, content)
export const col = (attrs, content) => wrapContainer('col', attrs, content)
export const colgroup = (attrs, content) => wrapContainer('colgroup', attrs, content)
export const data = (attrs, content) => wrapContainer('data', attrs, content)
export const datalist = (attrs, content) => wrapContainer('datalist', attrs, content)
export const dd = (attrs, content) => wrapContainer('dd', attrs, content)
export const del = (attrs, content) => wrapContainer('del', attrs, content)
export const details = (attrs, content) => wrapContainer('details', attrs, content)
export const dfn = (attrs, content) => wrapContainer('dfn', attrs, content)
export const dialog = (attrs, content) => wrapContainer('dialog', attrs, content)
export const div = (attrs, content) => wrapContainer('div', attrs, content)
export const dl = (attrs, content) => wrapContainer('dl', attrs, content)
export const dt = (attrs, content) => wrapContainer('dt', attrs, content)
export const em = (attrs, content) => wrapContainer('em', attrs, content)
export const embed = (attrs, content) => wrapContainer('embed', attrs, content)
export const fieldset = (attrs, content) => wrapContainer('fieldset', attrs, content)
export const figcaption = (attrs, content) => wrapContainer('figcaption', attrs, content)
export const figure = (attrs, content) => wrapContainer('figure', attrs, content)
export const footer = (attrs, content) => wrapContainer('footer', attrs, content)
export const form = (attrs, content) => wrapContainer('form', attrs, content)
export const h1 = (attrs, content) => wrapContainer('h1', attrs, content)
export const h2 = (attrs, content) => wrapContainer('h2', attrs, content)
export const h3 = (attrs, content) => wrapContainer('h3', attrs, content)
export const h4 = (attrs, content) => wrapContainer('h4', attrs, content)
export const h5 = (attrs, content) => wrapContainer('h5', attrs, content)
export const h6 = (attrs, content) => wrapContainer('h6', attrs, content)
export const head = (attrs, content) => wrapContainer('head', attrs, content)
export const header = (attrs, content) => wrapContainer('header', attrs, content)
export const hr = (attrs, content) => wrapContainer('hr', attrs, content)
export const html = (attrs, content) => wrapContainer('html', attrs, content)
export const i = (attrs, content) => wrapContainer('i', attrs, content)
export const iframe = (attrs, content) => wrapContainer('iframe', attrs, content)
export const img = (attrs, content) => wrapContainer('img', attrs, content)
export const input = (attrs, content) => wrapContainer('input', attrs, content)
export const ins = (attrs, content) => wrapContainer('ins', attrs, content)
export const kbd = (attrs, content) => wrapContainer('kbd', attrs, content)
export const label = (attrs, content) => wrapContainer('label', attrs, content)
export const legend = (attrs, content) => wrapContainer('legend', attrs, content)
export const li = (attrs, content) => wrapContainer('li', attrs, content)
export const link = (attrs, content) => wrapContainer('link', attrs, content)
export const main = (attrs, content) => wrapContainer('main', attrs, content)
export const map = (attrs, content) => wrapContainer('map', attrs, content)
export const mark = (attrs, content) => wrapContainer('mark', attrs, content)
export const meta = (attrs, content) => wrapContainer('meta', attrs, content)
export const meter = (attrs, content) => wrapContainer('meter', attrs, content)
export const nav = (attrs, content) => wrapContainer('nav', attrs, content)
export const noscript = (attrs, content) => wrapContainer('noscript', attrs, content)
export const object = (attrs, content) => wrapContainer('object', attrs, content)
export const ol = (attrs, content) => wrapContainer('ol', attrs, content)
export const optgroup = (attrs, content) => wrapContainer('optgroup', attrs, content)
export const option = (attrs, content) => wrapContainer('option', attrs, content)
export const output = (attrs, content) => wrapContainer('output', attrs, content)
export const p = (attrs, content) => wrapContainer('p', attrs, content)
export const param = (attrs, content) => wrapContainer('param', attrs, content)
export const picture = (attrs, content) => wrapContainer('picture', attrs, content)
export const pre = (attrs, content) => wrapContainer('pre', attrs, content)
export const progress = (attrs, content) => wrapContainer('progress', attrs, content)
export const q = (attrs, content) => wrapContainer('q', attrs, content)
export const rp = (attrs, content) => wrapContainer('rp', attrs, content)
export const rt = (attrs, content) => wrapContainer('rt', attrs, content)
export const ruby = (attrs, content) => wrapContainer('ruby', attrs, content)
export const s = (attrs, content) => wrapContainer('s', attrs, content)
export const samp = (attrs, content) => wrapContainer('samp', attrs, content)
export const script = (attrs, content) => wrapContainer('script', attrs, content)
export const section = (attrs, content) => wrapContainer('section', attrs, content)
export const select = (attrs, content) => wrapContainer('select', attrs, content)
export const small = (attrs, content) => wrapContainer('small', attrs, content)
export const source = (attrs, content) => wrapContainer('source', attrs, content)
export const span = (attrs, content) => wrapContainer('span', attrs, content)
export const strong = (attrs, content) => wrapContainer('strong', attrs, content)
export const style = (attrs, content) => wrapContainer('style', attrs, content)
export const sub = (attrs, content) => wrapContainer('sub', attrs, content)
export const summary = (attrs, content) => wrapContainer('summary', attrs, content)
export const sup = (attrs, content) => wrapContainer('sup', attrs, content)
export const svg = (attrs, content) => wrapContainer('svg', attrs, content)
export const table = (attrs, content) => wrapContainer('table', attrs, content)
export const tbody = (attrs, content) => wrapContainer('tbody', attrs, content)
export const td = (attrs, content) => wrapContainer('td', attrs, content)
export const template = (attrs, content) => wrapContainer('template', attrs, content)
export const textarea = (attrs, content) => wrapContainer('textarea', attrs, content)
export const tfoot = (attrs, content) => wrapContainer('tfoot', attrs, content)
export const th = (attrs, content) => wrapContainer('th', attrs, content)
export const thead = (attrs, content) => wrapContainer('thead', attrs, content)
export const time = (attrs, content) => wrapContainer('time', attrs, content)
export const title = (attrs, content) => wrapContainer('title', attrs, content)
export const tr = (attrs, content) => wrapContainer('tr', attrs, content)
export const track = (attrs, content) => wrapContainer('track', attrs, content)
export const u = (attrs, content) => wrapContainer('u', attrs, content)
export const ul = (attrs, content) => wrapContainer('ul', attrs, content)
export const video = (attrs, content) => wrapContainer('video', attrs, content)
export const wbr = (attrs, content) => wrapContainer('wbr', attrs, content)

export function renderShadow (content, rootElement) {
  try {
    const shadowRoot = document.getElementById(rootElement).attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = content
  } catch (e) { return null }
}

export function render (content, rootElement) {
  try {
    document.getElementById(rootElement).innerHTML = content
  } catch (e) { return null }
}
