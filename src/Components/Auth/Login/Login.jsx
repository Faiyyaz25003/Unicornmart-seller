// // "use client";
// // import { useState } from "react";
// // import { Mail, Lock, LogIn } from "lucide-react";
// // import axios from "axios";
// // import { useRouter } from "next/navigation";

// // export default function Login() {
// //   const router = useRouter();

// //   const [form, setForm] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await axios.post("http://localhost:5000/api/users/login", {
// //         role: "seller",
// //         ...form,
// //       });

// //       localStorage.setItem("user", JSON.stringify(res.data.user));
// //       alert(res.data.message || "Login Successful");
// //       router.push("/dashboard");
// //     } catch (err) {
// //       alert(err?.response?.data?.message || "Login Failed");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
// //       <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
// //         <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
// //           <LogIn className="text-blue-600" />
// //           Seller Login
// //         </h2>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           {/* Email */}
// //           <div className="flex items-center border rounded-lg">
// //             <Mail className="ml-3 text-gray-400" />
// //             <input
// //               type="email"
// //               name="email"
// //               placeholder="Email Address"
// //               value={form.email}
// //               onChange={handleChange}
// //               className="w-full p-3 focus:outline-none"
// //               required
// //             />
// //           </div>

// //           {/* Password */}
// //           <div className="flex items-center border rounded-lg">
// //             <Lock className="ml-3 text-gray-400" />
// //             <input
// //               type="password"
// //               name="password"
// //               placeholder="Password"
// //               value={form.password}
// //               onChange={handleChange}
// //               className="w-full p-3 focus:outline-none"
// //               required
// //             />
// //           </div>

// //           {/* Submit */}
// //           <button
// //             type="submit"
// //             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
// //           >
// //             Login as SELLER
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }



// "use client";
// import { useState } from "react";
// import {
//   Mail,
//   Lock,
//   LogIn,
//   ShoppingBag,
//   TrendingUp,
//   Package,
// } from "lucide-react";

// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       // Simulated API call - replace with actual implementation
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       const userData = { ...form, role: "seller" };
//       // Note: In production, use secure state management instead of localStorage

//       // Redirect to dashboard
//       window.location.href = "/dashboard";
//     } catch (err) {
//       alert("Login Failed");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 py-8">
//       <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
//         {/* Left Side - Branding */}
//         <div className="hidden lg:block space-y-8 text-gray-800">
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl">
//                 <ShoppingBag className="w-8 h-8 text-white" />
//               </div>
//               <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                 Seller Hub
//               </h1>
//             </div>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               Manage your e-commerce business with powerful tools and insights
//             </p>
//           </div>

//           <div className="space-y-6">
//             <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-gray-200">
//               <div className="bg-blue-100 p-3 rounded-lg">
//                 <TrendingUp className="w-6 h-6 text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg mb-1">
//                   Real-time Analytics
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Track sales, revenue, and customer insights instantly
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-gray-200">
//               <div className="bg-indigo-100 p-3 rounded-lg">
//                 <Package className="w-6 h-6 text-indigo-600" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg mb-1">
//                   Inventory Management
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   Seamlessly manage products, stock, and orders
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-start gap-4 bg-white/60 backdrop-blur-sm p-5 rounded-xl border border-gray-200">
//               <div className="bg-purple-100 p-3 rounded-lg">
//                 <LogIn className="w-6 h-6 text-purple-600" />
//               </div>
//               <div>
//                 <h3 className="font-semibold text-lg mb-1">Secure Access</h3>
//                 <p className="text-gray-600 text-sm">
//                   Enterprise-grade security for your business data
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Login Form */}
//         <div className="w-full">
//           <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
//             <div className="text-center mb-8">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4">
//                 <LogIn className="w-8 h-8 text-white" />
//               </div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-2">
//                 Welcome Back
//               </h2>
//               <p className="text-gray-500">Sign in to your seller account</p>
//             </div>

//             <div className="space-y-5">
//               {/* Email Input */}
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700 pl-1">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="seller@example.com"
//                     value={form.email}
//                     onChange={handleChange}
//                     className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Password Input */}
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-gray-700 pl-1">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="••••••••"
//                     value={form.password}
//                     onChange={handleChange}
//                     className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Remember & Forgot */}
//               <div className="flex items-center justify-between text-sm">
//                 <label className="flex items-center gap-2 cursor-pointer">
//                   <input
//                     type="checkbox"
//                     className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
//                   />
//                   <span className="text-gray-600">Remember me</span>
//                 </label>
//                 <button
//                   type="button"
//                   className="text-blue-600 hover:text-blue-700 font-medium"
//                 >
//                   Forgot password?
//                 </button>
//               </div>

//               {/* Submit Button */}
//               <button
//                 onClick={handleSubmit}
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//               >
//                 {isLoading ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     Signing in...
//                   </>
//                 ) : (
//                   <>
//                     <LogIn className="w-5 h-5" />
//                     Sign in as Seller
//                   </>
//                 )}
//               </button>
//             </div>

//             {/* Divider */}
//             <div className="relative my-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-200"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white text-gray-500">
//                   New to platform?
//                 </span>
//               </div>
//             </div>

//             {/* Sign Up Link */}
//             <button
//               type="button"
//               className="w-full border-2 border-gray-200 text-gray-700 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
//             >
//               Create Seller Account
//             </button>
//           </div>

//           {/* Mobile Branding */}
//           <div className="lg:hidden mt-6 text-center text-sm text-gray-500">
//             <p>
//               Powered by{" "}
//               <span className="font-semibold text-gray-700">Seller Hub</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  LogIn,
  ShoppingBag,
  TrendingUp,
  Package,
} from "lucide-react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle login submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email: form.email,
        password: form.password,
        role: "seller",
      });

      // ✅ SAVE TOKEN & USER
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert(res.data.message || "Login successful");

      window.location.href = "/dashboard";
    } catch (err) {
      alert(err?.response?.data?.message || "Login Failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE */}
        <div className="hidden lg:block space-y-8 text-gray-800">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Seller Hub
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Manage your e-commerce business with powerful tools
            </p>
          </div>

          <div className="space-y-6">
            <Feature
              icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
              title="Real-time Analytics"
              desc="Track sales and revenue instantly"
            />
            <Feature
              icon={<Package className="w-6 h-6 text-indigo-600" />}
              title="Inventory Management"
              desc="Manage products and stock easily"
            />
            <Feature
              icon={<LogIn className="w-6 h-6 text-purple-600" />}
              title="Secure Access"
              desc="Enterprise-grade data security"
            />
          </div>
        </div>

        {/* RIGHT SIDE LOGIN */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4">
              <LogIn className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Seller Login</h2>
            <p className="text-gray-500">Sign in to your seller account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative mt-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seller@gmail.com"
                  required
                  className="w-full pl-12 py-3 border rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-12 py-3 border rounded-xl focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition disabled:opacity-50"
            >
              {isLoading ? "Signing in..." : "Login as Seller"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            New here?{" "}
            <span className="text-blue-600 font-semibold cursor-pointer">
              Create Seller Account
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Feature Component */
function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 bg-white/70 p-5 rounded-xl border">
      <div className="p-3 bg-gray-100 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}
