// Student Voices — multi-color sticky notes

const STUDENT_NOTES = [
  { id: 1,  grade: "Senior" },    { id: 2,  grade: "Junior" },
  { id: 3,  grade: "Sophomore" }, { id: 4,  grade: "Senior" },
  { id: 5,  grade: "Freshman" },  { id: 6,  grade: "Junior" },
  { id: 7,  grade: "Senior" },    { id: 8,  grade: "Sophomore" },
  { id: 9,  grade: "Junior" },    { id: 10, grade: "Freshman" },
  { id: 11, grade: "Senior" },    { id: 12, grade: "Sophomore" },
  { id: 13, grade: "Junior" },    { id: 14, grade: "Senior" },
  { id: 15, grade: "Freshman" },  { id: 16, grade: "Junior" },
  { id: 17, grade: "Sophomore" },
];

// Real sticky-note colors
const NOTE_TONES = [
  { name: "yellow", bg: "linear-gradient(135deg, #fff5a8 0%, #fce877 100%)",  ink: "#3d3416", tape: "rgba(255,255,255,0.55)" },
  { name: "pink",   bg: "linear-gradient(135deg, #ffc8d6 0%, #ffa3bb 100%)",  ink: "#4a1f2e", tape: "rgba(255,255,255,0.6)" },
  { name: "green",  bg: "linear-gradient(135deg, #cdebb0 0%, #a6d97e 100%)",  ink: "#1f3914", tape: "rgba(255,255,255,0.55)" },
  { name: "blue",   bg: "linear-gradient(135deg, #b9def0 0%, #8cc1de 100%)",  ink: "#152e3d", tape: "rgba(255,255,255,0.6)" },
  { name: "orange", bg: "linear-gradient(135deg, #ffd5a3 0%, #ffb472 100%)",  ink: "#4a2811", tape: "rgba(255,255,255,0.55)" },
  { name: "lilac",  bg: "linear-gradient(135deg, #dccdf0 0%, #b9a3df 100%)",  ink: "#2d1f4a", tape: "rgba(255,255,255,0.6)" },
];

function VoicesPage({ rotationAmount = 6 }) {
  const seeded = (i, salt = 0) => {
    const x = Math.sin((i + 1) * 9301 + salt * 49297) * 233280;
    return x - Math.floor(x);
  };

  return (
    <div className="page-enter">
      <div className="shell">
        <PageHeader
          eyebrow="Room 01 · Submitted spring 2026"
          title={<span>Student <em>voices</em>.</span>}
          lede="Anonymous notes from Hoggard students, written in April 2026. They wrote them knowing you'd read them."
        />

        <div style={{
          display: "flex", gap: 24, alignItems: "center", marginBottom: 24,
          fontSize: 12.5, color: "var(--ink-mute)",
          fontFamily: "var(--font-mono)", letterSpacing: "0.04em",
        }}>
          <span className="tag"><span className="tag-dot" />17 of 17 collected</span>
        </div>
      </div>

      {/* Wall — corkboard-ish */}
      <div className="shell" style={{ paddingTop: 24, paddingBottom: 60 }}>
        <div style={{
          position: "relative",
          padding: "40px 28px 60px",
          borderRadius: 22,
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.4), transparent 60%), " +
            "radial-gradient(ellipse at 80% 80%, rgba(196,106,60,0.12), transparent 60%), " +
            "linear-gradient(135deg, #d9c39a 0%, #c8a77a 100%)",
          boxShadow:
            "inset 0 0 0 1px rgba(28,26,23,0.08), " +
            "inset 0 0 60px rgba(28,26,23,0.18), " +
            "0 24px 48px -16px rgba(28,26,23,0.25)",
          backgroundSize: "auto, auto, 100% 100%",
        }}>
          {/* cork texture dots */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: 22, pointerEvents: "none",
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(28,26,23,0.06) 0, transparent 2px), " +
              "radial-gradient(circle at 65% 70%, rgba(28,26,23,0.05) 0, transparent 2px), " +
              "radial-gradient(circle at 85% 25%, rgba(28,26,23,0.06) 0, transparent 2px), " +
              "radial-gradient(circle at 35% 80%, rgba(28,26,23,0.05) 0, transparent 2px)",
            backgroundSize: "120px 120px, 90px 90px, 140px 140px, 100px 100px",
          }} />

          <div className="notes-grid" style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "44px 32px",
          }}>
            {STUDENT_NOTES.map((note, i) => {
              const tone = NOTE_TONES[i % NOTE_TONES.length];
              const rot = (seeded(i) - 0.5) * 2 * rotationAmount;
              const yOffset = (seeded(i, 1) - 0.5) * 30;
              const xOffset = (seeded(i, 2) - 0.5) * 20;
              return (
                <StickyNote
                  key={note.id}
                  note={note}
                  tone={tone}
                  rotation={rot}
                  offset={{ x: xOffset, y: yOffset }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .notes-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 720px)  { .notes-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 32px 16px !important; } }
        @media (max-width: 480px)  { .notes-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <Footer />
    </div>
  );
}

function StickyNote({ note, tone, rotation, offset }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg) ${hovered ? "scale(1.05)" : ""}`,
        transition: "transform 0.4s var(--ease)",
        cursor: "default",
        zIndex: hovered ? 10 : 1,
        position: "relative",
      }}
    >
      <div style={{
        background: tone.bg,
        border: "1px solid rgba(28,26,23,0.04)",
        boxShadow: hovered
          ? "0 28px 50px -10px rgba(28,26,23,0.45), 0 1px 0 rgba(255,255,255,0.5) inset"
          : "0 14px 24px -8px rgba(28,26,23,0.35), 0 1px 0 rgba(255,255,255,0.5) inset",
        borderRadius: 3,
        padding: "26px 22px 18px",
        color: tone.ink,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        position: "relative",
      }}>
        {/* Tape */}
        <div style={{
          position: "absolute", top: -10, left: "50%", transform: "translateX(-50%) rotate(-3deg)",
          width: 64, height: 18,
          background: tone.tape,
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.5)",
          boxShadow: "0 2px 4px rgba(28,26,23,0.15)",
        }}/>

        <div style={{
          fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase",
          color: tone.ink, opacity: 0.65, fontWeight: 600,
          fontFamily: "var(--font-mono)",
        }}>
          #{String(note.id).padStart(2, "0")} · {note.grade}
        </div>

        <div style={{
          fontFamily: "var(--font-script)",
          fontSize: 22, lineHeight: 1.3,
          flex: 1,
          color: tone.ink,
        }}>
          <em style={{
            opacity: 0.55, fontStyle: "normal",
            fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.02em",
          }}>
            [submission #{note.id} — handwritten response]
          </em>
        </div>

        <div style={{
          fontSize: 10.5, fontFamily: "var(--font-mono)",
          color: tone.ink, opacity: 0.55, letterSpacing: "0.04em",
          paddingTop: 6, borderTop: "1px solid rgba(28,26,23,0.10)",
        }}>
          April 2026
        </div>
      </div>
    </div>
  );
}

window.VoicesPage = VoicesPage;
