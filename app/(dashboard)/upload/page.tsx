"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function UploadData() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setUploading(true)
    // Simulating file upload and processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setUploading(false)
    setUploadComplete(true)
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-primary">Upload Hyperspectrometry Data</h2>
      <Card>
        <CardHeader>
          <CardTitle>Upload Soil Scan Data</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="flex items-center space-x-4">
              <Input type="file" onChange={handleFileChange} accept=".csv,.xlsx,.json" disabled={uploading} />
              <Button type="submit" disabled={!file || uploading}>
                {uploading ? "Uploading..." : "Upload and Analyze"}
              </Button>
            </div>
            {uploadComplete && (
              <div className="flex items-center text-green-500">
                <CheckCircle className="mr-2" />
                <span>Upload complete! Redirecting to analysis...</span>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

