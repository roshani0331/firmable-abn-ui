import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Stack } from '@mui/material';
import type { Business } from '../types/business';

const BusinessModal: React.FC<{ open: boolean; onClose: () => void; data: Business | null }> = ({
  open,
  onClose,
  data,
}) => {
  if (!data) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{data.entityName}</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={1}>
          <Typography>ABN: {data.abn}</Typography>
          <Typography>Status: {data.status}</Typography>
          <Typography>Entity Type: {data.entityType}</Typography>
          <Typography>State: {data.state}</Typography>
          <Typography>Postcode: {data.postcode}</Typography>
          <Typography>Registered On: {data.registrationDate}</Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default BusinessModal;
