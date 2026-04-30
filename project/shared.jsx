// Shared components for the time capsule

const PAGES = [
{ id: "home", label: "Home", short: "Home", num: "00" },
{ id: "voices", label: "Student Voices", short: "Voices", num: "01" },
{ id: "teachers", label: "Teacher Interviews", short: "Teachers", num: "02" },
{ id: "today", label: "School Today", short: "Today", num: "03" },
{ id: "numbers", label: "By the Numbers", short: "Numbers", num: "04" },
{ id: "yearbook", label: "The Yearbook", short: "Yearbook", num: "05" },
{ id: "letter", label: "Letters to the Future", short: "Letters", num: "06" }];


function Nav({ page, setPage }) {
  return (
    <nav className="nav" role="navigation" aria-label="Primary">
      <div className="nav-brand">
        <div className="nav-brand-mark">H</div>
        <span>Hoggard '26</span>
      </div>
      <div className="nav-links">
        {PAGES.map((p) =>
        <button
          key={p.id}
          className={"nav-link " + (page === p.id ? "active" : "")}
          onClick={() => setPage(p.id)}>
          
            <span className="nav-link-full">{p.label}</span>
            <span className="nav-link-short">{p.short}</span>
          </button>
        )}
      </div>
    </nav>);

}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-seal">SEALED APRIL 2026 · OPEN IN 2035</div>
      <div>Hoggard High School Time Capsule · Wilmington, NC</div>
      <div style={{ marginTop: 6, opacity: 0.7 }}>
        A CAS project by Greyson Clymer &amp; Leah Chitwood
      </div>
    </footer>);

}

// Photo placeholder — warm, paper-toned
function Photo({ label, ratio = "16/9", style, className = "", tone = "warm" }) {
  const tones = {
    warm: "linear-gradient(135deg, #e8d4ba 0%, #c9a77f 100%)",
    sage: "linear-gradient(135deg, #c8d3bf 0%, #97a98a 100%)",
    rose: "linear-gradient(135deg, #e8c8c0 0%, #c08c80 100%)",
    sky: "linear-gradient(135deg, #c5d3df 0%, #8fa5b8 100%)",
    sand: "linear-gradient(135deg, #efe2c8 0%, #c5b08a 100%)"
  };
  return (
    <div
      className={"photo photo-stripes " + className}
      data-label={label}
      style={{ aspectRatio: ratio, background: tones[tone] || tones.warm, ...style }}>
      
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.4), transparent 60%)"
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 80% 80%, rgba(28,26,23,0.18), transparent 60%)"
      }} />
      {/* subtle camera-iris ghost */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 56, height: 56, borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow: "0 0 0 8px rgba(255,255,255,0.12), inset 0 0 0 1px rgba(28,26,23,0.1)",
        opacity: 0.7
      }} />
    </div>);

}

function Slot({ label, hint, style }) {
  return (
    <div className="slot" style={style}>
      <div className="slot-label">{label}</div>
      <div>{hint}</div>
    </div>);

}

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

function PageHeader({ eyebrow, title, lede }) {
  return (
    <header style={{ paddingTop: 140, paddingBottom: 32 }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="display" style={{ marginTop: 14 }}>{title}</h1>
      {lede && <p className="lede" style={{ marginTop: 18, maxWidth: 640 }}>{lede}</p>}
    </header>);

}

Object.assign(window, { PAGES, Nav, Footer, Photo, Slot, Eyebrow, PageHeader });