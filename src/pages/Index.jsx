import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to CSV Editor</h1>
      <p className="text-xl mb-8">Edit your CSV files with ease</p>
      <Link to="/csv-editor">
        <Button size="lg">
          Go to CSV Editor
        </Button>
      </Link>
    </div>
  );
};

export default Index;
