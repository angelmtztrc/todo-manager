import { useEffect, useState } from 'react';

export interface Alert {
  content: string;
  type: 'error' | 'success';
}

const useAlert = () => {
  const [alert, setAlert] = useState<Alert | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (alert) {
        setAlert(null);
      }
    }, 5000);
  }, [alert]);

  const Component = () => (
    <div
      className={`
      ${alert?.type === 'error' ? 'bg-red-600' : 'bg-green-500'}
    fixed right-0 top-0 px-6 py-3 rounded mt-5 mr-5`}
    >
      <p className="text-gray-100 text-lg font-bold">{alert?.content}</p>
    </div>
  );

  return [alert, setAlert, Component] as const;
};

export default useAlert;
