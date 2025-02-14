"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from "recharts"

const soilData = [
  { name: "pH", value: 6.8, optimal: 7, min: 6, max: 8 },
  { name: "Nitrogen", value: 35, optimal: 40, min: 20, max: 60 },
  { name: "Phosphorus", value: 18, optimal: 20, min: 10, max: 30 },
  { name: "Potassium", value: 190, optimal: 180, min: 120, max: 240 },
]

const spectralData = [
  { wavelength: 400, reflectance: 0.2 },
  { wavelength: 500, reflectance: 0.3 },
  { wavelength: 600, reflectance: 0.4 },
  { wavelength: 700, reflectance: 0.6 },
  { wavelength: 800, reflectance: 0.8 },
  { wavelength: 900, reflectance: 0.7 },
  { wavelength: 1000, reflectance: 0.5 },
]

export default function Analysis() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-primary">AI-Powered Soil Analysis</h2>
      <Card>
        <CardHeader>
          <CardTitle>Nutrient Levels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={soilData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#2E8B57" name="Current Level" />
                <Bar dataKey="optimal" fill="#4CAF50" name="Optimal Level" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Spectral Signature</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={spectralData}>
                <XAxis dataKey="wavelength" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="reflectance" stroke="#FFA000" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {soilData.map((item) => (
          <Card key={item.name}>
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-muted-foreground">
                Optimal: {item.optimal}
                {item.name === "pH" ? "" : " ppm"}
              </p>
              <div className="mt-2">
                {item.value < item.min ? (
                  <span className="text-red-500">Below optimal range</span>
                ) : item.value > item.max ? (
                  <span className="text-yellow-500">Above optimal range</span>
                ) : (
                  <span className="text-green-500">Within optimal range</span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

