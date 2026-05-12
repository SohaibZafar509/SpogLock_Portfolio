export function Loader({ hidden }) {
  return (
    <div className={`loader${hidden ? ' loader--hidden' : ''}`} aria-hidden="true">
      <div className="loader__curve" />
      <div className="loader__text">
        {'SPOGLOCK'.split('').map((letter, index) => (
          <span key={`${letter}-${index}`}>{letter}</span>
        ))}
      </div>
    </div>
  )
}
