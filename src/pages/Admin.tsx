import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AdminStats } from "@/components/AdminStats";
import { Layout } from "@/components/Layout";

export default function Admin() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord Admin</h1>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Utilisateurs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono">1 342</div>
            <div className="text-sm text-muted-foreground">Total d'utilisateurs inscrits</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Livres</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono">8 423</div>
            <div className="text-sm text-muted-foreground">Livres dans la base</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-mono">24 198</div>
            <div className="text-sm text-muted-foreground">Likes + Commentaires</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activité récente</CardTitle>
        </CardHeader>
        <CardContent>
          <AdminStats />
        </CardContent>
      </Card>
    </div>
  );
}
