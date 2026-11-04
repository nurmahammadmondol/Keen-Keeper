import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const TYPES = [
  { key: "Text", color: "#7c3aed" },
  { key: "Call", color: "#36a364" },
  { key: "Video", color: "#224d3f" },
];

export default function FriendshipAnalytics({ interactions = [] }) {
  const counts = TYPES.map(
    (t) => interactions.filter((i) => i.type === t.key).length,
  );

  const data = {
    labels: TYPES.map((t) => t.key),
    datasets: [
      {
        data: counts,
        backgroundColor: TYPES.map((t) => t.color),
        borderWidth: 0,
        borderRadius: 12, // rounded segment
        spacing: 6, // segment er majhe fanka
      },
    ],
  };

  const options = {
    cutout: "75%", // donut er moto patla ring
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 8,
          color: "#475569",
          padding: 18,
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: 20 }}>
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: 800,
          color: "#1e293b",
          marginBottom: "10px",
        }}
      >
        Friendship Analytics
      </h1>

      <div
        style={{
          background: "#fff",
          border: "1px solid #dbe3ee",
          borderRadius: 10,
          padding: 24,
        }}
      >
        <h2 style={{ fontSize: "1rem", fontWeight: 500, margin: "0 0 12px" }}>
          By Interaction Type
        </h2>
        {interactions.length === 0 ? (
          <p style={{ textAlign: "center", color: "#94a3b8" }}>
            No interactions yet
          </p>
        ) : (
          <div style={{ width: 280, margin: "0 auto" }}>
            <Doughnut data={data} options={options} />
          </div>
        )}
      </div>
    </div>
  );
}
