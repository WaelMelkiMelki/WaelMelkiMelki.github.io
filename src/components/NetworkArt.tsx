const points = Array.from({ length: 64 }, (_, i) => {
 const angle = i * 2.399963; const radius = Math.sqrt(i / 64) * 192
 return { x: 250 + Math.cos(angle) * radius, y: 250 + Math.sin(angle) * radius * 0.83 }
})
export default function NetworkArt() {
 return <div className="network-art" aria-hidden="true"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><svg viewBox="0 0 500 500"><defs><radialGradient id="glow"><stop stopColor="#8b5cf6" stopOpacity=".3"/><stop offset="1" stopColor="#8b5cf6" stopOpacity="0"/></radialGradient></defs><circle cx="250" cy="250" r="240" fill="url(#glow)"/>{points.flatMap((p, i) => points.slice(i + 1).map((q, j) => Math.hypot(p.x-q.x,p.y-q.y) < 72 ? <line key={`${i}-${j}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke={i % 3 ? '#8b5cf6' : '#22d3ee'} strokeOpacity=".27"/> : null))}{points.map((p,i) => <circle key={i} cx={p.x} cy={p.y} r={i%5 ? 2 : 3.5} fill={i%3 ? '#bca6ff' : '#67e8f9'}/>)}</svg><div className="art-label label-top"><span className="status-dot"/> INTELLIGENCE, CONNECTED</div><div className="art-label label-bottom">DATA <span>→</span> MODELS <span>→</span> IMPACT</div></div>
}
