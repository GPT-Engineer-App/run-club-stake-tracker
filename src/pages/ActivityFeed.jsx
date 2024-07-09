import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ActivityFeed = () => {
  // Mock data for the activity feed
  const activities = [
    { id: 1, name: "John Doe", distance: 5, time: "30:00", pace: "6:00 min/km", date: "2023-03-15" },
    { id: 2, name: "Jane Smith", distance: 8, time: "45:00", pace: "5:37 min/km", date: "2023-03-14" },
    { id: 3, name: "Bob Johnson", distance: 3, time: "18:00", pace: "6:00 min/km", date: "2023-03-13" },
    // Add more activities as needed
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Activity Feed</h1>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <Card key={activity.id}>
            <CardHeader>
              <CardTitle>{activity.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <div>Distance: {activity.distance} km</div>
                <div>Time: {activity.time}</div>
                <div>Pace: {activity.pace}</div>
                <div>Date: {activity.date}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;