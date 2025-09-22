import { fileURLToPath } from 'url';
import { dirname } from 'path';

export function fileDirName(meta: any) {
  const __filename = fileURLToPath(meta.url);

  const __dirname = dirname(__filename);

  return { __dirname, __filename };
}

export const useErrorParser = (err: { message: string; status: number }) => {
  return {
    message: err.message ?? 'Internal Server Error',
    status: err?.status ?? 500,
    success: false,
  };
};
