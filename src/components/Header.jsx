import { useEffect } from 'react'
import './Header.css'

function Header() {
  useEffect(() => {
    // Create canvas for animated background
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const header = document.querySelector('.header')
    
    if (!header) return

    // Setup canvas
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '1'
    
    header.insertBefore(canvas, header.firstChild)
    
    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = header.offsetWidth
      canvas.height = header.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Particle system
    const particles = []
    const particleCount = 90
    const colors = ['#ffffff', '#87cbfe', '#1f201f', '#1a1c1b', '#292c2a']
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 19 + 1,
        speedX: Math.random() * 0.4,
        speedY: Math.random() * 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
      })
    }
    
    // Animation loop
    let animationId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'screen'
      
      particles.forEach(particle => {
        const distanceFromCenter = Math.abs(particle.x - canvas.width / 2) / (canvas.width / 2)
        const opacity = 0 + (0.4 - 0) * distanceFromCenter
        
        ctx.globalAlpha = opacity
        ctx.fillStyle = particle.color
        ctx.beginPath()
        
        if (particle.shape === 'circle') {
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        } else if (particle.shape === 'square') {
          ctx.rect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size)
        } else {
          ctx.moveTo(particle.x, particle.y - particle.size)
          ctx.lineTo(particle.x - particle.size, particle.y + particle.size)
          ctx.lineTo(particle.x + particle.size, particle.y + particle.size)
        }
        
        ctx.closePath()
        ctx.fill()
        
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Wrap around
        if (particle.x < -particle.size) particle.x = canvas.width + particle.size
        if (particle.x > canvas.width + particle.size) particle.x = -particle.size
        if (particle.y < -particle.size) particle.y = canvas.height + particle.size
        if (particle.y > canvas.height + particle.size) particle.y = -particle.size
      })
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
      if (header.contains(canvas)) {
        header.removeChild(canvas)
      }
    }
  }, [])

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">✈️ AI Travel Planner</h1>
        <p className="tagline">Your Personalized Journey Awaits</p>
        <div className="team-badge">CODE ALPHA | INN-O-THON</div>
      </div>
    </header>
  )
}

export default Header
