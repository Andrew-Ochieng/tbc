export const toastConfig = {
    position: "top-right",
    reverseOrder: false,
    gutter: 8,
    toastOptions: {
      // Default options for all toasts
      duration: 4000,
      style: {
        background: '#fff',
        color: '#333',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        borderRadius: '8px',
        padding: '8px 12px',
        fontSize: '14px',
        maxWidth: '350px',
      },
      // Customize different toast types
      success: {
        style: {
          background: '#f0fdf4',
          color: '#166534',
          borderLeft: '4px solid #22c55e',
        },
        iconTheme: {
          primary: '#22c55e',
          secondary: '#f0fdf4',
        },
      },
      error: {
        style: {
          background: '#fef2f2',
          color: '#991b1b',
          borderLeft: '4px solid #ef4444',
        },
        iconTheme: {
          primary: '#ef4444',
          secondary: '#fef2f2',
        },
      },
      loading: {
        style: {
          background: '#f3f4f6',
          color: '#374151',
          borderLeft: '4px solid #6b7280',
        },
      },
      // Add custom warning style
      warning: {
        style: {
          background: '#fffbeb',
          color: '#92400e',
          borderLeft: '4px solid #f59e0b',
        },
        iconTheme: {
          primary: '#f59e0b',
          secondary: '#fffbeb',
        }
      },
      // Add custom info style
      info: {
        style: {
          background: '#eff6ff',
          color: '#1e40af',
          borderLeft: '4px solid #3b82f6',
        },
        iconTheme: {
          primary: '#3b82f6',
          secondary: '#eff6ff',
        }
      }
    }
  };