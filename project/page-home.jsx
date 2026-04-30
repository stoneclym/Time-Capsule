// Home page — six rooms to wander through

function HomePage({ setPage }) {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="shell" style={{ paddingTop: 140, paddingBottom: 60 }}>
        <div className="tag" style={{ marginBottom: 28 }}>
          <span className="tag-dot" />
          <span>Sealed April 2026 · For 2035</span>
        </div>

        <h1 className="display" style={{ maxWidth: "16ch" }}>
          A small <em>house</em><br />built to wait ten years.
        </h1>

        <p className="lede" style={{ maxWidth: 640, marginTop: 28 }}>Hoggard High School in the spring of 2026.  Its halls, its people, the things we'll forget. We made a digital time capsule with six rooms inside. Wander through them in any order. There's no rush, you've already waited a decade.



        </p>

        <div className="row-wrap" style={{ marginTop: 36 }}>
          <button className="btn btn-primary" onClick={() => setPage("voices")}>
            Start wandering
            <span style={{ opacity: 0.7 }}>→</span>
          </button>
        </div>
      </section>

      {/* The 6 rooms */}
      <section className="shell" style={{ paddingTop: 60, paddingBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 28, paddingBottom: 14, borderBottom: "1px solid var(--line)" }}>
          <Eyebrow>The six rooms</Eyebrow>
          <span style={{ flex: 1 }} />
          <span className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em" }}>
            click any door
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 22
        }}>
          {[
          { id: "voices", label: "Student Voices", meta: "17 sticky notes", tone: "warm", desc: "Anonymous notes, written by hand and posted to a wall. What we wanted you to know." },
          { id: "teachers", label: "Teacher Interviews", meta: "17 sticky notes", tone: "sage", desc: "Six teachers, on camera, answering a few of the same questions." },
          { id: "today", label: "School Today", meta: "Photo gallery", tone: "sky", desc: "What every hallway, classroom, and corner of the building looks like." },
          { id: "numbers", label: "By the Numbers", meta: "Stats & culture", tone: "sand", desc: "Enrollment, gas prices, what's on the radio. The trivia of being alive in 2026." },
          { id: "yearbook", label: "The Yearbook", meta: "Quotes & superlatives", tone: "rose", desc: "Senior quotes, class superlatives, and a few signature pages." },
          { id: "letter", label: "Letters to the Future", meta: "From students like us", tone: "warm", desc: "Letters written to whoever's reading, by students who were here in 2026." }].
          map((card, i) =>
          <button
            key={card.id}
            onClick={() => setPage(card.id)}
            className="glass glass-hover"
            style={{
              padding: 0, textAlign: "left", border: "1px solid var(--glass-border)",
              cursor: "default", color: "inherit", font: "inherit",
              display: "flex", flexDirection: "column"
            }}>
            
              <Photo label={`room-${i + 1}.jpg`} ratio="4/3" tone={card.tone} style={{ borderRadius: 0 }} />
              <div style={{ padding: "22px 24px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, marginBottom: 10 }}>
                  <h3 style={{ fontSize: "1.4rem", fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.015em" }}>{card.label}</h3>
                  <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 10.5,
                  color: "var(--accent-deep)", letterSpacing: "0.08em"
                }}>
                    Room 0{i + 1}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                  {card.desc}
                </p>
                <div style={{
                marginTop: 18, paddingTop: 14,
                borderTop: "1px solid var(--line)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                fontSize: 12, color: "var(--ink-mute)",
                fontFamily: "var(--font-mono)", letterSpacing: "0.04em"
              }}>
                  <span>{card.meta}</span>
                  <span style={{ color: "var(--accent-deep)" }}>open →</span>
                </div>
              </div>
            </button>
          )}
        </div>
      </section>

      {/* Note from creators */}
      <section className="shell-narrow" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <div className="glass glass-tinted" style={{ padding: "40px 48px" }}>
          <Eyebrow>A note from us</Eyebrow>
          <Slot
            label="Homepage intro from Greyson & Leah"
            hint="Short paragraph. Why we built this, what we hope you feel reading it."
            style={{ marginTop: 18 }} />
          
          <div style={{
            marginTop: 22, display: "flex", alignItems: "center", gap: 14,
            fontSize: 13, color: "var(--ink-mute)"
          }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#e8a07a,#8a3d1a)", border: "2px solid var(--paper)" }} />
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#97a98a,#4a6048)", border: "2px solid var(--paper)", marginLeft: -10 }} />
            </div>
            <div>
              <div style={{ color: "var(--ink)", fontWeight: 500, fontFamily: "var(--font-serif)", fontSize: 15 }}>Greyson Clymer &amp; Leah Chitwood</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, marginTop: 2, letterSpacing: "0.04em" }}>
                IB CAS · Class of 2027
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

}

window.HomePage = HomePage;