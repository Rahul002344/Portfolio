import { motion } from 'framer-motion';
const codeLines = ['const experience = build();', 'motion.connect(scroll);', 'ui.render(depth);', 'status: ONLINE'];

export default function TechnicalVisual({ compact = false }) {
  return (
    <div className={`technical-visual ${compact ? 'technical-visual-compact' : ''}`} aria-label="Interactive computer vision project visualization">
      <div className="technical-grid" />
      <div className="technical-sparks" aria-hidden="true">{Array.from({ length: 12 }).map((_, index) => <i key={index} style={{ '--spark-x': `${(index * 29) % 100}%`, '--spark-y': `${(index * 47) % 100}%`, '--spark-delay': `${index * .18}s` }} />)}</div>
      <div className="technical-head">
        <span><i /> LIVE / PRODUCT SYSTEM</span><b>RAHUL.OS</b>
      </div>
      <div className="technical-screen">
        <div className="device-stage">
        <div className="laptop-device">
        <div className="browser-window">
          <div className="browser-bar"><span className="browser-dots"><i /><i /><i /></span><span className="browser-url">localhost / projects / interactive-world</span><b>↗</b></div>
          <div className="browser-page">
            <div className="browser-nav"><strong>R.</strong><span>WORK</span><span>ABOUT</span><span>CONTACT</span></div>
            <div className="browser-hero"><small>FEATURED SYSTEM / 001</small><strong>Build things<br /><em>that move.</em></strong><div className="browser-button">EXPLORE →</div></div>
            <div className="browser-cards"><span /><span /><span /></div>
          </div>
        </div>
        </div>
        <div className="phone-device"><div className="phone-speaker" /><div className="phone-screen"><span className="phone-status">09:41 <b>●●●</b></span><strong>BUILD<br /><em>IN PUBLIC.</em></strong><span className="phone-line" /><small>scroll / explore</small><div className="phone-code"><i /> <i /> <i /> <i /></div></div></div>
        <div className="device-prompt prompt-top"><b>RENDER COMPLETE</b><span>interactive-world / 98%</span></div>
        <div className="device-prompt prompt-bottom"><span className="prompt-dot" /> cursor connected <b>LIVE</b></div>
        </div>
        <div className="technical-scan" />
        <span className="detection-box box-one">RENDER <b>0.96</b></span>
        <span className="detection-box box-two">MOTION <b>0.88</b></span>
      </div>
      <div className="technical-footer">
        <div className="technical-code">{codeLines.map((line, index) => <span key={line} className={index === codeLines.length - 1 ? 'is-live' : ''}><b>0{index + 1}</b>{line}</span>)}</div>
        <div className="technical-chart"><div className="chart-bars">{[35, 58, 42, 76, 64, 92, 72].map((height, index) => <motion.i key={index} animate={{ height: [`${height}%`, `${Math.max(20, height - 24)}%`, `${height}%`] }} transition={{ duration: 2 + index * .1, repeat: Infinity, ease: 'easeInOut' }} />)}</div><span>FPS / 30</span></div>
      </div>
    </div>
  );
}
