import * as polenta from './../index.js'

const content =
  polenta.div('class="text" id="main" href="hello"',
    polenta.div('class="container"',
      polenta.p('id="myparagraph"',
        polenta.span('class="span"', 'Hello'))))

polenta.render(content, 'root')
