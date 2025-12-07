"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, MoreVertical, User } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";

export default function AddFamilyMembersPage() {
    return (
        <div className="min-h-screen bg-black text-foreground flex flex-col font-sans">

            <header className="flex justify-between items-center p-4 md:px-8 border-b border-white/10">
                <div className="font-bold text-xl md:text-2xl tracking-wider text-muted-foreground">N</div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                        Share
                    </Button>
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                        <MoreVertical className="w-5 h-5" />
                    </Button>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8 md:px-12 md:py-12 max-w-7xl">

                <div className="flex items-center gap-4 mb-12">
                    <Link href="/" className="hover:bg-white/10 p-2 rounded-full transition-colors">
                        <ArrowLeft className="w-6 h-6 text-emerald-500" />
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-semibold">Add Family Members</h1>
                </div>


                <div className="w-full rounded-tr-3xl rounded-tl-xl overflow-hidden shadow-2xl">

                    <div className="bg-[#9CA3AF] p-4 flex items-center gap-4">
                        <div className="bg-blue-100 p-2 rounded-full">
                            <User className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                            <h2 className="text-black font-bold text-lg leading-tight">Member Details</h2>
                            <p className="text-white text-xs font-medium tracking-wider">COMPULSORY</p>
                        </div>
                    </div>


                    <div className="bg-[#3b3838] p-6 md:p-12 space-y-8 min-h-[500px]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white ml-1">Name</label>
                                <div className="relative">
                                    <Input
                                        type="text"
                                        className="bg-transparent border-gray-500 text-gray-300 h-12 rounded-lg"
                                    />
                                    {/* <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div> */}
                                </div>
                            </div>


                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white ml-1">Age</label>
                                <div className="relative">
                                    <Input
                                        type="number"
                                        className="bg-transparent border-gray-500 text-gray-300 h-12 rounded-lg"
                                    />
                                    {/* <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div> */}
                                </div>
                            </div>


                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white ml-1">Mobile Number</label>
                                <div className="relative">
                                    <Input
                                        type="tel"
                                        className="bg-transparent border-gray-500 text-gray-300 h-12 rounded-lg"
                                    />
                                    {/* <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div> */}
                                </div>
                            </div>
                        </div>


                        <div className="space-y-2 max-w-sm">
                            <label className="text-sm font-medium text-white ml-1">Relation</label>
                            <Input
                                type="text"
                                placeholder="Optional"
                                className="bg-transparent border-gray-500 text-gray-300 h-12 rounded-lg placeholder:text-gray-500"
                            />
                        </div>


                        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16 pt-8">
                            <Button variant="outline" className="border-gray-500 text-white hover:bg-white/5 rounded-full px-8 py-6 h-auto text-base gap-3 min-w-[200px]">
                                <BiShareAlt className="w-5 h-5 rotate-180" />
                                Invite Using OTP
                            </Button>

                            <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-8 py-6 h-auto text-base gap-3 min-w-[200px]">
                                <FaWhatsapp className="w-5 h-5" />
                                Invite Using Whatsapp
                            </Button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
