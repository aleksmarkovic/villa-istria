import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

export const loadIcons = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  library.add(fas as any, far as any, fab as any);
};
