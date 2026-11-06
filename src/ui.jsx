
export function Logo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <circle cx="24" cy="24" r="20" />
      <path d="M24 6c-7 5-10 11-10 18s3 13 10 18" />
      <path d="M24 6c7 5 10 11 10 18s-3 13-10 18" />
    </svg>
  )
}

export function Wave({ className = '', flip = false }) {
  return (
    <div className={`wave ${className} ${flip ? 'flip' : ''}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 1440 96" preserveAspectRatio="none">
        <path fill="currentColor" d="M0 64C240 96 480 16 720 32c240 16 480 64 720 16v48H0V64Z" />
      </svg>
    </div>
  )
}

function Cup() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M9 18h24v10a12 12 0 0 1-12 12 12 12 0 0 1-12-12V18Z" />
      <path d="M33 21h3a5 5 0 0 1 0 10h-3" />
      <path d="M16 12c0-2.5 2-2.5 2-5M23 12c0-2.5 2-2.5 2-5" />
    </svg>
  )
}

function Bean() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <ellipse cx="24" cy="24" rx="11" ry="17" transform="rotate(35 24 24)" />
      <path d="M17.5 13.5c5 5.5 7 15.5 2 22.5" />
    </svg>
  )
}

function Dripper() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8h12l-2 8 8 22H12l8-22-2-8Z" />
      <path d="M20 26h8" />
      <path d="M32 18h4" />
    </svg>
  )
}

const doodleIcons = [Bean, Cup, Dripper, Bean, Cup]

export function Doodles({ light = false }) {
  return (
    <div className={`doodles ${light ? 'doodles--light' : ''}`.trim()} aria-hidden="true">
      {doodleIcons.map((Icon, index) => (
        <span key={index} className={`doodle doodle-${index + 1}`}>
          <Icon />
        </span>
      ))}
    </div>
  )
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.5V14h2.8v8h3.2Z" />
    </svg>
  )
}

export function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-6.3l-4.9-6.4L6.2 22H3l7.3-8.3L3 2h6.4l4.4 5.8L18.9 2Zm-1.1 18h1.7L8.3 3.7H6.5L17.8 20Z" />
    </svg>
  )
}
