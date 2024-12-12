import { oneOf } from 'vue-types';

export const statusType = () => oneOf(['available', 'sold out', null] as const).isRequired;
