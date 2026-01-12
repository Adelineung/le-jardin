// quartz/components/ScrollPreservation.tsx
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const ScrollPreservation: QuartzComponent = () => {
  return (
    <script id="scroll-preservation" dangerouslySetInnerHTML={{
      __html: `
      (function() {
          // Disable in production
          if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
            console.log('Scroll preservation disabled in production')
            return
          }
          if (window.quartzScrollPreservationLoaded) return
          window.quartzScrollPreservationLoaded = true
          const currentTime = new Date().toUTCString()
          console.log('=== SCROLL DEBUG === / ', currentTime)
          console.log('Initial scrollY:', window.scrollY)
          
          // Get current URL
          const currentUrl = window.location.pathname
          const savedUrl = sessionStorage.getItem('quartzSavedUrl')
          
          // Check if we're on a different page than what was saved
          if (savedUrl !== currentUrl) {
            console.log('URL changed from', savedUrl, 'to', currentUrl, '- clearing saved positions')
            sessionStorage.removeItem('quartzMainScrollPosition')
            sessionStorage.removeItem('quartzTOCScrollPosition')
          }
          
          // Save current URL for next time
          sessionStorage.setItem('quartzSavedUrl', currentUrl)
          
          // Better content check - article exists AND has substantial content
          function isContentLoaded() {
            const article = document.querySelector('article.popover-hint')
            if (!article) return false
            
            const articleText = article.textContent.trim()
            const hasContent = articleText.length > 1000
            
            console.log('Article check - exists:', !!article, 'length:', articleText.length, 'hasContent:', hasContent)
            
            return hasContent
          }
          
          // Restore main scroll if content is loaded AND we're on the same page
          const savedMainPos = sessionStorage.getItem('quartzMainScrollPosition')
          if (savedMainPos && isContentLoaded() && parseInt(savedMainPos) > 100 && savedUrl === currentUrl) {
            const targetPos = parseInt(savedMainPos)
            console.log('Restoring main to:', targetPos, 'current:', window.scrollY, 'for same URL:', currentUrl)
            
            // First instant scroll
            window.scrollTo({
              top: targetPos,
              behavior: 'instant'
            })
            console.log('Immediately after scroll:', window.scrollY)
            
            // Check after various delays to catch when the scroll happens
            setTimeout(() => {
              console.log('100ms after scroll:', window.scrollY)
              if (Math.abs(window.scrollY - targetPos) > 50) {
                console.log('Correcting after 100ms:', window.scrollY, '->', targetPos)
                window.scrollTo({
                  top: targetPos,
                  behavior: 'instant'
                })
              }
            }, 100)
            
            setTimeout(() => {
              console.log('300ms after scroll:', window.scrollY)
              if (Math.abs(window.scrollY - targetPos) > 50) {
                console.log('Correcting after 300ms:', window.scrollY, '->', targetPos)
                window.scrollTo({
                  top: targetPos,
                  behavior: 'instant'
                })
              }
              sessionStorage.removeItem('quartzMainScrollPosition')
            }, 300)
            
          } else if (savedMainPos && savedUrl !== currentUrl) {
            console.log('NOT restoring main - different URL')
          } else if (savedMainPos) {
            console.log('NOT restoring main - content not loaded or invalid position')
          }
          
          // Simple TOC restoration - just wait a bit and try
          const savedTOCPos = sessionStorage.getItem('quartzTOCScrollPosition')
          if (savedTOCPos && isContentLoaded() && savedUrl === currentUrl) {
            setTimeout(() => {
              const toc = document.querySelector('ul.toc-content.overflow')
              if (toc) {
                console.log('Restoring TOC to:', savedTOCPos, 'for same URL:', currentUrl)
                toc.scrollTop = parseInt(savedTOCPos)
                sessionStorage.removeItem('quartzTOCScrollPosition')
              }
            }, 200)
          }
          
          // Simple save function
          function savePositions() {
            if (!isContentLoaded()) {
              console.log('SKIP save - content not loaded')
              return
            }
            
            console.log('Saving scrollY:', window.scrollY, 'for URL:', currentUrl)
            sessionStorage.setItem('quartzMainScrollPosition', window.scrollY.toString())
            
            const toc = document.querySelector('ul.toc-content.overflow')
            if (toc && toc.scrollTop > 10) {
              console.log('Saving TOC:', toc.scrollTop, 'for URL:', currentUrl)
              sessionStorage.setItem('quartzTOCScrollPosition', toc.scrollTop.toString())
            }
          }
          
          // Simple debounced save
          let saveTimer
          window.addEventListener('scroll', () => {
            clearTimeout(saveTimer)
            saveTimer = setTimeout(savePositions, 300)
          }, { passive: true })
          
          // TOC scroll listener
          const toc = document.querySelector('ul.toc-content.overflow')
          if (toc) {
            toc.addEventListener('scroll', () => {
              clearTimeout(saveTimer)
              saveTimer = setTimeout(savePositions, 300)
            }, { passive: true })
          }
          
          window.addEventListener('beforeunload', savePositions)
        })()
      `
    }} />
  )
}

export default (() => ScrollPreservation) satisfies QuartzComponentConstructor