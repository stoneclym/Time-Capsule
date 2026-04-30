// School Today — masonry gallery + lightbox (light theme)

const GALLERY = [
{ id: 1, label: "exterior-front.jpg", caption: "Front entrance, April 2026", area: "Exterior", tone: "warm", size: "large" },
{ id: 2, label: "hallway-east.jpg", caption: "East hallway between bells", area: "Hallways", tone: "sage", size: "tall" },
{ id: 3, label: "cafeteria-lunch.jpg", caption: "Cafeteria, B lunch", area: "Cafeteria", tone: "sand", size: "medium" },
{ id: 4, label: "classroom-eng.jpg", caption: "Mrs. ___'s English room", area: "Classrooms", tone: "rose", size: "medium" },
{ id: 5, label: "gym-empty.jpg", caption: "Gym between practices", area: "Gym", tone: "sky", size: "wide" },
{ id: 6, label: "lockers-west.jpg", caption: "West wing lockers", area: "Hallways", tone: "warm", size: "medium" },
{ id: 7, label: "library-stacks.jpg", caption: "Library, second floor", area: "Library", tone: "sand", size: "tall" },
{ id: 8, label: "courtyard.jpg", caption: "Senior courtyard, lunch", area: "Outside", tone: "sage", size: "medium" },
{ id: 9, label: "art-room.jpg", caption: "Art room, period 4", area: "Classrooms", tone: "rose", size: "medium" },
{ id: 10, label: "auditorium.jpg", caption: "Auditorium stage, dark", area: "Auditorium", tone: "sky", size: "wide" },
{ id: 11, label: "parking-lot.jpg", caption: "Student lot, 7:42 AM", area: "Exterior", tone: "warm", size: "medium" },
{ id: 12, label: "stairwell-b.jpg", caption: "Stairwell B, between floors", area: "Hallways", tone: "sage", size: "tall" },
{ id: 13, label: "trophy-case.jpg", caption: "Trophy case by the office", area: "Exterior", tone: "sand", size: "medium" },
{ id: 14, label: "bell-schedule.jpg", caption: "Bell schedule, room 214", area: "Detail", tone: "rose", size: "medium" }];


function TodayPage() {
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((lightbox + 1) % GALLERY.length);
      if (e.key === "ArrowLeft") setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const sizeClass = {
    large: { gridColumn: "span 2", gridRow: "span 2" },
    tall: { gridColumn: "span 1", gridRow: "span 2" },
    wide: { gridColumn: "span 2", gridRow: "span 1" },
    medium: { gridColumn: "span 1", gridRow: "span 1" }
  };

  return (
    <div className="page-enter">
      <div className="shell">
        <PageHeader
          eyebrow="Room 03 · Photographed April 2026"
          title={<span>School <em>today</em>.</span>}
          lede="Hoggard, building and bones, in the spring of 2026. We tried to capture the boring stuff. The type of things you stop noticing because you walk past them every day." />
        

        <div className="glass" style={{ padding: 0, overflow: "hidden", marginBottom: 60 }}>
          <div style={{ position: "relative", aspectRatio: "21/9" }}>
            <Photo label="day-in-the-life.mp4 — walkthrough video" ratio="auto" tone="warm"
            style={{ position: "absolute", inset: 0, height: "100%", borderRadius: 0 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(28,26,23,0.55))" }} />
            <button style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
              width: 88, height: 88, borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 24px rgba(28,26,23,0.35)",
              color: "var(--ink)", fontSize: 26, cursor: "default"
            }}>▶</button>
            <div style={{ position: "absolute", left: 28, bottom: 24, right: 28, color: "#fff" }}>
              <div className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>Featured · 6 min walkthrough</div>
              <h3 style={{ fontSize: "1.7rem", marginTop: 8, letterSpacing: "-0.02em", color: "#fff" }}>A Tuesday in April.

              </h3>
              <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.85)", marginTop: 6, maxWidth: 560 }}>
                First bell to last bell, no narration. Just the sound of the building.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", margin: "0 0 60px", height: 480, overflow: "hidden" }}>
        <Photo label="hoggard-aerial.jpg — campus from the south parking lot" ratio="auto" tone="sky"
        style={{ position: "absolute", inset: 0, height: "100%", borderRadius: 0 }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(255,246,234,0.95) 0%, rgba(255,246,234,0.5) 50%, transparent 100%)"
        }} />
        <div className="shell" style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 460 }}>
            <Eyebrow>Exterior</Eyebrow>
            <h2 style={{ fontSize: "2.4rem", marginTop: 12, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
              Brick, glass, and a flagpole that squeaks in the wind.
            </h2>
            <p style={{ fontSize: 15, marginTop: 16, color: "var(--ink-soft)" }}>The school sits on Shipyard Boulevard. The front looks pretty much like it did when it was built in 1967.


            </p>
          </div>
        </div>
      </div>

      <div className="shell">
        <Eyebrow>Gallery · {GALLERY.length} photos</Eyebrow>
        <h2 style={{ fontSize: "1.6rem", marginTop: 12, marginBottom: 24, letterSpacing: "-0.02em" }}>
          Click any photo to view full-size.
        </h2>

        <div className="masonry" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "180px",
          gap: 14
        }}>
          {GALLERY.map((g, i) =>
          <button
            key={g.id}
            onClick={() => setLightbox(i)}
            className="glass-hover"
            style={{
              ...sizeClass[g.size],
              position: "relative",
              padding: 0, border: "1px solid var(--glass-border)", borderRadius: 14,
              overflow: "hidden", cursor: "default",
              background: "transparent"
            }}>
            
              <Photo label={g.label} ratio="auto" tone={g.tone}
            style={{ position: "absolute", inset: 0, height: "100%", borderRadius: 0 }} />
              <div className="masonry-overlay" style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, transparent 50%, rgba(28,26,23,0.7))",
              opacity: 0.5,
              transition: "opacity 0.4s var(--ease)"
            }} />
              <div style={{
              position: "absolute", left: 14, right: 14, bottom: 12,
              color: "#fff"
            }}>
                <div style={{
                fontSize: 9.5, letterSpacing: "0.14em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)", fontWeight: 600, marginBottom: 4,
                fontFamily: "var(--font-mono)"
              }}>{g.area}</div>
                <div style={{ fontSize: 13, fontWeight: 500, fontFamily: "var(--font-serif)" }}>{g.caption}</div>
              </div>
            </button>
          )}
        </div>
      </div>

      {lightbox !== null &&
      <Lightbox
        item={GALLERY[lightbox]}
        index={lightbox}
        total={GALLERY.length}
        onClose={() => setLightbox(null)}
        onPrev={() => setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length)}
        onNext={() => setLightbox((lightbox + 1) % GALLERY.length)} />

      }

      <style>{`
        .glass-hover:hover .masonry-overlay { opacity: 1 !important; }
        @media (max-width: 880px) { .masonry { grid-template-columns: repeat(2, 1fr) !important; grid-auto-rows: 160px !important; } }
        @media (max-width: 480px) { .masonry { grid-template-columns: 1fr !important; } .masonry > * { grid-column: span 1 !important; grid-row: span 1 !important; } }
      `}</style>

      <Footer />
    </div>);

}

function Lightbox({ item, index, total, onClose, onPrev, onNext }) {
  return (
    <div
      role="dialog"
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(28,26,23,0.55)",
        backdropFilter: "blur(28px) saturate(140%)",
        WebkitBackdropFilter: "blur(28px) saturate(140%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 32
      }}>
      
      <button onClick={onClose} style={{
        position: "absolute", top: 24, right: 24, zIndex: 2,
        width: 44, height: 44, borderRadius: "50%",
        background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.9)",
        color: "var(--ink)", fontSize: 18, cursor: "default"
      }}>✕</button>

      <button onClick={(e) => {e.stopPropagation();onPrev();}} style={{
        position: "absolute", top: "50%", left: 32, transform: "translateY(-50%)",
        width: 52, height: 52, borderRadius: "50%",
        background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.9)",
        color: "var(--ink)", fontSize: 20, cursor: "default"
      }}>←</button>
      <button onClick={(e) => {e.stopPropagation();onNext();}} style={{
        position: "absolute", top: "50%", right: 32, transform: "translateY(-50%)",
        width: 52, height: 52, borderRadius: "50%",
        background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.9)",
        color: "var(--ink)", fontSize: 20, cursor: "default"
      }}>→</button>

      <div onClick={(e) => e.stopPropagation()} style={{
        maxWidth: 1100, width: "100%", maxHeight: "85vh",
        display: "flex", flexDirection: "column", gap: 18
      }}>
        <div className="glass" style={{ padding: 0, overflow: "hidden", flexShrink: 0 }}>
          <Photo label={item.label} ratio="16/9" tone={item.tone} style={{ borderRadius: 0 }} />
        </div>
        <div className="glass glass-tinted" style={{ padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 4 }}>{item.area}</div>
            <div style={{ fontSize: 16, fontWeight: 500, fontFamily: "var(--font-serif)" }}>{item.caption}</div>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-mute)", letterSpacing: "0.04em" }}>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>);

}

window.TodayPage = TodayPage;