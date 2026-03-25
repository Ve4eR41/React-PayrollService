import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { getStatusFetch } from '../utils/utils';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

const UNAUTHORIZED_STATUSES = [401, 403] ;

export const useAuthError = () => {
  const navigate = useNavigate();

  const handleAuthError = useCallback((error: FetchBaseQueryError | SerializedError | undefined) => {
    const status = getStatusFetch(error);
    
    if (UNAUTHORIZED_STATUSES.includes(status)) {
      navigate('outOfBounds');
      return true;
    }
    
    return false;
  }, [navigate]);

  return { handleAuthError };
};

