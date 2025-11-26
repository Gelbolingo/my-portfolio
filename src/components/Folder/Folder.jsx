import { useMemo, useState } from 'react'
import './Folder.css'

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex
  if (color.length === 3) {
    color = color
      .split('')
      .map((c) => c + c)
      .join('')
  }
  const num = parseInt(color, 16)
  let r = (num >> 16) & 0xff
  let g = (num >> 8) & 0xff
  let b = num & 0xff
  r = Math.max(0, Math.floor(r * (1 - percent)))
  g = Math.max(0, Math.floor(g * (1 - percent)))
  b = Math.max(0, Math.floor(b * (1 - percent)))
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`
}

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '' }) => {
  const maxItems = 3
  const paddedItems = useMemo(() => {
    const result = items.slice(0, maxItems)
    while (result.length < maxItems) {
      result.push(null)
    }
    return result
  }, [items])

  const [open, setOpen] = useState(false)
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })),
  )

  const folderBackColor = useMemo(() => darkenColor(color, 0.1), [color])

  const handleClick = () => {
    setOpen((prev) => !prev)
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })))
    }
  }

  const handlePaperMouseMove = (e, index) => {
    if (!open) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const offsetX = (e.clientX - centerX) * 0.15
    const offsetY = (e.clientY - centerY) * 0.15
    setPaperOffsets((prev) => {
      const next = [...prev]
      next[index] = { x: offsetX, y: offsetY }
      return next
    })
  }

  const handlePaperMouseLeave = (index) => {
    setPaperOffsets((prev) => {
      const next = [...prev]
      next[index] = { x: 0, y: 0 }
      return next
    })
  }

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': '#f1f1f1',
    '--paper-2': '#f8f8f8',
    '--paper-3': '#ffffff',
  }

  const scaleStyle = { transform: `scale(${size})` }
  const folderClassName = ['folder', open ? 'open' : '', className].join(' ').trim()

  return (
    <div style={scaleStyle} className="folder-wrapper">
      <div className={folderClassName} style={folderStyle} onClick={handleClick}>
        <div className="folder__back">
          {paddedItems.map((item, i) => (
            <div
              key={i}
              className={`paper paper-${i + 1}`}
              onMouseMove={(e) => handlePaperMouseMove(e, i)}
              onMouseLeave={() => handlePaperMouseLeave(i)}
              style={
                open
                  ? {
                      '--magnet-x': `${paperOffsets[i]?.x || 0}px`,
                      '--magnet-y': `${paperOffsets[i]?.y || 0}px`,
                    }
                  : undefined
              }
            >
              {item}
            </div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>
      </div>
    </div>
  )
}

export default Folder

