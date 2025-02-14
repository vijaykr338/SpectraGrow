import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Droplet, Sun, Sprout, Zap } from "lucide-react"

const recommendations = [
  {
    title: "Soil pH Adjustment",
    description:
      "Based on the spectral analysis, your soil pH is slightly acidic. Consider adding agricultural lime to raise the pH to the optimal range of 6.5-7.5 for most crops.",
    icon: Droplet,
  },
  {
    title: "Nitrogen Management",
    description:
      "The hyperspectral data indicates a moderate nitrogen deficiency. Apply a nitrogen-rich fertilizer or consider planting nitrogen-fixing cover crops like legumes.",
    icon: Leaf,
  },
  {
    title: "Phosphorus Enhancement",
    description:
      "Spectral signatures show adequate phosphorus levels. Maintain current phosphorus management practices and monitor levels in future scans.",
    icon: Sun,
  },
  {
    title: "Potassium Boosting",
    description:
      "Analysis reveals slightly low potassium levels. Apply a potassium-rich fertilizer or consider adding wood ash to the soil to improve potassium content.",
    icon: Sprout,
  },
  {
    title: "Organic Matter Improvement",
    description:
      "Spectral data suggests low organic matter content. Incorporate compost or plant cover crops to increase soil organic matter and improve overall soil health.",
    icon: Zap,
  },
]

export default function Recommendations() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-primary">AI-Powered Recommendations</h2>
      <p className="text-lg text-muted-foreground">
        Based on the hyperspectral analysis of your soil, our AI model has generated the following recommendations to
        optimize your soil health and crop yield:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recommendations.map((rec) => (
          <Card key={rec.title}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <rec.icon className="h-6 w-6 text-primary" />
                <span>{rec.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{rec.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

