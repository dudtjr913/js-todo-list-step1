export const $ = (selector, target = document) => {
  const $element =
    target.querySelectorAll(selector).length > 1
      ? [...target.querySelectorAll(selector)]
      : target.querySelector(selector);

  return {
    addEventListener(eventName, cb) {
      Array.isArray($element)
        ? $element.forEach(($elem) => $elem.addEventListener(eventName, cb))
        : $element.addEventListener(eventName, cb);

      return this;
    },

    forEach(cb) {
      Array.isArray($element) && $element.forEach(cb);

      return this;
    },

    insertAdjacentHTML(position, text) {
      Array.isArray($element)
        ? $element.forEach(($elem) => $elem.insertAdjacentHTML(position, text))
        : $element.insertAdjacentHTML(position, text);

      return this;
    },

    click() {
      Array.isArray($element)
        ? $element.forEach(($elem) => $elem.click())
        : $element.click();

      return this;
    },

    get classList() {
      return Array.isArray($element)
        ? $element.map(($elem) => $elem.classList)
        : $element.classList;
    },

    get innerText() {
      return Array.isArray($element)
        ? $element.map(($elem) => $elem.innerText)
        : $element.innerText;
    },

    set innerText(text) {
      Array.isArray($element)
        ? $element.map(($elem) => ($elem.innerText = text))
        : ($element.innerText = text);

      return this;
    },

    get innerHTML() {
      return Array.isArray($element)
        ? $element.map(($elem) => $elem.innerHTML)
        : $element.innerHTML;
    },

    set innerHTML(text) {
      Array.isArray($element)
        ? $element.map(($elem) => ($elem.innerHTML = text))
        : ($element.innerHTML = text);

      return this;
    },

    get value() {
      return Array.isArray($element)
        ? $element.map(($elem) => $elem.value)
        : $element.value;
    },

    set value(text) {
      Array.isArray($element)
        ? $element.forEach(($elem) => ($elem.value = text))
        : ($element.value = text);
    },
  };
};
