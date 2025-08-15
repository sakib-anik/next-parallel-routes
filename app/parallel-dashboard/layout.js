export default function DashboardLayout({
  children,
  notifications,
  assignments,
  quizs,
}) {
  const isLoggedIn = true;
  return (
    <>
      {children}
      <div className="">
        {assignments}
        {quizs}
        {isLoggedIn && notifications}
      </div>
    </>
  );
}
