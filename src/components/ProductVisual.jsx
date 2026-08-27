import { Activity, Bell, CalendarDays, CreditCard, GraduationCap, Package, Stethoscope, Users } from 'lucide-react'

const iconMap = { blue: GraduationCap, violet: Package, cyan: Stethoscope, amber: CalendarDays, pink: Activity }

export default function ProductVisual({ project, compact = false }) {
  if (project.type === 'mobile') return <div className={`phone-stage accent-${project.accent}`} aria-label={`${project.title} mobile application preview`}>
    {[0, 1, 2].map((item) => <div className={`phone phone-${item + 1}`} key={item}>
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="mobile-top"><span>{item ? 'Schedule' : 'Good morning'}</span><Bell size={13} /></div>
        <div className="mobile-hero"><Stethoscope size={22} /><strong>{item === 1 ? '12 Sessions' : item === 2 ? 'Care records' : 'Your care, connected'}</strong><small>Today’s overview</small></div>
        {[CalendarDays, Users, CreditCard].map((Icon, i) => <div className="mobile-row" key={i}><span><Icon size={13} /></span><i /><b /></div>)}
      </div>
    </div>)}
  </div>

  const Icon = iconMap[project.accent] || Activity
  return <div className={`dashboard accent-${project.accent} ${compact ? 'dashboard-compact' : ''}`} aria-label={`${project.title} dashboard preview`}>
    <div className="dash-sidebar"><div className="dash-logo"><Icon size={15} /></div>{[1,2,3,4,5].map(i => <span key={i} />)}</div>
    <div className="dash-main">
      <div className="dash-header"><div><small>Workspace / Overview</small><strong>{project.short}</strong></div><div className="avatar" /></div>
      <div className="metrics">{['Active users','Monthly flow','Open tasks'].map((x,i) => <div key={x}><small>{x}</small><b>{i === 0 ? 'Live' : i === 1 ? 'On track' : '24'}</b><i /></div>)}</div>
      <div className="dash-grid"><div className="chart-card"><small>Operational overview</small><div className="chart-bars">{[42,68,52,82,64,91,76,94].map((h,i) => <span style={{height:`${h}%`}} key={i}/>)}</div></div><div className="activity-card"><small>Recent activity</small>{[1,2,3,4].map(i => <div key={i}><span><Users size={10}/></span><i/><b/></div>)}</div></div>
    </div>
  </div>
}
