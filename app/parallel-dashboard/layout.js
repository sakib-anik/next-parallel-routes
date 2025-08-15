export default function DashboardLayout({
  children,
  notifications,
  assignments,
  quizs,
}) {
  return (
    <>
      {children}
      <div className="">
        {assignments}
        {quizs}
        {notifications}
      </div>
    </>
  );
}
