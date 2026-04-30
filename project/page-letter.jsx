// Letters to the Future — from students who were here in 2026

function LetterPage() {
  // Each letter is a slot for student-submitted text.
  const LETTERS = [
    { name: "Greyson Clymer", grade: "Junior",    tone: "warm", featured: true },
    { name: "Leah Chitwood",  grade: "Junior",    tone: "rose", featured: true },
    { name: "Anonymous",      grade: "Senior",    tone: "sage" },
    { name: "Anonymous",      grade: "Senior",    tone: "sand" },
    { name: "Anonymous",      grade: "Sophomore", tone: "sky" },
    { name: "Anonymous",      grade: "Freshman",  tone: "warm" },
  ];

  return (
    <div className="page-enter">
      <div className="shell-narrow">
        <header style={{ paddingTop: 160, paddingBottom: 40, textAlign: "center" }}>
          <Eyebrow>Room 06 · Sealed</Eyebrow>
          <h1 className="display" style={{ marginTop: 16, fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}>
            Letters to <em>whoever</em><br/>finds this.
          </h1>
          <p className="lede" style={{ marginTop: 22, maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
            From students who were at Hoggard in the spring of 2026. Some signed,
            some anonymous. They wrote them knowing you might be the only person
            who ever reads them.
          </p>
          <div style={{
            marginTop: 28,
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "8px 18px", borderRadius: 999,
            border: "1px solid rgba(196,106,60,0.3)",
            background: "rgba(196,106,60,0.08)",
            fontSize: 12, color: "var(--accent-deep)",
            fontFamily: "var(--font-mono)", letterSpacing: "0.08em",
          }}>
            <span className="tag-dot" />
            <span>WRITTEN APRIL 2026 · TO BE READ IN 2035</span>
          </div>
        </header>
      </div>

      {/* Featured letters — full-width cards */}
      <div className="shell-narrow" style={{ paddingTop: 24, paddingBottom: 40, display: "flex", flexDirection: "column", gap: 22 }}>
        {LETTERS.filter(l => l.featured).map((letter, i) => (
          <article key={i} className="glass letter-card" style={{
            padding: "52px 56px", borderRadius: 22,
            background: i === 0 ? "var(--glass-fill-strong)" : "var(--glass-fill-tinted)",
          }}>
            <div style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "var(--ink-soft)",
            }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 500, marginBottom: 26, color: "var(--ink)", letterSpacing: "-0.01em" }}>
                Dear reader,
              </div>

              <Slot
                label={`Letter from ${letter.name}`}
                hint="Letter to be pasted in here before sealing."
                style={{ marginBottom: 28, padding: "22px 24px", fontSize: 13 }}
              />

              <div style={{
                marginTop: 30, paddingTop: 24,
                borderTop: "1px solid var(--line)",
                display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 20,
                flexWrap: "wrap",
              }}>
                <div>
                  <div style={{ fontFamily: "var(--font-script)", fontSize: "2rem", color: "var(--ink)", lineHeight: 1 }}>
                    — {letter.name.split(" ")[0]}
                  </div>
                  <div style={{ fontSize: 12.5, color: "var(--ink-mute)", marginTop: 8, fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
                    {letter.name} · {letter.grade} · April 2026
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Other letters — grid of smaller cards */}
      <div className="shell" style={{ paddingTop: 60, paddingBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 24, paddingBottom: 14, borderBottom: "1px solid var(--line)" }}>
          <Eyebrow>And from others</Eyebrow>
          <span style={{ flex: 1 }} />
          <span className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.06em" }}>
            {LETTERS.filter(l => !l.featured).length} more letters
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18,
        }}>
          {LETTERS.filter(l => !l.featured).map((letter, i) => {
            const tints = {
              sage:  "linear-gradient(135deg, #f0f4ea 0%, #e3ecd9 100%)",
              sand:  "linear-gradient(135deg, #faf2dc 0%, #f0e3c0 100%)",
              sky:   "linear-gradient(135deg, #e9f0f6 0%, #d6e2ee 100%)",
              warm:  "linear-gradient(135deg, #faeee0 0%, #f2dcc0 100%)",
              rose:  "linear-gradient(135deg, #f9e6e3 0%, #f0cfc7 100%)",
            };
            return (
              <article key={i} style={{
                padding: "28px 30px",
                borderRadius: 16,
                background: tints[letter.tone] || tints.warm,
                border: "1px solid var(--line-strong)",
                boxShadow: "0 1px 0 rgba(255,255,255,0.7) inset, 0 6px 16px -6px rgba(28,26,23,0.18)",
                display: "flex", flexDirection: "column", gap: 14,
                minHeight: 260,
              }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: 17, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.01em" }}>
                  Dear future,
                </div>
                <Slot label={`From a ${letter.grade.toLowerCase()}`} hint="Letter text to be added." style={{ background: "rgba(255,255,255,0.5)" }} />
                <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "1px solid rgba(28,26,23,0.08)" }}>
                  <div style={{ fontFamily: "var(--font-script)", fontSize: 22, color: "var(--ink)", lineHeight: 1 }}>
                    — {letter.name === "Anonymous" ? "Anon" : letter.name.split(" ")[0]}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 4, fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
                    {letter.name}, {letter.grade}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* The seal */}
      <div className="shell-narrow" style={{ paddingTop: 80, paddingBottom: 60, textAlign: "center" }}>
        <div style={{
          display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 18,
          padding: "40px 60px",
          borderRadius: 24,
          background: "var(--glass-fill-tinted)",
          border: "1px solid rgba(196,106,60,0.25)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.7) inset, 0 12px 30px -10px rgba(196,106,60,0.25)",
        }}>
          <div style={{
            width: 88, height: 88, borderRadius: "50%",
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.5), var(--accent) 50%, var(--accent-deep) 90%)",
            boxShadow: "0 1px 0 rgba(255,255,255,0.4) inset, 0 8px 24px rgba(196,106,60,0.5)",
            border: "1px solid rgba(255,255,255,0.3)",
            display: "grid", placeItems: "center",
            fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 600, color: "#fff",
            letterSpacing: "-0.02em",
          }}>H</div>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--accent-deep)", textTransform: "uppercase", marginBottom: 8 }}>
              Sealed June 2026
            </div>
            <div style={{ fontSize: "1.6rem", fontFamily: "var(--font-serif)", letterSpacing: "-0.02em", fontWeight: 500 }}>
              Don't open until 2035.
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 10, maxWidth: 380 }}>
              Delivered to Principal Christopher Madden, Hoggard High School,
              with one instruction.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .letter-card { padding: 36px 28px !important; }
        }
      `}</style>

      <Footer />
    </div>
  );
}

window.LetterPage = LetterPage;
