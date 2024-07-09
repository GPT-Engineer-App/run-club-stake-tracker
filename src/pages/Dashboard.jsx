import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  // Mock data for the dashboard
  const stakingInfo = {
    amountStaked: 100,
    interestRate: 7,
    interestEarned: 2.5,
    potentialRewards: 15,
  };

  const topLevelMetrics = {
    distance: 25,
    time: "3h 30m",
    averagePace: "8:24 min/km",
  };

  const activityData = [
    { day: "Mon", distance: 5 },
    { day: "Tue", distance: 3 },
    { day: "Wed", distance: 7 },
    { day: "Thu", distance: 2 },
    { day: "Fri", distance: 6 },
    { day: "Sat", distance: 8 },
    { day: "Sun", distance: 4 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StakingCard title="Amount Staked" value={`$${stakingInfo.amountStaked}`} />
        <StakingCard title="Interest Rate" value={`${stakingInfo.interestRate}%`} />
        <StakingCard title="Interest Earned" value={`$${stakingInfo.interestEarned}`} />
        <StakingCard title="Potential Rewards" value={`$${stakingInfo.potentialRewards}`} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard title="Distance" value={`${topLevelMetrics.distance} km`} />
        <MetricCard title="Time" value={topLevelMetrics.time} />
        <MetricCard title="Average Pace" value={topLevelMetrics.averagePace} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Activity (Last 7 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between h-64">
            {activityData.map((data, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="bg-purple-600 w-8" 
                  style={{height: `${data.distance * 10}%`}}
                ></div>
                <span className="mt-2 text-sm">{data.day}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const StakingCard = ({ title, value }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

const MetricCard = ({ title, value }) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
);

export default Dashboard;