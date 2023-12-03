// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export async function renderWithTemplate(
  templateFn,
  parentEl,
  data,
  callback,
  position = 'afterbegin',
  clear = true
) {
  if (clear) {
    parentEl.innerHTML = '';
  }
  const htmlText = await templateFn(data);

  parentEl.insertAdjacentHTML(position, htmlText);
  if (callback) {
    callback(data);
  }
}

function loadTemplate(path) {
  return async function () {
    const res = await fetch(path);
    if (res.ok) {
      const html = await res.text();
      return html;
    }
  };
}

export async function loadDonate() {
  const donateTemplateFn = loadTemplate('/partials/donate.html');

  const donateEl = document.querySelector('#donate');
  renderWithTemplate(donateTemplateFn, donateEl);
}
