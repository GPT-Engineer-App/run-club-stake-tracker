import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Members = () => {
  // Mock data for members
  const members = [
    { id: 1, name: "John Doe", totalDistance: 50, totalTime: "5h 30m", averagePace: "6:36 min/km" },
    { id: 2, name: "Jane Smith", totalDistance: 75, totalTime: "8h 15m", averagePace: "6:36 min/km" },
    { id: 3, name: "Bob Johnson", totalDistance: 30, totalTime: "3h 45m", averagePace: "7:30 min/km" },
    // Add more members as needed
  ];

  // Mock data for top-level aggregates
  const aggregates = {
    totalMembers: members.length,
    totalDistance: members.reduce((sum, member) => sum + member.totalDistance, 0),
    totalTime: "17h 30m", // This would need to be calculated properly in a real application
    averagePace: "6:54 min/km", // This would need to be calculated properly in a real application
  };

  const handleSlash = (memberId) => {
    console.log(`Slashing member with ID: ${memberId}`);
    // Implement slashing logic here
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Members</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Club Aggregates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>Total Members: {aggregates.totalMembers}</div>
            <div>Total Distance: {aggregates.totalDistance} km</div>
            <div>Total Time: {aggregates.totalTime}</div>
            <div>Average Pace: {aggregates.averagePace}</div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {members.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>Total Distance: {member.totalDistance} km</div>
                <div>Total Time: {member.totalTime}</div>
                <div>Average Pace: {member.averagePace}</div>
                <div>
                  <Button onClick={() => handleSlash(member.id)} variant="destructive">
                    Slash
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Members;