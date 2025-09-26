import { Button } from "./ui/button";

export default function Banner() {
  return (
    <div className="bg-blue-900 text-white py-2 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-sm">📞 8768546488 (11AM to 4PM)</span>
            <span className="text-sm">✉️ shreeagrasenmahav@yahoo.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              B.A.M. UG ADMISSION
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              M.S.O.U. PG ADMISSION
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
