// Example component: FilterDropdowns.jsx
import React from 'react';
import useFilterStore from '../store/useFilterStore';

const STATES = ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Delhi'];
const FIELDS = ['Engineering', 'Medicine', 'Arts', 'Science'];
const COLLEGES = ['IIT Bombay', 'IIT Delhi', 'IIT Madras', 'IIT Kanpur'];

const FilterDropdowns = () => {
  const {
    state,
    field,
    college,
    setState,
    setField,
    setCollege,
  } = useFilterStore();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter Alumni</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
        <select
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">Select State</option>
          {STATES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Field</label>
        <select
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={field}
          onChange={(e) => setField(e.target.value)}
        >
          <option value="">Select Field</option>
          {FIELDS.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">College</label>
        <select
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
        >
          <option value="">Select College</option>
          {COLLEGES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="text-gray-600 text-sm">
        <div>Selected State: <span className="font-semibold">{state || '-'}</span></div>
        <div>Selected Field: <span className="font-semibold">{field || '-'}</span></div>
        <div>Selected College: <span className="font-semibold">{college || '-'}</span></div>
      </div>
    </div>
  );
};

export default FilterDropdowns;