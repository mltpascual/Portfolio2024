import { Card, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";
import skillsData from "@/data/skills.json";
import { skillsSchema } from "@/lib/schemas";

export default function Skills() {
  const skills = skillsSchema.parse(skillsData).skills;

  return (
    <Card>
      <CardContent className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2">
        {skills.map((category) => (
          <div key={category.name}>
            <h3 className="mb-3 font-semibold">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 