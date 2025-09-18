import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
          <Link href="/" style={{ marginRight: "1rem" }}>Главная</Link>
          <Link href="/portfolio" style={{ marginRight: "1rem" }}>Портфолио</Link>
          <Link href="/contact">Контакты</Link>
        </nav>
        <main style={{ padding: "1rem" }}>{children}</main>
      </body>
    </html>
  );
}