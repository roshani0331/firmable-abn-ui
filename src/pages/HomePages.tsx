import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Container,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material';

import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';
import useMediaQuery from '@mui/material/useMediaQuery';
import BusinessCard from '../components/BusinessCard';
import BusinessTable from '../components/BusinessTable';
import BusinessModal from '../components/BusinessModel';

import { useDebounce } from '../hooks/useDebounce';
import { fetchBusinesses } from '../services/api';
import type { Business } from '../types/business';

const HomePage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(null);
  const [filters, setFilters] = useState({
    state: '',
    entityType: '',
    status: '',
  });

  const debouncedQuery = useDebounce(query, 300);
  const isMobile = useMediaQuery('(max-width:600px)');

  const { data = [], isLoading, error } = useQuery({
    queryKey: ['businesses', debouncedQuery],
    queryFn: () => fetchBusinesses(debouncedQuery),
  });

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredData = useMemo(() => {
    return data.filter((b: Business) => {
      return (
        (!filters.state || b.state === filters.state) &&
        (!filters.status || b.status === filters.status) &&
        (!filters.entityType || b.entityType === filters.entityType)
      );
    });
  }, [data, filters]);

  const unique = <T extends string>(arr: T[]) =>
    [...new Set(arr.filter(Boolean))].sort();

    return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        ABN Lookup
      </Typography>

      <SearchBar value={query} onChange={setQuery} />

      <Filters
        filters={filters}
        onChange={handleFilterChange}
        options={{
          states: unique(data.map((d) => d.state)),
          entityTypes: unique(data.map((d) => d.entityType)),
          statuses: unique(data.map((d) => d.status)),
        }}
      />

      {isLoading && <CircularProgress />}
      {error && <Typography color="error">Failed to load data</Typography>}

      {data && (
        isMobile ? (
          <Box>
            {filteredData.map((b) => (
              <BusinessCard
                key={b.abn}
                business={b}
                onClick={() => setSelectedBusiness(b)}
              />
            ))}
          </Box>
        ) : (
          <BusinessTable
            rows={filteredData}
            onRowClick={setSelectedBusiness}
          />
        )
      )}

      <BusinessModal
        open={!!selectedBusiness}
        data={selectedBusiness}
        onClose={() => setSelectedBusiness(null)}
      />

      {/* Dataset Source Footer */}
      <Typography
        variant="caption"
        align="center"
        sx={{ mt: 5, opacity: 0.6 }}
      >
        Dataset Source:{' '}
        <a
          href="https://data.gov.au/data/dataset/abn-bulk-extract"
          target="_blank"
          rel="noopener noreferrer"
        >
          ABN Bulk Extract – data.gov.au
        </a>
      </Typography>
    </Container>
  );
};

export default HomePage;
