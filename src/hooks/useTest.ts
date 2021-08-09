import useSwr from 'swr';

export function useTest() {
  const { data } = useSwr('/reservation/customer/list?customer_id=1');
  return data;
}
