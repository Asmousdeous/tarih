import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface StructureCardProps {
  name: string;
  type: string;
  description: string;
  coordinates: [number, number]; // [longitude, latitude]
  imageUrl?: string;
  mapboxToken?: string;
}

const StructureCard = ({ name, type, description, coordinates, imageUrl, mapboxToken }: StructureCardProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: coordinates,
      zoom: 14,
    });

    new mapboxgl.Marker({ color: "#8B4513" })
      .setLngLat(coordinates)
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [coordinates, mapboxToken]);

  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{type}</CardDescription>
          </CardHeader>
          <CardContent>
            {imageUrl && (
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            )}
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-96 p-0" side="right">
        <div ref={mapContainer} className="w-full h-64 rounded-lg" />
        {!mapboxToken && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/90 rounded-lg">
            <p className="text-sm text-center px-4">
              Harita görüntülemek için Mapbox token gerekli
            </p>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default StructureCard;
