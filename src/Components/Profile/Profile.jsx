"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  Store,
  Briefcase,
  Calendar,
  Shield,
  LogOut,
  Edit,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.push("/login");
      return;
    }

    const loggedUser = JSON.parse(storedUser);

    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/users/${loggedUser._id}`
        );
        setUser(res.data);
      } catch (err) {
        console.error("Profile fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <p className="text-gray-600 text-lg">No user found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-2xl p-6 mb-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full -mr-24 -mt-24"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16"></div>

          <div className="relative flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <User className="w-10 h-10 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
                <p className="text-white text-opacity-90 text-sm mb-2">
                  {user.role === "seller" ? "Seller Account" : "Buyer Account"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-indigo-600" />
              </div>
              Personal Information
            </h2>
            <div className="space-y-4">
              <InfoCard
                label="Full Name"
                value={user.name}
                icon={<User className="w-5 h-5 text-gray-400" />}
              />
              <InfoCard
                label="Email Address"
                value={user.email}
                icon={<Mail className="w-5 h-5 text-gray-400" />}
              />
              <InfoCard
                label="Phone Number"
                value={user.phone}
                icon={<Phone className="w-5 h-5 text-gray-400" />}
              />
            </div>
          </div>

          {/* Business Information (for sellers) */}
          {user.role === "seller" && (
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Store className="w-5 h-5 text-purple-600" />
                </div>
                Business Details
              </h2>
              <div className="space-y-4">
                <InfoCard
                  label="Shop Name"
                  value={user.shopName}
                  icon={<Store className="w-5 h-5 text-gray-400" />}
                />
                <InfoCard
                  label="Business Type"
                  value={user.businessType}
                  icon={<Briefcase className="w-5 h-5 text-gray-400" />}
                />
                <InfoCard
                  label="GST Number"
                  value={user.gstNumber}
                  icon={<Shield className="w-5 h-5 text-gray-400" />}
                />
                <InfoCard
                  label="Member Since"
                  value={
                    user.joinDate
                      ? new Date(user.joinDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "-"
                  }
                  icon={<Calendar className="w-5 h-5 text-gray-400" />}
                />
              </div>
            </div>
          )}

          {/* Account Stats (if not seller or to fill space) */}
          {user.role !== "seller" && (
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
                Account Information
              </h2>
              <div className="space-y-4">
                <InfoCard
                  label="Member Since"
                  value={
                    user.joinDate
                      ? new Date(user.joinDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "-"
                  }
                  icon={<Calendar className="w-5 h-5 text-gray-400" />}
                />
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Account Status</p>
                  <p className="text-lg font-semibold text-green-600">Active</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value, icon }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
      <div className="mt-0.5 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-0.5">{label}</p>
        <p className="text-gray-900 font-medium">{value}</p>
      </div>
    </div>
  );
}
