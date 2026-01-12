function setupCollapsibleHeaders() {
  // Find all headings that should be collapsible (h2-h6)
  const headers = document.querySelectorAll('article h1, article h2, article h3, article h4, article h5, article h6')
  
  headers.forEach(header => {
    // Check if this header already has collapse functionality
    if (header.closest('.collapsible-header')) return
    
    const nextElement = header.nextElementSibling
    if (!nextElement) return
    
    // Create the collapse structure
    const collapsibleWrapper = document.createElement('div')
    collapsibleWrapper.className = 'collapsible-header'
    
    // Move the header and its content into the wrapper
    const parent = header.parentElement!
    const headerIndex = Array.from(parent.children).indexOf(header)
    const contentElements = []
    
    // Find all elements that belong to this section (until next same-or-higher level heading)
    let current = nextElement
    while (current && !isHigherOrEqualLevelHeading(current, header)) {
      contentElements.push(current)
      current = current.nextElementSibling
    }
    
    // Create the collapse structure
    collapsibleWrapper.innerHTML = `
      <div class="collapse-shell is-open">
        <button class="collapse-toggle" aria-expanded="true">
          <div class="collapse-rail">
            <div class="collapse-line"></div>
            <div class="collapse-node">
              <div class="collapse-node-dot"></div>
            </div>
            <div class="collapse-line"></div>
          </div>
          <div class="collapse-title">
            ${header.outerHTML}
            <span class="collapsed-dots">…</span>
          </div>
          <div class="toggle-icons">
            <svg class="circle-icon" width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1" fill="none"/>
            </svg>
            <svg class="collapse-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 8H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <svg class="expand-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 5V11M5 8H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        </button>
        <div class="collapse-body">
          <div class="collapse-rail collapse-rail--body">
            <div class="collapse-line"></div>
          </div>
          <div class="collapse-body-content"></div>
        </div>
      </div>
    `
    
    // Move content into the collapse body
    const contentContainer = collapsibleWrapper.querySelector('.collapse-body-content')!
    contentElements.forEach(el => contentContainer.appendChild(el))
    
    // Replace the original header with our collapsible structure
    parent.insertBefore(collapsibleWrapper, header)
    header.remove()
    
    // Add click handler
    const toggle = collapsibleWrapper.querySelector('.collapse-toggle') as HTMLElement
    toggle.addEventListener('click', function() {
      const shell = this.closest('.collapse-shell')!
      const isOpen = shell.classList.contains('is-open')
      const body = shell.querySelector('.collapse-body') as HTMLElement
      
      if (isOpen) {
        shell.classList.remove('is-open')
        this.setAttribute('aria-expanded', 'false')
        body.hidden = true
      } else {
        shell.classList.add('is-open')
        this.setAttribute('aria-expanded', 'true')
        body.hidden = false
      }
    })
  })
}

function isHigherOrEqualLevelHeading(element: Element, referenceHeader: Element): boolean {
  if (!element.tagName.match(/^H[1-6]$/i)) return false
  
  const refLevel = parseInt(referenceHeader.tagName.charAt(1))
  const elemLevel = parseInt(element.tagName.charAt(1))
  return elemLevel <= refLevel
}

document.addEventListener('nav', () => {
  setupCollapsibleHeaders()
})