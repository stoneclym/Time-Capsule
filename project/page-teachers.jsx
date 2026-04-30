// Teacher Interviews — questions list + per-teacher subset

const INTERVIEW_QUESTIONS = [
  "Do you see yourself still teaching at Hoggard in 10 years? Why or why not?",
  "What do you think Hoggard will look like in 10 years — physically, culturally, academically?",
  "What is one thing you hope stays exactly the same about this school?",
  "What is one thing you hope has changed?",
  "Do you think the way teachers teach will look different in 10 years? How?",
  "What is one piece of advice you would give to a Hoggard student watching this in 2035?",
  "What do you think students today take for granted that they might miss later?",
];

const TEACHERS = [
  { id: 1, slot: "Faculty A", subject: "English",     date: "April 2026", format: "video",      asked: [0, 2, 3, 5] },
  { id: 2, slot: "Faculty B", subject: "Mathematics", date: "April 2026", format: "transcript", asked: [1, 4, 5] },
  { id: 3, slot: "Faculty C", subject: "History",     date: "April 2026", format: "video",      asked: [0, 1, 3, 6] },
  { id: 4, slot: "Faculty D", subject: "Biology",     date: "April 2026", format: "transcript", asked: [2, 4, 5, 6] },
  { id: 5, slot: "Faculty E", subject: "Spanish",     date: "April 2026", format: "video",      asked: [0, 5, 6] },
  { id: 6, slot: "Faculty F", subject: "Art",         date: "April 2026", format: "transcript", asked: [1, 2, 3] },
];

function TeachersPage() {
  const [selected, setSelected] = React.useState(0);
  const teacher = TEACHERS[selected];

  return (
    <div className="page-enter">
      <div className="shell">
        <PageHeader
          eyebrow="Room 02 · Filmed April 2026"
          title={<span>Teacher <em>interviews</em>.</span>}
          lede="Six teachers, each asked a few of these questions on camera. We didn't ask everyone everything — these are honest conversations, not a survey."
        />

        <div className="row-wrap" style={{ marginBottom: 32, gap: 10 }}>
          {TEACHERS.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setSelected(i)}
              className={"btn " + (i === selected ? "btn-primary" : "btn-ghost")}
              style={{ fontSize: 13, padding: "10px 18px" }}
            >
              {t.slot} · {t.subject}
            </button>
          ))}
        </div>

        <div className="glass" style={{ padding: 0, overflow: "hidden", marginBottom: 60 }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(260px, 320px) 2fr", gap: 0, alignItems: "stretch" }} className="teacher-grid">
            <div style={{ position: "relative", borderRight: "1px solid var(--line)", padding: 24, display: "flex", flexDirection: "column", gap: 18, background: "rgba(255,255,255,0.4)" }}>
              <Photo label={`${teacher.slot.toLowerCase().replace(' ', '-')}.jpg — portrait`} ratio="4/5"
                tone={["warm","sage","sky","sand","rose","warm"][selected]}
                style={{ width: "100%" }} />
              <div>
                <div className="eyebrow" style={{ marginBottom: 8 }}>{teacher.subject}</div>
                <h2 style={{ fontSize: "1.5rem", letterSpacing: "-0.02em", marginBottom: 10 }}>
                  {teacher.slot}
                </h2>
                <div style={{ fontSize: 12, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em", lineHeight: 1.6 }}>
                  Interviewed · {teacher.date}<br />
                  {teacher.asked.length} of 7 questions answered
                </div>
              </div>
            </div>

            <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", gap: 22 }}>
              {teacher.format === "video" && (
                <div className="glass glass-strong" style={{ padding: 0, overflow: "hidden" }}>
                  <div style={{ position: "relative", aspectRatio: "16/9", background: "#000" }}>
                    <Photo label={`${teacher.slot.toLowerCase().replace(' ', '-')}-still.jpg`} ratio="auto"
                      tone="warm"
                      style={{ position: "absolute", inset: 0, height: "100%", borderRadius: 0 }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(28,26,23,0.25)" }} />
                    <button style={{
                      position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                      width: 76, height: 76, borderRadius: "50%",
                      background: "rgba(255,255,255,0.85)",
                      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.9)",
                      boxShadow: "0 6px 20px rgba(28,26,23,0.3)",
                      color: "var(--ink)", fontSize: 22, cursor: "default",
                      display: "grid", placeItems: "center",
                    }}>▶</button>
                    <div style={{
                      position: "absolute", bottom: 12, left: 12, right: 12,
                      padding: "10px 14px", borderRadius: 10,
                      background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.9)",
                      display: "flex", alignItems: "center", gap: 12,
                      fontSize: 11.5, color: "var(--ink-soft)", fontFamily: "var(--font-mono)",
                    }}>
                      <span>00:00</span>
                      <div style={{ flex: 1, height: 2, background: "rgba(28,26,23,0.15)", borderRadius: 1 }}>
                        <div style={{ width: "0%", height: "100%", background: "var(--accent)", borderRadius: 1 }} />
                      </div>
                      <span>—:—</span>
                    </div>
                  </div>
                </div>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <Eyebrow>{teacher.format === "video" ? "Transcript excerpt" : "Written Q&A"}</Eyebrow>
                {teacher.asked.map((qi) => (
                  <div key={qi} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{
                      fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "var(--accent-deep)", fontWeight: 600,
                      fontFamily: "var(--font-mono)",
                    }}>
                      Q{qi + 1}
                    </div>
                    <div style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.45, fontWeight: 500, fontFamily: "var(--font-serif)" }}>
                      {INTERVIEW_QUESTIONS[qi]}
                    </div>
                    <Slot
                      label={`A · ${teacher.slot}`}
                      hint="Response to be added after interview is transcribed."
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ paddingBottom: 40 }}>
          <Eyebrow>The seven questions</Eyebrow>
          <h3 style={{ fontSize: "1.6rem", marginTop: 12, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Our full list — not every teacher answered every one.
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 14,
          }}>
            {INTERVIEW_QUESTIONS.map((q, i) => {
              const askedCount = TEACHERS.filter(t => t.asked.includes(i)).length;
              return (
                <div key={i} className="glass" style={{ padding: "20px 22px" }}>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "baseline",
                    marginBottom: 10,
                  }}>
                    <div style={{
                      fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "var(--accent-deep)", fontWeight: 600,
                      fontFamily: "var(--font-mono)",
                    }}>Q{i + 1}</div>
                    <div style={{ fontSize: 10.5, fontFamily: "var(--font-mono)", color: "var(--ink-mute)", letterSpacing: "0.04em" }}>
                      {askedCount}/6 answered
                    </div>
                  </div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "var(--ink)", fontFamily: "var(--font-serif)" }}>
                    {q}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .teacher-grid { grid-template-columns: 1fr !important; }
          .teacher-grid > div:first-child { border-right: none !important; border-bottom: 1px solid var(--line) !important; }
        }
      `}</style>

      <Footer />
    </div>
  );
}

window.TeachersPage = TeachersPage;
