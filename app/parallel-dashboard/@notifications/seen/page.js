import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="" style={{ border: "2px solid green" }}>
        <h3>Seen Page</h3>
        <Link href="/parallel-dashboard">All</Link>
      </div>
    </>
  );
}
