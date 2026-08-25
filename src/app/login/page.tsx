"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-full flex bg-[#060d10] overflow-hidden font-poppins">
      
      {/* ─── LEFT HALF: IMAGE & BRANDING (Hidden on small screens) ─── */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="HR Core Office" 
            fill 
            className="object-cover object-center opacity-40"
            priority
          />
          {/* Gradient Overlay for a seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d10]/80 via-[#060d10]/40 to-[#060d10]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060d10] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between max-w-xl">
          <Link href="/" className="inline-block mt-4">
            <Image 
              src="/BG-Logo.png" 
              alt="HR Core Logo" 
              width={180} 
              height={60} 
              className="object-contain drop-shadow-2xl"
              priority
            />
          </Link>

          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 tracking-tight">
                Empower your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16a34a] to-[#93d937]">workforce</span> today.
              </h1>
              <p className="text-gray-300 text-lg lg:text-xl max-w-md leading-relaxed">
                Streamline your HR processes, manage payroll, and unlock your team's true potential with HR Core.
              </p>
            </motion.div>

            {/* Glassmorphic Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#16a34a]/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#060d10] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#16a34a] to-[#93d937] text-[#060d10] font-bold text-sm shadow-lg">
                      {["K", "S", "A", "R"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-white text-sm font-medium">Trusted by 10,000+ HR Professionals</p>
                </div>
              </div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 top-[-100px] w-32 h-32 bg-[#16a34a]/20 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 bottom-[-50px] w-48 h-48 bg-[#93d937]/20 rounded-full blur-3xl pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* ─── RIGHT HALF: AUTH FORM ─── */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto relative z-10 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 min-h-max">
        
        {/* Subtle grid background for the form side */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(76,175,104,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(76,175,104,0.1) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-[480px] bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Top glowing accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#16a34a] to-transparent opacity-50" />

          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="text-3xl font-bold text-white mb-2">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-gray-400 text-sm">
              {isLogin ? "Enter your credentials to access your account." : "Join us and simplify your HR management."}
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex bg-white/[0.05] rounded-xl p-1 mb-5 relative">
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#16a34a] rounded-lg shadow-lg transition-transform duration-300 ease-in-out ${isLogin ? "translate-x-0" : "translate-x-[100%]"}`}
            />
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 text-sm font-medium z-10 transition-colors duration-300 ${isLogin ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 text-sm font-medium z-10 transition-colors duration-300 ${!isLogin ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              Sign Up
            </button>
          </div>

          {/* Social Login */}
          <div className="space-y-4 mb-5">
            <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.8 15.72 17.58V20.34H19.29C21.37 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                <path d="M12 23C14.97 23 17.46 22.02 19.29 20.34L15.72 17.58C14.73 18.24 13.47 18.66 12 18.66C9.15 18.66 6.74 16.74 5.86 14.16H2.18V17.02C4.01 20.64 7.7 23 12 23Z" fill="#34A853"/>
                <path d="M5.86 14.16C5.63 13.49 5.5 12.76 5.5 12C5.5 11.24 5.63 10.51 5.86 9.84V6.98H2.18C1.43 8.49 1 10.19 1 12C1 13.81 1.43 15.51 2.18 17.02L5.86 14.16Z" fill="#FBBC05"/>
                <path d="M12 5.34C13.62 5.34 15.07 5.9 16.21 6.99L19.37 3.83C17.45 2.04 14.97 1 12 1C7.7 1 4.01 3.36 2.18 6.98L5.86 9.84C6.74 7.26 9.15 5.34 12 5.34Z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>

          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-[1px] bg-white/[0.1]"></div>
            <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Or continue with</span>
            <div className="flex-1 h-[1px] bg-white/[0.1]"></div>
          </div>

          {/* Form */}
          <AnimatePresence mode="wait">
            <motion.form 
              key={isLogin ? "login" : "signup"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-3.5"
              onSubmit={(e) => e.preventDefault()}
            >
              
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#16a34a] transition-colors">
                      <User size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl py-2.5 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#16a34a] transition-colors">
                      <User size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl py-2.5 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all"
                    />
                  </div>
                </div>
              )}

              {!isLogin && (
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#16a34a] transition-colors">
                    <Phone size={18} />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl py-2.5 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all"
                  />
                </div>
              )}

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#16a34a] transition-colors">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl py-2.5 pl-11 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all"
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-[#16a34a] transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Password" 
                  className="w-full bg-white/[0.03] border border-white/[0.1] rounded-xl py-2.5 pl-11 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <a href="#" className="text-sm text-[#16a34a] hover:text-[#16a34a]/80 transition-colors">
                    Forgot Password?
                  </a>
                </div>
              )}

              <button 
                type="submit"
                className="w-full relative group overflow-hidden bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="relative z-10">{isLogin ? "Sign In" : "Create Account"}</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                {/* Shine effect */}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </button>
            </motion.form>
          </AnimatePresence>

          {/* Bottom text */}
          <p className="mt-5 text-center text-sm text-gray-500">
            By continuing, you agree to our <a href="#" className="text-gray-300 hover:text-white transition-colors underline decoration-gray-600 underline-offset-2">Terms of Service</a> and <a href="#" className="text-gray-300 hover:text-white transition-colors underline decoration-gray-600 underline-offset-2">Privacy Policy</a>.
          </p>

        </motion.div>
        </div>
      </div>

    </div>
  );
}

