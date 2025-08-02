import React from 'react';
import { Card, CardContent, Typography, Chip, Stack } from '@mui/material';
import type { Business } from '../types/business';

const getStatusColor = (status: string) => {
  if (status.toLowerCase() === 'active') return 'success';
  if (status.toLowerCase() === 'cancelled') return 'error';
  return 'default';
};

interface Props {
  business: Business;
  onClick: () => void;
}

const BusinessCard: React.FC<Props> = ({ business, onClick }) => {
  return (
    <Card sx={{ mb: 2, boxShadow: 2, cursor: 'pointer' }} onClick={onClick}>
      <CardContent>
        <Typography variant="h6">{business.entityName}</Typography>
        <Typography variant="body2" sx={{ color: 'gray' }}>
          ABN: {business.abn}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap' }}>
          <Chip label={business.status} color={getStatusColor(business.status)} size="small" />
          <Chip label={business.entityType} size="small" />
          <Chip label={`${business.state}, ${business.postcode}`} size="small" />
          <Chip label={`Registered: ${business.registrationDate}`} size="small" />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;
