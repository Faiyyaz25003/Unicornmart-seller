"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bell,
  Search,
  User,
  ChevronDown,
  Settings,
  LogOut,
  UserPlus,
  CalendarCheck,
} from "lucide-react";

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeView, setActiveView] = useState(null);

  // 👉 USER STATE
  const [user, setUser] = useState({
    name: "",
    role: "",
  });

  // 🔹 GET USER FROM LOCALSTORAGE
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-dropdown")) setIsProfileOpen(false);
      if (!e.target.closest(".notification-dropdown"))
        setIsNotificationOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const notifications = [
    {
      id: 1,
      title: "New Assignment",
      message: "Math homework due tomorrow",
      time: "5 min ago",
    },
  ];

  const toggleView = (view) => {
    setActiveView((prev) => (prev === view ? null : view));
  };

  // 🔹 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 lg:left-80 z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1e7a8c]/95 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-r from-[#1e7a8c] to-[#2596ad]"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* SEARCH */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-full pl-14 pr-6 py-3 bg-white/10 border border-white/20 text-white rounded-2xl focus:outline-none"
                />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3">
              {/* Seller ke liye hi Register icon */}
              {user.role === "seller" && (
                <button
                  onClick={() => toggleView("register")}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center"
                >
                  <UserPlus className="text-white" size={20} />
                </button>
              )}

              <button
                onClick={() => toggleView("calendar")}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center"
              >
                <CalendarCheck className="text-white" size={20} />
              </button>

              {/* NOTIFICATION */}
              <div className="relative notification-dropdown">
                <button
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="relative w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center"
                >
                  <Bell className="text-white" size={20} />
                </button>
              </div>

              {/* PROFILE */}
              <div className="relative profile-dropdown">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 text-white"
                >
                  <User size={20} />
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-semibold">
                      {user.name || "Guest"}
                    </p>
                    <p className="text-xs text-white/70 capitalize">
                      {user.role || "user"}
                    </p>
                  </div>
                  <ChevronDown size={16} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl">
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                    >
                      <User size={18} /> My Profile
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                    >
                      <Settings size={18} /> Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
