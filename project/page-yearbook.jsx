// The Yearbook — senior superlatives, class quotes, signature pages

const SUPERLATIVES = [
  { award: "Most Likely to Succeed",        winners: ["—", "—"] },
  { award: "Best Smile",                    winners: ["—", "—"] },
  { award: "Class Clown",                   winners: ["—", "—"] },
  { award: "Most Athletic",                 winners: ["—", "—"] },
  { award: "Most Artistic",                 winners: ["—", "—"] },
  { award: "Most Likely to be Famous",      winners: ["—", "—"] },
  { award: "Best Dressed",                  winners: ["—", "—"] },
  { award: "Most School Spirit",            winners: ["—", "—"] },
];

const SENIOR_QUOTES = Array.from({ length: 9 }, (_, i) => ({ id: i + 1 }));

function YearbookPage() {
  return (
    <div className="page-enter">
      <div className="shell">
        <PageHeader
          eyebrow="Room 05 · Class of 2026"
          title={<span>The <em>yearbook</em>.</span>}
          lede="Senior superlatives, the quotes seniors picked to sit under their portraits, and a few signature pages. The most of-its-moment thing in the building."
        />

        {/* Cover plate */}
        <div className="glass glass-tinted" style={{
          padding: "40px 44px", marginBottom: 48,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 32, flexWrap: "wrap",
        }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--accent-deep)", textTransform: "uppercase", marginBottom: 10 }}>
              The Hoggard Reflections · Volume 59
            </div>
            <h2 style={{ fontSize: "2.4rem", fontFamily: "var(--font-serif)", letterSpacing: "-0.025em", lineHeight: 1.0 }}>
              Class of <em style={{ color: "var(--accent-deep)" }}>2026</em>.
            </h2>
            <div style={{ marginTop: 10, fontSize: 14, color: "var(--ink-soft)" }}>
              Wilmington, North Carolina · 504 graduating seniors
            </div>
          </div>
          <div style={{
            width: 96, height: 96, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--accent-deep))",
            display: "grid", placeItems: "center",
            color: "#fff", fontFamily: "var(--font-serif)", fontSize: 38, fontWeight: 600,
            boxShadow: "0 1px 0 rgba(255,255,255,0.4) inset, 0 8px 24px rgba(196,106,60,0.4)",
            letterSpacing: "-0.02em",
          }}>'26</div>
        </div>

        {/* Superlatives */}
        <SectionLabel n="01" title="Senior superlatives" sub="Voted by the class" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 14,
          marginBottom: 60,
        }}>
          {SUPERLATIVES.map((s, i) => {
            const tones = ["warm", "rose", "sage", "sand", "sky"];
            return (
              <div key={i} className="glass" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
                  <Photo label={`superlative-${i+1}-a.jpg`} ratio="1/1" tone={tones[i % tones.length]} style={{ borderRadius: 0 }} />
                  <Photo label={`superlative-${i+1}-b.jpg`} ratio="1/1" tone={tones[(i+2) % tones.length]} style={{ borderRadius: 0 }} />
                </div>
                <div style={{ padding: "18px 20px 20px" }}>
                  <Eyebrow>{s.award}</Eyebrow>
                  <div style={{ marginTop: 10, fontSize: 15, fontFamily: "var(--font-serif)", color: "var(--ink)", lineHeight: 1.4 }}>
                    {s.winners[0]} <span style={{ color: "var(--ink-faint)" }}>&amp;</span> {s.winners[1]}
                  </div>
                  <div style={{ marginTop: 4, fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.04em", color: "var(--ink-mute)" }}>
                    [winners pending]
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Senior quotes */}
        <SectionLabel n="02" title="Quotes under the portraits" sub="A handful of seniors" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
          marginBottom: 60,
        }}>
          {SENIOR_QUOTES.map((q, i) => {
            const tones = ["warm", "sage", "rose", "sand", "sky"];
            return (
              <div key={q.id} className="glass" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
                <Photo label={`senior-${q.id}.jpg`} ratio="3/4" tone={tones[i % tones.length]} style={{ borderRadius: 0 }} />
                <div style={{ padding: "18px 20px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                  <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.06em", color: "var(--accent-deep)" }}>
                    Senior #{String(q.id).padStart(2, "0")}
                  </div>
                  <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.5, flex: 1 }}>
                    "<span style={{ color: "var(--ink-faint)", fontStyle: "normal", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.02em" }}>
                      [senior quote — to be added]
                    </span>"
                  </div>
                  <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--ink-mute)", letterSpacing: "0.04em", paddingTop: 8, borderTop: "1px solid var(--line)" }}>
                    — Name, heading to ___
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Signature pages */}
        <SectionLabel n="03" title="The signature pages" sub="Back of the book" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 60,
        }} className="sig-grid">
          {[1, 2].map(p => (
            <div key={p} style={{
              position: "relative",
              padding: "40px 36px",
              borderRadius: 8,
              background: "linear-gradient(180deg, #fdfaf0 0%, #f4ecd8 100%)",
              border: "1px solid var(--line-strong)",
              boxShadow: "0 1px 0 rgba(255,255,255,0.7) inset, 0 12px 30px -12px rgba(28,26,23,0.18)",
              minHeight: 380,
              backgroundImage:
                "repeating-linear-gradient(180deg, transparent 0, transparent 31px, rgba(74,127,191,0.18) 31px, rgba(74,127,191,0.18) 32px)",
              backgroundPosition: "0 24px",
            }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink-mute)", marginBottom: 18 }}>
                Signatures · Page {p}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-script)", fontSize: 22, color: "var(--ink-soft)", lineHeight: 1.45 }}>
                <div style={{ transform: "rotate(-2deg)", color: "#1f3358" }}>HAGS! Stay sweet — M.</div>
                <div style={{ transform: "rotate(1deg)", color: "#8a3d1a", marginLeft: 40 }}>never change ❤ — bestie</div>
                <div style={{ transform: "rotate(-1.5deg)", color: "#2d5a3a" }}>2026 was OUR year</div>
                <div style={{ transform: "rotate(0.5deg)", marginLeft: 80, color: "#4a2811" }}>see u at the reunion 📸</div>
                <div style={{ transform: "rotate(-3deg)", color: "#4a1f2e", marginLeft: 20 }}>thx for the notes in chem</div>
                <div style={{ transform: "rotate(2deg)", color: "#1f3358", marginLeft: 100 }}>Vikings forever ⚔</div>
                <div style={{ color: "var(--ink-faint)", fontSize: 13, fontFamily: "var(--font-mono)", letterSpacing: "0.04em", marginTop: 16 }}>
                  [example signatures shown — final scans to replace]
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Senior wills slot */}
        <div className="glass" style={{ padding: "32px 36px", marginBottom: 60 }}>
          <Eyebrow>Senior wills</Eyebrow>
          <h3 style={{ fontSize: "1.5rem", marginTop: 10, letterSpacing: "-0.02em" }}>
            What we leave behind.
          </h3>
          <Slot
            label="Senior wills · selection"
            hint="A handful of the funniest or sweetest senior wills from the 2026 yearbook. To be transcribed."
            style={{ marginTop: 14 }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) { .sig-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <Footer />
    </div>
  );
}

window.YearbookPage = YearbookPage;
