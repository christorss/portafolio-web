const header = document.querySelector('#site-header')
const menuButton = document.querySelector('#menu-toggle')
const navigation = document.querySelector('#site-nav')
const progress = document.querySelector('.page-progress span')
const videoToggle = document.querySelector('[data-video-toggle]')
const siteVideos = document.querySelectorAll('video')
const heroVideo = document.querySelector('.hero-video')
const showcaseVideo = document.querySelector('.experience-media video')
const form = document.querySelector('#contact-form')
const status = document.querySelector('#form-status')

const closeMenu = () => {
  navigation?.classList.remove('is-open')
  menuButton?.setAttribute('aria-expanded', 'false')
  menuButton?.setAttribute('aria-label', 'Abrir menú de navegación')
  document.body.classList.remove('menu-open')
}

const setHeaderState = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24)
  const availableScroll = document.documentElement.scrollHeight - window.innerHeight
  const progressValue = availableScroll > 0 ? window.scrollY / availableScroll : 0
  if (progress) progress.style.transform = `scaleX(${Math.min(progressValue, 1)})`
}

setHeaderState()
window.addEventListener('scroll', setHeaderState, { passive: true })

menuButton?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('is-open') ?? false
  menuButton.setAttribute('aria-expanded', String(isOpen))
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación')
  document.body.classList.toggle('menu-open', isOpen)
})

navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu))
document.addEventListener('keydown', (event) => event.key === 'Escape' && closeMenu())

const revealItems = document.querySelectorAll('.reveal')
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
    { threshold: 0.12 },
  )
  revealItems.forEach((item) => observer.observe(item))
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'))
}

const prepareInlineVideo = (video) => {
  video.muted = true
  video.defaultMuted = true
  video.playsInline = true
  video.setAttribute('muted', '')
  video.setAttribute('playsinline', '')
  video.setAttribute('webkit-playsinline', '')
}

const tryPlayVideo = async (video) => {
  if (!video) return false
  prepareInlineVideo(video)
  try {
    await video.play()
    return true
  } catch {
    return false
  }
}

siteVideos.forEach(prepareInlineVideo)
tryPlayVideo(heroVideo)

const unlockVideos = () => {
  tryPlayVideo(heroVideo)
  if (showcaseVideo && !showcaseVideo.paused) tryPlayVideo(showcaseVideo)
  window.removeEventListener('touchstart', unlockVideos)
  window.removeEventListener('pointerdown', unlockVideos)
}

window.addEventListener('touchstart', unlockVideos, { once: true, passive: true })
window.addEventListener('pointerdown', unlockVideos, { once: true })

videoToggle?.addEventListener('click', async () => {
  if (!showcaseVideo) return
  if (showcaseVideo.paused) {
    const played = await tryPlayVideo(showcaseVideo)
    if (played) {
      videoToggle.innerHTML = '<span aria-hidden="true">Ⅱ</span> Pausar recorrido'
      videoToggle.setAttribute('aria-label', 'Pausar video de visualización')
    }
  } else {
    showcaseVideo.pause()
    videoToggle.innerHTML = '<span aria-hidden="true">▶</span> Ver recorrido'
    videoToggle.setAttribute('aria-label', 'Reproducir video de visualización')
  }
})

form?.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!form.checkValidity()) {
    form.reportValidity()
    return
  }

  const data = new FormData(form)
  const subject = `Nuevo proyecto: ${data.get('project-type')}`
  const body = [
    `Nombre: ${data.get('name')}`,
    `Correo: ${data.get('email')}`,
    `Tipo de proyecto: ${data.get('project-type')}`,
    '',
    String(data.get('message')),
  ].join('\n')
  const emailUrl = `mailto:hola@norteconstructora.ec?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  if (status) {
    status.replaceChildren('Tu solicitud está lista. ')
    const sendLink = document.createElement('a')
    sendLink.href = emailUrl
    sendLink.textContent = 'Abrir correo para enviarla'
    status.append(sendLink, '.')
  }
})

const year = document.querySelector('#current-year')
if (year) year.textContent = new Date().getFullYear()
