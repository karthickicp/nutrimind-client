"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Heart, X, FolderUp, FileText } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

export default function ScanYourDietPage() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            handleFiles(Array.from(e.target.files));
        }
    };

    const handleFiles = (newFiles: File[]) => {
        const validFiles = newFiles.filter(file =>
            ['image/jpeg', 'image/png', 'image/svg+xml', 'application/zip', 'application/x-zip-compressed'].includes(file.type) ||
            file.name.endsWith('.jpg') || file.name.endsWith('.png') || file.name.endsWith('.svg') || file.name.endsWith('.zip')
        );

        if (validFiles.length > 0) {
            setFiles(prev => [...prev, ...validFiles].slice(0, 5)); // Limit to 5 files
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFiles(Array.from(e.dataTransfer.files));
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="flex-1 flex flex-col p-4 md:p-8 relative container mx-auto max-w-7xl">
            
            <div className="flex justify-between items-center mb-8 md:mb-12">
                <Link href="/" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-emerald-500" />
                </Link>
                <Button variant="outline" size="icon" className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 w-10 h-10 md:w-12 md:h-12">
                    <Heart className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
            </div>

           
            <div className="flex-1 flex justify-center items-center pb-10">
                <Card className="w-full max-w-6xl bg-[#1E1E1E] border-none shadow-2xl relative">
                    {files.length === 0 && (
                        <button className="absolute top-4 right-4 text-emerald-500 hover:text-emerald-400 p-2">
                            <X className="w-5 h-5" />
                        </button>
                    )}

                    <CardHeader className="pb-2">
                        <CardTitle className="text-xl font-semibold">Media Upload</CardTitle>
                        <CardDescription className="text-gray-400">
                            Add your documents here, and you can upload up to 5 files max
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="mt-4">
                        <div
                            className={`border-2 border-dashed rounded-lg p-8 md:p-10 flex flex-col items-center justify-center bg-black/20 transition-colors ${isDragging ? 'border-emerald-500 bg-emerald-500/10' : 'border-emerald-500/30'}`}

                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            {files.length > 0 ? (
                                <div className="w-full flex flex-col gap-2">
                                    {files.map((file, i) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-emerald-500/20 p-2 rounded">
                                                    <FileText className="w-5 h-5 text-emerald-500" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-medium truncate max-w-[200px]">{file.name}</span>
                                                    <span className="text-xs text-gray-500">{(file.size / 1024).toFixed(1)} KB</span>
                                                </div>
                                            </div>
                                            <button onClick={() => removeFile(i)} className="text-gray-500 hover:text-red-500 p-2">
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                    {files.length < 5 && (
                                        <Button
                                            variant="ghost"
                                            onClick={triggerFileInput}
                                            className="mt-4 text-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10"
                                        >
                                            + Add more files
                                        </Button>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <div className="bg-emerald-500/10 p-4 rounded-xl mb-6">
                                        <FolderUp className="w-12 h-12 text-emerald-500" />
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-medium mb-6 text-center">
                                        Drag your file(s) to start uploading
                                    </h3>

                                    <div className="flex items-center w-full max-w-xs gap-4 mb-6">
                                        <div className="h-[1px] bg-gray-700 flex-1"></div>
                                        <span className="text-gray-500 uppercase text-sm tracking-wider">OR</span>
                                        <div className="h-[1px] bg-gray-700 flex-1"></div>
                                    </div>

                                    <input
                                        type="file"
                                        className="hidden"
                                        ref={fileInputRef}
                                        onChange={handleFileSelect}
                                        multiple
                                        accept=".jpg,.jpeg,.png,.svg,.zip"
                                    />

                                    <Button
                                        variant="outline"
                                        onClick={triggerFileInput}
                                        className="border-gray-600 text-white hover:bg-white/5 hover:text-emerald-500 px-8 py-2 h-auto text-base font-medium"
                                    >
                                        Browse files
                                    </Button>
                                </>
                            )}
                        </div>
                        <p className="text-xs text-gray-500 mt-4 ml-1">
                            Only support .jpg, .png and .svg and zip files
                        </p>
                    </CardContent>

                    <CardFooter className="flex justify-end gap-3 pt-4">
                        <Button
                            className="bg-white text-black hover:bg-gray-200 border-none px-6 font-medium"
                            onClick={() => setFiles([])}
                        >
                            Cancel
                        </Button>
                        <Link href="/scan_your_diet/results">
                            <Button
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 font-medium"
                                disabled={files.length === 0}
                            >
                                Next
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
