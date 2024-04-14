import React from 'react'

function Switch() {
    const modeSwitch = document.getElementById('mode-switch');

    modeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    }); 
  return (
    <div class="switch-container">
        <label class="switch">
          <input type="checkbox" id="mode-switch"/>
          <span class="slider"></span>
        </label>
      </div>
  )
}

export default Switch