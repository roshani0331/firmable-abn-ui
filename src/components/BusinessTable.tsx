import React from 'react';
import type { Business } from '../types/business';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface Props {
  rows: Business[];
  onRowClick: (business: Business) => void;
}

const columns: GridColDef[] = [
  { field: 'abn', headerName: 'ABN', flex: 1 },
  { field: 'entityName', headerName: 'Entity Name', flex: 2 },
  { field: 'entityType', headerName: 'Entity Type', flex: 1.5 },
  { field: 'status', headerName: 'Status', flex: 1 },
  { field: 'state', headerName: 'State', width: 100 },
  { field: 'postcode', headerName: 'Postcode', width: 120 },
  { field: 'registrationDate', headerName: 'Registered On', width: 160 },
];

const BusinessTable: React.FC<Props> = ({ rows, onRowClick }) => {
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows.map((r, idx) => ({ id: idx, ...r }))}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } }
        }}
        pageSizeOptions={[10, 20, 50]}
        onRowClick={(params) => {
          const selected = rows.find(r => r.abn === params.row.abn);
          if (selected) onRowClick(selected);
        }}
      />
    </Box>
  );
};

export default BusinessTable;
