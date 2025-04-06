import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Fish, Mic, Camera } from "lucide-react";

export default function FishingAssistantApp() {
  return (
    <ScrollView className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <Text className="text-2xl font-bold text-center mb-4">Fishing Assistant</Text>
      
      {/* Weather & Ocean Data */}
      <Card className="mb-4">
        <CardContent>
          <Text className="text-lg font-semibold">🌊 Ocean Conditions</Text>
          <Text>🌡 SST: 29°C | 💨 Wind: 12 m/s | 🌿 Chlorophyll: 0.5 mg/m³</Text>
        </CardContent>
      </Card>
      
      {/* Fish Prediction */}
      <Card className="mb-4">
        <CardContent>
          <Text className="text-lg font-semibold">🐟 Fish Prediction</Text>
          <Text>📍 Best Fishing Spot: 15°N, 80°E</Text>
          <Text>⏰ Best Time: 4:00 AM - 6:00 AM</Text>
        </CardContent>
      </Card>
      
      {/* Route Optimization */}
      <Card className="mb-4">
        <CardContent>
          <Text className="text-lg font-semibold">🗺️ Optimal Route</Text>
          <Button className="mt-2">View on Map <MapPin size={16} /></Button>
        </CardContent>
      </Card>
      
      {/* Territorial Compliance */}
      <Card className="mb-4">
        <CardContent>
          <Text className="text-lg font-semibold">⚠️ Boundary Alert</Text>
          <Text>🛑 You are 2km from the international boundary.</Text>
        </CardContent>
      </Card>
      
      {/* Catch Monitoring */}
      <Card className="mb-4">
        <CardContent>
          <Text className="text-lg font-semibold">📸 Catch Monitoring</Text>
          <Button className="mt-2">Upload Image <Camera size={16} /></Button>
        </CardContent>
      </Card>
      
      {/* AI Voice Assistant */}
      <Card className="mb-4">
        <CardContent>
          <Text className="text-lg font-semibold">🎙️ Voice Assistant</Text>
          <Button className="mt-2">Ask Fishing Advice <Mic size={16} /></Button>
        </CardContent>
      </Card>
    </ScrollView>
  );
}
