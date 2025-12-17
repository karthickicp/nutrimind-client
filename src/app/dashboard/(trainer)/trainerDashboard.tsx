"use client";

import {
  //   Download,
  //   Plus,
  Video,
  CheckCircle,
  Share2,
  Calendar,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function TrainerDashboard() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* ================= HEADER ================= */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">
              Good morning, Alex! <span>👋</span>
            </h1>
            <p className="text-white/60 mt-1">
              Here&apos;s what&apos;s happening with your clients today.
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="btn-outline-primary">
              Export Report
            </Button>
            <Button className="btn-primary">Add Client</Button>
          </div>
        </header>

        {/* ================= STATS ================= */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Total Clients",
              value: "24",
              sub: "+2 from last month",
            },
            {
              title: "Active Plans",
              value: "18",
              sub: "+12% completion rate",
            },
            {
              title: "Upcoming Sessions",
              value: "8",
              sub: "Next: Sarah J. at 10:00",
            },
            {
              title: "Pending Reviews",
              value: "3",
              sub: "Meal logs require approval",
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#4c4949] rounded-xl p-5">
              <p className="text-sm text-white/70">{item.title}</p>
              <h2 className="text-3xl font-semibold mt-2">{item.value}</h2>
              <p className="text-sm text-emerald-400 mt-1">{item.sub}</p>
            </div>
          ))}
        </section>

        {/* ================= MAIN GRID ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* --------- LEFT: SCHEDULE --------- */}
          <div className="lg:col-span-2 bg-[#4c4949] rounded-xl p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Today&apos;s Schedule</h3>
              <p className="text-white/60 text-sm">
                You have 4 sessions remaining today.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  time: "10:00 AM",
                  title: "Nutrition Consultation",
                  name: "Sarah Jenkins",
                  badge: "Video Call",
                  badgeColor: "bg-blue-500/20 text-blue-400",
                  icon: <Video size={14} />,
                },
                {
                  time: "11:30 AM",
                  title: "HIIT Workout Review",
                  name: "Mike Ross",
                  badge: "In Person",
                  badgeColor: "bg-orange-500/20 text-orange-400",
                },
                {
                  time: "02:00 PM",
                  title: "Weekly Check-in",
                  name: "Emma Watson",
                  badge: "Completed",
                  badgeColor: "bg-emerald-500/20 text-emerald-400",
                  icon: <CheckCircle size={14} />,
                },
              ].map((session, idx) => (
                <div key={idx} className="flex gap-4">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <span className="text-sm text-white/60">
                      {session.time}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2" />
                    <div className="flex-1 w-px bg-white/20" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 border border-white/20 rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{session.title}</h4>
                      <p className="text-sm text-white/60 mt-1">
                        {session.name}
                      </p>
                    </div>

                    <span
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs ${session.badgeColor}`}
                    >
                      {session.icon}
                      {session.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --------- RIGHT COLUMN --------- */}
          <div className="space-y-6">
            {/* Client Attention */}
            <div className="bg-[#4c4949] rounded-xl p-5">
              <h4 className="font-semibold mb-4">Client Attention Needed</h4>

              <div className="space-y-4">
                {[
                  {
                    title: "Meal Plan Missed",
                    desc: "John D. hasn't logged lunch for 2 days.",
                    action: "Remind",
                    color: "bg-red-500",
                  },
                  {
                    title: "Plan Expiring Soon",
                    desc: "Lisa's Keto plan ends in 3 days.",
                    action: "Renew",
                    color: "bg-yellow-400",
                  },
                  {
                    title: "New Message",
                    desc: `"Can I swap the avocado?" – Tom`,
                    action: "Reply",
                    color: "bg-blue-400",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex justify-between items-start"
                  >
                    <div className="flex gap-3">
                      <span
                        className={`w-2 h-2 mt-2 rounded-full ${item.color}`}
                      />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-white/60">{item.desc}</p>
                      </div>
                    </div>
                    <button className="text-emerald-400 text-sm">
                      {item.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#4c4949] rounded-xl p-4 flex items-center gap-3 cursor-pointer">
                <Share2 />
                <div>
                  <p className="font-medium">Invite Client</p>
                  <p className="text-sm text-white/60">Send email invite</p>
                </div>
              </div>

              <div className="bg-[#4c4949] rounded-xl p-4 flex items-center gap-3 cursor-pointer">
                <Calendar />
                <div>
                  <p className="font-medium">Create Plan</p>
                  <p className="text-sm text-white/60">Meal or workout</p>
                </div>
              </div>
            </div>

            {/* Community Wins */}
            <div className="bg-[#4c4949] rounded-xl p-5">
              <h4 className="font-semibold mb-4">Community Wins</h4>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500" />
                <div>
                  <p className="font-medium">David M. hit 5k goal!</p>
                  <p className="text-sm text-white/60">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
