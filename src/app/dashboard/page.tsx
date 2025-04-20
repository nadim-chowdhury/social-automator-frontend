import CalendarView from "@/components/calender/CalendarView";
import ConnectedAccounts from "@/components/social/ConnectedAccounts";
import ScheduleForm from "@/components/social/ScheduleForm";
// import { getSession } from "@/lib/auth";
// import ScheduleForm from "@/components/social/ScheduleForm";
// import ConnectedAccounts from "@/components/social/ConnectedAccounts";
// import CalendarView from "@/components/calendar/CalendarView";

export default async function Dashboard() {
  // const session = await getSession();

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Social Automator</h1>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* <ScheduleForm userId={session?.user.id} /> */}
            <ScheduleForm userId={"101"} />
            <CalendarView />
          </div>

          <div className="space-y-6">
            <ConnectedAccounts />
          </div>
        </div>
      </main>
    </div>
  );
}
