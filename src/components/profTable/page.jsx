import  { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";

function DemoPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-10">
      {data.length ? (
        <DataTable columns={columns} data={data} />
      ) : (
        <div>No data available.</div>
      )}
    </div>
  );
}

function getData() {
  return Promise.resolve([
    {
      id: "728ed52f",
      position: "Associate Professor",
      name: "Ajay Rana",
      email: "ajay57668@example.com",
      citations:50,
      publish:20,
      score:8,
    },
    {
      id: "456cd89d",
      position: "Professor",
      name: "Meena Singh",
      email: "meena.singh@example.com",
      citations: 200,
      publish: 40,
      score: 9.1,
    },
    {
      id: "789ef12a",
      position: "Assistant Professor",
      name: "Vikram Patel",
      email: "vikram.patel@example.com",
      citations: 75,
      publish: 15,
      score: 7.5,
    },
    {
      id: "321gh34b",
      position: "Professor",
      name: "Anjali Sharma",
      email: "anjali.sharma@example.com",
      citations: 250,
      publish: 50,
      score: 9.3,
    },
    {
      id: "654ij56c",
      position: "Associate Professor",
      name: "Suresh Mehta",
      email: "suresh.mehta@example.com",
      citations: 180,
      publish: 30,
      score: 8.2,
    },
    {
      id: "987kl78d",
      position: "Assistant Professor",
      name: "Priya Kaur",
      email: "priya.kaur@example.com",
      citations: 90,
      publish: 18,
      score: 7.6,
    },
    {
      id: "345mn90e",
      position: "Professor",
      name: "Sunil Reddy",
      email: "sunil.reddy@example.com",
      citations: 300,
      publish: 60,
      score: 9.5,
    },
    {
      id: "678op12f",
      position: "Assistant Professor",
      name: "Kiran Das",
      email: "kiran.das@example.com",
      citations: 55,
      publish: 10,
      score: 7.2,
    },
    {
      id: "901qr34g",
      position: "Associate Professor",
      name: "Lata Singh",
      email: "lata.singh@example.com",
      citations: 110,
      publish: 22,
      score: 8.0,
    },
    {
      id: "234st56h",
      position: "Professor",
      name: "Amit Joshi",
      email: "amit.joshi@example.com",
      citations: 270,
      publish: 55,
      score: 9.4,
    }
    // Add more items if needed
  ]);
}

export default DemoPage;
