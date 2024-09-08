import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Access locale cookie
  const cookieStore = cookies();
  const locale = cookieStore.get('locale')?.value || 'id'; // default to 'id'

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
