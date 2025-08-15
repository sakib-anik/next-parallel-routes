import wait from "@/lib/wait";

export default async function page() {
  await wait(8000);
  return <h3>Notification Page</h3>;
}
