import wait from "@/lib/wait";
import Link from "next/link";

export default async function page() {
  await wait(8000);
  return (
    <>
      <div className="" style={{ border: "2px solid red" }}>
        <h3>Notification Page</h3>
        <Link href="/parallel-dashboard/seen">Seen</Link>
      </div>
    </>
  );
}
