import wait from "@/lib/wait";

export default async function page() {
  await wait(12000);
  throw new Error("Never Mind");
  return <h3>Quiz Page</h3>;
}
