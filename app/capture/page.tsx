"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./capture.module.css";

type Stage = "start" | "recording" | "processing";

const PROC_MESSAGES = [
  "Making sense of what you just heard.",
  "Pulling out the important bits.",
  "Almost ready.",
];

const TAGS = [
  { icon: "⭐", label: "Important", chip: styles.chipCoral, confirm: "Marked." },
  { icon: "❓", label: "Confusing", chip: styles.chipPeri, confirm: "Marked." },
  { icon: "💡", label: "Insight", chip: styles.chipButter, confirm: "Saved." },
  { icon: "🔖", label: "Bookmark", chip: styles.chipSage, confirm: "Bookmarked." },
];

function formatTime(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map((v) => String(v).padStart(2, "0")).join(":");
}

export default function CapturePage() {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>("start");
  const [seconds, setSeconds] = useState(767); // starts at 00:12:47 like the prototype
  const [confirmed, setConfirmed] = useState<number | null>(null);
  const [procIndex, setProcIndex] = useState(0);
  const confirmTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (stage !== "recording") return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [stage]);

  useEffect(() => {
    if (stage !== "processing") return;
    setProcIndex(0);
    const msgId = setInterval(() => {
      setProcIndex((i) => Math.min(i + 1, PROC_MESSAGES.length - 1));
    }, 700);
    const goId = setTimeout(() => router.push("/learning-pack"), 2300);
    return () => {
      clearInterval(msgId);
      clearTimeout(goId);
    };
  }, [stage, router]);

  function handleTag(index: number) {
    setConfirmed(index);
    if (confirmTimer.current) clearTimeout(confirmTimer.current);
    confirmTimer.current = setTimeout(() => setConfirmed(null), 1100);
  }

  const bars = Array.from({ length: 28 });

  return (
    <div className={styles.wrap}>
      {stage !== "processing" && (
        <div className={styles.topbar}>
          {stage === "start" ? (
            <Link href="/" className={styles.backBtn} aria-label="Back home">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M15 18l-6-6 6-6" /></svg>
            </Link>
          ) : (
            <button className={styles.backBtn} aria-label="Back" onClick={() => setStage("start")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
          )}
          <div className={styles.topbarTitle}>
            {stage === "start" ? "New session" : "Recording"}
          </div>
          <div className={styles.topbarSpacer} />
        </div>
      )}

      {stage === "start" && (
        <div className={styles.startBody}>
          <div className={styles.recordRing} onClick={() => setStage("recording")}>
            <div className={styles.recordInner}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="8" /></svg>
            </div>
          </div>
          <div className={styles.startCopy}>Ready when you are.</div>
          <button className={styles.startBtn} onClick={() => setStage("recording")}>
            Start listening
          </button>
          <div className={styles.startFields}>
            <div className={styles.fieldRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h7" /><path d="M18 2l4 4-10 10H8v-4z" /></svg>
              Attach slides / PDF
            </div>
            <div className={styles.fieldRow}>
              📝 Session title · <span style={{ color: "var(--ink-faint)" }}>Untitled session</span>
            </div>
          </div>
        </div>
      )}

      {stage === "recording" && (
        <div className={styles.recScreen}>
          <div className={styles.recTop}>
            <div className={styles.recTitle}>Neural Networks — Lecture 04</div>
            <div className={styles.recTimer}>{formatTime(seconds)}</div>
            <div className={styles.recLive}><span className={styles.recDot} /> Listening</div>
          </div>

          <div className={styles.waveform}>
            {bars.map((_, i) => (
              <div
                key={i}
                className={styles.waveBar}
                style={{
                  height: `${14 + ((i * 37) % 46)}px`,
                  animationDelay: `${(i % 10) * 0.12}s`,
                  animationDuration: `${0.9 + (i % 5) * 0.15}s`,
                }}
              />
            ))}
          </div>

          <div className={styles.tagGrid}>
            {TAGS.map((tag, i) => (
              <div key={tag.label} className={styles.tagBtn} onClick={() => handleTag(i)}>
                <div className={`${styles.tagIconCircle} ${tag.chip}`}>{tag.icon}</div>
                <div className={styles.tagLabel}>{tag.label}</div>
                <div className={`${styles.tagConfirm} ${confirmed === i ? styles.tagConfirmShow : ""}`}>
                  {tag.confirm}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.finishWrap}>
            <button className={styles.finishBtn} onClick={() => setStage("processing")}>
              Finish
            </button>
          </div>
        </div>
      )}

      {stage === "processing" && (
        <div className={styles.procScreen}>
          <div className={styles.procIllo}>
            <div className={styles.procRing} />
            <div className={styles.procEmoji}>🧠</div>
          </div>
          <div className={styles.procText}>{PROC_MESSAGES[procIndex]}</div>
        </div>
      )}
    </div>
  );
}