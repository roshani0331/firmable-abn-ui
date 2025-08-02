import React from 'react';
import { MenuItem, Select, InputLabel, FormControl, Stack } from '@mui/material';

interface Props {
  filters: {
    state: string;
    entityType: string;
    status: string;
  };
  onChange: (key: keyof Props['filters'], value: string) => void;
  options: {
    states: string[];
    entityTypes: string[];
    statuses: string[];
  };
}

const Filters: React.FC<Props> = ({ filters, onChange, options }) => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
      <FormControl fullWidth>
        <InputLabel>State</InputLabel>
        <Select
          value={filters.state}
          label="State"
          onChange={(e) => onChange('state', e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          {options.states.map((s) => (
            <MenuItem key={s} value={s}>{s}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Entity Type</InputLabel>
        <Select
          value={filters.entityType}
          label="Entity Type"
          onChange={(e) => onChange('entityType', e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          {options.entityTypes.map((t) => (
            <MenuItem key={t} value={t}>{t}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          value={filters.status}
          label="Status"
          onChange={(e) => onChange('status', e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          {options.statuses.map((s) => (
            <MenuItem key={s} value={s}>{s}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default Filters;
