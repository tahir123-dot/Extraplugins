import React from "react";

const Download = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Downloads</h2>

      {/* Scrollable Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-sm text-gray-600">
              <th className="p-3 whitespace-nowrap">Product</th>
              <th className="p-3 whitespace-nowrap">Downloads remaining</th>
              <th className="p-3 whitespace-nowrap">Expires</th>
              <th className="p-3 whitespace-nowrap">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b text-sm">
              <td className="p-3 whitespace-nowrap">
                Lexicon PCM Total Bundle - MAC OS
              </td>
              <td className="p-3 whitespace-nowrap">∞</td>
              <td className="p-3 whitespace-nowrap">Never</td>
              <td className="p-3 whitespace-nowrap">
                <button className="bg-gray-200 rounded-full px-4 py-1 hover:bg-gray-300 text-sm whitespace-nowrap">
                  Click Here To Download
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Download;
