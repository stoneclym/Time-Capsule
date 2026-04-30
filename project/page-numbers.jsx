// By the Numbers — light theme

function NumbersPage() {
  return (
    <div className="page-enter">
      <div className="shell">
        <PageHeader
          eyebrow="Room 04 · Snapshot, spring 2026"
          title={<span>By the <em>numbers</em>.</span>}
          lede="The shape of Hoggard right now, plus the tiny world around it. Some of these will look quaint in a decade. Some won't."
        />

        <SectionLabel n="01" title="The school" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 60 }} className="stat-grid">
          <BigStat value="≈ 2,100" unit="students" label="Total enrollment" tone="primary" />
          <BigStat value="142" unit="faculty" label="Teachers & staff" />
          <BigStat value="1967" unit="est." label="Year founded" />
          <BigStat value="Vikings" unit="" label="Mascot" tone="primary" />

          <FactCard label="Principal" big="Christopher Madden" sub="Hoggard High" wide={2} />
          <FactCard label="School colors" big="Blue & Navy" sub="#5aa4df · #21386c" wide={2}
            extra={<div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "#5aa4df", boxShadow: "0 2px 6px rgba(90,164,223,0.4)" }} />
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "#21386c", boxShadow: "0 2px 6px rgba(33,56,108,0.4)" }} />
            </div>}
          />
        </div>

        <SectionLabel n="02" title="What gets taught" />
        <div className="glass" style={{ padding: "32px 36px", marginBottom: 24 }}>
          <Eyebrow>Course offerings · 2025–26</Eyebrow>
          <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["AP Lit","AP Lang","AP Calc AB","AP Calc BC","AP Bio","AP Chem","AP Physics 1","AP US History",
              "AP World","AP Psych","AP Spanish","AP Art History","IB Diploma","IB English HL","IB Math AA",
              "IB Bio HL","IB History HL","Honors Pre-Calc","Marine Biology","Forensics","Web Design",
              "Digital Photography","Ceramics","Theater II","Wind Ensemble","Latin I–III","ASL",
              "Personal Finance","Sports Marketing","Culinary Arts"
            ].map(c => (
              <span key={c} style={{
                padding: "6px 12px", borderRadius: 999,
                background: "rgba(255,255,255,0.6)",
                border: "1px solid var(--line-strong)",
                fontSize: 12.5, color: "var(--ink-soft)",
              }}>{c}</span>
            ))}
            <span className="slot-label" style={{ alignSelf: "center", margin: 0 }}>+ many more</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 60 }} className="two-col">
          <div className="glass" style={{ padding: "28px 30px" }}>
            <Eyebrow>Active clubs</Eyebrow>
            <h3 style={{ fontSize: "1.4rem", marginTop: 8, letterSpacing: "-0.02em" }}>40+ student-led clubs.</h3>
            <Slot label="Clubs list" hint="National Honor Society, Model UN, Robotics, Key Club, Drama, Environmental, GSA, Speech & Debate, Mock Trial, Anime Club, Chess, Surf Club…" style={{ marginTop: 14 }} />
          </div>
          <div className="glass" style={{ padding: "28px 30px" }}>
            <Eyebrow>Sports teams</Eyebrow>
            <h3 style={{ fontSize: "1.4rem", marginTop: 8, letterSpacing: "-0.02em" }}>22 varsity programs.</h3>
            <Slot label="Sports list" hint="Football, basketball (M/W), soccer (M/W), volleyball, baseball, softball, lacrosse (M/W), tennis (M/W), swimming, track & field, cross country, golf, wrestling, cheer, dance…" style={{ marginTop: 14 }} />
          </div>
        </div>

        <SectionLabel n="03" title="This year, in headlines" />
        <div className="glass" style={{ padding: "32px 36px", marginBottom: 60 }}>
          <Eyebrow>Notable school news · 2025–26</Eyebrow>
          <Slot label="School news bullets" hint="3–6 items. Things that mattered to students this year — championships, controversies, a teacher who retired, a renovation, the senior prank." style={{ marginTop: 14 }} />
        </div>

        <SectionLabel n="04" title="The world outside" sub="A snapshot of spring 2026" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 14 }} className="three-col">
          <FactCard label="Gas (avg, NC)" big="$3.21" sub="per gallon, regular" />
          <FactCard label="Movie ticket" big="$13.50" sub="adult, weekend" />
          <FactCard label="Min. wage (NC)" big="$7.25" sub="federal floor, unchanged" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 14, marginBottom: 14 }} className="two-col">
          <div className="glass glass-tinted" style={{ padding: "28px 32px" }}>
            <Eyebrow>What everyone's holding</Eyebrow>
            <h3 style={{ fontSize: "1.6rem", marginTop: 10, letterSpacing: "-0.02em" }}>iPhone 16 / 16 Pro.</h3>
            <p style={{ marginTop: 8, fontSize: 14 }}>
              Most students are on iPhone. Galaxy S25 in the minority. AirPods Pro everywhere
              — usually one in, one out. Apple Watch on maybe a third of wrists.
            </p>
            <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["TikTok","Instagram","Snapchat","iMessage","Spotify","BeReal (still?)","Duolingo"].map(a => (
                <span key={a} style={{
                  padding: "5px 11px", borderRadius: 999,
                  background: "rgba(255,255,255,0.7)", border: "1px solid var(--line-strong)",
                  fontSize: 11.5, fontFamily: "var(--font-mono)", letterSpacing: "0.02em",
                  color: "var(--ink-soft)",
                }}>{a}</span>
              ))}
            </div>
          </div>

          <FactCard label="In our ears" big="What's playing"
            extra={<Slot label="Top tracks · spring 2026" hint="A handful of the most-played tracks at Hoggard right now." style={{ marginTop: 12 }} />}
            wide={1}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 60 }} className="two-col">
          <div className="glass" style={{ padding: "28px 32px" }}>
            <Eyebrow>National headlines</Eyebrow>
            <Slot label="3–4 headlines from spring 2026" hint="Major news that defines the moment." style={{ marginTop: 12 }} />
          </div>
          <div className="glass" style={{ padding: "28px 32px" }}>
            <Eyebrow>Around Wilmington</Eyebrow>
            <Slot label="Local color" hint="What's new in town. Restaurants, beach day, traffic, that one place that closed." style={{ marginTop: 12 }} />
          </div>
        </div>

        <div className="glass glass-tinted" style={{ padding: "26px 32px", marginBottom: 60 }}>
          <Eyebrow>The thing in the room</Eyebrow>
          <h3 style={{ fontSize: "1.5rem", marginTop: 10, letterSpacing: "-0.02em" }}>AI is, like, a whole thing right now.</h3>
          <p style={{ marginTop: 10, maxWidth: 720 }}>
            Half our teachers are figuring out how to handle ChatGPT in essays. Half our students
            use it on everything. Nobody really knows what it'll have done to school by the time
            you're reading this — but in 2026 it's the topic at every faculty meeting.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .three-col, .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </div>
  );
}

function SectionLabel({ n, title, sub }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginTop: 40, marginBottom: 24, paddingBottom: 14, borderBottom: "1px solid var(--line)" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent-deep)", letterSpacing: "0.06em" }}>§ {n}</span>
      <h2 style={{ fontSize: "1.5rem", letterSpacing: "-0.02em", flex: 1 }}>{title}</h2>
      {sub && <span style={{ fontSize: 12, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>{sub}</span>}
    </div>
  );
}

function BigStat({ value, unit, label, tone }) {
  return (
    <div className={"glass " + (tone === "primary" ? "glass-tinted" : "")} style={{ padding: "26px 24px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 150 }}>
      <Eyebrow>{label}</Eyebrow>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 14 }}>
        <span style={{ fontSize: "2.4rem", fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1, color: "var(--ink)" }}>{value}</span>
        {unit && <span style={{ fontSize: 13, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>{unit}</span>}
      </div>
    </div>
  );
}

function FactCard({ label, big, sub, wide = 1, extra }) {
  return (
    <div className="glass" style={{ padding: "26px 28px", gridColumn: `span ${wide}`, minHeight: 150 }}>
      <Eyebrow>{label}</Eyebrow>
      <div style={{ fontSize: "1.5rem", fontFamily: "var(--font-serif)", fontWeight: 500, letterSpacing: "-0.02em", marginTop: 10, color: "var(--ink)" }}>{big}</div>
      {sub && <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 6, fontFamily: "var(--font-mono)", letterSpacing: "0.02em" }}>{sub}</div>}
      {extra}
    </div>
  );
}

window.NumbersPage = NumbersPage;
