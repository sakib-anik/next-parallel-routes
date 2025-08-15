import wait from "@/lib/wait";

export default async function page() {
  await wait(5000);
  return <h3>Assignment Page</h3>;
}
