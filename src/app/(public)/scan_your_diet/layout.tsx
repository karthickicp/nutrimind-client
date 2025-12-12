import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import React from "react";

export default function ScanDietLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <header className="flex justify-between items-center p-4 md:px-8 border-b border-border/10">
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

            {children}
        </div>
    );
}
