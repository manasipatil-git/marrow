import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.homeHeader}>
        <div>
          <div className={styles.homeGreeting}>Hey, Manasi 👋</div>
          <div className={styles.homeDate}>Wednesday, September 10</div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.streakChip}>🔥 4</div>
          <div className={styles.searchPill}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </div>
        </div>
      </header>

      <div className={styles.homeScroll}>
        <div className={styles.missionCard}>
          <span className={styles.missionLabel}>Today&apos;s 8-minute mission</span>
          <div className={styles.missionSteps}>
            <div className={styles.missionStep}><span className={styles.missionStepDot} /> 4 min recall</div>
            <div className={styles.missionStep}><span className={styles.missionStepDot} /> 2 min revisit</div>
            <div className={styles.missionStep}><span className={styles.missionStepDot} /> 2 min challenge</div>
          </div>
          <div className={styles.missionGoBtn}>
            Start
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </div>
        </div>

        <div className={styles.continueCard}>
          <div className={styles.continueArrow}>→</div>
          <span className={styles.continueLabel}>Continue where you left off</span>
          <div className={styles.continueTitle}>Neural Networks</div>
          <div className={styles.continueMeta}>🕐 8 min left in your Learning Pack</div>
        </div>

        <div className={styles.sectionLabel}>
          Two things worth revisiting <span className={styles.countBadge}>2</span>
        </div>
        <div className={styles.revisitRow}>
          <div className={styles.revisitCard}>
            <div className={styles.revisitDot} style={{ background: "var(--coral)" }} />
            <div className={styles.revisitTitle}>Backpropagation</div>
            <div className={styles.revisitStatus}>Still a bit fuzzy</div>
          </div>
          <div className={styles.revisitCard}>
            <div className={styles.revisitDot} style={{ background: "var(--sage)" }} />
            <div className={styles.revisitTitle}>Activation functions</div>
            <div className={styles.revisitStatus}>Getting stronger</div>
          </div>
        </div>

        <div className={styles.sectionLabel} style={{ marginTop: "22px" }}>Recent sessions</div>
        <div>
          <div className={styles.sessionRow}>
            <div className={styles.sessionIcon} style={{ background: "var(--peri-tint)" }}>🧠</div>
            <div>
              <div className={styles.sessionTitle}>Neural Networks</div>
              <div className={styles.sessionSub}>Today · 47 min</div>
            </div>
            <div className={styles.sessionChev}>›</div>
          </div>
          <div className={styles.sessionRow}>
            <div className={styles.sessionIcon} style={{ background: "var(--sage-tint)" }}>🗂️</div>
            <div>
              <div className={styles.sessionTitle}>Database Normalization</div>
              <div className={styles.sessionSub}>Yesterday · 38 min</div>
            </div>
            <div className={styles.sessionChev}>›</div>
          </div>
          <div className={styles.sessionRow}>
            <div className={styles.sessionIcon} style={{ background: "var(--butter-tint)" }}>🌐</div>
            <div>
              <div className={styles.sessionTitle}>Computer Networks</div>
              <div className={styles.sessionSub}>Monday · 52 min</div>
            </div>
            <div className={styles.sessionChev}>›</div>
          </div>
          <div className={styles.sessionRow}>
            <div className={styles.sessionIcon} style={{ background: "var(--coral-tint)" }}>⚙️</div>
            <div>
              <div className={styles.sessionTitle}>Operating Systems</div>
              <div className={styles.sessionSub}>Last week · 41 min</div>
            </div>
            <div className={styles.sessionChev}>›</div>
          </div>
        </div>

        <div className={styles.surpriseCard}>
          <span className={styles.surpriseEyebrow}>🎲 Surprise me</span>
          <div className={styles.surpriseBody}>
            You haven&apos;t thought about <b>Database Normalization</b> in 11 days. Still remember it?
          </div>
        </div>
      </div>
    </div>
  );
}