'use strict'
import * as polenta from './../index'

const getRoot = () => document.createElement('div')

describe('templating', () => {
  test('renders a simple div', () => {
    const root = getRoot()
    const content = polenta.div('', 'Hello World')
    root.innerHTML = content
    expect(root.innerHTML).toEqual(content)
    expect(root.children.length).toEqual(1)
    expect(root.children[0].innerHTML).toEqual('Hello World')
  })

  test('render a div with an id', () => {
    const root = getRoot()
    const content = polenta.div('id="polenta"')
    root.innerHTML = content
    expect(root.children[0].id).toEqual('polenta')
  })

  test('render a div with two classes', () => {
    const root = getRoot()
    const content = polenta.div('class="polenta pasta"')
    root.innerHTML = content
    expect(root.children[0].classList.contains('polenta')).toEqual(true)
    expect(root.children[0].classList.contains('pasta')).toEqual(true)
  })

  test('does not pass attrs if a <script is injected', () => {
    const root = getRoot()
    const content = polenta.div('id="polenta"> <script')
    root.innerHTML = content
    expect(root.children.length).toEqual(0)
  })
})
