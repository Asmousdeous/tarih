import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  const centuries = [
    { id: "17", title: "17. yüzyıl", path: "/17-yuzyil" },
    { id: "18", title: "18. yüzyıl", path: "/18-yuzyil" },
    { id: "19", title: "19. yüzyıl", path: "/19-yuzyil" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl font-bold text-center mb-4 text-foreground">
          Osmanlı Mimarisi
        </h1>
        <p className="text-xl text-center mb-12 text-muted-foreground">
          Yüzyıllar boyunca inşa edilen tarihi yapıları keşfedin
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {centuries.map((century) => (
            <Card
              key={century.id}
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              onClick={() => navigate(century.path)}
            >
              <CardContent className="flex items-center justify-center h-64">
                <h2 className="text-4xl font-bold text-foreground">
                  {century.title}
                </h2>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
