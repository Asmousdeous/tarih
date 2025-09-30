import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import StructureCard from "@/components/StructureCard";

const Century19 = () => {
  const navigate = useNavigate();
  const [mapboxToken, setMapboxToken] = useState("");

  // Placeholder structures - user will add these manually
  const structures = [
    {
      name: "Çeşme 1",
      type: "Çeşme",
      description: "19. yüzyıldan kalma tarihi çeşme",
      coordinates: [28.9784, 41.0082] as [number, number],
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Cami 1",
      type: "İbadet Yeri",
      description: "19. yüzyıldan kalma tarihi cami",
      coordinates: [28.9750, 41.0100] as [number, number],
      imageUrl: "/placeholder.svg",
    },
    {
      name: "Han 1",
      type: "Han",
      description: "19. yüzyıldan kalma tarihi han",
      coordinates: [28.9800, 41.0050] as [number, number],
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2" />
          Ana Sayfaya Dön
        </Button>

        <h1 className="text-4xl font-bold mb-2 text-foreground">19. Yüzyıl</h1>
        <h2 className="text-2xl text-muted-foreground mb-8">Yüzyılın Yapıları</h2>

        <div className="mb-8 p-6 bg-card rounded-lg border">
          <Label htmlFor="mapbox-token" className="text-lg font-semibold mb-2 block">
            Mapbox Token (Harita görüntüleme için)
          </Label>
          <p className="text-sm text-muted-foreground mb-4">
            Haritaları görüntülemek için Mapbox token'ınızı girin. Token'ınızı{" "}
            <a
              href="https://mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>{" "}
            adresinden alabilirsiniz.
          </p>
          <Input
            id="mapbox-token"
            type="text"
            placeholder="pk.eyJ1Ijoi..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {structures.map((structure, index) => (
            <StructureCard
              key={index}
              name={structure.name}
              type={structure.type}
              description={structure.description}
              coordinates={structure.coordinates}
              imageUrl={structure.imageUrl}
              mapboxToken={mapboxToken}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Century19;
