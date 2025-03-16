import Link from "next/link";
import { BarChart2, Leaf, Upload, LogOut, Bot } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 bg-primary text-primary-foreground p-4 h-full">
      <h1 className="text-2xl font-bold mb-8">SpectraGrow</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="flex items-center space-x-2 p-2 rounded hover:bg-primary/80"
            >
              <LogOut className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/upload"
              className="flex items-center space-x-2 p-2 rounded hover:bg-primary/80"
            >
              <Upload className="w-5 h-5" />
              <span>Upload Data</span>
            </Link>
          </li>
          <li>
            <Link
              href="/analysis"
              className="flex items-center space-x-2 p-2 rounded hover:bg-primary/80"
            >
              <BarChart2 className="w-5 h-5" />
              <span>Analysis</span>
            </Link>
          </li>
          <li>
            <Link
              href="/recommendations"
              className="flex items-center space-x-2 p-2 rounded hover:bg-primary/80"
            >
              <Leaf className="w-5 h-5" />
              <span>Recommendations</span>
            </Link>
            <Link
              href="/chatbot"
              className="flex items-center space-x-2 p-2 rounded hover:bg-primary/80"
            >
              <Bot className="w-5 h-5" />
              <span>ChatBot</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
