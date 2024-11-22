"use client";

export default function ColumnContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      {children}
    </div>
  );
}
