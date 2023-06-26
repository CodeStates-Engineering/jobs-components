import { useMemo } from 'react';

import { createValidationStore } from '../../utils';

/**
 * @deprecated validationObserver를 사용해주세요.
 */
export const useValidationStore = () => useMemo(createValidationStore, []);
