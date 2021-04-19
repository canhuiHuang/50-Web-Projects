const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `<div class='keys'>
    <div class="key">
      ${e.key === ' ' ? 'Space' : e.key}
      <small>event.keyCode</small>
    </div>
    <button onclick="copyCode()"  class="key">
      <div id='xd'>${e.keyCode}</div>
      <small>event.keyCode</small>
    </button>
    <div class="key">
      ${e.code}
      <small>event.code</small>
    </div>
  </div>`
})