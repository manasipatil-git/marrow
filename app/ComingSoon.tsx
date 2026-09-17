type ComingSoonProps = {
  title: string;
  note: string;
};

export default function ComingSoon({ title, note }: ComingSoonProps) {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          fontFamily: "var(--font-hand)",
          fontSize: "34px",
          fontWeight: 700,
          color: "var(--ink)",
          marginBottom: "10px",
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: "14px",
          color: "var(--ink-soft)",
          maxWidth: "360px",
          lineHeight: 1.6,
        }}
      >
        {note}
      </p>
    </div>
  );
}